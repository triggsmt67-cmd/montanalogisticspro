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
    "Learn how Montana delivery may affect checkout tax and compare published FBA prep, storage, freight, and add-on costs. Tax treatment varies.",
  alternates: {
    canonical: "/montana-tax-free-3pl",
  },
  openGraph: {
    title: "Montana Tax-Free 3PL Guide | Such Group E-Commerce",
    description:
      "Compare Montana delivery-tax considerations with published FBA prep, storage, freight, and add-on costs. Tax treatment varies.",
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
      "Compare Montana delivery-tax considerations with published FBA prep, storage, freight, and add-on costs. Tax treatment varies.",
    images: ["/og-image.png"],
  },
};

export default function MontanaTaxFree3PLPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Montana 3PL and Amazon FBA Prep",
        "provider": {
          "@type": "Organization",
          "name": "Such Group E-Commerce",
          "url": "https://suchgroupecommerce.com"
        },
        "description": "Amazon FBA prep, DTC fulfillment, and wholesale inventory services from Montana with published pricing. Montana has no general statewide sales tax; transaction treatment varies."
      },
      {
        "@type": "Organization",
        "name": "Such Group E-Commerce",
        "legalName": "Such Group International Inc.",
        "url": "https://suchgroupecommerce.com",
        "email": "ecommerce@sgigf.com",
        "telephone": "+1-406-788-1614",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "601 6th St SW",
          "addressLocality": "Great Falls",
          "addressRegion": "MT",
          "postalCode": "59404",
          "addressCountry": "US"
        },
        "description": "Nationwide remote-client 3PL operating from a Great Falls inventory receiving facility that is not open for walk-in service."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why ship to a Montana 3PL for Amazon prep?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Montana has no general statewide sales tax. Qualifying purchases delivered directly to a Montana prep facility may therefore be billed without state sales tax, depending on the seller, transaction, and purchaser’s tax obligations."
            }
          },
          {
            "@type": "Question",
            "name": "What are the baseline prep rates for Such Group E-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly FBA pricing is $1.45 per unit for 1–500 units, $1.35 for 501–1,000, $1.25 for 1,001–2,000, $1.15 for 2,001–5,000, and $1.00 for 5,001–10,000. Over 10,000 requires a quote. There is no minimum, and the first 14 days of storage are free."
            }
          },
          {
            "@type": "Question",
            "name": "Does holding inventory in Montana create state tax liability?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Storing inventory or conducting other business activities in Montana may create tax nexus or filing obligations depending on the seller’s entity, activities, property, and transaction structure. Public Law 86-272 generally addresses protected solicitation activities and should not be treated as a blanket warehousing exemption. Sellers should obtain a determination from the Montana Department of Revenue or a qualified tax professional."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
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
              <strong className="text-zinc-900">Core Deliverable:</strong> Montana has no general statewide sales tax. Qualifying retail purchases delivered to Such Group E-Commerce in Great Falls may therefore be billed without state sales tax, depending on the seller and transaction. Example savings must be calculated from the tax that otherwise would have applied. FBA prep starts at $1.45 per unit and includes 14 days of storage under the published service terms.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Sourcing Tax Mechanics: Online Arbitrage vs. Wholesale</h2>
            <p className="leading-relaxed">
              Montana has no general statewide sales tax. Whether a purchase is billed without state sales tax, and whether that changes the purchaser&apos;s total liability, depends on the seller, product, documentation, delivery, transaction, and business obligations.
            </p>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Online Arbitrage (Destination-Based Checkout):</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Delivery Address:</strong> Many retail checkout systems use the ship-to destination as one sourcing input, but seller practices and applicable rules vary.</li>
              <li><strong className="text-zinc-900">Registration Depends on Your Business:</strong> A Montana delivery address may result in no state sales tax at checkout for a qualifying purchase, but resale documentation, registration, nexus, and filing duties depend on the seller, purchaser, transaction, and business activities.</li>
              <li><strong className="text-zinc-900">Landed-Cost Comparison:</strong> Compare the tax actually billed with inbound freight, prep, add-ons, storage, onward shipping, and any purchaser obligations before choosing a route.</li>
            </ul>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Wholesale & B2B Compliance:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Supplier Requirements:</strong> Wholesale and resale transactions may require documentation accepted by the supplier.</li>
              <li><strong className="text-zinc-900">Do Not Assume Acceptance:</strong> A Montana address does not replace a supplier&apos;s documentation or account requirements.</li>
              <li><strong className="text-zinc-900">Qualified Review:</strong> Confirm the correct forms and obligations with the supplier and a qualified tax adviser; Such Group does not issue tax certificates or provide tax advice.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Total Cost of Fulfillment (TCF) vs. Sales Tax Arbitrage</h2>
            <p className="leading-relaxed mb-6">
              Any estimated checkout-tax difference should be compared with actual carrier pricing, dimensions, weight, prep, add-ons, storage, and onward-shipping costs. Carrier zones and Amazon destinations vary by shipment.
            </p>

            <div className="my-10">
              <TCFCalculator />
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Physical Sourcing &amp; Multi-State Tax Rules</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-zinc-900">Montana Delivery:</strong> A qualifying purchase delivered to Great Falls may be billed without state sales tax because Montana has no general statewide sales tax. The transaction and seller determine the invoice treatment.</li>
              <li><strong className="text-zinc-900">Multi-State Obligations:</strong> Entity structure, home-state activity, property, sales, employees, marketplace inventory, and other facts may create registration, income, franchise, use-tax, or filing duties.</li>
              <li><strong className="text-zinc-900">Amazon Inventory:</strong> Amazon controls downstream placement after it accepts inbound inventory. Sellers should obtain professional advice about nexus and filing obligations in states where inventory or other business activity occurs.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Such Group E-Commerce Operations &amp; Service Tiers</h2>
            <p className="leading-relaxed">
              Such Group receives approved client inventory at 601 6th St SW in Great Falls. The facility is not open for walk-in service; onboarding, support, and shipment planning are handled remotely.
            </p>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Unit Prep Pricing Schedule:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 – 500 units: $1.45 / unit</li>
              <li>501 – 1,000 units: $1.35 / unit</li>
              <li>1,001 – 2,000 units: $1.25 / unit</li>
              <li>2,001 – 5,000 units: $1.15 / unit</li>
              <li>5,001 – 10,000 units: $1.00 / unit</li>
              <li>Over 10,000 units: contact us for a quote</li>
            </ul>

            <h3 className="text-lg font-bold text-zinc-900 mt-6 mb-2">Warehouse Terms &amp; Capabilities:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-zinc-900">Storage:</strong> First 14 days free; storage is billed monthly per cubic foot (prorated daily for partial months) beginning on day 15, including the Q4 rate.</li>
              <li><strong className="text-zinc-900">No Minimum:</strong> No minimum shipment amount and no minimum charge.</li>
              <li><strong className="text-zinc-900">Specialized Processing:</strong> Oversized handling, bubble wrap, poly-bagging, suffocation labels, bundling, returns, carton forwarding, pallet work, and container unloading are available at the published or quoted rate.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 text-zinc-700">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">Standard Operating Procedure: Getting Started</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong className="text-zinc-900">Approval First:</strong> Complete remote onboarding and receive shipment approval before using the Great Falls receiving address.</li>
              <li><strong className="text-zinc-900">Inbound Pre-Alerts:</strong> Submit your receiving manifests with expected ASINs, unit counts, and carrier tracking details.</li>
              <li><strong className="text-zinc-900">Receiving &amp; FBA Prep:</strong> Staff inspect items, apply FNSKU barcodes, execute poly-bagging or bundling, and log inventory.</li>
              <li><strong className="text-zinc-900">Outbound Dispatch:</strong> We prepare the approved cartons and print and apply the supplied or authorized shipping labels. Postage and outbound freight remain the seller&apos;s responsibility.</li>
            </ol>
          </section>

          {/* Section 5.5 - Regional Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-2">State-Specific Cost Comparison Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/tax-savings/california-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">California</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">10.25% Example</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Compare an illustrative California rate with Montana prep, freight, and storage costs.
                </p>
              </Link>
              <Link href="/tax-savings/washington-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">Washington</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">10.55% Example</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Compare Seattle&apos;s dated example rate with Montana prep and routing costs.
                </p>
              </Link>
              <Link href="/tax-savings/texas-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">Texas</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">8.25% Example</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Compare Texas delivery and property-tax considerations with Montana fulfillment.
                </p>
              </Link>
              <Link href="/tax-savings/new-york-to-montana-3pl" className="group flex flex-col p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-zinc-900 text-lg group-hover:text-amber-600 transition-colors">New York</span>
                  <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">8.875% Example</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Compare New York City&apos;s rate example with published Montana fulfillment costs.
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
                <p className="m-0 leading-relaxed">Montana has no general statewide sales tax. Qualifying purchases delivered directly to a Montana prep facility may be billed without state sales tax; actual treatment and savings depend on the seller, transaction, and purchaser’s obligations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">What are the baseline prep rates for Such Group E-Commerce?</h3>
                <p className="m-0 leading-relaxed">Monthly FBA prep pricing is volume-tiered: 1–500 units at $1.45, 501–1,000 units at $1.35, 1,001–2,000 units at $1.25, 2,001–5,000 units at $1.15, and 5,001–10,000 units at $1.00 per unit (over 10,000 by quote). Wholesale prep is $1.15 down to $0.90 per unit. Price includes receiving, inspection, wrapping, poly-bagging, FNSKU labeling, reused boxes, and dunnage. Storage is free for the first 14 days.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Does holding inventory in Montana create state tax liability?</h3>
                <p className="m-0 leading-relaxed">Storing inventory or conducting other business activities in Montana may create tax nexus or filing obligations depending on the seller’s entity, activities, property, and transaction structure. Public Law 86-272 generally addresses protected solicitation activities and should not be treated as a blanket warehousing exemption. Sellers should obtain a determination from the Montana Department of Revenue or a qualified tax professional.</p>
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
              <strong>Primary Statutory References:</strong> See the <a href="https://revenue.mt.gov/taxes/general-sales-tax" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Montana Department of Revenue General Sales Tax Guidance</a> and <a href="https://revenuefiles.mt.gov/taxes/nexus" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Montana Department of Revenue Nexus Guidance</a>. Interstate commerce provisions are defined under <a href="https://www.law.cornell.edu/uscode/text/15/381" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">15 U.S. Code &sect; 381 (Public Law 86-272)</a>. Physical presence, economic nexus thresholds, and sales-tax sourcing rules vary by seller, jurisdiction, and business structure. Always consult a licensed CPA or tax attorney regarding your obligations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
