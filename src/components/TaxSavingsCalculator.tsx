"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const states = [
  { name: "Alabama (4.0%)", rate: 0.04 },
  { name: "Alaska (0.0%)", rate: 0.0 },
  { name: "Arizona (5.6%)", rate: 0.056 },
  { name: "Arkansas (6.5%)", rate: 0.065 },
  { name: "California (8.25%)", rate: 0.0825 },
  { name: "Colorado (2.9%)", rate: 0.029 },
  { name: "Connecticut (6.35%)", rate: 0.0635 },
  { name: "Delaware (0.0%)", rate: 0.0 },
  { name: "Florida (6.0%)", rate: 0.06 },
  { name: "Georgia (4.0%)", rate: 0.04 },
  { name: "Hawaii (4.0%)", rate: 0.04 },
  { name: "Idaho (6.0%)", rate: 0.06 },
  { name: "Illinois (8.5%)", rate: 0.085 },
  { name: "Indiana (7.0%)", rate: 0.07 },
  { name: "Iowa (6.0%)", rate: 0.06 },
  { name: "Kansas (6.5%)", rate: 0.065 },
  { name: "Kentucky (6.0%)", rate: 0.06 },
  { name: "Louisiana (4.45%)", rate: 0.0445 },
  { name: "Maine (5.5%)", rate: 0.055 },
  { name: "Maryland (6.0%)", rate: 0.06 },
  { name: "Massachusetts (6.25%)", rate: 0.0625 },
  { name: "Michigan (6.0%)", rate: 0.06 },
  { name: "Minnesota (6.875%)", rate: 0.06875 },
  { name: "Mississippi (7.0%)", rate: 0.07 },
  { name: "Missouri (4.225%)", rate: 0.04225 },
  { name: "Montana (0.0%)", rate: 0.0 },
  { name: "Nebraska (5.5%)", rate: 0.055 },
  { name: "Nevada (6.85%)", rate: 0.0685 },
  { name: "New Hampshire (0.0%)", rate: 0.0 },
  { name: "New Jersey (6.625%)", rate: 0.06625 },
  { name: "New Mexico (5.125%)", rate: 0.05125 },
  { name: "New York (8.875%)", rate: 0.08875 },
  { name: "North Carolina (4.75%)", rate: 0.0475 },
  { name: "North Dakota (5.0%)", rate: 0.05 },
  { name: "Ohio (5.75%)", rate: 0.0575 },
  { name: "Oklahoma (4.5%)", rate: 0.045 },
  { name: "Oregon (0.0%)", rate: 0.0 },
  { name: "Pennsylvania (6.0%)", rate: 0.06 },
  { name: "Rhode Island (7.0%)", rate: 0.07 },
  { name: "South Carolina (6.0%)", rate: 0.06 },
  { name: "South Dakota (4.2%)", rate: 0.042 },
  { name: "Tennessee (7.0%)", rate: 0.07 },
  { name: "Texas (6.25%)", rate: 0.0625 },
  { name: "Utah (4.85%)", rate: 0.0485 },
  { name: "Vermont (6.0%)", rate: 0.06 },
  { name: "Virginia (5.3%)", rate: 0.053 },
  { name: "Washington (9.0%)", rate: 0.09 },
  { name: "West Virginia (6.0%)", rate: 0.06 },
  { name: "Wisconsin (5.0%)", rate: 0.05 },
  { name: "Wyoming (4.0%)", rate: 0.04 },
  { name: "National Average (7.5%)", rate: 0.075 },
];

export default function TaxSavingsCalculator() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(5000);
  const [costPerUnit, setCostPerUnit] = useState<number>(15);
  const [taxRate, setTaxRate] = useState<number>(0.0825);

  const monthlySpend = monthlyUnits * costPerUnit;
  const annualSavings = monthlySpend * 12 * taxRate;

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
            <h3 className="text-2xl font-bold text-white tracking-tight">The Montana Advantage</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Montana has <strong>zero state sales tax</strong>. When you route your inventory purchasing through our facility, you stop paying an automatic premium to state governments.
            Calculate your invisible savings.
          </p>

          <div className="space-y-6">
            {/* Units Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-zinc-300">Monthly Units Processed</label>
                <motion.span key={monthlyUnits} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  {monthlyUnits.toLocaleString()} units
                </motion.span>
              </div>
              <motion.input
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
                <label className="text-sm font-medium text-zinc-300">Average Cost Per Unit</label>
                <motion.span key={costPerUnit} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  ${costPerUnit}
                </motion.span>
              </div>
              <motion.input
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

            {/* State Dropdown */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-300 block">Current Prep State</label>
              <select
                value={taxRate}
                onChange={(e) => setTaxRate(parseFloat(e.target.value))}
                className="w-full h-12 bg-zinc-900 border border-zinc-700 rounded-xl px-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1.2em",
                }}
              >
                {states.map((s) => (
                  <option key={s.name} value={s.rate} className="bg-zinc-900 text-white">
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)" }}
          transition={{ duration: 0.3 }}
          className="bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-8 text-center flex flex-col items-center justify-center relative shadow-inner h-full min-h-[300px]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay rounded-3xl" />
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-2 relative z-10">Estimated Annual Savings</span>
          <motion.div
            key={annualSavings}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            ${Math.round(annualSavings).toLocaleString()}
          </motion.div>
          <p className="text-zinc-400 text-sm relative z-10">
            Straight to your bottom line, just by changing your shipping address to Montana.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
