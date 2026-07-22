import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-[var(--border)] bg-[var(--bg-warm)] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          no="02"
          label="Career"
          title="Experience"
          note="2024 — Present"
        />

        <div className="mt-4">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <article className="group relative grid gap-8 border-b border-[var(--border)] px-3 py-12 transition-all duration-500 hover:bg-[var(--surface)] hover:px-8 md:py-14 lg:grid-cols-12">
                <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[var(--accent)] transition-transform duration-500 group-hover:scale-y-100" />

                {/* Company — huge */}
                <div className="lg:col-span-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-bold leading-[0.92] tracking-tight md:text-6xl">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group/name inline-flex items-start gap-3 transition-colors duration-300 hover:text-[var(--accent)]"
                    >
                      {job.company}
                      <ArrowUpRight
                        className="mt-2 h-6 w-6 shrink-0 -translate-x-2 translate-y-2 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover/name:translate-x-0 group-hover/name:translate-y-0 group-hover/name:opacity-100 md:h-8 md:w-8"
                        strokeWidth={2.2}
                      />
                    </a>
                  </h3>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link-line mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]"
                  >
                    {job.displayLink}
                  </a>
                </div>

                {/* Details */}
                <div className="space-y-5 lg:col-span-7 lg:border-l lg:border-[var(--border)] lg:pl-12">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                    {job.role}
                  </p>
                  <p className="leading-relaxed text-[var(--text-secondary)]">{job.description}</p>

                  <ul className="space-y-3">
                    {job.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--accent)]" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--border)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:border-[var(--border-hover)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
