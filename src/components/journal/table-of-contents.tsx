"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Heading = { id: string; text: string; level: number };

export function TableOfContents({ containerId }: { containerId: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll("h2, h3")) as HTMLElement[];
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time scan of rendered MDX headings on mount
    setHeadings(
      nodes.map((node) => ({
        id: node.id,
        text: node.textContent ?? "",
        level: node.tagName === "H3" ? 3 : 2,
      })),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [containerId]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden max-w-56 lg:block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">On this page</span>
      <ul className="mt-4 flex flex-col gap-2.5 border-l border-border">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: heading.level === 3 ? "1.75rem" : "1rem" }}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "-ml-px block border-l pl-3 text-sm transition-colors",
                activeId === heading.id
                  ? "border-accent text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
