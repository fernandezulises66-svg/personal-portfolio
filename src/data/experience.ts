import type { Experience } from "@/types/experience";

// Dates are omitted rather than invented — not available in the source
// material for this iteration.
export const experience: readonly Experience[] = [
  {
    company: "OLA MUEBLES",
    roleLabel: "Technology & Data Operations",
    summary:
      "Supporting internal technology and data processes for the business's product, catalog, and stock management.",
    bullets: [
      "Configuration and organization of business data",
      "Configuration and use of the management system",
      "Database-oriented work",
      "Product, catalog, and stock information management",
      "Support for internal administrative and technology processes",
    ],
  },
  {
    company: "GPS (Gestión de Proyectos de Seguridad)",
    roleLabel: "Administrative & Legal Support",
    summary:
      "Administrative and legal support work involving structured business documentation and reporting.",
    bullets: [
      "Purchase and sales invoice registration",
      "Payroll-related administrative work",
      "Financial movement tracking",
      "Preparation of investment-related reports",
      "Client contract drafting",
    ],
  },
];
