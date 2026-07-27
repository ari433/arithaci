# arithaci.com

The digital home of Ari Thaçi — an editorial, MDX-driven record of a life and
its work, built to be added to for decades rather than redesigned every
eighteen months.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Motion · MDX ·
next-themes · cmdk

## What's implemented

- **Homepage narrative** — a scroll-driven crossfade from a first photo to a
  present-day one (`src/components/home/hero-morph.tsx`), an animated
  intro, a timeline preview, latest writing, and an editorial sections grid.
- **Journal** — MDX articles with categories, tags, search, reading time,
  a scroll progress bar, an auto-generated table of contents, bookmark
  (localStorage) and share actions, related articles, and an RSS feed at
  `/journal/feed.xml`.
- **Projects** — case studies (problem / solution / timeline / lessons)
  driven by MDX under `src/content/projects`.
- **Travel** — an abstract flight-path visualization from home to every
  destination, each opening into its own MDX story.
- **Photography** — a filterable masonry gallery with a keyboard-navigable
  lightbox (real photos not yet uploaded — see below).
- **Videos, AI, Now, Uses, About, Resources, Contact** — all built out;
  AI reuses the journal system filtered by category.
- **Timeline** — a single open-ended, animated timeline (`src/lib/timeline-data.ts`)
  used both as a homepage preview and the full `/timeline` page.
- Global command palette (`⌘K`) and full-screen nav overlay.
- Dark/light mode, SEO metadata, JSON-LD, `sitemap.xml`, `robots.txt`,
  a generated OpenGraph image and icons, and a PWA manifest.

## Content

Journal posts, projects, and travel entries are MDX files under
`src/content/*`. Each file exports a `meta` object (frontmatter-as-code) and
the article body as the default export — add a new `.mdx` file to publish.

## Going live

This site runs and builds fully with zero configuration — every external
integration below is optional and fails safe (the newsletter/contact forms
log to the server console instead of sending; analytics simply doesn't
load) until you add real credentials. Copy `.env.example` to `.env.local`
and fill in what you need:

- **Real photos** — drop `hero-baby.jpg` / `hero-current.jpg` into
  `public/images/` and wire them into `hero-morph.tsx` (see
  `public/images/README.md`). Until then the hero renders a generated
  placeholder so the layout and motion are already correct.
- **Supabase** — planned home for the admin CMS, comments, and guestbook.
  Not yet wired up; needs a project + schema before those features exist.
- **Cloudinary** — for uploaded photo/video hosting once the CMS lands.
- **Resend** — powers `/api/newsletter` and `/api/contact`.
- **PostHog** — product analytics, initialized in
  `src/components/providers/posthog-provider.tsx`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Dev and build both run on webpack (`--webpack`) rather than Turbopack,
because `@next/mdx`'s remark/rehype plugins aren't yet serializable under
Turbopack.

## Not yet built

The full no-code admin panel (article/photo/video upload, drafts,
scheduled publishing, analytics dashboard, newsletter sending, comment
moderation) described in the original brief is a substantial second
project on top of this foundation — it needs Supabase (auth + database),
Cloudinary, and Resend actually provisioned before it can do anything real.
This repo's content model (MDX + a typed `meta` export) is designed so that
CMS can later write to these same files/tables without changing how pages
read content.
