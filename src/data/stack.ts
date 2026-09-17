export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks & Platforms",
    items: ["React", "Next.js", "LangGraph", "OpenAI", "Streamlit", "Pydantic"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub"],
  },
];
