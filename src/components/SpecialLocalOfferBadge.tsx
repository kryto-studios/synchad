"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface SpecialLocalOfferBadgeProps {
  className?: string;
}

export default function SpecialLocalOfferBadge({ className = "" }: SpecialLocalOfferBadgeProps) {
  return (
    <Link
      href="#packages"
      className={`group relative inline-block cursor-pointer select-none ${className}`}
      aria-label="Special Local Offer starting at Rs 5,879 and negotiable"
    >
      <motion.div
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="relative flex flex-col items-center justify-center p-2 sm:p-4"
      >
        {/* Top Floating Parent Brand Pill Tag */}
        <div className="mb-2 px-3 py-1 rounded-full bg-mustard-brand border border-charcoal-brand/15 text-charcoal-brand font-mono text-[9px] sm:text-[11px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1.5 whitespace-nowrap transform -rotate-1 group-hover:rotate-0 transition-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand animate-ping" />
          <span>SPECIAL LOCAL OFFER • AMBIKAPUR / SURGUJA</span>
        </div>

        {/* ──── MAIN DOODLE ARTWORK (FRAMELESS) ──── */}
        <div className="flex items-center justify-center gap-3 sm:gap-7 relative py-1">
          
          {/* ── LEFT BLOCK: STARTS AT + ₹5,879 ── */}
          <div className="relative flex flex-col items-start">
            {/* Mustard Yellow Doodle Sparks Top-Left */}
            <motion.svg
              animate={{ rotate: [-12, -8, -12], scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-5 w-8 h-8 text-mustard-brand pointer-events-none"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            >
              <path d="M 8 20 L 2 12" />
              <path d="M 16 12 L 14 3" />
              <path d="M 26 14 L 30 6" />
            </motion.svg>

            {/* STARTS AT Label in Handwritten Font */}
            <span className="font-bacley font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg uppercase text-charcoal-brand transform -rotate-4 leading-none ml-1">
              STARTS AT
            </span>

            {/* Big Bold Marker Price in Parent Brand Emerald Green */}
            <div className="relative mt-1">
              {/* Dynamic Yellow Glow behind Price */}
              <motion.div
                animate={{ opacity: [0.15, 0.35, 0.15], scaleX: [0.95, 1.02, 0.95] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-x-2 inset-y-1 bg-mustard-brand/30 -rotate-1 rounded-sm -z-10 blur-xs pointer-events-none"
              />

              <span className="font-outfit font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-emerald-brand tracking-tighter leading-none inline-block drop-shadow-xs">
                ₹5,879
              </span>

              {/* Thick Mustard Yellow Underline Stroke */}
              <motion.svg
                animate={{ scaleX: [0.98, 1.03, 0.98] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[110%] -ml-[5%] h-4 sm:h-5 text-mustard-brand -mt-1 sm:-mt-2 pointer-events-none"
                viewBox="0 0 240 24"
                fill="none"
              >
                <path
                  d="M 5 14 C 50 19, 120 18, 235 8 C 170 20, 80 21, 10 14 Z"
                  fill="currentColor"
                />
              </motion.svg>
            </div>
          </div>

          {/* ── CENTER BLOCK: HAND-DRAWN CURVED ARROW ── */}
          <div className="relative flex items-center justify-center shrink-0 w-10 xs:w-14 sm:w-20 md:w-24 pt-2">
            <motion.svg
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-8 sm:h-12 text-charcoal-brand pointer-events-none"
              viewBox="0 0 100 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Smooth hand-drawn curve */}
              <path d="M 5 28 C 30 8, 65 6, 92 22" />
              {/* Arrowhead */}
              <path d="M 76 16 L 94 22 L 82 31" />
            </motion.svg>
          </div>

          {/* ── RIGHT BLOCK: & EVEN NEGOTIABLE (Dynamic Yellow & Green Highlight) ── */}
          <div className="relative flex flex-col items-start transform -rotate-6 sm:-rotate-8 group-hover:-rotate-2 transition-transform duration-300">
            {/* Mustard Yellow Doodle Sparks Top-Right */}
            <motion.svg
              animate={{ rotate: [12, 16, 12], scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute -top-5 -right-4 w-8 h-8 text-mustard-brand pointer-events-none"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            >
              <path d="M 12 14 L 8 6" />
              <path d="M 22 12 L 24 3" />
              <path d="M 30 20 L 36 12" />
            </motion.svg>

            {/* & EVEN in YELLOW (Mustard Brand Color) */}
            <span className="font-bacley font-bold text-sm xs:text-base sm:text-xl md:text-2xl text-mustard-brand uppercase tracking-wider leading-none drop-shadow-xs">
              &amp; EVEN
            </span>

            {/* NEGOTIABLE in GREEN (Emerald Brand Color) with Dynamic Highlighter Effect */}
            <div className="relative mt-0.5 sm:mt-1">
              {/* Dynamic Highlighter Tape Background Animation */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scaleX: [0.96, 1.04, 0.96],
                  rotate: [-1, 0, -1]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-x-2.5 -inset-y-0.5 bg-mustard-brand/35 rounded-xs -z-10 pointer-events-none transform -skew-x-6"
              />

              <span className="font-bacley font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl text-emerald-brand uppercase tracking-normal leading-none inline-block drop-shadow-xs">
                NEGOTIABLE
              </span>

              {/* Thick Animated Mustard Yellow Underline Stroke under NEGOTIABLE */}
              <motion.svg
                animate={{ scaleX: [0.97, 1.04, 0.97] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[108%] -ml-[4%] h-4 sm:h-5 text-mustard-brand -mt-1 sm:-mt-1.5 pointer-events-none"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M 4 11 C 50 15, 130 14, 196 7 C 140 16, 60 16, 8 11 Z"
                  fill="currentColor"
                />
              </motion.svg>
            </div>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
