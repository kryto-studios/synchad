"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLAY_CLASSES } from "./ClayStyles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services", id: "nav-services" },
    { name: "Team", href: "#team", id: "nav-team" },
    { name: "Packages", href: "#packages", id: "nav-packages" },
    { name: "FAQ", href: "#faq", id: "nav-faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-cream-brand/85 backdrop-blur-md border-b border-charcoal-brand/10 px-6 py-4 md:px-12">
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
          {navLinks.map((link) => (
            <Link
              key={link.id}
              id={link.id}
              href={link.href}
              className="text-sm font-medium tracking-wide text-charcoal-brand/80 hover:text-emerald-brand transition-colors underline-hover"
            >
              {link.name}
            </Link>
          ))}
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
            className={`${CLAY_CLASSES.cardCream} absolute top-[80px] left-[5%] w-[90%] p-6 flex flex-col gap-6 md:hidden z-30`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.id}
                id={`${link.id}-mobile`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-charcoal-brand hover:text-emerald-brand py-2 border-b border-charcoal-brand/5"
              >
                {link.name}
              </Link>
            ))}
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
