import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
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
      <Projects />
      <Founders />
      <Packages />
      <FAQ />
      <Contact />

      {/* Premium Centered Editorial Footer */}
      <footer className="w-full bg-[#161616] text-cream-brand border-t border-charcoal-brand/30 py-16 px-6 sm:px-10 md:px-16 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-cream-brand flex items-center justify-center p-2 shadow-inner border border-white/20">
                <Image
                  src="/logo.png"
                  alt="synchAD logo"
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </div>
              <span className="font-outfit text-2xl font-black tracking-tight text-cream-brand">
                synch<span className="text-mustard-brand font-black">AD</span>
              </span>
            </div>
            <p className="font-mono text-xs text-cream-brand/70 uppercase tracking-widest max-w-md">
              WEBS | APPS | EDITS &mdash; Digitalizing Local Businesses in Ambikapur &amp; Beyond
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-outfit text-xs font-bold uppercase tracking-wider text-cream-brand/80">
            <a href="#services" className="hover:text-mustard-brand transition-colors">Services</a>
            <span className="text-cream-brand/20">•</span>
            <a href="#projects" className="hover:text-mustard-brand transition-colors">Projects</a>
            <span className="text-cream-brand/20">•</span>
            <a href="#packages" className="hover:text-mustard-brand transition-colors">Packages</a>
            <span className="text-cream-brand/20">•</span>
            <a href="#founders" className="hover:text-mustard-brand transition-colors">Founders</a>
            <span className="text-cream-brand/20">•</span>
            <a href="#faq" className="hover:text-mustard-brand transition-colors">FAQ</a>
            <span className="text-cream-brand/20">•</span>
            <a href="#contact" className="hover:text-mustard-brand transition-colors">Contact</a>
            <span className="text-cream-brand/20">•</span>
            <a href="https://instagram.com/synchad_tech" target="_blank" rel="noopener noreferrer" className="text-mustard-brand hover:underline transition-colors font-mono">Instagram 📸</a>
            <span className="text-cream-brand/20">•</span>
            <a href="https://linkedin.com/company/synchad_tech" target="_blank" rel="noopener noreferrer" className="text-mustard-brand hover:underline transition-colors font-mono">LinkedIn 💼</a>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl">
            {["Next.js 15", "Supabase PostgreSQL", "Tailwind CSS", "Figma Design", "Adobe Motion Graphics", "Local SEO & Analytics"].map((tech, idx) => (
              <span key={idx} className="font-mono text-[10px] uppercase tracking-wider text-cream-brand/60 border border-cream-brand/15 px-3 py-1.5 rounded-full bg-white/5">
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-cream-brand/20 to-transparent" />

          {/* Copyright and Admin */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-cream-brand/60 font-inter">
            <span>
              &copy; {new Date().getFullYear()} <strong className="text-cream-brand">synchAD Studios</strong>. All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-cream-brand/20">•</span>
            <span className="text-xs font-mono text-cream-brand/50">
              Created with ❤️ by Dewansh Chatterjee &amp; Aryan Gupta
            </span>
            <span className="hidden sm:inline text-cream-brand/20">•</span>
            <Link
              href="/admin"
              className="text-xs font-mono text-mustard-brand hover:underline font-bold bg-mustard-brand/10 px-3.5 py-1.5 rounded-full border border-mustard-brand/30 transition-colors"
            >
              Admin Portal 🔒
            </Link>
          </div>

        </div>
      </footer>
    </>
  );
}
