import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PathSelectorWidget } from "@/components/sections/PathSelectorWidget";
import { TrustRibbon } from "@/components/sections/TrustRibbon";
import { SavingsCalculator } from "@/components/sections/SavingsCalculator";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { DiscoveryWizard } from "@/components/sections/DiscoveryWizard";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <PathSelectorWidget />
        <TrustRibbon />
        <SavingsCalculator />
        <IntegrationsGrid />
        <DiscoveryWizard />
      </main>
      <Footer />
    </>
  );
}
