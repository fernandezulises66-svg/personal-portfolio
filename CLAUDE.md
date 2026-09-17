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
- Project URLs (repo, live demo) and metrics must be verified against the
  actual project before publication — never guessed or pattern-matched from
  a project's name.
- Curated evaluation results (e.g. "20/20 curated E2E benchmark") must not be
  reframed or worded as general model accuracy claims.
- Do not create fake project screenshots, thumbnails, or metrics.
- The portfolio contains multiple project categories (`ai-data`, `software`,
  `web`). AI/data projects and traditional software/web projects should
  coexist — don't artificially force every project into an AI narrative.
- Featured status (`tier: "featured"` vs `"selected"`) is a presentation
  choice, not a claim that non-featured projects are lower quality.
- Do not publish a project (card or detail page) until its factual content
  and URLs have been verified.
- For real client work, distinguish clearly between what Ulises actually
  built (the website/software implementation) and the client's own
  underlying business claims or services — don't present the client's
  business capabilities as features Ulises engineered.
- Non-AI projects (real-world software/web work) must not be forced into the
  benchmark/evaluation-metric presentation pattern used for AI projects. Use
  a status callout (e.g. "MVP" / "Active adoption") instead where a curated
  benchmark doesn't apply.
- Describe project lifecycle status accurately (e.g. "MVP in active
  adoption") — never round up to "finished," "production-ready," or
  "company-wide deployment" without confirmation.
- Never expose a private or access-unverified repository URL as a public
  recruiter-facing GitHub link. Leave `githubUrl` `null` until visibility is
  confirmed.
- Screenshots must be real project assets that already exist in the repo
  (`public/projects/`) — never generate, mock, or hotlink an image as project
  evidence. Omit the screenshots section entirely if no real asset exists.
- Screenshots of real-business software (e.g. OLA ERP) require a privacy
  review before use, at the same standard as any other real-business fact in
  this portfolio.
- Screenshots must not expose credentials, tokens, PII, confidential
  financial figures, or other internal operational secrets. Reject and
  document any screenshot that fails this check instead of cropping/editing
  it into compliance.
- Do not present fake UI mockups, placeholder images, or device frames as
  project evidence.
- Phone numbers and other private contact details present in source
  materials (e.g. a CV) must not be published in the portfolio unless the
  user explicitly approves publishing that specific detail — appearing in a
  source document is not itself approval.
- Current role/title/company/project claims must remain consistent with the
  user's verified CV/profile information; don't let portfolio wording drift
  from what's been explicitly confirmed.
- Private employer projects (e.g. work built as part of a job) must not
  become public portfolio projects — with a card, detail route, screenshots,
  or repo/demo links — without the user's explicit approval to present that
  specific work publicly.
- Project detail pages remain the authoritative source for project-specific
  technical claims (module counts, architecture, data model, deployment,
  etc.); other sections (e.g. Experience) should stay concise and defer to
  the project page rather than restating or diverging from its details.
