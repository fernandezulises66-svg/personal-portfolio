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

- `src/app` — routes, root layout, and global styles
- `src/components/layout` — navbar and footer
- `src/components/sections` — homepage sections (hero, projects, about, experience, education, stack, contact)
- `src/components/ui` — small reusable UI pieces (project card, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 3: Featured Projects.**

Iterations 1–2 established the visual system, homepage skeleton, and real
profile/background content. This iteration replaces the placeholder project
cards with real, verified data for the three featured projects — actual
GitHub repository links, live Streamlit demo links, and curated
project-specific evaluation metrics. Project detail pages, LinkedIn/email
contact links, and a CV download are not implemented yet and will be added
in later iterations.
