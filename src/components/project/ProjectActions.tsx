import type { Project } from "@/types/project";

interface ProjectActionsProps {
  project: Project;
}

export default function ProjectActions({ project }: ProjectActionsProps) {
  const links = [
    { label: "Live Demo", href: project.demoUrl },
    { label: "GitHub", href: project.githubUrl },
  ].filter(
    (link): link is { label: string; href: string } => Boolean(link.href),
  );

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${link.label}: ${project.title}`}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
