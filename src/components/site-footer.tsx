import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navLinks, profile, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-display text-xl">{profile.name}</p>
          <p className="text-sm text-[color:var(--muted)]">
            Full stack web developer building clean, fast, and scalable
            interfaces.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-semibold text-[color:var(--muted)] transition hover:text-[color:var(--text)]"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-[color:var(--muted)]">
          {socials.map((social) => (
            <a
              key={social.label}
              className="transition hover:text-[color:var(--text)]"
              href={social.href}
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
