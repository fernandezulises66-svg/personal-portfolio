export interface Experience {
  company: string;
  // The verified job title for entries where one has been confirmed; falls
  // back to a descriptive portfolio summary only when no formal title has
  // been verified for that entry (see CLAUDE.md).
  roleLabel?: string;
  summary: string;
  bullets: readonly string[];
  period?: string;
  location?: string;
}
