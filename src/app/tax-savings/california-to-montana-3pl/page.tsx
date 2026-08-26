import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "California to Montana 3PL Tax Savings",
  description:
    "California sellers avoid 7.25% to 10.25%+ district sales tax on inventory intake. Ship to Such Group E-Commerce in Montana with FBA prep from $1.45/unit.",
  alternates: {
    canonical: "/tax-savings/california-to-montana-3pl",
  },
  openGraph: {
    title: "California to Montana 3PL Tax Savings | Such Group E-Commerce",
    description:
      "California sellers avoid 7.25% to 10.25%+ district sales tax on inventory intake. Ship to Such Group E-Commerce in Montana with FBA prep from $1.45/unit.",
    url: "https://suchgroupecommerce.com/tax-savings/california-to-montana-3pl",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "California to Montana 3PL Tax Savings | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "California to Montana 3PL Tax Savings | Such Group E-Commerce",
    description:
      "California sellers avoid 7.25% to 10.25%+ district sales tax on inventory intake. Ship to Such Group E-Commerce in Montana with FBA prep from $1.45/unit.",
    images: ["/og-image.png"],
  },
};

export default function CaliforniaToMontanaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suchgroupecommerce.com/tax-savings/california-to-montana-3pl",
        url: "https://suchgroupecommerce.com/tax-savings/california-to-montana-3pl",
        name: "California to Montana 3PL: Avoid 10.25% Sales Tax on FBA Prep",
        description:
          "California Amazon FBA sellers save up to 10.25% on inventory costs by shipping purchases to Such Group E-commerce in Great Falls, Montana. Zero checkout tax under destination-based rules.",
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
            name: "Can a California seller legally use a Montana prep center to avoid sales tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Sales tax is charged based on where the product is delivered. When you ship to a Montana address, the checkout system applies Montana's 0% rate. This is how destination-based tax rules work in every state that follows them.",
            },
          },
          {
            "@type": "Question",
            name: "How long does shipping take from California to Great Falls, Montana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ground freight from Southern California to Great Falls typically takes 3 to 4 business days. Shipments from Northern California and the Bay Area often arrive in 2 to 3 days.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a resale certificate to buy tax-free through a Montana 3PL?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not for retail purchases. When you buy from online retailers and ship to Montana, the 0% rate applies automatically at checkout. For wholesale orders from distributors, you present a Montana Business Registry Resale Certificate to your supplier.",
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
        <p className="text-sm font-semibold text-amber-600 tracking-wide uppercase mb-3">
          California FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Stop Paying California District Tax: The Montana 3PL Pipeline for FBA Sellers
        </h1>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-amber-600">The Financial Impact: </span>
            California e-commerce sellers pay combined state and district sales tax rates up to 10.75% in major hubs like Los Angeles and Oakland. By routing retail purchases directly to Such Group E-commerce in Great Falls, Montana, you leverage destination-based sourcing to legally bypass this checkout tax. This pipeline cuts inventory acquisition costs by over 10% and provides FBA prep starting at $1.45 per unit.
          </p>
        </div>

        {/* The Real Cost: Grid Math Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Why LA and Bay Area Sellers Bleed Margin at Checkout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $25K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$2,562</p>
              <p className="text-sm text-zinc-500 mt-2">Gone. Paid to CDTFA at checkout.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $50K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$5,125</p>
              <p className="text-sm text-zinc-500 mt-2">That is real cash you cannot reinvest.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $100K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$10,250</p>
              <p className="text-sm text-zinc-500 mt-2">A full-time employee. Gone to tax.</p>
            </div>
          </div>
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
            <p className="text-lg font-bold text-emerald-800">
              Ship to Montana instead and every dollar above stays in your account.
            </p>
            <p className="text-sm text-emerald-700 mt-1">
              Montana has zero statewide sales tax. The checkout system sees a Montana address and charges $0.00.
            </p>
          </div>
        </section>

        {/* Port Cities Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Comparing West Coast Freight Costs vs. Zero Tax Sourcing
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              California has the highest district-level sales taxes in the country. LA County, Long Beach, Oakland, San Francisco, San Jose. Every one of them stacks local taxes on top of the state base rate.
            </p>
            <p>
              If you source inventory online and ship it to your house, garage, or a California prep center, you pay the full combined rate at checkout. That is 9.5% minimum in most metro areas. In parts of LA it hits 10.25%.
            </p>
            <p>
              Sellers who import containers through the Ports of LA and Long Beach face the same problem. Drayage from port to a local warehouse keeps the goods in California. The tax sticks.
            </p>
            <p>
              But if you reroute that freight north to Great Falls, Montana, none of that tax applies. The goods never land in a taxable state. Your checkout total drops, and your landed cost shrinks by up to 10%.
            </p>
          </div>
        </section>

        {/* Does the Freight Math Work? */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Shielding Your Business from Local State Exposure
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-6">
            Honest answer: it depends on what you sell. Shipping from California suppliers to Great Falls crosses carrier Zones 5 and 6. That costs real money on heavy items. But for anything light and valuable, the savings are obvious.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-zinc-900">Beauty product</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">WIN</span>
              </div>
              <p className="text-sm text-zinc-600 mb-3">0.5 lbs, $25 cost per unit</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-zinc-500">CA tax saved</span><span className="font-semibold text-emerald-600">+$2.50</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Prep fee</span><span className="text-zinc-700">-$1.45</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Freight cost</span><span className="text-zinc-700">-$0.35</span></div>
                <div className="flex justify-between border-t border-zinc-100 pt-2 mt-2"><span className="font-bold text-zinc-900">Net gain per unit</span><span className="font-bold text-emerald-600">+$0.70</span></div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-zinc-900">Electronics</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">BIG WIN</span>
              </div>
              <p className="text-sm text-zinc-600 mb-3">2 lbs, $150 cost per unit</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-zinc-500">CA tax saved</span><span className="font-semibold text-emerald-600">+$15.00</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Prep fee</span><span className="text-zinc-700">-$1.45</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Freight cost</span><span className="text-zinc-700">-$0.80</span></div>
                <div className="flex justify-between border-t border-zinc-100 pt-2 mt-2"><span className="font-bold text-zinc-900">Net gain per unit</span><span className="font-bold text-emerald-600">+$12.75</span></div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-zinc-900">Heavy home goods</h3>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">SKIP IT</span>
              </div>
              <p className="text-sm text-zinc-600 mb-3">18 lbs, $45 cost per unit</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-zinc-500">CA tax saved</span><span className="font-semibold text-emerald-600">+$4.50</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Prep fee</span><span className="text-zinc-700">-$2.50</span></div>
                <div className="flex justify-between"><span className="text-zinc-500">Freight cost</span><span className="text-zinc-700">-$4.85</span></div>
                <div className="flex justify-between border-t border-zinc-100 pt-2 mt-2"><span className="font-bold text-zinc-900">Net gain per unit</span><span className="font-bold text-rose-600">-$2.85</span></div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-sm text-white flex flex-col justify-center">
              <p className="text-lg font-bold mb-2">The rule of thumb</p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                If your product costs more than $20 and weighs under 5 lbs, the Montana route saves you money on every single unit. Heavy, cheap items should ship direct.
              </p>
            </div>
          </div>
        </section>

        {/* What Happens to Your Tax Exposure */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            What happens to your tax exposure when you move out of California
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Storing inventory in Montana puts your goods in a state with no sales tax. You do not file sales tax returns in Montana. You do not collect. You do not remit. The state simply does not have one.
            </p>
            <p>
              Federal law (Public Law 86-272) protects out-of-state sellers who only use Montana for warehousing through a third party. You will not owe Montana income tax just because your boxes sit in our building.
            </p>
            <p>
              Once we prep your units and ship them into Amazon&apos;s network, physical presence shifts to whatever state Amazon stores your inventory. That is between you and Amazon, and it happens regardless of which prep center you use.
            </p>
          </div>
        </section>

        {/* Prep Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            What we charge and what you get
          </h2>
          <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 text-center divide-x divide-zinc-200">
              <div className="p-6">
                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">1 to 500 units</p>
                <p className="text-3xl font-extrabold text-zinc-900">$1.45</p>
                <p className="text-xs text-zinc-500 mt-1">per unit</p>
              </div>
              <div className="p-6 bg-emerald-50">
                <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">501 to 5,000</p>
                <p className="text-3xl font-extrabold text-zinc-900">$1.25</p>
                <p className="text-xs text-zinc-500 mt-1">per unit</p>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-1">5,001+</p>
                <p className="text-3xl font-extrabold text-zinc-900">$1.00</p>
                <p className="text-xs text-zinc-500 mt-1">per unit</p>
              </div>
            </div>
            <div className="border-t border-zinc-200 p-5 text-sm text-zinc-600 leading-relaxed">
              <p><strong className="text-zinc-900">Every prep includes:</strong> receiving, inspection, FNSKU labeling, poly-bagging, and shipment creation into Amazon Seller Central. Storage is free for 14 days. We also connect with Shopify, TikTok Shop, and Walmart WFS.</p>
            </div>
          </div>
        </section>

        {/* Pillar Guide CTA */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white mb-2">Want the full breakdown?</h3>
          <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
            Our complete guide covers how destination-based tax rules work, total cost of fulfillment math, and how to set up your first shipment.
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
            Common questions from California sellers
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Can I legally do this?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Yes. Sales tax is charged based on the delivery address. When you ship to our Montana warehouse, the checkout system applies Montana&apos;s 0% sales tax rate. This is called destination-based sourcing, and it is how tax law works in most states.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Do I need a resale certificate?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Not for buying retail inventory online. The Montana shipping address handles it automatically at checkout. For wholesale orders from distributors, you present a Montana Business Registry Resale Certificate. We help you get that set up.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">How long does shipping take from California?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Ground freight from SoCal to Great Falls runs 3 to 4 business days. From NorCal and the Bay, it is 2 to 3 days. We start processing your units within 24 hours of arrival.
              </p>
            </div>
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
              &bull; <strong>[SRC-CDTFA-001]</strong> California Department of Tax and Fee Administration: <em>Sales and Use Tax Rates &amp; Regulation 1620 (Interstate Sourcing)</em>. Confirms 7.25% statewide base rate with combined district taxes up to 10.25%–11.25%.
            </li>
            <li>
              &bull; <strong>[SRC-MT-DOR-001]</strong> Montana Department of Revenue: <em>Montana Code Annotated Title 15 (Taxation)</em>. Confirms 0% state retail sales tax.
            </li>
            <li>
              &bull; <strong>[SRC-CDTFA-002]</strong> California Department of Tax and Fee Administration: <em>Regulation 1668 (Sales for Resale)</em>.
            </li>
          </ul>
        </section>

        {/* Regulatory & Tax Disclaimer */}
        <section className="bg-zinc-100 rounded-2xl border border-zinc-200 p-6 sm:p-8 text-xs text-zinc-600 space-y-2 leading-relaxed mt-6">
          <p className="font-bold text-zinc-900 uppercase tracking-wider text-[11px]">
            Regulatory Notice &amp; Tax Disclaimer
          </p>
          <p>
            <strong>Operational Information Only:</strong> The comparisons provided on this page are for logistical and operational planning purposes. Such Group E-Commerce is a 3PL fulfillment provider and not a tax or legal advisor.
          </p>
          <p>
            Sales tax sourcing, physical presence nexus, and California CDTFA regulations depend on individual corporate structures and sourcing channels. Sellers should verify their specific tax obligations with a certified public accountant (CPA) or tax attorney.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
