import type { Education } from "@/types/education";

// Both programs are ongoing — no completion dates exist yet, so none are
// invented here.
export const education: readonly Education[] = [
  {
    institution: "ISTEA",
    program: "Tecnicatura en Programación",
    status: "In progress",
  },
  {
    institution: "Universidad Nacional de La Plata (UNLP)",
    faculty: "Facultad de Ciencias Jurídicas y Sociales",
    program: "Abogacía",
    status: "In progress",
  },
];
