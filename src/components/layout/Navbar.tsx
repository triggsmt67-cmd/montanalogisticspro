import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <header className="w-full max-w-4xl px-6 py-3 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs rounded-md shadow-lg">M</div>
            <span className="font-bold text-lg text-white tracking-tight">Montana Logistics Pro</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link href="#prep-solutions" className="hover:text-white transition-colors">Prep Solutions</Link>
          <Link href="#api-stack" className="hover:text-white transition-colors">API Stack</Link>
          <Link href="#roi-model" className="hover:text-white transition-colors">ROI Model</Link>
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
