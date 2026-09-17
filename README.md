# Personal Portfolio — Ulises Fernandez Pertierra

Personal developer portfolio showcasing AI, data, and software projects for
technical recruiters and hiring managers.

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

- `src/app` — routes, root layout, and global styles, including the
  `projects/[slug]` project-detail route
- `src/components/layout` — navbar and footer
- `src/components/sections` — homepage sections (hero, projects, about, experience, education, stack, contact)
- `src/components/project` — project-detail page composition (architecture flow, screenshot gallery, action buttons)
- `src/components/ui` — small reusable UI pieces (project card, project group, detail section, bullet list, grouped list, tag list, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 6: Visual Evidence and Project Screenshots.**

Iterations 1–5 established the visual system, real profile/background
content, five verified projects (AI/data, full-stack business software, and
real client web work), and a shared, data-driven project detail-page
template (`/projects/[slug]`). This iteration adds real project
screenshots/visual evidence to each of the five project detail pages, backed
by an optional `screenshots` field on `ProjectDetail` and a small
`ProjectGallery` component built on Next.js Image. Only screenshots that
actually exist in the repository and passed a privacy/content review were
used — no screenshots were fabricated. The homepage cards remain text-only
by design; screenshots live on the detail pages only. LinkedIn/email contact
links and a CV download are still not implemented.
