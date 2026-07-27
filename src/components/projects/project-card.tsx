import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectMeta } from "@/lib/projects";
import { cn } from "@/lib/utils";

const statusLabel: Record<ProjectMeta["status"], string> = {
  live: "Live",
  building: "In progress",
  archived: "Archived",
};

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs",
            project.status === "live"
              ? "border-accent/40 text-accent"
              : "border-border text-muted-foreground",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              project.status === "live" ? "bg-accent" : "bg-muted-foreground",
            )}
          />
          {statusLabel[project.status]}
        </span>
      </div>

      <div>
        <h3 className="font-display flex items-center gap-2 text-2xl italic text-foreground transition-colors group-hover:text-accent">
          {project.title}
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            strokeWidth={1.5}
          />
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.excerpt}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
