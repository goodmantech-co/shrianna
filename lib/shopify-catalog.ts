import { adminGraphQL } from "./shopify";

/**
 * Maps our (slug, pack-size) cart lines to Shopify variant IDs, so we can
 * create a real draft order / checkout. Cached in-memory for 5 minutes.
 * Server-only — only import from route handlers / server components.
 */

type VariantInfo = { id: string; price: string; availableForSale: boolean };

interface ProductsPage {
  products: {
    edges: {
      cursor: string;
      node: {
        handle: string;
        variants: {
          nodes: {
            id: string;
            price: string;
            availableForSale: boolean;
            selectedOptions: { name: string; value: string }[];
          }[];
        };
      };
    }[];
    pageInfo: { hasNextPage: boolean };
  };
}

let cache: { map: Map<string, VariantInfo>; at: number } | null = null;
const TTL = 5 * 60 * 1000;

const key = (handle: string, weight: string) =>
  `${handle}::${weight.toLowerCase()}`;

async function buildMap(): Promise<Map<string, VariantInfo>> {
  const map = new Map<string, VariantInfo>();
  let cursor: string | null = null;

  do {
    const data: ProductsPage = await adminGraphQL<ProductsPage>(
      `query($cursor: String) {
        products(first: 100, after: $cursor) {
          edges {
            cursor
            node {
              handle
              variants(first: 20) {
                nodes {
                  id
                  price
                  availableForSale
                  selectedOptions { name value }
                }
              }
            }
          }
          pageInfo { hasNextPage }
        }
      }`,
      { cursor }
    );

    for (const edge of data.products.edges) {
      const handle = edge.node.handle;
      for (const v of edge.node.variants.nodes) {
        const weight = v.selectedOptions[0]?.value ?? "";
        map.set(key(handle, weight), {
          id: v.id,
          price: v.price,
          availableForSale: v.availableForSale,
        });
      }
    }

    const last = data.products.edges.at(-1);
    cursor = data.products.pageInfo.hasNextPage && last ? last.cursor : null;
  } while (cursor);

  return map;
}

async function getMap(): Promise<Map<string, VariantInfo>> {
  if (cache && Date.now() - cache.at < TTL) return cache.map;
  const map = await buildMap();
  cache = { map, at: Date.now() };
  return map;
}

export async function resolveVariant(
  slug: string,
  weight: string
): Promise<VariantInfo | undefined> {
  const map = await getMap();
  return map.get(key(slug, weight));
}
