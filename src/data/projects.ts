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
      screenshots: [
        {
          src: "/projects/customer-operations/approval-pending.png",
          alt: "Pending human approval card for a simulated refund, showing approve/reject actions and collapsible workflow-detail and audit-log sections",
          caption:
            "Human-in-the-loop approval required before a simulated refund action can execute.",
        },
        {
          src: "/projects/customer-operations/approval-completed.png",
          alt: "Case intake form with a synthetic customer refund request and the resulting simulated approval confirmation message",
          caption:
            "Case intake for a synthetic customer request, ending in a simulated refund confirmation response.",
        },
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
    slug: "ola-muebles-erp",
    title: "OLA Muebles ERP",
    description:
      "A full-stack ERP built around the operational needs of a furniture business, centralizing inventory, sales, purchasing, billing, finance, HR, reporting and internal workflows that were previously distributed across spreadsheets.",
    category: "software",
    tier: "featured",
    tags: ["React", "Node.js", "Express", "MySQL", "MUI", "JWT"],
    githubUrl: null,
    demoUrl: null,
    status: { value: "MVP", label: "Active adoption at OLA Muebles" },
    highlights: [
      "Full quote-to-sale workflow",
      "Inventory + raw-material BOM tracking",
      "Electronic invoicing / AFIP-ARCA integration",
      "Role-based business operations",
    ],
    detail: {
      overview:
        "A full-stack ERP designed and developed end-to-end for OLA Muebles, a furniture business, covering the operational lifecycle from customer inquiry through electronic invoicing, with synchronized stock, material BOMs and financial reporting. Built with Node.js, Express, MySQL 8, React 18, MUI v5, Zustand, Axios and JWT authentication, with AI-assisted document processing via the Anthropic API, deployed with PM2 and Nginx.",
      problem: {
        summary:
          "OLA Muebles previously operated with fragmented Excel spreadsheets, which created several operational pain points:",
        points: [
          "No centralized stock traceability",
          "Disconnected business information across spreadsheets",
          "No unified quote-to-sale workflow",
          "No centralized invoicing flow",
        ],
      },
      systemArchitecture: [
        "Browser",
        "React frontend (Vercel)",
        "Express API (VPS, behind Nginx + PM2)",
        "MySQL 8",
      ],
      modules: [
        {
          title: "Catalog & Inventory",
          items: [
            "Catalog",
            "Finished products",
            "Raw materials",
            "BOM / material composition",
          ],
        },
        {
          title: "Sales & Purchasing",
          items: [
            "Customers",
            "Suppliers",
            "Sales",
            "Purchases",
            "Orders / quotes",
            "Quote-to-sale conversion",
            "Workflow states",
          ],
        },
        {
          title: "Invoicing",
          items: [
            "Issued invoices",
            "Received invoices",
            "PDF generation",
            "AFIP / ARCA integration",
          ],
        },
        {
          title: "Finance",
          items: ["Cash", "Bank", "Expenses", "E-Cheques"],
        },
        {
          title: "HR",
          items: ["Employees", "Payroll settlements", "Absences"],
        },
        {
          title: "Operations",
          items: [
            "Reports (28 report views)",
            "Users and roles",
            "AI document/invoice reading",
          ],
        },
      ],
      dataModel: {
        note: "MySQL 8 relational schema covering the full operational domain, including:",
        entities: [
          "productos",
          "variantes_producto",
          "insumos",
          "ficha_tecnica",
          "clientes",
          "proveedores",
          "ventas",
          "detalle_ventas",
          "compras",
          "detalle_compras",
          "presupuestos",
          "presupuesto_items",
          "comprobantes_afip",
          "comprobantes_recibidos",
          "cajas",
          "movimientos_caja",
          "egresos",
          "empleados",
          "liquidaciones",
          "faltas_empleados",
          "echeques",
          "usuarios",
          "roles",
        ],
      },
      authorization: {
        note: "JWT authentication with role-based access control. Access tokens last 24 hours with 7-day refresh tokens and automatic renewal. Roles include:",
        roles: [
          "administrador_sistema",
          "dueño",
          "administrador_general",
          "vendedor",
          "producción",
          "contador",
          "marketing",
          "importaciones",
          "cliente_web",
        ],
      },
      businessWorkflow: {
        steps: [
          "Customer inquiry",
          "Quote",
          "Quote approval / conversion",
          "Sale",
          "Inventory synchronization",
          "Invoice",
          "Cash / bank movement",
          "Reporting",
        ],
        note: "A simplified representation of the quote-to-sale lifecycle; not every step is necessarily fully automated end-to-end.",
        materialFlow: ["Product", "Product variant", "BOM", "Raw materials"],
        materialFlowNote:
          "Conceptual relationship between catalog products, their variants, and the raw materials tracked through each BOM.",
      },
      aiFeature:
        "AI-assisted extraction of information from invoices and documents using the Anthropic API.",
      screenshots: [
        {
          src: "/projects/ola-erp/dashboard.png",
          alt: "OLA Muebles ERP dashboard showing the module sidebar (Pedidos, Clientes, Catálogo, Stock, Proveedores, Compras, Banco, Facturación, Caja, Egresos) and operational summary panels",
          caption:
            "Dashboard view showing the system's module sidebar and operational summary panels.",
        },
        {
          src: "/projects/ola-erp/catalogo.png",
          alt: "Product catalog table listing furniture items with category, sale price, and origin, alongside an AI-assisted document-reading import action",
          caption:
            "Catalog and product-management interface used to centralize furniture stock and pricing information.",
        },
      ],
      deploymentNote:
        "The Express API is hosted on a Hostinger VPS behind Nginx with PM2 process management. The React frontend is deployed on Vercel and communicates with the API over HTTPS.",
      adoption:
        "The ERP is an MVP in active adoption at OLA Muebles. Employees currently use modules including production, HR, and quotes/budgets.",
      limitations: [
        "Active development — not a finished or production-hardened product.",
        "Partial organizational adoption; not every legacy/manual workflow has necessarily migrated yet.",
        "No formal production-grade security audit or penetration test has been performed.",
        "Screenshots have not yet been added to the portfolio.",
        "Repository visibility/access has not been confirmed, so no GitHub link is shown.",
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
      screenshots: [
        {
          src: "/projects/rag-knowledge-agent/rag-supported-answer.png",
          alt: "Grounded answer about Nubira's accepted payment methods, with the response citing the specific source document it was retrieved from",
          caption:
            "Grounded answer with a citation mapped to the specific knowledge-base document used as evidence.",
        },
        {
          src: "/projects/rag-knowledge-agent/rag-unsupported-answer.png",
          alt: "Assistant response stating it found insufficient information in the documentation to answer an out-of-scope question",
          caption:
            "Explicit insufficient-information response when a question falls outside the retrieved evidence, instead of a forced answer.",
        },
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
      screenshots: [
        {
          src: "/projects/sql-data-agent/streamlit-demo.png",
          alt: "Natural-language business question about top-selling products, answered with a ranked list of results and revenue figures from the synthetic e-commerce dataset",
          caption:
            "Natural-language question resolved into a ranked business insight over the synthetic e-commerce dataset.",
        },
        {
          src: "/projects/sql-data-agent/sql-observability.png",
          alt: "Expandable panel showing the generated read-only SQL query, its joins, and row-count metadata behind the answer",
          caption:
            "Generated SQL query and row-count metadata surfaced for tool-call observability.",
        },
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
  {
    slug: "gpsolutions-website",
    title: "GPSolutions Website",
    description:
      "A responsive multi-page corporate website built from scratch for a real technology and smart-city company, presenting its services, solutions and institutional information.",
    category: "web",
    tier: "selected",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/fernandezulises66-svg/gpsolutions-landing",
    demoUrl: "https://www.gps-ar.com/",
    highlights: [
      "Built from scratch",
      "Responsive multi-page layout",
      "Mobile navigation",
      "Corporate service/solution presentation",
    ],
    detail: {
      overview:
        "A multi-page corporate website built from scratch with HTML5, CSS3 and vanilla JavaScript for GPSolutions, a real Argentine technology and smart-city company, presenting its services, solutions and institutional information.",
      context:
        "GPSolutions presents itself as a technology and smart-city business, covering areas such as Smart City / Safe City systems, technology integration, consulting, and system implementation. Ulises developed the website presenting these services — he did not necessarily implement the underlying Smart City systems described on the site.",
      siteStructure: [
        {
          title: "Home",
          items: [
            "Hero section",
            "Corporate introduction",
            "Service CTA",
            "GPSolutions / Mooba alliance section",
          ],
        },
        {
          title: "Services",
          items: ["Multiple service cards"],
        },
        {
          title: "Solutions",
          items: ["Multiple solution cards"],
        },
        {
          title: "Contact",
          items: ["User-facing contact form"],
        },
      ],
      implementation: [
        "Custom cards and layout across all pages",
        "CSS animations and transitions",
        "Desktop navigation with mobile hamburger navigation",
        "Lazy-loaded images",
      ],
      responsiveDesign: [
        "Responsive layout with a mobile breakpoint around 768px",
        "Hero section stacks vertically on mobile",
        "Card grids collapse to a single column on mobile",
        "Custom mobile navigation with a sliding menu",
      ],
      interaction: [
        "Hamburger menu appears on mobile and slides the nav in/out",
        "Menu closes on link click or on clicking outside the menu",
        "Interactive contact form interface (client-side only — see limitations)",
      ],
      seo: [
        "Page title and meta description",
        "Meta keywords",
        "Basic SEO metadata and structured-data foundation (Organization JSON-LD)",
      ],
      screenshots: [
        {
          src: "/projects/gpsolutions/home.png",
          alt: "GPSolutions homepage hero section with the 'Diseñamos ciudades inteligentes' headline, company introduction, and top navigation",
          caption: "Responsive corporate homepage built from scratch for GPSolutions.",
        },
        {
          src: "/projects/gpsolutions/services.png",
          alt: "GPSolutions services page displaying three custom service cards for smart-city systems, consulting, and technology provisioning",
          caption: "Services presentation using the custom multi-page interface.",
        },
      ],
      limitations: [
        "Static frontend with no backend.",
        "The contact form is simulated client-side — it does not send real email.",
        "Depends on external image/CDN resources.",
        "No automated test suite currently known.",
      ],
    },
  },
];
