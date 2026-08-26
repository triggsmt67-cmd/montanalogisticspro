import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Scale,
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Layers,
  Search,
  ScanBarcode,
  Cpu,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tax-Free Amazon FBA Prep",
  description:
    "Amazon FBA receiving, inspection, FNSKU labeling, poly-bagging, and packaging from Montana, with published prep rates from $1.45 per unit.",
  alternates: {
    canonical: "/services/tax-free-amazon-fba-prep",
  },
  openGraph: {
    title: "Tax-Free Amazon FBA Prep | Such Group E-Commerce",
    description:
      "Amazon FBA receiving, inspection, FNSKU labeling, poly-bagging, and packaging from Montana, with published prep rates from $1.45 per unit.",
    url: "https://suchgroupecommerce.com/services/tax-free-amazon-fba-prep",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tax-Free Amazon FBA Prep | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax-Free Amazon FBA Prep | Such Group E-Commerce",
    description:
      "Amazon FBA receiving, inspection, FNSKU labeling, poly-bagging, and packaging from Montana, with published prep rates from $1.45 per unit.",
    images: ["/og-image.png"],
  },
};

export default function TaxFreeAmazonFBAPrepPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Tax-Free Amazon FBA Prep",
        provider: {
          "@type": "Organization",
          name: "Such Group E-commerce",
        },
        description:
          "Amazon FBA receiving, inspection, FNSKU labeling, standard poly-bagging, packaging, and shipment-label preparation from Great Falls, Montana.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do shipments from Montana trigger higher Amazon inbound placement fees?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Amazon determines inbound destinations, placement options, and applicable fees. When shipment creation is included in the approved scope, we prepare the plan and labels using the information available in the client account; the seller remains responsible for reviewing Amazon charges and outbound freight.",
            },
          },
          {
            "@type": "Question",
            name: "What does standard FBA prep pricing include?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Published standard prep includes receiving, product inspection, damage documentation when needed, FNSKU labeling, barcode coverage, price-tag and sticker removal, standard poly-bagging, required warning and expiration labels, dunnage, standard securing and taping, reused boxes when suitable, and printing and applying the outbound label. Carrier postage and special handling are excluded or separately quoted.",
            },
          },
          {
            "@type": "Question",
            name: "Will my home state audit me if I use a Montana prep center?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Montana has no general statewide sales tax, so a qualifying purchase delivered there may be billed without state sales tax. That does not determine every use-tax, nexus, registration, income-tax, property-tax, or filing obligation. Treatment depends on the seller, transaction, purchaser, and later inventory activity; obtain advice for your facts.",
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
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Great Falls, Montana &bull; No General Statewide Sales Tax
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            Tax-Free Amazon FBA Prep: Stop Bleeding Margin on Retail Sourcing
          </h1>
        </header>

        {/* Hero Callout Box */}
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 md:p-10 mb-14 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600" />
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 bg-emerald-100/80 rounded-xl text-emerald-700 shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                The Bottom Line
              </p>
              <p className="text-base sm:text-lg md:text-xl text-zinc-900 font-medium leading-relaxed">
                For many shipped retail transactions, the delivery destination affects the tax charged by the seller. Qualifying purchases delivered to our Great Falls, Montana 3PL may be billed without state sales tax because Montana has no general statewide sales tax. Treatment varies by seller and transaction. Our published volume tiers range from $1.45 to $1.00 per unit, subject to the service scope and current quote. We handle receiving, inspection, wrapping, standard poly-bagging, required warnings, FNSKU labeling, suitable reused boxes, and dunnage according to the applicable prep plan.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">

          {/* Section 1: The Retail Sourcing Advantage */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              The Retail Sourcing Advantage
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                For many shipped retail transactions, delivery location affects the tax charged by the seller. A qualifying purchase delivered to Montana may be billed without state sales tax because Montana has no general statewide sales tax. Seller practices, product category, documentation, purchaser obligations, later use, and other taxes can change the result. Wholesale and resale purchases may require documentation accepted by the supplier.
              </p>
            </div>

            {/* Visual Comparison Card */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50/60 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>High-Tax State Delivery</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Depending on the seller, product, exemption status, and delivery location, checkout sales tax can add meaningful cost to taxable inventory purchases.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <span>Montana Delivery</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  A qualifying purchase delivered to our Great Falls facility may be billed without state sales tax. Any savings depend on what the seller otherwise would have charged and the purchaser&apos;s obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Rigorous Amazon Prep Compliance */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Rigorous Amazon Inbound Compliance
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              <p>
                Amazon inbound requirements can change by marketplace, product, and shipment workflow. We prepare inventory against the applicable requirements and the approved client instructions, including FNSKU labels, standard poly-bagging, required warning labels, barcode coverage, dunnage, and shipment-label preparation. Amazon makes the final receiving and compliance determination.
              </p>
            </div>
          </section>

          {/* Section 3: Transparent Volume-Tiered Pricing */}
          <section>
            <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
                Transparent Volume Pricing
              </h2>

              <div className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Published pricing uses volume tiers, but the applicable unit price and included materials depend on monthly volume, product requirements, and the current client quote.
                </p>
              </div>
            </div>

            {/* Pricing Tables Card */}
            <div className="bg-zinc-950 text-white rounded-2xl border border-zinc-800 overflow-hidden shadow-lg mb-8">
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Monthly FBA Prep Tiers
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Standard Retail Sourcing FBA Prep
                  </h3>
                </div>
                <Link
                  href="/estimator"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] text-sm shrink-0"
                >
                  <span>Open Cost Estimator</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* FBA Pricing Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-x divide-zinc-800 border-b border-zinc-800">
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">1 – 500 units</p>
                  <p className="text-3xl font-extrabold text-white tracking-tight">$1.45</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">501 – 1,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$1.35</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">1,001 – 2,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$1.25</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">2,001 – 5,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$1.15</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">5,001 – 10,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$1.00</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-900/60 flex flex-col justify-center">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">Over 10,000 units</p>
                  <p className="text-lg font-bold text-white">Custom Quote</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Contact Us</p>
                </div>
              </div>

              {/* Wholesale Pricing Header */}
              <div className="p-6 sm:p-8 border-b border-zinc-800 bg-zinc-900/30">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Published Wholesale Volume Tiers
                </p>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Wholesale Prep Pricing (per Unit)
                </h4>
              </div>

              {/* Wholesale Pricing Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-zinc-800 border-b border-zinc-800">
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">300 – 2,500 units</p>
                  <p className="text-3xl font-extrabold text-white tracking-tight">$1.15</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">2,501 – 5,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$1.00</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-950/50">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2">5,001 – 10,000 units</p>
                  <p className="text-3xl font-extrabold text-emerald-400 tracking-tight">$0.90</p>
                  <p className="text-[11px] text-zinc-500 mt-1">per unit</p>
                </div>
                <div className="p-5 text-center bg-zinc-900/60 flex flex-col justify-center">
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">Over 10,000 units</p>
                  <p className="text-lg font-bold text-white">Custom Quote</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Contact Us</p>
                </div>
              </div>

              {/* Inclusions Grid */}
              <div className="p-6 sm:p-8 bg-zinc-900/20 border-b border-zinc-800">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Standard Pricing Includes</p>
                <p className="text-sm text-zinc-300">Receiving, inspection, FNSKU labeling, standard poly-bagging, barcode coverage, required warning and expiration labels, standard securing and taping, reused boxes when suitable, dunnage, and printing and applying the outbound label. See the published pricing page for exclusions and additional services.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Receiving &amp; Inspection</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">We receive and inspect products under the approved client plan. Damage found during inspection is photographed and emailed for instructions.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Compliance Packaging</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">Standard poly-bagging, wrapping, suitable reused shipping boxes, and dunnage are included. Special or oversized boxes are quoted before use.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <ScanBarcode className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">FNSKU Labeling</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">FNSKU labeling, barcode coverage, price-tag removal, and applicable warning or expiration labels are included.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Shipping Label Preparation</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">Printing and applying the outbound shipping label is included. Carrier postage and Amazon inbound freight remain the seller&apos;s responsibility.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">14 Days Free Storage</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">The first 14 days are free. Published cubic-foot storage rates begin on day 15.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-emerald-400 font-bold text-sm mb-1">Published standard rates.</p>
                    <Link href="/pricing" className="text-zinc-400 text-xs hover:text-white">Review additional fees and exclusions.</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Multi-State Tax Truths */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Multi-State Tax Truths
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Montana has no general statewide sales tax, so qualifying purchases delivered to our facility may be billed without state sales tax. That does not eliminate other tax, registration, nexus, or filing obligations. Inventory later placed in Amazon fulfillment centers may create physical-presence considerations in other states. We handle the contracted prep and dispatch services; clients remain responsible for obtaining tax advice and meeting their compliance duties.
              </p>
            </div>

            {/* Context Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                  <Scale className="w-5 h-5 shrink-0 text-emerald-600" />
                  <span>Montana Sales-Tax Context</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Montana has no general statewide sales tax. Storage or other business activity may still create nexus, registration, income-tax, property-tax, or filing considerations depending on the facts.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-zinc-900 font-bold mb-2">
                  <Layers className="w-5 h-5 shrink-0 text-zinc-600" />
                  <span>Amazon Destination States</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Inventory placed in Amazon fulfillment centers may create physical-presence or other tax considerations. Clients should obtain advice for their specific footprint.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-8">
              Frequently Asked Questions About Montana FBA Prep
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Do shipments from Montana trigger higher Amazon inbound placement fees?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Amazon determines inbound destinations, placement options, and applicable fees. When shipment creation is included in the approved scope, we prepare the plan and labels using the information available in the client account; the seller remains responsible for reviewing Amazon charges and outbound freight.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  What does standard FBA prep pricing include?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Published standard prep includes receiving, product inspection, damage documentation when needed, FNSKU labeling, barcode coverage, price-tag and sticker removal, standard poly-bagging, required warning and expiration labels, dunnage, standard securing and taping, reused boxes when suitable, and printing and applying the outbound label. Carrier postage and special handling are excluded or separately quoted.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Will my home state audit me if I use a Montana prep center?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Montana has no general statewide sales tax, so a qualifying purchase delivered there may be billed without state sales tax. That does not determine every use-tax, nexus, registration, income-tax, property-tax, or filing obligation. Treatment depends on the seller, transaction, purchaser, and later inventory activity; obtain advice for your facts.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to compare your complete landed cost?
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Tell us what you sell, how many units you move, and where you source. We will apply the published prep rates and identify the freight or special handling that requires a quote.
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
