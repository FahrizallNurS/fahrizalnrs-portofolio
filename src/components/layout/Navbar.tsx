import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarContent } from "../../content/navbar";
import { useLenis } from "../lib/lenis-context";
import { useMagneticButton } from "../hooks/useMagneticButton";

export default function Navbar() {
  const { brandName, navLinks, ctaLabel, ctaHref } = navbarContent;
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);

  useMagneticButton(navRef);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
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
      className="fixed top-0 w-full z-50 px-margin-mobile md:px-margin-desktop bg-transparent py-stack-md transition-all duration-300 mix-blend-difference"
    >
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <div className="font-display-xl text-white tracking-tighter text-[32px] md:text-[40px] leading-none uppercase">
          {brandName}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-white font-label-md text-label-md hover:opacity-70 transition-opacity uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex magnetic-wrap">
          <a
            href={ctaHref}
            onClick={(e) => handleAnchorClick(e, ctaHref)}
            className="magnetic-btn flex items-center justify-center px-6 py-3 bg-white text-black rounded-full font-label-md text-label-md transition-transform uppercase"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white flex items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-white font-label-md text-label-md hover:opacity-70 transition-opacity uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={(e) => handleAnchorClick(e, ctaHref)}
            className="inline-flex items-center justify-center px-8 py-4 mt-4 bg-white text-black rounded-full font-label-md text-label-md transition-transform uppercase"
          >
            {ctaLabel}
          </a>
        </div>
      )}
    </nav>
  );
}