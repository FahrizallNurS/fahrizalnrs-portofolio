import type { TechStackContent } from "./types";

export const techStackContent: TechStackContent = {
  title: "TECH",
  highlightWord: "STACK",
  rows: [
    {
      category: "web",
      label: "WEB",
      color: "#FFE44D",
      items: ["Laravel", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "mobile",
      label: "MOBILE",
      color: "#66D67A",
      items: ["Flutter", "Kotlin", "Jetpack Compose"],
    },
    {
      category: "architecture",
      label: "ARCHITECTURE",
      color: "#7B5CFA",
      items: ["REST API", "Docker", "CI/CD", "PostgreSQL"],
    },
  ],
};