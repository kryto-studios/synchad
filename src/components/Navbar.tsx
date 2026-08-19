"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

const navLinks = [
  { name: "Services", href: "#services", id: "nav-services", section: "services" },
  { name: "Projects", href: "#projects", id: "nav-projects", section: "projects" },
  { name: "Packages", href: "#packages", id: "nav-packages", section: "packages" },
  { name: "Team", href: "#team", id: "nav-team", section: "team" },
  { name: "FAQ", href: "#faq", id: "nav-faq", section: "faq" },
  { name: "Contact", href: "#contact", id: "nav-contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && window.scrollY >= 100) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-brand/85 backdrop-blur-md border-b border-charcoal-brand/10 px-6 sm:px-10 md:px-14 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Magnetic strength={0.2}>
          <Link href="/" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className={`${CLAY_CLASSES.cardCream} w-10 h-10 flex items-center justify-center p-1.5 transition-transform group-hover:rotate-6`}>
              <Image
                src="/logo.png"
                alt="synchAD logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-outfit text-xl font-bold tracking-tight text-charcoal-brand">
              synch<span className="text-mustard-brand font-extrabold">AD</span>
            </span>
          </Link>
        </Magnetic>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <Link
                key={link.id}
                id={link.id}
                href={link.href}
                className={[
                  "text-sm tracking-wide transition-colors underline underline-offset-4 decoration-2",
                  isActive
                    ? "font-black text-charcoal-brand decoration-charcoal-brand"
                    : "font-bold text-charcoal-brand/60 decoration-charcoal-brand/30 hover:text-charcoal-brand hover:decoration-charcoal-brand",
                ].join(" ")}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Magnetic strength={0.25}>
            <Link
              href="#contact"
              id="nav-contact-cta"
              className={`${CLAY_CLASSES.btnCharcoal} inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer`}
            >
              Get In Touch
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className={`${CLAY_CLASSES.cardCream} p-2 md:hidden text-charcoal-brand focus:outline-none hover:bg-[#fdf8f0]`}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`${CLAY_CLASSES.cardCream} absolute top-[80px] left-[5%] w-[90%] p-6 flex flex-col gap-4 md:hidden z-30`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <Link
                  key={link.id}
                  id={`${link.id}-mobile`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "text-lg py-2 border-b border-charcoal-brand/5 underline underline-offset-4 decoration-2 transition-colors",
                    isActive
                      ? "font-black text-charcoal-brand decoration-charcoal-brand"
                      : "font-bold text-charcoal-brand/60 decoration-charcoal-brand/25 hover:text-charcoal-brand",
                  ].join(" ")}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="#contact"
              id="mobile-nav-contact-cta"
              onClick={() => setIsOpen(false)}
              className={`${CLAY_CLASSES.btnCharcoal} w-full text-center py-3 font-bold uppercase tracking-wider text-sm cursor-pointer`}
            >
              Get In Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
