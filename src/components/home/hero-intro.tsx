"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Portrait } from "@/components/shared/portrait";

export function HeroIntro() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Portrait label="Ari Thaçi" tone="current" priority frame={false} />
      </div>

      {/* scrim for legibility — lighter at top, heavy at bottom where the headline sits */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

      {/* film grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20 mix-blend-overlay"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* top meta row, magazine-cover style */}
      <div className="absolute inset-x-0 top-0 flex flex-col items-start gap-1 p-6 text-[11px] uppercase tracking-[0.22em] text-white/80 sm:flex-row sm:items-start sm:justify-between sm:gap-4 md:p-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Founder, Agjenti AI
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sm:text-right"
        >
          Ari World — Prishtina
        </motion.span>
      </div>

      {/* giant headline + copy, bottom-left */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic leading-[0.88] text-white"
            style={{ fontSize: "clamp(3.25rem, 13vw, 10.5rem)" }}
          >
            Ari Thaçi.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base text-white/80 md:text-lg"
        >
          Seventeen. Building AI products. Writing what I learn — and
          documenting the whole journey: projects, essays, photography, and
          everywhere in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            View my work
          </Link>
          <Link
            href="/journal"
            className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Read the journal
          </Link>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/60 md:flex md:right-10"
      >
        <span style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <span className="h-10 w-px animate-pulse bg-white/40" />
      </motion.div>
    </section>
  );
}
