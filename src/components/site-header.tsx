"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/data/site";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--surface-glass)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-display text-lg tracking-tight">
          {profile.name}
        </Link>
        <div className="flex items-center gap-3">
          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="ml-1 rounded-full border border-[color:var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)] transition hover:text-[color:var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </Container>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[color:var(--border)] bg-[color:var(--surface-glass)] backdrop-blur md:hidden"
        >
          <Container className="py-4">
            <nav
              className="flex flex-col gap-2"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
