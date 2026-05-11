import { Card } from "@/components/ui/card";

export function IntegrationsGrid() {
  return (
    <section className="py-24 bg-[#0B1120] border-y border-white/5 backdrop-blur-sm" id="tech">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless API Integrations</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">Connect your entire tech stack in minutes. We support native integrations with major marketplaces and inventory management systems.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {["Amazon FBA", "Walmart Fulfillment", "Shopify", "TikTok Shop"].map((logo) => (
            <Card key={logo} className="glass-dark border-white/5 flex items-center justify-center p-8 h-32 hover:border-emerald-500/30 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer group shadow-lg">
               <span className="text-xl font-bold text-slate-500 group-hover:text-emerald-400 transition-colors">{logo}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
