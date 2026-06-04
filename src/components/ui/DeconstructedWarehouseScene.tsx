'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, DollarSign } from 'lucide-react';

interface FragmentProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  hoverScale?: number;
}

const LogisticsFragment: React.FC<FragmentProps> = ({
  src,
  className = '',
  style = {},
  delay = 0,
  duration = 6,
  hoverScale = 1.04,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: [0, -4, 0], // Gentle 4px hover drift
      }}
      transition={{
        y: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        },
        opacity: { duration: 0.6, delay: delay * 0.3 },
      }}
      whileHover={{ 
        scale: hoverScale,
        y: -6,
        transition: { type: "spring", stiffness: 350, damping: 18 }
      }}
      className={`absolute cursor-default pointer-events-auto transition-shadow duration-300 hover:drop-shadow-xl ${className}`}
      style={{ 
        mixBlendMode: 'multiply',
        ...style 
      }}
    >
      <img
        src={src}
        alt="Logistics Element"
        className="w-full h-full object-contain pointer-events-none select-none"
      />
    </motion.div>
  );
};

export default function DeconstructedWarehouseScene() {
  return (
    <div className="w-full flex flex-col items-center overflow-visible">
      <div className="relative w-full aspect-[4/3.2] max-w-2xl mx-auto overflow-visible select-none">
        {/* Self-contained styling for the logistics flow animation */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes logisticsFlowAnimation {
            to {
              stroke-dashoffset: -20;
            }
          }
          .animate-logistics-flow {
            animation: logisticsFlowAnimation 1.5s linear infinite;
          }
        `}} />

        {/* SVG Connecting Flow Lines (Clean Orthogonal Blueprint Style) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.25]" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Input Flow (From left edge to Prep Box) */}
          <path 
            d="M 2,46 H 24" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="1.2" 
            strokeDasharray="4 4"
            className="animate-logistics-flow"
          />
          {/* Prep Box -> Storage Shelves (Orthogonal connection) */}
          <path 
            d="M 24,46 V 18 H 71" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="1.2" 
            strokeDasharray="4 4"
            className="animate-logistics-flow"
          />
          {/* Storage Shelves -> Courier Van (Straight vertical line) */}
          <path 
            d="M 71,18 V 80" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="1.2" 
            strokeDasharray="4 4"
            className="animate-logistics-flow"
          />
          {/* Courier Van -> Dispatch Out (To right edge) */}
          <path 
            d="M 71,80 H 98" 
            fill="none" 
            stroke="#10b981" 
            strokeWidth="1.2" 
            strokeDasharray="4 4"
            className="animate-logistics-flow"
          />
        </svg>

        {/* Horizontal Shelves / Guide Lines */}
        {/* Top Shelf: Storage (rests at 34%) */}
        <div className="absolute top-[34%] left-[5%] right-[5%] border-t border-dashed border-zinc-200 pointer-events-none">
          <span className="absolute -top-4 left-0 text-[8px] tracking-widest font-black text-zinc-400 uppercase">
            Stage 02: High-Density Inventory Storage
          </span>
        </div>

        {/* Middle Shelf: Preparation & Sorting (rests at 58%) */}
        <div className="absolute top-[58%] left-[5%] right-[5%] border-t border-dashed border-zinc-200 pointer-events-none">
          <span className="absolute -top-4 left-0 text-[8px] tracking-widest font-black text-zinc-400 uppercase">
            Stage 01: Intake, Inspection & Prep
          </span>
        </div>

        {/* Bottom Shelf: Distribution Floor (rests at 98%) */}
        <div className="absolute top-[98%] left-[5%] right-[5%] border-t border-dashed border-zinc-200 pointer-events-none">
          <span className="absolute -top-4 left-0 text-[8px] tracking-widest font-black text-zinc-400 uppercase">
            Stage 03: Orders Dispatch & Courier Hub
          </span>
        </div>

        {/* --- WAREHOUSE DECONSTRUCTED ILLUSTRATION PIECES --- */}

        {/* 1. Storage Rack (Stage 02 - Upper Right) */}
        <LogisticsFragment
          src="/hero_storage.png"
          className="top-[2%] left-[52%] w-[38%] h-[32%] z-10"
          delay={0.4}
          duration={5.5}
        />

        {/* 2. Prep Box (Stage 01 - Middle Left) */}
        <LogisticsFragment
          src="/hero_prep.png"
          className="top-[34%] left-[12%] w-[24%] h-[24%] z-20"
          delay={0.1}
          duration={5.0}
        />

        {/* 3. Delivery Dispatch Van (Stage 03 - Bottom Right) */}
        <LogisticsFragment
          src="/hero_shipping.png"
          className="top-[66%] left-[52%] w-[38%] h-[32%] z-30"
          delay={0.7}
          duration={5.3}
        />

        {/* --- DYNAMIC FLOATING BLUEPRINT ANNOTATIONS --- */}

        {/* SLA Badge (Top Right - hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, -3, 0] }}
          transition={{
            y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 },
            opacity: { duration: 0.6 }
          }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute top-[6%] -right-8 z-40 bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-lg rounded-2xl p-3 items-center gap-2 cursor-default select-none shrink-0"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
            <ShieldCheck size={14} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest mb-0.5">Accuracy SLA</span>
            <span className="text-[10px] font-bold text-zinc-950">99.9% Prep SLA</span>
          </div>
        </motion.div>

        {/* Tax-Free Badge (Middle Right - hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, y: [0, 3, 0] }}
          transition={{
            y: { duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 },
            opacity: { duration: 0.6 }
          }}
          whileHover={{ scale: 1.04 }}
          className="hidden md:flex absolute top-[44%] -right-8 z-40 bg-white/95 backdrop-blur-md border border-zinc-200/80 shadow-lg rounded-2xl p-3 items-center gap-2 cursor-default select-none shrink-0"
        >
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
            <DollarSign size={14} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest mb-0.5">Sales Tax</span>
            <span className="text-[10px] font-bold text-zinc-950">0% Tax Prep Facility</span>
          </div>
        </motion.div>

        {/* Hotspot 1: High-Density Capacity */}
        <div className="absolute top-[1%] left-[8%] flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-zinc-200/40 rounded-full px-2 py-0.5 shadow-sm text-[8px] font-semibold text-zinc-500 pointer-events-auto">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Secure Storage Node</span>
        </div>

        {/* Hotspot 2: FBA Integration */}
        <div className="absolute top-[41%] left-[40%] flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-zinc-200/40 rounded-full px-2 py-0.5 shadow-sm text-[8px] font-semibold text-zinc-500 pointer-events-auto">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>100% Scan Compliance</span>
        </div>

        {/* Hotspot 3: Fast Dispatch */}
        <div className="absolute top-[70%] right-[14%] flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-zinc-200/40 rounded-full px-2 py-0.5 shadow-sm text-[8px] font-semibold text-zinc-500 pointer-events-auto">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Same-Day Courier Hub</span>
        </div>
      </div>

      {/* Mobile-only trust badges container */}
      <div className="flex flex-col min-[380px]:flex-row md:hidden items-stretch min-[380px]:items-center justify-center gap-3 mt-6 w-full max-w-md px-4">
        {/* SLA Badge */}
        <div className="flex-1 bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
            <ShieldCheck size={14} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest mb-0.5">Accuracy SLA</span>
            <span className="text-[10px] font-bold text-zinc-900">99.9% Prep SLA</span>
          </div>
        </div>
        {/* Tax-Free Badge */}
        <div className="flex-1 bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 shadow-inner">
            <DollarSign size={14} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[8px] text-zinc-400 uppercase font-black tracking-widest mb-0.5">Sales Tax</span>
            <span className="text-[10px] font-bold text-zinc-950">0% Tax Prep Facility</span>
          </div>
        </div>
      </div>
    </div>
  );
}
