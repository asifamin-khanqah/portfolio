import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected frontend projects and case studies by Asif.",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Work
              </p>
              <h1 className="font-display text-4xl sm:text-5xl">
                Recent projects
              </h1>
              <p className="max-w-2xl text-lg text-[color:var(--muted)]">
                A selection of interfaces built with strong visual rhythm,
                consistent spacing, and responsive system thinking.
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary">
              Start a project
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="fade-up">
                <div className="flex items-start justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-semibold">{project.impact}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
