"use client";

import { Check, ArrowRight, Sparkles, BookOpen, GraduationCap, Stethoscope, Dumbbell, Coffee, Car, Info } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Packages() {
  const nicheList = [
    { icon: BookOpen, label: "Libraries", detail: "Seats & Dues" },
    { icon: GraduationCap, label: "Coaching", detail: "Batches & Fees" },
    { icon: Stethoscope, label: "Hospitals", detail: "Doctors & Slots" },
    { icon: Dumbbell, label: "Gyms & Clubs", detail: "Plans & Members" },
    { icon: Coffee, label: "Cafes", detail: "Digital Menu" },
    { icon: Car, label: "Rentals", detail: "Catalog & Booking" },
  ];

  const tiers = [
    {
      name: "Ultra-Basic Landing",
      price: "₹5,879",
      priceSuffix: "starts at (Negotiable!) *",
      badge: "Negotiable Rate",
      description: "Basic aesthetic single-page website layout for local businesses starting with zero fluff. Price can be negotiated down further!",
      features: [
        "Aesthetic single-page website design",
        "Free tier PostgreSQL Database via Supabase",
        "Essential basic backend data integration",
        "Direct WhatsApp & Phone call action buttons",
        "No Domain & Hosting included (Client setup)",
        "1 Month Free Debugging Period *"
      ],
      isPopular: false,
      cta: "Get Basic Website",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "Starter Landing Pack",
      price: "₹6,799",
      priceSuffix: "starts at *",
      badge: "All-Inclusive Entry",
      description: "High-converting, aesthetic single-page digital portal. Includes 1-year domain & hosting setup for complete peace of mind.",
      features: [
        "Aesthetic single-page landing site",
        "1-Year Domain & Hosting on Hostinger (Client's account) *",
        "Free tier PostgreSQL Database via Supabase",
        "Google Search Console & Analytics setup *",
        "Direct WhatsApp & Phone call action buttons",
        "3 Months Free Debugging Period *",
        "1 Month Free Dev Error Support *"
      ],
      isPopular: false,
      cta: "Get Starter Portal",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
    {
      name: "Custom WebApp Base",
      price: "₹10,899",
      priceSuffix: "starts at *",
      badge: "Scalable Logic",
      description: "Custom web applications with database integration & admin dashboard. Flexible structure where price scales with added features.",
      features: [
        "Full-stack Next.js web application",
        "1-Year Domain & Hosting on Hostinger (Client's account) *",
        "Free tier PostgreSQL Database via Supabase",
        "Client & inquiry management dashboard",
        "Advanced SEO & local search indexing",
        "3 Months Free Debugging Period *",
        "1 Month Free Dev Error Support *"
      ],
      isPopular: false,
      cta: "Build Custom WebApp",
      themeClass: CLAY_CLASSES.cardCream,
      buttonClass: CLAY_CLASSES.btnEmerald,
    },
    {
      name: "Niche WebApp + Landing",
      price: "₹13,799",
      priceSuffix: "complete package *",
      badge: "Best Value Framework",
      description: "Full-featured WebApp + high-impact landing page tailored specifically for local specialized businesses in Ambikapur & Surguja.",
      showNiches: true,
      features: [
        "Industry-tailored WebApp + High-converting Landing",
        "1-Year Domain & Hosting on Hostinger (Client's account) *",
        "Free tier PostgreSQL Database via Supabase",
        "Specialized dashboard (Seats / Admissions / Bookings)",
        "Full Google Search Console & Analytics integration *",
        "3 Months Free Debugging Period *",
        "1 Month Free Dev Error Support *"
      ],
      isPopular: true,
      cta: "Launch Niche WebApp",
      themeClass: `${CLAY_CLASSES.cardMustard} relative lg:scale-105 z-10`,
      buttonClass: CLAY_CLASSES.btnCharcoal,
    },
  ];

  return (
    <section 
      id="packages" 
      className="w-full border-b border-charcoal-brand py-20 px-6 sm:px-10 md:px-14 lg:px-16 bg-cream-brand"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 border-b border-charcoal-brand/10 pb-4 gap-4">
          <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-mustard-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            Service Packages
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/60 uppercase tracking-widest bg-white/60 px-3 py-1.5 rounded-full border border-charcoal-brand/10 w-fit">
            Negotiable Local Business Rates
          </span>
        </div>

        {/* Introduction text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-widest mb-3">
            // TRANSPARENT AMBIKAPUR PRICING (FLEXIBLE RATES)
          </p>
          <h3 className="font-outfit text-3xl sm:text-4xl font-black text-charcoal-brand tracking-tight">
            JUST START AS LOW AS <span className="text-emerald-brand underline decoration-mustard-brand decoration-wavy decoration-2">₹5,879/-</span> *
          </h3>
          <p className="font-mono text-xs font-bold text-mustard-brand uppercase tracking-wider mt-2">
            🤝 Rates are not fixed and can be negotiated down further based on your scope!
          </p>
          <p className="font-inter text-sm text-charcoal-brand/75 mt-3 leading-relaxed">
            From basic aesthetic single-page sites to full-fledged specialized web apps (Libraries, Coaching, Clinics, Gyms, Cafes & Rentals), we build high-impact digital portals at accessible local rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-6 items-stretch pt-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`h-full p-6 sm:p-7 flex flex-col justify-between ${tier.themeClass}`}
            >
              {tier.isPopular && (
                <div className={`absolute top-0 right-4 sm:right-6 transform -translate-y-1/2 ${CLAY_CLASSES.cardEmerald} text-cream-brand font-outfit text-[10px] font-black uppercase tracking-widest px-3.5 py-1 rotate-2 rounded-full z-20 shadow-md flex items-center gap-1.5`}>
                  <Sparkles className="w-3 h-3 text-mustard-brand" />
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/60 font-bold">
                    Tier 0{i + 1}
                  </span>
                  {!tier.isPopular && (
                    <span className="font-outfit text-[9px] font-bold uppercase tracking-wider bg-charcoal-brand/5 px-2 py-0.5 rounded-full text-charcoal-brand/70 border border-charcoal-brand/10">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-outfit text-xl sm:text-2xl font-black text-charcoal-brand tracking-tight mb-2">
                  {tier.name}
                </h4>
                
                {/* Price */}
                <div className="flex flex-col mb-4 border-b border-dashed border-charcoal-brand/15 pb-3">
                  <span className="font-outfit text-3xl sm:text-4xl font-black text-charcoal-brand">
                    {tier.price}
                  </span>
                  <span className="font-mono text-[10px] text-charcoal-brand/60 font-bold">
                    {tier.priceSuffix}
                  </span>
                </div>

                <p className="font-inter text-xs text-charcoal-brand/80 leading-relaxed mb-5 min-h-[52px]">
                  {tier.description}
                </p>

                {/* Specialized Niche Badges if Tier 3 */}
                {tier.showNiches && (
                  <div className="mb-5 bg-cream-brand/80 p-3 rounded-2xl border border-charcoal-brand/15">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal-brand/70 font-black block mb-2">
                      LOCAL NICHES:
                    </span>
                    <div className="grid grid-cols-2 gap-1">
                      {nicheList.map((niche, idx) => {
                        const IconComponent = niche.icon;
                        return (
                          <div 
                            key={idx} 
                            className="flex items-center gap-1 text-[10px] font-outfit font-bold text-charcoal-brand bg-white px-1.5 py-1 rounded-lg border border-charcoal-brand/10 shadow-2xs"
                          >
                            <IconComponent className="w-3 h-3 text-emerald-brand flex-shrink-0" />
                            <span className="truncate">{niche.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-charcoal-brand/50 font-black block">
                    DELIVERABLES SUMMARY:
                  </span>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-inter text-charcoal-brand/90">
                      <Check className="w-3.5 h-3.5 text-emerald-brand flex-shrink-0 mt-0.5" />
                      <span className="leading-snug text-[11px] sm:text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Button */}
              <div className="pt-4 mt-auto w-full">
                <Magnetic strength={0.25}>
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center text-center gap-2 px-4 py-3.5 font-outfit font-black uppercase tracking-wider text-xs sm:text-sm cursor-pointer shadow-md ${tier.buttonClass}`}
                  >
                    <span className="text-center truncate">{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Asterisk Disclaimer & Transparent Inclusions Footer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 rounded-[28px] bg-white border-2 border-charcoal-brand/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-brand/10 text-emerald-brand rounded-2xl flex-shrink-0 mt-1 sm:mt-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-outfit font-black text-base sm:text-lg text-charcoal-brand uppercase flex items-center gap-2">
                * Transparent Package Inclusion &amp; Debugging Policy
              </h4>
              <p className="font-inter text-xs text-charcoal-brand/80 mt-1.5 max-w-3xl leading-relaxed">
                <span className="font-bold text-charcoal-brand">Flexible &amp; Negotiable Rates:</span> Starting price of ₹5,879/- is negotiable based on your specific requirements. <br />
                <span className="font-bold text-charcoal-brand">3 Months Debugging &amp; 1 Month Dev Error Plans:</span> All main packages (₹6,799+) include <strong>3 Months of Free Debugging + 1 Month of Free Development Error/Change Support</strong>. The ₹5,879 basic plan includes 1 Month of Free Debugging. <br />
                <span className="font-bold text-charcoal-brand">1-Year Domain &amp; Hostinger Setup:</span> Included in ₹6,799+ packages directly inside client&apos;s Hostinger account. All plans utilize free tier Supabase database.
              </p>
            </div>
          </div>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="whitespace-nowrap px-6 py-3.5 bg-charcoal-brand text-cream-brand font-outfit font-black text-xs uppercase tracking-wider rounded-full hover:bg-emerald-brand transition-colors flex-shrink-0 shadow-md inline-flex items-center gap-2"
            >
              Get Custom Quote
              <ArrowRight className="w-3.5 h-3.5 text-mustard-brand" />
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
