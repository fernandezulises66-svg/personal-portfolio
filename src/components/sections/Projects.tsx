import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGroup from "@/components/ui/ProjectGroup";
import { projects } from "@/data/projects";

export default function Projects() {
  // Grouped by tier/category so a future "Selected Software Projects" group
  // (e.g. OLA ERP, GPSolutions) can be added later without redesigning the
  // Project type or ProjectCard. Empty groups render nothing.
  const featuredAiData = projects.filter(
    (project) => project.tier === "featured" && project.category === "ai-data",
  );
  const selectedSoftware = projects.filter(
    (project) => project.tier === "selected" && project.category === "software",
  );

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
      <ProjectGroup projects={featuredAiData} emphasizeFirst />
      <ProjectGroup title="Selected Software Projects" projects={selectedSoftware} />
      <p className="mt-6 text-xs text-muted">
        Evaluation results refer to curated project-specific benchmarks, not
        general model accuracy.
      </p>
    </section>
  );
}
