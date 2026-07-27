"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Portrait } from "@/components/shared/portrait";

export function HeroIntro() {
  return (
    <section className="container-editorial grid gap-14 pt-24 pb-20 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-16 md:pt-32 md:pb-28">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-wider text-muted-foreground"
        >
          Founder, Agjenti AI — Prishtina, Kosovo
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-hero font-display mt-3 italic text-foreground"
        >
          Ari Thaçi.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          Seventeen. Building AI products. Writing what I learn, and documenting
          the whole journey — projects, essays, photography, and everywhere in
          between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View my work
          </Link>
          <Link
            href="/journal"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Read the journal
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-sm md:max-w-none"
      >
        <div className="aspect-[4/5] w-full">
          <Portrait label="Ari Thaçi" tone="current" priority />
        </div>
      </motion.div>
    </section>
  );
}
