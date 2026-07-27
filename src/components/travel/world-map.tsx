"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { TripMeta } from "@/lib/travel";

const VIEW_W = 1000;
const VIEW_H = 460;
const HOME_SLUG = "pristina";

function project([lon, lat]: [number, number]) {
  const x = ((lon + 180) / 360) * VIEW_W;
  const y = ((90 - lat) / 180) * VIEW_H;
  return { x, y };
}

// Sparse dot field as an abstract, non-literal backdrop — atmosphere, not cartography.
const dotField = Array.from({ length: 26 }, (_, row) =>
  Array.from({ length: 52 }, (_, col) => ({
    x: (col / 51) * VIEW_W,
    y: (row / 25) * VIEW_H,
    show: (row * 7 + col * 3) % 5 !== 0,
  })),
).flat();

export function WorldMap({ trips }: { trips: TripMeta[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const home = trips.find((t) => t.slug === HOME_SLUG) ?? trips[0];
  const others = trips.filter((t) => t.slug !== home.slug);
  const homePos = project(home.coordinates);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full">
        <g>
          {dotField
            .filter((d) => d.show)
            .map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={1.1} className="fill-muted-foreground/20" />
            ))}
        </g>

        {others.map((trip, i) => {
          const pos = project(trip.coordinates);
          const midX = (homePos.x + pos.x) / 2;
          const midY = Math.min(homePos.y, pos.y) - 40;
          const path = `M ${homePos.x} ${homePos.y} Q ${midX} ${midY} ${pos.x} ${pos.y}`;
          return (
            <motion.path
              key={trip.slug}
              d={path}
              fill="none"
              strokeWidth={1}
              className="stroke-accent/40"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: i * 0.15, ease: "easeInOut" }}
            />
          );
        })}

        <g>
          <circle cx={homePos.x} cy={homePos.y} r={5} className="fill-accent" />
          <circle cx={homePos.x} cy={homePos.y} r={9} className="fill-none stroke-accent/40" />
        </g>

        {others.map((trip) => {
          const pos = project(trip.coordinates);
          return (
            <g
              key={trip.slug}
              onMouseEnter={() => setHovered(trip.slug)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              <Link href={`/travel/${trip.slug}`}>
                <circle cx={pos.x} cy={pos.y} r={12} fill="transparent" />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={hovered === trip.slug ? 5.5 : 4}
                  className="fill-foreground transition-all"
                />
              </Link>
            </g>
          );
        })}
      </svg>

      {others.map((trip) => {
        const pos = project(trip.coordinates);
        if (hovered !== trip.slug) return null;
        return (
          <div
            key={trip.slug}
            style={{ left: `${(pos.x / VIEW_W) * 100}%`, top: `${(pos.y / VIEW_H) * 100}%` }}
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+14px)] rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-lg"
          >
            <p className="font-display italic text-foreground">{trip.city}, {trip.country}</p>
            <p className="text-muted-foreground">{trip.year}</p>
          </div>
        );
      })}

      <p className="border-t border-border px-6 py-3 text-center text-xs text-muted-foreground">
        Every line starts in Prishtina. Hover a point, or scroll down for the story behind it.
      </p>
    </div>
  );
}
