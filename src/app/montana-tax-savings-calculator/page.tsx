import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import TaxSavingsCalculator from "@/components/TaxSavingsCalculator";

export const metadata: Metadata = {
  title: "Amazon Tax Savings Calculator",
  description:
    "Calculate your net savings with our 3PL tax calculator. Compare checkout sales tax savings against prep fees for Amazon FBA and wholesale inventory.",
  alternates: {
    canonical: "/montana-tax-savings-calculator",
  },
  openGraph: {
    title: "Amazon Tax Savings Calculator | Such Group E-Commerce",
    description:
      "Calculate your net savings with our 3PL tax calculator. Compare checkout sales tax savings against prep fees for Amazon FBA and wholesale inventory.",
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
      "Calculate your net savings with our 3PL tax calculator. Compare checkout sales tax savings against prep fees for Amazon FBA and wholesale inventory.",
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
      "An interactive 3PL tax calculator for Amazon FBA sellers to determine exact sales tax savings and ROI when routing inventory through zero-tax Montana.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              Stop guessing. Plug your numbers in. See exactly how much checkout tax you eliminate by routing your Amazon FBA inventory through Montana. State taxes eat your margin. Every dollar saved on checkout tax goes straight to your bottom line. Run your sourcing math right now.
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
                Buying retail and wholesale inventory comes with a hidden penalty. High-tax states strip up to 10% of your operating capital right at checkout. You lose that money before you even list a product on Amazon.
              </p>
              <p>
                Montana has 0% sales tax. When you use a Great Falls prep center, you bypass those local taxes completely. This tool reveals your exact ROI. You see the true cost of fulfillment and the exact profit margin you protect.
              </p>
              <p>
                Most sellers never run these numbers. They absorb the tax as a cost of doing business and keep moving. But stack it up over 12 months of sourcing and you are looking at thousands of dollars sitting in a state tax account instead of your inventory budget.
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
                  Select where you currently buy or store inventory. The calculator pulls the state sales tax rate automatically.
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
                  The calculator instantly compares your current tax cost against Montana&apos;s zero percent rate. That gap is recovered capital you can reinvest into more inventory.
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
                <p className="text-2xl font-extrabold text-zinc-900 mb-1">24 hrs</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wide font-semibold">Dock to Stock</p>
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
                  Ready to stake your claim on tax-free sourcing? Reach out to Such Group E-commerce and set up your pipeline out of Great Falls.
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
