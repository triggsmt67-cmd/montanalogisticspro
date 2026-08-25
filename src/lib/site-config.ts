/**
 * Central Site Configuration for Such Group E-Commerce
 * Single source of truth for company identity, metadata, and public business details.
 */

export interface SiteConfig {
  brandName: string;
  legalCompanyName?: string;
  domain: string;
  foundingDate?: string;
  publicEmail?: string;
  supportEmail?: string;
  phone?: string;
  address: {
    street?: string;
    city: string;
    state: string;
    postalCode?: string;
    country: string;
  };
  businessHours?: string;
  logoUrl: string;
  socialImageUrl: string;
  defaultDescription: string;
  socialProfiles: {
    googleBusinessUrl?: string;
    linkedinUrl?: string;
    facebookUrl?: string;
    otherUrls?: string[];
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "Such Group E-Commerce",
  legalCompanyName: undefined, // To be supplied when registered
  domain: "https://suchgroupecommerce.com",
  foundingDate: undefined, // To be supplied
  publicEmail: undefined, // To be supplied
  supportEmail: undefined,
  phone: undefined,
  address: {
    city: "Great Falls",
    state: "MT",
    country: "US",
  },
  businessHours: undefined,
  logoUrl: "https://suchgroupecommerce.com/icon.png",
  socialImageUrl: "https://suchgroupecommerce.com/icon.png",
  defaultDescription:
    "Tax-free Amazon FBA prep, DTC eCommerce fulfillment, and wholesale inventory storage based in Great Falls, Montana.",
  socialProfiles: {},
};
