import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { featuredProject, profile, secondaryProjects } from "../data/portfolio";
import { Cube } from "./Decor";
import { Chip, Reveal, SectionHeading, TiltCard } from "./ui";

export default function Projects() {
  const p = featuredProject;
  const n = secondaryProjects[0];

  return (
    <section id="projects" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          no="03"
          label="Featured"
          title="Projects"
          note="Selected work"
        />

        <div className="mt-14 space-y-6">
          {/* Featured — full width */}
          <Reveal>
            <TiltCard max={4}>
              <div className="grid border border-[var(--accent)] bg-[var(--surface)] lg:grid-cols-12">
                {/* Copy */}
                <div className="p-8 md:p-12 lg:col-span-7" style={{ transform: "translateZ(30px)" }}>
                  <div className="flex items-start justify-between gap-6">
                    <Chip accent>{p.badge}</Chip>
                    <span className="font-display text-5xl font-bold leading-none text-outline opacity-60 md:text-6xl">
                      01
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="n noreferrer"
                      className="group inline-flex items-center gap-4 transition-colors duration-300 hover:text-[var(--accent)]"
                    >
                      {p.title}
                      <ArrowUpRight
                        className="h-8 w-8 shrink-0 -translate-x-2 translate-y-2 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 md:h-11 md:w-11"
                        strokeWidth={2}
                      />
                    </a>
                  </h3>

                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {p.role} — {p.period}
                  </p>

                  <p className="mt-6 max-w-xl leading-relaxed text-[var(--text-secondary)]">
                    {p.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]"
                    >
                      <GithubIcon size={15} />
                      View repository
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <span className="link-line text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {p.displayLink}
                    </span>
                  </div>
                </div>

                {/* Visual side */}
                <div
                  className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-t border-[var(--accent)]/50 bg-[color-mix(in_srgb,var(--accent)_7%,transparent)] lg:col-span-5 lg:border-l lg:border-t-0"
                  style={{ transform: "translateZ(14px)" }}
                >
                  <span className="mark-cross absolute left-5 top-5 select-none text-lg">+</span>
                  <span className="mark-cross absolute bottom-5 right-5 select-none text-lg">+</span>
                  <div className="anim-float">
                    <Cube size={112} />
                  </div>
                  <span className="absolute bottom-4 left-5 select-none font-display text-6xl font-bold leading-none text-outline opacity-40">
                    {"</>"}
                  </span>
                  <span className="absolute right-5 top-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    React 19 · TS
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Secondary grid */}
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <TiltCard max={6} className="h-full">
                <a
                  href={n.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 hover:border-[var(--border-hover)]"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <span className="pointer-events-none absolute -top-5 right-3 select-none font-display text-8xl font-bold leading-none text-outline opacity-30">
                    02
                  </span>
                  <Chip>{n.badge}</Chip>
                  <h3 className="mt-5 font-display text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-4xl">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {n.role} — {n.period}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {n.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {n.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--border)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--border-hover)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center justify-between border-t border-[var(--border)] pt-5">
                    <span className="link-line text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      View on Devpost
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </a>
              </TiltCard>
            </Reveal>

            {/* More on GitHub */}
            <Reveal delay={0.16}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full min-h-[320px] flex-col items-center justify-center gap-4 border border-dashed border-[var(--border-hover)] p-8 text-center transition-all duration-500 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--border)] transition-all duration-500 group-hover:rotate-[360deg] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                  <GithubIcon size={22} className="transition-colors duration-300 group-hover:text-[var(--accent-ink)]" />
                </span>
                <span className="font-display text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-4xl">
                  More on GitHub
                </span>
                <span className="max-w-xs text-sm text-[var(--text-secondary)]">
                  Open source, experiments &amp; boilerplates —{" "}
                  <span className="font-medium text-[var(--text-primary)]">@yixxus18</span>
                </span>
                <span className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                  Browse repos
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
