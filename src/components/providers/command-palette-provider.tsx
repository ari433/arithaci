"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Moon, Search, Sun } from "lucide-react";
import { allNav } from "@/lib/site-config";

const CommandPaletteContext = createContext<{ open: () => void } | null>(null);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) throw new Error("useCommandPalette must be used within CommandPaletteProvider");
  return ctx;
}

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement;
        if (["INPUT", "TEXTAREA"].includes(target.tagName)) return;
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function go(href: string) {
    router.push(href);
    setOpen(false);
  }

  return (
    <CommandPaletteContext.Provider value={{ open: () => setOpen(true) }}>
      {children}

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global command palette"
        className="fixed left-1/2 top-[18%] z-100 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} />
          <Command.Input
            autoFocus
            placeholder="Jump to a section, or search the journal…"
            className="h-14 w-full bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
          />
        </div>
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          <Command.Group
            heading="Sections"
            className="px-1 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3"
          >
            {allNav.map((item) => (
              <Command.Item
                key={item.href}
                value={`${item.label} ${item.description}`}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer flex-col gap-0.5 rounded-lg px-3 py-2.5 aria-selected:bg-muted"
              >
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group
            heading="Appearance"
            className="px-1 pb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-2 [&_[cmdk-group-heading]]:pt-3"
          >
            <Command.Item
              value="toggle dark light theme"
              onSelect={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-muted"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Moon className="h-4 w-4" strokeWidth={1.5} />
              )}
              Toggle theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </CommandPaletteContext.Provider>
  );
}
