import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { skills, timeline } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Asif, frontend developer and UI engineer.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                About
              </p>
              <h1 className="font-display text-4xl sm:text-5xl">
                Frontend developer with a design-first mindset
              </h1>
              <p className="max-w-2xl text-lg text-[color:var(--muted)]">
                I focus on building UI that feels calm, precise, and readable.
                My work blends clean layout systems with modern frontend
                architecture, so teams can ship consistently across devices.
              </p>
              <p className="max-w-2xl text-[color:var(--muted)]">
                Whether I am building a marketing site or a complex product, I
                care about spacing, typography, and accessibility. I partner
                closely with designers to keep everything aligned.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-8 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Specialties
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-glass)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] p-4 text-sm text-[color:var(--muted)]">
                I build with a focus on modular components, consistent spacing,
                and a strong responsive grid.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="space-y-6">
            <div className="space-y-3 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Experience
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Where I have delivered impact
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {timeline.map((item) => (
                <Card key={item.company} className="fade-up">
                  <div className="flex items-start justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    <span>{item.company}</span>
                    <span>{item.period}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl">{item.role}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {item.summary}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
