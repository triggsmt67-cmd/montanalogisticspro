import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import TCFCalculator from "@/components/TCFCalculator";
import { ArrowLeft } from "lucide-react";
export const metadata: Metadata = {
  title: "Montana Tax-Free 3PL Guide",
  description:
    "Learn how sourcing inventory through Such Group E-Commerce in Montana eliminates checkout sales tax and cuts fulfillment costs for Amazon and DTC brands.",
  alternates: {
    canonical: "/montana-tax-free-3pl",
  },
  openGraph: {
    title: "Montana Tax-Free 3PL Guide | Such Group E-Commerce",
    description:
      "Learn how sourcing inventory through Such Group E-Commerce in Montana eliminates checkout sales tax and cuts fulfillment costs for Amazon and DTC brands.",
    url: "https://suchgroupecommerce.com/montana-tax-free-3pl",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Montana Tax-Free 3PL Guide | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montana Tax-Free 3PL Guide | Such Group E-Commerce",
    description:
      "Learn how sourcing inventory through Such Group E-Commerce in Montana eliminates checkout sales tax and cuts fulfillment costs for Amazon and DTC brands.",
    images: ["/og-image.png"],
  },
};

export default function MontanaTaxFree3PLPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Montana Tax-Free 3PL & FBA Prep",
        "provider": {
          "@type": "Organization",
          "name": "Such Group E-Commerce",
          "url": "https://suchgroupecommerce.com"
        },
        "description": "Tax-free Amazon FBA prep & 3PL fulfillment from Montana. Zero state sales tax on retail checkout sourcing."
      },
      {
        "@type": "WarehouseFacility",
        "name": "Such Group E-Commerce Warehouse",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Great Falls",
          "addressRegion": "MT",
          "addressCountry": "US"
        },
        "description": "Zero-sales-tax prep facility offering Amazon FBA/FBM prep and DTC fulfillment."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why ship to a Montana 3PL for Amazon prep?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Montana charges 0% retail sales tax. Shipping purchases directly to a Montana prep facility eliminates checkout tax under destination sourcing rules, saving 5% to 10% on inventory acquisition."
            }
          },
          {
            "@type": "Question",
            "name": "What are the baseline prep rates for Such Group E-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pricing starts at $1.45 per unit for standard orders, with volume discounts dropping prep fees to $1.00 per unit for commitments over 5,000 units. Storage is free for the first 14 days."
            }
          },
          {
            "@type": "Question",
            "name": "Does holding inventory in Montana create state tax liability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Holding inventory in Montana triggers 0% Montana state sales tax under MCA Title 15. Remote businesses maintain standard home-state income and franchise tax obligations and should consult their CPA."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

      <main className="flex-grow pt-20 pb-24 px-6 max-w-4xl mx-auto w-full">
        
        <div className="mb-12 mt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-emerald-600 transition-colors group mb-6">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-tight mb-4">
            Montana Tax-Free 3PL &amp; FBA Prep
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium">Sourcing Mechanics, Pricing, and Total Fulfillment Math</p>
        </div>

        <div className="space-y-12">
          
          {/* GEO Direct Answer Block */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 shadow-sm relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 rounded-l-2xl"></div>
            <p className="text-lg leading-relaxed text-zinc-800 m-0">
              <strong className="text-zinc-900">Core Deliverable:</strong> Montana levies 0% statewide sales tax, allowing e-commerce sellers and Online Arbitrage (OA) merchants to eliminate retail checkout sales tax under destination-sourcing rules. Routing inventory through Such Group E-commerce in Great Falls, MT saves 5% to 10% in upfront acquisition capital while providing specialized FBA prep starting at $1.45 per unit with 14 days of free storage.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Sourcing Tax Mechanics: Online Arbitrage vs. Wholesale</h2>
            <p className="leading-relaxed">
              Montana’s zero percent sales tax delivers immediate cash flow benefits, but execution depends entirely on your sourcing model.
            </p>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Online Arbitrage (Destination-Based Checkout):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Automatic Tax Elimination:</strong> Digital retail checkout engines calculate sales tax using the ship-to destination zip code.</li>
              <li><strong className="text-zinc-900">Zero Registration Required:</strong> Shipping directly to Such Group E-commerce’s Great Falls warehouse triggers 0% sales tax at checkout automatically—no state reseller permit required.</li>
              <li><strong className="text-zinc-900">Direct Margin Preservation:</strong> Sourcing $100,000 in retail inventory through Montana keeps $5,000 to $10,000 in raw capital in your operating bank account.</li>
            </ul>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Wholesale & B2B Compliance:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Resale Certificates First:</strong> Wholesale distributors do not require physical shipments to land in Montana to waive sales tax; they rely on resale documentation.</li>
              <li><strong className="text-zinc-900">Form Resale Execution:</strong> Provide suppliers with the Montana Business Registry Resale Certificate (Form Resale).</li>
              <li><strong className="text-zinc-900">Vendor Escalations:</strong> If automated supplier portals reject Form Resale due to Montana’s structural lack of a state sales tax ID number, submit official Department of Revenue documentation directly to their tax compliance desk.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Total Cost of Fulfillment (TCF) vs. Sales Tax Arbitrage</h2>
            <p className="leading-relaxed mb-6">
              Upfront sales tax savings must be calculated against shipping zones and dimensional weight. Outbound shipments moving out of Great Falls, Montana cross carrier Zones 5 through 8 to reach major regional Amazon fulfillment hubs.
            </p>

            <div className="my-10">
              <TCFCalculator />
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Physical Sourcing &amp; Multi-State Tax Rules</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-zinc-900">Montana Sourcing:</strong> Receiving inventory at Such Group E-Commerce applies destination-based sales tax sourcing. Because Montana levies 0% statewide sales tax (MCA Title 15), no sales tax is collected on intake.</li>
              <li><strong className="text-zinc-900">Multi-State Tax Sourcing:</strong> Out-of-state merchants operating through independent Montana warehouses maintain their standard home-state income, franchise, and gross receipts tax filing obligations.</li>
              <li><strong className="text-zinc-900">Downstream Amazon Nexus:</strong> Once Such Group E-Commerce ships prepped inventory into Amazon’s inbound network, physical presence nexus is triggered in destination states holding the inventory.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Such Group E-Commerce Operations &amp; Service Tiers</h2>
            <p className="leading-relaxed">
              Situated in Great Falls, Montana, Such Group E-Commerce provides direct access to primary transport corridors (I-15 and I-90) for swift regional dispatch.
            </p>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Unit Prep Pricing Schedule:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 – 500 units: $1.45 / unit</li>
              <li>501 – 5,000 units: $1.25 / unit</li>
              <li>5,001 – 10,000+ units: $1.00 / unit</li>
            </ul>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Warehouse Terms &amp; Capabilities:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Storage Allocation:</strong> First 14 days free; tiered monthly storage thereafter.</li>
              <li><strong className="text-zinc-900">Channel Integrations:</strong> Amazon FBA/FBM, TikTok Shop, Shopify, Walmart Fulfillment Services (WFS).</li>
              <li><strong className="text-zinc-900">Specialized Processing:</strong> Media/books, oversized merchandise, poly-bagging, suffocation labeling, bundling, and import container receiving.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Standard Operating Procedure: Getting Started</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong className="text-zinc-900">Address Configuration:</strong> Set your ship-to address in your sourcing tools to Such Group E-Commerce’s Great Falls warehouse address.</li>
              <li><strong className="text-zinc-900">Inbound Pre-Alerts:</strong> Submit your receiving manifests with expected ASINs, unit counts, and carrier tracking details.</li>
              <li><strong className="text-zinc-900">Receiving &amp; FBA Prep:</strong> Staff inspect items, apply FNSKU barcodes, execute poly-bagging or bundling, and log inventory.</li>
              <li><strong className="text-zinc-900">Outbound Dispatch:</strong> Box dimensions are uploaded to Amazon Seller Central, carrier labels are generated, and shipments head out to destination fulfillment centers.</li>
            </ol>
          </section>

          {/* Section 5.5 - Regional Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">State-Specific Tax Savings Breakdowns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/tax-savings/california-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">California</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">10.25% Savings</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Bypass high district sales taxes on CA-sourced Amazon FBA inventory.
                </p>
              </Link>
              <Link href="/tax-savings/washington-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">Washington</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">10.55% Savings</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Eliminate Seattle/King County checkout sales taxes on inventory intake.
                </p>
              </Link>
              <Link href="/tax-savings/texas-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">Texas</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">8.25% Savings</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Avoid Texas sales tax and local inventory property taxes.
                </p>
              </Link>
              <Link href="/tax-savings/new-york-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">New York</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">8.875% Savings</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Cut NYC metro sales tax and escape East Coast overhead costs.
                </p>
              </Link>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-6">
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Why ship to a Montana 3PL for Amazon prep?</h3>
                <p className="m-0 leading-relaxed">Montana charges 0% retail sales tax. Shipping purchases directly to a Montana prep facility eliminates checkout tax under destination sourcing rules, saving 5% to 10% on inventory acquisition.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">What are the baseline prep rates for Such Group E-Commerce?</h3>
                <p className="m-0 leading-relaxed">Monthly FBA prep pricing is volume-tiered: 1–500 units at $1.45, 501–1,000 units at $1.35, 1,001–2,000 units at $1.25, 2,001–5,000 units at $1.15, and 5,001–10,000 units at $1.00 per unit (over 10,000 by quote). Wholesale prep is $1.15 down to $0.90 per unit. Price includes receiving, inspection, wrapping, poly-bagging, FNSKU labeling, reused boxes, and dunnage. Storage is free for the first 14 days.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Does holding inventory in Montana create state tax liability?</h3>
                <p className="m-0 leading-relaxed">Holding inventory in Montana incurs zero Montana state sales tax under MCA Title 15. For income and franchise taxes, multi-state nexus rules apply based on your entity structure. Always confirm your multi-state tax footprint with qualified CPA counsel.</p>
              </div>
            </div>
          </section>

          {/* Tax & Legal Compliance Disclaimer */}
          <section className="bg-zinc-100 rounded-2xl border border-zinc-200 p-6 sm:p-8 text-xs text-zinc-600 space-y-2 leading-relaxed">
            <p className="font-bold text-zinc-900 uppercase tracking-wider text-[11px]">
              Regulatory &amp; Legal Notice
            </p>
            <p>
              <strong>Educational &amp; Operational Information:</strong> The contents of this website and guide are provided solely for general operational planning and logistics information. Such Group E-Commerce is a third-party logistics (3PL) provider and does not provide legal, CPA, tax, or financial advisory services.
            </p>
            <p>
              <strong>Primary Statutory References:</strong> Montana state sales tax status is governed under Montana Code Annotated (MCA) Title 15. Federal interstate commerce protections are defined under 15 U.S.C. &sect;&sect; 381–384 (Public Law 86-272). Physical presence, economic nexus thresholds, and sales tax sourcing rules vary by individual seller jurisdiction and business entity structure. Always consult a licensed CPA or tax attorney regarding your enterprise tax obligations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
