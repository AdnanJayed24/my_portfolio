"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* Cubic-bezier used by luxury film editors for panel wipes */
const CINEMA_EASE = [0.76, 0, 0.24, 1] as const;

const NAME_WORDS = ["Muhammad", "Adnan", "Jayed"];

/* Corner bracket positions */
const CORNERS = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
] as const;

export function CinematicIntro() {
  const [phase, setPhase] = useState<"intro" | "exit" | "done">("intro");

  useEffect(() => {
    /* lock scroll during intro */
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setPhase("exit"), 2800);
    const t2 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 3750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      {/* ── Top curtain panel ── */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{ background: "#050507" }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.92, ease: CINEMA_EASE }}
      />

      {/* ── Bottom curtain panel ── */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "#050507" }}
        animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 0.92, ease: CINEMA_EASE }}
      />

      {/* ── Foreground content (fades out before curtains open) ── */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center select-none"
        animate={phase === "exit" ? { opacity: 0, scale: 0.93 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.38, ease: "easeIn" }}
      >
        {/* Central radial glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <div
            className="w-[700px] h-[500px] rounded-full blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(6,182,212,0.14) 50%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* Scan-line texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
            backgroundSize: "100% 4px",
          }}
        />

        {/* Camera viewfinder corners */}
        {CORNERS.map((cls, i) => (
          <motion.div
            key={i}
            className={`absolute w-7 h-7 border-violet-500/50 ${cls}`}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
          />
        ))}

        {/* ── Name words ── */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-6 px-6 text-center">
          {NAME_WORDS.map((word, i) => (
            <motion.span
              key={word}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #c4b5fd 45%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 55, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.78,
                delay: 0.3 + i * 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* ── Divider with center dot ── */}
        <div className="relative z-10 flex items-center justify-center mb-6">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "260px" }}
            transition={{ duration: 0.65, delay: 1.05, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full border border-violet-400 bg-violet-500/50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 400, damping: 15 }}
          />
          {/* Pulse ring on the dot */}
          <motion.div
            className="absolute w-5 h-5 rounded-full border border-violet-400/40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 2.5], opacity: [0, 0.6, 0] }}
            transition={{ delay: 1.5, duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>

        {/* ── Role subtitle ── */}
        <motion.p
          className="relative z-10 text-[10px] sm:text-sm tracking-[0.12em] sm:tracking-[0.28em] uppercase text-white/40 font-light text-center px-6 max-w-[320px] sm:max-w-none"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: "easeOut" }}
        >
          Full-Stack Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Competitive Programmer
        </motion.p>

        {/* ── Animated progress bar ── */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5"
          style={{ background: "linear-gradient(90deg, #8b5cf6, #06b6d4)" }}
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.2, ease: "linear" }}
        />

        {/* ── Pulsing dots ── */}
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-violet-500/70"
              animate={{ scale: [1, 1.9, 1], opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.22,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
