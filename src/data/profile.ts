export interface Profile {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  shortBio: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  email: string | null;
  // Local path to the recruiter-facing CV PDF, e.g. "/cv/....pdf". Must
  // point to a real PDF that exists in public/cv/ — never a DOCX. Stays
  // null until the final PDF asset is in the repo (see CLAUDE.md).
  cvUrl: string | null;
  location?: string;
}

// githubUrl, linkedinUrl, email, and cvUrl are explicitly approved for
// public portfolio use. Phone number is intentionally excluded — not
// approved for public display, even though it appears in the source CV.
export const profile: Profile = {
  name: "Ulises Fernandez Pertierra",
  shortName: "Ulises",
  role: "AI / Data / Software",
  headline: "Building AI agents, data systems and practical software.",
  shortBio:
    "In my current technical work I build practical AI and data-oriented systems — agents, SQL, RAG, workflow automation — and full-stack software, alongside studies in Programming at ISTEA and Law at UNLP.",
  githubUrl: "https://github.com/fernandezulises66-svg",
  linkedinUrl: "https://www.linkedin.com/in/ulises-fernández-a51731200",
  email: "fernandezulises66@gmail.com",
  cvUrl: "/cv/ulises-fernandez-pertierra-cv.pdf",
  location: "Buenos Aires, Argentina",
};
