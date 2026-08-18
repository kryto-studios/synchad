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
      question: "How does the project process work?",
      answer: "We follow a transparent 6-step journey: Discover (analyzing your needs) → Plan (strategy & scope) → Build (custom development & video editing) → Review (client feedback) → Launch (deployment & asset handoff) → Grow (post-launch support). You'll work directly with founders Dewansh & Aryan throughout the process.",
    },
    {
      id: "faq-q2",
      question: "How long does a typical project take?",
      answer: "Business websites and landing portals (Startup Pack) typically take 7–14 days. Custom web applications, e-commerce platforms, and database systems (Growth & Enterprise Packs) take 3–5 weeks depending on scope.",
    },
    {
      id: "faq-q3",
      question: "Do you work with local businesses?",
      answer: "Yes! Our primary mission 'Digitalizing The Local' is built around helping local businesses, shops, and regional brands compete with custom software, high-retention video content, and targeted digital marketing.",
    },
    {
      id: "faq-q4",
      question: "Can I start with one service and add others later?",
      answer: "Absolutely. You can start with a custom website (BUILD), a video editing package (CREATE), or a marketing campaign (GROW), and seamlessly integrate other services as your business expands.",
    },
    {
      id: "faq-q5",
      question: "Do you handle hosting, domain setup, and technical maintenance?",
      answer: "Yes. Every website and app we build includes complete domain configuration, production hosting deployment (on Vercel), server security setup, and ongoing technical support.",
    },
    {
      id: "faq-q6",
      question: "Can you manage both web development and creative video/marketing?",
      answer: "Yes! That is synchAD's biggest advantage. Having software engineering, post-production video editing, and digital marketing under one roof saves you from managing separate agencies and freelancers.",
    },
    {
      id: "faq-q7",
      question: "What happens after I submit the contact form?",
      answer: "We review your requirements immediately and get back to you within 24 hours via WhatsApp or email with a clear proposed scope, timeline, and fixed price quote. No complicated sales calls.",
    },
    {
      id: "faq-q8",
      question: "Do you provide revisions and post-launch support?",
      answer: "Yes. All packages include collaborative revision cycles during production, plus 3 to 12 months of post-launch technical support to ensure your system continues running smoothly.",
    },
  ];

  return (
    <section 
      id="faq" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-emerald-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-brand">
                // COMMON QUESTIONS
              </span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              Frequently Asked
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
            TRANSPARENT ANSWERS
          </span>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id}
                className={`${CLAY_CLASSES.cardCream} rounded-2xl overflow-hidden border border-charcoal-brand/15 transition-all duration-200`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-outfit text-lg font-bold text-charcoal-brand hover:text-emerald-brand transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-emerald-brand bg-emerald-brand/10 border border-emerald-brand/20 px-2.5 py-1 rounded-lg">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-charcoal-brand/5 border border-charcoal-brand/10 flex items-center justify-center flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-emerald-brand" />
                    ) : (
                      <Plus className="w-4 h-4 text-charcoal-brand" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 font-inter text-sm text-charcoal-brand/85 leading-relaxed font-medium border-t border-dashed border-charcoal-brand/15">
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
