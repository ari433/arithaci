import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { timelineData } from "@/lib/timeline-data";
import { Timeline } from "@/components/timeline/timeline";

export function TimelinePreview() {
  const featured = timelineData.filter((entry) => entry.featured);

  return (
    <section className="container-editorial py-28 md:py-36">
      <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">The story so far</span>
          <h2 className="text-display font-display italic text-foreground">Timeline</h2>
        </div>
        <Link
          href="/timeline"
          className="group flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
        >
          See the full timeline
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>

      <Timeline entries={featured} compact />
    </section>
  );
}
