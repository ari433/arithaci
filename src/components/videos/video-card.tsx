"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { VideoItem } from "@/lib/videos";

export function VideoCard({ video }: { video: VideoItem }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group flex flex-col gap-3">
      <button
        type="button"
        onClick={() => video.youtubeId && setPlaying(true)}
        className="relative block aspect-video w-full overflow-hidden rounded-xl border border-border"
      >
        {playing && video.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                background: `radial-gradient(120% 100% at 30% 20%, hsl(${video.hue} 45% 78%) 0%, hsl(${video.hue} 35% 45%) 55%, hsl(${video.hue} 40% 12%) 100%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black transition-transform group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
              </span>
            </div>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2.5 py-0.5 font-mono text-xs text-white/90">
              {video.duration}
            </span>
          </>
        )}
      </button>

      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
          <span>{video.platform}</span>
          <span aria-hidden>·</span>
          <span>{video.year}</span>
        </div>
        <h3 className="font-display mt-1 text-lg italic text-foreground">{video.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
      </div>
    </div>
  );
}
