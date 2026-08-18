"use client";

import { Code2, Film, TrendingUp, ArrowRight, CheckCircle2, ShieldCheck, Users, Headphones, Sparkles, Layers } from "lucide-react";
import Magnetic from "./Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Services() {
  const serviceCards = [
    {
      id: "srv-build",
      title: "BUILD",
      subtitle: "Web Development & Digital Systems",
      outcome: "Secure data systems, fast custom web platforms, and automated dashboards that help your business manage operations efficiently.",
      deliverables: [
        "Business Websites & Landing Pages",
        "E-Commerce Online Stores",
        "Custom Web Applications & Dashboards",
        "Database Architecture & API Integrations",
        "Booking & Business Automation Systems",
      ],
      tools: ["React", "Next.js", "Django", "Python", "Node.js", "Supabase SQL", "Tailwind CSS"],
      badgeClass: `${CLAY_CLASSES.cardEmerald} text-cream-brand`,
      accentText: "text-emerald-brand",
      icon: <Code2 className="w-7 h-7" />,
    },
    {
      id: "srv-create",
      title: "CREATE",
      subtitle: "Creative Media & Visual Storytelling",
      outcome: "Engaging visual content with strong hooks, high viewer retention, and consistent brand presentation designed for social platforms.",
      deliverables: [
        "High-Retention YouTube Video Edits",
        "Viral Reels & Shorts Short-Form Media",
        "Commercial Promo & Product Cuts",
        "Motion Graphics & Visual FX",
        "Brand Visuals & Color Grading",
      ],
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Figma"],
      badgeClass: `${CLAY_CLASSES.cardMustard} text-charcoal-brand`,
      accentText: "text-mustard-brand",
      icon: <Film className="w-7 h-7" />,
    },
    {
      id: "srv-grow",
      title: "GROW",
      subtitle: "Digital Marketing & Distribution",
      outcome: "Data-backed advertising campaigns and distribution funnels designed to bring more attention, qualified leads, and paying customers.",
      deliverables: [
        "Social Media Management & Strategy",
        "Meta Ads & Google Ads Campaigns",
        "Content Strategy & Lead Funnels",
        "Local SEO & Search Visibility",
        "Analytics & Conversion Optimization",
      ],
      tools: ["Meta Ads Manager", "Google Analytics", "SEO Tooling", "Figma"],
      badgeClass: `${CLAY_CLASSES.cardCream} text-charcoal-brand border-2 border-charcoal-brand/20`,
      accentText: "text-charcoal-brand",
      icon: <TrendingUp className="w-7 h-7" />,
    },
  ];

  const valueProps = [
    {
      title: "ONE TEAM. ONE SYSTEM.",
      desc: "Web development, video creation, and marketing executed under one roof without managing separate freelancers or agencies.",
      badge: "INTEGRATED PARTNER",
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/30",
      icon: Layers,
    },
    {
      title: "BUILT AROUND YOUR BUSINESS",
      desc: "No unnecessary templates or bloated solutions. Every web system and creative video is engineered around your client needs.",
      badge: "CUSTOM SOLUTIONS",
      badgeColor: "bg-mustard-brand/15 text-charcoal-brand border-mustard-brand/40",
      icon: Sparkles,
    },
    {
      title: "DIRECT FOUNDER INVOLVEMENT",
      desc: "Work directly with founders Dewansh Chatterjee and Aryan Gupta from initial strategy and design through final production launch.",
      badge: "FOUNDER-LED",
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/30",
      icon: Users,
    },
    {
      title: "LONG-TERM TECHNICAL SUPPORT",
      desc: "Our partnership doesn't end at launch. We provide ongoing technical maintenance, system updates, and scaling support.",
      badge: "ONGOING SUPPORT",
      badgeColor: "bg-mustard-brand/15 text-charcoal-brand border-mustard-brand/40",
      icon: Headphones,
    },
    {
      title: "TRANSPARENT PROCESS & PRICING",
      desc: "Clear project milestones, defined deliverables, and transparent pricing without unexpected hidden costs.",
      badge: "CLEAR MILESTONES",
      badgeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/30",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="services"
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-emerald-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-brand">
                // THREE INTEGRATED PILLARS
              </span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              Core Capabilities
            </h2>
          </div>
          <p className="font-inter text-xs sm:text-sm text-charcoal-brand/70 max-w-md font-medium">
            BUILD, CREATE, and GROW operating as ONE unified digital growth system for local businesses.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between bg-white/90 border-2 border-charcoal-brand/15 p-7 rounded-[32px] shadow-md hover:shadow-2xl hover:border-emerald-brand transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="p-3 bg-cream-brand border-2 border-charcoal-brand/20 rounded-2xl text-charcoal-brand group-hover:border-emerald-brand group-hover:text-emerald-brand transition-colors">
                    {service.icon}
                  </div>
                  <span className={`font-mono text-xs font-black uppercase tracking-widest px-3 py-1 rounded-xl shadow-xs ${service.badgeClass}`}>
                    {service.title}
                  </span>
                </div>

                {/* Service Titles */}
                <h3 className="font-outfit text-2xl font-black text-charcoal-brand mb-1 group-hover:text-emerald-brand transition-colors">
                  {service.title}
                </h3>
                <p className="font-mono text-xs font-bold text-mustard-brand uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>

                {/* Business Outcome Focus */}
                <p className="font-inter text-xs sm:text-sm text-charcoal-brand/85 leading-relaxed font-medium mb-6">
                  {service.outcome}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6 border-t border-dashed border-charcoal-brand/15 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block mb-2 font-black">
                    What You Get
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-inter font-semibold text-charcoal-brand">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tools & Action Link */}
              <div className="pt-4 border-t border-charcoal-brand/10">
                <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block mb-2 font-black">
                  Powered By
                </span>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-bold px-2.5 py-0.5 bg-charcoal-brand/5 text-charcoal-brand border border-charcoal-brand/15 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="font-outfit text-xs font-black uppercase tracking-wider text-emerald-brand hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Start {service.title} Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose synchAD Value Props Section */}
        <div className="mt-20 border-t border-charcoal-brand/15 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-widest block mb-2">
              // VALUE PROPOSITION
            </span>
            <h3 className="font-outfit text-3xl sm:text-4xl font-black uppercase text-charcoal-brand">
              Why Choose synchAD?
            </h3>
            <p className="font-inter text-xs sm:text-sm text-charcoal-brand/75 mt-2 leading-relaxed">
              We combine software engineering, creative media, and digital marketing into ONE unified growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {valueProps.map((vp, index) => {
              const Icon = vp.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 border border-charcoal-brand/15 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Icon className="w-5 h-5 text-emerald-brand" />
                      <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 border rounded-lg ${vp.badgeColor}`}>
                        {vp.badge}
                      </span>
                    </div>
                    <h4 className="font-outfit text-lg font-black uppercase text-charcoal-brand mb-2">
                      {vp.title}
                    </h4>
                    <p className="font-inter text-xs text-charcoal-brand/80 leading-relaxed font-medium">
                      {vp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
