"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "faq-q1",
      question: "Who is synchAD and what do you do?",
      answer: "We are a developer-creative partnership co-founded by Dewansh Chatterjee and Aryan Gupta (formerly operating as Kryto Studios in creative contexts). Under our mission 'Digitalizing The Local', we build custom full-stack web platforms, client application setups, and premium creative post-production/motion graphic assets.",
    },
    {
      id: "faq-q2",
      question: "What does your tagline 'Digitalizing The Local' mean?",
      answer: "It means bringing enterprise-grade frontend systems, secure backend databases, and premium media assets to local regional brands. We replace outdated local processes (like paper-based workflows) with customized digital portals, like our Krishna LMS and Eklavya Library apps.",
    },
    {
      id: "faq-q3",
      question: "What is your core engineering and creative stack?",
      answer: "We build strictly within a high-performance ecosystem. For code, we use Next.js (React) for frontend and Supabase (PostgreSQL) for secure relational databases. Creative assets are constructed in Figma, while video and motion sequences are rendered on Premiere Pro, After Effects, and DaVinci Resolve timelines.",
    },
    {
      id: "faq-q4",
      question: "How do you secure user data and databases?",
      answer: "We configure Supabase PostgreSQL tables with custom Row Level Security (RLS) policies. This ensures that clients and visitors can only query their designated records, matching commercial security guidelines without complex server overhead.",
    },
    {
      id: "faq-q5",
      question: "Can I customize a package to include both Web and Motion Edits?",
      answer: "Yes! Our Growth Pack is designed exactly for this — integrating a custom Next.js database dashboard with a 15-second high-impact video promo asset. We can also customize scope to include tailored timelines or companion mobile apps.",
    },
    {
      id: "faq-q6",
      question: "What is the typical project turnaround time?",
      answer: "Static web portals (Startup Pack) take approximately 7-14 days. Custom full-stack applications with databases and user logins (Growth / Enterprise Packs) take 3-5 weeks from Figma visual wireframes to final Vercel deployment.",
    },
  ];

  return (
    <section 
      id="faq" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-mustard-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            Client FAQs
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50">Common Inquiries</span>
        </div>

        {/* Collapsible Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.id}
                className={`${CLAY_CLASSES.cardCream} transition-all duration-200`}
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-outfit text-lg font-bold text-charcoal-brand hover:text-emerald-brand transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 border-charcoal-brand/8 shadow-[4px_4px_10px_rgba(26,26,26,0.04),_inset_-3px_-3px_6px_rgba(26,26,26,0.03),_inset_3px_3px_6px_rgba(255,255,255,0.9)] p-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-charcoal-brand" />
                    ) : (
                      <Plus className="w-4 h-4 text-charcoal-brand" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-inter text-sm text-charcoal-brand/80 leading-relaxed border-t border-dashed border-charcoal-brand/15">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
