"use client";

import { motion } from "framer-motion";

export function TrustRibbon() {
  return (
    <div className="relative z-20 w-full border-y border-white/5 bg-[#020617]/50 backdrop-blur-md py-6">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-center"
        >
          <div className="text-sm md:text-base font-bold text-slate-400 tracking-wider uppercase">
            99.99% Shipment Accuracy
          </div>
          <div className="hidden md:block text-slate-700">|</div>
          <div className="text-sm md:text-base font-bold text-slate-400 tracking-wider uppercase">
            48hr Max Dock-to-Stock
          </div>
          <div className="hidden md:block text-slate-700">|</div>
          <div className="text-sm md:text-base font-bold text-slate-400 tracking-wider uppercase">
            0% State Sales Tax
          </div>
        </motion.div>
      </div>
    </div>
  );
}
