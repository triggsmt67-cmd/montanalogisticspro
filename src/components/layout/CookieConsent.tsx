"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown> | string | Date | unknown[] | IArguments>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  const pushConsentToGTM = (granted: boolean) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    
    // Google Consent Mode v2 Update call
    const state = granted ? "granted" : "denied";
    
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    } else {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    }

    // Custom event to trigger tag rules in GTM UI & GA4
    window.dataLayer.push({
      event: granted ? "consent_granted" : "consent_denied",
    });
  };

  useEffect(() => {
    // Check if consent has already been given/denied
    const consent = localStorage.getItem("cookie-consent-status");
    if (!consent) {
      // Small delay for clean entrance
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    } else {
      // If consent already exists, push it to GTM dataLayer on load
      pushConsentToGTM(consent === "granted");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-status", "granted");
    pushConsentToGTM(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent-status", "denied");
    pushConsentToGTM(false);
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100]"
        >
          <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-white font-medium text-base tracking-tight">Cookie Consent</h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  We use cookies to analyze site traffic, improve your experience, and serve personalized marketing/retargeting ads. See our{" "}
                  <Link href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handleDecline}
                className="flex-1 h-10 rounded-full text-xs font-semibold bg-white/[0.03] border border-white/[0.08] text-zinc-300 hover:bg-white/[0.08] transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 h-10 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
