"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Video, TrendingUp, Layers } from "lucide-react";
import { CLAY_CLASSES } from "./ClayStyles";

interface CaseStudy {
  id: string;
  title: string;
  category: "BUILD" | "CREATE" | "GROW";
  categoryLabel: string;
  industry: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  badgeColor: string;
  icon: any;
  mockupTag: string;
  visualBg: string;
}

export default function Work() {
  const projects: CaseStudy[] = [
    {
      id: "kryto-erp",
      title: "Kryto Operations & Management ERP",
      category: "BUILD",
      categoryLabel: "BUILD • Web Systems",
      industry: "Enterprise Software & ERP",
      challenge: "Manual inventory tracking and disconnected client operations caused workflow delays.",
      solution: "Engineered a custom full-stack web ERP with real-time database feeds and automated client status tracking.",
      deliverables: ["Custom Web Dashboard", "PostgreSQL Database Schema", "Real-Time Feed API", "Role Auth"],
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/30",
      icon: Code,
      mockupTag: "ENTERPRISE SYSTEM",
      visualBg: CLAY_CLASSES.cardEmerald,
    },
    {
      id: "aura-craft",
      title: "Aura Craft E-Commerce Platform",
      category: "BUILD",
      categoryLabel: "BUILD • E-Commerce",
      industry: "Retail & Consumer Goods",
      challenge: "Slow mobile loading times and clunky checkout steps reduced overall online conversions.",
      solution: "Built a high-speed, mobile-optimized custom online store with instant payment checkout and inventory sync.",
      deliverables: ["Responsive Storefront", "Secure Payment Gateway", "Inventory Dashboard", "SEO Architecture"],
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      badgeColor: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30",
      icon: Layers,
      mockupTag: "E-COMMERCE PORTAL",
      visualBg: CLAY_CLASSES.cardMustard,
    },
    {
      id: "apex-media",
      title: "Apex High-Retention YouTube & Motion Asset Series",
      category: "CREATE",
      categoryLabel: "CREATE • Visual Media",
      industry: "Digital Media & Creator Brand",
      challenge: "High viewer drop-off in the first 30 seconds of long-form video content.",
      solution: "Crafted fast-paced motion graphics, hook-optimized intro sequences, and color-graded video cuts.",
      deliverables: ["YouTube Long-Form Edits", "Viral Reels/Shorts Cuts", "Custom 2D/3D Motion FX", "Sound Design"],
      techStack: ["After Effects", "Premiere Pro", "DaVinci Resolve"],
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/30",
      icon: Video,
      mockupTag: "HIGH-RETENTION MEDIA",
      visualBg: CLAY_CLASSES.cardEmerald,
    },
    {
      id: "growth-funnel",
      title: "Local Growth & Content Funnel System",
      category: "GROW",
      categoryLabel: "GROW • Digital Strategy",
      industry: "Professional Local Services",
      challenge: "Low organic reach and unstructured ad campaigns led to high customer acquisition costs.",
      solution: "Implemented targeted Meta Ads campaigns backed by a lead-capture landing page and social funnel.",
      deliverables: ["Meta Ads Campaign", "Targeted Landing Page", "Content Strategy Funnel", "Lead Analytics"],
      techStack: ["Meta Ads Manager", "Google Analytics", "Figma", "SEO"],
      badgeColor: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30",
      icon: TrendingUp,
      mockupTag: "GROWTH CAMPAIGN",
      visualBg: CLAY_CLASSES.cardMustard,
    },
  ];

  return (
    <section 
      id="work" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-emerald-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-brand">
                // PROOF & DELIVERABLES
              </span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              Selected Work
            </h2>
          </div>
          <p className="font-inter text-xs sm:text-sm text-charcoal-brand/70 max-w-md font-medium">
            Recent custom systems, creative media packages, and growth campaigns engineered for our clients.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between bg-white/90 border-2 border-charcoal-brand/15 p-7 sm:p-8 rounded-[32px] shadow-md hover:shadow-2xl hover:border-emerald-brand transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Top Bar: Category Pill & Industry */}
                  <div className="flex items-center justify-between gap-3 mb-5 border-b border-dashed border-charcoal-brand/15 pb-4">
                    <span className={`font-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 border rounded-xl ${project.badgeColor}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-charcoal-brand/50 uppercase tracking-wider">
                      {project.industry}
                    </span>
                  </div>

                  {/* Title & Challenge */}
                  <h3 className="font-outfit text-2xl sm:text-3xl font-black text-charcoal-brand mb-3 group-hover:text-emerald-brand transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-6 h-6 text-charcoal-brand/40 group-hover:text-emerald-brand group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                  </h3>

                  {/* Solution Summary */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-charcoal-brand/50 block mb-0.5">
                        THE CHALLENGE
                      </span>
                      <p className="font-inter text-xs text-charcoal-brand/80 font-medium leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-emerald-brand block mb-0.5">
                        WHAT WE BUILT
                      </span>
                      <p className="font-inter text-xs text-charcoal-brand/90 font-medium leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Deliverables Pills */}
                  <div className="pt-4 border-t border-dashed border-charcoal-brand/15 mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block mb-2 font-black">
                      Key Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono font-bold px-2.5 py-0.5 bg-cream-brand text-charcoal-brand/85 border border-charcoal-brand/15 rounded-lg"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer: Tech Stack Tags & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-charcoal-brand/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-mono font-bold text-charcoal-brand/50 uppercase"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="font-outfit text-xs font-black uppercase tracking-wider text-emerald-brand hover:underline flex items-center gap-1"
                    >
                      <span>Start Similar Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-charcoal-brand text-cream-brand border-2 border-charcoal-brand rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-outfit text-xl sm:text-2xl font-black uppercase text-cream-brand mb-1">
              Have a custom project in mind?
            </h4>
            <p className="font-inter text-xs sm:text-sm text-cream-brand/80 font-medium">
              We design, build, and distribute custom digital systems tailored to your exact business goals.
            </p>
          </div>
          
          <Link
            href="#contact"
            className={`${CLAY_CLASSES.btnMustard} flex-shrink-0 px-7 py-3 font-outfit text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all`}
          >
            Start Your Project &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
