import type { Project } from "@/types/project";

// Detailed write-ups, live links, and metrics are added in later iterations
// as each project is documented. Fields left undefined are intentionally
// omitted rather than filled with placeholder links.
export const projects: Project[] = [
  {
    slug: "ai-sql-data-analyst-agent",
    title: "AI SQL Data Analyst Agent",
    description:
      "An agent that answers natural language questions about structured data by generating and running SQL queries.",
    tags: ["Python", "SQL", "AI Agent"],
    featured: true,
  },
  {
    slug: "rag-knowledge-agent",
    title: "RAG Knowledge Agent",
    description:
      "A retrieval-augmented generation agent that answers questions grounded in a custom knowledge base.",
    tags: ["Python", "RAG", "AI Agent"],
    featured: true,
  },
  {
    slug: "ai-customer-operations-agent",
    title: "AI Customer Operations Agent",
    description:
      "An agent that automates customer operations workflows using LLM-driven reasoning and tool calls.",
    tags: ["Python", "AI Agent", "Automation"],
    featured: true,
  },
];
