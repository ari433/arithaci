import Image from "next/image";

/**
 * Stylized placeholder for a life photograph. Drop real photos into
 * /public/images (see /public/images/README.md) and pass `src` to
 * switch this to a real next/image render — everything else (frame,
 * caption, motion wrapper) stays the same.
 */
export function Portrait({
  label,
  tone,
  src,
  priority,
  frame = true,
}: {
  label: string;
  tone: "baby" | "current";
  src?: string;
  priority?: boolean;
  /** Set to false for full-bleed use (no rounded corners, border, shadow, or caption chip). */
  frame?: boolean;
}) {
  const gradientId = `portrait-grad-${tone}`;
  const grainId = `portrait-grain-${tone}`;

  return (
    <div
      className={
        frame
          ? "relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border/60 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.45)] sm:rounded-[2rem]"
          : "relative h-full w-full overflow-hidden"
      }
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes="(min-width: 768px) 46vw, 85vw"
          className="object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 400 500"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label={label}
        >
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="36%" r="78%">
              {tone === "baby" ? (
                <>
                  <stop offset="0%" stopColor="#f6ead6" />
                  <stop offset="52%" stopColor="#dcb98a" />
                  <stop offset="100%" stopColor="#3a2b1a" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#ece0cd" />
                  <stop offset="52%" stopColor="#8a6b45" />
                  <stop offset="100%" stopColor="#0d0b09" />
                </>
              )}
            </radialGradient>
            <filter id={grainId}>
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
            </filter>
          </defs>
          <rect width="400" height="500" fill={`url(#${gradientId})`} />
          <rect width="400" height="500" filter={`url(#${grainId})`} />
        </svg>
      )}
      {frame && (
        <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1 font-mono text-[11px] tracking-wide text-white/85 backdrop-blur-sm sm:bottom-5 sm:left-5">
          {label}
        </span>
      )}
    </div>
  );
}
