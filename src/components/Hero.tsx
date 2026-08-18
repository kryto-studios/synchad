"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import Link from "next/link";
import Image from "next/image";
import { CLAY_CLASSES } from "./ClayStyles";

/* ─── Cycling Words Data ────────────────────────────────────── */
const DYNAMIC_WORDS = [
  { text: "LOCAL BUSINESSES", color: "#f5b02e", bg: "#1a1a1a" },
  { text: "FUTURE BRANDS", color: "#fff6e8", bg: "#062c21" },
  { text: "ENTERPRISE SAAS", color: "#1a1a1a", bg: "#f5b02e" },
  { text: "HIGH-IMPACT EDITS", color: "#fff6e8", bg: "#1a1a1a" },
  { text: "CUSTOM MOBILE APPS", color: "#f5b02e", bg: "#062c21" },
];

/* ─── SVG Doodles ───────────────────────────────────────────── */
const GearDoodle = () => (
  <svg
    className="absolute top-6 left-6 md:top-10 md:left-12 w-10 h-10 md:w-14 md:h-14 text-charcoal-brand/15 animate-[spin_25s_linear_infinite] pointer-events-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.936 6.936 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const CodeBracketDoodle = () => (
  <svg
    className="absolute bottom-12 left-6 md:bottom-20 md:left-16 w-8 h-8 md:w-12 md:h-12 text-charcoal-brand/15 pointer-events-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const SparkleDoodle = () => (
  <svg
    className="absolute top-8 right-6 md:top-14 md:right-14 w-8 h-8 md:w-12 md:h-12 text-mustard-brand/35 animate-pulse pointer-events-none"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

/* ─── Hero Component ─────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDewHovered, setIsDewHovered] = useState(false);
  const [isAryHovered, setIsAryHovered] = useState(false);

  // Auto-cycle kinetic words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const currentWord = DYNAMIC_WORDS[wordIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col items-center justify-center border-b border-charcoal-brand py-12 sm:py-20 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden bg-cream-brand select-none"
    >
      {/* Decorative Doodles */}
      <GearDoodle />
      <CodeBracketDoodle />
      <SparkleDoodle />

      {/* ── Scroll Indicator (Desktop Left Sidebar) ──────────────── */}
      <div className="absolute bottom-8 left-10 hidden xl:flex flex-col items-center gap-2 z-20">
        <span className="font-mono text-xs uppercase tracking-widest text-charcoal-brand/50 [writing-mode:vertical-lr]">
          SCROLL TO DISCOVER
        </span>
        <svg
          className="w-5 h-10 text-charcoal-brand animate-bounce"
          fill="none"
          viewBox="0 0 24 48"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 44V4M12 44l-6-6m6 6 6-6" />
        </svg>
      </div>

      {/* ── Left Edge Avatar Cutout (Dewansh - Desktop/Large Tablet Only) ── */}
      <Link href="#team" aria-label="Scroll to Dewansh profile in Team section" className="hidden lg:flex">
        <motion.div
          onMouseEnter={() => setIsDewHovered(true)}
          onMouseLeave={() => setIsDewHovered(false)}
          initial={{ opacity: 0, x: -80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0, -14, 0],
            rotate: [0, 1.5, -1, 0.5, 0],
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-0 left-[-30px] lg:left-[10px] xl:left-[40px] z-20 pointer-events-auto cursor-pointer select-none max-h-[80vh] items-end"
        >
          <div className="relative lg:w-[380px] xl:w-[440px] aspect-[5/7]">
            {/* Default Avatar */}
            <motion.div
              animate={{ opacity: isDewHovered ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/avatar_dew_full_v2.png"
                alt="Dewansh Chatterjee - Co-Founder"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-xl"
              />
            </motion.div>

            {/* Hover Intro Avatar */}
            <motion.div
              animate={{ opacity: isDewHovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/avatar_dew_intro_v2.png"
                alt="Dewansh Chatterjee - Intro"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>

      {/* ── Right Edge Avatar Cutout (Aryan - Desktop/Large Tablet Only) ── */}
      <Link href="#team" aria-label="Scroll to Aryan profile in Team section" className="hidden lg:flex">
        <motion.div
          onMouseEnter={() => setIsAryHovered(true)}
          onMouseLeave={() => setIsAryHovered(false)}
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0, -6, 0],
            rotate: [0, -1.5, 1, -0.5, 0],
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute bottom-0 right-[-30px] lg:right-[10px] xl:right-[40px] z-20 pointer-events-auto cursor-pointer select-none max-h-[80vh] items-end"
        >
          <div className="relative lg:w-[380px] xl:w-[440px] aspect-[5/7]">
            {/* Default Avatar */}
            <motion.div
              animate={{ opacity: isAryHovered ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/avatar_ary_left_full.png"
                alt="Aryan Gupta - Co-Founder"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-xl"
              />
            </motion.div>

            {/* Hover Intro Avatar */}
            <motion.div
              animate={{ opacity: isAryHovered ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/avatar_ary_intro.png"
                alt="Aryan Gupta - Intro"
                fill
                priority
                className="object-contain object-bottom filter drop-shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>

      {/* ── Left Edge Avatar Cutout (Dewansh - Mobile Only: Fully visible peeking inward) ── */}
      <Link href="#team" aria-label="Scroll to Dewansh profile in Team section" className="flex lg:hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0, -4, 0],
            rotate: [0, 1, -1, 0],
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[16%] xs:top-[18%] sm:top-[22%] left-[-5px] xs:left-[0px] sm:left-[10px] z-10 pointer-events-auto cursor-pointer select-none flex items-center"
        >
          <div className="relative w-[130px] xs:w-[155px] sm:w-[210px] aspect-[5/7]">
            <Image
              src="/avatar_dew_edge_mobile.png"
              alt="Dewansh Chatterjee - Co-Founder"
              fill
              priority
              className="object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      </Link>

      {/* ── Right Edge Avatar Cutout (Aryan - Mobile Only: Fully visible peeking inward) ── */}
      <Link href="#team" aria-label="Scroll to Aryan profile in Team section" className="flex lg:hidden">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -8, 0, -5, 0],
            rotate: [0, -1, 1, 0],
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
            rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          }}
          className="absolute top-[16%] xs:top-[18%] sm:top-[22%] right-[-5px] xs:right-[0px] sm:right-[10px] z-10 pointer-events-auto cursor-pointer select-none flex items-center"
        >
          <div className="relative w-[130px] xs:w-[155px] sm:w-[210px] aspect-[5/7]">
            <Image
              src="/avatar_ary_edge_mobile_v2.png"
              alt="Aryan Gupta - Co-Founder"
              fill
              priority
              className="object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      </Link>

      {/* ── Main Centered Kinetic Content Container ───────────── */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-20 relative">
        
        {/* Top Header Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-5 flex flex-col items-center justify-center text-center"
        >
          <h3 className="font-bacley text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-charcoal-brand tracking-tight">
            Need Digital Help?
          </h3>
          <span className="font-mono text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-charcoal-brand/50 mt-1 sm:mt-1.5">
            presenting
          </span>
        </motion.div>

        {/* ── Giant Kinetic Title: synchAD. ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block w-full"
        >
          <span className="hidden sm:inline-block absolute -left-8 -top-8 font-outfit text-6xl md:text-9xl text-mustard-brand font-black opacity-30 select-none">
            "
          </span>
          <h1 className="font-outfit text-[3.8rem] xs:text-[4.5rem] sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black leading-[0.85] text-emerald-brand tracking-tighter select-none drop-shadow-sm">
            synch
            <span className="text-mustard-brand inline-block transform hover:rotate-6 transition-transform cursor-pointer">
              AD.
            </span>
          </h1>
        </motion.div>

        {/* ── Kinetic Word Cycler Ribbon (Single Line Seamless Mobile Layout) ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 sm:mt-6 flex flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-xl md:text-2xl font-outfit font-black uppercase tracking-wide w-full"
        >
          <span className="text-charcoal-brand/70 text-[11px] xs:text-xs sm:text-lg md:text-xl whitespace-nowrap">WE DIGITALIZE</span>
          <div className="relative h-8 sm:h-11 md:h-12 min-w-[145px] xs:min-w-[165px] sm:min-w-[280px] md:min-w-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord.text}
                initial={{ y: 14, opacity: 0, scale: 0.92 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -14, opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                style={{
                  color: currentWord.color,
                  backgroundColor: currentWord.bg,
                }}
                className="absolute px-2.5 sm:px-5 py-0.5 sm:py-1.5 rounded-lg sm:rounded-2xl shadow-md border border-charcoal-brand/10 font-black tracking-wider text-[10px] xs:text-xs sm:text-base md:text-xl whitespace-nowrap"
              >
                {currentWord.text}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 sm:mt-8 font-inter text-sm sm:text-base md:text-xl text-charcoal-brand/80 max-w-xl leading-relaxed font-medium px-4 sm:px-0"
        >
          Build a stronger digital presence with custom technology, high-quality creative content, and growth-focused marketing — all under one roof.
        </motion.p>

        {/* ── Action Buttons (Dual CTAs - High Conversion) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto z-30 px-6 sm:px-0"
        >
          <Magnetic strength={0.3}>
            <Link
              href="#contact"
              className={`${CLAY_CLASSES.btnEmerald} w-full sm:w-auto justify-center px-7 sm:px-9 py-3.5 sm:py-4 font-outfit font-black uppercase tracking-wider text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 shadow-lg active:scale-95 group`}
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Magnetic>

          <Magnetic strength={0.3}>
            <Link
              href="#work"
              className={`${CLAY_CLASSES.btnMustard} w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-outfit font-black uppercase tracking-wider text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 shadow-lg active:scale-95`}
            >
              <span>Explore Our Work &rarr;</span>
            </Link>
          </Magnetic>
        </motion.div>

        {/* ── Studio Power Ribbon Footer Bar ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-charcoal-brand/15 w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-8 md:gap-10 text-[11px] sm:text-xs md:text-sm font-outfit font-black uppercase tracking-wider text-charcoal-brand/70"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 hover:text-emerald-brand transition-colors cursor-default">
            <span className="text-emerald-brand text-xs sm:text-base">✦</span>
            <span>100% Custom Code Stack</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 hover:text-mustard-brand transition-colors cursor-default">
            <span className="text-mustard-brand text-xs sm:text-base">✦</span>
            <span>Zero Template Constraints</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 hover:text-emerald-brand transition-colors cursor-default">
            <span className="text-emerald-brand text-xs sm:text-base">✦</span>
            <span>Direct Founder Execution</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
