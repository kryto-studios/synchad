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
      className={`group relative inline-block cursor-pointer select-none text-charcoal-brand ${className}`}
      aria-label="Special Local Offer starting at Rs 5,879 and negotiable"
    >
      <motion.div
        whileHover={{ scale: 1.04, rotate: -0.5 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex items-center justify-center gap-3 sm:gap-6 px-4 py-3 sm:px-8 sm:py-5 rounded-3xl bg-[#faf6ef]/90 hover:bg-white border-2 border-charcoal-brand/10 hover:border-mustard-brand/60 shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Top Floating Badge Tag */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-mustard-brand border border-charcoal-brand/20 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-charcoal-brand shadow-xs flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-brand animate-ping" />
          <span>SPECIAL LOCAL OFFER • AMBIKAPUR / SURGUJA</span>
        </div>

        {/* ──── LEFT BLOCK: STARTS AT + ₹5,879 ──── */}
        <div className="relative flex flex-col items-start pt-2">
          {/* Yellow Doodle Sparks Top-Left */}
          <svg
            className="absolute -top-3.5 -left-4 w-7 h-7 text-mustard-brand pointer-events-none transform -rotate-12"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            {/* Spark 1 */}
            <path d="M 8 20 L 2 12" />
            {/* Spark 2 */}
            <path d="M 16 12 L 14 3" />
            {/* Spark 3 */}
            <path d="M 26 14 L 30 6" />
          </svg>

          {/* STARTS AT Label */}
          <span className="font-outfit font-black tracking-widest text-[11px] xs:text-xs sm:text-sm md:text-base uppercase text-charcoal-brand/90 transform -rotate-3 leading-none ml-1">
            STARTS AT
          </span>

          {/* Big Bold Marker Price */}
          <div className="relative mt-0.5">
            <span className="font-outfit font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-charcoal-brand tracking-tighter leading-none inline-block">
              ₹5,879
            </span>

            {/* Hand-drawn Thick Yellow Underline Stroke */}
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

        {/* ──── CENTER BLOCK: HAND-DRAWN CURVED ARROW ──── */}
        <div className="relative flex items-center justify-center shrink-0 w-8 xs:w-12 sm:w-16 md:w-20 pt-3">
          <svg
            className="w-full h-8 sm:h-10 text-charcoal-brand pointer-events-none transform group-hover:translate-x-1 group-hover:scale-105 transition-transform"
            viewBox="0 0 100 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Smooth hand-drawn curve */}
            <path d="M 5 28 C 30 10, 65 8, 92 24" />
            {/* Arrowhead */}
            <path d="M 78 18 L 94 24 L 84 32" />
          </svg>
        </div>

        {/* ──── RIGHT BLOCK: & EVEN NEGOTIABLE ──── */}
        <div className="relative flex flex-col items-start pt-2">
          {/* Yellow Doodle Sparks Top-Right */}
          <svg
            className="absolute -top-3.5 -right-3 w-7 h-7 text-mustard-brand pointer-events-none transform rotate-12"
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          >
            {/* Spark 1 */}
            <path d="M 12 14 L 8 6" />
            {/* Spark 2 */}
            <path d="M 22 12 L 24 3" />
            {/* Spark 3 */}
            <path d="M 30 20 L 36 12" />
          </svg>

          {/* & EVEN */}
          <span className="font-outfit font-black text-xs xs:text-sm sm:text-lg md:text-xl text-charcoal-brand uppercase tracking-wider leading-none transform rotate-1">
            &amp; EVEN
          </span>

          {/* NEGOTIABLE */}
          <div className="relative mt-0.5">
            <span className="font-outfit font-black text-base xs:text-lg sm:text-2xl md:text-3xl text-charcoal-brand uppercase tracking-tight leading-none inline-block transform -rotate-1">
              NEGOTIABLE
            </span>

            {/* Hand-drawn Yellow Underline Stroke under NEGOTIABLE */}
            <svg
              className="w-[106%] -ml-[3%] h-3.5 sm:h-4 text-mustard-brand -mt-0.5 sm:-mt-1 pointer-events-none"
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
      </motion.div>
    </Link>
  );
}
