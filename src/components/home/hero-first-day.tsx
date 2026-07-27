"use client";

import { motion } from "motion/react";
import { Portrait } from "@/components/shared/portrait";

export function HeroFirstDay() {
  return (
    <section className="container-editorial pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: -2.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[22rem] rounded-[0.6rem] bg-card p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] md:mx-0"
        >
          <div className="aspect-[4/5] w-full">
            <Portrait label="Ari, dita e parë" tone="baby" />
          </div>
          <p className="font-display mt-3 pb-1 text-center text-sm italic text-muted-foreground">
            Prishtinë, 2008
          </p>
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs uppercase tracking-wider text-muted-foreground"
          >
            Dita e parë — 2008, Prishtinë
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-3 text-4xl italic leading-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Mirë se erdhe në botën time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-4 text-xl italic text-foreground/80 sm:text-2xl"
          >
            Ky jam unë — dita ime e parë në këtë botë.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-editorial mt-6 max-w-xl text-foreground/85"
          >
            Nuk e kisha menduar kurrë çfarë do të përjetoja, apo çfarë do të
            ndërtoja. Por sot them faleminderit që e kam jetuar çdo moment —
            pa asnjë prej tyre, s&rsquo;do të isha kush jam sot.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 max-w-xl text-sm text-muted-foreground"
          >
            I never imagined what I&rsquo;d go through, or what I&rsquo;d
            build. But today, I&rsquo;m grateful I lived every moment —
            without any of it, I wouldn&rsquo;t be who I am today.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 text-xs uppercase tracking-wider text-muted-foreground"
          >
            Everything since ↓ — projects, writing, photography, and every
            lesson along the way.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
