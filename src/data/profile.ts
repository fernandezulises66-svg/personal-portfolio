export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  shortBio: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  email: string | null;
  location?: string;
}

// githubUrl, linkedinUrl, and email are explicitly approved for public
// portfolio use. Phone number is intentionally excluded — not approved for
// public display, even though it appears in the source CV.
export const profile: Profile = {
  name: "Ulises Fernandez Pertierra",
  shortName: "Ulises",
  role: "AI / Data / Software",
  headline: "Building AI agents, data systems and practical software.",
  shortBio:
    "I work on practical AI and data-oriented systems — agents, SQL, RAG, workflow automation, and full-stack software — alongside studies in Programming at ISTEA and Law at UNLP.",
  githubUrl: "https://github.com/fernandezulises66-svg",
  linkedinUrl: "https://www.linkedin.com/in/ulises-fernández-a51731200",
  email: "fernandezulises66@gmail.com",
  location: "Buenos Aires, Argentina",
};
