import { type ReactNode, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:opacity-90 active:scale-95",
  secondary:
    "bg-surface text-on-surface hover:scale-105",
  outline:
    "border border-primary text-primary hover:bg-primary/5",
  ghost: "text-primary hover:opacity-80",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
}) {
  return (
    <button
      className={`rounded-full font-label-lg transition-all flex items-center justify-center gap-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
