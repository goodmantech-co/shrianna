/**
 * Quick connectivity check for the Shopify Admin API.
 * Run:  node scripts/shopify-ping.mjs
 * Loads credentials from .env.local, fetches a token, and queries the shop.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- minimal .env.local loader ------------------------------------------------
function loadEnv() {
  const env = {};
  try {
    const raw = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    /* ignore */
  }
  return env;
}

const env = loadEnv();
const DOMAIN = env.SHOPIFY_STORE_DOMAIN;
const CLIENT_ID = env.SHOPIFY_CLIENT_ID;
const CLIENT_SECRET = env.SHOPIFY_CLIENT_SECRET;
const API_VERSION = env.SHOPIFY_API_VERSION || "2025-01";

if (!DOMAIN || !CLIENT_ID || !CLIENT_SECRET || CLIENT_ID.startsWith("PASTE")) {
  console.error("✗ Missing creds in .env.local (domain / client id / secret).");
  process.exit(1);
}

console.log(`→ Store: ${DOMAIN}`);
console.log("→ Requesting Admin API token (client_credentials)…");

const tokenRes = await fetch(`https://${DOMAIN}/admin/oauth/access_token`, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }),
});

if (!tokenRes.ok) {
  console.error(`✗ Token request failed (${tokenRes.status}):`);
  console.error(await tokenRes.text());
  process.exit(1);
}

const { access_token, scope, expires_in } = await tokenRes.json();
console.log(`✓ Token acquired (valid ${Math.round(expires_in / 3600)}h)`);
console.log(`  scopes: ${(scope || "").split(",").length} granted`);

const query = `{
  shop { name myshopifyDomain currencyCode plan { displayName } }
  products(first: 1) { edges { node { id } } }
  productsCount: products { }
}`;

const gqlRes = await fetch(
  `https://${DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": access_token,
    },
    body: JSON.stringify({
      query: `{
        shop { name myshopifyDomain currencyCode plan { displayName } }
        products(first: 100) { edges { node { id } } }
      }`,
    }),
  }
);

const json = await gqlRes.json();
if (json.errors) {
  console.error("✗ GraphQL error:", JSON.stringify(json.errors, null, 2));
  process.exit(1);
}

const shop = json.data.shop;
const count = json.data.products.edges.length;
console.log("✓ Connected to Shopify Admin API");
console.log(`  Shop:     ${shop.name}`);
console.log(`  Domain:   ${shop.myshopifyDomain}`);
console.log(`  Plan:     ${shop.plan.displayName}`);
console.log(`  Currency: ${shop.currencyCode}`);
console.log(`  Products: ${count}${count === 100 ? "+" : ""} currently in store`);
