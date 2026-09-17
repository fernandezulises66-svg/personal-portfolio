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
- `src/components/sections` — homepage sections (hero, projects, about, stack, contact)
- `src/components/ui` — small reusable UI pieces (project card, section heading)
- `src/data` — typed content (profile, projects, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, tech stack) lives in `src/data` and
is kept separate from presentation components.

## Current Status

**Iteration 1: Foundation, Visual System, and Home Skeleton.**

This iteration establishes the tech stack, visual/design system, and a
homepage skeleton (navbar, hero, featured projects placeholder, about
placeholder, tech stack, contact CTA, footer). Project detail pages, full
biography, and real contact/profile links are not implemented yet and will
be added in later iterations.
