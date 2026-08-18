"use client";

import { Code2, Film, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Services() {
  const serviceCards = [
    {
      id: "srv-software",
      title: "SOFTWARE DEV",
      subtitle: "Full-Stack & Engineering",
      summary: "Production-grade web applications, custom internal tools, and high-performance backends tailored for scale.",
      deliverables: [
        "Custom Web Apps",
        "RESTful APIs",
        "Database Architecture (SQL/PostgreSQL)",
        "ERP & Management Systems",
        "Responsive UIs",
      ],
      tools: ["React", "Next.js", "Django", "Python", "Node.js", "Supabase", "Tailwind CSS"],
      badgeClass: `${CLAY_CLASSES.cardEmerald} text-cream-brand`,
      accentText: "text-emerald-brand",
      icon: <Code2 className="w-7 h-7" />,
    },
    {
      id: "srv-video",
      title: "CREATIVE MEDIA",
      subtitle: "Video Editing & VFX",
      summary: "Engaging visual storytelling designed to retain attention, elevate brand perception, and convert viewers.",
      deliverables: [
        "High-Retention YouTube Long-Form",
        "Viral Reels & Shorts",
        "Commercial Promo Cuts",
        "Motion Graphics & Visual Effects",
        "Color Grading",
      ],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      badgeClass: `${CLAY_CLASSES.cardMustard} text-charcoal-brand`,
      accentText: "text-mustard-brand",
      icon: <Film className="w-7 h-7" />,
    },
    {
      id: "srv-marketing",
      title: "GROWTH & ADS",
      subtitle: "Social Media & Marketing",
      summary: "Data-backed distribution strategies that scale reach, optimize conversions, and build authentic brand communities.",
      deliverables: [
        "Social Media Management",
        "Content Funnel Strategy",
        "Performance Marketing Campaigns",
        "SEO & Audience Growth",
      ],
      tools: ["Meta Ads Manager", "Google Analytics", "SEO Tooling", "Figma"],
      badgeClass: `${CLAY_CLASSES.cardCream} text-charcoal-brand border-2 border-charcoal-brand/20`,
      accentText: "text-charcoal-brand",
      icon: <TrendingUp className="w-7 h-7" />,
    },
  ];

  const valueProps = [
    {
      title: "End-to-End Execution",
      desc: "We handle both code and content—no need to manage separate dev agencies and creative freelancers.",
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20",
    },
    {
      title: "Modern & Scalable Codebases",
      desc: "Built with clean architecture, robust security, and fast load speeds.",
      badgeColor: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30",
    },
    {
      title: "Retention-Focused Media",
      desc: "Edits and marketing campaigns engineered specifically to capture and hold user attention.",
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20",
    },
  ];

  return (
    <section
      id="services"
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-emerald-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            Core Capabilities
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
            SOFTWARE • MEDIA • GROWTH
          </span>
        </div>

        {/* Introductory Header Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <h3 className="font-bacley text-5xl sm:text-6xl lg:text-7xl text-charcoal-brand leading-[0.92] tracking-tight">
              Production-grade code. Attention-grabbing media.
            </h3>
          </div>
          <div className="lg:col-span-4">
            <p className="font-inter text-sm text-charcoal-brand/80 leading-relaxed font-medium">
              We bridge software engineering and creative distribution under one roof—building products that scale and content that converts.
            </p>
          </div>
        </div>

        {/* Services Split Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group ${CLAY_CLASSES.cardCream} p-7 sm:p-8 flex flex-col justify-between h-full`}
            >
              <div>
                {/* Header Icon & Index */}
                <div className="flex justify-between items-start mb-6">
                  <Magnetic strength={0.3}>
                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${card.badgeClass}`}>
                      {card.icon}
                    </div>
                  </Magnetic>

                  <span className="font-mono text-xs font-bold text-charcoal-brand/30">
                    0{i + 1} // 03
                  </span>
                </div>

                {/* Service Titles */}
                <h4 className="font-outfit text-3xl sm:text-4xl font-black text-charcoal-brand tracking-tight">
                  {card.title}
                </h4>
                <p className={`font-mono text-xs font-bold ${card.accentText} uppercase tracking-wider mt-1 mb-4`}>
                  {card.subtitle}
                </p>

                {/* Summary */}
                <p className="font-inter text-sm text-charcoal-brand/80 leading-relaxed mb-6 font-medium">
                  {card.summary}
                </p>

                {/* Deliverables List */}
                <div className="border-t border-dashed border-charcoal-brand/15 pt-5 mb-6">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-charcoal-brand/50 mb-3 font-black">
                    Key Deliverables
                  </h5>
                  <ul className="flex flex-col gap-2">
                    {card.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs font-mono text-charcoal-brand/85 font-semibold">
                        <span className="w-1.5 h-1.5 bg-mustard-brand border border-charcoal-brand rounded-full flex-shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Tech Stack */}
                <div className="border-t border-dashed border-charcoal-brand/15 pt-4">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-charcoal-brand/50 mb-2.5 font-black">
                    Tools & Stack
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono font-bold px-2.5 py-1 bg-charcoal-brand/5 text-charcoal-brand border border-charcoal-brand/15 rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-charcoal-brand/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-charcoal-brand group-hover:text-emerald-brand transition-colors"
                >
                  <span>Start Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Why Choose SynchAD Tech (Value Propositions) ──────── */}
        <div className="mt-20 pt-12 border-t border-charcoal-brand/15">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-widest block mb-2">
              // WHY CHOOSE SYNCHAD TECH
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl font-black text-charcoal-brand uppercase tracking-tight">
              Engineered For Scale. Designed To Convert.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((vp, vIdx) => (
              <div
                key={vIdx}
                className={`${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-brand flex-shrink-0" />
                    <h4 className="font-outfit text-lg font-black text-charcoal-brand">
                      {vp.title}
                    </h4>
                  </div>
                  <p className="font-inter text-xs text-charcoal-brand/80 leading-relaxed font-medium">
                    {vp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
