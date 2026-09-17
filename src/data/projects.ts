import type { Project, ProjectCategory } from "@/types/project";

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-data": "AI / Data",
  software: "Software",
  web: "Web",
};

// GitHub/demo links and metrics are only added once verified against the
// actual project repositories — see CLAUDE.md. Order reflects portfolio
// presentation (most complete demonstration first), not a tech ranking.
export const projects: readonly Project[] = [
  {
    slug: "ai-customer-operations-agent",
    title: "AI Customer Operations Agent",
    description:
      "A stateful customer-operations workflow that combines LLM-based request interpretation with deterministic policies, simulated operational actions, and human approval for sensitive workflows.",
    category: "ai-data",
    tier: "featured",
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
    detail: {
      overview:
        "A stateful customer-operations workflow combining LLM-based request interpretation with deterministic business rules, safe simulated operational actions, human approval, checkpointed state, and grounded final responses.",
      engineeringDecisions: [
        "LLM responsibilities are scoped to intent/urgency classification, explicit shipping-address extraction when required, and customer-facing response phrasing — everything else is deterministic.",
        "Deterministic code owns operational data, order resolution, policy evaluation, routing, proposed-action mapping, approval enforcement, action execution, and audit behavior.",
        "Conditional routing resolves to one of five branches: clarification, information, blocked, safe action, or human approval.",
        "Sensitive actions pause on interrupt(); after an explicit reviewer decision, execution resumes via Command(resume=...) into approved execution or rejection, then a final response.",
      ],
      architecture: [
        "Customer Request",
        "Intake",
        "Structured Classification",
        "Context Loading",
        "Order Resolution",
        "Policy Evaluation",
        "Conditional Routing",
      ],
      safety: [
        "Deterministic policy layer decides what is allowed, not the model.",
        "Human approval is required before any sensitive action executes.",
        "No sensitive action executes before an interrupt/resume approval.",
        "The agent does not guess missing order or address information.",
        "Approval payloads shown for review are minimal.",
        "Audit events are PII-free.",
        "Operational actions are simulated and in-memory, not connected to real systems.",
        "Public UI error messages are safe and do not leak internal details.",
      ],
      evaluation: [
        {
          title: "Curated E2E Benchmark — 20 cases (latest reviewed run)",
          results: [
            { label: "Intent", value: "20/20" },
            { label: "Urgency", value: "20/20" },
            { label: "Order resolution", value: "20/20" },
            { label: "Policy", value: "20/20" },
            { label: "Routing", value: "20/20" },
            { label: "Action proposal", value: "11/11 applicable" },
            { label: "Approval behavior", value: "7/7 applicable" },
            { label: "Mutation behavior", value: "20/20" },
            { label: "Final state", value: "20/20" },
            { label: "Response fact-check", value: "20/20" },
          ],
        },
      ],
      evaluationNote:
        "These results apply only to this curated benchmark and are not claims of general model accuracy or production reliability.",
      limitations: [
        "Uses a fictional company and fictional data.",
        "Operational actions are simulated only.",
        "No real payment, logistics, or CRM integration.",
        "InMemorySaver checkpointing is non-durable.",
        "Business mutations are process/session-local.",
        "Model-backed components may vary between runs.",
      ],
    },
  },
  {
    slug: "rag-knowledge-agent",
    title: "RAG Knowledge Agent",
    description:
      "A grounded retrieval-augmented assistant over a fictional SaaS knowledge base, with semantic retrieval, structured generation, visible citations, and explicit insufficient-information handling.",
    category: "ai-data",
    tier: "featured",
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
    detail: {
      overview:
        "A grounded retrieval-augmented assistant over a fictional SaaS knowledge base with deterministic document processing, semantic retrieval, evidence validation, structured generation, visible citations, and explicit handling of unsupported questions.",
      engineeringDecisions: [
        "Deliberately does not use LangChain or LangGraph — retrieval and generation are built directly.",
        "Evidence IDs stay internal; Python validates evidence before any citation mapping is exposed.",
        "Semantic similarity is not treated as proof of answerability — unsupported questions get a controlled fallback response instead of a forced answer.",
      ],
      architecture: [
        "Markdown Knowledge Base",
        "Deterministic Loader",
        "Deterministic Chunking",
        "OpenAI Embeddings",
        "Cosine Semantic Retrieval",
        "Evidence Selection",
        "Structured Response Generation",
        "Evidence-ID Validation",
        "Citation Mapping",
        "Grounded Answer / Insufficient-Information Response",
      ],
      capabilities: [
        "9 Spanish Markdown documents chunked into 97 total chunks.",
        "OpenAI text-embedding-3-small embeddings at 1536 dimensions.",
        "Cosine similarity retrieval with retrieval observability.",
        "Spanish-first Streamlit interface.",
      ],
      evaluation: [
        {
          title: "Grounded-Answer Benchmark — 20 cases",
          results: [
            { label: "Answerability", value: "1.000" },
            { label: "Fact check", value: "1.000" },
            { label: "Citation check", value: "1.000" },
            { label: "Unsupported refusal", value: "1.000" },
            { label: "Overall", value: "1.000" },
          ],
        },
        {
          title:
            "Retrieval Benchmark — 16 answerable + 4 unsupported diagnostic cases",
          results: [
            { label: "Hit@1", value: "1.000" },
            { label: "Hit@3", value: "1.000" },
            { label: "MRR@5", value: "1.000" },
          ],
        },
      ],
      evaluationNote:
        "These are curated benchmark results and are not claims of general model accuracy.",
      limitations: [
        "Uses a fictional SaaS knowledge base.",
        "Evaluated against a curated evaluation set.",
        "Model-backed generation can vary between runs.",
        "Semantic similarity is not a general guarantee of answerability.",
      ],
    },
  },
  {
    slug: "ai-sql-data-analyst-agent",
    title: "AI SQL Data Analyst Agent",
    description:
      "An AI-powered data analyst that converts natural-language business questions into safe read-only SQL and returns business insights over a reproducible fictional e-commerce database.",
    category: "ai-data",
    tier: "featured",
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
    detail: {
      overview:
        "An AI-powered analyst that translates natural-language business questions into safe SQL queries over a deterministic fictional e-commerce database and returns business insights.",
      engineeringDecisions: [
        "SQL safety is enforced in three independent layers rather than relying on prompt instructions alone: query validation, a read-only SQLite connection, and a SQLite authorizer that blocks writes and unsafe operations.",
        "The agent only issues SELECT/WITH queries; anything else is rejected before execution.",
      ],
      architecture: [
        "User Question",
        "Agent",
        "Schema Inspection",
        "SQL Generation",
        "SQL Safety Validation",
        "Read-Only Execution",
        "Business Insight",
      ],
      capabilities: [
        "Dynamic schema introspection — no hardcoded table/column assumptions.",
        "Natural-language-to-SQL analysis with multilingual interaction.",
        "Tool-call observability.",
        "Reproducible synthetic e-commerce dataset: 100 customers, 30 products, 661 orders, 1,483 order items.",
        "Order status distribution: 405 completed, 93 processing, 78 pending, 85 cancelled.",
      ],
      safety: [
        "SELECT/WITH-only query validation before execution.",
        "SQLite read-only connection / query_only behavior.",
        "SQLite authorizer blocks writes and other unsafe operations.",
      ],
      evaluation: [
        {
          title: "Curated Agent Evaluation",
          results: [{ label: "Cases passed", value: "10/10" }],
        },
      ],
      evaluationNote:
        "This result applies only to the curated evaluation set and is not a claim of general model accuracy.",
      limitations: [
        "Uses a fictional SQLite dataset.",
        "Analytics only — not a general-purpose database tool.",
        "Deliberately read-only by design.",
        "Not connected to a production database.",
        "LLM-generated SQL can vary before safety validation catches unsafe queries.",
      ],
    },
  },
];
