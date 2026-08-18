"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Packages() {
  const tiers = [
    {
      name: "Startup Pack",
      price: "₹19,999",
      description: "Standard customized landing portal or digital catalog. Excellent for local shops establishing their first solid online presence.",
      features: [
        "Responsive Next.js static website",
        "Branding & asset integrations",
        "Clean line-work vector icons",
        "Interactive contact/map module",
        "Basic SEO setup",
        "Deployment on Vercel"
      ],
      isPopular: false,
      cta: "Configure Startup",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "Growth Pack",
      price: "₹49,999",
      description: "Custom full-stack web application + database integration, plus 1 high-impact motion edit asset. Our most recommended package.",
      features: [
        "Full stack Next.js web platform",
        "Supabase PostgreSQL database",
        "Client/Visitor management dashboard",
        "1 corporate motion graphic video ad (15s)",
        "Advanced SEO & metadata indexing",
        "Contact form & automated mail sync",
        "3 months post-launch tech support"
      ],
      isPopular: true,
      cta: "Initialize Growth",
      themeClass: `${CLAY_CLASSES.cardMustard} relative md:scale-105 z-10`,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "Enterprise Core",
      price: "Custom",
      description: "Complete localized business digitization framework. Features custom webs, companion apps, and dynamic motion post-production pipelines.",
      features: [
        "Tailored web portal + companion mobile app",
        "Complex database schema & auth policies",
        "Adobe AE/Premiere video package (3 ads)",
        "Supabase real-time status feeds",
        "Custom domain setup & server caching",
        "Dedicated project developer channel",
        "12 months ongoing tech maintenance"
      ],
      isPopular: false,
      cta: "Consult Strategy",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnEmerald,
    },
  ];

  return (
    <section 
      id="packages" 
      className="w-full border-b border-charcoal-brand py-20 px-6 md:px-12 bg-cream-brand"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-mustard-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            Service Packages
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50">Pricing & Scope Configurator</span>
        </div>

        {/* Introduction text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-widest mb-3">
            // TRANSPARENT MILESTONES
          </p>
          <h3 className="font-outfit text-4xl font-black text-charcoal-brand tracking-tight">
            SELECT YOUR PORTAL FRAMEWORK
          </h3>
          <p className="font-inter text-sm text-charcoal-brand/70 mt-3 leading-relaxed">
            Choose a boilerplate scale or customize your engineering layout. All packages include synchAD’s clean print design language.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 items-stretch pt-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`h-full p-8 flex flex-col justify-between ${tier.themeClass}`}
            >
              {tier.isPopular && (
                <div className={`absolute top-0 right-6 md:right-8 transform -translate-y-1/2 ${CLAY_CLASSES.cardEmerald} text-cream-brand font-outfit text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rotate-2 rounded-full z-20 shadow-md`}>
                  Best Value Framework
                </div>
              )}

              <div>
                {/* Header */}
                <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal-brand/50 block mb-1">
                  Scope // 0{i + 1}
                </span>
                <h4 className="font-outfit text-2xl font-black text-charcoal-brand tracking-tight mb-2">
                  {tier.name}
                </h4>
                
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 border-b border-dashed border-charcoal-brand/10 pb-4">
                  <span className="font-outfit text-4xl font-black text-charcoal-brand">
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-charcoal-brand/50">
                    / flat rate
                  </span>
                </div>

                <p className="font-inter text-xs text-charcoal-brand/75 leading-relaxed mb-6 min-h-[50px]">
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-brand/40 font-black block">
                    DELIVERABLES SUMMARY:
                  </span>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-inter text-charcoal-brand/90">
                      <Check className="w-4 h-4 text-emerald-brand flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Button */}
              <div className="pt-4 mt-auto">
                <Magnetic strength={0.25}>
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 font-outfit font-black uppercase tracking-wider text-xs cursor-pointer ${tier.buttonClass}`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
