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

// linkedinUrl and email stay null until explicitly provided — the UI omits
// them rather than rendering placeholder or broken links.
export const profile: Profile = {
  name: "Ulises Fernandez Pertierra",
  shortName: "Ulises",
  role: "AI / Data / Software",
  headline: "Building AI agents, data systems and practical software.",
  shortBio:
    "I'm a programming student focused on building practical AI and data-oriented systems — agents, SQL, RAG, workflow automation, and human-in-the-loop tools. I also study Law at UNLP alongside Programming at ISTEA.",
  githubUrl: "https://github.com/fernandezulises66-svg",
  linkedinUrl: null,
  email: null,
  location: "Buenos Aires, Argentina",
};
