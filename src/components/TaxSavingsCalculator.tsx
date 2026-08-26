"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function TaxSavingsCalculator() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(5000);
  const [costPerUnit, setCostPerUnit] = useState<number>(15);
  const [taxRate, setTaxRate] = useState<number>(8.25);

  const monthlySpend = monthlyUnits * costPerUnit;
  const annualDifference = monthlySpend * 12 * (taxRate / 100);

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 40px 80px -20px rgba(16, 185, 129, 0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-zinc-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group cursor-default"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Calculator size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Checkout-Tax Planning Comparison</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Montana has <strong>no general statewide sales tax</strong>. Qualifying purchases delivered to our facility may be billed without state sales tax, depending on the seller, transaction, and your business&apos;s obligations.
            Enter the rate that would apply to the comparison delivery address. The result is illustrative and does not determine invoice treatment or tax liability.
          </p>

          <div className="space-y-6">
            {/* Units Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label htmlFor="tax-monthly-units" className="text-sm font-medium text-zinc-300">Monthly Units Processed</label>
                <motion.span key={monthlyUnits} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  {monthlyUnits.toLocaleString()} units
                </motion.span>
              </div>
              <motion.input
                id="tax-monthly-units"
                aria-label="Monthly Units Processed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="range"
                min="1000"
                max="100000"
                step="500"
                value={monthlyUnits}
                onChange={(e) => setMonthlyUnits(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all duration-200"
              />
              <div className="flex justify-between text-xs text-zinc-500">
                <span>1k</span>
                <span>100k+</span>
              </div>
            </div>

            {/* Cost Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label htmlFor="tax-cost-per-unit" className="text-sm font-medium text-zinc-300">Average Cost Per Unit</label>
                <motion.span key={costPerUnit} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  ${costPerUnit}
                </motion.span>
              </div>
              <motion.input
                id="tax-cost-per-unit"
                aria-label="Average Cost Per Unit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="range"
                min="1"
                max="250"
                step="1"
                value={costPerUnit}
                onChange={(e) => setCostPerUnit(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all duration-200"
              />
              <div className="flex justify-between text-xs text-zinc-500">
                <span>$1</span>
                <span>$250+</span>
              </div>
            </div>

            {/* Comparison rate */}
            <div className="space-y-3">
              <label htmlFor="tax-comparison-rate" className="text-sm font-medium text-zinc-300 block">Applicable Comparison Rate</label>
              <div className="relative">
              <input
                id="tax-comparison-rate"
                type="number"
                min="0"
                max="20"
                step="0.01"
                aria-label="Applicable comparison sales tax rate percentage"
                value={taxRate}
                onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                className="w-full h-12 bg-zinc-900 border border-zinc-700 rounded-xl px-4 pr-10 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" aria-hidden="true">%</span>
              </div>
              <p className="text-xs text-zinc-500">Use a current official lookup or invoice for the actual comparison address.</p>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)" }}
          transition={{ duration: 0.3 }}
          className="bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-8 text-center flex flex-col items-center justify-center relative shadow-inner h-full min-h-[300px]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay rounded-3xl" />
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-2 relative z-10">Illustrative Annual Checkout-Tax Difference</span>
          <motion.div
            key={annualDifference}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            ${Math.round(annualDifference).toLocaleString()}
          </motion.div>
          <p className="text-zinc-400 text-sm relative z-10">
            This calculation excludes prep, freight, storage, add-ons, exemptions, use tax, nexus, filing duties, and other costs or obligations. It is not a quote or guaranteed saving.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
