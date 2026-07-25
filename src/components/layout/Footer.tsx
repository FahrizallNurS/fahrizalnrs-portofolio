import { footerContent } from "../../content/footer";

export default function Footer() {
  const { brandName, socialLinks, copyrightText } = footerContent;

  return (
    <footer className="w-full bg-[#171717] text-white py-stack-lg px-margin-desktop flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-8">
      <div className="font-display-xl text-[40px] leading-none uppercase opacity-20">
        {brandName}
      </div>

      <div className="flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label-sm text-label-sm text-white/60 hover:text-white transition-colors uppercase"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="font-label-sm text-label-sm text-white/40">
        {copyrightText}
      </div>
    </footer>
  );
}