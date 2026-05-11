"use client";

import { motion } from "framer-motion";

export function TrustRibbon() {
  return (
    <div className="relative mt-12 z-20 container mx-auto px-4 max-w-5xl text-center">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8"
      >
        Trusted by High-Growth Amazon Brands
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
      >
        <div className="flex items-center gap-2 font-bold text-slate-300 text-lg">
            <span className="w-5 h-5 bg-emerald-500 rounded-sm"></span> AeroGear
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-300 text-lg">
            <span className="w-5 h-5 bg-cyan-500 transform rotate-45"></span> OmniShip
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-300 text-lg">
            <span className="w-5 h-5 rounded-full border-[3px] border-indigo-500"></span> Zenith Logistics
        </div>
        <div className="flex items-center gap-2 font-bold text-slate-300 text-lg">
            <span className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-rose-500"></span> Vertex Supplies
        </div>
      </motion.div>
    </div>
  );
}
