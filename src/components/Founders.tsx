"use client";

import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { CLAY_CLASSES } from "./ClayStyles";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Founders() {
  const skills = [
    { name: "React & Next.js", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-sm" },
    { name: "Django & Python", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-sm" },
    { name: "Supabase & SQL", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-sm" },
    { name: "Node.js & APIs", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-sm" },
    { name: "Premiere Pro", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-sm" },
    { name: "After Effects", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-sm" },
    { name: "DaVinci Resolve", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-sm" },
    { name: "Meta Ads & SEO", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-sm" },
  ];

  const valuePillars = [
    {
      title: "End-to-End Execution",
      desc: "Code and content under one roof. No separate agencies needed.",
      tag: "FULL STACK + MEDIA",
    },
    {
      title: "Modern & Scalable Codebases",
      desc: "Clean architecture, robust security, and fast load speeds.",
      tag: "PERFORMANCE",
    },
    {
      title: "Retention-Focused Media",
      desc: "Edits and campaigns engineered to hold viewer attention and convert.",
      tag: "HIGH RETENTION",
    },
  ];

  // Draw a premium mockup QR Code in SVG
  const QRCodeSVG = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 text-charcoal-brand">
      <rect x="5" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="9" y="9" width="14" height="14" fill="currentColor" />
      <rect x="73" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="77" y="9" width="14" height="14" fill="currentColor" />
      <rect x="5" y="73" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="9" y="77" width="14" height="14" fill="currentColor" />
      <rect x="35" y="5" width="6" height="6" fill="currentColor" />
      <rect x="47" y="11" width="12" height="6" fill="currentColor" />
      <rect x="35" y="23" width="6" height="6" fill="currentColor" />
      <rect x="61" y="23" width="6" height="12" fill="currentColor" />
      
      <rect x="5" y="35" width="12" height="6" fill="currentColor" />
      <rect x="23" y="35" width="6" height="6" fill="currentColor" />
      <rect x="47" y="35" width="6" height="12" fill="currentColor" />
      
      <rect x="11" y="47" width="6" height="6" fill="currentColor" />
      <rect x="29" y="47" width="12" height="6" fill="currentColor" />
      <rect x="53" y="47" width="6" height="6" fill="currentColor" />
      <rect x="77" y="35" width="18" height="6" fill="currentColor" />
      
      <rect x="77" y="47" width="6" height="18" fill="currentColor" />
      <rect x="89" y="53" width="6" height="6" fill="currentColor" />

      <rect x="35" y="59" width="12" height="6" fill="currentColor" />
      <rect x="53" y="59" width="6" height="12" fill="currentColor" />
      <rect x="65" y="53" width="6" height="6" fill="currentColor" />

      <rect x="35" y="71" width="6" height="6" fill="currentColor" />
      <rect x="47" y="77" width="12" height="6" fill="currentColor" />
      <rect x="35" y="89" width="18" height="6" fill="currentColor" />
      
      <rect x="65" y="71" width="6" height="18" fill="currentColor" />
      <rect x="77" y="77" width="12" height="6" fill="currentColor" />
      <rect x="89" y="83" width="6" height="12" fill="currentColor" />
      <rect x="47" y="47" width="6" height="6" fill="currentColor" />
    </svg>
  );

  return (
    <section 
      id="team" 
      className="w-full border-b border-charcoal-brand py-20 px-6 md:px-12 bg-cream-brand select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-4xl sm:text-5xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-3">
            <span className="w-4 h-4 bg-mustard-brand border border-charcoal-brand rounded-full inline-block flex-shrink-0" />
            About The Founders
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50 uppercase tracking-widest hidden sm:inline-block">
            DIRECT FOUNDER EXECUTION
          </span>
        </div>

        {/* Co-founder Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Dewansh Chatterjee */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch h-full">
            <div className="relative flex-shrink-0 mx-auto sm:mx-0">
              <div className={`${CLAY_CLASSES.cardMustard} absolute -inset-2 transform -rotate-3 pointer-events-none rounded-[32px]`} />
              <div className="relative w-52 sm:w-56 h-64 border border-charcoal-brand/35 rounded-3xl overflow-hidden bg-charcoal-brand shadow-lg">
                <Image
                  src="/DEWANSH O_O.jpeg"
                  alt="Dewansh Chatterjee"
                  fill
                  sizes="(max-width: 768px) 208px, 224px"
                  className="object-cover object-top contrast-110 brightness-100"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-charcoal-brand text-cream-brand border border-cream-brand text-[9px] sm:text-[10px] font-mono px-3 py-1 uppercase tracking-widest rounded-full shadow-md z-10">
                Co-Founder
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand mb-1">
                  Dewansh Chatterjee
                </h3>
                <p className="font-mono text-xs font-bold text-emerald-brand uppercase tracking-wider mb-3">
                  Front-End, Creative Direction, Client Consultation & Idea Conception
                </p>
                <p className="font-inter text-sm text-charcoal-brand/85 leading-relaxed font-medium">
                  Drives end-to-end software execution, agile development lifecycles, and client operations to ensure reliable, on-time project delivery.
                </p>
              </div>
              
              <div className="mt-6 border-t border-dashed border-charcoal-brand/15 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block mb-2 font-black">
                  Core Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Front-End Architecture", "Creative Direction", "Client Consultation", "Agile Execution"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-bold px-2.5 py-1 border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Aryan Gupta */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch h-full">
            <div className="relative flex-shrink-0 mx-auto sm:mx-0">
              <div className={`${CLAY_CLASSES.cardEmerald} absolute -inset-2 transform rotate-2 pointer-events-none rounded-[32px]`} />
              <div className="relative w-52 sm:w-56 h-64 border border-charcoal-brand/35 rounded-3xl overflow-hidden bg-charcoal-brand shadow-lg">
                <Image
                  src="/aryan_proxy_v2.png"
                  alt="Aryan Gupta"
                  fill
                  sizes="(max-width: 768px) 208px, 224px"
                  className="object-cover object-top contrast-110 brightness-100"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-charcoal-brand text-cream-brand border border-cream-brand text-[9px] sm:text-[10px] font-mono px-3 py-1 uppercase tracking-widest rounded-full shadow-md z-10">
                Co-Founder
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand mb-1">
                  Aryan Gupta
                </h3>
                <p className="font-mono text-xs font-bold text-mustard-brand uppercase tracking-wider mb-3">
                  Database Architecture, Backend Systems & Post-delivery Client Operations
                </p>
                <p className="font-inter text-sm text-charcoal-brand/85 leading-relaxed font-medium">
                  Specializes in architecting scalable database systems, full-stack web platforms, and directing high-conversion visual storytelling workflows.
                </p>
              </div>
              
              <div className="mt-6 border-t border-dashed border-charcoal-brand/15 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal-brand/50 block mb-2 font-black">
                  Core Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {["Database Architecture", "Backend Systems", "Post-Delivery Operations", "Supabase SQL"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-bold px-2.5 py-1 border border-mustard-brand/30 bg-mustard-brand/10 text-charcoal-brand rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Row: Contact Card & Tech Ecosystem */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Direct Contact Card */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between gap-6`}>
            <div>
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Direct Contact :
              </h4>
              
              <div className="flex flex-col gap-3 text-xs font-mono text-charcoal-brand/85 font-semibold">
                <a href="mailto:synchad.studio@gmail.com" className="flex items-center gap-2 hover:text-emerald-brand transition-colors">
                  <Mail className="w-4 h-4 text-emerald-brand" />
                  synchad.studio@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-brand" />
                  +91 82234 40812
                </span>
                <a href="https://instagram.com/synch.ad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-brand transition-colors">
                  <InstagramIcon className="w-4 h-4 text-mustard-brand" />
                  @synch.ad
                </a>
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-mustard-brand" />
                  synchad.com
                </span>
              </div>
            </div>

            <div className={`relative ${CLAY_CLASSES.cardMustard} p-3 flex items-center justify-center rounded-2xl self-start`}>
              <QRCodeSVG />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cream-brand border border-charcoal-brand flex items-center justify-center p-0.5 rounded-md">
                <span className="font-outfit text-[6px] font-black text-charcoal-brand">sAD</span>
              </div>
            </div>
          </div>

          {/* Card 2: Combined Tech Ecosystem Stack */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between`}>
            <div>
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Unified Tech Stack :
              </h4>
              <p className="text-xs text-charcoal-brand/75 mb-4 leading-relaxed font-medium">
                Engineered with production-ready software tools and post-production creative software.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs font-mono font-bold px-3 py-1.5 border rounded-xl cursor-default ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Core Value Propositions */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between`}>
            <div>
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Our Value Props :
              </h4>
              
              <div className="flex flex-col gap-4">
                {valuePillars.map((vp, i) => (
                  <div key={i} className="flex justify-between items-start gap-3">
                    <div>
                      <span className="font-inter text-xs font-bold text-charcoal-brand block">
                        {vp.title}
                      </span>
                      <span className="font-inter text-[11px] text-charcoal-brand/70 block mt-0.5 leading-tight">
                        {vp.desc}
                      </span>
                    </div>
                    <span className={`${CLAY_CLASSES.cardEmerald} font-mono text-[8px] uppercase font-bold text-cream-brand px-2 py-0.5 rounded-full flex-shrink-0`}>
                      {vp.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
