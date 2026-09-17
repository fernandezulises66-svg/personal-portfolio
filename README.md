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

**Iteration 7A: Profile Alignment.**

Iterations 1–6 established the visual system, five verified projects with
detail pages and real screenshots, and real work/education background. This
iteration aligns the portfolio with Ulises's current, verified professional
profile: it adds his current role (Data & Systems Analyst at mooba) to
Experience alongside the now-approved OLA Muebles and GPS role titles and
periods, and adds public recruiter contact channels (LinkedIn and email,
alongside the existing GitHub link) to the Contact section and footer. About,
Hero, and the global tech stack were updated to reflect this current profile
without restating project-specific technical details, which remain owned by
each project's detail page. A CV download is intentionally not included yet
— that's planned for Iteration 7B.
