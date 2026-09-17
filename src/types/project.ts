export interface ProjectMetric {
  value: string;
  label?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  detailUrl?: string | null;
  metric?: ProjectMetric;
  highlights?: readonly string[];
  featured?: boolean;
}
