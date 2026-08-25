import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 px-4 text-zinc-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-light.png"
              alt="Such Group E-Commerce"
              width={200}
              height={70}
              className="h-12 sm:h-14 md:h-[56px] w-auto object-contain"
            />
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
            <Link href="/services/tax-free-amazon-fba-prep" className="text-sm transition-colors hover:text-white w-max">Tax-Free FBA Prep</Link>
            <Link href="/services/wholesale-inventory-storage" className="text-sm transition-colors hover:text-white w-max">Wholesale Storage</Link>
            <Link href="/services/dtc-ecommerce-fulfillment" className="text-sm transition-colors hover:text-white w-max">DTC Fulfillment</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Company</span>
            <Link href="/about" className="text-sm transition-colors hover:text-white w-max">About Us</Link>
            <Link href="/contact" className="text-sm transition-colors hover:text-white w-max">Contact</Link>
            <Link href="/estimator" className="text-sm transition-colors hover:text-white w-max">Cost Estimator</Link>
            <Link href="/#fit-review" className="text-sm transition-colors hover:text-white w-max">Fit Review</Link>
            <Link href="/privacy-policy" className="text-sm transition-colors hover:text-white w-max">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs">© {new Date().getFullYear()} Such Group E-Commerce. All rights reserved. Located in Great Falls, Montana.</p>
      </div>
    </footer>
  );
}
