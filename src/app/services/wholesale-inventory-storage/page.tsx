import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Warehouse,
  ShieldAlert,
  DollarSign,
  TrainFront,
  FileWarning,
  Thermometer,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Wholesale Inventory Storage & Cross-Docking in Montana | Such Group E-commerce",
  description:
    "Enterprise B2B warehousing, BNSF rail cross-docking, and zero inventory tax staging in Great Falls, Montana.",
  alternates: {
    canonical:
      "https://suchgroupecommerce.com/services/wholesale-inventory-storage",
  },
};

export default function WholesaleInventoryStoragePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Wholesale Inventory Storage",
        provider: {
          "@type": "Organization",
          name: "Such Group E-commerce",
        },
        description:
          "Enterprise B2B warehousing, BNSF rail cross-docking, and zero inventory tax staging in Great Falls, Montana.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do you handle California drop-shipment compliance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "California aggressively polices drop shipments and unequivocally rejects out-of-state resale certificates. To drop-ship to a California consumer from a California supplier, you must register for a California Seller's Permit. We guide you through these specific state-by-state traps so you avoid massive retail tax liabilities.",
            },
          },
          {
            "@type": "Question",
            name: "What are your wholesale cross-docking capabilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We support high-velocity LTL and FTL receiving. We pull bulk freight, break it down, and route it to outbound carriers fast. Our facility also maintains strict climate-controlled environments for inventory subject to degradation. We run continuous cycle count audits to ensure perfect inventory integrity over long staging periods.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer tiered pricing for wholesale storage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every enterprise operation requires a custom footprint. We do not force you into rigid volume tiers. We evaluate your pallet count, rail transload needs, and staging duration to build a flat, predictable pricing structure for your specific supply chain.",
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

      <main className="flex-grow pt-12 md:pt-16 pb-24 px-4 sm:px-6 max-w-5xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-emerald-600 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Overview
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Enterprise B2B &bull; Great Falls, Montana
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Wholesale Inventory Storage: B2B Cross-Docking and Freight
            Forwarding
          </h1>
        </header>

        {/* Hero Callout Box */}
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 md:p-10 mb-14 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600" />
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 bg-emerald-100/80 rounded-xl text-emerald-700 shrink-0">
              <Warehouse className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                The Bottom Line
              </p>
              <p className="text-base sm:text-lg md:text-xl text-zinc-900 font-medium leading-relaxed">
                Enterprise wholesale buyers do not route inventory through Montana to avoid retail checkout tax; they use home-state resale certificates for that. You stage inventory at our Great Falls 3PL to exploit Foreign-Trade Zone 274 tariff deferrals, eliminate state inventory property taxes, and execute high-velocity B2B cross-docking directly off the BNSF Railway network.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* The Zero Inventory Tax Reality */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              The Zero Inventory Tax Reality
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Montana offers a massive financial benefit for enterprise
                wholesalers. The state does not assess an inventory property tax.
                If you stage massive volumes of goods in states like Texas, you
                get hit with annual property taxes on your unsold stock. You can
                stage thousands of pallets here in Great Falls without incurring
                that annual penalty. You protect your capital efficiency.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50/60 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span>Texas and Similar States</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Annual inventory property tax assessed on goods stored inside
                  the state. Every pallet sitting on January 1st gets taxed.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <DollarSign className="w-5 h-5 shrink-0" />
                  <span>Montana</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Zero inventory property tax. Stage thousands of pallets in
                  Great Falls with no annual penalty on your unsold stock.
                </p>
              </div>
            </div>
          </section>

          {/* BNSF Rail and Foreign-Trade Zone 274 */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              BNSF Rail and Foreign-Trade Zone 274
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                We handle massive enterprise volume. Our region operates as
                Foreign-Trade Zone 274. This gives you tariff and duty deferrals
                on imported bulk goods until they officially enter domestic
                commerce. We also tie directly into the BNSF Railway network. We
                pull freight straight from railcars to long-haul trucks or
                temporary climate-controlled staging. You get high-capacity
                distribution straight into the Pacific Northwest and Canada.
              </p>
            </div>

            {/* Capability Cards */}
            <div className="mt-8 bg-zinc-950 text-white rounded-xl p-6 sm:p-8 border border-zinc-800 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <TrainFront className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">
                    BNSF Rail Access
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Direct railcar-to-truck transloading from the BNSF mainline.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Globe className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">FTZ 274</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Tariff and duty deferrals on imported goods until domestic
                    entry.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Thermometer className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">
                    Climate-Controlled
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Temperature-managed staging for sensitive inventory.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Defeating Out-of-State Vendor Rejections */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Defeating Out-of-State Vendor Rejections
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Automated compliance systems frequently reject Montana business
                credentials. Vendors look for a standard 9-digit state tax
                permit, and Montana does not issue those. When a strict state
                kicks back your Multistate Tax Commission form, it kills your
                drop-shipping pipeline. We know exactly how to fix this. We hand
                you the exact statutory proof and escalation protocols to force
                manual overrides with your vendors. Your supply chain stays
                unbroken.
              </p>
            </div>

            {/* Escalation Process */}
            <div className="mt-8 bg-amber-50/60 border border-amber-200 rounded-xl p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 text-amber-700 rounded-lg shrink-0 mt-0.5">
                  <FileWarning className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm sm:text-base mb-1">
                    Vendor Portal Rejection?
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    We provide the exact Montana statutory documentation and
                    step-by-step escalation protocols so your vendor&apos;s tax
                    compliance desk processes your credentials manually. No more
                    dead pipelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-8">
              Frequently Asked Questions About B2B Storage
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  How do you handle California drop-shipment compliance?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  California aggressively polices drop shipments and
                  unequivocally rejects out-of-state resale certificates. To
                  drop-ship to a California consumer from a California supplier,
                  you must register for a California Seller&apos;s Permit. We
                  guide you through these specific state-by-state traps so you
                  avoid massive retail tax liabilities.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  What are your wholesale cross-docking capabilities?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  We support high-velocity LTL and FTL receiving. We pull bulk
                  freight, break it down, and route it to outbound carriers
                  fast. Our facility also maintains strict climate-controlled
                  environments for inventory subject to degradation. We run
                  continuous cycle count audits to ensure perfect inventory
                  integrity over long staging periods.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Do you offer tiered pricing for wholesale prep and storage?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Yes. For bulk wholesale prep (same-SKU), our volume-tiered rates are:
                  <br />
                  &bull; <strong>300 – 2,500 units:</strong> $1.15 / unit
                  <br />
                  &bull; <strong>2,501 – 5,000 units:</strong> $1.00 / unit
                  <br />
                  &bull; <strong>5,001 – 10,000 units:</strong> $0.90 / unit
                  <br />
                  &bull; <strong>10,000+ units:</strong> Contact us for a custom quote
                  <br />
                  Price includes receiving, inspection, wrapping, poly bag, FNSKU label, reused boxes, and dunnage. For enterprise freight storage, rail transloading, and FTZ cross-docking, we evaluate your pallet count and staging duration for a flat, predictable structure.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need enterprise staging capacity in Montana?
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Tell us your pallet count, staging duration, and distribution
                targets. We build a custom warehousing plan around your supply
                chain.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <Link
                href="/#fit-review"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] text-center text-sm"
              >
                <span>Start Fit Review</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/montana-tax-free-3pl"
                className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors border border-zinc-700 text-center text-sm"
              >
                Read 3PL Pillar Guide
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
