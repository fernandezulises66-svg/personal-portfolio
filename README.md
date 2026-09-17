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

- `src/app` — routes, root layout, global styles, and file-based metadata
  (`icon.tsx`, `opengraph-image.tsx`), including the `projects/[slug]`
  project-detail route
- `src/components/layout` — navbar and footer
- `src/components/sections` — homepage sections (hero, projects, about, experience, education, stack, contact)
- `src/components/project` — project-detail page composition (architecture flow, screenshot gallery, action buttons)
- `src/components/ui` — small reusable UI pieces (project card, project group, detail section, bullet list, grouped list, tag list, experience item, section heading)
- `src/data` — typed content (profile, projects, experience, education, tech stack)
- `src/types` — shared TypeScript types

Content (profile info, project details, experience, education, tech stack)
lives in `src/data` and is kept separate from presentation components.

## Current Status

**Iteration 7B: Recruiter Layer, CV Integration, SEO, and Final UI Polish.**

Iterations 1–7A established the visual system, five verified projects with
detail pages and screenshots, real work/education background, and a public
recruiter contact layer (email, LinkedIn, GitHub). This iteration adds an
SEO/social metadata foundation: Open Graph and Twitter card metadata, a
generated OG image and favicon built from the portfolio's own dark/accent
visual system (`src/app/opengraph-image.tsx`, `src/app/icon.tsx`, no image
generation dependency added), and a minimal Person JSON-LD block (name,
email, GitHub/LinkedIn `sameAs`). `metadataBase` and canonical URLs are
intentionally left unset — the production domain isn't known yet and will be
configured in Iteration 8 (deployment). Hero copy was lightly polished to
foreground current technical work rather than student status; no verified
project or profile facts were changed.

The final recruiter-facing CV PDF has since been added at
`public/cv/ulises-fernandez-pertierra-cv.pdf` and is now integrated: a
**Download CV** action appears in the Hero (View Projects / Download CV /
GitHub) and in the Contact section (Email / LinkedIn / GitHub / Download CV),
both sourced from a single `cvUrl` field in central `profile.ts` data. No
DOCX is exposed publicly. The recruiter-facing contact/CV layer is now
complete.
