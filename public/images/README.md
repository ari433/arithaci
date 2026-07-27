# Real photos go here

The homepage now opens with an AI robot greeter
(`src/components/home/ai-greeting-hero.tsx`), not a photo — so there's no
required image for the homepage hero anymore.

Real photos are still used elsewhere via the shared `<Portrait />`
component (`src/components/shared/portrait.tsx`), currently on the About
page. Until a real photo is supplied it renders a tasteful generated
placeholder so the layout stays correct.

To go live:

1. Add a photo to this folder (portrait orientation, ~1200×1500px, JPEG or
   WebP, optimized).
2. Pass `src="/images/your-photo.jpg"` to the `<Portrait />` instance that
   should use it (e.g. in `src/app/about/page.tsx`).

Any image dropped in this folder should be optimized (Cloudinary or
`next/image`'s remote loader is already wired for future uploads — see
README.md at the repo root).
