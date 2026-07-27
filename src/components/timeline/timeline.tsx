"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import type { TimelineEntry } from "@/lib/timeline-data";
import { cn } from "@/lib/utils";

const categoryColor: Record<TimelineEntry["category"], string> = {
  life: "bg-foreground/40",
  craft: "bg-accent",
  milestone: "bg-accent",
  future: "bg-foreground/20",
};

export function Timeline({
  entries,
  compact = false,
}: {
  entries: TimelineEntry[];
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]">
        <motion.div
          style={{ scaleY: progress }}
          className="h-full w-full origin-top bg-accent"
        />
      </div>

      <ol className={cn("flex flex-col", compact ? "gap-8" : "gap-14")}>
        {entries.map((entry, i) => (
          <motion.li
            key={`${entry.year}-${entry.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 sm:pl-10"
          >
            <span
              className={cn(
                "absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-background sm:h-4 sm:w-4",
                categoryColor[entry.category],
              )}
            />
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-5">
              <span className="font-mono text-xs text-muted-foreground sm:w-16 sm:shrink-0">
                {entry.year}
              </span>
              <div>
                <h3 className={cn("font-display italic text-foreground", compact ? "text-xl" : "text-2xl md:text-3xl")}>
                  {entry.title}
                </h3>
                <p className={cn("mt-1 text-muted-foreground", compact ? "text-sm" : "text-base")}>
                  {entry.description}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
