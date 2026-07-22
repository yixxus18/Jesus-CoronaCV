import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/portfolio";
import { Reveal, SectionHeading } from "./ui";

export default function Education() {
  return (
    <section id="education" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          no="05"
          label="Background"
          title={
            <>
              Education <span className="text-[var(--text-muted)]">&amp;</span> Certifications
            </>
          }
        />

        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                <GraduationCap size={16} className="text-[var(--accent)]" />
                Education
                <span className="h-px flex-1 bg-[var(--border)]" />
              </p>
            </Reveal>
            <div className="mt-4 border-b border-[var(--border)]">
              {education.map((e, i) => (
                <Reveal key={e.title} delay={0.06 + i * 0.07}>
                  <div className="group flex items-start justify-between gap-6 border-t border-[var(--border)] py-7 transition-all duration-300 hover:pl-3">
                    <div>
                      <h3 className="max-w-md font-display text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-2xl">
                        {e.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">{e.institution}</p>
                    </div>
                    <span className="whitespace-nowrap pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {e.period}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                <Award size={16} className="text-[var(--accent)]" />
                Certifications
                <span className="h-px flex-1 bg-[var(--border)]" />
              </p>
            </Reveal>
            <div className="mt-4 border-b border-[var(--border)]">
              {certifications.map((c, i) => (
                <Reveal key={c.title} delay={0.1 + i * 0.07}>
                  <div className="group flex items-start justify-between gap-6 border-t border-[var(--border)] py-7 transition-all duration-300 hover:pl-3">
                    <div>
                      <h3 className="max-w-md font-display text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">{c.issuer}</p>
                    </div>
                    <span className="whitespace-nowrap pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {c.period}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
