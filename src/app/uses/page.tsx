import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, software, and tools behind the work.",
};

const groups = [
  {
    title: "Hardware",
    items: ["MacBook Pro 14″, M-series", "Fujifilm X100V", "iPhone 15 Pro", "LG UltraFine display"],
  },
  {
    title: "Development",
    items: ["VS Code", "Next.js & TypeScript", "Supabase", "Vercel", "GitHub"],
  },
  {
    title: "AI tools",
    items: ["Claude", "OpenAI API", "Cursor", "PostHog for product analytics"],
  },
  {
    title: "Design",
    items: ["Figma", "Cloudinary", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Writing & thinking",
    items: ["Notion", "Obsidian", "A paper notebook that never leaves my bag"],
  },
];

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The tools behind the work"
        title="Uses"
        description="Everything I actually reach for, day to day — not a sponsored list."
      />
      <div className="container-editorial grid gap-14 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-2xl italic text-foreground">{group.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
