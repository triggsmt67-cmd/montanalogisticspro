export const dynamic = 'force-static';

export async function GET() {
  const content = `# Such Group E-commerce
> We provide nationwide Amazon FBA prep, DTC fulfillment, and B2B wholesale storage from Great Falls, Montana. Montana has no general statewide sales tax; client tax treatment varies by transaction and business.

## Core Services
- [Amazon FBA Prep](https://suchgroupecommerce.com/services/tax-free-amazon-fba-prep): Receiving, inspection, FNSKU labeling, standard packaging, dunnage, and shipping-label application. Qualifying purchases delivered to Montana may be billed without state sales tax; treatment varies.
- [DTC E-Commerce Fulfillment](https://suchgroupecommerce.com/services/dtc-ecommerce-fulfillment): Published per-order and per-item fulfillment pricing. Storefront, carrier, reporting, and dispatch workflows are confirmed during onboarding.
- [Wholesale Inventory Storage](https://suchgroupecommerce.com/services/wholesale-inventory-storage): Wholesale prep, carton and pallet receiving, container unloading, storage, palletization, and forwarding. Tax and filing treatment depends on the client and jurisdictions involved.

## Resources
- [Published Pricing and Policies](https://suchgroupecommerce.com/pricing)
- [Master 3PL Pillar Guide](https://suchgroupecommerce.com/montana-tax-free-3pl)
- [Tax Savings Calculator](https://suchgroupecommerce.com/montana-tax-savings-calculator)
- [FBA Prep Cost Estimator](https://suchgroupecommerce.com/estimator)
- [About Such Group E-Commerce](https://suchgroupecommerce.com/about)
- [Contact Us](https://suchgroupecommerce.com/contact)

## Business Contact
- Address: 5311 13th Street South, Great Falls, Montana 59405, United States. Inventory receiving for approved clients only; no walk-in customer service.
- Phone: +1 406-781-1759
- Email: support@suchgroupecommerce.com

## Important Qualification
- Such Group E-Commerce provides logistics services, not legal, tax, accounting, or financial advice.
- Calculators and state comparison pages are planning illustrations, not quotes or guaranteed tax savings.
- Postage and freight are the seller's responsibility. Published storage, packaging, return, oversize, forwarding, and other add-on rates may apply.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
