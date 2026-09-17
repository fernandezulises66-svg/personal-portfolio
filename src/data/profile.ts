export interface SocialLinks {
  githubUrl: string | null;
  linkedinUrl: string | null;
  email: string | null;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  summary: string;
  social: SocialLinks;
}

// Real URLs and email are added once confirmed. Until then these stay null
// so the UI can skip rendering them instead of pointing to broken links.
export const profile: Profile = {
  name: "Ulises Fernandez Pertierra",
  shortName: "Ulises",
  role: "AI / Data / Software",
  tagline: "Building AI agents, data systems and practical software.",
  summary:
    "I work on practical AI agents, data-oriented tooling, and software projects, combining hands-on engineering with a broader academic background.",
  social: {
    githubUrl: null,
    linkedinUrl: null,
    email: null,
  },
};
