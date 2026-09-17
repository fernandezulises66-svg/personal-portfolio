@AGENTS.md

# Project Rules — Ulises Fernandez Pertierra Portfolio

- This portfolio targets technical recruiters and hiring managers evaluating
  AI/data/software skills. Content accuracy over marketing hype, always.
- Never invent project metrics, technical claims, dates, companies,
  achievements, or qualifications. If a real value isn't confirmed, leave the
  field `null`/`undefined` rather than filling in a placeholder-looking value.
- Project and profile information comes from the central typed data files in
  `src/data/` (`projects.ts`, `profile.ts`, `stack.ts`), not hardcoded in
  JSX. Add new fields to `src/types/` when the data shape needs to grow.
- Keep dependencies minimal. Don't add a backend, database, auth, CMS,
  Redux/state libraries, animation frameworks, or UI component frameworks
  unless there's a genuine, specific need.
- Design mobile-first and verify layouts at mobile/tablet/desktop widths.
  Avoid horizontal overflow.
- Accessibility matters: semantic HTML, real buttons/anchors, logical heading
  hierarchy, visible focus states, sufficient color contrast. Don't reach for
  ARIA when native HTML already provides the semantics.
- Use Server Components by default. Only add `"use client"` where actual
  interactivity requires it.
- Never render links for missing/null URLs (no `href="#"` placeholders). Omit
  the link or element instead of rendering something broken.
- Don't claim expertise, "production-ready" status, or completeness that
  isn't backed by what's actually built and documented.
- Work in small, incremental iterations with focused commits rather than
  large speculative builds.
- Never invent education or work experience dates. If a date isn't confirmed,
  omit it rather than approximate it.
- Descriptive portfolio role labels (e.g. "Technology & Data Operations")
  must be presented as descriptive summaries, not official HR job titles,
  unless an actual formal title has been confirmed.
- Personal contact details (email, LinkedIn, phone, etc.) are added only when
  explicitly provided by the user — never inferred or guessed.
- Project claims must remain grounded in the actual project repositories;
  don't describe architecture, results, or scope beyond what those repos
  demonstrate.
