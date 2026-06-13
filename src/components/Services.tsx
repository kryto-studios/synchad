"use client";

import { Code2, Smartphone, Film, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Services() {
  const serviceCards = [
    {
      id: "srv-webs",
      title: "WEBS",
      subtitle: "Web Development",
      description: "Custom full-stack platforms, client visitor portals, and highly responsive management dashboards. Crafted for maximum speed and SEO optimization.",
      bulletPoints: ["Next.js & React Core", "Supabase PostgreSQL Database", "Custom API Integrations", "Optimized Core Web Vitals"],
      themeColor: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand hover:shadow-[#062c21]",
      accentColor: "bg-emerald-brand text-cream-brand",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      id: "srv-app",
      title: "APP",
      subtitle: "Application Development",
      description: "Tailored mobile apps and specialized system setups. Cross-platform applications built with clean visual components for responsive user experiences.",
      bulletPoints: ["Hybrid Mobile Architectures", "Custom Workflows", "Supabase Auth & Syncing", "Figma UI/UX Mockups"],
      themeColor: "bg-mustard-brand/10 text-mustard-brand border-mustard-brand hover:shadow-[#f5b02e]",
      accentColor: "bg-mustard-brand text-charcoal-brand",
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      id: "srv-edits",
      title: "EDITS",
      subtitle: "Creative & Motion Production",
      description: "Post-production timelines, high-impact motion graphics, corporate video ads, and dynamic media assets that elevate branding visuals.",
      bulletPoints: ["Premiere Pro timelines", "After Effects Motion design", "Color Grading & Mix", "Asset delivery packaging"],
      themeColor: "bg-charcoal-brand/10 text-charcoal-brand border-charcoal-brand hover:shadow-[#1a1a1a]",
      accentColor: "bg-charcoal-brand text-cream-brand",
      icon: <Film className="w-8 h-8" />,
    },
  ];

  return (
    <section 
      id="services" 
      className="w-full border-b border-charcoal-brand py-20 px-6 md:px-12 bg-cream-brand"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-3xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-emerald-brand border border-charcoal-brand rounded-full inline-block" />
            Core Offerings
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50">WEB | APP | EDITS</span>
        </div>

        {/* Introductory slogan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <h3 className="font-outfit text-4xl sm:text-5xl font-black text-charcoal-brand tracking-tight">
              &ldquo;DIGITALIZING THE LOCAL&rdquo; BY BLENDING WEB ENGINEERING & CREATIVE MEDIA.
            </h3>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="font-inter text-sm text-charcoal-brand/70 leading-relaxed">
              We take offline workflows, standard services, and localized business goals, packaging them into premium, modern custom portals that engage users.
            </p>
          </div>
        </div>

        {/* Services Split Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, i) => {
            // Map service index to claymorphic icon badge classes
            const iconClayClass = 
              card.id === "srv-app" 
                ? `${CLAY_CLASSES.cardMustard} text-charcoal-brand` 
                : `${CLAY_CLASSES.cardEmerald} text-cream-brand`;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group ${CLAY_CLASSES.cardCream} p-8 flex flex-col justify-between`}
              >
                <div>
                  {/* Magnetic Service Icon Box */}
                  <div className="flex justify-between items-start mb-8">
                    <Magnetic strength={0.3}>
                      <div className={`w-14 h-14 flex items-center justify-center p-0 ${iconClayClass}`}>
                        {card.icon}
                      </div>
                    </Magnetic>
                    
                    <span className="font-mono text-xs font-bold text-charcoal-brand/30">
                      0{i + 1} // 03
                    </span>
                  </div>

                  {/* Service Headers */}
                  <h4 className="font-outfit text-3xl font-black text-charcoal-brand tracking-tight">
                    {card.title}
                  </h4>
                  <p className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-wider mt-1 mb-4">
                    {card.subtitle}
                  </p>
                  
                  <p className="font-inter text-sm text-charcoal-brand/75 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Bullet Points List */}
                  <div className="border-t border-dashed border-charcoal-brand/10 pt-6">
                    <h5 className="font-mono text-[10px] uppercase tracking-widest text-charcoal-brand/40 mb-3 font-black">
                      Ecosystem Modules
                    </h5>
                    <ul className="flex flex-col gap-2">
                      {card.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-center gap-2 text-xs font-mono text-charcoal-brand/80">
                          <span className="w-2 h-2 bg-mustard-brand border border-charcoal-brand rounded-full flex-shrink-0" />
                          {bp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-brand group-hover:text-emerald-brand group-hover:underline transition-colors"
                >
                  Configure setup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
