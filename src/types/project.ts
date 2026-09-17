export type ProjectCategory = "ai-data" | "software" | "web";
export type ProjectTier = "featured" | "selected";

export interface ProjectMetric {
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

// Presentation-independent project-detail content. Every field is optional —
// the detail page only renders the sections a given project actually has.
export interface ProjectDetail {
  overview?: string;
  engineeringDecisions?: readonly string[];
  architecture?: readonly string[];
  capabilities?: readonly string[];
  safety?: readonly string[];
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
  highlights?: readonly string[];
  detail?: ProjectDetail;
}
