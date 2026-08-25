import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-40 pb-24 px-6 max-w-2xl mx-auto relative z-10 w-full text-center flex flex-col items-center justify-center">
        <div className="p-4 rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm mb-6 inline-flex">
          <HelpCircle className="w-10 h-10" />
        </div>
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">404 Error</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">Page Not Found</h1>
        <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
          The page you requested could not be found. It may have been moved or the link may be outdated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg text-sm"
          >
            <ArrowLeft size={16} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/estimator"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6 py-3.5 rounded-xl border border-zinc-800 transition-all text-sm"
          >
            <span>Cost Estimator</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
