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

**Iteration 2: Real Profile, Experience, Education, and Skills.**

Iteration 1 established the tech stack, visual/design system, and homepage
skeleton. This iteration replaces placeholder personal content with real
profile, biography, work experience, education, and a categorized tech
stack, plus the real GitHub profile link. Project detail pages, LinkedIn/
email contact links, and a CV download are not implemented yet and will be
added in later iterations.
