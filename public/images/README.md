# Real photos go here

The homepage's opening sequence (`src/components/home/hero-morph.tsx`) is
built to crossfade a baby photo into a present-day photo as the visitor
scrolls. Until real photos are added it renders a tasteful generated
placeholder so the layout, motion, and spacing are all correct.

To go live:

1. Add `hero-baby.jpg` and `hero-current.jpg` to this folder (portrait
   orientation, ~1200×1500px, JPEG or WebP, optimized).
2. In `src/components/home/hero-morph.tsx`, pass `src="/images/hero-baby.jpg"`
   and `src="/images/hero-current.jpg"` to the two `<Portrait />` instances.

The same `<Portrait />` component is reused anywhere a life photo appears
(About page, Journal covers, Photography). Any image dropped in this
folder should be optimized (Cloudinary or `next/image` remote loader is
already wired for future uploads — see README.md at the repo root).
