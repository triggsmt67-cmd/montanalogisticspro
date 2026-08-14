export const dynamic = 'force-static';

export async function GET() {
  const content = `# Such Group E-commerce
> We provide tax-free 3PL logistics, Amazon FBA prep, DTC fulfillment, and B2B wholesale storage out of Great Falls, Montana.

## Core Services
- [Tax-Free Amazon FBA Prep](https://suchgroupecommerce.com/services/tax-free-amazon-fba-prep): Avoid retail checkout tax on online sourcing with our flat-rate $1.45 FBA prep. Strict adherence to Amazon compliance.
- [DTC E-Commerce Fulfillment](https://suchgroupecommerce.com/services/dtc-ecommerce-fulfillment): Same-day SLAs for Shopify and TikTok Shop brands. 
- [Wholesale Inventory Storage](https://suchgroupecommerce.com/services/wholesale-inventory-storage): B2B cross-docking, BNSF rail transloading, and FTZ 274 tariff deferrals with zero inventory property tax.

## Resources
- [Master 3PL Pillar Guide](https://suchgroupecommerce.com/montana-tax-free-3pl)
- [Tax Savings Calculator](https://suchgroupecommerce.com/montana-tax-savings-calculator)
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
