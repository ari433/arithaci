# Real photos go here

Real photos are used via the shared `<Portrait />` component
(`src/components/shared/portrait.tsx`):

- **Homepage hero** (`src/components/home/hero-first-day.tsx`) — the very
  first photo of Ari's life, the day he was born (`tone="baby"`).
- **About page** (`src/app/about/page.tsx`) — a present-day photo
  (`tone="current"`).

Until real photos are supplied, `<Portrait />` renders a tasteful
generated placeholder for each tone so the layout stays correct.

To go live:

1. Add a photo to this folder (portrait orientation, ~1200×1500px, JPEG or
   WebP, optimized).
2. Pass `src="/images/your-photo.jpg"` to the relevant `<Portrait />`
   instance.

Any image dropped in this folder should be optimized (Cloudinary or
`next/image`'s remote loader is already wired for future uploads — see
README.md at the repo root).
