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
- `src/components/ui` — small reusable UI pieces (project card, project group, detail section, bullet list, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 4: Project Detail System and Portfolio Expansion Architecture.**

Iterations 1–3 established the visual system, real profile/background
content, and three verified featured AI/data projects. This iteration adds
real project detail pages (`/projects/[slug]`) for those three projects,
built from a shared, data-driven detail-page template. The project data
model now includes a category/tier taxonomy (`ai-data` / `software` / `web`,
`featured` / `selected`) and the homepage Projects section is structured to
support additional project groups — such as future selected software/web
projects — without redesigning the Project type or components. No
software/web project content has been added yet; that will come in a later
iteration once verified. LinkedIn/email contact links and a CV download are
still not implemented.
