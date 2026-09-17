import type { TechCategory } from "@/types/tech";

export const stackGroups: readonly TechCategory[] = [
  {
    label: "Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
  },
  {
    label: "AI",
    items: ["LangGraph", "OpenAI API", "Anthropic API", "Pydantic"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Django", "Streamlit"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "MUI"],
  },
  {
    label: "Data",
    items: ["MySQL", "SQLite", "Microsoft Excel", "Power BI"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Visual Studio Code", "Claude Code"],
  },
];

// Technologies most relevant to the AI/data/software roles this portfolio
// targets — rendered with stronger visual emphasis in the Tech Stack section.
// Balanced across AI/data and full-stack so the portfolio doesn't read as
// frontend-only.
export const highlightedTech: readonly string[] = [
  "Python",
  "SQL",
  "LangGraph",
  "OpenAI API",
  "Anthropic API",
  "Node.js",
  "Express",
  "React",
  "MySQL",
  "Git",
  "GitHub",
];
