"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";
import Link from "next/link";
import { getFbaRate } from "@/lib/pricing";

export default function TCFCalculator() {
  const [acquisitionCost, setAcquisitionCost] = useState<number>(25);
  const [taxRate, setTaxRate] = useState<number>(8.25);
  const [prepFee, setPrepFee] = useState<number>(1.35);
  const [freightPremium, setFreightPremium] = useState<number>(0.35);
  const [volume, setVolume] = useState<number>(1000);
  const [manualPrepFee, setManualPrepFee] = useState(false);

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (!manualPrepFee) {
      const publishedRate = getFbaRate(newVol);
      if (publishedRate !== null) setPrepFee(publishedRate);
    }
  };

  const taxSavedPerUnit = acquisitionCost * (taxRate / 100);
  const prepAndFreightPerUnit = prepFee + freightPremium;
  const netGainPerUnit = taxSavedPerUnit - prepAndFreightPerUnit;
  const totalMonthlyNetSavings = netGainPerUnit * volume;
  
  const isPositive = totalMonthlyNetSavings >= 0;

  // The noise pattern used in the original calculator
  const noisePattern = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')";

  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: "0 40px 80px -20px rgba(16, 185, 129, 0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-zinc-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group cursor-default w-full"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Calculator size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Total Cost of Fulfillment</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Model an assumed checkout-tax difference against prep and freight. This is a planning estimate, not a tax determination, carrier quote, or promised margin.
          </p>
          
          <div className="space-y-6">
            {/* Acq Cost */}
            <div className="space-y-3">
              <label htmlFor="tcf-acq-cost" className="text-sm font-medium text-zinc-300 block">Product Acquisition Cost</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono" aria-hidden="true">$</span>
                <input 
                  id="tcf-acq-cost"
                  type="number" 
                  step="0.01"
                  min="0"
                  aria-label="Product Acquisition Cost in dollars"
                  value={acquisitionCost === 0 ? "" : acquisitionCost}
                  onChange={(e) => setAcquisitionCost(parseFloat(e.target.value) || 0)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-4 py-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
              </div>
            </div>

            {/* Tax Rate */}
            <div className="space-y-3">
              <label htmlFor="tcf-tax-rate" className="text-sm font-medium text-zinc-300 block">Origin Checkout Sales Tax</label>
              <div className="relative">
                <input 
                  id="tcf-tax-rate"
                  type="number" 
                  step="0.01"
                  min="0"
                  aria-label="Origin Checkout Sales Tax percentage"
                  value={taxRate === 0 ? "" : taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-8 py-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono" aria-hidden="true">%</span>
              </div>
            </div>

            {/* Prep Fee */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor="tcf-prep-fee" className="text-sm font-medium text-zinc-300 block">Such Group Prep Fee</label>
                <span className="text-xs text-emerald-400 font-mono">{volume > 10000 ? "Quote required over 10,000" : `Tier: $${prepFee.toFixed(2)}/unit`}</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono" aria-hidden="true">$</span>
                <input 
                  id="tcf-prep-fee"
                  type="number" 
                  step="0.01"
                  min="0"
                  aria-label="Such Group Prep Fee in dollars"
                  value={prepFee === 0 ? "" : prepFee}
                  onChange={(e) => {
                    setManualPrepFee(true);
                    setPrepFee(parseFloat(e.target.value) || 0);
                  }}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-4 py-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
              </div>
            </div>

            {/* Freight Premium */}
            <div className="space-y-3">
              <label htmlFor="tcf-freight-premium" className="text-sm font-medium text-zinc-300 block">Est. Freight Zone Premium</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono" aria-hidden="true">$</span>
                <input 
                  id="tcf-freight-premium"
                  type="number" 
                  step="0.01"
                  min="0"
                  aria-label="Estimated Freight Zone Premium in dollars"
                  value={freightPremium === 0 ? "" : freightPremium}
                  onChange={(e) => setFreightPremium(parseFloat(e.target.value) || 0)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-4 py-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
              </div>
              {volume > 10000 && !manualPrepFee && (
                <p className="text-xs text-amber-300">The published schedule ends at 10,000 monthly units. The displayed fee remains the last valid tier for illustration only; contact us for an actual rate.</p>
              )}
            </div>

            {/* Volume */}
            <div className="space-y-3">
              <label htmlFor="tcf-monthly-volume" className="text-sm font-medium text-zinc-300 block">Monthly Unit Volume</label>
              <div className="relative">
                <input 
                  id="tcf-monthly-volume"
                  type="number" 
                  step="1"
                  min="0"
                  aria-label="Monthly Unit Volume"
                  value={volume === 0 ? "" : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value) || 0)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-16 py-3 text-white font-mono focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 font-mono text-sm" aria-hidden="true">units</span>
              </div>
            </div>

          </div>
        </div>

        <div className="h-full flex flex-col gap-6">
          <motion.div 
            whileHover={{ scale: 1.02, boxShadow: isPositive ? "0 20px 40px -10px rgba(16, 185, 129, 0.2)" : "0 20px 40px -10px rgba(244, 63, 94, 0.2)" }}
            transition={{ duration: 0.3 }}
            className={`flex-grow rounded-3xl p-8 text-center flex flex-col items-center justify-center relative shadow-inner min-h-[300px] border transition-colors ${
              isPositive ? 'bg-emerald-950/40 border-emerald-800/50' : 'bg-rose-950/40 border-rose-800/50'
            }`}
          >
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay rounded-3xl pointer-events-none" 
              style={{ backgroundImage: noisePattern }}
            />
            
            <span className={`text-sm font-bold tracking-widest uppercase mb-2 relative z-10 transition-colors ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              Estimated Monthly Net Difference
            </span>
            
            <div className="relative h-20 w-full flex items-center justify-center z-10 mb-2">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={totalMonthlyNetSavings}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className={`text-5xl md:text-6xl font-bold tracking-tighter absolute drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-colors ${isPositive ? 'text-white' : 'text-rose-100'}`}
                >
                  {isPositive ? '+' : '-'}${Math.abs(totalMonthlyNetSavings).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <p className="text-zinc-400 text-sm relative z-10 mt-2 max-w-[200px] mx-auto">
              Based only on the assumptions entered; other taxes, fees, freight, storage, and obligations may apply.
            </p>

            <div className="mt-8 flex flex-col gap-2 text-sm text-zinc-400 relative z-10 w-full text-left bg-black/20 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between items-center">
                <span>Assumed Tax Difference / Unit</span>
                <span className="text-emerald-400 font-medium">+${taxSavedPerUnit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Prep & Freight / Unit</span>
                <span className="text-rose-400 font-medium">-${prepAndFreightPerUnit.toFixed(2)}</span>
              </div>
              <div className="w-full h-px bg-white/10 my-1" />
              <div className="flex justify-between items-center font-bold text-white">
                <span>Net Gain / Unit</span>
                <span className={isPositive ? 'text-emerald-400' : 'text-rose-400'}>
                  {isPositive ? '+' : '-'}${Math.abs(netGainPerUnit).toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>

          <Link href="/estimator" className="w-full">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 rounded-full bg-white text-zinc-900 font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-100 transition-colors"
            >
              Get Started with Such Group
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
