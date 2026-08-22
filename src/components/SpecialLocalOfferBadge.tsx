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
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="relative flex flex-col items-center justify-center p-2 sm:p-4"
      >
        {/* Top Floating Parent Brand Pill Tag */}
        <div className="mb-2 px-3 py-1 rounded-full bg-mustard-brand border border-charcoal-brand/15 text-charcoal-brand font-mono text-[9px] sm:text-[11px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1.5 whitespace-nowrap transform -rotate-1 group-hover:rotate-0 transition-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand animate-ping" />
          <span>SPECIAL LOCAL OFFER • AMBIKAPUR / SURGUJA</span>
        </div>

        {/* ──── MAIN DOODLE ARTWORK (NO CONTAINER BOX) ──── */}
        <div className="flex items-center justify-center gap-3 sm:gap-7 relative py-1">
          
          {/* ── LEFT BLOCK: STARTS AT + ₹5,879 ── */}
          <div className="relative flex flex-col items-start">
            {/* Mustard Yellow Doodle Sparks Top-Left */}
            <svg
              className="absolute -top-4 -left-5 w-8 h-8 text-mustard-brand pointer-events-none transform -rotate-12 group-hover:scale-110 transition-transform"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            >
              <path d="M 8 20 L 2 12" />
              <path d="M 16 12 L 14 3" />
              <path d="M 26 14 L 30 6" />
            </svg>

            {/* STARTS AT Label in Handwritten Font */}
            <span className="font-bacley font-bold tracking-wider text-xs xs:text-sm sm:text-base md:text-lg uppercase text-charcoal-brand transform -rotate-4 leading-none ml-1">
              STARTS AT
            </span>

            {/* Big Bold Marker Price in Parent Brand Emerald Green */}
            <div className="relative mt-1">
              <span className="font-outfit font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-emerald-brand tracking-tighter leading-none inline-block drop-shadow-xs">
                ₹5,879
              </span>

              {/* Thick Mustard Yellow Underline Stroke */}
              <svg
                className="w-[110%] -ml-[5%] h-4 sm:h-5 text-mustard-brand -mt-1 sm:-mt-2 pointer-events-none"
                viewBox="0 0 240 24"
                fill="none"
              >
                <path
                  d="M 5 14 C 50 19, 120 18, 235 8 C 170 20, 80 21, 10 14 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* ── CENTER BLOCK: HAND-DRAWN CURVED ARROW ── */}
          <div className="relative flex items-center justify-center shrink-0 w-10 xs:w-14 sm:w-20 md:w-24 pt-2">
            <svg
              className="w-full h-8 sm:h-12 text-charcoal-brand pointer-events-none transform group-hover:translate-x-1.5 group-hover:scale-105 transition-transform"
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
            </svg>
          </div>

          {/* ── RIGHT BLOCK: & EVEN NEGOTIABLE (Handwritten Font & Tilted) ── */}
          <div className="relative flex flex-col items-start transform -rotate-6 sm:-rotate-8 group-hover:-rotate-3 transition-transform duration-300">
            {/* Mustard Yellow Doodle Sparks Top-Right */}
            <svg
              className="absolute -top-5 -right-4 w-8 h-8 text-mustard-brand pointer-events-none transform rotate-12 group-hover:scale-110 transition-transform"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            >
              <path d="M 12 14 L 8 6" />
              <path d="M 22 12 L 24 3" />
              <path d="M 30 20 L 36 12" />
            </svg>

            {/* & EVEN in Handwritten Font */}
            <span className="font-bacley font-bold text-sm xs:text-base sm:text-xl md:text-2xl text-charcoal-brand uppercase tracking-wider leading-none">
              &amp; EVEN
            </span>

            {/* NEGOTIABLE in Handwritten Font */}
            <div className="relative mt-0.5 sm:mt-1">
              <span className="font-bacley font-black text-xl xs:text-2xl sm:text-4xl md:text-5xl text-charcoal-brand uppercase tracking-normal leading-none inline-block">
                NEGOTIABLE
              </span>

              {/* Thick Mustard Yellow Underline Stroke under NEGOTIABLE */}
              <svg
                className="w-[108%] -ml-[4%] h-4 sm:h-5 text-mustard-brand -mt-1 sm:-mt-1.5 pointer-events-none"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M 4 11 C 50 15, 130 14, 196 7 C 140 16, 60 16, 8 11 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>


        </div>
      </motion.div>
    </Link>
  );
}
