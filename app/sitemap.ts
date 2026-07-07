import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.shriannafederation.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/activities",
    "/shop",
    "/farmers",
    "/gallery",
    "/impact",
    "/recipes",
    "/news",
    "/contact",
    "/bulk-enquiry",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products
    .filter((p) => !p.hidden)
    .map((p) => ({
      url: `${base}/shop/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [...routes, ...productRoutes];
}
