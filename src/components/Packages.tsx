"use client";

import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Packages() {
  const tiers = [
    {
      name: "STARTUP",
      badge: "ESSENTIAL PRESENCE",
      price: "₹19,999",
      targetAudience: "For local shops & brands establishing a professional digital presence.",
      solves: "Solves: Weak online credibility & outdated template look.",
      features: [
        "Custom high-speed responsive website",
        "Brand identity & asset integrations",
        "Interactive lead contact & location map",
        "Mobile-first responsive architecture",
        "Search engine SEO indexing foundation",
        "Vercel production deployment & hosting setup"
      ],
      isPopular: false,
      cta: "Choose Startup",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "GROWTH",
      badge: "MOST RECOMMENDED",
      price: "₹49,999",
      targetAudience: "For growing businesses ready for custom web systems & media distribution.",
      solves: "Solves: Disconnected web tools, manual data tracking & low audience retention.",
      features: [
        "Full-stack custom web platform & dashboard",
        "Secure customer data & database management (Supabase SQL)",
        "Automated lead capture & instant email sync",
        "1 high-retention promo / video ad edit (Adobe AE)",
        "Advanced search SEO & social metadata indexing",
        "Custom domain setup & server performance tuning",
        "3 months included technical support & updates"
      ],
      isPopular: true,
      cta: "Get Growth System",
      themeClass: `${CLAY_CLASSES.cardMustard} relative md:scale-105 z-10`,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "ENTERPRISE",
      badge: "CUSTOM SCALE",
      price: "Custom",
      targetAudience: "For established businesses needing custom software, ERPs & multi-channel media.",
      solves: "Solves: Complex operational bottlenecks & scaling multi-platform marketing.",
      features: [
        "Custom web portal & companion mobile app",
        "Tailored ERP / business management architecture",
        "3 high-impact video & motion asset package",
        "Real-time analytics & automated reporting feeds",
        "Dedicated founder development channel",
        "12 months ongoing tech maintenance & priority support"
      ],
      isPopular: false,
      cta: "Consult Enterprise",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnEmerald,
    },
  ];

  return (
    <section 
      id="packages" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-charcoal-brand/10 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-mustard-brand rounded-full inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-brand/60">
                // TRANSPARENT MILESTONES
              </span>
            </div>
            <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand">
              Service Packages
            </h2>
          </div>
          <span className="font-mono text-xs text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
            CLEAR SCOPE & TRANSPARENT PRICING
          </span>
        </div>

        {/* Introduction text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="font-outfit text-3xl sm:text-4xl font-black text-charcoal-brand tracking-tight uppercase">
            CLEAR PRICING. DEFINED SCOPE.
          </h3>
          <p className="font-inter text-xs sm:text-sm text-charcoal-brand/75 mt-3 leading-relaxed font-medium">
            Choose a fixed package or consult with us for a custom solution. Every tier includes synchAD's clean engineering standards and direct founder execution.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-stretch pt-4">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`${tier.themeClass} p-8 flex flex-col justify-between rounded-[32px] shadow-lg border-2 border-charcoal-brand/20`}
            >
              <div>
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className={`absolute top-0 right-6 md:right-8 transform -translate-y-1/2 ${CLAY_CLASSES.cardEmerald} text-cream-brand font-outfit text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rotate-2 rounded-full z-20 shadow-md flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3 text-mustard-brand" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                {!tier.isPopular && (
                  <span className="font-mono text-[9px] font-bold text-charcoal-brand/50 uppercase tracking-widest block mb-1">
                    {tier.badge}
                  </span>
                )}

                {/* Tier Name & Price */}
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand uppercase">
                  {tier.name}
                </h3>
                <div className="mt-3 mb-4 flex items-baseline gap-1">
                  <span className="font-outfit text-4xl sm:text-5xl font-black text-charcoal-brand">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="font-mono text-xs text-charcoal-brand/60 font-bold">/ project</span>
                  )}
                </div>

                {/* Who It Is For & Solves */}
                <div className="space-y-2 mb-6 pb-4 border-b border-dashed border-charcoal-brand/20">
                  <p className="font-inter text-xs text-charcoal-brand/85 font-medium leading-relaxed">
                    {tier.targetAudience}
                  </p>
                  <p className="font-mono text-[10px] font-bold text-emerald-brand uppercase tracking-wider">
                    {tier.solves}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block font-black">
                    WHAT YOU GET
                  </span>
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-brand text-cream-brand flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 shadow-xs font-bold">
                        ✓
                      </div>
                      <span className="font-inter text-xs text-charcoal-brand font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Magnetic strength={0.2}>
                  <Link
                    href="#contact"
                    className={`${tier.buttonClass} w-full justify-center px-6 py-3.5 font-outfit font-black uppercase tracking-wider text-xs flex items-center gap-2 shadow-md active:scale-95 transition-all text-center`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-14 text-center">
          <p className="font-inter text-xs text-charcoal-brand/70 font-medium">
            Need a custom combination of Web Systems, Video Edits, and Marketing?{" "}
            <Link href="#contact" className="font-bold text-emerald-brand underline">
              Tell us what you're building &rarr;
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
