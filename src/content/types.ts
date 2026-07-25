// ==========================================
// Hero Section
// ==========================================
export interface HeroContent {
  eyebrow: string;       // label kecil di atas headline, misal "CREATIVE ENGINEER"
  headline: string;      // teks besar utama, misal "DEVELOPER"
  description: string;   // paragraf singkat di bawah headline
  ctaLabel: string;       // teks tombol, misal "View Projects"
  ctaHref: string;        // link tujuan tombol, misal "#projects"
}

// ==========================================
// About Section
// ==========================================
export interface AboutContent {
  eyebrow: string;         // misal "ABOUT ME"
  title: string;           // headline besar tentang diri
  paragraphs: string[];    // bisa lebih dari 1 paragraf
  photoUrl: string;        // path gambar profil di public/images
  resumeUrl?: string;      // link download resume (opsional)
}

// ==========================================
// Journey / Stats Section
// ==========================================
export interface StatItem {
  value: string;   // misal "5+"
  label: string;   // misal "Projects Completed"
}

export interface StatsContent {
  title: string;              // misal "THE JOURNEY"
  highlightWord: string;      // kata yang di-highlight beda warna, misal "JOURNEY"
  paragraphs: string[];       // deskripsi journey
  stats: StatItem[];          // list angka statistik
}

// ==========================================
// Tech Stack Section
// ==========================================
export type TechIcon =
  | "code"
  | "smartphone"
  | "developer_mode"
  | "database"
  | "language"
  | "web";

export interface TechStackItem {
  name: string;      // misal "React"
  icon: TechIcon;    // nama icon Material Symbols yang dipakai
}

export interface TechStackContent {
  title: string;          // misal "TECH STACK"
  highlightWord: string;  // kata yang di-highlight, misal "STACK"
  items: TechStackItem[];
}

// ==========================================
// Project (dipakai di Selected Works & Project Detail page)
// ==========================================
export type ProjectType = "web" | "mobile";

export interface Project {
  slug: string;             
  name: string;              
  summary: string;           
  type: ProjectType;         
  coverImage: string;        
  gallery: string[];         
  githubUrl: string;         
}

// ==========================================
// Contact CTA Section
// ==========================================
export interface ContactContent {
  headline: string;      
  ctaLabel: string;       
  email: string;       
}

// ==========================================
// Footer
// ==========================================
export interface FooterContent {
  brandName: string;                  
  socialLinks: { label: string; href: string }[];
  copyrightText: string;                
}

// ==========================================
// Navbar
// ==========================================
export interface NavbarContent {
  brandName: string;                              
  navLinks: { label: string; href: string }[];     
  ctaLabel: string;                                
  ctaHref: string;                                 
}