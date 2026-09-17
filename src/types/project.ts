export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string | null;
  demoUrl?: string | null;
  detailUrl?: string | null;
  metric?: string | null;
  image?: string | null;
  featured?: boolean;
}
