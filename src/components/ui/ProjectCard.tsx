import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const links = [
    { label: "GitHub", href: project.githubUrl },
    { label: "Live demo", href: project.demoUrl },
    { label: "Details", href: project.detailUrl },
  ].filter(
    (link): link is { label: string; href: string } => Boolean(link.href),
  );

  return (
    <article className="flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40">
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
        <p className="mt-3 font-mono text-xs text-accent">{project.metric}</p>
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
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              {link.label} →
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-5 border-t border-border pt-4 text-xs text-muted">
          Write-up coming soon.
        </p>
      )}
    </article>
  );
}
