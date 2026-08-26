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
  title: "DTC E-Commerce Fulfillment",
  description:
    "DTC eCommerce pick, pack, and shipping from Great Falls, Montana, with published rates from $2.50 per order plus $0.50 per item.",
  alternates: {
    canonical: "/services/dtc-ecommerce-fulfillment",
  },
  openGraph: {
    title: "DTC E-Commerce Fulfillment | Such Group E-Commerce",
    description:
      "DTC eCommerce pick, pack, and shipping from Great Falls, Montana, with published rates from $2.50 per order plus $0.50 per item.",
    url: "https://suchgroupecommerce.com/services/dtc-ecommerce-fulfillment",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DTC E-Commerce Fulfillment | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTC E-Commerce Fulfillment | Such Group E-Commerce",
    description:
      "DTC eCommerce pick, pack, and shipping from Great Falls, Montana, with published rates from $2.50 per order plus $0.50 per item.",
    images: ["/og-image.png"],
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
          "DTC eCommerce pick, pack, and shipping from Great Falls, Montana, with published volume tiers and supported connections confirmed during onboarding.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do severe Montana winters impact shipping times?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Extreme weather and carrier interruptions can affect dispatch and transit. Eligible weekday orders received before 2:00 PM Mountain Time are targeted for same-business-day dispatch, subject to inventory readiness, account standing, order exceptions, holidays, weather, and carrier pickup schedules. Transit time is controlled by the carrier.",
            },
          },
          {
            "@type": "Question",
            name: "Which storefront and marketplace connections are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Supported storefront and marketplace connections are confirmed during onboarding. Availability, data flow, order routing, and custom technical work depend on the approved service scope; no connection should be assumed until it is tested and documented.",
            },
          },
          {
            "@type": "Question",
            name: "What time are your daily carrier cutoffs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our standard weekday cutoff is 2:00 PM Mountain Time. Eligible orders received before the cutoff are targeted for same-business-day dispatch, subject to inventory readiness, account standing, order exceptions, holidays, weather, and carrier pickup schedules.",
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
            DTC Fulfillment &bull; Great Falls, Montana
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            DTC E-Commerce Fulfillment: The Total Cost of Fulfillment Math in Montana
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
                Shipping individual parcels from central Montana to the coasts changes unit economics. Qualifying inventory purchases delivered to Montana may be billed without state sales tax, while outbound carrier zones, dimensional weight, handling, and storage add cost. Use the published fulfillment rates and a shipment-specific freight estimate to decide whether the Great Falls workflow fits your catalog.
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
                Fulfilling orders from Montana can place East Coast deliveries in higher carrier zones. Dimensional-weight rules can also increase the billed weight of large, light boxes. Heavy, low-margin, or oversized products may not be economical from one Montana node. The fit review compares published handling rates with the freight information available for your catalog; carrier charges remain estimates until rated or shipped.
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
                  These products may be good candidates when any purchase-tax difference exceeds the added freight and handling cost. Calculate the complete landed cost.
                </p>
              </div>

              <div className="bg-red-50/60 border border-red-200 rounded-xl p-5">
                <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Heavy, Low-Margin Products</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Dimensional-weight and higher-zone charges can outweigh any purchase-tax difference. Compare the actual product and destination mix.
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
                This pipeline works effectively for specific product profiles. Here is who benefits most when fulfilling out of Great Falls:
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
                    A higher price-to-weight ratio can make the Montana workflow worth evaluating against the actual outbound freight.
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
                    A higher price-to-weight ratio may leave more room for prep and outbound freight costs.
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
                    Compact products can reduce dimensional-weight exposure; purchase and freight treatment still varies.
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
                    Large or heavy products require a shipment-specific comparison and may be better served by a node closer to demand.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Order Routing and Dispatch Target */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Order Routing and the Same-Day Dispatch Target
            </h2>

            <div className="text-zinc-700 text-base sm:text-lg leading-relaxed">
              <p>
                Transit time from the Mountain West requires disciplined execution. Supported order-management integrations can send orders to our workflow and return tracking information. Eligible weekday orders received before 2:00 PM Mountain Time are targeted for same-business-day dispatch, subject to inventory readiness, order exceptions, and carrier schedules.
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
                  <p className="text-white font-bold text-sm mb-1">Supported Connections</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Storefront connection, data flow, and tracking return are confirmed and tested during onboarding.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Network className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Carrier Cost Review</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Available carrier services and delivery requirements can be reviewed before the shipping label is purchased.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-white font-bold text-sm mb-1">Fast Cutoff Times</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Same-day dispatch target for eligible orders received before 2:00 PM Mountain Time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight border-b border-zinc-200 pb-4 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  How do severe Montana winters impact shipping times?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Extreme weather and carrier interruptions can affect dispatch and transit. Eligible weekday orders received before 2:00 PM Mountain Time are targeted for same-business-day dispatch, subject to inventory readiness, account standing, order exceptions, holidays, weather, and carrier pickup schedules. Transit time is controlled by the carrier.
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  Which storefront and marketplace connections are available?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Supported storefront and marketplace connections are confirmed during onboarding. Availability, data flow, order routing, and custom technical work depend on the approved service scope; no connection should be assumed until it is tested and documented.
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
                  The first 14 days of inventory storage are free. Published cubic-foot rates begin on day 15.
                  <br />
                  <Link href="/pricing" className="text-emerald-700 font-semibold hover:underline">Review the complete pricing and additional-fee schedule.</Link>
                </p>
              </div>

              <div className="border-t border-zinc-100 pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">
                  What time are your daily carrier cutoffs?
                </h3>
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed">
                  Our standard weekday cutoff is 2:00 PM Mountain Time. Eligible orders received before the cutoff are targeted for same-business-day dispatch, subject to inventory readiness, account standing, order exceptions, holidays, weather, and carrier pickup schedules.
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
                Tell us what you sell, what it weighs, and where your customers live. We will apply the published handling rates and identify the freight or technical details that require a quote.
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
