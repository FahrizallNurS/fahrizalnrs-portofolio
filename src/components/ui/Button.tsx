// components/ui/Button.tsx
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "dark" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  icon?: string; // Material Symbols icon name
  iconPosition?: "left" | "right";
  target?: "_blank" | "_self";
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-black border-[3px] border-[#171717] shadow-[6px_6px_0px_0px_#171717]",
  dark: "bg-[#171717] text-white border-[3px] border-white shadow-[6px_6px_0px_0px_#FFFFFF]",
  outline: "bg-transparent text-white border-[3px] border-white shadow-[6px_6px_0px_0px_#FFFFFF]",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "right",
  target,
  className = "",
}: ButtonProps) {
  const baseStyles = `inline-flex items-center gap-2 px-6 py-3 rounded-full font-label-md text-label-md uppercase transition-all duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none ${variantStyles[variant]} ${className}`;

  const iconEl = icon && (
    <span className="material-symbols-outlined text-lg">{icon}</span>
  );

  const content = (
    <>
      {iconPosition === "left" && iconEl}
      {children}
      {iconPosition === "right" && iconEl}
    </>
  );

  if (href) {
    return (
      <a // <-- Bagian ini sebelumnya hilang (missing opening tag)
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}