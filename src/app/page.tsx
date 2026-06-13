import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Page Sections */}
      <Hero />
      <Services />
      <Founders />
      <Packages />
      <FAQ />
      <Contact />

      {/* Zine Styled Editorial Footer */}
      <footer className="w-full bg-charcoal-brand text-cream-brand border-t border-charcoal-brand py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-cream-brand flex items-center justify-center p-1.5 shadow-inner">
                <Image
                  src="/logo.png"
                  alt="synchAD logo"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <span className="font-outfit text-lg font-bold tracking-tight text-cream-brand">
                synch<span className="text-mustard-brand font-black">AD</span>
              </span>
            </div>
            <p className="font-mono text-[10px] text-cream-brand/50 uppercase tracking-widest mt-1">
              WEB | APP | EDITS &mdash; Digitalizing The Local
            </p>
          </div>

          {/* Center: Tech tags */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/50 border border-cream-brand/20 px-3 py-1 rounded-full bg-charcoal-brand/30">
              Next.js
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/50 border border-cream-brand/20 px-3 py-1 rounded-full bg-charcoal-brand/30">
              Supabase SQL
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/50 border border-cream-brand/20 px-3 py-1 rounded-full bg-charcoal-brand/30">
              Python API
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/50 border border-cream-brand/20 px-3 py-1 rounded-full bg-charcoal-brand/30">
              Figma Design
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/50 border border-cream-brand/20 px-3 py-1 rounded-full bg-charcoal-brand/30">
              After Effects
            </span>
          </div>

          {/* Right: Copyright and navigation */}
          <div className="flex flex-col items-center md:items-end gap-1.5 text-xs text-cream-brand/60 font-inter">
            <span>
              &copy; {new Date().getFullYear()} synchAD. All Rights Reserved.
            </span>
            <span className="text-[10px] font-mono text-cream-brand/35">
              Built by Dewansh Chatterjee &amp; Aryan Gupta
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
