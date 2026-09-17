import type { Project } from "@/types/project";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectGroupProps {
  title?: string;
  projects: readonly Project[];
  emphasizeFirst?: boolean;
}

export default function ProjectGroup({
  title,
  projects,
  emphasizeFirst = false,
}: ProjectGroupProps) {
  if (projects.length === 0) {
    return null;
  }

  // Column count follows how many cards are actually in the group, rather
  // than a fixed lg:grid-cols-3 — a single selected project stays a
  // deliberately-sized card instead of stretching full width, and four
  // featured cards form a balanced 2x2 grid instead of an awkward 3+1 row.
  const gridClass =
    projects.length === 1
      ? "grid-cols-1 max-w-md"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="mt-10">
      {title ? (
        <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-muted">
          {title}
        </h3>
      ) : null}
      <div className={`grid gap-6 ${gridClass}`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            emphasize={emphasizeFirst && index === 0}
          />
        ))}
      </div>
    </div>
  );
}
