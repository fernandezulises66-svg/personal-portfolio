import type { Experience } from "@/types/experience";

// Job titles and periods below are explicitly approved for public use (see
// CLAUDE.md). Reverse chronological order. Project-specific technical facts
// (module counts, database schema, deployment details, etc.) are kept on the
// relevant project detail page, not restated here.
export const experience: readonly Experience[] = [
  {
    company: "mooba",
    roleLabel: "Data & Systems Analyst",
    period: "2026 – Present",
    summary:
      "Current role focused on data, software and AI-oriented product development.",
    bullets: [
      "Contribute to LexIA, an LLM-based conversational agent for legislation consultation, working on prompts, conversational flows and product logic.",
      "Use Claude Code as a primary development environment for iterative work on application components and workflows.",
      "Contribute to the product landing experience and iterate based on product feedback.",
    ],
  },
  {
    company: "OLA Muebles",
    roleLabel: "Data & Systems Analyst (Junior)",
    period: "2025 – 2026",
    summary:
      "Built OLA Muebles' internal ERP end-to-end, replacing fragmented spreadsheet workflows with a centralized system.",
    bullets: [
      "Full-stack development of the ERP: Node.js/Express backend, MySQL database, React frontend.",
      "Automated business processes across sales, inventory, invoicing and finance that were previously handled in spreadsheets.",
      "Implemented role-based access control and handled deployment/infrastructure setup.",
    ],
  },
  {
    company: "GPS — Gestión de Proyectos de Seguridad",
    roleLabel: "Asistente Administrativo-Legal",
    period: "2022 – 2025",
    summary:
      "Administrative and legal support work involving structured business documentation and reporting.",
    bullets: [
      "Administrative and legal support, including invoice and payroll-related processing.",
      "Financial movement tracking and reporting for investment/planning analysis.",
      "Contract and document work, with process automation using Python and Excel.",
    ],
  },
];
