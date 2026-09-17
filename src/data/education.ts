import type { Education } from "@/types/education";

// Both programs are ongoing — no completion dates exist yet, so none are
// invented here. Start years are approved for public use; "Present" is
// accurate since both are still in progress.
export const education: readonly Education[] = [
  {
    institution: "ISTEA",
    program: "Tecnicatura en Programación",
    status: "In progress",
    period: "2022 – Present",
  },
  {
    institution: "Universidad Nacional de La Plata (UNLP)",
    faculty: "Facultad de Ciencias Jurídicas y Sociales",
    program: "Abogacía",
    status: "In progress",
    period: "2019 – Present",
  },
];

export const languages: readonly string[] = ["English — B2 / Upper-intermediate"];
