import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    name: "Fintech Dashboard",
    summary:
      "A comprehensive financial analytics dashboard designed for real-time data visualization, empowering users to track investments and manage transactions with clarity.",
    type: "web",
    coverImage: "/images/projects/fintech-dashboard/1.jpg",
    gallery: [
      "/images/projects/fintech-dashboard/1.jpg",
      "/images/projects/fintech-dashboard/2.jpg",
      "/images/projects/fintech-dashboard/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/fintech-dashboard",
  },
  {
    slug: "editorial-commerce",
    name: "Editorial Commerce",
    summary:
      "An e-commerce platform blending editorial storytelling with seamless shopping experience, built to showcase products through immersive visual narratives.",
    type: "web",
    coverImage: "/images/projects/editorial-commerce/1.jpg",
    gallery: [
      "/images/projects/editorial-commerce/1.jpg",
      "/images/projects/editorial-commerce/2.jpg",
      "/images/projects/editorial-commerce/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/editorial-commerce",
  },
  {
    slug: "quantum-interface",
    name: "Quantum Interface",
    summary:
      "A mobile-first interface exploring bold interaction patterns, combining fluid animations with a robust component architecture for cross-platform consistency.",
    type: "mobile",
    coverImage: "/images/projects/quantum-interface/1.jpg",
    gallery: [
      "/images/projects/quantum-interface/1.jpg",
      "/images/projects/quantum-interface/2.jpg",
      "/images/projects/quantum-interface/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/quantum-interface",
  },
];