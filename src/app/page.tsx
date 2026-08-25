"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import DeconstructedWarehouseScene from "@/components/ui/DeconstructedWarehouseScene";
import TaxSavingsCalculator from "@/components/TaxSavingsCalculator";
import { pushDataLayerEvent } from "@/lib/analytics";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PackageCheck, 
  ShoppingCart, 
  ArrowRight,
  CheckCircle2,
  Box,
  Truck,
  RotateCcw,
  BarChart4,
  AlertCircle,
  FileBox,
  Layers,
  Search,
  CheckSquare,
  DollarSign
} from "lucide-react";

type PathType = "amazon" | "ecommerce" | "wholesale";

const PATH_CONTENT = {
  amazon: {
    hero: {
      eyebrow: "Amazon FBA & FBM Prep",
      headline: "Skip the compliance headaches. And the sales tax.",
      body: "FBA compliance is strict. Mistakes quietly eat your margins. We handle receiving, inspection, wrapping, poly-bagging, and FNSKU labeling with volume tiers starting at $1.45 down to $1.00 per unit. Keep your inventory moving and your margins intact.",
      primaryCta: "Get Your Custom Prep Plan",
      secondaryCta: "Explore Prep Services",
      metrics: ["Zero Sales Tax", "99.9% Accuracy", "FBA Compliance", "Fast Turnarounds", "Transparent Pricing"],
    },
    problems: {
      headline: "Amazon prep gets expensive when details slip.",
      intro: "You don't look for a prep center when things are perfect. You look when stranded inventory, labeling errors, and invisible fees start capping your growth.",
      items: [
        {
          title: "Labeling errors cost you time",
          body: "One incorrect FNSKU or missing expiration date can delay your entire inbound shipment and flag your seller metrics.",
          icon: FileBox
        },
        {
          title: "Prep rules drain your focus",
          body: "From poly-bag thickness to fragile limits, keeping up with Amazon's packaging requirements takes you away from sourcing products.",
          icon: CheckSquare
        },
        {
          title: "Inventory goes dark",
          body: "When your current 3PL lacks real-time scanning, you lose visibility. You're left guessing what's been received and what's ready to ship.",
          icon: Layers
        },
        {
          title: "Sales tax is an invisible penalty",
          body: "If your prep center sits in a high-tax state, you lose up to 10% of your retail sourcing budget to destination-based checkout taxes before you make a single sale.",
          icon: DollarSign
        }
      ]
    },
    services: [
      {
        title: "FBA Prep & Labeling",
        body: "Flawless FNSKU application, carton labeling, and expiration date management to ensure 100% Amazon compliance.",
        icon: PackageCheck
      },
      {
        title: "Bundling & Multipacks",
        body: "Precision kitting for custom bundles, ensuring all inserts and packaging meet your exact listing requirements.",
        icon: Box
      },
      {
        title: "Poly Bagging & Fragile Handling",
        body: "Bubble wrapping, suffocation warning bags, and secure packaging for delicate or high-value ASINs.",
        icon: AlertCircle
      },
      {
        title: "Tax-Free Inventory Storage",
        body: "Store your overstock in our Montana facility securely, completely shielded from inventory holding taxes.",
        icon: Layers
      },
      {
        title: "Removal Order Processing",
        body: "We receive your unfulfillable inventory, inspect it for damage, and repackage it to get it back to active status.",
        icon: RotateCcw
      },
      {
        title: "Inbound Shipment Creation",
        body: "We manage the Seller Central shipment plans and box content data so you don't have to touch the logistics.",
        icon: Truck
      }
    ],
    process: [
      {
        title: "Map your requirements",
        body: "We review your standard ASINs, preferred shipping workflows, and any specialized prep instructions."
      },
      {
        title: "Route to Montana",
        body: "Route your retail inventory directly to our tax-free facility. You instantly drop your checkout tax to zero and protect your front-end capital."
      },
      {
        title: "We prep and verify",
        body: "Everything is scanned, prepped, and verified against Amazon's strict inbound guidelines."
      },
      {
        title: "Shipped to fulfillment centers",
        body: "We create the shipping plans and route your pristine inventory directly to the designated FBA warehouses."
      }
    ],
    form: {
      title: "Amazon Prep Diagnostic",
      intro: "Tell us a bit about your volume and where your current process is breaking down.",
      steps: [
        {
          title: "Scale & Volume",
          fields: ["Average monthly units", "Number of active SKUs", "Sourcing Method"]
        },
        {
          title: "Operations",
          fields: ["Biggest current headache?", "Need long-term storage?", "Handle removals?"]
        },
        {
          title: "Timeline",
          fields: ["Target start date", "Current 3PL setup"]
        }
      ],
      cta: "Submit Prep Review"
    }
  },
  ecommerce: {
    hero: {
      eyebrow: "DTC & Retail Fulfillment",
      headline: "Scale your store. Keep your margins.",
      body: "Stop letting chaotic fulfillment, surprise fees, and state taxes bottleneck your growth. We offer seamless pick/pack operations and robust API integrations from a zero-sales-tax location.",
      primaryCta: "Build My Fulfillment Plan",
      secondaryCta: "See Fulfillment Services",
      metrics: ["Zero Sales Tax", "Same-Day Shipping", "Real-Time Sync", "Custom Packaging", "Dedicated Support"],
    },
    problems: {
      headline: "Growth stalls when operations break.",
      intro: "Most ecommerce brands don't have a traffic problem. They have an operations problem that shows up after the sale: late shipments, lost inventory, and margin-crushing surcharges.",
      items: [
        {
          title: "Physical stock doesn't match",
          body: "When your physical warehouse stock doesn't instantly sync with Shopify, you oversell products and shatter customer trust.",
          icon: BarChart4
        },
        {
          title: "Shipping delays create tickets",
          body: "Slow fulfillment turns into a flood of 'Where is my order?' emails, overwhelming your customer support team.",
          icon: AlertCircle
        },
        {
          title: "Returns become a black hole",
          body: "Without a dedicated reverse-logistics workflow, returned inventory sits in a pile instead of being quickly restocked and resold.",
          icon: RotateCcw
        },
        {
          title: "Surprise fees drain profit",
          body: "Hidden receiving charges, minimum volume penalties, and out-of-state taxes silently eat away at your bottom line every month.",
          icon: DollarSign
        }
      ]
    },
    services: [
      {
        title: "Secure Warehousing",
        body: "Clean, organized, and climate-controlled storage workflows for your products, managed with strict cycle counts.",
        icon: Layers
      },
      {
        title: "Direct-to-Consumer Pick & Pack",
        body: "Fast, accurate order fulfillment with real-time API integrations into Shopify, WooCommerce, and more.",
        icon: Box
      },
      {
        title: "Custom Kitting & Assembly",
        body: "Curated subscription boxes, promotional kits, and multi-SKU bundles assembled to your exact brand standards.",
        icon: PackageCheck
      },
      {
        title: "Streamlined Returns",
        body: "Rapid return intake, strict quality inspections, and fast restocking to recover your revenue quickly.",
        icon: RotateCcw
      },
      {
        title: "Branded Unboxing Experience",
        body: "Custom dunnage, branded tape, and specific insert placements to ensure your customer's first physical touchpoint is perfect.",
        icon: ShoppingCart
      },
      {
        title: "B2B & Retail Routing",
        body: "EDI compliance and strict routing guide adherence for your wholesale and big-box retail orders.",
        icon: Truck
      }
    ],
    process: [
      {
        title: "System Integration",
        body: "We securely connect our Warehouse Management System to your ecommerce platform for real-time data sync."
      },
      {
        title: "Define the unboxing",
        body: "We document your exact packaging requirements, from insert placement to custom tape application."
      },
      {
        title: "Receive and audit",
        body: "Your inventory arrives at our tax-free Montana facility, is strictly audited, and scanned into active inventory."
      },
      {
        title: "Fulfill and optimize",
        body: "Orders flow in automatically, ship out same-day, and tracking instantly pushes back to your customers."
      }
    ],
    form: {
      title: "Fulfillment Fit Review",
      intro: "Tell us about your order volume and your biggest operational friction.",
      steps: [
        {
          title: "Scale & Volume",
          fields: ["Average monthly orders", "Number of active SKUs", "Average Item Weight"]
        },
        {
          title: "Operations",
          fields: ["Primary sales channels", "Need custom packaging?", "Need B2B support?"]
        },
        {
          title: "Timeline",
          fields: ["Target start date", "Current 3PL setup"]
        }
      ],
      cta: "Submit Fulfillment Review"
    }
  },
  wholesale: {
    hero: {
      eyebrow: "B2B Wholesale Storage",
      headline: "Stage inventory tax-free. Cross-dock at scale.",
      body: "Enterprise wholesalers use our Great Falls facility to eliminate inventory property taxes, access BNSF rail transloading, and exploit Foreign-Trade Zone 274 tariff deferrals.",
      primaryCta: "Start Storage Review",
      secondaryCta: "See Storage Services",
      metrics: ["Zero Inventory Tax", "BNSF Rail Access", "FTZ 274", "Climate-Controlled", "Cross-Docking"],
    },
    problems: {
      headline: "Enterprise storage gets punished in the wrong state.",
      intro: "Most wholesalers bleed capital on inventory property taxes and miss freight advantages hiding in plain sight.",
      items: [
        {
          title: "Inventory taxes drain capital",
          body: "States like Texas assess annual property taxes on your unsold stock. Every pallet sitting on January 1st costs you money.",
          icon: DollarSign
        },
        {
          title: "Tariff costs pile up",
          body: "Imported goods trigger immediate duty payments. Without Foreign-Trade Zone access, you pay tariffs before you sell a single unit.",
          icon: AlertCircle
        },
        {
          title: "Vendor systems reject Montana",
          body: "Automated compliance portals look for a 9-digit state tax permit. Montana does not issue them. Your drop-ship pipeline stalls.",
          icon: FileBox
        },
        {
          title: "Rail access is an afterthought",
          body: "Most 3PLs force you into truck-only receiving. You miss the cost advantage of direct rail-to-warehouse transloading.",
          icon: Truck
        }
      ]
    },
    services: [
      {
        title: "Climate-Controlled Staging",
        body: "Temperature-managed storage for inventory subject to degradation or strict manufacturer requirements.",
        icon: Layers
      },
      {
        title: "BNSF Rail Transloading",
        body: "Direct railcar-to-truck freight handling off the BNSF mainline for high-volume inbound shipments.",
        icon: Truck
      },
      {
        title: "Cross-Docking Operations",
        body: "High-velocity LTL and FTL receiving. We break bulk freight and route it to outbound carriers fast.",
        icon: PackageCheck
      },
      {
        title: "FTZ 274 Tariff Deferrals",
        body: "Stage imported goods in Foreign-Trade Zone 274. Defer tariffs and duties until domestic entry.",
        icon: DollarSign
      },
      {
        title: "Cycle Count Auditing",
        body: "Continuous inventory integrity audits to ensure perfect pallet counts over long staging periods.",
        icon: BarChart4
      },
      {
        title: "Vendor Credential Support",
        body: "We provide exact statutory proof and escalation protocols to force manual overrides with strict vendor portals.",
        icon: FileBox
      }
    ],
    process: [
      {
        title: "Scope your footprint",
        body: "We evaluate your pallet count, rail transload needs, and staging duration to build a custom plan."
      },
      {
        title: "Route to Great Falls",
        body: "Ship via BNSF rail or long-haul truck directly to our tax-free Montana facility."
      },
      {
        title: "Receive and stage",
        body: "Your inventory is scanned, audited, and staged in climate-controlled storage with zero inventory property tax."
      },
      {
        title: "Cross-dock and distribute",
        body: "We break bulk freight and route it to outbound carriers for Pacific Northwest, Canada, and national distribution."
      }
    ],
    form: {
      title: "Wholesale Storage Review",
      intro: "Tell us about your pallet volume and staging requirements.",
      steps: [
        {
          title: "Scale & Volume",
          fields: ["Pallet Volume", "Inbound Frequency"]
        },
        {
          title: "Operations & Routing",
          fields: ["Need BNSF Rail Access?", "Require Cross-docking?", "Need long-term staging?"]
        },
        {
          title: "Timeline",
          fields: ["Target start date", "Current 3PL setup"]
        }
      ],
      cta: "Submit Storage Review"
    }
  }
};


