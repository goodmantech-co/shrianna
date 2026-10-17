import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shriannafederation.in";

// The shop is hidden for now, so /shop and the product pages are left out of
// the sitemap and carry `robots: noindex`. To bring the shop back, restore the
// "/shop" entry and the productRoutes block below, and drop the `robots` key
// from app/shop/page.tsx and app/shop/[slug]/page.tsx.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/activities",
    "/farmers",
    "/gallery",
    "/impact",
    "/recipes",
    "/news",
    "/tenders",
    "/contact",
    "/bulk-enquiry",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return routes;
}
