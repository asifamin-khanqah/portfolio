"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-2 text-sm font-semibold transition hover:text-[color:var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]",
        isActive
          ? "bg-[color:var(--surface)] text-[color:var(--text)] shadow-[var(--shadow-soft)]"
          : "text-[color:var(--muted)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
