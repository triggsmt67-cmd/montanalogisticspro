"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; 

export function PathSelectorWidget() {
  return (
    <div className="relative -mt-16 z-20 container mx-auto px-4 max-w-5xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-dark rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 justify-between border border-white/5 shadow-2xl"
      >
        <div className="flex-1 w-full bg-[#0F172A]/50 hover:bg-[#0F172A] border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden flex flex-col cursor-pointer group transition-all duration-300 p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors z-10">Online Arbitrage</h3>
          <p className="text-slate-400 text-sm mb-4 z-10">High-volume, rapid-prep for OA sellers.</p>
          <div className="mt-auto flex items-center text-emerald-400 text-sm font-bold gap-2 z-10">
            Explore Path <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="flex-1 w-full bg-[#0F172A]/50 hover:bg-[#0F172A] border border-slate-800 hover:border-cyan-400/50 rounded-xl overflow-hidden flex flex-col cursor-pointer group transition-all duration-300 p-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors z-10">Wholesale & PL</h3>
          <p className="text-slate-400 text-sm mb-4 z-10">Pallet storage and carton forwarding.</p>
          <div className="mt-auto flex items-center text-cyan-400 text-sm font-bold gap-2 z-10">
            Explore Path <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
