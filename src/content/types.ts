export interface HeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  photoUrl: string;
  resumeUrl?: string;
  githubUrl?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsContent {
  title: string;
  highlightWord: string;
  paragraphs: string[];
  stats: StatItem[];
}

export type TechCategory = "web" | "mobile" | "architecture";

export interface TechStackRow {
  category: TechCategory;
  label: string;
  color: string;
  items: string[];
}

export interface TechStackContent {
  title: string;
  highlightWord: string;
  rows: TechStackRow[];
}

export type ProjectType = "web" | "mobile";

export interface Project {
  slug: string;
  name: string;
  summary: string;
  paragraphs: string[];
  techStack: string[];
  type: ProjectType;
  coverImage: string;
  gallery: string[];
  githubUrl: string;
}

export interface ContactContent {
  headline: string;
  ctaLabel: string;
  email: string;
}

export interface FooterContent {
  brandName: string;
  socialLinks: { label: string; href: string }[];
  copyrightText: string;
}

export interface NavbarContent {
  brandName: string;
  navLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}