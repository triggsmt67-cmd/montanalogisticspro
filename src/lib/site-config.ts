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
  areaServed: string;
  facilityAccessNote: string;
  logoUrl: string;
  socialImageUrl: string;
  defaultDescription: string;
  socialProfiles: {
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
  areaServed: "United States",
  facilityAccessNote:
    "Inventory receiving facility. Not open for walk-in customer service. Shipments are accepted for approved clients only.",
  logoUrl: "https://suchgroupecommerce.com/icon.png",
  socialImageUrl: "https://suchgroupecommerce.com/icon.png",
  defaultDescription:
    "Nationwide Amazon FBA prep, DTC eCommerce fulfillment, and wholesale inventory storage operated from Great Falls, Montana.",
  socialProfiles: {},
};
