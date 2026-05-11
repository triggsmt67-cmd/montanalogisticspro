"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-visible min-h-[90vh] flex flex-col justify-center items-center text-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/globe%20hero%20image.jpg')] bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/40 via-[#0B1120]/70 to-[#0B1120]"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-emerald-500/30 text-emerald-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          Now accepting Q4 Volume
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Tax-Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Montana Prep.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed mb-10"
        >
          48-Hour Turnaround Guaranteed. 99.9% accuracy for high-volume Amazon sellers. Scalable, API-integrated, and zero fluff.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-6 rounded-lg text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            Start Scaling Now
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800 px-8 py-6 rounded-lg text-lg transition-all bg-slate-900/50 backdrop-blur-sm">
            View Pricing
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
