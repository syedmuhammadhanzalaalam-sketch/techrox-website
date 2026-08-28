import type { MetadataRoute } from "next";
import { services, products } from "@/lib/site-content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/products`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/careers`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes];
}