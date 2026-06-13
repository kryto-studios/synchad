"use client";

import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
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
    { name: "Figma", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-[inset_-2px_-2px_6px_rgba(245,176,46,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(245,176,46,0.08)]" },
    { name: "Next.js", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-[inset_-2px_-2px_6px_rgba(6,44,33,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(6,44,33,0.08)]" },
    { name: "Supabase", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-[inset_-2px_-2px_6px_rgba(6,44,33,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(6,44,33,0.08)]" },
    { name: "Python", color: "bg-emerald-brand/10 text-emerald-brand border-emerald-brand/20 shadow-[inset_-2px_-2px_6px_rgba(6,44,33,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(6,44,33,0.08)]" },
    { name: "Premiere Pro", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-[inset_-2px_-2px_6px_rgba(245,176,46,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(245,176,46,0.08)]" },
    { name: "After Effects", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-[inset_-2px_-2px_6px_rgba(245,176,46,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(245,176,46,0.08)]" },
    { name: "DaVinci Resolve", color: "bg-mustard-brand/10 text-charcoal-brand border-mustard-brand/30 shadow-[inset_-2px_-2px_6px_rgba(245,176,46,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(245,176,46,0.08)]" },
  ];

  const projects = [
    {
      role: "Eklavya Library App",
      company: "Next.js & Supabase portal deployed on Vercel.",
      period: "Production Setup",
    },
    {
      role: "Krishna LMS",
      company: "Library visitor portal and administrative control system.",
      period: "Management Dashboard",
    },
    {
      role: "Collaborative: medibuddy",
      company: "Full stack digital medical scheduling solution.",
      period: "Co-developer",
    },
    {
      role: "Collaborative: neuronest",
      company: "Localized AI utility interface for text generation.",
      period: "Co-developer",
    },
  ];

  // Draw a premium mockup QR Code in SVG
  const QRCodeSVG = () => (
    <svg viewBox="0 0 100 100" className="w-20 h-20 text-charcoal-brand">
      {/* Corner Anchors */}
      <rect x="5" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="9" y="9" width="14" height="14" fill="currentColor" />
      <rect x="73" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="77" y="9" width="14" height="14" fill="currentColor" />
      <rect x="5" y="73" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" />
      <rect x="9" y="77" width="14" height="14" fill="currentColor" />
      {/* Grid Dotted Pattern */}
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
      {/* Tiny Center Dot */}
      <rect x="47" y="47" width="6" height="6" fill="currentColor" />
    </svg>
  );

  return (
    <section 
      id="team" 
      className="w-full border-b border-charcoal-brand py-20 px-6 md:px-12 bg-cream-brand"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 border-b border-charcoal-brand/10 pb-4">
          <h2 className="font-outfit text-3xl font-black uppercase tracking-wider text-charcoal-brand flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-mustard-brand border border-charcoal-brand rounded-full inline-block" />
            Co-Founders & Team
          </h2>
          <span className="font-mono text-xs text-charcoal-brand/50">synchAD Profile // 2026</span>
        </div>

        {/* Co-founder Portraits & Zine Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Dewansh Portrait & Info */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-8 items-stretch h-full">
            {/* High contrast Dewansh portrait frame */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className={`${CLAY_CLASSES.cardMustard} absolute -inset-2 transform -rotate-3 pointer-events-none rounded-[32px]`} />
              <div className="relative w-56 h-64 border border-charcoal-brand/35 rounded-3xl overflow-hidden bg-charcoal-brand shadow-lg">
                <Image
                  src="/DEWANSH O_O.jpeg"
                  alt="Dewansh Chatterjee"
                  fill
                  className="object-cover object-top grayscale contrast-125 brightness-95"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-charcoal-brand text-cream-brand border border-cream-brand text-[10px] font-mono px-3 py-1 uppercase tracking-widest rounded-full shadow-md">
                Co-Founder & CEO
              </div>
            </div>

            {/* Dewansh Bio info */}
            <div className="flex-grow">
              <div className="relative mb-2">
                <span className="absolute -left-6 -top-5 font-outfit text-4xl text-mustard-brand font-black opacity-80">“</span>
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand relative">HELLO.</h3>
              </div>
              <p className="font-inter text-sm text-charcoal-brand/85 leading-relaxed">
                I am <strong className="text-emerald-brand font-bold">Dewansh Chatterjee</strong>. I focus on backend architectures, Supabase databases, and responsive full-stack applications. My goal is to build digital infrastructure that local merchants can rely on to grow, bringing modern tech solutions to local markets.
              </p>
              
              <div className="mt-6 border-t border-dashed border-charcoal-brand/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal-brand/50 block mb-2">Focus Areas</span>
                <div className="flex flex-wrap gap-2">
                  {["Next.js Framework", "Supabase Schema Design", "Python API Automation"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-black px-3 py-1.5 border border-emerald-brand/20 bg-emerald-brand/10 text-emerald-brand rounded-xl shadow-[inset_-2px_-2px_6px_rgba(6,44,33,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(6,44,33,0.08)] transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Aryan Portrait & Info */}
          <div className="lg:col-span-6 flex flex-col md:flex-row gap-8 items-stretch h-full">
            {/* High contrast Aryan portrait frame */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className={`${CLAY_CLASSES.cardEmerald} absolute -inset-2 transform rotate-2 pointer-events-none rounded-[32px]`} />
              <div className="relative w-56 h-64 border border-charcoal-brand/35 rounded-3xl overflow-hidden bg-charcoal-brand shadow-lg">
                <Image
                  src="/aryan_proxy.png"
                  alt="Aryan Gupta"
                  fill
                  className="object-cover object-top grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-3 right-4 bg-charcoal-brand text-cream-brand border border-cream-brand text-[10px] font-mono px-3 py-1 uppercase tracking-widest rounded-full shadow-md">
                Co-Founder & COO
              </div>
            </div>

            {/* Aryan Bio info */}
            <div className="flex-grow">
              <div className="relative mb-2">
                <span className="absolute -left-6 -top-5 font-outfit text-4xl text-mustard-brand font-black opacity-80">“</span>
                <h3 className="font-outfit text-3xl font-black text-charcoal-brand relative">NAMASTE.</h3>
              </div>
              <p className="font-inter text-sm text-charcoal-brand/85 leading-relaxed">
                I am <strong className="text-mustard-brand font-bold">Aryan Gupta</strong>. I lead our creative post-production pipelines, motion assets creation, and client engagement. Together with Dewansh, we ensure that synchAD combines bleeding-edge web engineering with premium video and application visual designs.
              </p>
              
              <div className="mt-6 border-t border-dashed border-charcoal-brand/10 pt-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal-brand/50 block mb-2">Creative Tools</span>
                <div className="flex flex-wrap gap-2">
                  {["Figma Visual Layouts", "After Effects Motion", "DaVinci Resolve timelines"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-black px-3 py-1.5 border border-mustard-brand/30 bg-mustard-brand/10 text-charcoal-brand rounded-xl shadow-[inset_-2px_-2px_6px_rgba(245,176,46,0.06),_inset_2px_2px_6px_rgba(255,255,255,0.75),_2px_2px_6px_rgba(245,176,46,0.08)] transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row: QR Code card & Skills/Projects section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Interactive Let's Work Together QR card */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col md:flex-row lg:flex-col items-center justify-between gap-6`}>
            <div className="flex-grow text-center md:text-left lg:text-center">
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Let&apos;s Work Together :
              </h4>
              
              <div className="flex flex-col gap-2.5 items-center md:items-start lg:items-center text-xs font-mono text-charcoal-brand/80">
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
                  synchad.vercel.app
                </span>
              </div>
            </div>

            {/* Styled QR Code Box */}
            <div className={`relative ${CLAY_CLASSES.cardMustard} p-3 flex-shrink-0 flex items-center justify-center rounded-2xl`}>
              <QRCodeSVG />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cream-brand border border-charcoal-brand flex items-center justify-center p-0.5 rounded-md">
                <span className="font-outfit text-[6px] font-black text-charcoal-brand">sAD</span>
              </div>
            </div>
          </div>

          {/* Card 2: Software Skills & Tech stack */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between`}>
            <div>
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Tech Ecosystem :
              </h4>
              <p className="text-xs text-charcoal-brand/70 mb-4 leading-relaxed">
                We design, program, and edit within a highly structured stack, matching raw technical speed with custom motion design layouts.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs font-mono font-bold px-3 py-1.5 border rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-default ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Active reference projects list */}
          <div className={`lg:col-span-4 h-full ${CLAY_CLASSES.cardCream} p-6 flex flex-col justify-between`}>
            <div>
              <h4 className="font-outfit text-xl font-bold uppercase text-charcoal-brand border-b border-dashed border-charcoal-brand/20 pb-2 mb-4">
                Active Projects Portfolio :
              </h4>
              
              <div className="flex flex-col gap-4">
                {projects.map((proj, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div>
                      <span className="font-inter text-xs font-bold text-charcoal-brand block">
                        {proj.role}
                      </span>
                      <span className="font-inter text-[11px] text-charcoal-brand/60 block">
                        {proj.company}
                      </span>
                    </div>
                    <span className={`${CLAY_CLASSES.cardEmerald} font-mono text-[9px] uppercase font-bold text-cream-brand px-2.5 py-0.5 rounded-full flex-shrink-0`}>
                      {proj.period}
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
