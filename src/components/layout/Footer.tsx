import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] py-12 text-center md:text-left relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 relative z-10 max-w-6xl">
        <div className="md:col-span-2">
          <Link href="/" className="inline-block flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
              <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
                <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Such Group E-Commerce</span>
          </Link>
          <p className="text-slate-400 mt-4 max-w-sm mx-auto md:mx-0 leading-relaxed font-sans">
            Tax-Free Montana Prep. 48-Hour Turnaround Guaranteed. The scalable solution for high-volume Amazon sellers.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-sans">
            <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Online Arbitrage</Link></li>
            <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Wholesale &amp; PL</Link></li>
            <li><Link href="/estimator" className="hover:text-emerald-400 transition-colors">Pricing Estimator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">Company</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-sans">
            <li><Link href="/#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link href="/#intake-flow" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm relative z-10 font-sans">
        &copy; {new Date().getFullYear()} Such Group E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}
