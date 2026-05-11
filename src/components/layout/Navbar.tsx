import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <header className="w-full max-w-7xl px-6 py-4 flex items-center justify-between glass-dark rounded-2xl border-t border-white/10 border-l border-r border-b-0 border-transparent shadow-2xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-lg rounded-lg shadow-lg">M</div>
            <span className="font-bold text-xl text-white tracking-tight">Montana Logistics Pro</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
          <Link href="#services" className="hover:text-white transition-colors">Fulfillment</Link>
          <Link href="#warehousing" className="hover:text-white transition-colors">Warehousing</Link>
          <Link href="#tech" className="hover:text-white transition-colors">Technology</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-lg px-6 shadow-md transition-colors">
            Get a Quote
          </Button>
        </div>
      </header>
    </div>
  );
}
