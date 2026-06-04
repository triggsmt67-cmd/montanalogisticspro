import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  PackageCheck, 
  Box, 
  AlertCircle, 
  Layers, 
  RotateCcw, 
  Truck, 
  ShoppingCart,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CalendarDays,
  Percent,
  CheckCircle2
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import FaqAccordion from "./FaqAccordion";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "fba-prep-and-labeling": PackageCheck,
  "bundling-and-multipacks": Box,
  "poly-bagging-and-fragile-handling": AlertCircle,
  "tax-free-inventory-storage": Layers,
  "removal-order-processing": RotateCcw,
  "inbound-shipment-creation": Truck,
  "secure-warehousing": Layers,
  "direct-to-consumer-pick-and-pack": Box,
  "custom-kitting-and-assembly": PackageCheck,
  "streamlined-returns": RotateCcw,
  "branded-unboxing-experience": ShoppingCart,
  "b2b-and-retail-routing": Truck,
};

export async function generateStaticParams() {
  const paths: Array<{ category: string; slug: string }> = [];
  Object.entries(SERVICES_DATA).forEach(([category, services]) => {
    Object.keys(services).forEach((slug) => {
      paths.push({ category, slug });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { category, slug } = await params;
  const service = SERVICES_DATA[category as "amazon" | "ecommerce"]?.[slug];
  if (!service) {
    return {
      title: "Service Not Found | Montana Logistics Pro",
    };
  }
  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const validCategory = category === "amazon" || category === "ecommerce";
  const service = validCategory ? SERVICES_DATA[category as "amazon" | "ecommerce"]?.[slug] : null;

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[slug] || Box;
  const categoryLabel = category === "amazon" ? "Amazon FBA & FBM Prep" : "DTC & Retail Fulfillment";

  return (
    <div className="min-h-screen bg-[#000000] text-[#EAEAEA] font-sans selection:bg-emerald-500/20 selection:text-emerald-400 pb-32 overflow-x-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] max-w-[1200px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#000000]/60 backdrop-blur-xl border-b border-zinc-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
                <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-xl font-bold tracking-tight text-white leading-tight">Such Group E-Commerce</span>
              <span className="text-[9px] sm:text-xs font-medium text-zinc-500 tracking-wide uppercase mt-0.5">Prep • Fulfillment • Storage</span>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/estimator" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              Cost Estimator
            </Link>
            <Link 
              href="/#fit-review" 
              className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Start Fit Review
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-12 relative z-10">
        {/* Navigation Breadcrumb & Back button */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-medium transition-colors mb-6 group"
            id="back-to-home-link"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Homepage
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
            <span>Services</span>
            <span>/</span>
            <span className="text-emerald-400">{categoryLabel}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-zinc-400 font-medium max-w-[70ch]">
                {service.tagline}
              </p>
            </div>
            
            <div className="shrink-0">
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)] inline-flex items-center gap-3">
                <IconComponent size={32} strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-500">Service Track</div>
                  <div className="text-sm font-bold text-white uppercase">{category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="linear-card p-8 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400">
              <ShieldCheck size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">Compliance SLA</h3>
              <p className="text-white text-base font-semibold">{service.sla}</p>
            </div>
          </div>

          <div className="linear-card p-8 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400">
              <CalendarDays size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">Processing Time</h3>
              <p className="text-white text-base font-semibold">{service.turnaround}</p>
            </div>
          </div>

          <div className="linear-card p-8 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400">
              <Percent size={24} strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-2">Tax Status</h3>
              <p className="text-white text-base font-semibold">{service.taxStatus}</p>
            </div>
          </div>
        </section>

        {/* Deep Dive Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">Service Overview</h2>
            <div className="text-zinc-400 leading-relaxed text-lg space-y-6">
              <p>{service.description}</p>
              <p>
                Operating out of Montana means you also benefit from **zero inventory sales tax**. That saves you up to 8% or more on your inbound wholesale purchases, which goes straight back to your bottom line. Coupled with our industry-leading SLAs, you get a logistics setup built to scale.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="linear-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Capabilities & Deliverables</h3>
              <div className="space-y-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 text-emerald-400 mt-1">
                      <CheckCircle2 size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-base">{benefit.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accordion FAQs */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Got questions about integrations, SLAs, or capabilities? Find answers below or reach out directly.
            </p>
          </div>
          <FaqAccordion faqs={service.faqs} />
        </section>

        {/* Call to Action Banner */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-zinc-800 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-radial-gradient opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Ready to de-risk your logistics?
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Every client onboarding starts with a detailed Fit Review. We audit your workflows and verify compliance before moving a single pallet. Let's find out if we align.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#fit-review" 
                className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                Start Free Fit Review
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                href="/estimator" 
                className="w-full sm:w-auto h-12 px-8 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold transition-all hover:scale-[1.02]"
              >
                Calculate Prep Savings
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
