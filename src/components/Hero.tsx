"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Magnetic from "./Magnetic";
import Link from "next/link";
import Image from "next/image";
import { CLAY_CLASSES } from "./ClayStyles";

/* ─── Slide Data ─────────────────────────────────────────────── */
const SLIDES = [
  {
    id: "dewansh",
    bg: "#062c21", // emerald green (Dewansh's Card is Green)
    textColor: "#fff6e8", // cream text
    name: "DEWANSH CHATTERJEE",
    designation: "Co-Founder",
    photo: "/DEWANSH O_O.jpeg",
    photoAlt: "Dewansh Chatterjee",
    features: [
      {
        type: "vertical",
        title: "Figma Wireframe",
        subtitle: "figma.com",
        image: "/dewansh_ui_ux.png",
        pos: { top: "4%", left: "-20%" },
        actionLabel: "Open View",
      },
      {
        type: "horizontal",
        title: "Active Timeline",
        subtitle: "Gantt Sprint Planner",
        image: "/dewansh_planner.png",
        pos: { top: "10%", right: "-26%" },
      },
      {
        type: "vertical",
        title: "React Core UI",
        subtitle: "github.com",
        image: "/dewansh_frontend.png",
        pos: { bottom: "32%", left: "-18%" },
        actionLabel: "Source",
      },
    ],
  },
  {
    id: "aryan",
    bg: "#f5b02e", // mustard yellow (Aryan's Card is Yellow)
    textColor: "#1a1a1a", // charcoal text
    name: "ARYAN GUPTA",
    designation: "CO-FOUNDER",
    photo: "/aryan_proxy.png",
    photoAlt: "Aryan Gupta",
    features: [
      {
        type: "vertical",
        title: "Supabase DB",
        subtitle: "supabase.co",
        image: "/aryan_backend.png",
        pos: { top: "4%", left: "-20%" },
        actionLabel: "Query",
      },
      {
        type: "horizontal",
        title: "CRM Graph",
        subtitle: "User Analytics Portal",
        image: "/aryan_crm.png",
        pos: { top: "10%", right: "-26%" },
      },
      {
        type: "vertical",
        title: "App Refiner",
        subtitle: "refine.app",
        image: "/aryan_refiner.png",
        pos: { bottom: "34%", left: "-18%" },
        actionLabel: "Review",
      },
      {
        type: "vertical",
        title: "Motion VFX",
        subtitle: "premiere.pro",
        image: "/aryan_video.png",
        pos: { bottom: "30%", right: "-20%" },
        actionLabel: "Render",
      },
    ],
  },
];

/* ─── Floating Feature Card Component ────────────────────────── */
interface FeatureCardProps {
  feature: (typeof SLIDES)[0]["features"][0];
  slideBg: string;
  isActive: boolean;
  delay: number;
}

function FloatingFeatureCard({ feature, slideBg, isActive, delay }: FeatureCardProps) {
  const isVertical = feature.type === "vertical";
  
  return (
    <motion.div
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={isActive ? { type: "spring", stiffness: 280, damping: 20, delay } : { duration: 0.15 }}
      style={{
        position: "absolute",
        ...feature.pos,
        transform: "translateZ(55px)", // Elevates mockups in 3D space
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      className="z-10 cursor-default"
    >
      {isVertical ? (
        // Vertical Mockup Card
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(26, 26, 26, 0.12)",
            borderRadius: "20px",
            padding: "8px",
            width: "115px",
            boxShadow: "0 16px 36px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-full h-[65px] rounded-xl overflow-hidden border border-charcoal-brand/5">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 px-0.5">
            <span
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "9.5px",
                fontWeight: 900,
                color: "#1a1a1a",
                lineHeight: 1.2,
              }}
              className="truncate"
            >
              {feature.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "7.5px",
                color: "rgba(26, 26, 26, 0.5)",
              }}
              className="truncate font-semibold mt-0.5"
            >
              {feature.subtitle}
            </span>
          </div>
          {feature.actionLabel && (
            <span
              style={{
                background: slideBg === "#f5b02e" ? "#1a1a1a" : "#062c21",
                color: slideBg === "#f5b02e" ? "#f5b02e" : "#fff6e8",
                fontSize: "7px",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 900,
                letterSpacing: "0.05em",
                borderRadius: "100px",
                padding: "3px 6px",
                textAlign: "center",
              }}
              className="uppercase mt-1 inline-block"
            >
              {feature.actionLabel}
            </span>
          )}
        </div>
      ) : (
        // Horizontal Mockup Card
        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(26, 26, 26, 0.12)",
            borderRadius: "16px",
            padding: "6px",
            width: "155px",
            boxShadow: "0 16px 36px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-[34px] h-[34px] rounded-lg overflow-hidden border border-charcoal-brand/5 flex-shrink-0">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontSize: "9.5px",
                fontWeight: 900,
                color: "#1a1a1a",
                lineHeight: 1.2,
              }}
              className="truncate"
            >
              {feature.title}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "7px",
                color: "rgba(26, 26, 26, 0.5)",
              }}
              className="truncate font-semibold mt-0.5"
            >
              {feature.subtitle}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ─── Card Face Component ────────────────────────────────────── */
