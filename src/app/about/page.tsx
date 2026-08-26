import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { 
  ShieldCheck, 
  MapPin, 
  TrendingDown, 
  ArrowRight,
  Sparkles,
  Layers,
  Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Such Group E-Commerce provides nationwide Amazon FBA prep, DTC fulfillment, and wholesale storage from our Great Falls, Montana logistics facility.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Such Group E-Commerce provides nationwide Amazon FBA prep, DTC fulfillment, and wholesale storage from our Great Falls, Montana logistics facility.",
    url: "https://suchgroupecommerce.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Such Group E-Commerce | Montana 3PL & FBA Prep",
    description:
      "Such Group E-Commerce provides nationwide Amazon FBA prep, DTC fulfillment, and wholesale storage from our Great Falls, Montana logistics facility.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://suchgroupecommerce.com/about#webpage",
        "url": "https://suchgroupecommerce.com/about",
        "name": "About Such Group E-Commerce",
        "isPartOf": {
          "@id": "https://suchgroupecommerce.com/#website"
        },
        "description": "Learn about Such Group E-Commerce — a nationwide third-party logistics (3PL) and Amazon FBA prep provider operating from Great Falls, Montana."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://suchgroupecommerce.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://suchgroupecommerce.com/about"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto w-full relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-300 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400 font-medium">About Us</li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Nationwide Fulfillment from Montana
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Margin Protection and Seamless Fulfillment
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            Such Group E-Commerce provides high-precision Amazon FBA prep, DTC fulfillment, and wholesale warehousing to ecommerce businesses across the United States from our Great Falls, Montana facility.
          </p>
        </div>

        {/* Strategic Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">0% State Sales Tax</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Montana has zero state sales tax. Routing inventory orders to our Great Falls facility eliminates checkout tax legally under destination-based sourcing.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Great Falls Transportation Hub</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Strategically situated on the I-15 corridor and major BNSF rail routes, enabling cost-effective nationwide pallet movement and direct Amazon inbound freight.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-950/60 border border-zinc-800/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Amazon Compliance First</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Every unit is inspected, verified, and prepped to meet Amazon’s strict receiving standards, preventing chargebacks, split carton rejections, and delays.
            </p>
          </div>
        </div>

        {/* Operating Philosophy */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800 space-y-6 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Operational Focus
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            As a newly established logistics provider, Such Group E-Commerce is designed from the ground up to solve the friction points modern ecommerce sellers face daily: unpredictable prep fees, slow receiving dock turnarounds, and compliance penalties.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Fast Turnaround SLA</h4>
                <p className="text-zinc-400 text-xs mt-0.5">24 to 48 hour turnaround on standard inventory receiving and FNSKU labeling.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Transparent Tiered Pricing</h4>
                <p className="text-zinc-400 text-xs mt-0.5">Clear volume discounts starting from $1.45/unit down to $1.00/unit with no hidden surcharges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/20 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Have questions or ready to run numbers?</h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Use our interactive cost estimator to calculate your exact unit prep costs or send our team an inquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/estimator"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg text-sm"
            >
              <span>Explore Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6 py-3.5 rounded-xl border border-zinc-800 transition-all text-sm"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
