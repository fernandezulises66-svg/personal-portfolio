import type { Project } from "@/types/project";

// GitHub/demo links and metrics are only added once verified against the
// actual project repositories — see CLAUDE.md. Order reflects portfolio
// presentation (most complete demonstration first), not a tech ranking.
export const projects: readonly Project[] = [
  {
    slug: "ai-customer-operations-agent",
    title: "AI Customer Operations Agent",
    description:
      "A stateful customer-operations workflow that combines LLM-based request interpretation with deterministic policies, simulated operational actions, and human approval for sensitive workflows.",
    tags: ["Python", "LangGraph", "OpenAI", "Pydantic", "Streamlit"],
    githubUrl:
      "https://github.com/fernandezulises66-svg/ai-customer-operations-agent",
    demoUrl:
      "https://ai-customer-operations-agent-vs4yvseepssw2pvemitjhx.streamlit.app/",
    metric: { value: "20/20", label: "Curated E2E benchmark" },
    highlights: [
      "Stateful LangGraph workflow",
      "Human-in-the-loop approval",
      "Deterministic policy routing",
      "Simulated operational actions",
    ],
    featured: true,
  },
  {
    slug: "rag-knowledge-agent",
    title: "RAG Knowledge Agent",
    description:
      "A grounded retrieval-augmented assistant over a fictional SaaS knowledge base, with semantic retrieval, structured generation, visible citations, and explicit insufficient-information handling.",
    tags: ["Python", "OpenAI", "Pydantic", "Streamlit"],
    githubUrl: "https://github.com/fernandezulises66-svg/rag-knowledge-agent",
    demoUrl: "https://ulises-rag-knowledge-agent.streamlit.app/",
    metric: { value: "20/20", label: "Curated grounded-answer benchmark" },
    highlights: [
      "Semantic retrieval",
      "Evidence-validated responses",
      "Visible citations",
      "Unsupported-query handling",
    ],
    featured: true,
  },
  {
    slug: "ai-sql-data-analyst-agent",
    title: "AI SQL Data Analyst Agent",
    description:
      "An AI-powered data analyst that converts natural-language business questions into safe read-only SQL and returns business insights over a reproducible fictional e-commerce database.",
    tags: ["Python", "SQL", "SQLite", "OpenAI", "Streamlit"],
    githubUrl: "https://github.com/fernandezulises66-svg/ai-sql-data-agent",
    demoUrl:
      "https://ai-sql-data-agent-yr4isemzzdu7vfbcp49xjq.streamlit.app/",
    metric: { value: "10/10", label: "Curated agent eval" },
    highlights: [
      "Natural language → SQL",
      "Dynamic schema introspection",
      "Layered read-only SQL safety",
      "Business insight generation",
    ],
    featured: true,
  },
];
