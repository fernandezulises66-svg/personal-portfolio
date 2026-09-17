import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work"
        description="Selected systems focused on AI agents, data workflows, retrieval, and safe automation."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            emphasize={index === 0}
          />
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        Evaluation results refer to curated project-specific benchmarks, not
        general model accuracy.
      </p>
    </section>
  );
}
