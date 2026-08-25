import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suchgroupecommerce.com';
  const lastContentUpdate = new Date('2026-08-25T00:00:00.000Z');

  return [
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/tax-free-amazon-fba-prep`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/dtc-ecommerce-fulfillment`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/wholesale-inventory-storage`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estimator`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/montana-tax-free-3pl`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/montana-tax-savings-calculator`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tax-savings/california-to-montana-3pl`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tax-savings/washington-to-montana-3pl`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tax-savings/texas-to-montana-3pl`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tax-savings/new-york-to-montana-3pl`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
