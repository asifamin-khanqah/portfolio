import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { education, profile, skillGroups, timeline } from "@/data/site";

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
                Full stack developer with a design-first mindset
              </h1>
              <p className="max-w-2xl text-lg text-[color:var(--muted)]">
                {profile.summary}
              </p>
              <p className="max-w-2xl text-[color:var(--muted)]">
                I build full-stack web apps with clean layout systems, reliable
                APIs, and accessibility in mind. I partner closely with teams to
                keep every screen aligned and easy to maintain.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-8 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Skills
              </p>
              <div className="mt-6 grid gap-4">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      {group.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="space-y-6">
            <div className="space-y-3 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Education
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Learning and growth
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <Card key={item.school} className="fade-up">
                  <div className="flex items-start justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    <span>{item.school}</span>
                    <span>{item.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {item.detail}
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
