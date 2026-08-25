"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenQuestions?: () => void;
}

export function Navbar({ onOpenQuestions }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f9fafb]/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group py-1">
              <Image 
                src="/logo.png" 
                alt="Such Group E-Commerce" 
                width={200} 
                height={70} 
                className="h-12 sm:h-14 md:h-[58px] w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>
          </div>
          
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors h-20">
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden p-4">
                  <div className="flex flex-col gap-2">
                    <Link href="/services/tax-free-amazon-fba-prep" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Tax-Free Amazon FBA Prep</Link>
                    <Link href="/services/dtc-ecommerce-fulfillment" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">DTC E-Commerce Fulfillment</Link>
                    <Link href="/services/wholesale-inventory-storage" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Wholesale Inventory Storage</Link>
                  </div>
                </div>
              </div>
            </div>
            <motion.a whileHover={{ y: -1 }} href="/#process" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Process</motion.a>
            <motion.a whileHover={{ y: -1 }} href="/#fit-review" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Fit Review</motion.a>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors h-20">
                Tax-Free 3PL
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
                  <div className="p-4 bg-zinc-50 border-b border-zinc-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Core Resources</h4>
                    <div className="flex flex-col gap-2">
                      <Link href="/montana-tax-free-3pl" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Master 3PL Pillar Guide</Link>
                      <Link href="/montana-tax-savings-calculator" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Tax Savings Calculator</Link>
                      <Link href="/estimator" className="block text-sm font-medium text-zinc-900 hover:text-emerald-600 transition-colors">Cost Estimator Tool</Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">By Origin State</h4>
                    <div className="flex flex-col gap-2">
                      <Link href="/tax-savings/california-to-montana-3pl" className="block text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">California (10.25% Tax Avoidance)</Link>
                      <Link href="/tax-savings/washington-to-montana-3pl" className="block text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">Washington (10.6% Tax Avoidance)</Link>
                      <Link href="/tax-savings/texas-to-montana-3pl" className="block text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">Texas (8.25% Tax Avoidance)</Link>
                      <Link href="/tax-savings/new-york-to-montana-3pl" className="block text-sm font-medium text-zinc-900 hover:text-amber-600 transition-colors">New York (8.875% Tax Avoidance)</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.a whileHover={{ y: -1 }} href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">About</motion.a>
            <motion.a whileHover={{ y: -1 }} href="/contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Contact</motion.a>

            {onOpenQuestions && (
              <motion.button whileHover={{ y: -1 }} onClick={onOpenQuestions} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Questions</motion.button>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/#fit-review"
              className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Start Fit Review
            </Link>
            <button 
              className="md:hidden p-2 text-zinc-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#f9fafb] flex flex-col md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-zinc-200">
              <span className="font-bold text-zinc-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-zinc-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <Link onClick={() => setMobileMenuOpen(false)} href="/#process" className="text-lg font-medium text-zinc-900">Process</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/#fit-review" className="text-lg font-medium text-zinc-900">Fit Review</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="text-lg font-medium text-zinc-900">About Us</Link>
              <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="text-lg font-medium text-zinc-900">Contact</Link>

              <div className="border-t border-zinc-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">Services</h4>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-emerald-500">
                  <Link onClick={() => setMobileMenuOpen(false)} href="/services/tax-free-amazon-fba-prep" className="text-zinc-900 font-medium">Tax-Free Amazon FBA Prep</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/services/dtc-ecommerce-fulfillment" className="text-zinc-900 font-medium">DTC E-Commerce Fulfillment</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/services/wholesale-inventory-storage" className="text-zinc-900 font-medium">Wholesale Inventory Storage</Link>
                </div>
              </div>
              
              <div className="border-t border-zinc-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">Tax-Free 3PL Resources</h4>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-emerald-500">
                  <Link onClick={() => setMobileMenuOpen(false)} href="/montana-tax-free-3pl" className="text-zinc-900">Master 3PL Pillar Guide</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/montana-tax-savings-calculator" className="text-zinc-900">Tax Savings Calculator</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/estimator" className="text-zinc-900">Cost Estimator Tool</Link>
                </div>
              </div>
              
              <div className="border-t border-zinc-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">By Origin State</h4>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-amber-500">
                  <Link onClick={() => setMobileMenuOpen(false)} href="/tax-savings/california-to-montana-3pl" className="text-zinc-900">California (10.25% Avoidance)</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/tax-savings/washington-to-montana-3pl" className="text-zinc-900">Washington (10.6% Avoidance)</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/tax-savings/texas-to-montana-3pl" className="text-zinc-900">Texas (8.25% Avoidance)</Link>
                  <Link onClick={() => setMobileMenuOpen(false)} href="/tax-savings/new-york-to-montana-3pl" className="text-zinc-900">New York (8.875% Avoidance)</Link>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  href="/#fit-review"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-12 w-full rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
                >
                  Start Fit Review
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
