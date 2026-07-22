import { ArrowUpRight, Download } from "lucide-react";
import { profile, stats } from "../data/portfolio";
import { Counter, Reveal, SectionHeading } from "./ui";

const infoRows = [
  { label: "Location", value: profile.location },
  {
    label: "Currently",
    value: (
      <a
        href="https://catalog.abasa.app/"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-1 transition-colors duration-300 hover:text-[var(--accent)]"
      >
        ABASA — ERP Platform
        <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    ),
  },
  { label: "Focus", value: "ERP · AI systems · Web platforms" },
  {
    label: "Availability",
    value: (
      <span className="inline-flex items-center gap-2">
        <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        Open to projects
      </span>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          no="01"
          label="About"
          title={
            <>
              Who <span className="text-[var(--accent)]">I Am</span>
            </>
          }
          note="Torreón, Coahuila — MX"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 md:mt-20">
          {/* Bio */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-2xl text-xl font-medium leading-snug md:text-[1.55rem]">
                Full Stack Software Developer with hands-on experience building
                enterprise web platforms, ERP modules, and AI-driven systems.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
                I work across the stack with React, Next.js, Astro, Laravel and Node.js — backed by
                PostgreSQL, Redis and well-designed REST APIs. I apply Clean Architecture, SDLC best
                practices and Test-Driven Development to deliver reliable, production-ready software.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
                Recognized at <span className="font-medium text-[var(--text-primary)]">HackMTY</span> for
                developing a Multi-Agent Protocol solution — currently shipping full-stack ERP features at{" "}
                <span className="font-medium text-[var(--text-primary)]">ABASA</span>.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-12 bg-[var(--accent)]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                  Writing code since 2022 — Comarca Lagunera, MX
                </span>
              </div>
            </Reveal>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.08 + i * 0.07} className="bg-[var(--bg)]">
                  <div className="group p-5 transition-colors duration-300 hover:bg-[var(--surface)]">
                    <p className="font-display text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-5xl">
                      <Counter to={s.value} pad={s.pad} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Info stack */}
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="border border-[var(--border)] bg-[var(--surface)]">
                <div className="border-b border-[var(--border)] px-5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    Quick Facts
                  </p>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {infoRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 hover:bg-[var(--surface-elevated)]"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                        {row.label}
                      </span>
                      <span className="text-right text-sm font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 bg-[var(--accent)] px-5 py-6 text-[var(--accent-ink)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
                >
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] opacity-70">
                      Résumé — PDF
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold tracking-tight">Download CV</p>
                  </div>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--accent-ink)]/40 transition-all duration-500 group-hover:rotate-[360deg]">
                    <Download size={17} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
