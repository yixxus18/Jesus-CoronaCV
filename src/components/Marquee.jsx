import { marqueeSkills } from "../data/portfolio";

export default function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills];
  return (
    <section
      className="marquee-paused relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-warm)] py-6"
      aria-hidden
    >
      <div className="marquee-track items-center">
        {items.map((s, i) => (
          <span key={`${s}-${i}`} className="flex items-center whitespace-nowrap">
            <span
              className={`font-display text-4xl font-bold uppercase tracking-tight md:text-6xl ${
                i % 2 === 0 ? "text-[var(--text-primary)]" : "text-outline opacity-70"
              }`}
            >
              {s}
            </span>
            <span className="mx-8 text-2xl text-[var(--accent)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
