import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy & Cookie Policy",
  description: "Learn how Such Group E-Commerce protects your data, handles cookies, and respects user consent.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-36 pb-24 px-6 max-w-4xl mx-auto relative z-10 w-full">
        {/* Subtle Ambient glows */}
        <div className="absolute top-40 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-emerald-400 transition-colors group mb-6">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm w-max">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Privacy &amp; Cookie Policy</h1>
          </div>
          <p className="text-zinc-500 text-sm">Last updated: June 29, 2026</p>
        </div>

        <div className="space-y-10 prose prose-invert max-w-none text-zinc-400 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">1. Overview</h2>
            <p>
              At <strong>Such Group E-Commerce</strong>, we are committed to maintaining the trust and confidence of our visitors. This Privacy &amp; Cookie Policy explains how we collect, use, disclose, and protect your information when you visit our website, use our cost calculators, or submit a request for a custom prep plan.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">2. Information We Collect</h2>
            <p>We collect information you provide directly to us through forms and calculators, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Details:</strong> First Name and Email Address submitted via our Custom Prep Plan flow.
              </li>
              <li>
                <strong>Business Specifications:</strong> Monthly sales volume, operational frictions, and calculated savings inputs.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type, load timestamps (for spam/bot validation), and general user path interaction metrics.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver your customized 3PL and Amazon prep plan.</li>
              <li>Improve site usability, performance, and calculator modeling.</li>
              <li>Prevent automated spam, fraudulent submissions, and abuse.</li>
              <li>Run retargeting ad campaigns via Google Tag Manager and supported analytics networks (where consent is explicitly granted).</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">4. Cookie Policy</h2>
            <p>
              Cookies are small text files placed on your device to collect standard internet log and visitor behavior details. We use cookies for tracking, analytics, and advertising:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Required to run page navigation, store consent settings, and manage anti-abuse protections.
              </li>
              <li>
                <strong>Analytics Cookies (Google Analytics 4):</strong> Help us understand how visitors interact with the site, measure traffic sources, and optimize our pages.
              </li>
              <li>
                <strong>Marketing &amp; Retargeting Cookies:</strong> Used by Google Tag Manager and advertising networks to show you relevant Such Group E-Commerce advertisements on other platforms after you leave our site.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">5. User Consent &amp; Controls</h2>
            <p>
              Your privacy is fully in your control. When you visit our website, we configure Google Consent Mode v2 variables to remain <strong>denied</strong> by default.
            </p>
            <p>
              You can choose to accept or decline advertising/analytics cookies using our consent banner. Your choice is stored locally in your browser and can be cleared at any time by deleting your browser cache.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight border-b border-white/5 pb-2">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy &amp; Cookie Policy, or how your personal information is stored and handled, please reach out to us through our custom fit flow on the main page.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
