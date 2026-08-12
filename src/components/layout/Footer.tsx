import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 px-4 text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
                <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-white block">Such Group E-Commerce</span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed">
            Tax-free prep, robust fulfillment, and pristine storage support for high-volume sellers operating out of Montana.
          </p>
        </div>
        <div className="flex gap-12 md:justify-end flex-wrap">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Regional Tax Savings</span>
            <Link href="/tax-savings/california-to-montana-3pl" className="text-sm transition-colors hover:text-white w-max">California FBA Prep Savings</Link>
            <Link href="/tax-savings/washington-to-montana-3pl" className="text-sm transition-colors hover:text-white w-max">Washington FBA Prep Savings</Link>
            <Link href="/tax-savings/texas-to-montana-3pl" className="text-sm transition-colors hover:text-white w-max">Texas FBA Prep Savings</Link>
            <Link href="/tax-savings/new-york-to-montana-3pl" className="text-sm transition-colors hover:text-white w-max">New York FBA Prep Savings</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Core Services</span>
            <Link href="/montana-tax-free-3pl" className="text-sm transition-colors hover:text-white w-max text-emerald-400">Tax-Free 3PL</Link>
            <a href="/#services" className="text-sm transition-colors hover:text-white w-max">Amazon Prep</a>
            <a href="/#services" className="text-sm transition-colors hover:text-white w-max">Ecommerce Fulfillment</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Company</span>
            <a href="/#fit-review" className="text-sm transition-colors hover:text-white w-max">Fit Review</a>
            <a href="/#process" className="text-sm transition-colors hover:text-white w-max">Onboarding</a>
            <Link href="/privacy-policy" className="text-sm transition-colors hover:text-white w-max">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs">© {new Date().getFullYear()} Such Group E-Commerce. All rights reserved. Located proudly in Montana.</p>
      </div>
    </footer>
  );
}
