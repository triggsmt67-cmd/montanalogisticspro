import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <header className="w-full max-w-4xl px-6 py-3 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
                <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <span className="font-bold text-lg text-white tracking-tight">Such Group E-Commerce</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link href="#prep-solutions" className="hover:text-white transition-colors">Prep Solutions</Link>
          <Link href="#api-stack" className="hover:text-white transition-colors">API Stack</Link>
          <Link href="#roi-model" className="hover:text-white transition-colors">ROI Model</Link>
          <Link href="/estimator" className="hover:text-emerald-400 text-emerald-500 transition-colors">Cost Estimator</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold rounded-full px-6 py-2 border border-emerald-500/20 shadow-md transition-colors text-sm">
            Get Started
          </Button>
        </div>
      </header>
    </div>
  );
}
