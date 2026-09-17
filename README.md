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
- `src/components/project` — project-detail page composition (architecture flow, action buttons)
- `src/components/ui` — small reusable UI pieces (project card, project group, detail section, bullet list, grouped list, tag list, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 5: Portfolio Expansion — OLA Muebles ERP + GPSolutions.**

Iterations 1–4 established the visual system, real profile/background
content, three verified featured AI/data projects, and a shared, data-driven
project detail-page template (`/projects/[slug]`). This iteration expands
the portfolio beyond AI-agent projects: it adds OLA Muebles ERP, a
full-stack business system (`category: "software"`), as a featured project,
and GPSolutions Website, a real client website (`category: "web"`), as a
selected software project. The portfolio now demonstrates AI/data systems,
full-stack business software, and real client web development side by side.
The `Project` type was extended to support a status callout (e.g. "MVP")
alongside the existing benchmark-metric callout, so non-AI projects aren't
forced into an evaluation-metric presentation, and homepage featured/selected
grouping now keys off `tier` alone rather than assuming featured implies
`ai-data`. LinkedIn/email contact links and a CV download are still not
implemented.
