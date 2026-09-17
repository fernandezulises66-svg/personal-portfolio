import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  emphasize?: boolean;
}

export default function ProjectCard({
  project,
  index,
  emphasize = false,
}: ProjectCardProps) {
  // Live Demo / GitHub only — a "View Project" detail link is intentionally
  // withheld until detail routes exist (Iteration 4).
  const links = [
    { label: "Live Demo", href: project.demoUrl },
    { label: "GitHub", href: project.githubUrl },
  ].filter(
    (link): link is { label: string; href: string } => Boolean(link.href),
  );

  return (
    <article
      className={`flex flex-col rounded-lg border p-6 transition-colors ${
        emphasize
          ? "border-accent/40 bg-surface hover:border-accent/60"
          : "border-border bg-surface hover:border-accent/40"
      }`}
    >
      <span className="font-mono text-xs text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.metric ? (
        <div className="mt-4">
          <p className="font-mono text-2xl font-semibold text-accent">
            {project.metric.value}
          </p>
          {project.metric.label ? (
            <p className="text-xs text-muted">{project.metric.label}</p>
          ) : null}
        </div>
      ) : null}

      {project.highlights && project.highlights.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-muted">
              <span className="text-accent" aria-hidden="true">
                –
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label}: ${project.title}`}
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              {link.label} <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
