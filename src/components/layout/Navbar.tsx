"use client";

import React, { useState } from "react";
import Link from "next/link";
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
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-600/10 text-emerald-600 border border-emerald-600/20 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <svg aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                  <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-xl font-bold tracking-tight text-zinc-900 leading-tight">Such Group E-Commerce</span>
                <span className="text-[9px] sm:text-xs font-medium text-zinc-500 tracking-wide uppercase mt-0.5">Prep • Fulfillment • Storage</span>
              </div>
            </Link>
          </div>
          
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            <motion.a whileHover={{ y: -1 }} href="/#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Services</motion.a>
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

            {onOpenQuestions && (
              <motion.button whileHover={{ y: -1 }} onClick={onOpenQuestions} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Questions</motion.button>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="/#fit-review"
              className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Start Fit Review
            </a>
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
              <a onClick={() => setMobileMenuOpen(false)} href="/#services" className="text-lg font-medium text-zinc-900">Services</a>
              <a onClick={() => setMobileMenuOpen(false)} href="/#process" className="text-lg font-medium text-zinc-900">Process</a>
              <a onClick={() => setMobileMenuOpen(false)} href="/#fit-review" className="text-lg font-medium text-zinc-900">Fit Review</a>
              
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
                <a 
                  href="/#fit-review"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-12 w-full rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
                >
                  Start Fit Review
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