interface ServiceItem {
  title: string;
  body: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
}

interface ServiceCardProps {
  service: ServiceItem;
  activePath: "amazon" | "ecommerce" | "wholesale";
  index: number;
}

function ServiceCard({ service, activePath, index }: ServiceCardProps) {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const Icon = service.icon;

  const getTargetServiceRoute = (path: "amazon" | "ecommerce" | "wholesale", title: string): string => {
    if (path === "wholesale") {
      return "/services/wholesale-inventory-storage";
    }

    const storageTitles = [
      "Tax-Free Inventory Storage",
      "Secure Warehousing",
      "B2B & Retail Routing",
      "Climate-Controlled Staging",
      "BNSF Rail Transloading",
      "Cross-Docking Operations",
      "FTZ 274 Tariff Deferrals",
      "Cycle Count Auditing",
      "Direct Inbound Receiving",
    ];

    if (storageTitles.includes(title)) {
      return "/services/wholesale-inventory-storage";
    }

    if (path === "amazon") {
      return "/services/tax-free-amazon-fba-prep";
    }

    return "/services/dtc-ecommerce-fulfillment";
  };

  const handleFlip = () => {
    if (isFlipped) return;
    setIsFlipped(true);

    const duration = 1500; // 1.5s
    const start = Date.now();
    
    const steps = [
      { threshold: 0, text: "Initializing routing..." },
      { threshold: 25, text: "Configuring tax-free node..." },
      { threshold: 55, text: "Auditing compliance schemas..." },
      { threshold: 85, text: "Establishing secure pipeline..." },
      { threshold: 100, text: "Redirecting..." }
    ];

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);

      const currentStep = [...steps].reverse().find(step => currentProgress >= step.threshold);
      if (currentStep) {
        setLoadingText(currentStep.text);
      }

      if (elapsed >= duration) {
        clearInterval(timer);
        const destination = getTargetServiceRoute(activePath, service.title);
        router.push(destination);
      }
    }, 30);
  };

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="w-full [perspective:1000px] h-[320px]"
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleFlip}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 w-full h-full p-8 rounded-[2rem] bg-gradient-to-br from-[#202026] to-[#0e0e11] border border-[#373742] hover:border-emerald-500/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),_0_15px_30px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_20px_45px_rgba(0,0,0,0.8),_0_0_35px_rgba(16,185,129,0.18)] flex flex-col justify-between group hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Shimmer / Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block p-3 rounded-2xl bg-zinc-950 text-emerald-400 mb-6 group-hover:bg-zinc-900 group-hover:text-emerald-300 transition-colors shadow-inner border border-zinc-800/80 group-hover:border-emerald-500/20">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-50 tracking-tight transition-colors">{service.title}</h4>
            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">{service.body}</p>
          </div>
          
          <div className="relative z-10 flex items-center justify-between w-full mt-4 pt-4 border-t border-[#373742]/60 group-hover:border-emerald-500/20 transition-colors">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-emerald-400 transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-pulse group-hover:bg-emerald-400" />
              Click to Explore
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 transition-all duration-300 shadow-inner group-hover:scale-110">
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 w-full h-full p-8 rounded-[2rem] bg-zinc-950 text-white border border-zinc-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-400">
                Connection Protocol
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            
            <h4 className="text-lg font-bold mb-2 text-zinc-100">Loading Node</h4>
            <p className="text-xs text-emerald-400 font-mono">{loadingText}</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>Status</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-500 rounded-full transition-all duration-75 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const AmazonLogo = () => (
  <div className="flex flex-col items-center justify-center pt-2 select-none pointer-events-none">
    <span className="font-black text-[22px] tracking-tight text-black leading-none">amazon</span>
    <svg className="h-2 w-16 text-[#FF9900] mt-0.5" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.2 2.5C14.5 9.8 39.2 10.2 54.5 1.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M51.5.8c1 1 2.2 2 3.2 2.5-1 .5-2 1.5-3 2.5l-.2-5z" fill="currentColor"/>
    </svg>
  </div>
);

const WalmartLogo = () => (
  <div className="flex items-center gap-1 select-none pointer-events-none">
    <span className="font-bold text-[22px] tracking-tight text-[#0071CE]">Walmart</span>
    <svg className="h-6 w-6 text-[#FFC220]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm8.66-9.66a1 1 0 0 1 0 1.41l-2.83 2.83a1 1 0 0 1-1.41-1.41l2.83-2.83a1 1 0 0 1 1.41 0zm-11.31 11.31a1 1 0 0 1 0 1.41l-2.83 2.83a1 1 0 0 1-1.41-1.41l2.83-2.83a1 1 0 0 1 1.41 0zm11.31 2.83a1 1 0 0 1-1.41 0l-2.83-2.83a1 1 0 1 1 1.41-1.41l2.83 2.83a1 1 0 0 1 0 1.41zM6.34 6.34a1 1 0 0 1-1.41 0L2.1 3.51a1 1 0 0 1 1.41-1.41l2.83 2.83a1 1 0 0 1 0 1.41z"/>
    </svg>
  </div>
);

const TikTokLogo = () => (
  <div className="flex items-center gap-2 select-none pointer-events-none">
    <div className="relative w-6 h-6 shrink-0">
      <svg className="absolute top-[0.5px] left-[0.5px] w-6 h-6 text-[#25F4EE]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2v12.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.4 0 .7.1 1.1.2V6.6c-2.8.5-5 3-5 5.9 0 3.3 2.7 6 6 6 3.1 0 5.6-2.4 5.9-5.4V8.5c1.7.9 3.5 1.3 5.5 1.3V7.5C18.6 7.5 16.5 6.7 15.3 5.3V2h-2.8z"/>
      </svg>
      <svg className="absolute top-[-0.5px] left-[-0.5px] w-6 h-6 text-[#FE2C55]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2v12.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.4 0 .7.1 1.1.2V6.6c-2.8.5-5 3-5 5.9 0 3.3 2.7 6 6 6 3.1 0 5.6-2.4 5.9-5.4V8.5c1.7.9 3.5 1.3 5.5 1.3V7.5C18.6 7.5 16.5 6.7 15.3 5.3V2h-2.8z"/>
      </svg>
      <svg className="absolute top-0 left-0 w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2v12.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.4 0 .7.1 1.1.2V6.6c-2.8.5-5 3-5 5.9 0 3.3 2.7 6 6 6 3.1 0 5.6-2.4 5.9-5.4V8.5c1.7.9 3.5 1.3 5.5 1.3V7.5C18.6 7.5 16.5 6.7 15.3 5.3V2h-2.8z"/>
      </svg>
    </div>
    <span className="font-bold text-[20px] text-black tracking-tight">
      TikTok <span className="font-medium text-zinc-500">Shop</span>
    </span>
  </div>
);

const EtsyLogo = () => (
  <div className="flex items-center select-none pointer-events-none">
    <span className="font-bold text-[24px] tracking-tight text-[#F56400] font-serif" style={{ fontFamily: "Georgia, serif" }}>
      Etsy
    </span>
  </div>
);

const EBayLogo = () => (
  <div className="flex items-center text-[24px] font-bold tracking-tighter select-none pointer-events-none" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
    <span className="text-[#E53238]">e</span>
    <span className="text-[#0064D2]">b</span>
    <span className="text-[#F5AF02]">a</span>
    <span className="text-[#86B817]">y</span>
  </div>
);

const ShopifyLogo = () => (
  <div className="flex items-center gap-1.5 select-none pointer-events-none">
    <svg className="h-6 w-6 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v11c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V8c0-1.1-.9-2-2-2zM12 3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3zm5 16H7c-1.1 0-2-.9-2-2V8h14v9c0 1.1-.9 2-2 2z"/>
      <path d="M12 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
    <span className="font-bold text-[22px] tracking-tight text-[#212b36]">shopify</span>
  </div>
);

const LOGO_COMPONENTS = [
  AmazonLogo,
  WalmartLogo,
  TikTokLogo,
  EtsyLogo,
  EBayLogo,
  ShopifyLogo
];

function LogoTicker() {
  return (
    <div className="py-2">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">
        Fulfill orders from any major sales channel
      </p>
      <div 
        className="relative overflow-hidden py-3 w-full border-y border-zinc-200/50"
        style={{ 
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <div className="animate-marquee items-center">
          {[...Array(4)].map((_, arrayIdx) => (
            <div key={arrayIdx} className="flex gap-24 shrink-0 pr-24 items-center">
              {LOGO_COMPONENTS.map((Logo, logoIdx) => (
                <div key={logoIdx} className="shrink-0 scale-95 opacity-70 hover:opacity-100 hover:scale-100 transition-all duration-200">
                  <Logo />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [activePath, setActivePath] = useState<PathType>("amazon");
  const [formStep, setFormStep] = useState(1);
  const content = PATH_CONTENT[activePath];

  // Fit Review form state
  const [fitFormData, setFitFormData] = useState<Record<string, string>>({});
  const [fitHoneypotWebsite, setFitHoneypotWebsite] = useState("");
  const [fitHoneypotPhone, setFitHoneypotPhone] = useState("");
  const [fitSubmitting, setFitSubmitting] = useState(false);
  const [fitSubmitted, setFitSubmitted] = useState(false);
  const [fitError, setFitError] = useState("");
  const fitLoadedAt = useRef(0);
  useEffect(() => { fitLoadedAt.current = Date.now(); }, []);

  // Questions modal state
  const [showQuestions, setShowQuestions] = useState(false);
  const [qName, setQName]         = useState("");
  const [qEmail, setQEmail]       = useState("");
  const [qPhone, setQPhone]       = useState("");
  const [qMessage, setQMessage]   = useState("");
  const [qHoneypotWebsite, setQHoneypotWebsite] = useState("");
  const [qSubmitting, setQSubmitting] = useState(false);
  const [qSubmitted, setQSubmitted]   = useState(false);
  const [qError, setQError]           = useState("");
  const qLoadedAt = useRef(0);

  const openQuestions = () => {
    setShowQuestions(true);
    setQSubmitted(false);
    setQError("");
    qLoadedAt.current = Date.now();
  };

  const handleQuestionSubmit = async () => {
    setQSubmitting(true);
    setQError("");
    try {
      const res = await fetch("/api/submit-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: qName,
          email: qEmail,
          phone: qPhone,
          question: qMessage,
          website: qHoneypotWebsite,
          loadedAt: qLoadedAt.current,
          submittedAt: qLoadedAt.current ? Date.now() : 0,
        }),
      });
      let json: { success?: boolean; error?: string } = {};
      try {
        json = await res.json();
      } catch {
        json = { success: false, error: `Server error (${res.status}). Please try again shortly.` };
      }
      if (!res.ok || !json.success) {
        setQError(json.error ?? "Something went wrong. Please try again.");
        setQSubmitting(false);
        return;
      }
      setQSubmitted(true);
      pushDataLayerEvent({
        event: "contact_form_submitted",
        form_name: "questions_modal",
      });
    } catch {
      setQError("Network error. Please check your connection.");
      setQSubmitting(false);
    }
  };

  const handleFitFieldChange = (field: string, value: string) => {
    setFitFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFitSubmit = async () => {
    setFitSubmitting(true);
    setFitError("");
    const allFields = content.form.steps.flatMap(s => s.fields);

    // Build a clean label→value map for the email
    const additionalFields: Record<string, string> = {};
    allFields.forEach(f => { additionalFields[f] = fitFormData[f] ?? ""; });
    // Also include company name from the final step
    if (fitFormData["Company Name"]) additionalFields["Company Name"] = fitFormData["Company Name"];

    try {
      const res = await fetch("/api/submit-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${fitFormData["First Name"] ?? ""} ${fitFormData["Last Name"] ?? ""}`.trim() || "Unknown",
          email: fitFormData["Work Email"] ?? "",
          volume: fitFormData["Average monthly orders"] ?? fitFormData["Monthly units"] ?? "Not specified",
          friction: "Fit Review submission",
          website: fitHoneypotWebsite,
          phone_confirm: fitHoneypotPhone,
          additionalFields,
          loadedAt: fitLoadedAt.current,
          submittedAt: fitLoadedAt.current ? Date.now() : 0,
        }),
      });
      let json: { success?: boolean; error?: string } = {};
      try {
        json = await res.json();
      } catch {
        json = { success: false, error: `Server error (${res.status}). Please try again shortly.` };
      }
      if (!res.ok || !json.success) {
        setFitError(json.error ?? "Something went wrong. Please try again.");
        setFitSubmitting(false);
        return;
      }
      setFitSubmitted(true);
      pushDataLayerEvent({
        event: "fit_review_submitted",
        form_name: "fit_review",
        service_path: activePath,
      });
      pushDataLayerEvent({
        event: "generate_lead",
        form_name: "fit_review",
        service_path: activePath,
      });
    } catch {
      setFitError("Network error. Please check your connection.");
      setFitSubmitting(false);
    }
  };

  // Helper to change paths and reset the form
  const handlePathChange = (path: PathType) => {
    setActivePath(path);
    setFormStep(1);
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. Header */}
      <Navbar onOpenQuestions={openQuestions} />

      <main className="pb-32">
        {/* 2. Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#f9fafb]">
          {/* Dotted Grid Blueprint Background */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]" 
            style={{ 
              backgroundImage: "radial-gradient(#d4d4d8 1.5px, transparent 1.5px)", 
              backgroundSize: "24px 24px" 
            }} 
          />
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 translate-y-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md"
                >
                  Tax-Free Prep & Fulfillment
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-zinc-950 mb-6 drop-shadow-sm"
                >
                  Find the fulfillment setup that fits how you sell.
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-[65ch] font-medium drop-shadow-sm mb-8"
                >
                  Choose your primary sales channel below. See how our Great Falls facility handles product prep, storage, and order fulfillment. Stop bleeding margin and scale your logistics without the operational friction.
                </motion.p>

                {/* Primary/Secondary CTA buttons inside Hero layout matching Confluence visual style */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <motion.button 
                    onClick={() => {
                      document.getElementById('fit-review')?.scrollIntoView({ behavior: 'smooth' });
                      setFormStep(1);
                    }}
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(5, 150, 105, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="h-12 px-8 rounded-full bg-emerald-600 text-white font-semibold transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    Start Fit Review
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </motion.button>
                  <motion.button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.05, backgroundColor: "#f4f4f5" }}
                    whileTap={{ scale: 0.95 }}
                    className="h-12 px-8 rounded-full bg-white text-zinc-900 border border-zinc-200 font-semibold transition-all shadow-sm hover:shadow-md"
                  >
                    Explore Services
                  </motion.button>
                </motion.div>
              </div>

              <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex items-center justify-center overflow-visible">
                <DeconstructedWarehouseScene />
              </div>
            </div>
          </div>
        </section>


        {/* 4. Channel Selection Section */}
        <section className="px-4 max-w-7xl mx-auto pt-24 pb-16 relative z-10">
          <LogoTicker />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {/* Path 1: Amazon */}
            <motion.button
              whileHover={activePath !== "amazon" ? { y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" } : undefined}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePathChange("amazon")}
              className={`text-left p-8 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group ${
                activePath === "amazon" 
                  ? "bg-zinc-950 text-white border-zinc-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] scale-[1.02] z-10" 
                  : "bg-white/80 backdrop-blur-md text-zinc-900 border-zinc-200/80 shadow-md"
              }`}
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`p-3 rounded-2xl transition-colors duration-300 ${activePath === "amazon" ? "bg-white/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-zinc-100 text-zinc-600 group-hover:bg-emerald-50 group-hover:text-emerald-600"}`}
                >
                  <PackageCheck size={28} strokeWidth={1.5} />
                </motion.div>
                {activePath === "amazon" && (
                  <motion.div layoutId="activePathIndicator" className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]" />
                )}
              </div>
              <p className="text-2xl font-bold tracking-tight mb-3 relative z-10">I Sell on Amazon</p>
              <p className={`text-base leading-relaxed relative z-10 ${activePath === "amazon" ? "text-zinc-300" : "text-zinc-600"}`}>
                Strict FBA prep, precise labeling, and compliance handling for sellers who want their time back.
              </p>
            </motion.button>

            {/* Path 2: Ecommerce */}
            <motion.button
              whileHover={activePath !== "ecommerce" ? { y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" } : undefined}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePathChange("ecommerce")}
              className={`text-left p-8 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group ${
                activePath === "ecommerce" 
                  ? "bg-zinc-950 text-white border-zinc-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] scale-[1.02] z-10" 
                  : "bg-white/80 backdrop-blur-md text-zinc-900 border-zinc-200/80 shadow-md"
              }`}
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <motion.div 
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  className={`p-3 rounded-2xl transition-colors duration-300 ${activePath === "ecommerce" ? "bg-white/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-zinc-100 text-zinc-600 group-hover:bg-emerald-50 group-hover:text-emerald-600"}`}
                >
                  <ShoppingCart size={28} strokeWidth={1.5} />
                </motion.div>
                {activePath === "ecommerce" && (
                  <motion.div layoutId="activePathIndicator" className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]" />
                )}
              </div>
              <p className="text-2xl font-bold tracking-tight mb-3 relative z-10">I Sell Through My Own Store</p>
              <p className={`text-base leading-relaxed relative z-10 ${activePath === "ecommerce" ? "text-zinc-300" : "text-zinc-600"}`}>
                API-driven pick/pack, kitting, and returns for Shopify, DTC, and multi-channel retail brands.
              </p>
            </motion.button>

            {/* Path 3: Wholesale */}
            <motion.button
              whileHover={activePath !== "wholesale" ? { y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" } : undefined}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePathChange("wholesale")}
              className={`text-left p-8 rounded-[2.5rem] border transition-all duration-500 relative overflow-hidden group ${
                activePath === "wholesale" 
                  ? "bg-zinc-950 text-white border-zinc-900 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] scale-[1.02] z-10" 
                  : "bg-white/80 backdrop-blur-md text-zinc-900 border-zinc-200/80 shadow-md"
              }`}
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                <motion.div 
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  className={`p-3 rounded-2xl transition-colors duration-300 ${activePath === "wholesale" ? "bg-white/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-zinc-100 text-zinc-600 group-hover:bg-emerald-50 group-hover:text-emerald-600"}`}
                >
                  <Truck size={28} strokeWidth={1.5} />
                </motion.div>
                {activePath === "wholesale" && (
                  <motion.div layoutId="activePathIndicator" className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)]" />
                )}
              </div>
              <p className="text-2xl font-bold tracking-tight mb-3 relative z-10">I Need B2B Storage</p>
              <p className={`text-base leading-relaxed relative z-10 ${activePath === "wholesale" ? "text-zinc-300" : "text-zinc-600"}`}>
                Enterprise pallet staging, BNSF rail cross-docking, and FTZ 274 tariff deferrals for wholesale operations.
              </p>
            </motion.button>
          </div>
        </section>

        {/* 3. Dynamic Hero Value Panel */}
        <section className="px-4 max-w-7xl mx-auto mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePath}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-emerald-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden group"
            >
              {/* Subtle accent background */}
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-70" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                    className="text-sm font-semibold text-emerald-700 tracking-wide uppercase mb-4"
                  >
                    {content.hero.eyebrow}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6 leading-tight"
                  >
                    {content.hero.headline}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                    className="text-lg text-zinc-600 leading-relaxed mb-8"
                  >
                    {content.hero.body}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4"
                  >
                    <motion.button 
                      onClick={() => {
                        document.getElementById('fit-review')?.scrollIntoView({ behavior: 'smooth' });
                        setFormStep(1);
                      }}
                      whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(5, 150, 105, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="h-12 px-8 rounded-full bg-emerald-600 text-white font-medium transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20"
                    >
                      {content.hero.primaryCta}
                      <ArrowRight size={18} strokeWidth={2} />
                    </motion.button>
                    <motion.button 
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                      whileHover={{ scale: 1.05, backgroundColor: "#f4f4f5" }}
                      whileTap={{ scale: 0.95 }}
                      className="h-12 px-8 rounded-full bg-white text-zinc-900 border border-zinc-200 font-medium transition-colors shadow-sm hover:shadow-md"
                    >
                      {content.hero.secondaryCta}
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="flex flex-col gap-3">
                  {content.hero.metrics.map((metric, i) => (
                    <motion.div 
                      key={metric}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: -4, scale: 1.02, boxShadow: "0 10px 20px -10px rgba(0,0,0,0.1)" }}
                      transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm cursor-default"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-zinc-900">{metric}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>



        {/* 3.5 Savings Calculator (Dark Section) */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden border-y border-zinc-900">
          <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="px-4 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">The Montana Advantage</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Calculate your sales tax savings.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Retail checkout systems charge sales tax based on where your items are delivered. By routing your online retail sourcing through our Great Falls facility, you legally drop your checkout tax to zero.
              </p>
            </div>
            
            <TaxSavingsCalculator />
            <div className="mt-8 text-center relative z-10">
              <a href="/montana-tax-free-3pl" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors group">
                See the full breakdown of our Tax-Free Sourcing Mechanics
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Trust Guarantee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 border-t border-zinc-800/80 pt-16">
              <div className="space-y-3 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Compliance Guarantee</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  If an FBA shipment is flagged or rejected due to our labeling prep error, we refund 100% of the prep cost and cover the Amazon compliance fee.
                </p>
              </div>

              <div className="space-y-3 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">24-Hour Dock-to-Stock</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  All inbound shipments are audited, counted, and registered in our WMS dashboard within 24 hours of arrival. No delayed receiving docks.
                </p>
              </div>

              <div className="space-y-3 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Full Transparency</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every damaged inbound box is photographed immediately. You receive visual evidence in your dashboard before any triage begins.
                </p>
              </div>

              <div className="space-y-3 cursor-default group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm10-10V7a4 4 0 0 0-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Secure Montana Facility</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Climate-controlled inventory storage protected by 24/7 video monitoring, secure badge access control, and strict cycle counts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Buyer Problem Section (Light Section) */}
        <section className="py-24 bg-white border-b border-zinc-200/50">
          <div className="px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 block">The friction points</span>
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={`h2-${activePath}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6"
                >
                  {content.problems.headline}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={`p-${activePath}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg text-zinc-600 leading-relaxed"
                >
                  {content.problems.intro}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-4 relative flex">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -2 }}
                  className="relative w-full rounded-[2.5rem] overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-50 group flex flex-col justify-end min-h-[350px] lg:min-h-full"
                >
                  <Image 
                    src="/warehouse_prep.png" 
                    alt="Such Group E-Commerce Prep Station"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                  <div className="relative z-10 p-6 text-white bg-zinc-950/20 backdrop-blur-[2px] m-4 rounded-3xl border border-white/10">
                    <span className="text-[10px] uppercase text-emerald-400 font-bold tracking-wider mb-2 block">Zero-Tax Facility</span>
                    <h4 className="text-xl font-bold text-white mb-2">FBA Compliance Station</h4>
                    <p className="text-zinc-300 text-xs leading-relaxed">
                      Where inventory is audited, FNSKU barcodes applied, and compliance verified before shipping to Amazon warehouses.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                  {content.problems.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="p-8 rounded-[2rem] bg-white border border-zinc-200/80 shadow-lg flex gap-6 items-start group"
                      >
                        <motion.div 
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="p-3 rounded-2xl bg-zinc-100 text-zinc-700 shrink-0 transition-colors group-hover:bg-rose-50 group-hover:text-rose-600 shadow-sm"
                        >
                          <Icon size={24} strokeWidth={1.5} />
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-rose-600 transition-colors">{item.title}</h4>
                          <p className="text-zinc-600 leading-relaxed">{item.body}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Services Section (Dark Section) */}
        <section id="services" className="py-24 bg-[#0a0a0c] border-y border-zinc-900 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="px-4 max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl mb-16">
              <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">Core Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Built to solve your specific bottlenecks.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                We don&apos;t offer generic logistics. We provide precise interventions designed to remove friction from your supply chain, backed by strict Service Level Agreements (SLAs).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {content.services.map((service, i) => (
                  <ServiceCard
                    key={service.title}
                    service={service}
                    activePath={activePath}
                    index={i}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 6. Operational Proof Section (Light Section) */}
        <section className="py-24 bg-[#f9fafb] border-b border-zinc-200/50">
          <div className="px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 block">Operational proof</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6">
                Visibility replaces anxiety.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                You shouldn&apos;t have to send an email to know if your shipment arrived. Our systems provide real-time status updates so you have total control over your inventory lifecycle.
              </p>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-emerald-500 pl-6 cursor-default">
                  <h4 className="text-lg font-bold text-zinc-950 mb-1">Receiving</h4>
                  <p className="text-zinc-600 text-sm">Inventory is immediately scanned into the WMS upon arrival. No dock delays.</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-zinc-200 pl-6 hover:border-emerald-400 transition-colors cursor-default">
                  <h4 className="text-lg font-bold text-zinc-950 mb-1">Prep Rules</h4>
                  <p className="text-zinc-600 text-sm">We strictly document product-specific requirements to eliminate guesswork.</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-zinc-200 pl-6 hover:border-emerald-400 transition-colors cursor-default">
                  <h4 className="text-lg font-bold text-zinc-950 mb-1">Live Visibility</h4>
                  <p className="text-zinc-600 text-sm">Dashboard access to see exactly what is received, stored, prepped, or shipped.</p>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="border-l-2 border-zinc-200 pl-6 hover:border-emerald-400 transition-colors cursor-default">
                  <h4 className="text-lg font-bold text-zinc-950 mb-1">Exception Handling</h4>
                  <p className="text-zinc-600 text-sm">Damaged inbound cartons are instantly photographed and flagged for your review.</p>
                </motion.div>
              </div>

              {/* Warehouse Receiving Mock Image Card */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-48 rounded-[2rem] overflow-hidden border border-zinc-200/80 shadow-md mt-8 group"
              >
                <Image 
                  src="/warehouse_receiving.png" 
                  alt="Such Group E-Commerce Inbound Audit Process" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-800/80 flex items-center justify-between shadow-lg">
                  <span>Mockup: Receiving Inspection</span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">Inbound Dock</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              {/* Fake Dashboard Mockup */}
              <motion.div 
                whileHover={{ scale: 1.01, boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.4)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-zinc-950 rounded-[2.5rem] p-8 shadow-2xl border border-zinc-800 relative overflow-hidden group cursor-default"
              >
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-1000" />
                
                <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-6 relative z-10">
                  <div className="flex gap-1.5">
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500/80" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="h-6 w-32 bg-zinc-800 rounded-full flex items-center px-3 gap-2 shadow-inner">
                      <Search size={12} className="text-zinc-500" />
                      <div className="h-1.5 w-16 bg-zinc-700 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Inbound Receiving</h5>
                    <div className="text-white font-mono text-xl mb-1">12 pallets received</div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-3 shadow-inner">
                      <motion.div initial={{ width: "0%" }} whileInView={{ width: "75%" }} transition={{ duration: 1, ease: "easeOut" }} className="bg-emerald-500 h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Prep Queue</h5>
                    <div className="text-white font-mono text-xl mb-1">4 SKUs await poly-bag</div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-3 shadow-inner">
                      <motion.div initial={{ width: "0%" }} whileInView={{ width: "33%" }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="bg-blue-500 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Ready to Ship</h5>
                    <div className="text-emerald-400 font-mono text-xl mb-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">1,240 units ready</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Exceptions</h5>
                    <div className="text-amber-400 font-mono text-xl mb-1 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">2 cartons damaged</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Active Storage</h5>
                    <div className="text-zinc-300 font-mono text-xl mb-1">24 pallets stored</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -2, backgroundColor: "rgba(39, 39, 42, 1)" }} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800/50 transition-colors shadow-sm">
                    <h5 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">Returns</h5>
                    <div className="text-zinc-300 font-mono text-xl mb-1">14 returns pending</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </section>

        {/* 7. Transition / Onboarding Process */}
        <section id="process" className="py-32 bg-zinc-950 text-zinc-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
          
          <div className="px-4 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-sm font-semibold text-emerald-400 tracking-widest uppercase mb-4 block">De-Risking the Switch</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Onboarding without the chaos.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Switching prep centers or 3PLs carries massive operational risk. We mitigate that risk entirely by defining, documenting, and testing your specific workflow before a single physical unit moves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-zinc-800 z-0" />
              
              <AnimatePresence mode="wait">
                {content.process.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -5 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative z-10 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 0 20px rgba(16,185,129,0.3)" }}
                      className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl font-bold text-emerald-400 mb-6 shadow-xl transition-colors group-hover:bg-zinc-800 group-hover:border-emerald-900/50"
                    >
                      {i + 1}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                    <p className="text-zinc-400 leading-relaxed text-sm">{step.body}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 8. Guided Fit Review CTA Section */}
        <section id="fit-review" className="py-32 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 block">Take the next step</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6 leading-tight">
                Stop guessing. Start a Fit Review.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                We don&apos;t do blind RFP quotes. We use a structured Fit Review to ensure our capabilities perfectly align with your operational needs. If we aren&apos;t the right fit, we will tell you immediately.
              </p>
              <motion.div 
                whileHover={{ scale: 1.01, boxShadow: "0 10px 30px -10px rgba(16,185,129,0.2)" }}
                className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm"
              >
                <p className="text-lg text-zinc-700 leading-relaxed font-medium">
                  Answer a few quick questions about your volume and current pain points. We will respond with a specific, tailored strategy rather than a generic sales pitch.
                </p>
              </motion.div>
            </div>

            {/* Multi-Step Form Mockup */}
            <motion.div 
              whileHover={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100">
                <motion.div 
                  initial={{ width: "25%" }}
                  animate={{ width: `${(formStep / 4) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-emerald-500"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={content.form.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-zinc-950 mb-3 mt-2">{fitSubmitted ? "You're on the list." : content.form.title}</h3>
                  <p className="text-sm text-zinc-500 mb-8">{fitSubmitted ? `Thanks, ${fitFormData["First Name"] || "friend"}. We'll be in touch with a tailored strategy shortly.` : content.form.intro}</p>
                  
                  {fitSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 gap-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl">✓</div>
                      <p className="text-sm text-zinc-500 text-center max-w-xs">No generic pitch. Just a real conversation about whether we&apos;re the right fit for your operation.</p>
                    </div>
                  ) : (
                    <>
                      <div className="relative">
                        <AnimatePresence mode="wait">
                          {formStep <= 3 ? (
                            <motion.div
                              key={`step-${formStep}`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="w-full"
                            >
                              <div className="mb-6">
                                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step {formStep} of 4</span>
                                <h4 className="text-lg font-bold text-zinc-900 mt-1">{content.form.steps[formStep - 1].title}</h4>
                              </div>
                              <div className="space-y-4">
                                {content.form.steps[formStep - 1].fields.map((field) => {
                                  const dropdownOptions: Record<string, string[]> = {
                                    "Sourcing Method": ["Online Retail Arbitrage", "Direct Wholesale", "Private Label"],
                                    "Average Item Weight": ["Under 1 lb", "1-5 lbs", "5-20 lbs", "20+ lbs"],
                                  };
                                  const options = dropdownOptions[field];

                                  return (
                                    <div key={field}>
                                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">{field}</label>
                                      {options ? (
                                        <select
                                          value={fitFormData[field] ?? ""}
                                          onChange={e => handleFitFieldChange(field, e.target.value)}
                                          className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all shadow-inner appearance-none"
                                        >
                                          <option value="">Select {field.toLowerCase()}…</option>
                                          {options.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                          ))}
                                        </select>
                                      ) : (
                                        <input
                                          type="text"
                                          value={fitFormData[field] ?? ""}
                                          onChange={e => handleFitFieldChange(field, e.target.value)}
                                          placeholder={`Enter ${field.toLowerCase()}…`}
                                          className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all shadow-inner"
                                        />
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="step-4"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="w-full"
                            >
                              <div className="mb-6">
                                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Final Step</span>
                                <h4 className="text-lg font-bold text-zinc-900 mt-1">Where should we send your strategy?</h4>
                              </div>
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {["First Name", "Last Name"].map(field => (
                                    <div key={field}>
                                      <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">{field}</label>
                                      <input
                                        type="text"
                                        value={fitFormData[field] ?? ""}
                                        onChange={e => handleFitFieldChange(field, e.target.value)}
                                        placeholder={field === "First Name" ? "John" : "Smith"}
                                        className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all shadow-inner"
                                      />
                                    </div>
                                  ))}
                                </div>
                                {["Work Email", "Company Name"].map(field => (
                                  <div key={field}>
                                    <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">{field}</label>
                                    <input
                                      type={field === "Work Email" ? "email" : "text"}
                                      value={fitFormData[field] ?? ""}
                                      onChange={e => handleFitFieldChange(field, e.target.value)}
                                      placeholder={field === "Work Email" ? "john@company.com" : "Acme Inc."}
                                      className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all shadow-inner"
                                    />
                                  </div>
                                ))}
                                  {/* Honeypot fields for bot traps */}
                                  <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 z-[-1] pointer-events-none" aria-hidden="true">
                                    <label htmlFor="fit_website">Website</label>
                                    <input
                                      id="fit_website"
                                      type="text"
                                      name="website"
                                      tabIndex={-1}
                                      autoComplete="off"
                                      value={fitHoneypotWebsite}
                                      onChange={e => setFitHoneypotWebsite(e.target.value)}
                                    />
                                    <label htmlFor="fit_phone_confirm">Confirm Phone</label>
                                    <input
                                      id="fit_phone_confirm"
                                      type="text"
                                      name="phone_confirm"
                                      tabIndex={-1}
                                      autoComplete="off"
                                      value={fitHoneypotPhone}
                                      onChange={e => setFitHoneypotPhone(e.target.value)}
                                    />
                                  </div>
                                  {fitError && <p className="text-red-500 text-xs text-center">{fitError}</p>}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-8 flex gap-4">
                        {formStep > 1 && (
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFormStep(s => s - 1)}
                            className="h-14 px-6 rounded-xl bg-zinc-100 text-zinc-600 font-medium hover:bg-zinc-200 transition-colors"
                          >
                            Back
                          </motion.button>
                        )}
                        
                        {formStep < 4 ? (() => {
                          const currentFields = content.form.steps[formStep - 1].fields;
                          const allFilled = currentFields.every((f: string) => (fitFormData[f] ?? "").toString().trim() !== "");
                          return (
                            <motion.button 
                              whileHover={allFilled ? { scale: 1.02, boxShadow: "0 10px 25px -5px rgba(16,185,129,0.3)" } : undefined}
                              whileTap={allFilled ? { scale: 0.98 } : undefined}
                              onClick={() => allFilled && setFormStep(s => s + 1)}
                              disabled={!allFilled}
                              className="flex-1 h-14 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
                            >
                              Continue <ArrowRight size={18} />
                            </motion.button>
                          );
                        })() : (() => {
                          const step4Fields = ["First Name", "Last Name", "Work Email", "Company Name"];
                          const allStep4Filled = step4Fields.every(f => (fitFormData[f] ?? "").toString().trim() !== "");
                          return (
                            <motion.button 
                              whileHover={allStep4Filled ? { scale: 1.02, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.3)" } : undefined}
                              whileTap={allStep4Filled ? { scale: 0.98 } : undefined}
                              onClick={handleFitSubmit}
                              disabled={fitSubmitting || !allStep4Filled}
                              className="flex-1 h-14 rounded-xl bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition-colors shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-zinc-950"
                            >
                              {fitSubmitting ? "Sending…" : content.form.cta}
                            </motion.button>
                          );
                        })()}
                      </div>
                      {formStep <= 3 && (() => {
                        const currentFields = content.form.steps[formStep - 1].fields;
                        const emptyCount = currentFields.filter((f: string) => (fitFormData[f] ?? "").toString().trim() === "").length;
                        return emptyCount > 0 ? (
                          <p className="text-center text-xs text-zinc-400 mt-3">
                            {emptyCount === 1 ? "1 required field remaining" : `${emptyCount} required fields remaining`}
                          </p>
                        ) : null;
                      })()}
                      {formStep === 4 && (
                        <p className="text-center text-xs text-zinc-500 mt-4">
                          All fields required. No pressure. No automatic email blasts. Just seeing if we align.
                        </p>
                      )}
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ── Questions Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showQuestions && (
          <div
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) setShowQuestions(false); }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-[2rem] shadow-2xl border border-zinc-200 overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-cyan-500" />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={() => setShowQuestions(false)}
                  className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-500 hover:bg-zinc-200 transition-colors text-lg"
                >
                  ✕
                </button>

                <AnimatePresence mode="wait">
                  {qSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center text-center gap-5 py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 text-3xl">
                        ✓
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-zinc-950 mb-2">Question received, {qName.split(" ")[0]}.</h2>
                        <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
                          We read every message personally and will get back to you within one business day.
                        </p>
                      </div>
                      <button
                        onClick={() => setShowQuestions(false)}
                        className="mt-1 text-sm font-semibold text-emerald-600 hover:underline"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-4">
                        💬 Questions
                      </div>
                      <h2 className="text-2xl font-bold text-zinc-950 mb-1">Ask us anything.</h2>
                      <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                        Not sure if we&apos;re the right fit? Curious about a service? We respond to every question personally.
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Your Name</label>
                            <input
                              type="text"
                              value={qName}
                              onChange={e => setQName(e.target.value)}
                              placeholder="John Smith"
                              className="h-12 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Phone <span className="normal-case text-zinc-400">(optional)</span></label>
                            <input
                              type="tel"
                              value={qPhone}
                              onChange={e => setQPhone(e.target.value)}
                              placeholder="(406) 555-0100"
                              className="h-12 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Email Address</label>
                          <input
                            type="email"
                            value={qEmail}
                            onChange={e => setQEmail(e.target.value)}
                            placeholder="john@company.com"
                            className="h-12 w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">What questions do you have?</label>
                          <textarea
                            value={qMessage}
                            onChange={e => setQMessage(e.target.value)}
                            placeholder="I'm wondering about your FBA prep process for oversized items..."
                            rows={4}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white outline-none transition-all resize-none leading-relaxed"
                          />
                        </div>

                        {/* Honeypot field for bot traps */}
                        <div className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 z-[-1] pointer-events-none" aria-hidden="true">
                          <label htmlFor="q_website">Website</label>
                          <input
                            id="q_website"
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={qHoneypotWebsite}
                            onChange={e => setQHoneypotWebsite(e.target.value)}
                          />
                        </div>

                        {qError && <p className="text-red-500 text-xs">{qError}</p>}

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleQuestionSubmit}
                          disabled={qSubmitting || !qName.trim() || !qEmail.trim() || !qMessage.trim()}
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        >
                          {qSubmitting ? "Sending…" : "Send My Question →"}
                        </motion.button>

                        <p className="text-center text-xs text-zinc-400">We read every message and respond personally.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 10. Footer */}
      <Footer />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://suchgroupecommerce.com/#organization",
                "name": "Such Group E-Commerce",
                "url": "https://suchgroupecommerce.com",
                "logo": "https://suchgroupecommerce.com/icon.png",
                "description": "Tax-free Amazon FBA prep, DTC fulfillment, and B2B wholesale storage out of Great Falls, Montana.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Great Falls",
                  "addressRegion": "MT",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "montanalogisticspro@gmail.com"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://suchgroupecommerce.com/#website",
                "url": "https://suchgroupecommerce.com",
                "name": "Such Group E-Commerce",
                "publisher": {
                  "@id": "https://suchgroupecommerce.com/#organization"
                }
              },
              {
                "@type": "Service",
                "name": "Tax-Free Amazon FBA Prep",
                "provider": {
                  "@id": "https://suchgroupecommerce.com/#organization"
                },
                "areaServed": "US",
                "description": "Zero sales tax receiving, inspection, wrapping, poly-bagging, and FNSKU labeling in Great Falls, Montana."
              }
            ]
          }),
        }}
      />
    </div>
  );
}
