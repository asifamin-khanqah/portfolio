import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variantStyles: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-[color:var(--accent)] text-[color:var(--accent-contrast)] shadow-[var(--shadow-soft)] hover:bg-[color:var(--accent-strong)]",
  secondary:
    "bg-[color:var(--surface)] text-[color:var(--text)] border border-[color:var(--border)] hover:border-transparent hover:shadow-[var(--shadow-soft)]",
  ghost: "text-[color:var(--text)] hover:bg-[color:var(--surface)]",
};

const sizeStyles: Record<NonNullable<ButtonLinkProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
    >
      {children}
    </Link>
  );
}
