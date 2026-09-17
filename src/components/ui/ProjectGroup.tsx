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

  return (
    <div className="mt-10">
      {title ? (
        <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-muted">
          {title}
        </h3>
      ) : null}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
