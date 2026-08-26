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
  title: "Wholesale Storage & Cross-Docking",
  description:
    "Wholesale prep, pallet and carton receiving, storage, cross-docking, container unloading, and forwarding from Great Falls, Montana.",
  alternates: {
    canonical: "/services/wholesale-inventory-storage",
  },
  openGraph: {
    title: "Wholesale Storage & Cross-Docking | Such Group E-Commerce",
    description:
      "Wholesale prep, pallet and carton receiving, storage, cross-docking, container unloading, and forwarding from Great Falls, Montana.",
    url: "https://suchgroupecommerce.com/services/wholesale-inventory-storage",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wholesale Storage & Cross-Docking | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Storage & Cross-Docking | Such Group E-Commerce",
    description:
      "Wholesale prep, pallet and carton receiving, storage, cross-docking, container unloading, and forwarding from Great Falls, Montana.",
    images: ["/og-image.png"],
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
          "Wholesale prep, inventory storage, pallet and carton receiving, container unloading, cross-docking, and forwarding in Great Falls, Montana.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you provide tax or drop-shipment compliance advice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Such Group E-Commerce provides logistics services, not legal, tax, or accounting advice. Supplier documentation, registration, resale, drop-shipment, property-tax, nexus, and filing requirements depend on the client and transaction. Confirm them with the supplier and a qualified adviser.",
            },
          },
          {
            "@type": "Question",
            name: "What are your wholesale cross-docking capabilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Published services include box and pallet receiving, 20-foot and 40-foot container unloading, palletization, carton forwarding, pallet forwarding, and cubic-foot storage. Shipment condition, appointments, equipment, special handling, and carrier requirements are confirmed before arrival.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer tiered pricing for wholesale storage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Wholesale prep is $1.15 per unit for 300–2,500 units, $1.00 for 2,501–5,000 units, and $0.90 for 5,001–10,000 units. Volume over 10,000 is quoted. The first 14 days of storage are free; published cubic-foot rates begin on day 15. Additional handling and forwarding rates are listed on the pricing page.",
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
                Enterprise wholesale buyers generally use applicable resale documentation rather than relying on a delivery address alone. Our Great Falls 3PL supports pallet staging, regional freight access, and B2B cross-docking. Inventory-property-tax, nexus, registration, and filing treatment depends on the client, goods, and jurisdictions involved; obtain advice for your specific structure.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Tax and storage context */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Tax Treatment Requires a Facts-and-Circumstances Review
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Montana has no general statewide sales tax, but that fact does not
                determine a client&apos;s inventory-property-tax, nexus, registration,
                income-tax, use-tax, or filing obligations. Those questions depend
                on the inventory, owner, location, relevant date, exemptions, and
                business activities. Such Group E-Commerce provides storage and
                logistics services; clients should obtain advice for their facts.
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
                  Texas property-tax and rendition treatment depends on location,
                  ownership, valuation date, exemptions, and the client&apos;s activities.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <DollarSign className="w-5 h-5 shrink-0" />
                  <span>Montana</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Montana has no general statewide sales tax. Property-tax and
                  filing treatment depends on the inventory, owner, and applicable jurisdiction.
                </p>
              </div>
            </div>
          </section>

          {/* Receiving and forwarding */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Receiving, Container Unloading, and Forwarding
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Published services include box and pallet receiving, 20-foot and
                40-foot container unloading, palletization, carton forwarding,
                pallet forwarding, cross-docking, and cubic-foot storage. Shipment
                appointments, equipment, condition, special handling, and carrier
                requirements must be confirmed before arrival.
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
                    Container Receiving
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Published unloading rates are available for 20-foot and 40-foot containers, subject to appointment and scope confirmation.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Globe className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Carton &amp; Pallet Forwarding</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Unopened cartons and pallets can be received, labeled, staged,
                    and forwarded under the approved instructions.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Thermometer className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">
                    Published Storage Rates
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The first 14 days are free. Cubic-foot rates begin on day 15, with a separate Q4 rate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Forwarding scope */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              What Carton Forwarding Includes
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Carton forwarding covers printing and attaching shipping labels
                to unopened cartons. Product inspection and unit labeling are not
                included in the forwarding rate. Box receiving is $1.50 per box,
                forwarding is $4.00 per carton, pallet receiving is $18.00, and
                pallet forwarding is $20.00. Carrier postage remains the seller&apos;s
                responsibility.
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
                    Need inspection or unit-level prep?
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Use the applicable standard FBA or wholesale prep rate instead
                    of carton forwarding. Special handling is quoted before work
                    begins.
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
                  Do you provide tax or drop-shipment compliance advice?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  No. Such Group E-Commerce provides logistics services, not
                  legal, tax, or accounting advice. Supplier documentation,
                  registration, resale, drop-shipment, property-tax, nexus, and
                  filing requirements depend on the client and transaction.
                  Confirm them with the supplier and a qualified adviser.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  What are your wholesale cross-docking capabilities?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Published services include box and pallet receiving, 20-foot and
                  40-foot container unloading, palletization, carton forwarding,
                  pallet forwarding, and cubic-foot storage. Shipment condition,
                  appointments, equipment, special handling, and carrier
                  requirements are confirmed before arrival.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Do you offer tiered pricing for wholesale prep and storage?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Published wholesale prep volume tiers are:
                  <br />
                  &bull; <strong>300 – 2,500 units:</strong> $1.15 / unit
                  <br />
                  &bull; <strong>2,501 – 5,000 units:</strong> $1.00 / unit
                  <br />
                  &bull; <strong>5,001 – 10,000 units:</strong> $0.90 / unit
                  <br />
                  &bull; <strong>Over 10,000 units:</strong> Contact us for a custom quote
                  <br />
                  Standard prep includes receiving, inspection, wrapping, standard poly-bagging, FNSKU labeling, suitable reused boxes, and dunnage. The first 14 days of storage are free; published cubic-foot rates begin on day 15. Review the <Link href="/pricing" className="text-emerald-700 font-semibold hover:underline">complete pricing page</Link> for forwarding, container, storage, and additional-service rates.
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
