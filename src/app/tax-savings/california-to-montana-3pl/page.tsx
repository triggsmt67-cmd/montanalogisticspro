import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "California to Montana 3PL Tax Savings",
  description:
    "Compare California delivery tax with Montana fulfillment costs. Such Group offers FBA prep from $1.45 per unit; tax treatment varies.",
  alternates: {
    canonical: "/tax-savings/california-to-montana-3pl",
  },
  openGraph: {
    title: "California to Montana 3PL Tax Savings | Such Group E-Commerce",
    description:
      "Compare California delivery tax with Montana fulfillment costs. FBA prep starts at $1.45 per unit; tax treatment and savings vary.",
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
      "Compare California delivery tax with Montana fulfillment costs. FBA prep starts at $1.45 per unit; tax treatment and savings vary.",
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
        name: "California to Montana 3PL Tax and Fulfillment Cost Comparison",
        description:
          "A planning guide for comparing California delivery tax, freight, and published Montana FBA prep costs. Tax treatment depends on the seller, transaction, and purchaser obligations.",
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
            name: "How can a California seller evaluate delivery to a Montana prep center?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For many shipped retail transactions, the delivery destination affects the tax charged by the seller. A qualifying purchase delivered to Montana may be billed without state sales tax because Montana has no general statewide sales tax. Treatment varies by seller, transaction, and purchaser obligations.",
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
              text: "Documentation requirements depend on the seller and transaction. A qualifying retail purchase delivered to Montana may be billed without state sales tax, while wholesale or resale purchases may require valid documentation accepted by the supplier. Confirm requirements with the supplier and a qualified tax adviser.",
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
        <p className="text-sm font-semibold text-amber-600 tracking-wide uppercase mb-3">
          California FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          California to Montana 3PL: Compare Tax, Freight, and FBA Prep Costs
        </h1>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-amber-600">The Financial Impact: </span>
            California sales-tax rates vary by delivery location. Qualifying retail purchases delivered directly to Such Group E-Commerce in Great Falls may be billed without state sales tax because Montana has no general statewide sales tax. Actual treatment and savings depend on the seller and transaction. FBA prep starts at $1.45 per unit.
          </p>
        </div>

        {/* The Real Cost: Grid Math Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Illustrative California Delivery-Tax Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $25K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$2,562</p>
              <p className="text-sm text-zinc-500 mt-2">Illustrative tax at 10.25% if fully taxable</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $50K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$5,125</p>
              <p className="text-sm text-zinc-500 mt-2">Illustrative tax at 10.25% if fully taxable</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-center">
              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">You source $100K in inventory</p>
              <p className="text-4xl font-extrabold text-rose-600">$10,250</p>
              <p className="text-sm text-zinc-500 mt-2">Illustrative tax at 10.25% if fully taxable</p>
            </div>
          </div>
          <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
            <p className="text-lg font-bold text-emerald-800">
              A Montana delivery may change the checkout-tax comparison.
            </p>
            <p className="text-sm text-emerald-700 mt-1">
              Montana has no general statewide sales tax. Whether a seller bills tax depends on the transaction, documentation, and applicable law; this illustration is not a guaranteed saving.
            </p>
          </div>
        </section>

        {/* Port Cities Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Comparing West Coast Freight and Delivery-Tax Costs
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              California combines a statewide base sales-tax rate with applicable district rates. The rate charged can vary by delivery location and transaction.
            </p>
            <p>
              A taxable online purchase delivered to a California address may be billed at the applicable combined rate. Resale treatment, exemptions, seller practices, and purchaser obligations can change the result.
            </p>
            <p>
              Importers should compare drayage, freight, tax treatment, prep, storage, and onward-shipping costs rather than assuming the delivery address alone determines total liability.
            </p>
            <p>
              If a qualifying purchase is instead delivered to Great Falls, Montana, the seller may bill it without state sales tax. Any reduction in landed cost depends on the original delivery rate, seller treatment, freight, and the purchaser&apos;s own tax obligations.
            </p>
          </div>
        </section>

        {/* Does the Freight Math Work? */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Does the California-to-Montana Freight Math Work?
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-6">
            It depends on the product, supplier, carrier, destination, tax treatment, and monthly volume. The examples below use assumed freight and a 10% comparison rate solely to show the calculation; they are not quotes or promised savings.
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
                Products above $20 and under 5 lbs may be good candidates for the Montana route, but savings are not guaranteed. Compare applicable tax, freight, prep, storage, and onward-shipping costs for your specific units.
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
              Montana has no general statewide sales tax. That fact alone does not determine every registration, income-tax, use-tax, or filing obligation a business may have because of its entity, property, activities, or transactions. Obtain advice for your specific structure.
            </p>
            <p>
              Storing inventory or conducting other business activities in Montana may create tax nexus or filing obligations depending on the seller’s entity, activities, property, and transaction structure. Public Law 86-272 generally addresses protected solicitation activities and should not be treated as a blanket warehousing exemption. Sellers should obtain a determination from the Montana Department of Revenue or a qualified tax professional.
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
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm text-zinc-700 leading-relaxed">
            <p>
              Published monthly FBA rates are $1.45 per unit for 1–500 units, $1.35 for 501–1,000, $1.25 for 1,001–2,000, $1.15 for 2,001–5,000, and $1.00 for 5,001–10,000. Volumes over 10,000 require a quote; there is no minimum shipment or minimum charge.
            </p>
            <p className="mt-3">
              The base rate includes receiving, inspection, FNSKU labeling, standard poly-bagging and warnings when needed, barcode and price-tag covering or removal, suitable reused boxes, dunnage, securing, and shipping-label printing and application. Seller-paid postage, freight, storage after 14 days, oversized or special packaging, and other listed add-ons are separate. See the <Link href="/pricing" className="text-emerald-700 underline font-semibold">complete pricing and policy details</Link>.
            </p>
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
                For many shipped retail transactions, the delivery destination affects the tax charged by the seller. A qualifying purchase delivered to our Montana warehouse may be billed without state sales tax. Treatment varies by seller, transaction, and purchaser obligations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Do I need a resale certificate?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Documentation requirements depend on the seller and transaction. Wholesale or resale purchases may require valid documentation accepted by the supplier. Confirm the required form with the supplier and a qualified tax adviser; we do not provide tax or legal advice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">How long does shipping take from California?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Carrier transit times vary by origin, service, weather, and peak volume. After a shipment is checked in, we target the agreed processing window; timing is confirmed during onboarding and can change for exceptions or unusually large receipts.
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
              &bull; <strong>[SRC-CDTFA-001]</strong> California Department of Tax and Fee Administration: <em><a href="https://www.cdtfa.ca.gov/taxes-and-fees/rates.aspx" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">California City and County Sales and Use Tax Rates</a></em> and <em><a href="https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1620.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Regulation 1620 (Interstate and Foreign Commerce)</a></em>. Confirms 7.25% statewide base rate with combined district taxes up to 10.25%+.
            </li>
            <li>
              &bull; <strong>[SRC-MT-DOR-001]</strong> Montana Department of Revenue: <em><a href="https://revenue.mt.gov/taxes/general-sales-tax" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">General Sales Tax Guidance</a></em> and <em><a href="https://revenuefiles.mt.gov/taxes/nexus" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Montana Tax Nexus Guidelines</a></em>. Confirms that Montana has no general-use sales tax while other business obligations remain fact-specific.
            </li>
            <li>
              &bull; <strong>[SRC-CDTFA-002]</strong> California Department of Tax and Fee Administration: <em><a href="https://www.cdtfa.ca.gov/lawguides/vol1/sutr/1668.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-600">Regulation 1668 (Sales for Resale)</a></em>.
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
