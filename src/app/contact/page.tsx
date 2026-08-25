"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { pushDataLayerEvent } from "@/lib/analytics";
import { 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  Globe2
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [honeypotWebsite, setHoneypotWebsite] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !question.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/submit-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          question: question.trim(),
          website: honeypotWebsite,
          submittedAt: Date.now(),
          loadedAt: Date.now() - 1000,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.error ?? "Failed to send message. Please try again.");
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      pushDataLayerEvent({
        event: "contact_form_submitted",
        form_name: "contact_page",
      });
    } catch {
      setError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://suchgroupecommerce.com/contact#webpage",
        "url": "https://suchgroupecommerce.com/contact",
        "name": "Contact Such Group E-Commerce",
        "isPartOf": {
          "@id": "https://suchgroupecommerce.com/#website"
        },
        "description": "Contact Such Group E-Commerce about nationwide Amazon FBA prep, DTC fulfillment, and inventory warehousing operated from Montana."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://suchgroupecommerce.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://suchgroupecommerce.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-emerald-500/20 selection:text-emerald-300 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto w-full relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-300 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-emerald-400 font-medium">Contact</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Discuss Your Logistics Needs
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Have questions about tax-free inventory routing, Amazon prep workflows, custom bundling, or pallet storage? Send us a message and our team will get back to you promptly.
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
              We onboard and support clients remotely across the United States. Our Great Falls facility receives inventory for approved clients and is not open for walk-in customer service.
            </p>

            <div className="space-y-4 pt-4">
              <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Facility Location</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Great Falls, Montana, USA</p>
                  <p className="text-zinc-500 text-[11px] mt-1">Zero state sales tax jurisdiction</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Nationwide Client Service</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Remote onboarding and support across the United States</p>
                  <p className="text-zinc-500 text-[11px] mt-1">Inventory shipments accepted for approved clients only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to Such Group E-Commerce. A member of our operations team will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setQuestion("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold border border-zinc-800 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>

                  {/* Honeypot field */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypotWebsite}
                      onChange={(e) => setHoneypotWebsite(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Work Email <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={254}
                        placeholder="jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Phone Number <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        maxLength={30}
                        placeholder="(406) 555-0100"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      How can we help? <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      maxLength={2000}
                      placeholder="Tell us about your estimated monthly unit volume, current friction, or specific service requirements..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
