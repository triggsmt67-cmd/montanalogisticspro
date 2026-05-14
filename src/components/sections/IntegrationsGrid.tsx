"use client";

import { motion } from "framer-motion";
import { PackageSearch, ShieldCheck, Undo2, HeadphonesIcon } from "lucide-react";

export function IntegrationsGrid() {
  const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: easeOut } 
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#000000]" id="capabilities">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Everything Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Amazon Business</span> Needs
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From strict FNSKU labeling to secure pallet storage, we handle the complex requirements of FBA and FBM so you can focus on sourcing.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Main Large Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 linear-card p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
                <PackageSearch className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors duration-500">Complete FBA Prep & Bundling</h3>
              <p className="text-zinc-400 text-base max-w-md leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                We handle it all: FNSKU labeling, suffocation warnings, poly-bagging, bubble wrapping, and "Sold as Set" stickers. Need custom multi-pack assembly? Our team executes complex bundling flawlessly.
              </p>
            </div>
            
            {/* Subtle Graphic */}
            <div className="relative h-24 w-full border-t border-white/[0.05] flex items-center mt-auto overflow-hidden group-hover:border-emerald-500/20 transition-colors duration-500">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 group-hover:via-emerald-500/50 to-transparent transition-colors duration-500"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-1 bg-white group-hover:bg-emerald-400 shadow-[0_0_12px_#ffffff] group-hover:shadow-[0_0_20px_#10B981] rounded-full -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite] transition-colors duration-500"></div>
            </div>
          </motion.div>

          {/* Vertical Small Card */}
          <motion.div variants={itemVariants} className="linear-card p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20">
                <Undo2 className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-500">FBM & Returns Management</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                Fulfilling direct? Orders placed before our daily cutoff ship the exact same day. We also process customer returns and inspect items to ensure they can be restocked.
              </p>
            </div>
          </motion.div>

          {/* Small Horizontal Card 1 */}
          <motion.div variants={itemVariants} className="linear-card p-8 flex flex-col relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20">
                <ShieldCheck className="w-6 h-6 text-white group-hover:text-indigo-400 transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">Secure, Climate-Controlled</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                Your capital is protected. Our Montana facility features 24/7 security cameras, active alarms, full insurance, and climate control for sensitive goods.
              </p>
            </div>
          </motion.div>

          {/* Small Horizontal Card 2 */}
          <motion.div variants={itemVariants} className="md:col-span-2 linear-card p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group cursor-pointer">
            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight group-hover:text-amber-400 transition-colors duration-500">Dedicated Support & Easy Software</h3>
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                No support ticket black holes. You get a dedicated account manager for instant issue resolution. Plus, we integrate directly with Amazon Seller Central and InventoryLab.
              </p>
            </div>
            <div className="w-16 h-16 rounded-full border border-white/[0.1] flex items-center justify-center bg-white/[0.02] shadow-inner relative z-10 shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out group-hover:border-amber-500/30 group-hover:bg-amber-500/10">
              <HeadphonesIcon className="w-8 h-8 text-white/80 group-hover:text-amber-400 transition-colors duration-500" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
