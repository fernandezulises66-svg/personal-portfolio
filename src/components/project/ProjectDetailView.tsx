import Link from "next/link";
import type { Project } from "@/types/project";
import { categoryLabels } from "@/data/projects";
import DetailSection from "@/components/ui/DetailSection";
import BulletList from "@/components/ui/BulletList";
import ArchitectureFlow from "@/components/project/ArchitectureFlow";
import ProjectActions from "@/components/project/ProjectActions";

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const { detail } = project;

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Back to Projects
      </Link>

      <p className="mt-6 font-mono text-sm text-accent">
        {categoryLabels[project.category]}
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {project.metric ? (
        <div className="mt-6">
          <p className="font-mono text-3xl font-semibold text-accent">
            {project.metric.value}
          </p>
          {project.metric.label ? (
            <p className="text-sm text-muted">{project.metric.label}</p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6">
        <ProjectActions project={project} />
      </div>

      {detail?.overview ? (
        <DetailSection title="Overview">
          <p className="text-base leading-relaxed text-muted">
            {detail.overview}
          </p>
        </DetailSection>
      ) : null}

      {detail?.engineeringDecisions && detail.engineeringDecisions.length > 0 ? (
        <DetailSection title="Key Engineering Decisions">
          <BulletList items={detail.engineeringDecisions} />
        </DetailSection>
      ) : null}

      {detail?.architecture && detail.architecture.length > 0 ? (
        <DetailSection title="Architecture / Workflow">
          <ArchitectureFlow steps={detail.architecture} />
        </DetailSection>
      ) : null}

      {detail?.capabilities && detail.capabilities.length > 0 ? (
        <DetailSection title="Capabilities">
          <BulletList items={detail.capabilities} />
        </DetailSection>
      ) : null}

      {detail?.safety && detail.safety.length > 0 ? (
        <DetailSection title="Safety / Guardrails">
          <BulletList items={detail.safety} />
        </DetailSection>
      ) : null}

      {detail?.evaluation && detail.evaluation.length > 0 ? (
        <DetailSection title="Evaluation">
          <div className="space-y-6">
            {detail.evaluation.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                  {group.title}
                </h3>
                <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {group.results.map((result) => (
                    <div
                      key={result.label}
                      className="flex items-baseline justify-between gap-3 rounded-md border border-border bg-background px-3 py-2"
                    >
                      <dt className="text-sm text-muted">{result.label}</dt>
                      <dd className="font-mono text-sm font-medium text-foreground">
                        {result.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          {detail.evaluationNote ? (
            <p className="mt-4 text-xs text-muted">{detail.evaluationNote}</p>
          ) : null}
        </DetailSection>
      ) : null}

      {detail?.limitations && detail.limitations.length > 0 ? (
        <DetailSection title="Limitations">
          <BulletList items={detail.limitations} />
        </DetailSection>
      ) : null}

      <DetailSection title="Links">
        <ProjectActions project={project} />
      </DetailSection>
    </article>
  );
}
