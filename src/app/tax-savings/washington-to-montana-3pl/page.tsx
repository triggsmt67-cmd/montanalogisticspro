import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Washington to Montana 3PL: Skip 10.6% Sales Tax and DOR Audits",
  description:
    "Washington Amazon sellers pay up to 10.6% checkout tax in Seattle. Ship inventory to Such Group E-commerce in Montana to legally pay zero. FBA prep from $1.45/unit.",
  alternates: {
    canonical: "https://suchgroupecommerce.com/tax-savings/washington-to-montana-3pl",
  },
  openGraph: {
    title: "Washington to Montana 3PL: Skip 10.6% Sales Tax | Such Group E-Commerce",
    description:
      "Washington sellers pay up to 10.6% tax. Ship to Montana to legally pay zero checkout tax.",
    url: "https://suchgroupecommerce.com/tax-savings/washington-to-montana-3pl",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washington to Montana 3PL: Skip 10.6% Sales Tax | Such Group E-Commerce",
    description:
      "Washington sellers pay up to 10.6% tax. Ship to Montana to legally pay zero checkout tax.",
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
        name: "Washington to Montana 3PL: Skip 10.6% Sales Tax and DOR Audits",
        description:
          "Washington Amazon FBA sellers save up to 10.6% on inventory costs by shipping to Such Group E-commerce in Montana. Avoid DOR audit friction and checkout tax.",
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
            name: "Can a Washington seller legally ship inventory to Montana to avoid sales tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Sales tax is calculated based on the delivery address. When you ship purchases to a Montana address, the checkout system charges 0% because Montana has no sales tax. This applies to both retail and wholesale sourcing.",
            },
          },
          {
            "@type": "Question",
            name: "Will the Washington Department of Revenue audit me for using a Montana 3PL?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The DOR audits businesses with Washington-based inventory and sales activity. When your inventory is stored in Montana and you have no physical presence in Washington, you reduce your DOR exposure significantly. Montana has no sales tax system to audit.",
            },
          },
          {
            "@type": "Question",
            name: "How fast does freight move from Washington to Great Falls, Montana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ground shipping from Seattle or Tacoma to Great Falls takes 2 to 3 business days via I-90. This is one of the shortest transit corridors for any Montana 3PL route.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-grow pt-16 pb-24 px-6 max-w-4xl mx-auto w-full">
        <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-3">
          Washington FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Bypass Washington DOR Audits & 10.6% Sales Tax with a Montana Prep Center
        </h1>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-emerald-600">The Bottom Line: </span>
            Washington Amazon sellers face combined sales tax rates hitting 10.6% in Seattle alongside aggressive state Department of Revenue audits. Shipping retail inventory east on I-90 to Such Group E-commerce in Great Falls drops checkout tax to zero under destination-sourcing rules. You keep your acquisition capital, avoid DOR audit friction, and access FBA prep starting at $1.45 per unit.
          </p>
        </div>

        {/* Two Problems Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            The Pacific Northwest Tax Trap for Amazon Businesses
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              <strong className="text-zinc-900">Problem one: the checkout tax.</strong> Washington State charges 6.5% sales tax at the base level. Local jurisdictions add on top of that. In Seattle, the combined rate is 10.25%. In Tacoma, 10.2%. Buy $30,000 worth of inventory shipped to a Washington address, and you hand over $3,000 before you sell a single unit.
            </p>
            <p>
              <strong className="text-zinc-900">Problem two: the Department of Revenue.</strong> The Washington DOR is one of the most aggressive tax enforcement agencies in the country. They reject out-of-state resale certificates regularly. They track inventory stored in the state. They go after the B&amp;O tax on gross receipts, not net profit. If you hold goods in Washington, you are on their radar.
            </p>
            <p>
              Both problems disappear when you ship to Montana. <Link href="/montana-tax-free-3pl" className="text-emerald-600 underline font-semibold hover:text-emerald-700 transition-colors">Montana has no sales tax at all</Link>. No state rate. No local rate. No checkout tax. And no state revenue department coming after your resale paperwork.
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
              Great Falls sits just off I-15 in central Montana. Freight from the Seattle-Tacoma metro travels east on I-90, cuts south on I-15, and lands at our door. That is carrier Zone 3. Two to three business days. One of the cheapest ground routes in the western US.
            </p>
            <p>
              Canadian sellers sourcing from BC or Alberta have a similar advantage. Cross-border freight into Montana avoids Washington entirely. No DOR forms, no state tax exposure, and customs clears before the goods hit our dock.
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
                  <td className="px-6 py-4">Up to 10.6%</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">0%</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">DOR audit risk</td>
                  <td className="px-6 py-4">High. Aggressive enforcement on resellers.</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">None. No sales tax system to enforce.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">B&amp;O tax exposure</td>
                  <td className="px-6 py-4">Yes. Gross receipts taxed.</td>
                  <td className="px-6 py-4 font-semibold text-emerald-600">No. Federal PL 86-272 protection.</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">Resale certificate hassle</td>
                  <td className="px-6 py-4">DOR rejects many out-of-state forms.</td>
                  <td className="px-6 py-4">Not needed for retail purchases. Montana address handles it.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Transit from Seattle</td>
                  <td className="px-6 py-4">Local (same day)</td>
                  <td className="px-6 py-4">2 to 3 business days via I-90</td>
                </tr>
                <tr className="bg-zinc-50/50">
                  <td className="px-6 py-4 font-medium text-zinc-900">Prep pricing</td>
                  <td className="px-6 py-4">Varies. Often $2.00+/unit in metro areas.</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">From $1.00/unit at volume</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-zinc-900">Free storage window</td>
                  <td className="px-6 py-4">Uncommon. Most charge on arrival.</td>
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
            Because Washington to Montana is such a short freight lane, the math works for a wider range of products than longer routes. Here is how specific product types break down.
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
            Short version: if it costs more than $15 and weighs under 8 lbs, you save money. Heavy, cheap items should ship direct to Amazon from Washington.
          </p>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Our prep rates for Washington sellers
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              We keep it simple. Every unit gets receiving, inspection, FNSKU labeling, poly-bagging, and shipment creation into Seller Central. No hidden fees.
            </p>
            <ul className="list-none space-y-2 text-lg">
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">1 to 500 units:</strong> $1.45 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">501 to 5,000 units:</strong> $1.25 per unit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span><strong className="text-zinc-900">5,001+ units:</strong> $1.00 per unit</span>
              </li>
            </ul>
            <p>
              First 14 days of storage are free. We connect directly with Amazon Seller Central, Shopify, TikTok Shop, and Walmart WFS.
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
                Yes. Sales tax is based on where the goods are delivered. Ship to Montana and the checkout system charges zero. This is how destination-based tax rules work, and it is the standard in most US states.
              </div>
            </details>
            <details className="bg-white rounded-xl border border-zinc-200 shadow-sm group">
              <summary className="cursor-pointer px-6 py-5 text-lg font-bold text-zinc-900 list-none flex items-center justify-between">
                Will the DOR come after me?
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-zinc-700 leading-relaxed">
                The DOR audits businesses that hold inventory and conduct sales activity in Washington. When your goods are in Montana and you have no other Washington presence, your exposure drops significantly. We also eliminate the resale certificate rejection problem because Montana does not require one for retail purchases.
              </div>
            </details>
            <details className="bg-white rounded-xl border border-zinc-200 shadow-sm group">
              <summary className="cursor-pointer px-6 py-5 text-lg font-bold text-zinc-900 list-none flex items-center justify-between">
                Can Canadian sellers use this route?
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-6 pb-5 text-zinc-700 leading-relaxed">
                Yes. Sellers sourcing from British Columbia or Alberta can ship directly into Montana. The freight bypasses Washington entirely, so there is no state sales tax or DOR exposure at any point in the supply chain.
              </div>
            </details>
          </div>
        </section>

        {/* Regulatory & Tax Disclaimer */}
        <section className="bg-zinc-100 rounded-2xl border border-zinc-200 p-6 sm:p-8 text-xs text-zinc-600 space-y-2 leading-relaxed mt-12">
          <p className="font-bold text-zinc-900 uppercase tracking-wider text-[11px]">
            Regulatory Notice &amp; Tax Disclaimer
          </p>
          <p>
            <strong>Operational Information Only:</strong> Such Group E-Commerce is a 3PL logistics warehouse and does not provide formal tax, B&amp;O tax, or legal counsel.
          </p>
          <p>
            State tax liabilities, Washington Department of Revenue guidelines, and nexus obligations vary based on entity structure and multi-state inventory staging. Sellers must consult a qualified CPA or tax attorney for formal determinations.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
