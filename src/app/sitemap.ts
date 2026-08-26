import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suchgroupecommerce.com';

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/services/tax-free-amazon-fba-prep`,
    },
    {
      url: `${baseUrl}/services/dtc-ecommerce-fulfillment`,
    },
    {
      url: `${baseUrl}/services/wholesale-inventory-storage`,
    },
    {
      url: `${baseUrl}/estimator`,
    },
    {
      url: `${baseUrl}/montana-tax-free-3pl`,
    },
    {
      url: `${baseUrl}/montana-tax-savings-calculator`,
    },
    {
      url: `${baseUrl}/tax-savings/california-to-montana-3pl`,
    },
    {
      url: `${baseUrl}/tax-savings/washington-to-montana-3pl`,
    },
    {
      url: `${baseUrl}/tax-savings/texas-to-montana-3pl`,
    },
    {
      url: `${baseUrl}/tax-savings/new-york-to-montana-3pl`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/privacy-policy`,
    },
  ];
}
