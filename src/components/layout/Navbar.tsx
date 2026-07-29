"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export function Navbar() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [name, setName]         = useState("");
  const [email, setEmail]       = useState("");
  const [phone, setPhone]       = useState("");
  const [question, setQuestion] = useState("");

  const loadedAt = useRef(Date.now());

  const openModal = () => {
    setShowQuestions(true);
    setSubmitted(false);
    setError("");
    loadedAt.current = Date.now();
  };

  const closeModal = () => setShowQuestions(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submit-question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, question }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection.");
      setSubmitting(false);
    }
  };

  const inputClass =
    "h-12 w-full bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-zinc-500 hover:border-emerald-500/40 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/[0.07] outline-none transition-all";

  const canSubmit = name.trim() && email.trim() && question.trim() && !submitting;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
        <header className="w-full max-w-4xl px-6 py-3 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
                <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                  <polygon points="12 8 8 10 12 12 16 10" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Such Group E-Commerce</span>
            </Link>
          </div>

          <nav aria-label="Main navigation" className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
            <Link href="/#services" className="hover:text-white transition-colors">Prep Solutions</Link>
            <Link href="/#roi-model" className="hover:text-white transition-colors">ROI Model</Link>
            <Link href="/estimator" className="hover:text-emerald-400 text-emerald-500 transition-colors">Cost Estimator</Link>
            <button
              onClick={openModal}
              className="hover:text-white transition-colors"
            >
              Questions
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold rounded-full px-6 py-2 border border-emerald-500/20 shadow-md transition-colors text-sm">
              Get Started
            </Button>
          </div>
        </header>
      </div>

      {/* ── Questions Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showQuestions && (
          <div
            className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:max-w-lg bg-zinc-900 border border-white/10 rounded-t-[2.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden"
            >
              {/* Header gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-cyan-500" />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors text-lg"
                >
                  ✕
                </button>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center text-center gap-5 py-8"
                    >
                      {/* Success ring */}
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-4xl">
                          ✓
                        </div>
                        <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl" />
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          Question received, {name.split(" ")[0]}.
                        </h2>
                        <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
                          We'll get back to you within one business day. In the meantime, feel free to explore the cost estimator.
                        </p>
                      </div>

                      <div className="flex gap-3 mt-2">
                        <Link
                          href="/estimator"
                          onClick={closeModal}
                          className="h-10 px-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 transition-colors flex items-center"
                        >
                          Try the Estimator
                        </Link>
                        <button
                          onClick={closeModal}
                          className="h-10 px-5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-semibold hover:bg-white/10 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Eyebrow */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        💬 Questions
                      </div>

                      <h2 className="text-2xl font-bold text-white mb-1">Ask us anything.</h2>
                      <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                        Not sure if we're the right fit? Curious about a service? Just ask — we respond to every question personally.
                      </p>

                      <div className="space-y-4">
                        {/* Name + Phone row */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Your Name</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Smith"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Phone <span className="normal-case text-zinc-600">(optional)</span></label>
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(406) 555-0100"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Email Address</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@company.com"
                            className={inputClass}
                          />
                        </div>

                        {/* Question textarea */}
                        <div>
                          <label className="block text-xs font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">What questions do you have?</label>
                          <textarea
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="I'm wondering about your FBA prep process for oversized items..."
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 hover:border-emerald-500/40 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-white/[0.07] outline-none transition-all resize-none leading-relaxed"
                          />
                        </div>

                        {error && (
                          <p className="text-red-400 text-xs">{error}</p>
                        )}

                        <motion.button
                          whileHover={{ scale: canSubmit ? 1.02 : 1 }}
                          whileTap={{ scale: canSubmit ? 0.98 : 1 }}
                          onClick={handleSubmit}
                          disabled={!canSubmit}
                          className="w-full h-13 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                        >
                          {submitting ? "Sending…" : "Send My Question →"}
                        </motion.button>

                        <p className="text-center text-xs text-zinc-600">
                          We read every message and respond personally.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
