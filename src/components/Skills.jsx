import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { skillGroups, spokenLanguages } from "../data/portfolio";
import { EASE, Reveal, SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-[var(--border)] bg-[var(--bg-warm)] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          no="04"
          label="Toolkit"
          title="Technical Skills"
          note="Always learning"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <div key={g.title}>
              <Reveal delay={gi * 0.08}>
                <div className="flex items-baseline justify-between border-b border-[var(--border)] pb-4">
                  <p className="flex items-baseline gap-3">
                    <span className="text-xs font-bold text-[var(--accent)]">0{gi + 1}</span>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {g.title}
                    </span>
                  </p>
                  <span className="text-[10px] font-semibold tabular-nums text-[var(--text-muted)]">
                    ({String(g.skills.length).padStart(2, "0")})
                  </span>
                </div>
              </Reveal>
              <div className="divide-y divide-[var(--border)]">
                {g.skills.map((s, si) => (
                  <Reveal key={s} delay={0.05 + si * 0.04}>
                    <div className="group flex items-center justify-between py-3.5">
                      <span className="flex items-center gap-3 text-[15px] font-medium transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--accent)]">
                        <span className="h-1.5 w-1.5 rotate-45 bg-[var(--border-hover)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
                        {s}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="-translate-x-1 text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken languages */}
        <div className="mt-20 grid gap-10 border-t border-[var(--border)] pt-12 md:grid-cols-2 md:gap-16">
          {spokenLanguages.map((lang, i) => (
            <Reveal key={lang.name} delay={i * 0.1}>
              <div className="flex items-baseline justify-between">
                <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {lang.name}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {lang.level}
                </p>
              </div>
              <div className="mt-4 h-[3px] overflow-hidden bg-[var(--border)]">
                <motion.div
                  className="h-full bg-[var(--accent)]"
                  style={{ transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: lang.pct / 100 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.2, delay: 0.15 + i * 0.1, ease: EASE }}
                />
              </div>
              <p className="mt-2 text-right text-[10px] font-semibold tabular-nums text-[var(--text-muted)]">
                {lang.pct}%
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
