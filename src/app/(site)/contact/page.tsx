import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Asif for frontend development work.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Contact
              </p>
              <h1 className="font-display text-4xl sm:text-5xl">
                Let&apos;s build something clean and responsive
              </h1>
              <p className="max-w-2xl text-lg text-[color:var(--muted)]">
                Share your project details and I will respond quickly. Available
                for design systems, product UI, and performance-focused
                rebuilds.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-[color:var(--border)] px-4 py-2 font-semibold transition hover:text-[color:var(--text)]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-8 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Direct line
              </p>
              <p className="mt-4 text-lg font-semibold">{profile.email}</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Prefer a quick call? I am open to short discovery chats.
              </p>
              <div className="mt-6">
                <ButtonLink href={`mailto:${profile.email}`}>
                  Email me
                </ButtonLink>
              </div>
              <div className="mt-8 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)]">
                Karachi, Pakistan · Working with remote teams globally.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-10 fade-up">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Quick form
                </p>
                <h2 className="font-display text-3xl">
                  Tell me about your project
                </h2>
                <p className="text-sm text-[color:var(--muted)]">
                  This form is a layout placeholder. Connect via email for
                  immediate response.
                </p>
              </div>
              <form className="grid gap-4">
                <input
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                  placeholder="Full name"
                  type="text"
                />
                <input
                  className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                  placeholder="Email address"
                  type="email"
                />
                <textarea
                  className="min-h-[140px] w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                  placeholder="Project details"
                />
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-contrast)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)]"
                >
                  Send details
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
