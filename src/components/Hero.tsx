"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import Link from "next/link";
import Image from "next/image";
import { CLAY_CLASSES } from "./ClayStyles";
import { Sparkles } from "lucide-react";

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
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Auto-cycle kinetic words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x, y });
  };

  const currentWord = DYNAMIC_WORDS[wordIndex];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col items-center justify-center border-b border-charcoal-brand py-10 sm:py-16 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden bg-cream-brand select-none"
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
            x: mouseOffset.x * -28,
            y: [mouseOffset.y * -15, mouseOffset.y * -15 - 16, mouseOffset.y * -15, mouseOffset.y * -15 - 10, mouseOffset.y * -15],
            rotate: [0, 1.5, -1, 0.5, 0],
          }}
          whileHover={{ scale: 1.06, y: -24 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.2, ease: "easeOut" },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[4%] lg:top-[6%] bottom-[8%] lg:bottom-[12%] left-[-10px] lg:left-[0px] xl:left-[15px] 2xl:left-[35px] z-20 pointer-events-auto cursor-pointer select-none flex items-center justify-center py-2"
        >
          <div className="relative lg:w-[410px] xl:w-[480px] 2xl:w-[540px] h-full max-h-[78vh] aspect-[5/7]">
            {/* Default Avatar */}
            <motion.div
              animate={{ opacity: isDewHovered ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/avatar_dew_full_v2.png"
                alt="Dewansh Chatterjee - Co-Founder"
                fill
                priority
                className="object-contain filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Hover Intro Avatar */}
            <motion.div
              animate={{ opacity: isDewHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/avatar_dew_intro_v2.png"
                alt="Dewansh Chatterjee - Intro"
                fill
                priority
                className="object-contain filter drop-shadow-2xl"
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
            x: mouseOffset.x * 28,
            y: [mouseOffset.y * -15, mouseOffset.y * -15 + 16, mouseOffset.y * -15, mouseOffset.y * -15 + 10, mouseOffset.y * -15],
            rotate: [0, -1.5, 1, -0.5, 0],
          }}
          whileHover={{ scale: 1.06, y: -24 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.2, ease: "easeOut" },
            y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[4%] lg:top-[6%] bottom-[8%] lg:bottom-[12%] right-[-10px] lg:right-[0px] xl:right-[15px] 2xl:right-[35px] z-20 pointer-events-auto cursor-pointer select-none flex items-center justify-center py-2"
        >
          <div className="relative lg:w-[410px] xl:w-[480px] 2xl:w-[540px] h-full max-h-[78vh] aspect-[5/7]">
            {/* Default Avatar */}
            <motion.div
              animate={{ opacity: isAryHovered ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/avatar_ary_full_v3.png"
                alt="Aryan Gupta - Co-Founder"
                fill
                priority
                className="object-contain filter drop-shadow-2xl"
              />
            </motion.div>

            {/* Hover Intro Avatar */}
            <motion.div
              animate={{ opacity: isAryHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/avatar_ary_intro_v4.png"
                alt="Aryan Gupta - Intro"
                fill
                priority
                className="object-contain filter drop-shadow-2xl"
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
            y: [0, -12, 0, -6, 0],
            rotate: [0, 1.5, -1, 0],
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-[8%] xs:top-[10%] sm:top-[12%] left-[0px] sm:left-[15px] z-10 pointer-events-auto cursor-pointer select-none flex items-center"
        >
          <div className="relative w-[140px] xs:w-[170px] sm:w-[225px] aspect-[5/7]">
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
            y: [0, -10, 0, -14, 0],
            rotate: [0, -1.5, 1, 0],
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          }}
          className="absolute top-[8%] xs:top-[10%] sm:top-[12%] right-[0px] sm:right-[15px] z-10 pointer-events-auto cursor-pointer select-none flex items-center"
        >
          <div className="relative w-[130px] xs:w-[155px] sm:w-[210px] aspect-[5/7]">
            <Image
              src="/avatar_ary_full_v3.png"
              alt="Aryan Gupta - Co-Founder"
              fill
              priority
              className="object-contain filter drop-shadow-lg"
            />
          </div>
        </motion.div>
      </Link>

      {/* ── Main Centered Kinetic Content Container ───────────── */}
      <motion.div
        style={{
          transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 8}px)`,
          transition: "transform 0.15s ease-out"
        }}
        className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-20 relative"
      >
        
        {/* Top Header Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 sm:mb-3 flex flex-col items-center justify-center text-center"
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
          className="mt-3 sm:mt-5 flex flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-xl md:text-2xl font-outfit font-black uppercase tracking-wide w-full"
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

        {/* Motto Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 sm:mt-6 font-inter text-xs sm:text-base md:text-lg text-charcoal-brand/80 max-w-xl leading-relaxed font-medium px-4 sm:px-0"
        >
          We bridge software engineering and creative distribution under one roof. From production-grade web platforms to retention-focused media and growth campaigns.
        </motion.p>

        {/* ── Handwritten Hero Pricing Showcase (Exact Image Replica with Organic Tilts & Arrow) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-6 sm:mt-10 flex flex-col items-center justify-center text-center w-full"
        >
          <Link href="#packages" className="group flex flex-col items-center justify-center cursor-pointer select-none">
            <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 relative py-2 px-3">
              
              {/* 1. Left Pricing Block: Top sparks + STARTS AT + ₹5,879 + Long Yellow Underline */}
              <div className="relative flex flex-col items-start text-left transform -rotate-3">
                
                {/* Top-Left 3 Yellow Sparks */}
                <div className="absolute -top-7 sm:-top-9 -left-5 sm:-left-7 text-mustard-brand pointer-events-none transform -rotate-12">
                  <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 30 30" fill="none">
                    <path d="M6 22 L 16 6 M 13 27 L 23 11 M 3 14 L 9 3" stroke="#f5b02e" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* "STARTS AT" label + yellow underline */}
                <div className="inline-block relative mb-0.5 transform -rotate-3">
                  <span className="font-bacley font-black text-sm xs:text-base sm:text-xl md:text-2xl uppercase tracking-widest text-charcoal-brand block">
                    STARTS AT
                  </span>
                  <div className="w-full h-2 -mt-1">
                    <svg viewBox="0 0 100 10" fill="none" className="w-full h-full">
                      <path d="M2 5 Q 50 1, 98 6" stroke="#f5b02e" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Big Price ₹5,879 */}
                <h2 className="font-bacley font-black text-5xl xs:text-6xl sm:text-8xl md:text-[6.8rem] lg:text-[7.8rem] text-[#062c21] tracking-tighter leading-none transform -rotate-2 group-hover:scale-105 transition-transform duration-300">
                  ₹5,879
                </h2>

                {/* Long Yellow Underline underneath ₹5,879 */}
                <div className="w-[108%] -ml-[4%] h-3.5 sm:h-5 -mt-1 sm:-mt-2 transform -rotate-1">
                  <svg viewBox="0 0 210 14" fill="none" className="w-full h-full">
                    <path d="M3 7 C 65 2, 145 11, 207 4" stroke="#f5b02e" strokeWidth="5.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* 2. Center Hand-Drawn Thin Black Curved Arrow pointing Right */}
              <div className="relative w-12 xs:w-16 sm:w-24 md:w-28 h-8 sm:h-10 mx-1 sm:mx-3 flex items-center justify-center self-center transform -rotate-2">
                <svg viewBox="0 0 110 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-charcoal-brand">
                  <path d="M6 32 C 35 8, 70 8, 96 24" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M82 17 L 98 25 L 87 33" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 3. Right Block: & EVEN NEGOTIABLE + Underline + Top-Right Sparks */}
              <div className="relative flex flex-col items-start text-left self-center transform -rotate-4">
                
                {/* Top-Right 3 Yellow Sparks */}
                <div className="absolute -top-7 sm:-top-9 -right-5 sm:-right-7 text-mustard-brand pointer-events-none transform rotate-12">
                  <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 30 30" fill="none">
                    <path d="M10 6 L 20 22 M 16 3 L 26 17 M 22 1 L 28 11" stroke="#f5b02e" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>

                <span className="font-bacley font-black text-xs xs:text-sm sm:text-lg md:text-xl uppercase tracking-wider text-charcoal-brand leading-tight block">
                  &amp; EVEN
                </span>
                
                <span className="font-bacley font-black text-lg xs:text-xl sm:text-3xl md:text-4xl uppercase tracking-widest text-charcoal-brand leading-tight block mt-0.5">
                  NEGOTIABLE
                </span>

                {/* Yellow Underline underneath NEGOTIABLE */}
                <div className="w-[106%] -ml-[3%] h-3 sm:h-4 -mt-0.5">
                  <svg viewBox="0 0 120 12" fill="none" className="w-full h-full">
                    <path d="M3 6 Q 60 1, 117 7" stroke="#f5b02e" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

            </div>
          </Link>
        </motion.div>

        {/* ── Action Buttons (Dual CTAs - Optimized for Mobile Touch) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto z-30 px-6 sm:px-0"
        >
          <Magnetic strength={0.3}>
            <Link
              href="#services"
              className={`${CLAY_CLASSES.btnCharcoal} w-full sm:w-auto justify-center px-7 sm:px-9 py-3.5 sm:py-4 font-outfit font-black uppercase tracking-wider text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 shadow-lg active:scale-95 group`}
            >
              <span>View Offerings</span>
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
              href="#team"
              className={`${CLAY_CLASSES.btnMustard} w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 font-outfit font-black uppercase tracking-wider text-xs sm:text-base flex items-center gap-2.5 sm:gap-3 shadow-lg active:scale-95`}
            >
              <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-charcoal-brand/30">
                  <Image src="/dewansh_photo_v2.jpeg" alt="Dewansh" fill className="object-cover" />
                </div>
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-charcoal-brand/30">
                  <Image src="/aryan_proxy_v2.png" alt="Aryan" fill className="object-cover" />
                </div>
              </div>
              <span>Meet The Founders &rarr;</span>
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

      </motion.div>
    </section>
  );
}
