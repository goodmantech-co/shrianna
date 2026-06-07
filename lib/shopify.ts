/**
 * Shopify Admin API client (server-side only).
 *
 * Uses the Dev Dashboard app's client_credentials grant:
 *   POST https://{shop}/admin/oauth/access_token
 *     grant_type=client_credentials&client_id=…&client_secret=…
 *   -> { access_token, scope, expires_in }   (token valid ~24h)
 *
 * The token is cached in-memory and refreshed 60s before expiry.
 * NEVER import this into a Client Component — the secret must stay on the server.
 */

const DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SHOPIFY_CLIENT_SECRET;
const API_VERSION = process.env.SHOPIFY_API_VERSION || "2025-01";

export function shopifyConfigured(): boolean {
  return Boolean(
    DOMAIN &&
      CLIENT_ID &&
      CLIENT_SECRET &&
      CLIENT_ID !== "PASTE_CLIENT_ID_HERE" &&
      CLIENT_SECRET !== "PASTE_CLIENT_SECRET_HERE"
  );
}

let cached: { token: string; expiresAt: number } | null = null;

export async function getAdminToken(): Promise<string> {
  if (!shopifyConfigured()) {
    throw new Error(
      "Shopify is not configured — set SHOPIFY_STORE_DOMAIN, SHOPIFY_CLIENT_ID and SHOPIFY_CLIENT_SECRET in .env.local"
    );
  }
  if (cached && Date.now() < cached.expiresAt - 60_000) return cached.token;

  const res = await fetch(`https://${DOMAIN}/admin/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID!,
      client_secret: CLIENT_SECRET!,
    }),
  });

  if (!res.ok) {
    throw new Error(
      `Shopify token request failed (${res.status}): ${await res.text()}`
    );
  }

  const data = (await res.json()) as { access_token: string; expires_in: number };
  cached = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cached.token;
}

export async function adminGraphQL<T = unknown>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const token = await getAdminToken();
  const res = await fetch(
    `https://${DOMAIN}/admin/api/${API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      // Catalog reads can be cached briefly; callers may override.
      cache: "no-store",
    }
  );

  const json = (await res.json()) as {
    data?: T;
    errors?: unknown;
  };

  if (json.errors) {
    throw new Error(`Shopify GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}

export const shopifyDomain = DOMAIN;
export const shopifyApiVersion = API_VERSION;
