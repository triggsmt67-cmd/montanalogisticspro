import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "New York to Montana 3PL: Cut 8.875% NYC Sales Tax on Amazon FBA Inventory",
  description:
    "New York Amazon sellers pay up to 8.875% sales tax in the NYC metro area. Ship inventory to Such Group E-commerce in Montana for zero checkout tax and lower warehouse costs. FBA prep from $1.45/unit.",
  alternates: {
    canonical: "https://suchgroupecommerce.com/tax-savings/new-york-to-montana-3pl",
  },
};

export default function NewYorkToMontanaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suchgroupecommerce.com/tax-savings/new-york-to-montana-3pl",
        url: "https://suchgroupecommerce.com/tax-savings/new-york-to-montana-3pl",
        name: "New York to Montana 3PL: Cut 8.875% NYC Sales Tax on Amazon FBA Inventory",
        description:
          "New York Amazon FBA sellers save up to 8.875% on inventory costs and escape high East Coast warehousing rates by shipping to Such Group E-commerce in Great Falls, Montana.",
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
            name: "Can a New York seller legally ship inventory to Montana to avoid sales tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Sales tax is charged based on the delivery address. When you ship to a Montana address, the checkout system applies 0% because Montana has no state or local sales tax.",
            },
          },
          {
            "@type": "Question",
            name: "Does using a Montana 3PL create New York income tax problems?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Federal Public Law 86-272 protects out-of-state sellers whose only Montana activity is warehousing through an independent third party. Storing goods in Montana does not create state income tax liability there.",
            },
          },
          {
            "@type": "Question",
            name: "How long does shipping take from New York to Great Falls, Montana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ground freight from the New York metro area to Great Falls takes 4 to 5 business days. Suppliers in the Midwest deliver in 2 to 3 days.",
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
        <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
          New York FBA Sellers
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Escape East Coast Overhead: Zero Tax Amazon Prep for NY Sellers
        </h1>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-14 shadow-sm">
          <p className="text-lg font-medium text-zinc-900 leading-relaxed">
            <span className="font-bold text-blue-600">The Real Cost: </span>
            New York e-commerce sellers pay up to 8.875% in sales tax while competing for high-cost East Coast warehouse space. Rerouting your sourcing pipeline to Such Group E-commerce in Montana legally eliminates checkout tax at the state line. You avoid bloated metro warehousing fees, protect your operating cash, and lock in FBA prep starting at $1.45 per unit.
          </p>
        </div>

        {/* The NYC Cost Problem: Card Layout */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Multi-Tier Metro Taxes and Cramped NYC Real Estate Costs
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-2">Sales tax burden</p>
                <p className="text-3xl font-extrabold text-zinc-900 mb-2">8.875%</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  The combined rate in New York City. Manhattan, Brooklyn, Queens, the Bronx, and Staten Island all pay the same. That is 4% state tax plus 4.5% city tax plus a 0.375% metro surcharge. Source $40,000 in inventory and $3,550 vanishes at checkout.
                </p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-semibold text-rose-600 uppercase tracking-wide mb-2">Warehouse costs</p>
                <p className="text-3xl font-extrabold text-zinc-900 mb-2">$20+/sqft</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Commercial warehouse space in the NYC metro runs $18 to $25 per square foot annually. In northern New Jersey, it is $12 to $16. Either way, you are paying a premium just to store boxes before they even get to Amazon.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="shrink-0">
                  <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-1">Montana alternative</p>
                  <p className="text-3xl font-extrabold text-emerald-800">$0 tax + $1.45/unit</p>
                </div>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Ship to <Link href="/montana-tax-free-3pl" className="text-emerald-600 underline font-semibold hover:text-emerald-700 transition-colors">Such Group in Great Falls</Link>. Zero sales tax at checkout. 14 days of free storage. Prep, labeling, and shipment creation included in the per-unit fee. Your East Coast overhead problem goes away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-tier Metro Taxes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Rerouting Your Supply Chain to a Tax-Free Haven
          </h2>
          <div className="space-y-4 text-zinc-700 text-lg leading-relaxed">
            <p>
              Most states have a state rate and a local rate. New York has three. The state charges 4%. New York City adds 4.5%. Then the Metropolitan Commuter Transportation District adds 0.375% on top. You end up at 8.875% inside the city.
            </p>
            <p>
              Outside the city, the numbers shift but stay high. Westchester County is 8.375%. Nassau and Suffolk County on Long Island are 8.625%. Yonkers, White Plains, and Jersey City suppliers all charge rates above 7%.
            </p>
            <p>
              Every online purchase shipped to any address in these areas triggers the full combined rate at checkout. Your retail buying trips, your wholesale orders, your bulk restocks. All of them get taxed before the box even opens.
            </p>
            <p>
              When you ship to Montana instead, the checkout software reads our Great Falls address and charges zero. No state tax. No city tax. No transit district surcharge. The total drops, and the difference goes straight to your bank account.
            </p>
          </div>
        </section>

        {/* East Coast Real Estate Problem */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            The Financial Impact on High-Volume Arbitrage
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-zinc-900 text-lg mb-2">The garage and basement trap</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Plenty of NYC sellers start by storing inventory in their apartment, garage, or a rented storage unit. The space fills up fast. You trip over boxes. Your living room becomes a warehouse. And you still pay the full checkout tax because everything shipped to a New York address gets hit.
                </p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-zinc-900 text-lg mb-2">The East Coast prep center markup</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Prep centers in NJ, CT, and Long Island charge premium rates because their lease costs are premium. You are not paying for better service. You are paying for their zip code. Prep fees of $2.00 to $3.50 per unit are common in the tri-state area.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-sm text-white">
              <h3 className="font-bold text-lg mb-2">Montana changes the equation</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Our Great Falls facility runs at a fraction of East Coast overhead. That is why we can offer prep at $1.45 per unit with 14 days of free storage. You get better rates because our costs are lower. Not because we cut corners.
              </p>
            </div>
          </div>
        </section>

        {/* Product Math */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            The products that save the most on this route
          </h2>
          <p className="text-lg text-zinc-700 leading-relaxed mb-6">
            New York to Montana crosses carrier Zones 6 and 7. That is a longer freight lane, so the math favors light, high-value products. Heavy, cheap items are better shipped direct.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-zinc-900">Apparel</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">+$2.49/unit</span>
                </div>
                <p className="text-sm text-zinc-600">1 lb, $50 cost. Tax saved: $4.44. Prep + freight: $1.95.</p>
              </div>
              <div className="flex-1 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-zinc-900">Cosmetics</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">+$5.74/unit</span>
                </div>
                <p className="text-sm text-zinc-600">0.5 lbs, $85 cost. Tax saved: $7.54. Prep + freight: $1.80.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-zinc-900">Electronics</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">+$10.55/unit</span>
                </div>
                <p className="text-sm text-zinc-600">1.5 lbs, $140 cost. Tax saved: $12.43. Prep + freight: $1.88.</p>
              </div>
              <div className="flex-1 bg-white border border-rose-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-zinc-900">Heavy appliance</span>
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">-$2.33/unit</span>
                </div>
                <p className="text-sm text-zinc-600">20 lbs, $60 cost. Tax saved: $5.32. Prep + freight: $7.65. Ship these direct.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            What you pay and what is included
          </h2>
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wide font-semibold">1 to 500 units</p>
                <p className="text-2xl font-extrabold text-zinc-900">$1.45<span className="text-sm font-normal text-zinc-500">/unit</span></p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wide font-semibold">501 to 5,000</p>
                <p className="text-2xl font-extrabold text-zinc-900">$1.25<span className="text-sm font-normal text-zinc-500">/unit</span></p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wide font-semibold">5,001+</p>
                <p className="text-2xl font-extrabold text-zinc-900">$1.00<span className="text-sm font-normal text-zinc-500">/unit</span></p>
              </div>
            </div>
            <div className="border-t border-zinc-100 pt-4 text-sm text-zinc-600 leading-relaxed">
              <p>
                <strong className="text-zinc-900">Included in every prep:</strong> receiving, inspection, FNSKU labeling, poly-bagging, and shipment creation into Amazon Seller Central. Storage is free for the first 14 days. We also integrate with Shopify, TikTok Shop, and Walmart WFS.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar Guide CTA */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white mb-2">Get the complete guide</h3>
          <p className="text-zinc-400 text-lg mb-6 max-w-2xl">
            Our full Montana Tax-Free 3PL guide walks through how destination-based tax works, total cost math, and how to get started with your first shipment.
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
            What New York sellers want to know
          </h2>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-lg font-bold">Q</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Is this legal?</h3>
                <p className="text-zinc-700 leading-relaxed m-0">
                  Yes. Sales tax is charged based on where the product is delivered. Ship to Montana and the checkout tax is zero. This is how destination-based tax law works across the US.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-lg font-bold">Q</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">Will this cause New York income tax issues?</h3>
                <p className="text-zinc-700 leading-relaxed m-0">
                  No. Storing goods in Montana through a third-party warehouse like ours is protected under federal Public Law 86-272. You will not owe Montana income tax just for having inventory in our building.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-lg font-bold">Q</div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2 mt-0">How long does freight take from New York?</h3>
                <p className="text-zinc-700 leading-relaxed m-0">
                  Ground shipping from the NYC metro area to Great Falls takes 4 to 5 business days. If your suppliers are in the Midwest, transit drops to 2 to 3 days. We start processing your units within 24 hours of arrival.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
