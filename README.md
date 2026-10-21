# Pediatrics Board Review — static landing page

A static, responsive rebuild of the pediatricsboardreview.com homepage using its branding,
imagery and copy. All content is local JSON; there is no backend, database, API or
authentication.

> **Front-end only.** Purchase, login, course and legal links lead to a `/coming-soon`
> placeholder.

## Tech stack

- Next.js 16 (App Router) with TypeScript, exported as a static site (`output: "export"`)
- Tailwind CSS v4 with design tokens defined as CSS variables in `src/app/globals.css`
- Poppins via `next/font` (self-hosted at build time)
- No UI or animation libraries; a few small client components (navigation, carousel, "Read more" text)

## Getting started

Requires Node.js 20.9+ (developed with Node 22) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command             | What it does                                                                 |
| ------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`       | Development server with hot reload                                           |
| `npm run build`     | Production build and static export to `out/` (runs `postbuild` afterwards)   |
| `npm run preview`   | Serves `out/` at http://localhost:4173 with a dependency-free static server  |
| `npm run lint`      | ESLint                                                                       |
| `npm run typecheck` | Generates Next.js route types, then runs `tsc --noEmit`                      |

### Production build and static preview

```bash
npm run build
npm run preview    # open http://localhost:4173
```

Deploy by uploading the contents of `out/` to any static host (Netlify, Cloudflare Pages,
GitHub Pages, S3, nginx, ...). Pages are emitted as `index.html` files inside folders
(`trailingSlash: true`), so no server rewrites are needed. Images are served unoptimized
because the Next.js image optimizer requires a server.

`next start` is not used: it does not support `output: "export"`.

### Windows note

`scripts/fix-static-export-segments.mjs` runs automatically after `npm run build`. Next.js 16.4
writes route prefetch files into nested folders when building on Windows (it builds the file name
from a backslash-separated path), which makes client-side prefetches 404. The script renames them
to the expected `__next.<segment>.txt` names. On macOS and Linux there is nothing to fix and it
does nothing.

## Project structure

```
src/
  app/                 layout (header, footer, metadata), homepage, /coming-soon placeholder
  components/
    layout/            AnnouncementBar, Header, DesktopNavigation, MobileNavigation, Logo, Footer, BackToTop
    sections/          One component per homepage section
    cards/             ProductCard, AudienceCard, FeatureCard, ReviewCard, TestimonialCard, ArticleCard ...
    ui/                Button, Container, SectionHeading, Icon, CheckList, carousels, ...
  data/                Local JSON content (site, navigation, hero, courses, features, ...)
  lib/                 content.ts (typed JSON access + validation), utils.ts
  types/               Content types matching the JSON files
public/images/         Local images (brand, photos, icons) organised by section
scripts/               Post-export fix and static preview server
```

## Editing content

All text, links and image paths live in `src/data/*.json`. `src/lib/content.ts` types each file
against `src/types/index.ts`, so a shape mismatch fails `npm run typecheck`, and invalid enum-like
values (card tones, icon names, social platforms) fail the build with a descriptive error.

Links to pages that are not part of this static build (course pages, checkout, login, legal pages,
articles) point to `/coming-soon`. Homepage section links use `/#section-id`, so they work from
every page.
