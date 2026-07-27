"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Portrait } from "@/components/shared/portrait";
import { useClampedTransform } from "@/lib/use-clamped-transform";

export function HeroMorph() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const babyOpacity = useClampedTransform(scrollYProgress, [0, 0.42, 0.58], [1, 1, 0]);
  const currentOpacity = useClampedTransform(scrollYProgress, [0.42, 0.6, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const grayscale = useClampedTransform(scrollYProgress, [0, 0.5, 0.85], [1, 0.35, 0]);
  const filter = useTransform(grayscale, (v) => `grayscale(${v})`);

  const captionOneOpacity = useClampedTransform(scrollYProgress, [0, 0.1, 0.28], [1, 1, 0]);
  const captionOneY = useClampedTransform(scrollYProgress, [0, 0.28], [0, -12]);
  const captionTwoOpacity = useClampedTransform(scrollYProgress, [0.68, 0.85, 1], [0, 1, 1]);
  const captionTwoY = useClampedTransform(scrollYProgress, [0.68, 1], [12, 0]);

  const scrollHintOpacity = useClampedTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-background">
        <motion.div
          style={{ scale, filter }}
          className="relative h-[54vh] w-[82vw] max-w-sm sm:h-[62vh] sm:w-[56vw] md:h-[72vh] md:w-[44vw]"
        >
          <motion.div style={{ opacity: babyOpacity }} className="absolute inset-0">
            <Portrait label="Ari — day one" tone="baby" priority />
          </motion.div>
          <motion.div style={{ opacity: currentOpacity }} className="absolute inset-0">
            <Portrait label="Ari — today" tone="current" />
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-24 left-0 right-0 flex justify-center px-6 text-center sm:bottom-28">
          <motion.p
            style={{ opacity: captionOneOpacity, y: captionOneY }}
            className="font-display absolute text-xl italic text-foreground/85 sm:text-2xl md:text-3xl"
          >
            Everything started here.
          </motion.p>
          <motion.p
            style={{ opacity: captionTwoOpacity, y: captionTwoY }}
            className="font-display absolute text-xl italic text-foreground/85 sm:text-2xl md:text-3xl"
          >
            Everything I build today.
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-3 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Scroll</span>
          <span className="h-8 w-px animate-pulse bg-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
}
