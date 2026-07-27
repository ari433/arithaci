"use client";

import { motion } from "motion/react";
import type { Photo } from "@/lib/photography";
import { cn } from "@/lib/utils";

const aspectClass: Record<Photo["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function PhotoTile({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layoutId={`photo-${photo.id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative mb-4 block w-full overflow-hidden rounded-xl border border-border text-left",
        aspectClass[photo.aspect],
      )}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
        style={{
          background: `radial-gradient(120% 100% at 30% 20%, hsl(${photo.hue} 45% 78%) 0%, hsl(${photo.hue} 35% 45%) 55%, hsl(${photo.hue} 40% 12%) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-display text-sm italic text-white">{photo.title}</p>
        <p className="text-xs text-white/70">
          {photo.location} — {photo.year}
        </p>
      </div>
    </motion.button>
  );
}
