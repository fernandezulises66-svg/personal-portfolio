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

## Projects

Featured: OLA ERP Intelligence — Multi-Agent AI System (fictional ERP data;
separate from the real OLA Muebles ERP), Retail Analytics & BI Platform, OLA
Muebles ERP, AI Customer Operations Agent, RAG Knowledge Agent, AI SQL Data
Analyst Agent. Selected:
Legis Landing Page (built as part of work at mooba; no public repo link),
GPSolutions Website. Four project categories are represented: `ai-data`,
`data-bi`, `software`, and `web`.

## Current Status

**Iteration 8B: Production Metadata and Retail Analytics & BI Platform.**

The portfolio is deployed on Vercel and publicly live at the URL above
(GitHub: [fernandezulises66-svg/personal-portfolio](https://github.com/fernandezulises66-svg/personal-portfolio),
branch `main`), with production-aware metadata configured for the live
deployment (`metadataBase`, homepage/per-project canonicals via a
centralized `siteUrl` constant in `profile.ts`, a Person JSON-LD block, and
`sitemap.xml` / `robots.txt` covering all real project pages) and a public
smoke test against the live site passing (all project routes return 200,
unknown slugs still 404, screenshots and CV load correctly, no phone number
or invented claims found).

Retail Analytics & BI Platform is the newest addition: a sixth featured
project under a new `data-bi` category, covering an end-to-end retail
analytics pipeline (PostgreSQL dimensional warehouse, SQL analytics layer,
6-page Power BI report validated against 16 KPIs) on the public Olist
Brazilian E-Commerce dataset. It is not an AI/ML project and has no live
demo — only a public GitHub repository.
