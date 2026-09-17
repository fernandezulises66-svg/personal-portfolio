export interface Education {
  institution: string;
  program: string;
  faculty?: string;
  // e.g. "In progress" — omit rather than invent a graduation/completion status.
  status?: string;
  // e.g. "2019 – Present" — verified start year only; omit rather than invent.
  period?: string;
}
