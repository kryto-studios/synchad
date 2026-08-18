"use client";

import { motion } from "framer-motion";
import { Search, Compass, Cpu, CheckCircle, Rocket, TrendingUp } from "lucide-react";
import { CLAY_CLASSES } from "./ClayStyles";

interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverables: string;
  icon: any;
  clayClass: string;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      step: "01",
      title: "DISCOVER",
      subtitle: "Business & Operational Audit",
      desc: "We analyze your business, existing operational workflows, target audience, and digital goals to identify high-leverage growth opportunities.",
      deliverables: "Requirements Audit • Audience Definition • Scope Map",
      icon: Search,
      clayClass: CLAY_CLASSES.cardCream,
    },
    {
      step: "02",
      title: "PLAN",
      subtitle: "Strategy & Architecture",
      desc: "We map out the exact technical architecture, database schema, media content calendar, and transparent milestone timeline.",
      deliverables: "System Blueprint • Deliverable Timeline • Fixed Quote",
      icon: Compass,
      clayClass: CLAY_CLASSES.cardMustard,
    },
    {
      step: "03",
      title: "BUILD",
      subtitle: "Production & Development",
      desc: "Custom software engineering and creative video production begin simultaneously with clear progress tracking.",
      deliverables: "Clean Codebase • High-Retention Edits • Weekly Demos",
      icon: Cpu,
      clayClass: CLAY_CLASSES.cardEmerald,
    },
    {
      step: "04",
      title: "REVIEW",
      subtitle: "Feedback & Refinement",
      desc: "Interactive client demo sessions, user experience testing, and collaborative revisions to ensure 100% alignment.",
      deliverables: "Collaborative Feedback • UI Polishing • Quality Assurance",
      icon: CheckCircle,
      clayClass: CLAY_CLASSES.cardCream,
    },
    {
      step: "05",
      title: "LAUNCH",
      subtitle: "Deployment & Delivery",
      desc: "Final production deployment, custom domain setup, database security checks, and handoff of all video assets.",
      deliverables: "Live Website/App • Production Asset Package • Admin Access",
      icon: Rocket,
      clayClass: CLAY_CLASSES.cardMustard,
    },
    {
      step: "06",
      title: "GROW",
      subtitle: "Support & Optimization",
      desc: "Ongoing post-launch technical maintenance, analytics monitoring, performance tuning, and scaling campaigns.",
      deliverables: "Ongoing Support • Performance Analytics • Future Scale",
      icon: TrendingUp,
      clayClass: CLAY_CLASSES.cardEmerald,
    },
  ];

  return (
    <section 
      id="process" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-mustard-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-brand/60">
                // PROJECT JOURNEY
              </span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              How We Work
            </h2>
          </div>
          <p className="font-inter text-xs sm:text-sm text-charcoal-brand/70 max-w-md font-medium">
            A transparent 6-step roadmap from initial consultation to launch and long-term business growth.
          </p>
        </div>

        {/* 6-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between bg-white/90 border-2 border-charcoal-brand/15 p-7 rounded-[28px] shadow-sm hover:shadow-xl hover:border-emerald-brand transition-all duration-300"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xl font-black text-emerald-brand bg-emerald-brand/10 border border-emerald-brand/20 px-3 py-1 rounded-xl">
                      //{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-charcoal-brand text-cream-brand flex items-center justify-center shadow-sm group-hover:bg-emerald-brand transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-outfit text-2xl font-black text-charcoal-brand uppercase mb-1 group-hover:text-emerald-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs font-bold text-mustard-brand uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-xs sm:text-sm text-charcoal-brand/80 leading-relaxed font-medium mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 border-t border-dashed border-charcoal-brand/15">
                  <span className="font-mono text-[9px] uppercase font-bold text-charcoal-brand/40 block mb-1">
                    KEY MILESTONE
                  </span>
                  <span className="font-mono text-[10px] font-bold text-charcoal-brand/80 block">
                    {item.deliverables}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
