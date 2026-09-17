export type ProjectCategory = "ai-data" | "software" | "web";
export type ProjectTier = "featured" | "selected";

export interface ProjectMetric {
  value: string;
  label?: string;
}

// A non-benchmark callout for projects that aren't evaluated against a
// curated metric (e.g. real-world software under active adoption). Shares
// the metric's shape so the card/detail header can render either one with
// the same layout, but the two are conceptually distinct — a status is a
// lifecycle statement, not a performance number.
export interface ProjectStatus {
  value: string;
  label?: string;
}

export interface EvaluationResult {
  label: string;
  value: string;
}

export interface EvaluationGroup {
  title: string;
  results: readonly EvaluationResult[];
}

// A named group of list items, e.g. a module category or a site section.
export interface ModuleGroup {
  title: string;
  items: readonly string[];
}

export interface ProblemStatement {
  summary: string;
  points?: readonly string[];
}

export interface DataModelSummary {
  note?: string;
  entities: readonly string[];
}

export interface AuthorizationSummary {
  note?: string;
  roles: readonly string[];
}

export interface BusinessWorkflow {
  steps: readonly string[];
  note?: string;
  materialFlow?: readonly string[];
  materialFlowNote?: string;
}

// A real screenshot committed to the repo (public/projects/**). `src` is a
// local path only — never a remote/hotlinked URL. Only add entries for
// files that actually exist and have been reviewed for sensitive content.
export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

// Presentation-independent project-detail content. Every field is optional —
// the detail page only renders the sections a given project actually has.
// Fields below aren't all AI-project-shaped: some (problem, systemArchitecture,
// modules, dataModel, authorization, businessWorkflow, aiFeature,
// deploymentNote, adoption) describe real-world software systems, and others
// (context, siteStructure, implementation, responsiveDesign, interaction,
// seo) describe client web work — see CLAUDE.md on keeping non-AI projects
// out of the benchmark/AI presentation pattern.
export interface ProjectDetail {
  overview?: string;
  problem?: ProblemStatement;
  context?: string;
  engineeringDecisions?: readonly string[];
  architecture?: readonly string[];
  systemArchitecture?: readonly string[];
  modules?: readonly ModuleGroup[];
  siteStructure?: readonly ModuleGroup[];
  dataModel?: DataModelSummary;
  authorization?: AuthorizationSummary;
  businessWorkflow?: BusinessWorkflow;
  aiFeature?: string;
  capabilities?: readonly string[];
  implementation?: readonly string[];
  responsiveDesign?: readonly string[];
  interaction?: readonly string[];
  seo?: readonly string[];
  safety?: readonly string[];
  deploymentNote?: string;
  adoption?: string;
  screenshots?: readonly ProjectScreenshot[];
  evaluation?: readonly EvaluationGroup[];
  evaluationNote?: string;
  limitations?: readonly string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tier: ProjectTier;
  tags: readonly string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  metric?: ProjectMetric;
  status?: ProjectStatus;
  highlights?: readonly string[];
  detail?: ProjectDetail;
}
