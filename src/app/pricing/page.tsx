import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ADDITIONAL_FEES,
  CARTON_FORWARDING_PRICING,
  ECOMMERCE_PRICING_TIERS,
  FBA_PRICING_TIERS,
  PRICING_LAST_CONFIRMED,
  STANDARD_PREP_INCLUSIONS,
  STORAGE_PRICING,
  WHOLESALE_PRICING_TIERS,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "FBA Prep, 3PL & Fulfillment Pricing",
  description:
    "Published Amazon FBA prep, wholesale, DTC fulfillment, storage, and carton-forwarding rates from Such Group E-Commerce in Great Falls, Montana.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "FBA Prep, 3PL & Fulfillment Pricing | Such Group E-Commerce",
    description:
      "Review published FBA prep, wholesale, DTC fulfillment, storage, additional-service, and carton-forwarding rates before shipping inventory.",
    url: "https://suchgroupecommerce.com/pricing",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Such Group E-Commerce pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FBA Prep, 3PL & Fulfillment Pricing | Such Group E-Commerce",
    description:
      "Published FBA prep, wholesale, DTC fulfillment, storage, and forwarding rates from Great Falls, Montana.",
    images: ["/og-image.png"],
  },
};

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://suchgroupecommerce.com/pricing#webpage",
        url: "https://suchgroupecommerce.com/pricing",
        name: "FBA Prep, 3PL and Fulfillment Pricing",
        description:
          "Published Amazon FBA prep, wholesale, DTC fulfillment, storage, and carton-forwarding rates from Such Group E-Commerce.",
        isPartOf: { "@id": "https://suchgroupecommerce.com/#website" },
        dateModified: "2026-08-25",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://suchgroupecommerce.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pricing",
            item: "https://suchgroupecommerce.com/pricing",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />

      <main className="flex-grow px-4 sm:px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-4xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3">
              Published pricing · Confirmed {PRICING_LAST_CONFIRMED}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950">
              Know the service rates before you send inventory.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 max-w-3xl">
              There is no minimum shipment quantity or minimum service charge.
              Standard rates are published below. Special packaging, oversized
              materials, unusual handling, and out-of-scope work are quoted before
              the work is performed.
            </p>
          </header>

          <section className="grid gap-6 lg:grid-cols-2 mb-12">
            <div className="rounded-3xl bg-zinc-950 p-7 sm:p-8 text-white border border-zinc-800">
              <h2 className="text-2xl font-bold mb-5">Monthly Amazon FBA prep</h2>
              <div className="divide-y divide-zinc-800">
                {FBA_PRICING_TIERS.map((tier) => (
                  <div key={tier.label} className="flex justify-between gap-4 py-3">
                    <span className="text-zinc-300">{tier.label}</span>
                    <strong>{money(tier.rate)} per unit</strong>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-3">
                  <span className="text-zinc-300">Over 10,000 units</span>
                  <strong>Contact for quote</strong>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-7 sm:p-8 border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-5">Wholesale prep</h2>
              <div className="divide-y divide-zinc-100">
                {WHOLESALE_PRICING_TIERS.map((tier) => (
                  <div key={tier.label} className="flex justify-between gap-4 py-3">
                    <span className="text-zinc-600">{tier.label}</span>
                    <strong>{money(tier.rate)} per unit</strong>
                  </div>
                ))}
                <div className="flex justify-between gap-4 py-3">
                  <span className="text-zinc-600">Over 10,000 units</span>
                  <strong>Contact for quote</strong>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-500">
                Published wholesale volume tiers begin at 300 units. Smaller
                wholesale shipments are accepted without a shipment minimum; ask
                us which published or quoted service rate applies.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-7 sm:p-8 border border-zinc-200 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-5">DTC eCommerce fulfillment</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {ECOMMERCE_PRICING_TIERS.map((tier) => (
                <div key={tier.label} className="rounded-2xl border border-zinc-200 p-5">
                  <p className="text-sm font-semibold text-zinc-500">{tier.label}</p>
                  <p className="mt-2 text-xl font-bold text-zinc-950">
                    {money(tier.orderRate)} per order
                  </p>
                  <p className="text-sm text-zinc-600">
                    plus {money(tier.itemRate)} per item
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-zinc-600">
              More than 2,500 monthly orders and FBM workflows are quoted after a
              service-scope review.
            </p>
          </section>

          <section className="grid gap-6 lg:grid-cols-2 mb-12">
            <div className="rounded-3xl bg-white p-7 sm:p-8 border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-5">Standard prep includes</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {STANDARD_PREP_INCLUSIONS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-500">
                “Shipping label” means printing and applying the supplied or
                generated label. Carrier postage, Amazon inbound freight, and
                customer-delivery charges remain the seller&apos;s responsibility.
              </p>
            </div>

            <div className="rounded-3xl bg-amber-50 p-7 sm:p-8 border border-amber-200">
              <div className="flex gap-3 items-start">
                <Info className="w-6 h-6 text-amber-700 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-amber-950">Storage policy</h2>
                  <div className="mt-4 divide-y divide-amber-200/70">
                    {STORAGE_PRICING.map((item) => (
                      <div key={item.period} className="flex justify-between gap-4 py-3 text-sm">
                        <span className="text-amber-900">{item.period}</span>
                        <strong className="text-amber-950 text-right">{item.rate}</strong>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-amber-900">
                    The Q4 rate replaces the otherwise applicable post-free-period
                    cubic-foot rate from October 1 through December 31.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-amber-900">
                    Inventory left for 60 days with unpaid storage charges may be
                    treated as abandoned and removed or discarded to make room for
                    active clients, subject to the signed client agreement and
                    applicable law. Contact us before shipping if long-term storage
                    is expected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-7 sm:p-8 border border-zinc-200 shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-5">Additional service fees</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {ADDITIONAL_FEES.map((fee) => (
                <div key={fee.name} className="rounded-2xl border border-zinc-200 p-5">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-bold text-zinc-950">{fee.name}</h3>
                    <strong className="text-emerald-700">{fee.price}</strong>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{fee.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-500">
              A special or oversized box is quoted before use when no suitable
              reused box is available. UPC-related or other unlisted work is also
              quoted before it is performed.
            </p>
          </section>

          <section className="rounded-3xl bg-zinc-950 p-7 sm:p-8 text-white border border-zinc-800 mb-12">
            <h2 className="text-2xl font-bold mb-5">Carton forwarding</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Forwarding includes printing and attaching shipping labels to
              unopened cartons. It does not include product inspection or unit
              labeling.
            </p>
            <div className="grid gap-x-8 md:grid-cols-2">
              {CARTON_FORWARDING_PRICING.map((item) => (
                <div key={item.name} className="flex justify-between gap-4 py-3 border-b border-zinc-800">
                  <span className="text-zinc-300">{item.name}</span>
                  <strong className="text-right">{item.rate}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-zinc-950">Need a shipment-specific number?</h2>
              <p className="mt-2 text-zinc-700">
                Use the estimator for a planning total, then request a final quote
                before shipping inventory.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/estimator"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 text-white px-6 py-3 font-semibold"
              >
                Open estimator <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-zinc-300 text-zinc-950 px-6 py-3 font-semibold"
              >
                Contact us
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
