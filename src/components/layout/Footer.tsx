import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] py-12 text-center md:text-left relative overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 relative z-10 max-w-6xl">
        <div className="md:col-span-2">
          <Link href="/" className="inline-block flex items-center space-x-3">
             <div className="w-8 h-8 bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-lg rounded-lg shadow-lg">M</div>
            <span className="font-bold text-xl text-white tracking-tight">Montana Logistics Pro</span>
          </Link>
          <p className="text-slate-400 mt-4 max-w-sm mx-auto md:mx-0 leading-relaxed font-sans">
            Tax-Free Montana Prep. 48-Hour Turnaround Guaranteed. The scalable solution for high-volume Amazon sellers.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">Services</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-sans">
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Online Arbitrage</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Wholesale & PL</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest">Company</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-sans">
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            <li><Link href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm relative z-10 font-sans">
        &copy; {new Date().getFullYear()} Montana Logistics Pro. All rights reserved.
      </div>
    </footer>
  );
}