interface CardFaceProps {
  slide: (typeof SLIDES)[0];
  isActive: boolean;
}

function CardFace({ slide, isActive }: CardFaceProps) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "36px",
        background: slide.bg,
        boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        transformStyle: "preserve-3d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 24px",
      }}
      className="w-full h-full select-none"
    >
      {/* ── Center Photo Cutout (3D popping with sequence zoom) ── */}
      <motion.div
        animate={isActive ? { scale: [0.85, 1.35, 1], opacity: 1 } : { scale: 0.85, opacity: 0 }}
        transition={isActive ? { duration: 0.7, times: [0, 0.45, 1], ease: "easeInOut", delay: 0.1 } : { duration: 0.15 }}
        style={{
          transform: "translateZ(45px)", // 3D pop depth
          width: "190px",
          height: "190px",
          borderRadius: "50%",
          border: `4px solid ${slide.textColor}`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.25)`,
          zIndex: 5,
          position: "relative",
          overflow: "hidden",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="mb-8"
      >
        <Image
          src={slide.photo}
          alt={slide.photoAlt}
          fill
          className="object-cover object-top rounded-full"
        />
      </motion.div>

      {/* ── Name & Designation below photo (pops after photo zoom) ── */}
      <motion.div
        animate={isActive ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.5, opacity: 0, y: 15 }}
        transition={isActive ? { type: "spring", stiffness: 180, damping: 14, delay: 0.75 } : { duration: 0.15 }}
        style={{
          transform: "translateZ(30px)", // Moderate pop depth
          textAlign: "center",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className="flex flex-col items-center justify-center mt-auto"
      >
        <h3
          style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontSize: "28px",
            fontWeight: 900,
            color: slide.textColor,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
          className="mb-1 uppercase tracking-tight"
        >
          {slide.name}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-gued), sans-serif",
            fontSize: "12px",
            fontWeight: 800,
            color: slide.textColor,
            opacity: 0.35,
            letterSpacing: "0.15em",
          }}
          className="uppercase"
        >
          {slide.designation}
        </span>
      </motion.div>

      {/* ── Floating feature cards (pops up after Name/Designation) ── */}
      {slide.features.map((feature, i) => (
        <FloatingFeatureCard
          key={feature.title}
          feature={feature}
          slideBg={slide.bg}
          isActive={isActive}
          delay={0.95 + i * 0.1}
        />
      ))}
    </div>
  );
}

/* ─── 3D Flip Card Flipper ──────────────────────────────────── */
interface FlipCardProps {
  activeSlide: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FlipCard({ activeSlide, onMouseEnter, onMouseLeave }: FlipCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Scale tilt to be subtle (max 12 degrees)
    const tiltX = -(mouseY / (height / 2)) * 12;
    const tiltY = (mouseX / (width / 2)) * 12;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    onMouseLeave();
  };

  const baseRotateY = activeSlide === 0 ? 0 : 180;
  
  // Inverse tilt directions based on rotation to keep interactive pop intuitive
  const currentRotateY = activeSlide === 0 ? baseRotateY + tilt.y : baseRotateY - tilt.y;
  const currentRotateX = activeSlide === 0 ? tilt.x : -tilt.x;

  return (
    <div
      style={{
        perspective: "1500px",
        width: "360px",
        height: "480px",
      }}
      className="relative flex items-center justify-center"
      onMouseEnter={onMouseEnter}
    >
      <motion.div
        animate={{
          rotateY: currentRotateY,
          rotateX: currentRotateX,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 18,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
          cursor: "pointer",
        }}
        className="w-full h-full relative"
      >
        {/* Front Face (Dewansh) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            // Fully hide inactive card face using display/opacity/pointer-events transitions
            opacity: activeSlide === 0 ? 1 : 0,
            pointerEvents: activeSlide === 0 ? "auto" : "none",
            visibility: activeSlide === 0 ? "visible" : "hidden",
            transition: "opacity 0.25s, visibility 0.25s ease",
            zIndex: activeSlide === 0 ? 2 : 1,
          }}
        >
          <CardFace slide={SLIDES[0]} isActive={activeSlide === 0} />
        </div>

        {/* Back Face (Aryan) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
            // Fully hide inactive card face using display/opacity/pointer-events transitions
            opacity: activeSlide === 1 ? 1 : 0,
            pointerEvents: activeSlide === 1 ? "auto" : "none",
            visibility: activeSlide === 1 ? "visible" : "hidden",
            transition: "opacity 0.25s, visibility 0.25s ease",
            zIndex: activeSlide === 1 ? 2 : 1,
          }}
        >
          <CardFace slide={SLIDES[1]} isActive={activeSlide === 1} />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle slides unless paused by mouse hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Doodles
  const GearDoodle = () => (
    <svg className="absolute top-12 left-16 w-12 h-12 text-charcoal-brand opacity-60 animate-[spin_20s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.936 6.936 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );

  const BracketDoodle = () => (
    <svg className="absolute bottom-16 left-24 w-10 h-10 text-charcoal-brand opacity-60 hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );

  const FilmDoodle = () => (
    <svg className="absolute top-8 right-32 w-12 h-12 text-charcoal-brand opacity-60 -rotate-12 hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center border-b border-charcoal-brand py-12 px-6 md:px-12 overflow-hidden bg-cream-brand"
    >
      {/* Doodles */}
      <GearDoodle />
      <BracketDoodle />
      <FilmDoodle />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-12 hidden lg:flex flex-col items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-charcoal-brand/60 [writing-mode:vertical-lr]">SCROLL TO DISCOVER</span>
        <svg className="w-6 h-12 text-charcoal-brand animate-bounce" fill="none" viewBox="0 0 24 48" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 44V4M12 44l-6-6m6 6 6-6" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        {/* ── Left Column ───────────────────────────────────────── */}
        <div className="lg:col-span-1 flex flex-col items-start text-left z-10">
          <div className="relative mb-2">
            <span className="absolute -left-10 -top-8 font-outfit text-7xl text-mustard-brand font-black opacity-80">"</span>
            <div className={`${CLAY_CLASSES.cardMustard} px-5 py-2 font-outfit text-xs font-black uppercase tracking-wider transform -rotate-2`}>
              Creative Digitalizing
            </div>
          </div>

          <h1 className="font-outfit text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] text-charcoal-brand tracking-tighter select-none">
            synch
            <span className="block text-mustard-brand">AD.</span>
          </h1>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <div className="border border-dashed border-charcoal-brand/30 rounded-2xl px-4 py-3 bg-cream-brand/50 shadow-inner flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-brand animate-pulse" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-charcoal-brand">
                WEB • APP • EDITS
              </span>
            </div>
            <div className={`${CLAY_CLASSES.cardEmerald} px-6 py-3 font-outfit text-xs font-black tracking-widest uppercase transform hover:rotate-1 transition-transform`}>
              Digitalizing The Local
            </div>
          </div>

          <p className="mt-6 font-inter text-lg md:text-xl text-charcoal-brand/80 max-w-xl leading-relaxed">
            We bridge the gap between global technology and local businesses. From customized enterprise software setup to immersive editing, we digitalize what matters.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Magnetic strength={0.3}>
              <Link
                href="#services"
                className={`${CLAY_CLASSES.btnCharcoal} px-8 py-4 font-outfit font-black uppercase tracking-wider text-sm cursor-pointer`}
              >
                View Offerings
              </Link>
            </Magnetic>
            <Link
              href="#team"
              className="text-sm font-bold uppercase tracking-wider text-charcoal-brand hover:text-emerald-brand underline underline-offset-4 decoration-2 decoration-mustard-brand transition-colors"
            >
              Meet The Founders &rarr;
            </Link>
          </div>
        </div>

        {/* ── Right Column: 3D Flip Card Carousel ─────────────────── */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center gap-6 select-none px-8">

          {/* Scale stage responsively to prevent horizontal scroll issues on mobile */}
          <div className="relative transform scale-80 sm:scale-90 md:scale-100 transition-transform duration-300">
            {/* Card stage */}
            <div
              style={{
                position: "relative",
                width: "min(360px, 90vw)",
                height: "480px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlipCard
                activeSlide={activeSlide}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
            </div>
          </div>

          {/* Dot pagination */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }} className="mt-4">
            {SLIDES.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setActiveSlide(i)}
                animate={{
                  width: i === activeSlide ? 28 : 10,
                  height: 10,
                  backgroundColor:
                    i === activeSlide ? SLIDES[activeSlide].bg : "#1a1a1a",
                  opacity: i === activeSlide ? 1 : 0.28,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
