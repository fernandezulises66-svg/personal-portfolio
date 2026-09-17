import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold text-foreground">
          {experience.company}
        </h3>
        {experience.period ? (
          <span className="font-mono text-xs text-muted">
            {experience.period}
          </span>
        ) : null}
      </div>
      {experience.roleLabel ? (
        <p className="mt-1 text-sm text-muted">{experience.roleLabel}</p>
      ) : null}
      {experience.location ? (
        <p className="mt-1 text-xs text-muted">{experience.location}</p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {experience.summary}
      </p>
      <ul className="mt-3 space-y-1.5">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm text-muted">
            <span className="text-accent">–</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
