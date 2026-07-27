"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { primaryNav, secondaryNav, siteConfig } from "@/lib/site-config";

export function NavOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-90 flex flex-col bg-background"
        >
          <div className="container-editorial flex items-center justify-between py-6">
            <span className="font-display text-lg italic text-foreground">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="container-editorial flex flex-1 flex-col justify-center gap-12 pb-16 md:flex-row md:gap-24">
            <nav className="flex flex-col gap-1">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.045, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline gap-4 py-2"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    <span className="font-display text-4xl italic text-foreground transition-colors group-hover:text-accent md:text-5xl">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <nav className="flex flex-col gap-1 md:pt-3">
              {secondaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex flex-col gap-0.5 py-2 text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <span className="text-base">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          <div className="container-editorial flex flex-wrap items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted-foreground">
            <span>{siteConfig.name} — Digital Home</span>
            <div className="flex gap-5">
              <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
                GitHub
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-foreground">
                Instagram
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">
                X
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
