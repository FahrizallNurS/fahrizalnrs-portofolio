import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarContent } from "../../content/navbar";
import { useLenis } from "../lib/lenis-context";
import Button from "../ui/Button";

const HERO_THRESHOLD = 50; // px, batas dianggap "masih di Hero"
const HIDE_DELAY = 800; // ms, jeda sebelum navbar hilang pas idle

export default function Navbar() {
  const { brandName, navLinks, ctaLabel, ctaHref } = navbarContent;
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide navbar: muncul pas scroll, hilang pas idle (kecuali di Hero)
  useEffect(() => {
    if (!lenis) return;

    function handleScroll(e: { scroll: number }) {
      const atTop = e.scroll < HERO_THRESHOLD;

      setVisible(true);

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (!atTop) {
        hideTimeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, HIDE_DELAY);
      }
    }

    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [lenis]);

  // Kalau mobile menu lagi dibuka, paksa navbar tetap muncul
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    }
  }, [isOpen]);

  // Ubah tipe MouseEvent menjadi HTMLElement agar bisa dipakai di <a> dan <div>
  function handleAnchorClick(
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    setIsOpen(false);
    const sectionId = href.slice(1);

    if (location.pathname === "/") {
      lenis?.scrollTo(href, { offset: -80 });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  }

  return (
    <nav
      ref={navRef}
      id="main-nav"
      data-nav-theme="default"
      className={`fixed top-0 w-full z-50 px-margin-mobile md:px-margin-desktop bg-transparent py-stack-md transition-all duration-500 ease-in-out mix-blend-difference ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <div className="nav-text font-display-xl text-white tracking-tighter text-[32px] md:text-[40px] leading-none uppercase">
          {brandName}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            // FIX: Menambahkan tag pembuka <a> yang sebelumnya hilang
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="nav-text text-white font-label-md text-label-md hover:opacity-70 transition-opacity uppercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* FIX: Hapus penggunaan 'any' pada parameter (e) */}
        <div 
          className="hidden md:flex cursor-pointer" 
          onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAnchorClick(e, ctaHref)}
        >
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-text md:hidden text-white flex items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen} // FIX: Tambahan Accessibility (a11y)
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#171717] flex flex-col items-center py-8 gap-6 md:hidden border-t border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            // FIX: Menambahkan tag pembuka <a> yang sebelumnya hilang
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-white font-label-md text-label-md hover:opacity-70 transition-opacity uppercase cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          {/* FIX: Hapus penggunaan 'any' pada parameter (e) */}
          <div 
            className="mt-4 cursor-pointer" 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAnchorClick(e, ctaHref)}
          >
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}