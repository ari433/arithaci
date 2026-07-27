# Real photos go here

Real photos are used via the shared `<Portrait />` component
(`src/components/shared/portrait.tsx`) — currently on the homepage hero
(`src/components/home/hero-intro.tsx`) and the About page. Until a real
photo is supplied, `<Portrait />` renders a tasteful generated placeholder
so the layout stays correct.

To go live:

1. Add a photo to this folder (portrait orientation, ~1200×1500px, JPEG or
   WebP, optimized).
2. Pass `src="/images/your-photo.jpg"` to the `<Portrait />` instance(s)
   that should use it (homepage hero and/or `src/app/about/page.tsx`).

Any image dropped in this folder should be optimized (Cloudinary or
`next/image`'s remote loader is already wired for future uploads — see
README.md at the repo root).
