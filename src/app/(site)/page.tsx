import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { profile, projects, services, stats, steps } from "@/data/site";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Section className="pt-14 sm:pt-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                {profile.role}
              </p>
              <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Building clean, responsive web experiences end to end.
              </h1>
              <p className="max-w-xl text-lg text-[color:var(--muted)]">
                {profile.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/contact">Let&apos;s work together</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  View projects
                </ButtonLink>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                <span>Remote friendly</span>
                <span>Mentor</span>
                <span>{profile.location}</span>
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6 sm:p-8 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Snapshot
              </p>
              <div className="mt-6 grid gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-2xl">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-glass)] p-4 text-sm text-[color:var(--muted)]">
                Building full-stack web experiences with a focus on clean UI,
                reliable APIs, and crisp responsiveness.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Featured work
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Projects with measurable impact
              </h2>
            </div>
            <ButtonLink href="/work" variant="ghost" size="sm">
              See all work
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="fade-up">
                <div className="flex items-start justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-4 font-display text-xl">{project.title}</h3>
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

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
            <div className="space-y-4 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Services
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Design-forward frontend delivery
              </h2>
              <p className="max-w-2xl text-[color:var(--muted)]">
                From product UI to polished systems, I build frontend experiences
                with readable layouts, clean navigation, and reliable
                responsiveness.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="fade-up">
                  <h3 className="font-display text-lg">{service.title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted)]">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-4 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Process
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Minimal motion, maximum clarity
              </h2>
              <p className="max-w-2xl text-[color:var(--muted)]">
                Each build follows a straightforward workflow that keeps
                stakeholders aligned and screens feeling intentional.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {steps.map((step) => (
                  <Card key={step.title} className="fade-up">
                    <h3 className="font-display text-lg">{step.title}</h3>
                    <p className="mt-3 text-sm text-[color:var(--muted)]">
                      {step.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-8 fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                Quick facts
              </p>
              <ul className="mt-6 space-y-4 text-sm text-[color:var(--muted)]">
                <li>Reusable component systems for faster development.</li>
                <li>Accessibility baked in from the first layout.</li>
                <li>Performance-focused builds with clean code.</li>
                <li>Responsive layouts tested across breakpoints.</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href="/about" variant="secondary" size="sm">
                  More about me
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--border)]">
        <Container>
          <div className="glass-panel rounded-3xl p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  Ready to start?
                </p>
                <h2 className="font-display text-3xl sm:text-4xl">
                  Let&apos;s build your next frontend
                </h2>
                <p className="max-w-xl text-[color:var(--muted)]">
                  I am available for product UI, design systems, and
                  performance-led rebuilds. Share your brief and I will respond
                  quickly.
                </p>
              </div>
              <ButtonLink href="/contact" size="lg">
                Book a call
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
