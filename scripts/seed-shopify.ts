/**
 * One-time seed: create the Narmada Millets catalogue in Shopify from
 * lib/products.ts, via the Admin GraphQL API.
 *
 * Run:  npx tsx scripts/seed-shopify.ts
 *
 * - Idempotent: skips products whose handle already exists.
 * - Pack sizes -> variants (price + compareAtPrice = MRP), inventory untracked
 *   so nothing shows out of stock on the demo.
 * - Images: local /products/*.jpeg uploaded via staged upload; remote URLs
 *   passed straight through for Shopify to ingest.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { products, categoryOptions } from "../lib/products";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// --- env ---------------------------------------------------------------------
function loadEnv() {
  const env: Record<string, string> = {};
  const raw = readFileSync(join(ROOT, ".env.local"), "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}
const env = loadEnv();
const DOMAIN = env.SHOPIFY_STORE_DOMAIN;
const API_VERSION = env.SHOPIFY_API_VERSION || "2025-01";

// --- admin client ------------------------------------------------------------
let token = "";
async function getToken() {
  if (token) return token;
  const res = await fetch(`https://${DOMAIN}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: env.SHOPIFY_CLIENT_ID,
      client_secret: env.SHOPIFY_CLIENT_SECRET,
    }),
  });
  if (!res.ok) throw new Error(`token ${res.status}: ${await res.text()}`);
  token = (await res.json()).access_token;
  return token;
}

async function gql<T = any>(query: string, variables?: any): Promise<T> {
  const t = await getToken();
  const res = await fetch(
    `https://${DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": t,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
  const json = await res.json();
  if (json.errors) throw new Error(`gql: ${JSON.stringify(json.errors)}`);
  return json.data;
}

// --- helpers -----------------------------------------------------------------
const productTypeFor = (cat: string) =>
  categoryOptions.find((c) => c.value === cat)?.label ?? cat;

async function existingHandles(): Promise<Set<string>> {
  const set = new Set<string>();
  let cursor: string | null = null;
  do {
    const data: any = await gql(
      `query($cursor: String) {
        products(first: 100, after: $cursor) {
          edges { node { handle } cursor }
          pageInfo { hasNextPage }
        }
      }`,
      { cursor }
    );
    for (const e of data.products.edges) set.add(e.node.handle);
    cursor = data.products.pageInfo.hasNextPage
      ? data.products.edges.at(-1).cursor
      : null;
  } while (cursor);
  return set;
}

const MIME = (path: string) =>
  path.endsWith(".png")
    ? "image/png"
    : path.endsWith(".webp")
      ? "image/webp"
      : "image/jpeg";

/** Returns an originalSource URL Shopify can ingest (remote URL, or staged resource). */
async function resolveImageSource(src: string, alt: string): Promise<string> {
  if (/^https?:\/\//.test(src)) return src; // remote — Shopify fetches it

  // local /products/x.jpeg -> staged upload
  const filePath = join(ROOT, "public", src.replace(/^\//, ""));
  const bytes = readFileSync(filePath);
  const filename = src.split("/").pop()!;
  const mimeType = MIME(filename);

  const staged: any = await gql(
    `mutation($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets { url resourceUrl parameters { name value } }
        userErrors { field message }
      }
    }`,
    {
      input: [
        {
          filename,
          mimeType,
          resource: "IMAGE",
          httpMethod: "POST",
          fileSize: String(bytes.length),
        },
      ],
    }
  );
  const errs = staged.stagedUploadsCreate.userErrors;
  if (errs?.length) throw new Error(`staged upload: ${JSON.stringify(errs)}`);
  const target = staged.stagedUploadsCreate.stagedTargets[0];

  const form = new FormData();
  for (const p of target.parameters) form.append(p.name, p.value);
  form.append("file", new Blob([bytes], { type: mimeType }), filename);

  const up = await fetch(target.url, { method: "POST", body: form });
  if (!up.ok) throw new Error(`upload ${up.status}: ${await up.text()}`);

  return target.resourceUrl;
}

// --- seed --------------------------------------------------------------------
async function run() {
  console.log(`→ Seeding ${products.length} products into ${DOMAIN}\n`);
  const have = await existingHandles();
  let created = 0;
  let skipped = 0;

  for (const p of products) {
    if (have.has(p.slug)) {
      console.log(`· skip   ${p.slug} (already exists)`);
      skipped++;
      continue;
    }

    // images first (so we can attach in one productSet call)
    const files: { originalSource: string; contentType: string; alt: string }[] =
      [];
    for (const img of p.gallery.length ? p.gallery : [p.hero]) {
      try {
        const originalSource = await resolveImageSource(img, p.name);
        files.push({ originalSource, contentType: "IMAGE", alt: p.name });
      } catch (e) {
        console.warn(`  ! image failed for ${p.slug}: ${(e as Error).message}`);
      }
    }

    const tags = Array.from(
      new Set([
        "Narmada Millets",
        p.millet,
        productTypeFor(p.category),
        ...p.dietary,
        ...(p.badges ?? []),
      ])
    );

    const input = {
      handle: p.slug,
      title: p.name,
      descriptionHtml: `<p>${p.description}</p>`,
      vendor: "Narmada Millets",
      productType: productTypeFor(p.category),
      status: "ACTIVE",
      tags,
      productOptions: [
        {
          name: "Pack size",
          values: p.packSizes.map((s) => ({ name: s.weight })),
        },
      ],
      variants: p.packSizes.map((s) => ({
        optionValues: [{ optionName: "Pack size", name: s.weight }],
        price: String(s.price),
        ...(s.mrp ? { compareAtPrice: String(s.mrp) } : {}),
        inventoryItem: { tracked: false, sku: `${p.slug}-${s.weight}` },
      })),
      files,
    };

    const data: any = await gql(
      `mutation($input: ProductSetInput!) {
        productSet(synchronous: true, input: $input) {
          product { id handle variants(first: 10) { edges { node { id } } } }
          userErrors { field message }
        }
      }`,
      { input }
    );

    const ue = data.productSet.userErrors;
    if (ue?.length) {
      console.error(`✗ ${p.slug}: ${JSON.stringify(ue)}`);
      continue;
    }
    console.log(
      `✓ create ${p.slug}  (${p.packSizes.length} variants, ${files.length} images)`
    );
    created++;
  }

  console.log(`\nDone — ${created} created, ${skipped} skipped.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
