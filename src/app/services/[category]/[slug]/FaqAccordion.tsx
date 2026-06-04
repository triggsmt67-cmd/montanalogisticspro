"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="linear-card overflow-hidden cursor-pointer"
            onClick={() => toggleFAQ(idx)}
          >
            <button 
              className="w-full py-4 sm:py-6 px-5 sm:px-8 flex justify-between items-center text-left text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-lg pr-4">{faq.question}</span>
              <span className="shrink-0 p-1.5 rounded-full bg-zinc-800 text-zinc-400">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-5 sm:px-8 pb-5 sm:pb-6 text-zinc-400 leading-relaxed border-t border-zinc-900/60 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
