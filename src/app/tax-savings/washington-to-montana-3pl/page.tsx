import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Washington to Montana 3PL Tax Savings",
  description:
    "Compare Washington delivery tax with Montana FBA prep, freight, and storage costs. Seattle's Q3 2026 rate is an example, not a promised saving.",
  alternates: {
    canonical: "/tax-savings/washington-to-montana-3pl",
  },
  openGraph: {
    title: "Washington to Montana 3PL Tax Savings | Such Group E-Commerce",
    description:
      "Compare Washington delivery tax with published Montana FBA prep, freight, and storage costs. Tax treatment varies by transaction.",
    url: "https://suchgroupecommerce.com/tax-savings/washington-to-montana-3pl",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Washington to Montana 3PL Tax Savings | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Washington to Montana 3PL Tax Savings | Such Group E-Commerce",
    description:
      "Compare Washington delivery tax with published Montana FBA prep, freight, and storage costs. Tax treatment varies by transaction.",
    images: ["/og-image.png"],
  },
};

export default function WashingtonToMontanaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suchgroupecommerce.com/tax-savings/washington-to-montana-3pl",
        url: "https://suchgroupecommerce.com/tax-savings/washington-to-montana-3pl",
        name: "Washington to Montana 3PL Tax and Fulfillment Cost Comparison",
        description:
          "A planning guide comparing Washington delivery tax with Montana freight, FBA prep, and storage costs. It does not promise tax savings or provide tax advice.",
        isPartOf: {
          "@type": "WebSite",
          name: "Such Group E-Commerce",
          url: "https://suchgroupecommerce.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can a Washington seller evaluate delivery to a Montana prep center?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For many shipped retail transactions, the delivery destination affects the tax charged by the seller. A qualifying purchase delivered to Montana may be billed without state sales tax because Montana has no general statewide sales tax. Wholesale and resale transactions may require separate documentation.",
            },
          },
          {
            "@type": "Question",
            name: "How does using a Montana 3PL affect Washington tax and filing obligations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A qualifying purchase delivered to Montana may be billed without Montana state sales tax. Businesses registered or operating in Washington may retain Washington tax and B&O reporting obligations. Storing inventory or conducting business in Montana may also create nexus or filing obligations depending on the entity, activities, property, and transaction. Obtain a determination from the relevant revenue departments or a qualified tax professional.",
            },
          },
          {
            "@type": "Question",
            name: "How fast does freight move from Washington to Great Falls, Montana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Carrier transit times vary by origin, service, weather, and peak volume. Request a current carrier quote and transit estimate for the specific shipment before making a routing decision.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <Navbar />

      <main className="flex-grow pt-16 pb-24 px-6 max-w-4xl mx-auto w-full">
        <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">
          Washington FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Washington to Montana 3PL: Compare Tax, Freight, and FBA Prep Costs
        </h1>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-emerald-600">The Bottom Line: </span>
            Washington rates vary by delivery location; Seattle&apos;s combined rate is used here only as a dated example. A qualifying retail purchase delivered to Such Group E-Commerce in Great Falls may be billed without state sales tax because Montana has no general statewide sales tax. Actual treatment and savings depend on the transaction. FBA prep starts at $1.45 per unit.
          </p>
        </div>

        {/* Two Problems Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            The Pacific Northwest Tax Challenge for Amazon Sellers
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              <strong className="text-zinc-900">Factor one: the delivery-tax comparison.</strong> Washington&apos;s 6.5% state rate combines with applicable local rates. Seattle&apos;s 10.55% combined rate as of Q3 2026 is one dated example: a fully taxable $30,000 purchase at that assumed rate would produce $3,165 in checkout tax.
            </p>
            <p>
              <strong className="text-zinc-900">Factor two: documentation and ongoing obligations.</strong> Resale documentation, seller acceptance, Washington B&amp;O tax, registration, use tax, and other obligations depend on the business and transaction. A Montana delivery address does not by itself resolve them.
            </p>
            <p>
              A Montana delivery address changes the comparison, but it does not resolve every tax obligation. <Link href="/montana-tax-free-3pl" className="text-emerald-600 underline font-semibold hover:text-emerald-700 transition-colors">Montana has no general statewide sales tax</Link>, so a qualifying purchase delivered there may be billed without state sales tax. Washington B&amp;O and other obligations may still apply.
            </p>
          </div>
        </section>

        {/* I-90 Corridor Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            I-90 Freight Speeds vs. Seattle Acquisition Costs
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Great Falls is served by the I-15 corridor, with connections from the Seattle-Tacoma region through the broader interstate network. Carrier zone, cost, and transit time depend on the exact origin, service level, dimensions, weight, weather, and capacity.
            </p>
            <p>
              Canadian sellers may also request an inbound receiving plan. Cross-border shipments involve customs, brokerage, duties, import records, carrier requirements, and possible state or federal obligations outside our prep fee; those details must be confirmed before shipment.
            </p>
          </div>
        </section>

        {/* WA vs MT Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            How Destination-Based Tax Protects Your Inventory Margin
          </h2>
          <div className="overflow-x-auto border border-zinc-200 rounded-2xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="px-6 py-4 text-zinc-500 font-semibold uppercase text-xs tracking-wider w-1/3">Factor</th>
                  <th className="px-6 py-4 text-rose-700 font-semibold uppercase text-xs tracking-wider w-1/3">Washington Prep Center</th>
                  <th className="px-6 py-4 text-emerald-700 font-semibold uppercase text-xs tracking-wider w-1/3">Such Group (Montana)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white text-zinc-700">
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Checkout sales tax</td>
                  <td className="px-6 py-4">10.55% Seattle combined rate as of Q3 2026</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">Montana has no general statewide sales tax; seller billing and purchaser obligations vary</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">Resale audit exposure</td>
                  <td className="px-6 py-4">Documentation and audit exposure depend on the transaction and filing position</td>
                  <td className="px-6 py-4">A Montana delivery does not eliminate audit, nexus, or reporting exposure</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Montana B&amp;O tax</td>
                  <td className="px-6 py-4">N/A</td>
                  <td className="px-6 py-4">Montana does not impose Washington&apos;s B&amp;O tax; other Montana obligations may apply</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">Resale certificate hassle</td>
                  <td className="px-6 py-4">Seller acceptance and documentation requirements vary</td>
                  <td className="px-6 py-4">Confirm required documents with the supplier and a qualified adviser</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Transit from Seattle</td>
                  <td className="px-6 py-4">Depends on the selected facility and carrier</td>
                  <td className="px-6 py-4">Request a current carrier quote and transit estimate</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">Prep pricing</td>
                  <td className="px-6 py-4">Compare the provider&apos;s current quote and inclusions</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">$1.45 to $1.00 per unit through 10,000 monthly units</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Free storage window</td>
                  <td className="px-6 py-4">Check the provider&apos;s current policy</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">14 days free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SKU Profitability */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Which products save the most on this route
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-6">
            The examples below use assumed freight and a 10.6% comparison rate solely to demonstrate the calculation. They are not carrier quotes, tax determinations, or promised savings.
          </p>
          <div className="overflow-x-auto border border-zinc-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm text-zinc-600">
              <thead className="bg-zinc-100 text-zinc-900 font-bold uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">WA Tax Saved</th>
                  <th className="px-6 py-4">Prep + Freight</th>
                  <th className="px-6 py-4">You Keep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">Tech accessory (1 lb, $120)</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">+$12.72</td>
                  <td className="px-6 py-4">-$1.95</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">+$10.77</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">Apparel bundle (2 lbs, $60)</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">+$6.36</td>
                  <td className="px-6 py-4">-$2.20</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">+$4.16</td>
                </tr>
                <tr className="hover:bg-zinc-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900">Heavy home item (15 lbs, $40)</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">+$4.24</td>
                  <td className="px-6 py-4">-$6.60</td>
                  <td className="px-6 py-4 font-bold text-rose-600">-$2.36</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-500 mt-3">
            Higher-value, lighter products may be stronger candidates, but every SKU should be evaluated using its actual tax treatment, dimensions, freight, prep, storage, and onward-shipping costs.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Our prep rates for Washington sellers
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Published monthly FBA rates and included services are listed below. Postage, freight, storage after 14 days, oversized or special packaging, and other listed add-ons are separate.
            </p>
            <ul className="list-none space-y-2 text-lg">
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">1 to 500 units:</strong> $1.45 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">501 to 1,000 units:</strong> $1.35 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">1,001 to 2,000 units:</strong> $1.25 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">2,001 to 5,000 units:</strong> $1.15 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">5,001 to 10,000 units:</strong> $1.00 per unit; over 10,000 requires a quote</span>
              </li>
            </ul>
            <p>
              There is no minimum shipment or minimum charge. The first 14 days of storage are free; later storage is billed at the published cubic-foot rates. See <Link href="/pricing" className="text-emerald-700 underline font-semibold">complete pricing, inclusions, and policies</Link>.
            </p>
          </div>
        </section>

        {/* Pillar Guide CTA */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white mb-2">Want to see the complete setup?</h3>
          <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
            Our full guide walks through how destination-based tax works, total cost of fulfillment numbers, and step-by-step onboarding.
          </p>
          <Link
            href="/montana-tax-free-3pl"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          >
            Read the Montana Tax-Free 3PL Guide →
          </Link>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Questions Washington sellers ask us
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl border border-zinc-200 shadow-sm group">
              <summary className="cursor-pointer px-6 py-5 text-lg font-bold text-zinc-900 list-none flex items-center justify-between">
                Is this legal?
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-zinc-700 leading-relaxed">
                For many shipped retail transactions, the delivery destination affects the tax charged by the seller. A qualifying purchase delivered to our Montana facility may be billed without state sales tax because Montana has no general statewide sales tax. Treatment varies by seller, transaction, and purchaser obligations.
              </div>
            </details>
            <details className="bg-white rounded-xl border border-zinc-200 shadow-sm group">
              <summary className="cursor-pointer px-6 py-5 text-lg font-bold text-zinc-900 list-none flex items-center justify-between">
                How does this affect Washington B&amp;O and home-state tax filing?
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-zinc-700 leading-relaxed">
                A qualifying purchase delivered to Montana may be billed without Montana state sales tax. Businesses registered or domiciled in Washington may retain Washington B&amp;O, registration, and reporting duties. Consult a qualified tax professional about the client&apos;s specific facts.
              </div>
            </details>
            <details className="bg-white rounded-xl border border-zinc-200 shadow-sm group">
              <summary className="cursor-pointer px-6 py-5 text-lg font-bold text-zinc-900 list-none flex items-center justify-between">
                Can Canadian sellers use this route?
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-zinc-700 leading-relaxed">
                We can evaluate inbound shipments from Canadian sellers, but customs, brokerage, duties, import records, carrier requirements, and tax obligations must be arranged and confirmed before shipment. We do not promise that a route eliminates Washington or other tax exposure.
              </div>
            </details>
          </div>
        </section>

        {/* Primary Statutory Sources & Citations Block */}
        <section className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 mt-12 shadow-sm">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Primary Statutory Sources &amp; Citations [Last Reviewed: August 2026]
          </h3>
          <ul className="space-y-2 text-xs text-zinc-600">
            <li>
              &bull; <strong>[SRC-WA-DOR-001]</strong> Washington State Department of Revenue: <em><a href="https://dor.wa.gov/taxes-rates/sales-use-tax-rates/local-sales-use-tax/local-sales-use-tax-rate-table" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Local Sales &amp; Use Tax Rate Table</a></em> &amp; <em><a href="https://app.leg.wa.gov/rcw/default.aspx?cite=82.32.730" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">RCW 82.32.730 (Destination Sourcing)</a></em>. Confirms 6.5% state rate + 4.05% Seattle local rate (10.55% Seattle combined rate as of Q3 2026).
            </li>
            <li>
              &bull; <strong>[SRC-MT-DOR-001]</strong> Montana Department of Revenue: <em><a href="https://revenue.mt.gov/taxes/general-sales-tax" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">General Sales Tax Guidance</a></em> and <em><a href="https://revenuefiles.mt.gov/taxes/nexus" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Montana Tax Nexus Guidelines</a></em>. Confirms that Montana has no general-use sales tax while other business obligations remain fact-specific.
            </li>
            <li>
              &bull; <strong>[SRC-WA-DOR-002]</strong> Washington State Department of Revenue: <em><a href="https://dor.wa.gov/taxes-rates/business-occupation-tax" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Business &amp; Occupation (B&amp;O) Tax Guidelines (RCW 82.04)</a></em>.
            </li>
            <li>
              &bull; <strong>[SRC-USC-001]</strong> United States Congress: <em><a href="https://www.law.cornell.edu/uscode/text/15/381" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">15 U.S. Code &sect; 381 (Public Law 86-272)</a></em>.
            </li>
          </ul>
        </section>

        {/* Regulatory & Tax Disclaimer */}
        <section className="bg-zinc-100 rounded-2xl border border-zinc-200 p-6 sm:p-8 text-xs text-zinc-600 space-y-2 leading-relaxed mt-6">
          <p className="font-bold text-zinc-900 uppercase tracking-wider text-[11px]">
            Regulatory Notice &amp; Tax Disclaimer
          </p>
          <p>
            <strong>Operational Information Only:</strong> Such Group E-Commerce is a 3PL logistics provider and does not provide formal tax, B&amp;O, or legal counsel.
          </p>
          <p>
            Sales tax savings illustrations reflect checkout-tax differences under destination-based sourcing. State tax liabilities, Washington Department of Revenue rules, and nexus obligations vary based on entity structure and multi-state operations. Sellers must consult a qualified CPA or tax attorney for formal determinations.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
