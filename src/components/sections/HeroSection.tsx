"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Motion Tokens
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#000000] pt-32 pb-24 border-b border-white/[0.05]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient z-0"></div>

      {/* High-Performance Instant Hero Visual (WebP + Progressive Looping Video) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="w-[800px] h-[800px] rounded-full blur-[100px] bg-black/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
        <div className="w-[800px] h-[800px] rounded-full blur-[100px] bg-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        {/* Instant High-Priority Poster Graphic (Loads at 0ms, ~46KB) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-30" : "opacity-60"
          }`}
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)'
          }}
        >
          <Image
            src="/globe_poster.webp"
            alt="Such Group E-Commerce Global Logistics Network"
            width={1600}
            height={1067}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>

        {/* Looping Ambient Video (Fades in seamlessly once ready) */}
        <video
          ref={videoRef}
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ${
            videoLoaded ? "opacity-60" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/globe_poster.webp"
          onPlaying={() => setVideoLoaded(true)}
          style={{
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        >
          <source src="/Globe_turning_slowly_looping_202605132150.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container px-6 mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center w-full">
          {/* Badge (Immediately Paintable) */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 text-xs font-medium backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5" />
            <span>Tax-Free Montana Prep Center</span>
          </div>

          {/* Headline (Immediately Paintable - 0ms LCP) */}
          <div className="relative mb-6 w-full max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-white text-glow">
              Keep Your Margins. <br />
              <span className="text-gradient">We Handle the Prep.</span>
            </h1>
          </div>

          {/* Subheadline (Immediately Paintable) */}
          <p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl leading-relaxed mb-12">
            Ship your inventory to tax-free Montana. We receive it, inspect it, prep it, and dispatch it to FBA with rapid 24–48 hour turnaround targets.
          </p>

          {/* CTAs / Split Path Cards (Interactive Animation) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
          >
            {/* Card 1 */}
            <Link
              href="/estimator"
              className="linear-card p-6 md:p-8 flex flex-col text-left group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-white group-hover:bg-white/[0.1] transition-colors">
                1
              </div>
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Online Arbitrage</h3>
              <p className="text-zinc-400 text-sm mb-8 flex-1 leading-relaxed">Fast, reliable prep for OA sellers who need their inventory live ASAP.</p>
              <div className="flex items-center text-white text-sm font-medium gap-2">
                See OA Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              href="/services/wholesale-inventory-storage"
              className="linear-card p-6 md:p-8 flex flex-col text-left group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 text-white group-hover:bg-white/[0.1] transition-colors">
                2
              </div>
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Wholesale &amp; Storage</h3>
              <p className="text-zinc-400 text-sm mb-8 flex-1 leading-relaxed">Pallet receiving, storage, and fast carton forwarding straight to Amazon FBA.</p>
              <div className="flex items-center text-white text-sm font-medium gap-2">
                See Wholesale Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
