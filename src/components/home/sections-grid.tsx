import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    href: "/journal",
    label: "Journal",
    blurb: "Essays on building, failing, and learning in public.",
    span: "md:col-span-2 md:row-span-2",
    big: true,
  },
  {
    href: "/projects",
    label: "Projects",
    blurb: "Agjenti AI and everything else I've shipped.",
    span: "md:col-span-2",
  },
  {
    href: "/travel",
    label: "Travel",
    blurb: "Every city that changed how I think.",
    span: "",
  },
  {
    href: "/photography",
    label: "Photography",
    blurb: "Moments worth keeping.",
    span: "",
  },
  {
    href: "/ai",
    label: "AI",
    blurb: "Guides, prompts, and experiments.",
    span: "",
  },
  {
    href: "/videos",
    label: "Videos & Talks",
    blurb: "Reels, podcasts, and appearances.",
    span: "md:col-span-2",
  },
];

export function SectionsGrid() {
  return (
    <section className="container-editorial py-28 md:py-36">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Explore</span>
        <h2 className="text-display font-display italic text-foreground">Everywhere to start</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[13rem]">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50",
              section.span,
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10"
            />
            <span className="flex items-center justify-between">
              <span
                className={cn(
                  "font-display italic text-foreground",
                  section.big ? "text-3xl md:text-4xl" : "text-2xl",
                )}
              >
                {section.label}
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                strokeWidth={1.5}
              />
            </span>
            <p className="max-w-sm text-sm text-muted-foreground">{section.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
