export interface Experience {
  company: string;
  // Descriptive portfolio summary of responsibilities, not an official title
  // unless stated otherwise where this is used.
  roleLabel?: string;
  summary: string;
  bullets: readonly string[];
  period?: string;
  location?: string;
}
