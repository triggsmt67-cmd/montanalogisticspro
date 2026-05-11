"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function SavingsCalculator() {
  const [units, setUnits] = useState([5000]);
  const [taxRate, setTaxRate] = useState("0.08");

  const avgCostPerUnit = 25; 
  const projectedSavings = units[0] * avgCostPerUnit * parseFloat(taxRate);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0B1120]" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Calculate Your Tax Savings</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Montana has 0% state sales tax. See how much you could save on sourcing simply by routing your inventory through our facility.</p>
          </div>

          <Card className="glass-dark border-white/10 overflow-hidden shadow-2xl rounded-3xl">
            <div className="grid md:grid-cols-5">
              <CardContent className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 md:col-span-3">
                <div className="space-y-12">
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-medium text-slate-400 uppercase tracking-wider">Monthly Units Sourced</label>
                      <span className="text-white font-bold text-3xl">{units[0].toLocaleString()}</span>
                    </div>
                    <Slider 
                      defaultValue={[5000]} 
                      max={50000} 
                      step={500} 
                      onValueChange={(val) => setUnits(val as number[])}
                      className="py-4 [&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-medium text-slate-400 uppercase tracking-wider block">Current State Sales Tax</label>
                    <Select defaultValue="0.08" onValueChange={(val) => { if (val) setTaxRate(val); }}>
                      <SelectTrigger className="w-full bg-slate-900/50 border-slate-800 text-white h-12 focus:ring-emerald-500/20">
                        <SelectValue placeholder="Select tax rate" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-800 text-white">
                        <SelectItem value="0.06">6% (e.g., FL, PA)</SelectItem>
                        <SelectItem value="0.07">7% (e.g., IN, RI)</SelectItem>
                        <SelectItem value="0.08">8% (e.g., TX, NY)</SelectItem>
                        <SelectItem value="0.09">9% (e.g., TN, LA)</SelectItem>
                        <SelectItem value="0.10">10%+ (e.g., CA, WA)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-slate-900/50 p-8 md:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden md:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-6 relative z-10">Projected Monthly Savings</p>
                
                <div className="relative h-20 w-full flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={projectedSavings}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute"
                    >
                      <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight">
                        ${projectedSavings.toLocaleString()}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <p className="text-xs text-slate-500 mt-8 max-w-xs relative z-10">Based on an estimated average sourcing cost of $25/unit.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
