import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  AlertTriangle,
  TrendingUp,
  Zap,
  Sparkles,
  Smartphone,
  Shirt,
  XCircle,
  Network,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DTC E-Commerce Fulfillment in Montana | Such Group E-commerce",
  description:
    "Fast, multi-channel DTC fulfillment from Great Falls, Montana. See the exact Total Cost of Fulfillment math for shipping your Shopify and TikTok Shop orders.",
  alternates: {
    canonical:
      "https://suchgroupecommerce.com/services/dtc-ecommerce-fulfillment",
  },
};

export default function DTCEcommerceFulfillmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "DTC E-Commerce Fulfillment",
        provider: {
          "@type": "Organization",
          name: "Such Group E-commerce",
        },
        description:
          "Multi-channel DTC fulfillment from tax-free Montana. Transparent Total Cost of Fulfillment math for Shopify, TikTok Shop, and Walmart WFS brands.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do severe Montana winters impact shipping times?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Extreme weather happens. Interstate routes see winter closures. But our strict same-day fulfillment SLAs build a buffer into your delivery window. We process and tender your packages to the carriers fast, mitigating the impact of temporary mountain transit delays.",
            },
          },
          {
            "@type": "Question",
            name: "Do you support multi-node fulfillment networks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Relying on Montana as your only fulfillment node is fatal for heavy items. We integrate perfectly as the western or central node in a bi-coastal 3PL setup. We route your light items through Great Falls and split your heavy fulfillment closer to the East Coast.",
            },
          },
          {
            "@type": "Question",
            name: "What time are your daily carrier cutoffs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Because Great Falls is a strategic regional hub rather than a congested coastal mega-hub, carrier trailer sweeps happen earlier in the day. We enforce strict mid-day cutoffs to guarantee your packages make the outbound freight line every single afternoon.",
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
            DTC Fulfillment &bull; Great Falls, Montana
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            DTC E-Commerce Fulfillment: The Real Math on Montana Logistics
          </h1>
        </header>

        {/* Hero Callout Box */}
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 md:p-10 mb-14 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600" />
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex p-3 bg-emerald-100/80 rounded-xl text-emerald-700 shrink-0">
              <Package className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                The Bottom Line
              </p>
              <p className="text-base sm:text-lg md:text-xl text-zinc-900 font-medium leading-relaxed">
                Shipping individual parcels from central Montana to the coasts changes your unit economics. You secure massive savings on front-end inventory acquisition because of our 0% state tax. But you must balance that against carrier shipping zones. We run the exact Total Cost of Fulfillment math for your brand. If you sell light, high-margin products, our Great Falls facility protects your capital and gets your orders to doors fast.
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">

          {/* The Zone 8 Reality and Dimensional Weight */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              The Zone 8 Reality and Dimensional Weight
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Most 3PLs sell you on tax savings and lie to you about the freight. Here is the truth. Fulfilling orders from Montana pushes East Coast deliveries into Carrier Zones 5 through 8. Carriers use dimensional weight to punish large, light boxes. If you ship heavy, cheap items or massive boxes, the long-distance carrier surcharges will destroy your tax savings. We audit your catalog before you sign a contract. If the math does not work, we tell you to walk away.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <TrendingUp className="w-5 h-5 shrink-0" />
                  <span>Light, High-Margin Products</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Tax savings on acquisition far exceed the zone freight premium. Your total cost of fulfillment drops.
                </p>
              </div>

              <div className="bg-red-50/60 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Heavy, Low-Margin Products</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Dimensional weight surcharges to Zone 8 eat through your tax savings. The math breaks down fast.
                </p>
              </div>
            </div>
          </section>

          {/* The Winner's Matrix */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              The Winner&apos;s Matrix: Who Thrives in Montana
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                This pipeline works perfectly for specific product profiles. Here is exactly who wins when fulfilling out of Great Falls:
              </p>
            </div>

            {/* Product Profile Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5 flex items-start gap-3.5">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-sm sm:text-base mb-1">
                    Cosmetics and Beauty
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    High retail price, minimal weight. The tax savings easily crush the minor freight difference.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5 flex items-start gap-3.5">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-sm sm:text-base mb-1">
                    Consumer Electronics
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    High price-to-weight ratio. You maximize the tax advantage on every unit.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-5 flex items-start gap-3.5">
                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <Shirt className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-sm sm:text-base mb-1">
                    High-End Apparel
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Compact and valuable. You protect your margin from state taxes and ship fast in a poly-mailer.
                  </p>
                </div>
              </div>

              <div className="bg-red-50/50 border border-red-200/80 rounded-xl p-5 flex items-start gap-3.5">
                <div className="p-2 bg-red-100 text-red-700 rounded-lg shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-zinc-900 font-bold text-sm sm:text-base mb-1">
                    Heavy Home Goods
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Skip us. The dimensional weight penalty to Zone 8 will eat your profit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Intelligent Order Routing and Same-Day SLAs */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Intelligent Order Routing and Same-Day SLAs
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              <p>
                Transit time from the Mountain West requires perfect software execution. Our Order Management System syncs directly with Shopify, TikTok Shop, and Walmart WFS. We run strict same-day cutoff times. Orders drop in, our team picks them, and they hit the carrier trailer the exact same business day. We shave 24 hours off the transit time before the box ever leaves the building.
              </p>
            </div>

            {/* Integration Badges */}
            <div className="mt-8 bg-zinc-950 text-white rounded-xl p-6 sm:p-8 border border-zinc-800 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Zap className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Same-Day Processing</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Orders hit the carrier trailer the same business day they drop in.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Network className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Multi-Channel Sync</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Direct integrations with Shopify, TikTok Shop, and Walmart WFS.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">24-Hour Head Start</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Strict cutoff enforcement shaves a full day off your transit window.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-8">
              Frequently Asked Questions About DTC Fulfillment
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  How do severe Montana winters impact shipping times?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Extreme weather happens. Interstate routes see winter closures. But our strict same-day fulfillment SLAs build a buffer into your delivery window. We process and tender your packages to the carriers fast, mitigating the impact of temporary mountain transit delays.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Do you support multi-node fulfillment networks?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Yes. Relying on Montana as your only fulfillment node is fatal for heavy items. We integrate perfectly as the western or central node in a bi-coastal 3PL setup. We route your light items through Great Falls and split your heavy fulfillment closer to the East Coast.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  How is DTC e-commerce fulfillment priced?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Our monthly order fulfillment rates are transparently tiered:
                  <br />
                  &bull; <strong>1 – 500 monthly orders:</strong> $2.50 per order + $0.50 per item
                  <br />
                  &bull; <strong>501 – 1,000 monthly orders:</strong> $2.25 per order + $0.40 per item
                  <br />
                  &bull; <strong>1,001 – 2,500 monthly orders:</strong> $2.00 per order + $0.30 per item
                  <br />
                  &bull; <strong>2,500+ monthly orders:</strong> Contact us for a custom quote
                  <br />
                  Your first 14 days of inventory storage are completely free.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  What time are your daily carrier cutoffs?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Because Great Falls is a strategic regional hub rather than a congested coastal mega-hub, carrier trailer sweeps happen earlier in the day. We enforce strict mid-day cutoffs to guarantee your packages make the outbound freight line every single afternoon.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Want to see your Total Cost of Fulfillment?
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Tell us what you sell, what it weighs, and where your customers live. We run the exact math and show you whether Montana saves or costs you money.
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
