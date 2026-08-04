import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "playnchill-website",
    name: "Play n Chill",
    summary:
      "A comprehensive financial analytics dashboard designed for real-time data visualization, empowering users to track investments and manage transactions with clarity.",
    paragraphs: [
      "A comprehensive financial data visualization platform designed to simplify complex market metrics for retail investors. The application aggregates real-time stock data, portfolio performance, and custom alerts into a single, intuitive interface.",
      "The core challenge was balancing information density with scannability. High-contrast color blocking was used to create distinct zones for different data types, ensuring users can quickly parse critical numbers without cognitive overload.",
      "Performance optimization was crucial for rendering large datasets in the browser, relying heavily on virtualized lists and efficient rendering cycles to maintain a smooth experience.",
    ],
    techStack: ["Laravel", "adminLTE3", "Java-Script",],
    type: "web",
    coverImage: "/images/projects/playnchill-website/pnc-home.png",
    gallery: [
      "/images/projects/playnchill-website/pnc-home.png",
      "/images/projects/playnchill-website/pnc-2.png",
      "/images/projects/playnchill-website/pnc-3.png",
    ],
    githubUrl: "https://github.com/FahrizallNurS/sistem-booking-play-n-chill.git",
  },
  {
    slug: "editorial-commerce",
    name: "Editorial Commerce",
    summary:
      "An e-commerce platform blending editorial storytelling with seamless shopping experience, built to showcase products through immersive visual narratives.",
    paragraphs: [
      "An e-commerce platform blending editorial storytelling with seamless shopping experience, built to showcase products through immersive visual narratives.",
      "The design system prioritizes large-format imagery and typography-led layouts, treating each product page like a magazine spread rather than a traditional grid-based storefront.",
      "Built with performance in mind, the platform uses aggressive image optimization and lazy loading to keep load times low despite the visually rich content.",
    ],
    techStack: ["Next.js", "TypeScript", "Stripe", "Sanity CMS"],
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
    paragraphs: [
      "A mobile-first interface exploring bold interaction patterns, combining fluid animations with a robust component architecture for cross-platform consistency.",
      "Special attention was given to gesture-based navigation, allowing users to move through the app using natural swipe and drag interactions rather than relying solely on tap targets.",
      "The component library was built to be fully reusable across both iOS and Android, reducing development overhead while maintaining a consistent visual language.",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    type: "mobile",
    coverImage: "/images/projects/quantum-interface/1.jpg",
    gallery: [
      "/images/projects/quantum-interface/1.jpg",
      "/images/projects/quantum-interface/2.jpg",
      "/images/projects/quantum-interface/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/quantum-interface",
  },
  {
    slug: "neo-banking-app",
    name: "Neo Banking App",
    summary:
      "A next-generation mobile banking experience focused on simplicity and speed, featuring biometric authentication and real-time transaction insights.",
    paragraphs: [
      "A next-generation mobile banking experience focused on simplicity and speed, featuring biometric authentication and real-time transaction insights.",
      "Security was a top priority throughout development, with end-to-end encryption and biometric login implemented to protect sensitive financial data without adding friction to the user experience.",
      "The app also includes a real-time spending insights dashboard, helping users understand their financial habits at a glance.",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Retrofit"],
    type: "mobile",
    coverImage: "/images/projects/neo-banking-app/techiq.jpg",
    gallery: [
      "/images/projects/neo-banking-app/techiq.jpg",
      "/images/projects/neo-banking-app/2.jpg",
      "/images/projects/neo-banking-app/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/neo-banking-app",
  },
  {
    slug: "abstract-renderer",
    name: "Abstract Renderer",
    summary:
      "A creative coding tool for generating abstract geometric art in real-time, built with a focus on performance and experimental shader techniques.",
    paragraphs: [
      "A creative coding tool for generating abstract geometric art in real-time, built with a focus on performance and experimental shader techniques.",
      "The renderer uses custom WebGL shaders to achieve real-time generative visuals, allowing users to tweak parameters and instantly see the results without any render delay.",
      "Built as an exploration into the intersection of code and visual art, the project pushes the boundaries of what's possible directly in the browser.",
    ],
    techStack: ["WebGL", "GLSL", "React", "Three.js"],
    type: "web",
    coverImage: "/images/projects/abstract-renderer/1.jpg",
    gallery: [
      "/images/projects/abstract-renderer/1.jpg",
      "/images/projects/abstract-renderer/2.jpg",
      "/images/projects/abstract-renderer/3.jpg",
    ],
    githubUrl: "https://github.com/fahrizalnrs/abstract-renderer",
  },
];