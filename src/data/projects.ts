import type { Project, ProjectCategory } from "@/types/project";

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-data": "AI / Data",
  software: "Software",
  web: "Web",
  "data-bi": "Data / BI",
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
    slug: "retail-analytics-bi-platform",
    title: "Retail Analytics & BI Platform",
    description:
      "An end-to-end retail analytics project on the public Olist Brazilian E-Commerce dataset, covering data-quality profiling, a validated PostgreSQL dimensional warehouse, SQL analysis, and a 6-page Power BI dashboard with 16 KPIs verified against SQL.",
    category: "data-bi",
    tier: "featured",
    tags: ["Power BI", "PostgreSQL", "SQL", "Python", "Pandas", "DAX"],
    githubUrl:
      "https://github.com/fernandezulises66-svg/retail-analytics-bi-platform",
    demoUrl: null,
    metric: { value: "16", label: "Verified KPIs" },
    highlights: [
      "Multi-fact dimensional warehouse",
      "16 SQL-validated KPIs",
      "Six-page Power BI dashboard",
      "Data-quality and reconciliation controls",
    ],
    detail: {
      overview:
        "An end-to-end retail/e-commerce analytics project built on the public Olist Brazilian E-Commerce dataset (2016–2018, ~99,441 orders). Covers the full analytics lifecycle: profiling and measuring real data-quality issues, deterministic evidence-driven cleaning, a PostgreSQL staging and dimensional warehouse with fan-out-safe multi-fact design, a 13-file SQL analytics layer, and a 6-page Power BI dashboard validated KPI-by-KPI against the SQL layer. 124 automated tests cover raw-data immutability, cleaning transformations, warehouse reconciliation, and analytics sanity checks.",
      problem: {
        summary:
          "Retail/marketplace data is rarely analysis-ready: it arrives with unresolved grain ambiguity, join fan-out risk across one-to-many tables, duplicate-looking keys that may or may not be real defects, and monetary fields that look interchangeable but aren't. Analyzing it without first measuring these properties produces confidently wrong numbers.",
        points: [
          "Grain ambiguity between order-scoped and person-level identifiers.",
          "Fan-out risk when joining one-to-many tables directly (e.g. orders × items × payments).",
          "Duplicate-looking keys that may or may not be real data defects.",
          "Monetary fields that look interchangeable but represent different things (item sales value vs. payment value).",
        ],
      },
      systemArchitecture: [
        "Olist CSVs (raw)",
        "Python profiling",
        "Deterministic cleaning",
        "PostgreSQL staging",
        "Dimensional warehouse (6 dims, 4 facts)",
        "SQL analytics layer (13 files)",
        "Power BI Import model → 6-page dashboard",
      ],
      dataModel: {
        note: "PostgreSQL dimensional warehouse (analytics schema) with conformed dimensions and four facts at independently verified grains — no fact is ever joined directly to another fact for additive measures:",
        entities: [
          "dim_date",
          "dim_customer",
          "dim_geography",
          "dim_category",
          "dim_product",
          "dim_seller",
          "fact_orders",
          "fact_order_items",
          "fact_payments",
          "fact_reviews",
        ],
      },
      dataQuality: {
        note: "The project measured and documented real data-quality issues before writing any cleaning code, preserving source facts rather than silently altering them:",
        items: [
          "Order item/payment fan-out risk: 275 orders have both multiple item rows and multiple payment rows, so each side is aggregated to order grain before any join.",
          "customer_id (order-scoped, 99,441 rows) vs. customer_unique_id (person-level, 96,096 distinct values) — a distinction the whole warehouse depends on.",
          "Geolocation grain reduced from ~1,000,163 raw rows (26.2% exact duplicates) to 19,015 canonical zip-code prefixes.",
          "814 duplicate review_id values are not a defect — the same review content shared across 2–3 orders by the same customer; (review_id, order_id) is the real unique key.",
          "576 orders (0.58%) show a payment-vs-item+freight mismatch, preserved and categorized rather than corrected.",
          "14 timestamp/status anomalies (e.g. delivered orders with a null delivery date) preserved and exposed via explicit flags.",
          "610 products have a null category and 13 more map to untranslated category names — both kept as visible unmapped/missing rows.",
        ],
      },
      analytics: [
        "13 numbered SQL files answering specific business questions: executive KPIs, monthly performance, category/product performance, customer behavior, first-observed vs. returning customers, RFM segmentation, cohort retention, geographic performance, delivery performance, reviews vs. delivery, payment behavior, and the impact of known data-quality issues.",
        "CTEs throughout for order-grain pre-aggregation before any join, preventing the same fan-out risk enforced in the warehouse.",
        "Window functions: LAG() for month-over-month growth, ROW_NUMBER() with an explicit tie-break for first-observed orders, RANK() for leaderboards, NTILE(5) for RFM scoring, PERCENTILE_CONT(0.5) for median delivery days.",
        "Findings involving two measured quantities (e.g. delivery lateness and review score) are reported as observed associations, never causation.",
      ],
      dashboard: {
        note: "Built in Power BI Desktop, Import mode, connected directly to the PostgreSQL analytics schema. The model has 6 dimensions, 4 facts, 4 disconnected helper views, and 21 active relationships, with zero fact-to-fact relationships. All 16 KPIs were checked against the SQL analysis layer and confirmed matching. Six pages, each answering a specific decision question:",
        pages: [
          "Executive Overview",
          "Sales & Categories",
          "Customers & Retention",
          "Geographic Performance",
          "Delivery & Customer Experience",
          "Payments & Data Quality",
        ],
        modelNote:
          "A real model correction, kept visible: the original plan specified 22 relationships, including dim_geography → dim_seller. Power BI Desktop correctly refused to activate it after detecting an ambiguous filter path to fact_order_items (reachable both directly from dim_geography and indirectly via dim_seller). The final model has 21 relationships — seller geography remains fully available via dim_seller's own city/state/zip columns. This reflects model validation, not a failure.",
      },
      keyMetrics: [
        {
          title: "Verified Business Metrics",
          results: [
            { label: "Total Orders", value: "99,441" },
            { label: "Unique Customers", value: "96,096" },
            { label: "Item Sales Value", value: "R$13.59M" },
            { label: "Average Order Value", value: "R$137.75" },
            { label: "Items Sold", value: "112,650" },
            { label: "Late Delivery Rate", value: "8.11%" },
            { label: "Average Review Score", value: "4.09" },
            { label: "Repeat Customer Rate", value: "3.12%" },
          ],
        },
      ],
      findings: {
        note: "Findings below are read directly from the project's business-insights analysis. Delivery/review findings are reported as observed associations, never causation:",
        items: [
          "health_beauty leads all categories at approximately 9.26% of item sales value.",
          "Repeat-customer rate is approximately 3.12%; first-observed orders drive about 97.01% of item sales value.",
          "Late-delivery rate is approximately 8.11%; longer delivery delays are associated with lower observed review scores.",
          "São Paulo (SP) has the highest marketplace activity, accounting for about 42% of all orders.",
          "576 orders show a payment-vs-item+freight mismatch, representing a small share (0.58%) of reconciled orders.",
        ],
      },
      screenshots: [
        {
          src: "/projects/retail-analytics-bi/executive-overview.png",
          alt: "Power BI Executive Overview page showing total orders, unique customers, item sales value, average order value, late delivery rate, average review score, and monthly trend charts",
          caption:
            "Executive Overview page — headline KPIs and monthly order/sales trends across the 2016–2018 observation window.",
        },
        {
          src: "/projects/retail-analytics-bi/sales-categories.png",
          alt: "Power BI Sales & Categories page showing top categories and products by item sales value, items sold, and category performance contribution",
          caption:
            "Sales & Categories page — category and product performance, with health_beauty leading at 9.26% of item sales value.",
        },
        {
          src: "/projects/retail-analytics-bi/customers-retention.png",
          alt: "Power BI Customers & Retention page showing repeat customer rate, RFM segmentation, and a customer cohort retention table",
          caption:
            "Customers & Retention page — RFM segmentation and cohort retention, showing a 3.12% repeat-customer rate.",
        },
        {
          src: "/projects/retail-analytics-bi/geography.png",
          alt: "Power BI Geographic Performance page showing orders, item sales value, and delivery performance broken down by Brazilian state",
          caption:
            "Geographic Performance page — orders, sales, and delivery speed by state, led by São Paulo.",
        },
        {
          src: "/projects/retail-analytics-bi/delivery-customer-experience.png",
          alt: "Power BI Delivery & Customer Experience page showing on-time vs. late deliveries and average review score by delivery-delay bucket",
          caption:
            "Delivery & Customer Experience page — average review score declines as delivery delay increases (observed association, not causation).",
        },
        {
          src: "/projects/retail-analytics-bi/payments-data-quality.png",
          alt: "Power BI Payments & Data Quality page showing payment value by type and explicit data-quality notes on reconciliation mismatches",
          caption:
            "Payments & Data Quality page — payment behavior alongside explicit, visible data-quality notes rather than hidden corrections.",
        },
      ],
      validation: [
        {
          title: "Automated Validation",
          results: [
            { label: "Verified KPIs", value: "16/16" },
            { label: "Warehouse reconciliation checks", value: "63/63" },
            { label: "Analytics sanity checks", value: "9/9" },
            { label: "Automated tests (pytest)", value: "124/124" },
          ],
        },
      ],
      validationNote:
        "These results apply to this project's own warehouse/analytics validation suite and are not a general accuracy or correctness guarantee beyond this dataset and pipeline.",
      limitations: [
        "Historical dataset (2016–2018) — not representative of the current Brazilian e-commerce market.",
        "No verified product-cost data, so profit, margin, and ROI are out of scope.",
        "17 of 576 monetary mismatches and 6 canceled-with-delivery-date orders remain unexplained after investigation.",
        "Delivery-vs-review-score and other cross-metric findings are observed associations only, never causal claims.",
        "Power BI report is validated locally but not deployed to Power BI Service.",
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
