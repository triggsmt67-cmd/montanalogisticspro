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
  legalCompanyName: "Such Group International Inc.",
  domain: "https://suchgroupecommerce.com",
  foundingDate: undefined, // To be supplied
  publicEmail: "ecommerce@sgigf.com",
  supportEmail: "ecommerce@sgigf.com",
  phone: "+1-406-788-1614",
  address: {
    street: "601 6th St SW",
    city: "Great Falls",
    state: "MT",
    postalCode: "59404",
    country: "US",
  },
  areaServed: "United States",
  facilityAccessNote:
    "Inventory receiving facility. Not open for walk-in customer service. Shipments are accepted for approved clients only.",
  logoUrl: "https://suchgroupecommerce.com/icon.png",
  socialImageUrl: "https://suchgroupecommerce.com/og-image.png",
  defaultDescription:
    "Nationwide Amazon FBA prep, DTC eCommerce fulfillment, and wholesale inventory storage operated from Great Falls, Montana.",
  socialProfiles: {},
};
