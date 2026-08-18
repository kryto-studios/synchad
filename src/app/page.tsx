import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
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
      <Work />
      <Process />
      <Founders />
      <Packages />
      <FAQ />
      <Contact />

      {/* Structured Editorial Footer */}
      <footer className="w-full bg-charcoal-brand text-cream-brand border-t border-charcoal-brand py-16 px-6 sm:px-10 md:px-14 lg:px-16 mt-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream-brand/15">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full bg-cream-brand flex items-center justify-center p-1.5 shadow-inner">
                    <Image
                      src="/logo.png"
                      alt="synchAD logo"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-outfit text-2xl font-bold tracking-tight text-cream-brand">
                    synch<span className="text-mustard-brand font-black">AD</span>
                  </span>
                </div>
                <p className="font-mono text-xs text-mustard-brand uppercase tracking-widest font-black mb-2">
                  Digitalizing The Local.
                </p>
                <p className="font-inter text-xs text-cream-brand/70 leading-relaxed max-w-sm font-medium">
                  Integrated growth partner for local businesses — combining custom web software engineering, high-retention video post-production, and digital marketing.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/60 border border-cream-brand/20 px-2.5 py-0.5 rounded-md bg-charcoal-brand/40">
                  BUILD
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/60 border border-cream-brand/20 px-2.5 py-0.5 rounded-md bg-charcoal-brand/40">
                  CREATE
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-cream-brand/60 border border-cream-brand/20 px-2.5 py-0.5 rounded-md bg-charcoal-brand/40">
                  GROW
                </span>
              </div>
            </div>

            {/* Column 2: Service Pillars */}
            <div className="md:col-span-3">
              <h4 className="font-outfit text-sm font-black uppercase text-mustard-brand tracking-wider mb-4 border-b border-cream-brand/10 pb-2">
                Capabilities
              </h4>
              <ul className="space-y-2 font-inter text-xs text-cream-brand/80 font-medium">
                <li>
                  <Link href="#services" className="hover:text-emerald-brand transition-colors">
                    BUILD — Web &amp; Digital Systems
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-emerald-brand transition-colors">
                    CREATE — Video &amp; Visual FX
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-emerald-brand transition-colors">
                    GROW — Ads &amp; Social Strategy
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:text-emerald-brand transition-colors">
                    Selected Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div className="md:col-span-2">
              <h4 className="font-outfit text-sm font-black uppercase text-mustard-brand tracking-wider mb-4 border-b border-cream-brand/10 pb-2">
                Company
              </h4>
              <ul className="space-y-2 font-inter text-xs text-cream-brand/80 font-medium">
                <li>
                  <Link href="#services" className="hover:text-emerald-brand transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:text-emerald-brand transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-emerald-brand transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-emerald-brand transition-colors">
                    Founders
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="hover:text-emerald-brand transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-emerald-brand transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Founders Direct Contact */}
            <div className="md:col-span-3">
              <h4 className="font-outfit text-sm font-black uppercase text-mustard-brand tracking-wider mb-4 border-b border-cream-brand/10 pb-2">
                Direct Contact
              </h4>
              <div className="space-y-2.5 font-mono text-xs text-cream-brand/80 font-semibold">
                <p>
                  <a href="mailto:synchad.studio@gmail.com" className="hover:text-emerald-brand transition-colors">
                    synchad.studio@gmail.com
                  </a>
                </p>
                <p>+91 82234 40812</p>
                <p>
                  <a href="https://instagram.com/synch.ad" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-brand transition-colors">
                    @synch.ad
                  </a>
                </p>
                <p className="text-[10px] text-cream-brand/50 uppercase">
                  synchad.com • Vercel Hosted
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Credits */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-cream-brand/60">
            <span>
              &copy; {new Date().getFullYear()} synchAD. Digitalizing The Local. All Rights Reserved.
            </span>
            <span className="font-mono text-[11px] text-cream-brand/50">
              Co-founded by Dewansh Chatterjee &amp; Aryan Gupta
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
