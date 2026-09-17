import Link from "next/link";
import type { Project } from "@/types/project";
import { categoryLabels } from "@/data/projects";
import DetailSection from "@/components/ui/DetailSection";
import BulletList from "@/components/ui/BulletList";
import GroupedList from "@/components/ui/GroupedList";
import TagList from "@/components/ui/TagList";
import ArchitectureFlow from "@/components/project/ArchitectureFlow";
import ProjectGallery from "@/components/project/ProjectGallery";
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
      ) : project.status ? (
        <div className="mt-6 flex flex-col items-start gap-1.5">
          <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-sm font-semibold uppercase tracking-wide text-accent">
            {project.status.value}
          </span>
          {project.status.label ? (
            <p className="text-sm text-muted">{project.status.label}</p>
          ) : null}
        </div>
      ) : null}

      {project.demoUrl || project.githubUrl ? (
        <div className="mt-6">
          <ProjectActions project={project} />
        </div>
      ) : null}

      {detail?.overview ? (
        <DetailSection title="Overview">
          <p className="text-base leading-relaxed text-muted">
            {detail.overview}
          </p>
        </DetailSection>
      ) : null}

      {detail?.problem ? (
        <DetailSection title="Problem">
          <p className="text-base leading-relaxed text-muted">
            {detail.problem.summary}
          </p>
          {detail.problem.points && detail.problem.points.length > 0 ? (
            <div className="mt-4">
              <BulletList items={detail.problem.points} />
            </div>
          ) : null}
        </DetailSection>
      ) : null}

      {detail?.context ? (
        <DetailSection title="Client / Context">
          <p className="text-base leading-relaxed text-muted">
            {detail.context}
          </p>
        </DetailSection>
      ) : null}

      {detail?.engineeringDecisions && detail.engineeringDecisions.length > 0 ? (
        <DetailSection title="Key Engineering Decisions">
          <BulletList items={detail.engineeringDecisions} />
        </DetailSection>
      ) : null}

      {detail?.systemArchitecture && detail.systemArchitecture.length > 0 ? (
        <DetailSection title="System Architecture">
          <ArchitectureFlow steps={detail.systemArchitecture} />
        </DetailSection>
      ) : null}

      {detail?.architecture && detail.architecture.length > 0 ? (
        <DetailSection title="Architecture / Workflow">
          <ArchitectureFlow steps={detail.architecture} />
        </DetailSection>
      ) : null}

      {detail?.modules && detail.modules.length > 0 ? (
        <DetailSection title="Core Modules">
          <GroupedList groups={detail.modules} />
        </DetailSection>
      ) : null}

      {detail?.siteStructure && detail.siteStructure.length > 0 ? (
        <DetailSection title="Site Structure">
          <GroupedList groups={detail.siteStructure} />
        </DetailSection>
      ) : null}

      {detail?.dataModel ? (
        <DetailSection title="Data Model">
          {detail.dataModel.note ? (
            <p className="text-base leading-relaxed text-muted">
              {detail.dataModel.note}
            </p>
          ) : null}
          <div className="mt-4">
            <TagList items={detail.dataModel.entities} />
          </div>
        </DetailSection>
      ) : null}

      {detail?.authorization ? (
        <DetailSection title="Authorization / Roles">
          {detail.authorization.note ? (
            <p className="text-base leading-relaxed text-muted">
              {detail.authorization.note}
            </p>
          ) : null}
          <div className="mt-4">
            <TagList items={detail.authorization.roles} />
          </div>
        </DetailSection>
      ) : null}

      {detail?.businessWorkflow ? (
        <DetailSection title="Business Workflow">
          <ArchitectureFlow steps={detail.businessWorkflow.steps} />
          {detail.businessWorkflow.note ? (
            <p className="mt-4 text-xs text-muted">
              {detail.businessWorkflow.note}
            </p>
          ) : null}
          {detail.businessWorkflow.materialFlow &&
          detail.businessWorkflow.materialFlow.length > 0 ? (
            <div className="mt-8">
              <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
                Inventory &amp; Material Relationship
              </h3>
              <div className="mt-3">
                <ArchitectureFlow steps={detail.businessWorkflow.materialFlow} />
              </div>
              {detail.businessWorkflow.materialFlowNote ? (
                <p className="mt-4 text-xs text-muted">
                  {detail.businessWorkflow.materialFlowNote}
                </p>
              ) : null}
            </div>
          ) : null}
        </DetailSection>
      ) : null}

      {detail?.aiFeature ? (
        <DetailSection title="AI Document Processing">
          <p className="text-base leading-relaxed text-muted">
            {detail.aiFeature}
          </p>
        </DetailSection>
      ) : null}

      {detail?.capabilities && detail.capabilities.length > 0 ? (
        <DetailSection title="Capabilities">
          <BulletList items={detail.capabilities} />
        </DetailSection>
      ) : null}

      {detail?.implementation && detail.implementation.length > 0 ? (
        <DetailSection title="Implementation">
          <BulletList items={detail.implementation} />
        </DetailSection>
      ) : null}

      {detail?.responsiveDesign && detail.responsiveDesign.length > 0 ? (
        <DetailSection title="Responsive Design">
          <BulletList items={detail.responsiveDesign} />
        </DetailSection>
      ) : null}

      {detail?.interaction && detail.interaction.length > 0 ? (
        <DetailSection title="Interaction">
          <BulletList items={detail.interaction} />
        </DetailSection>
      ) : null}

      {detail?.seo && detail.seo.length > 0 ? (
        <DetailSection title="SEO Foundation">
          <BulletList items={detail.seo} />
        </DetailSection>
      ) : null}

      {detail?.safety && detail.safety.length > 0 ? (
        <DetailSection title="Safety / Guardrails">
          <BulletList items={detail.safety} />
        </DetailSection>
      ) : null}

      {detail?.screenshots && detail.screenshots.length > 0 ? (
        <DetailSection title="Interface / Demo">
          <ProjectGallery screenshots={detail.screenshots} />
        </DetailSection>
      ) : null}

      {detail?.deploymentNote ? (
        <DetailSection title="Deployment / Infrastructure">
          <p className="text-base leading-relaxed text-muted">
            {detail.deploymentNote}
          </p>
        </DetailSection>
      ) : null}

      {detail?.adoption ? (
        <DetailSection title="Current Adoption">
          <p className="text-base leading-relaxed text-muted">
            {detail.adoption}
          </p>
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

      {project.demoUrl || project.githubUrl ? (
        <DetailSection title="Links">
          <ProjectActions project={project} />
        </DetailSection>
      ) : null}
    </article>
  );
}
