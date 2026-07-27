import type { Metadata } from "next";
import { Download } from "lucide-react";
import { resources } from "@/lib/resources";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free templates, checklists, and prompts — built for people building the same things I am.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free, no strings"
        title="Resources"
        description="Templates, checklists, and prompt packs pulled directly from how I actually work. New ones ship as they're ready."
      />
      <div className="container-editorial grid gap-6 pb-28 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <div
            key={resource.slug}
            className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7"
          >
            <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              {resource.type}
            </span>
            <div>
              <h3 className="font-display text-xl italic text-foreground">{resource.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
            </div>
            <button
              type="button"
              disabled={!resource.available}
              className="mt-auto flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm text-muted-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} />
              {resource.available ? "Download" : "Coming soon"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
