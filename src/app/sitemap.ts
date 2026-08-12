import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/servicesData";

const BASE_URL = "https://suchgroupecommerce.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/estimator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/montana-tax-free-3pl`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic service detail pages
  const serviceRoutes: MetadataRoute.Sitemap = [];
  for (const [category, services] of Object.entries(SERVICES_DATA)) {
    for (const slug of Object.keys(services)) {
      serviceRoutes.push({
        url: `${BASE_URL}/services/${category}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...serviceRoutes];
}
