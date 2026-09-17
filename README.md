# Personal Portfolio — Ulises Fernandez Pertierra

Personal developer portfolio showcasing AI, data, and software projects for
technical recruiters and hiring managers.

**Live Portfolio:** [personal-portfolio-one-neon-84.vercel.app](https://personal-portfolio-one-neon-84.vercel.app)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- React
- Tailwind CSS

## Local Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other commands:

```bash
npm run lint   # ESLint
npm run build  # Production build
```

## Project Structure

- `src/app` — routes, root layout, global styles, and file-based metadata
  (`icon.tsx`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`), including
  the `projects/[slug]` project-detail route
- `src/components/layout` — navbar and footer
- `src/components/sections` — homepage sections (hero, projects, about, experience, education, stack, contact)
- `src/components/project` — project-detail page composition (architecture flow, screenshot gallery, action buttons)
- `src/components/ui` — small reusable UI pieces (project card, project group, detail section, bullet list, grouped list, tag list, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 8B: Production Metadata and Final Public Smoke Test.**

The portfolio is deployed on Vercel and publicly live at the URL above
(GitHub: [fernandezulises66-svg/personal-portfolio](https://github.com/fernandezulises66-svg/personal-portfolio),
branch `main`). Iterations 1–7B established the visual system, five verified
projects with detail pages and screenshots, real work/education background,
a public recruiter contact layer (email, LinkedIn, GitHub), and CV
integration (Download CV in Hero and Contact, sourced from a central
`cvUrl` field). This iteration configures production-aware metadata now that
the real deployment URL is known: `metadataBase` and a homepage/per-project
canonical (`alternates.canonical`) using a single centralized `siteUrl`
constant in `profile.ts`, a finalized Person JSON-LD block (adds `url`
alongside the existing `name`/`email`/`sameAs`), and `sitemap.xml` /
`robots.txt` routes covering the homepage and all 5 real project pages. No
verified project or profile facts were changed. Final public smoke testing
against the live deployment is in progress as part of this same pass.
