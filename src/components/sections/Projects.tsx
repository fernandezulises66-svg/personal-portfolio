import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGroup from "@/components/ui/ProjectGroup";
import { projects } from "@/data/projects";

export default function Projects() {
  // Tier drives grouping, independent of category — a featured project can
  // come from any category (ai-data, software, or web). Empty groups render
  // nothing.
  const featured = projects.filter((project) => project.tier === "featured");
  const selected = projects.filter((project) => project.tier === "selected");

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Featured Projects"
        title="Selected work"
        description="Selected systems spanning AI agents, data workflows, full-stack business software, and web development."
      />
      <ProjectGroup projects={featured} emphasizeFirst />
      <ProjectGroup title="Selected Software Projects" projects={selected} />
      <p className="mt-6 text-xs text-muted">
        Evaluation results refer to curated project-specific benchmarks, not
        general model accuracy.
      </p>
    </section>
  );
}
