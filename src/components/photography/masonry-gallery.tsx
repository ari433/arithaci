"use client";

import { useMemo, useState } from "react";
import { photoCategories, photos } from "@/lib/photography";
import { PhotoTile } from "@/components/photography/photo-tile";
import { Lightbox } from "@/components/photography/lightbox";
import { cn } from "@/lib/utils";

export function MasonryGallery() {
  const [category, setCategory] = useState<(typeof photoCategories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (category === "All" ? photos : photos.filter((p) => p.category === category)),
    [category],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {photoCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              category === cat
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {filtered.map((photo) => (
          <PhotoTile
            key={photo.id}
            photo={photo}
            onClick={() => setActiveIndex(filtered.indexOf(photo))}
          />
        ))}
      </div>

      <Lightbox
        photos={filtered}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </div>
  );
}
