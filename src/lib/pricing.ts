/**
 * Owner-confirmed public pricing.
 *
 * These rates are business-provided operating information, not independently
 * audited facts. Keep this module as the source of truth for public rate cards
 * and calculators. Custom packaging, unusual handling, and out-of-scope work
 * require a written quote before work begins.
 */

export const PRICING_LAST_CONFIRMED = "August 25, 2026";

export const FBA_PRICING_TIERS = [
  { min: 1, max: 500, label: "1–500 units", rate: 1.45 },
  { min: 501, max: 1_000, label: "501–1,000 units", rate: 1.35 },
  { min: 1_001, max: 2_000, label: "1,001–2,000 units", rate: 1.25 },
  { min: 2_001, max: 5_000, label: "2,001–5,000 units", rate: 1.15 },
  { min: 5_001, max: 10_000, label: "5,001–10,000 units", rate: 1.0 },
] as const;

export const WHOLESALE_PRICING_TIERS = [
  { min: 300, max: 2_500, label: "300–2,500 units", rate: 1.15 },
  { min: 2_501, max: 5_000, label: "2,501–5,000 units", rate: 1.0 },
  { min: 5_001, max: 10_000, label: "5,001–10,000 units", rate: 0.9 },
] as const;

export const ECOMMERCE_PRICING_TIERS = [
  {
    min: 1,
    max: 500,
    label: "1–500 monthly orders",
    orderRate: 2.5,
    itemRate: 0.5,
  },
  {
    min: 501,
    max: 1_000,
    label: "501–1,000 monthly orders",
    orderRate: 2.25,
    itemRate: 0.4,
  },
  {
    min: 1_001,
    max: 2_500,
    label: "1,001–2,500 monthly orders",
    orderRate: 2.0,
    itemRate: 0.3,
  },
] as const;

export const STANDARD_PREP_INCLUSIONS = [
  "Receiving",
  "Product inspection",
  "Damage photos and client notification when damage is found",
  "FNSKU labeling",
  "Barcode coverage",
  "Price-tag and sticker removal",
  "Standard poly bagging",
  "Suffocation-warning labels when required",
  "Standard product securing, taping, and inserts",
  "Dunnage",
  "Expiration labels when required",
  "Printing and applying the outbound shipping label",
  "Reused boxes when a suitable box is available",
] as const;

export const ADDITIONAL_FEES = [
  {
    name: "Returns",
    price: "$1.00 per returned item",
    note: "Added to the applicable standard per-item fee.",
  },
  {
    name: "Oversized items",
    price: "$1.00 for 17–29 in.; $2.25 for 30–40 in.",
    note: "Measured by the item’s longest side. Larger or unusually handled items require a quote.",
  },
  {
    name: "Bubble wrap",
    price: "$0.50 for the first sheet; $0.50 for each additional sheet",
    note: "Charged when bubble wrap is required.",
  },
  {
    name: "Bundling",
    price: "$0.50 for a bundle of up to 3 items",
    note: "$0.15 for each item above three.",
  },
  {
    name: "Special handling labels",
    price: "$0.15 per label",
    note: "Applies to ‘Sold as Set’ and ‘Single Item Enclosed—Do Not Open’ labels.",
  },
  {
    name: "Shoe-box replacement",
    price: "$3.50 each",
    note: "When replacement is required.",
  },
  {
    name: "Amazon-approval photos",
    price: "$3.00 per photo",
    note: "Only when requested or required outside standard damage documentation.",
  },
  {
    name: "Inventory restocking",
    price: "$3.00 per restock",
    note: "Applies when restocking work is requested.",
  },
] as const;

export const STORAGE_PRICING = [
  { period: "First 14 days", rate: "Free" },
  { period: "Days 15–180", rate: "$2.40 per cubic foot" },
  { period: "Day 181 and after", rate: "$3.60 per cubic foot" },
  {
    period: "October 1–December 31",
    rate: "$4.80 per cubic foot during Q4",
  },
] as const;

export const CARTON_FORWARDING_PRICING = [
  { name: "Box receiving", rate: "$1.50 per box" },
  { name: "Pallet receiving", rate: "$18.00 per pallet" },
  { name: "Unload 20-foot container", rate: "$275.00" },
  { name: "Unload 40-foot container", rate: "$550.00" },
  { name: "Palletization", rate: "$20.00 per pallet" },
  { name: "Carton forwarding", rate: "$4.00 per carton" },
  { name: "Pallet forwarding", rate: "$20.00 per pallet" },
] as const;

export function getFbaRate(units: number): number | null {
  return FBA_PRICING_TIERS.find(
    (tier) => units >= tier.min && units <= tier.max,
  )?.rate ?? null;
}

export function getWholesaleRate(units: number): number | null {
  return WHOLESALE_PRICING_TIERS.find(
    (tier) => units >= tier.min && units <= tier.max,
  )?.rate ?? null;
}

export function getEcommerceRates(
  orders: number,
): { order: number; item: number } | null {
  const tier = ECOMMERCE_PRICING_TIERS.find(
    (candidate) => orders >= candidate.min && orders <= candidate.max,
  );

  return tier ? { order: tier.orderRate, item: tier.itemRate } : null;
}

export function getStorageRate(days: number, isQ4: boolean): number {
  if (days <= 14) return 0;
  if (isQ4) return 4.8;
  if (days >= 181) return 3.6;
  return 2.4;
}
