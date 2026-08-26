import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import TaxSavingsCalculator from "@/components/TaxSavingsCalculator";

export const metadata: Metadata = {
  title: "Amazon Tax Savings Calculator",
  description:
    "Estimate a checkout-tax difference against published FBA prep and entered freight costs. Planning tool only; tax treatment and actual costs vary.",
  alternates: {
    canonical: "/montana-tax-savings-calculator",
  },
  openGraph: {
    title: "Amazon Tax Savings Calculator | Such Group E-Commerce",
    description:
      "Estimate a checkout-tax difference against published FBA prep and entered freight costs. Planning tool only; actual treatment and costs vary.",
    url: "https://suchgroupecommerce.com/montana-tax-savings-calculator",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amazon Tax Savings Calculator | Such Group E-Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Tax Savings Calculator | Such Group E-Commerce",
    description:
      "Estimate a checkout-tax difference against published FBA prep and entered freight costs. Planning tool only; actual treatment and costs vary.",
    images: ["/og-image.png"],
  },
};

export default function MontanaTaxSavingsCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Montana 3PL Tax Savings Calculator",
    operatingSystem: "All",
    applicationCategory: "BusinessApplication",
    url: "https://suchgroupecommerce.com/montana-tax-savings-calculator",
    description:
      "An interactive planning calculator that compares an assumed checkout-tax difference with published FBA prep and user-entered freight costs. It is not tax advice or a quote.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Such Group E-commerce",
    },
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-4">
              Free Tool for Amazon Sellers
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              Montana 3PL Tax Savings Calculator: See Your Prep Center ROI
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
              Enter your numbers to estimate how delivery location could change checkout sales tax and total fulfillment cost. Results are planning estimates, not guaranteed savings or tax advice; seller treatment and client obligations vary.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <TaxSavingsCalculator />
          </div>
        </section>

        {/* Why You Need This Section */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
              Why Amazon sellers need a 3PL tax calculator
            </h2>
            <div className="space-y-4 text-zinc-600 text-lg leading-relaxed">
              <p>
                Delivery-tax rates can materially affect the cash paid on a taxable inventory purchase. Resale documentation, exemptions, seller treatment, delivery location, and purchaser obligations can all change the amount charged.
              </p>
              <p>
                Montana has no general statewide sales tax. A qualifying purchase delivered to a Great Falls prep center may be billed without state sales tax, depending on the seller and transaction. This tool provides an estimate based on the inputs and assumptions shown; it does not calculate a client&apos;s complete tax liability or exact ROI.
              </p>
              <p>
                The useful comparison is total landed cost: actual checkout tax, inbound freight, prep, add-ons, storage, and onward shipping. Use invoices and current quotes before making a routing decision.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8 tracking-tight">
              How to calculate your Montana prep center ROI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-200">1</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Pick your origin state</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Select a comparison location. The calculator uses a representative rate that should be checked against the current rate for the actual delivery address.
                </p>
              </div>
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-200">2</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Enter your sourcing volume</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Set your monthly unit count and average cost per unit. These two numbers determine how hard the tax hits you.
                </p>
              </div>
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4 border border-emerald-200">3</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">See the difference</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  The calculator compares the tax rate you enter with prep and freight assumptions. The result is an illustration, not recovered capital or a guaranteed saving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
                <p className="text-2xl font-extrabold text-emerald-700 mb-1">0%</p>
                <p className="text-xs text-emerald-800/70 uppercase tracking-wide font-semibold">Montana Sales Tax</p>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-zinc-900 mb-1">$1.45</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">Starting Prep Rate</p>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-zinc-900 mb-1">14 Days</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">Free Storage</p>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-5 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-zinc-900 mb-1">No Minimum</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">Shipment or Charge</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  Run your numbers. See the advantage.
                </h2>
                <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Ready to compare your actual landed costs? Send Such Group E-Commerce your product, volume, packaging, and routing details for a scoped quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/#fit-review"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                  >
                    Start Your Fit Review
                  </Link>
                  <Link
                    href="/montana-tax-free-3pl"
                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm transition-colors border border-zinc-700"
                  >
                    Read the Full Tax-Free Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
