"use client";

import { motion } from "motion/react";

const lines = [
  "HEY 👋 I'm Ari Thaçi.",
  "Thank you for visiting my digital home.",
  "This website documents my journey from the first day of my life",
  "to everything I build today.",
  "Every article, every project, every photo and every lesson lives here.",
  "Welcome.",
];

export function IntroReveal() {
  return (
    <section className="container-editorial py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        {lines.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={
              i === 0
                ? "font-display text-3xl italic leading-tight text-foreground sm:text-4xl md:text-5xl"
                : "font-display mt-2 text-2xl leading-snug text-foreground/75 sm:text-3xl md:mt-3 md:text-4xl"
            }
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
