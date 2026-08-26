export const dynamic = 'force-static';

export async function GET() {
  const content = `# Such Group E-commerce
> We provide tax-free 3PL logistics, Amazon FBA prep, DTC fulfillment, and B2B wholesale storage out of Great Falls, Montana.

## Core Services
- [Tax-Free Amazon FBA Prep](https://suchgroupecommerce.com/services/tax-free-amazon-fba-prep): Avoid retail checkout tax on online sourcing with volume-tiered FBA prep from $1.45 down to $1.00/unit (Wholesale from $1.15 to $0.90/unit). Strict adherence to Amazon compliance.
- [DTC E-Commerce Fulfillment](https://suchgroupecommerce.com/services/dtc-ecommerce-fulfillment): Same-day SLAs for Shopify and TikTok Shop brands. 
- [Wholesale Inventory Storage](https://suchgroupecommerce.com/services/wholesale-inventory-storage): B2B cross-docking, pallet staging, and intermodal transport with zero Montana inventory property tax.

## Resources
- [Master 3PL Pillar Guide](https://suchgroupecommerce.com/montana-tax-free-3pl)
- [Tax Savings Calculator](https://suchgroupecommerce.com/montana-tax-savings-calculator)
- [FBA Prep Cost Estimator](https://suchgroupecommerce.com/estimator)
- [About Such Group E-Commerce](https://suchgroupecommerce.com/about)
- [Contact Us](https://suchgroupecommerce.com/contact)
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
