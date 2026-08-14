import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Texas to Montana 3PL: Drop 8.25% Sales Tax and Inventory Property Tax",
  description:
    "Texas Amazon sellers pay 8.25% checkout tax and face annual inventory property taxes. Ship to Such Group E-commerce in Montana. Zero sales tax. No property tax on goods. FBA prep from $1.45/unit.",
  alternates: {
    canonical: "https://suchgroupecommerce.com/tax-savings/texas-to-montana-3pl",
  },
};

export default function TexasToMontanaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suchgroupecommerce.com/tax-savings/texas-to-montana-3pl",
        url: "https://suchgroupecommerce.com/tax-savings/texas-to-montana-3pl",
        name: "Texas to Montana 3PL: Drop 8.25% Sales Tax and Inventory Property Tax",
        description:
          "Texas Amazon FBA sellers eliminate 8.25% checkout tax and avoid January 1st inventory property taxes by routing inventory through Such Group E-commerce in Great Falls, Montana.",
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
            name: "Can a Texas seller legally use a Montana 3PL to avoid sales tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Sales tax is charged based on the delivery address. Shipping purchases to a Montana address means the checkout system applies Montana's 0% sales tax rate. This is standard destination-based tax law.",
            },
          },
          {
            "@type": "Question",
            name: "Does storing inventory in Montana protect me from Texas inventory property tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Texas county appraisal districts can only tax inventory that is physically inside the state on January 1st. Goods stored in Montana are outside their jurisdiction entirely.",
            },
          },
          {
            "@type": "Question",
            name: "How long does ground freight take from Texas to Great Falls, Montana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ground shipping from Dallas, Houston, or Austin to Great Falls typically takes 3 to 4 business days through the central US freight corridor.",
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
        <p className="text-sm font-semibold text-orange-600 tracking-wide uppercase mb-3">
          Texas FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Eliminate Texas Inventory Rendition and 8.25% Sourcing Taxes
        </h1>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-14 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-orange-600">The Montana Advantage: </span>
            Texas Amazon merchants get hit twice with an 8.25% sales tax at checkout and an annual Business Personal Property Tax on inventory held on January 1st. Staging your sourcing pipeline at Such Group E-commerce in Great Falls, Montana eliminates the 8.25% tax penalty and removes your goods from Texas property tax jurisdiction. You protect your margins and get FBA prep starting at $1.45 per unit.
          </p>
        </div>

        {/* The Two Texas Taxes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            The January 1st Property Tax Penalty on Dallas & Houston Warehouses
          </h2>

          <div className="space-y-6">
            {/* Tax 1 */}
            <div className="border-l-4 border-orange-400 bg-white rounded-r-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-extrabold text-orange-500 shrink-0">01</span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">The 8.25% checkout tax</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Texas charges 6.25% state sales tax. Cities and counties stack up to 2% on top. In Dallas, Houston, Austin, and San Antonio, you pay the full 8.25% on every retail purchase shipped to a Texas address. Source $50,000 in inventory and $4,125 goes straight to the Comptroller before you list a single product.
                  </p>
                </div>
              </div>
            </div>

            {/* Tax 2 */}
            <div className="border-l-4 border-rose-400 bg-white rounded-r-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-extrabold text-rose-500 shrink-0">02</span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">The January 1st inventory property tax</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    Texas is one of the only states that lets county appraisal districts tax your unsold inventory. Every year on January 1st, they snapshot whatever goods sit inside the state. You get a rendition form. You owe property tax on the assessed value of those products. It does not matter if you sell them the next day. If they were in Texas on New Year&apos;s Day, you pay.
                  </p>
                </div>
              </div>
            </div>

            {/* The Fix */}
            <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-extrabold text-emerald-600 shrink-0">Fix</span>
                <div>
                  <p className="text-zinc-800 leading-relaxed">
                    Ship to <Link href="/montana-tax-free-3pl" className="text-emerald-600 underline font-semibold hover:text-emerald-700 transition-colors">Such Group E-commerce in Montana</Link>. Montana has zero sales tax. Zero inventory property tax. The checkout system sees a Montana address and charges nothing. And on January 1st, your goods are sitting in our warehouse in Great Falls, completely outside of Texas jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Frequency Sourcing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Central US Logistics: Moving Wholesale Freight to Great Falls
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Texas is a hub for wholesale sourcing. Tons of Amazon sellers in DFW, Houston, and Austin run high-volume operations. They buy fast, prep fast, and ship fast. That speed is an advantage, but it also means the 8.25% tax hits more often.
            </p>
            <p>
              Every purchase order shipped to a Texas address gets taxed. Ten orders a week means ten tax hits. Route those same orders to Montana and every single one of them goes through at zero tax. Over a year, that adds up to thousands of dollars back in your operating budget.
            </p>
            <p>
              The freight corridor from Texas to Montana runs straight up I-25 and I-15. Ground transit takes 3 to 4 business days. Not fast enough for overnight restocks, but perfect for steady inventory flow where you plan ahead.
            </p>
          </div>
        </section>

        {/* Feature List: What Changes When You Move */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            FBA Prep That Actually Protects Your Acquisition Capital
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-sm font-bold">✓</div>
              <div>
                <p className="font-bold text-zinc-900">Checkout tax drops to zero</p>
                <p className="text-sm text-zinc-600 mt-1">Every online purchase shipped to our Montana address skips the 8.25% automatically. The retailer&apos;s system sees a 0% tax state and charges nothing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-sm font-bold">✓</div>
              <div>
                <p className="font-bold text-zinc-900">No more rendition forms</p>
                <p className="text-sm text-zinc-600 mt-1">Your inventory sits in Great Falls on January 1st, not in Harris County or Dallas County. The appraisal district cannot touch goods in Montana.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-sm font-bold">✓</div>
              <div>
                <p className="font-bold text-zinc-900">No Montana income tax risk</p>
                <p className="text-sm text-zinc-600 mt-1">Federal law (Public Law 86-272) protects out-of-state sellers who use Montana only for warehousing through a third-party facility like ours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-sm font-bold">✓</div>
              <div>
                <p className="font-bold text-zinc-900">Central US distribution stays fast</p>
                <p className="text-sm text-zinc-600 mt-1">Once prepped, your units go directly into Amazon&apos;s inbound network. Amazon distributes them to fulfillment centers nationwide. The end customer sees the same delivery speed.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-sm font-bold">✓</div>
              <div>
                <p className="font-bold text-zinc-900">Wholesale resale certificates work cleanly</p>
                <p className="text-sm text-zinc-600 mt-1">For wholesale B2B orders, we help you present a Montana Business Registry Resale Certificate. No hassle with Texas Comptroller forms or supplier pushback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Prep pricing for Texas sellers
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Every unit gets the full prep treatment: receiving, inspection, FNSKU barcodes, poly-bagging, and shipment creation into Amazon Seller Central.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center shadow-sm">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">1 to 500 units</p>
              <p className="text-3xl font-extrabold text-zinc-900 my-2">$1.45</p>
              <p className="text-xs text-zinc-500">per unit</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center shadow-sm">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">501 to 5,000</p>
              <p className="text-3xl font-extrabold text-zinc-900 my-2">$1.25</p>
              <p className="text-xs text-zinc-500">per unit</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center shadow-sm">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">5,001+</p>
              <p className="text-3xl font-extrabold text-zinc-900 my-2">$1.00</p>
              <p className="text-xs text-zinc-500">per unit</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4">
            Storage is free for 14 days. We integrate with Amazon Seller Central, Shopify, TikTok Shop, and Walmart WFS.
          </p>
        </section>

        {/* Pillar Guide CTA */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white mb-2">See the full tax-free playbook</h3>
          <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
            Our complete guide breaks down destination-based tax rules, total fulfillment cost math, and how to set up your first shipment to Montana.
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
            Answers for Texas sellers
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Is this actually legal?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Yes. Destination-based tax rules say the tax rate matches the delivery address. Ship to Montana and the tax is zero. This is standard tax law, not a loophole.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Does this protect me from the January inventory tax?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Yes. Texas appraisal districts can only assess property tax on goods physically inside the state on January 1st. If your inventory is in our Montana warehouse, it is outside their reach.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Do I need a Texas resale certificate?</h3>
              <p className="m-0 leading-relaxed text-zinc-700">
                Not for retail purchases. The Montana shipping address makes the tax zero at checkout automatically. For wholesale orders, you present a Montana Business Registry Resale Certificate to your distributor. We help you set that up.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
