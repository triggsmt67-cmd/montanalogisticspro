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
    "Protect inventory margins with zero checkout tax. Multi-point FNSKU labeling, poly bagging, and rigid 2026 Amazon inbound prep compliance in Montana.",
  alternates: {
    canonical: "/services/tax-free-amazon-fba-prep",
  },
  openGraph: {
    title: "Tax-Free Amazon FBA Prep | Such Group E-Commerce",
    description:
      "Protect inventory margins with zero checkout tax. Multi-point FNSKU labeling, poly bagging, and rigid 2026 Amazon inbound prep compliance in Montana.",
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
      "Protect inventory margins with zero checkout tax. Multi-point FNSKU labeling, poly bagging, and rigid 2026 Amazon inbound prep compliance in Montana.",
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
          "Amazon FBA prep services in tax-free Montana. Bypass retail checkout tax on online retail sourcing and guarantee strict Amazon inbound compliance.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do shipments from Montana trigger higher Amazon inbound placement fees?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Amazon charges placement fees based on how many locations you split your shipment into. Shipping from our centralized Great Falls location gives you strategic freight access to western and midwestern fulfillment hubs. We optimize your shipping plans to minimize those per-unit placement costs and keep your freight spend low.",
            },
          },
          {
            "@type": "Question",
            name: "How fast do you process units with the new Amazon shipping software delays?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The new Amazon software forces legacy prep centers to stall out for up to 10 minutes per shipment. We bypass that bottleneck entirely. Our custom system queues your shipment plans in the background. We inspect, prep, and pack your units immediately. Your freight never sits waiting on software.",
            },
          },
          {
            "@type": "Question",
            name: "Will my home state audit me if I use a Montana prep center?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storing goods in Montana creates zero local sales tax liability for you. If you live in a strict enforcement state and buy retail inventory online, routing it through Montana legally drops your checkout tax to zero. However, once those goods move into Amazon's national network, you trigger physical presence in those destination states. You must work with your CPA to manage your multi-state compliance.",
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
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Great Falls, Montana &bull; 0% Sales Tax
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
                Retail checkout systems operate on destination-based sales tax rules. Shipping online retail purchases to our Great Falls, Montana 3PL legally drops your checkout tax to 0%. We protect your margins and execute strict Amazon FBA prep compliance with volume-tiered rates starting at $1.45 down to $1.00 per unit. We handle receiving, inspection, wrapping, 1.5 mil poly-bags, mandatory suffocation warnings, FNSKU labeling, reused boxes, and dunnage so your inventory hits the Amazon dock ready to stow.
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
                Buying retail inventory online is entirely different from wholesale sourcing. You buy from retail storefronts. Those checkout systems charge tax based on the shipping address. Ship to a high-tax state and you bleed margin. Ship to Montana and the tax drops to zero. You reinvest that saved capital immediately. Wholesale buyers use home-state resale certificates to avoid tax. They use us for operational efficiency. But for sellers sourcing retail products online, Montana is a mandatory profit lever.
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
                  Checkout systems tack 7% to 10% onto every order you ship to states with sales tax. That cost comes straight out of your margin.
                </p>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <span>Montana Delivery</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Ship to our Great Falls address and the checkout tax drops to zero. That saved capital goes straight back into your next inventory purchase.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Flawless Amazon Prep Compliance */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Flawless Amazon Prep Compliance
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              <p>
                Amazon killed its internal prep service on January 1, 2026. Compliance is now entirely on you and your prep center. If your boxes show up wrong, Amazon hits you with penalty fees and delays your inventory for days. We stop that from happening. We handle the strict 1.5 mil thick poly-bags, the mandatory suffocation warnings, and the exact FNSKU barcode placements so your boxes get scanned and stowed the second they hit the Amazon dock.
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
                  We keep the pricing simple, predictable, and fully transparent. As your monthly volume grows, your unit cost automatically drops. Every tier includes all core prep materials and inspection.
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
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">10,000+ units</p>
                  <p className="text-lg font-bold text-white">Custom Quote</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Contact Us</p>
                </div>
              </div>

              {/* Wholesale Pricing Header */}
              <div className="p-6 sm:p-8 border-b border-zinc-800 bg-zinc-900/30">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Bulk Wholesale Tiers (Same-SKU)
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
                  <p className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-1">10,000+ units</p>
                  <p className="text-lg font-bold text-white">Custom Quote</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Contact Us</p>
                </div>
              </div>

              {/* Inclusions Grid */}
              <div className="p-6 sm:p-8 bg-zinc-900/20 border-b border-zinc-800">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">All Pricing Includes</p>
                <p className="text-sm text-zinc-300">Receiving, Inspection, Wrapping, Poly bag, FNSKU Label, boxes (reused), and dunnage.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Receiving &amp; Inspection</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">We audit every carton and check for damaged units the second freight hits our dock.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Compliance Packaging</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">1.5 mil poly-bags, wrapping, reused shipping boxes, and dunnage included.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <ScanBarcode className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">FNSKU Labeling</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">High-contrast thermal barcode application with double-scan verification.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Software Management</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">We handle Amazon&apos;s shipping plan software in the background so your boxes never sit waiting.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-start gap-3.5">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">14 Days Free Storage</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">Your first 14 days of inventory staging are completely free.</p>
                  </div>
                </div>

                <div className="bg-zinc-950 p-5 sm:p-6 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-emerald-400 font-bold text-sm mb-1">No hidden fees.</p>
                    <p className="text-zinc-400 text-xs">Zero state sales tax.</p>
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
                Staking a claim in Montana protects your initial purchase. Since Montana has no sales tax, storing your items in our building creates zero local tax headaches for you. But we need to give you the honest truth about what happens next. Once your prepped inventory leaves our facility and lands in Amazon warehouses across the country, you trigger physical presence in those new destination states. We handle the pristine prep and the fast dispatch. You handle your multi-state compliance.
              </p>
            </div>

            {/* Context Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                  <Scale className="w-5 h-5 shrink-0 text-emerald-600" />
                  <span>Montana: Zero Tax Liability</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  No state sales tax. No local sales tax returns. Storing goods in our facility creates no tax filing obligations for you in Montana.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-zinc-900 font-bold mb-2">
                  <Layers className="w-5 h-5 shrink-0 text-zinc-600" />
                  <span>Amazon Destination States</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Your inventory in Amazon warehouses triggers physical presence in those states. This happens no matter which prep center you use.
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
                  Amazon charges placement fees based on how many locations you split your shipment into. Shipping from our centralized Great Falls location gives you strategic freight access to western and midwestern fulfillment hubs. We optimize your shipping plans to minimize those per-unit placement costs and keep your freight spend low.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  How fast do you process units with the new Amazon shipping software delays?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  The new Amazon software forces legacy prep centers to stall out for up to 10 minutes per shipment. We bypass that bottleneck entirely. Our custom system queues your shipment plans in the background. We inspect, prep, and pack your units immediately. Your freight never sits waiting on software.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Will my home state audit me if I use a Montana prep center?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Storing goods in Montana creates zero local sales tax liability for you. If you live in a strict enforcement state and buy retail inventory online, routing it through Montana legally drops your checkout tax to zero. However, once those goods move into Amazon&apos;s national network, you trigger physical presence in those destination states. You must work with your CPA to manage your multi-state compliance.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to stop paying checkout tax on inventory?
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Tell us what you sell, how many units you move, and where you source. We will show you exactly how much you save.
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
