"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/lib/photography";

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, photos.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {photo && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex items-center justify-between p-5 text-white/80">
            <span className="font-mono text-xs">
              {index + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center gap-4 px-4 pb-8">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index - 1 + photos.length) % photos.length);
              }}
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:flex"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <motion.div
              key={photo.id}
              layoutId={`photo-${photo.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] max-h-[70vh] w-full max-w-2xl overflow-hidden rounded-2xl"
              style={{
                background: `radial-gradient(120% 100% at 30% 20%, hsl(${photo.hue} 45% 78%) 0%, hsl(${photo.hue} 35% 45%) 55%, hsl(${photo.hue} 40% 12%) 100%)`,
              }}
            />

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index + 1) % photos.length);
              }}
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:flex"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-white/10 px-6 py-5 text-center text-xs text-white/60 sm:justify-between sm:text-left"
          >
            <div>
              <p className="font-display text-base italic text-white">{photo.title}</p>
              <p>{photo.location}</p>
            </div>
            <div className="flex gap-6 font-mono uppercase tracking-wider">
              <span>{photo.camera}</span>
              <span>{photo.year}</span>
              <span>{photo.category}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
