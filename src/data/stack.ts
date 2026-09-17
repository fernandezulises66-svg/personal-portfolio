import type { TechCategory } from "@/types/tech";

export const stackGroups: readonly TechCategory[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  {
    label: "AI / Application",
    items: ["LangGraph", "OpenAI API", "Pydantic", "Streamlit", "Django"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    label: "Data",
    items: ["SQLite", "Microsoft Excel", "Power BI"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code"],
  },
];

// Technologies most relevant to the AI/data/software roles this portfolio
// targets — rendered with stronger visual emphasis in the Tech Stack section.
export const highlightedTech: readonly string[] = [
  "Python",
  "SQL",
  "LangGraph",
  "OpenAI API",
  "Pydantic",
  "Streamlit",
  "Git",
  "GitHub",
];
