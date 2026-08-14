"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function SavingsCalculator() {
  const [units, setUnits] = useState([1000]);
  const [unitValue, setUnitValue] = useState([25]);
  const [taxRate, setTaxRate] = useState("0.0725"); // Default CA

  const currentUnits = Array.isArray(units) ? units[0] : units;
  const currentUnitValue = Array.isArray(unitValue) ? unitValue[0] : unitValue;
  const projectedAnnualSavings = (currentUnits || 1000) * 12 * (currentUnitValue || 25) * parseFloat(taxRate);

  const handleScrollToIntake = () => {
    document.getElementById("intake-flow")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden" id="roi-model">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Calculate Your Tax Savings</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Montana has 0% state sales tax. See how much margin you capture annually by routing inventory through our facility.</p>
          </div>

          <div className="linear-card overflow-hidden shadow-2xl p-8 md:p-12 mb-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                
                {/* Monthly Units */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Monthly Units</label>
                    <span className="text-white font-mono text-xl">{(Array.isArray(units) ? units[0] : units)?.toLocaleString() || "1,000"}</span>
                  </div>
                  <Slider 
                    defaultValue={[1000]} 
                    min={100}
                    max={10000} 
                    step={100} 
                    onValueChange={(val) => setUnits(Array.isArray(val) ? val : [val as number])}
                    className="py-4 [&_[role=slider]]:bg-emerald-500 [&_[role=slider]]:border-emerald-500"
                  />
                </div>

                {/* Avg Unit Value */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Avg. Unit Value</label>
                    <span className="text-white font-mono text-xl">${(Array.isArray(unitValue) ? unitValue[0] : unitValue)?.toLocaleString() || "25"}</span>
                  </div>
                  <Slider 
                    defaultValue={[25]} 
                    min={5}
                    max={200} 
                    step={1} 
                    onValueChange={(val) => setUnitValue(Array.isArray(val) ? val : [val as number])}
                    className="py-4 [&_[role=slider]]:bg-cyan-500 [&_[role=slider]]:border-cyan-500"
                  />
                </div>

                {/* Origin State */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Origin State</label>
                  <Select defaultValue="0.0725" onValueChange={(val) => { if (val) setTaxRate(val); }}>
                    <SelectTrigger className="w-full bg-white/[0.03] border-white/[0.1] text-white h-12 focus:ring-emerald-500/20">
                      <SelectValue placeholder="Select Origin State" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/[0.1] text-white max-h-[300px]">
                      <SelectItem value="0.04">Alabama (4.0%)</SelectItem>
                      <SelectItem value="0.0">Alaska (0%)</SelectItem>
                      <SelectItem value="0.056">Arizona (5.6%)</SelectItem>
                      <SelectItem value="0.065">Arkansas (6.5%)</SelectItem>
                      <SelectItem value="0.0725">California (7.25%)</SelectItem>
                      <SelectItem value="0.029">Colorado (2.9%)</SelectItem>
                      <SelectItem value="0.0635">Connecticut (6.35%)</SelectItem>
                      <SelectItem value="0.0">Delaware (0%)</SelectItem>
                      <SelectItem value="0.06">Florida (6.0%)</SelectItem>
                      <SelectItem value="0.04">Georgia (4.0%)</SelectItem>
                      <SelectItem value="0.04">Hawaii (4.0%)</SelectItem>
                      <SelectItem value="0.06">Idaho (6.0%)</SelectItem>
                      <SelectItem value="0.0625">Illinois (6.25%)</SelectItem>
                      <SelectItem value="0.07">Indiana (7.0%)</SelectItem>
                      <SelectItem value="0.06">Iowa (6.0%)</SelectItem>
                      <SelectItem value="0.065">Kansas (6.5%)</SelectItem>
                      <SelectItem value="0.06">Kentucky (6.0%)</SelectItem>
                      <SelectItem value="0.0445">Louisiana (4.45%)</SelectItem>
                      <SelectItem value="0.055">Maine (5.5%)</SelectItem>
                      <SelectItem value="0.06">Maryland (6.0%)</SelectItem>
                      <SelectItem value="0.0625">Massachusetts (6.25%)</SelectItem>
                      <SelectItem value="0.06">Michigan (6.0%)</SelectItem>
                      <SelectItem value="0.06875">Minnesota (6.875%)</SelectItem>
                      <SelectItem value="0.07">Mississippi (7.0%)</SelectItem>
                      <SelectItem value="0.04225">Missouri (4.225%)</SelectItem>
                      <SelectItem value="0.0">Montana (0%)</SelectItem>
                      <SelectItem value="0.055">Nebraska (5.5%)</SelectItem>
                      <SelectItem value="0.0685">Nevada (6.85%)</SelectItem>
                      <SelectItem value="0.0">New Hampshire (0%)</SelectItem>
                      <SelectItem value="0.06625">New Jersey (6.625%)</SelectItem>
                      <SelectItem value="0.05125">New Mexico (5.125%)</SelectItem>
                      <SelectItem value="0.04">New York (4.0%)</SelectItem>
                      <SelectItem value="0.0475">North Carolina (4.75%)</SelectItem>
                      <SelectItem value="0.05">North Dakota (5.0%)</SelectItem>
                      <SelectItem value="0.0575">Ohio (5.75%)</SelectItem>
                      <SelectItem value="0.045">Oklahoma (4.5%)</SelectItem>
                      <SelectItem value="0.0">Oregon (0%)</SelectItem>
                      <SelectItem value="0.06">Pennsylvania (6.0%)</SelectItem>
                      <SelectItem value="0.07">Rhode Island (7.0%)</SelectItem>
                      <SelectItem value="0.06">South Carolina (6.0%)</SelectItem>
                      <SelectItem value="0.042">South Dakota (4.2%)</SelectItem>
                      <SelectItem value="0.07">Tennessee (7.0%)</SelectItem>
                      <SelectItem value="0.0625">Texas (6.25%)</SelectItem>
                      <SelectItem value="0.0485">Utah (4.85%)</SelectItem>
                      <SelectItem value="0.06">Vermont (6.0%)</SelectItem>
                      <SelectItem value="0.053">Virginia (5.3%)</SelectItem>
                      <SelectItem value="0.065">Washington (6.5%)</SelectItem>
                      <SelectItem value="0.06">West Virginia (6.0%)</SelectItem>
                      <SelectItem value="0.05">Wisconsin (5.0%)</SelectItem>
                      <SelectItem value="0.04">Wyoming (4.0%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

              </div>
              
              <div className="bg-white/[0.02] rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden border border-white/[0.05] h-full min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6 relative z-10">Projected Annual Margin Captured</p>
                
                <div className="relative h-24 w-full flex items-center justify-center">
                  <AnimatePresence mode="popLayout">
                    <motion.div 
                      key={projectedAnnualSavings}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute"
                    >
                      <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 tracking-tight font-mono">
                        ${projectedAnnualSavings.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleScrollToIntake}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 text-black font-bold px-8 h-14 rounded-full text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              Lock In This Margin
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
