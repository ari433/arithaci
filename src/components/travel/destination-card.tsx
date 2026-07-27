import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { TripMeta } from "@/lib/travel";

export function DestinationCard({ trip }: { trip: TripMeta }) {
  return (
    <Link
      href={`/travel/${trip.slug}`}
      className="group flex items-center justify-between gap-4 border-b border-border py-6 first:pt-0"
    >
      <div>
        <p className="font-display text-2xl italic text-foreground transition-colors group-hover:text-accent">
          {trip.city}, {trip.country}
        </p>
        <p className="mt-1 max-w-lg text-sm text-muted-foreground">{trip.excerpt}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">{trip.year}</span>
        <ArrowUpRight
          className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
