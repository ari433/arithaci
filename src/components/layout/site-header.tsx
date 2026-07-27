"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { primaryNav } from "@/lib/site-config";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NavOverlay } from "@/components/layout/nav-overlay";
import { useCommandPalette } from "@/components/providers/command-palette-provider";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const commandPalette = useCommandPalette();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-80 transition-colors duration-300",
          scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <div className="container-editorial flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-xl italic tracking-tight">
            Ari Thaçi
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryNav.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              onClick={commandPalette.open}
              className="flex h-9 items-center gap-2 rounded-full border border-border px-3 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-mono text-[10px] md:inline">
                ⌘K
              </kbd>
            </button>
            <ThemeToggle className="hidden sm:flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 items-center gap-2 rounded-full border border-border pl-3 pr-1.5 text-sm transition-colors hover:border-foreground/30"
              aria-label="Open menu"
            >
              <span className="hidden sm:inline">Menu</span>
              <Menu className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
