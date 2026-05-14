"use client";

import React, { useState } from "react";
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
  Calculator,
  DollarSign
} from "lucide-react";

type PathType = "amazon" | "ecommerce";

const PATH_CONTENT = {
  amazon: {
    hero: {
      eyebrow: "Amazon FBA & FBM Prep",
      headline: "Skip the compliance headaches. And the sales tax.",
      body: "FBA compliance is strict, and mistakes quietly eat your margins. We handle receiving, labeling, and prep with 99.9% accuracy—all from our zero-sales-tax facility in Montana. Keep your inventory moving and your margins intact.",
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
          body: "If your prep center isn't in a tax-free state like Montana, you are losing up to 8% of your wholesale budget to state taxes before making a single sale.",
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
        body: "Send your wholesale shipments directly to our tax-free facility. You immediately stop paying sales tax on inventory."
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
          fields: ["Average monthly units", "Number of active SKUs"]
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
      cta: "Calculate My Prep Savings"
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
          fields: ["Average monthly orders", "Number of active SKUs"]
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
      cta: "Get My Fulfillment Quote"
    }
  }
};

function TaxSavingsCalculator() {
  const [monthlyUnits, setMonthlyUnits] = useState<number>(5000);
  const [costPerUnit, setCostPerUnit] = useState<number>(15);
  const [taxRate, setTaxRate] = useState<number>(0.0825);

  const monthlySpend = monthlyUnits * costPerUnit;
  const annualSavings = monthlySpend * 12 * taxRate;

  const states = [
    { name: "California (8.25%)", rate: 0.0825 },
    { name: "New York (8.875%)", rate: 0.08875 },
    { name: "Washington (9.0%)", rate: 0.09 },
    { name: "Illinois (8.5%)", rate: 0.085 },
    { name: "National Average (7.5%)", rate: 0.075 },
  ];

  return (
    <motion.div 
      whileHover={{ y: -4, boxShadow: "0 40px 80px -20px rgba(16, 185, 129, 0.15)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-zinc-950 rounded-[2.5rem] p-8 md:p-12 border border-emerald-900/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group cursor-default"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-50" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Calculator size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">The Montana Advantage</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Montana has <strong>zero state sales tax</strong>. When you route your inventory purchasing through our facility, you stop paying an automatic premium to state governments. 
            Calculate your invisible savings.
          </p>
          
          <div className="space-y-6">
            {/* Units Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-zinc-300">Monthly Units Processed</label>
                <motion.span key={monthlyUnits} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  {monthlyUnits.toLocaleString()} units
                </motion.span>
              </div>
              <motion.input 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="range" 
                min="1000" 
                max="100000" 
                step="500"
                value={monthlyUnits}
                onChange={(e) => setMonthlyUnits(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all duration-200"
              />
              <div className="flex justify-between text-xs text-zinc-500">
                <span>1k</span>
                <span>100k+</span>
              </div>
            </div>

            {/* Cost Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium text-zinc-300">Average Cost Per Unit</label>
                <motion.span key={costPerUnit} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-bold text-white">
                  ${costPerUnit}
                </motion.span>
              </div>
              <motion.input 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="range" 
                min="1" 
                max="250" 
                step="1"
                value={costPerUnit}
                onChange={(e) => setCostPerUnit(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all duration-200"
              />
              <div className="flex justify-between text-xs text-zinc-500">
                <span>$1</span>
                <span>$250+</span>
              </div>
            </div>

            {/* State Dropdown */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-300 block">Current Prep State</label>
              <select 
                value={taxRate} 
                onChange={(e) => setTaxRate(parseFloat(e.target.value))}
                className="w-full h-12 bg-zinc-900 border border-zinc-700 rounded-xl px-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
              >
                {states.map(s => (
                  <option key={s.name} value={s.rate} className="bg-zinc-900 text-white">{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)" }}
          transition={{ duration: 0.3 }}
          className="bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-8 text-center flex flex-col items-center justify-center relative shadow-inner h-full min-h-[300px]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-30 mix-blend-overlay rounded-3xl" />
          <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase mb-2 relative z-10">Estimated Annual Savings</span>
          <motion.div 
            key={annualSavings}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            ${Math.round(annualSavings).toLocaleString()}
          </motion.div>
          <p className="text-zinc-400 text-sm relative z-10">
            Straight to your bottom line, just by changing your shipping address to Montana.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const [activePath, setActivePath] = useState<PathType>("amazon");
  const [formStep, setFormStep] = useState(1);
  const content = PATH_CONTENT[activePath];

  // Helper to change paths and reset the form
  const handlePathChange = (path: PathType) => {
    setActivePath(path);
    setFormStep(1);
  };

  return (
    <div className="min-h-[100dvh] bg-[#f9fafb] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 bg-[#f9fafb]/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-zinc-900">Montana Logistics Pro</span>
            <span className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Prep • Fulfillment • Storage</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <motion.a whileHover={{ y: -1 }} href="#services" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Services</motion.a>
            <motion.a whileHover={{ y: -1 }} href="#process" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Process</motion.a>
            <motion.a whileHover={{ y: -1 }} href="#fit-review" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Fit Review</motion.a>
          </nav>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('fit-review')?.scrollIntoView({ behavior: 'smooth' });
              setFormStep(1);
            }}
            className="flex items-center justify-center h-9 md:h-10 px-4 md:px-6 rounded-full bg-zinc-900 text-white text-xs md:text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Start Fit Review
          </motion.button>
        </div>
      </header>

      <main className="pb-32">
        {/* 2. Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              poster="/globe%20hero%20image.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
            >
              <source src="/slow%20turning%20globe.mp4" type="video/mp4" />
            </video>
            {/* Overlay to ensure text readability but keep the globe visible */}
            <div className="absolute inset-0 bg-[#f9fafb]/70 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb]/40 via-[#f9fafb]/60 to-[#f9fafb]" />
          </div>

          <div className="relative z-10 px-4 max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
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
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-zinc-950 mb-6 drop-shadow-sm"
              >
                Choose the logistics path built for your brand.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-[65ch] font-medium drop-shadow-sm"
              >
                Select your primary sales channel below to see how our zero-tax Montana facility solves your specific prep, fulfillment, and storage bottlenecks.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <h2 className="text-2xl font-bold tracking-tight mb-3 relative z-10">I Sell on Amazon</h2>
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
                <h2 className="text-2xl font-bold tracking-tight mb-3 relative z-10">I Sell Through My Own Store</h2>
                <p className={`text-base leading-relaxed relative z-10 ${activePath === "ecommerce" ? "text-zinc-300" : "text-zinc-600"}`}>
                  API-driven pick/pack, kitting, and returns for Shopify, DTC, and multi-channel retail brands.
                </p>
              </motion.button>
            </div>
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

        {/* 3.5 Savings Calculator */}
        <section className="px-4 max-w-7xl mx-auto mb-24">
          <TaxSavingsCalculator />
        </section>

        {/* 4. Buyer Problem Section */}
        <section className="px-4 max-w-7xl mx-auto mb-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <h4 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-zinc-800 transition-colors">{item.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{item.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="services" className="py-24 bg-zinc-50 border-y border-zinc-200/50 mb-24">
          <div className="px-4 max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <span className="text-sm font-semibold text-emerald-600 tracking-widest uppercase mb-4 block">Core Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6">
                Built to solve your specific bottlenecks.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We don't offer generic logistics. We provide precise interventions designed to remove friction from your supply chain, backed by strict Service Level Agreements (SLAs).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {content.services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.12)", borderColor: "rgba(16, 185, 129, 0.4)" }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="p-8 rounded-[2rem] bg-white border border-zinc-200/80 shadow-md transition-colors group cursor-default"
                    >
                      <motion.div
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         className="inline-block p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-6 group-hover:bg-emerald-100 transition-colors shadow-sm"
                      >
                        <Icon size={24} strokeWidth={1.5} />
                      </motion.div>
                      <h4 className="text-xl font-bold text-zinc-950 mb-3">{service.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{service.body}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 6. Operational Proof Section */}
        <section className="px-4 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 block">Operational proof</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-950 mb-6">
                Visibility replaces anxiety.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                You shouldn't have to send an email to know if your shipment arrived. Our systems provide real-time status updates so you have total control over your inventory lifecycle.
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
                We don't do blind RFP quotes. We use a structured Fit Review to ensure our capabilities perfectly align with your operational needs. If we aren't the right fit, we will tell you immediately.
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
                  <h3 className="text-2xl font-bold text-zinc-950 mb-3 mt-2">{content.form.title}</h3>
                  <p className="text-sm text-zinc-500 mb-8">{content.form.intro}</p>
                  
                  <div className="relative min-h-[220px]">
                    <AnimatePresence mode="wait">
                      {formStep <= 3 ? (
                        <motion.div
                          key={`step-${formStep}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="mb-6">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step {formStep} of 4</span>
                            <h4 className="text-lg font-bold text-zinc-900 mt-1">{content.form.steps[formStep - 1].title}</h4>
                          </div>
                          <div className="space-y-4">
                            {content.form.steps[formStep - 1].fields.map((field) => (
                              <motion.div key={field} whileHover={{ scale: 1.01, x: 2 }} className="relative cursor-text">
                                <div className="h-14 w-full bg-zinc-50 border border-zinc-200 rounded-xl flex items-center px-4 hover:border-emerald-300 hover:bg-white transition-colors shadow-inner">
                                  <span className="text-sm text-zinc-400">{field}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="step-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <div className="mb-6">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Final Step</span>
                            <h4 className="text-lg font-bold text-zinc-900 mt-1">Where should we send your strategy?</h4>
                          </div>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <motion.div whileHover={{ scale: 1.02 }} className="h-14 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center px-4 hover:border-emerald-300 hover:bg-white transition-colors shadow-inner cursor-text">
                                <span className="text-sm text-zinc-400">First Name</span>
                              </motion.div>
                              <motion.div whileHover={{ scale: 1.02 }} className="h-14 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center px-4 hover:border-emerald-300 hover:bg-white transition-colors shadow-inner cursor-text">
                                <span className="text-sm text-zinc-400">Last Name</span>
                              </motion.div>
                            </div>
                            <motion.div whileHover={{ scale: 1.01, x: 2 }} className="h-14 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center px-4 hover:border-emerald-300 hover:bg-white transition-colors shadow-inner cursor-text">
                              <span className="text-sm text-zinc-400">Work Email</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.01, x: 2 }} className="h-14 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center px-4 hover:border-emerald-300 hover:bg-white transition-colors shadow-inner cursor-text">
                              <span className="text-sm text-zinc-400">Company Name</span>
                            </motion.div>
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
                    
                    {formStep < 4 ? (
                      <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(16,185,129,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormStep(s => s + 1)}
                        className="flex-1 h-14 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-lg flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight size={18} />
                      </motion.button>
                    ) : (
                      <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 h-14 rounded-xl bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition-colors shadow-lg flex items-center justify-center"
                      >
                        {content.form.cta}
                      </motion.button>
                    )}
                  </div>
                  {formStep === 4 && (
                    <p className="text-center text-xs text-zinc-500 mt-4">
                      No pressure. No automatic email blasts. Just seeing if we align.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* 9. Final CTA Section */}
        <section className="px-4 max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ boxShadow: "0 40px 80px -20px rgba(6, 78, 59, 0.5)" }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
            
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 drop-shadow-md">
                Protect your margins today.
              </h2>
              <p className="text-lg text-emerald-100/90 leading-relaxed mb-10 font-medium drop-shadow-sm">
                Stop overpaying on state sales tax and let our expert team handle the operational heavy lifting. Choose your path and request a precise, custom strategy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button 
                  onClick={() => {
                    document.getElementById('fit-review')?.scrollIntoView({ behavior: 'smooth' });
                    setFormStep(1);
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-emerald-950 font-bold transition-colors shadow-xl"
                >
                  Start a Fit Review
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 95, 70, 0.8)", borderColor: "rgba(16, 185, 129, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-emerald-800/50 text-white font-medium transition-colors border border-emerald-700/50 shadow-md backdrop-blur-sm"
                >
                  Compare Both Logistics Paths
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 10. Footer */}
      <footer className="bg-zinc-950 pt-20 pb-10 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-xl font-bold tracking-tight text-white block mb-2">Montana Logistics Pro</span>
            <p className="text-sm max-w-sm leading-relaxed">
              Tax-free prep, robust fulfillment, and pristine storage support for high-volume sellers operating out of Montana.
            </p>
          </div>
          <div className="flex gap-12 md:justify-end">
            <div className="flex flex-col gap-3">
              <motion.a whileHover={{ x: 3, color: "#fff" }} href="#" className="text-sm transition-colors w-max">Amazon Prep</motion.a>
              <motion.a whileHover={{ x: 3, color: "#fff" }} href="#" className="text-sm transition-colors w-max">Ecommerce Fulfillment</motion.a>
              <motion.a whileHover={{ x: 3, color: "#fff" }} href="#process" className="text-sm transition-colors w-max">Onboarding</motion.a>
            </div>
            <div className="flex flex-col gap-3">
              <motion.a onClick={() => setFormStep(1)} whileHover={{ x: 3, color: "#fff" }} href="#fit-review" className="text-sm transition-colors w-max">Fit Review</motion.a>
              <motion.a whileHover={{ x: 3, color: "#fff" }} href="#" className="text-sm transition-colors w-max">Contact</motion.a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs">© {new Date().getFullYear()} Montana Logistics Pro. All rights reserved. Located proudly in Montana.</p>
        </div>
      </footer>
    </div>
  );
}
