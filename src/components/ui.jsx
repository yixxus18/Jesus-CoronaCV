import { animate, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const EASE = [0.22, 1, 0.36, 1];

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  no,
  label,
  title,
  note,
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--border)] pb-8">
      <div>
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">{no}</span>
            <span className="inline-block h-px w-10 bg-[var(--border-hover)]" />
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl">
            {title}
          </h2>
        </Reveal>
      </div>
      {note && (
        <Reveal delay={0.15}>
          <p className="pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
            {note}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  to,
  pad = 2,
  suffix = "",
  duration = 1.5,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {String(val).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

/* ---------- Magnetic wrapper ---------- */
export function Magnetic({
  children,
  className,
  strength = 0.32,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`inline-block ${className ?? ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

/* ---------- 3D tilt card ---------- */
export function TiltCard({
  children,
  className,
  max = 7,
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="[perspective:1200px]">
      <motion.div
        className={className}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-cursor
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------- Small typographic bits ---------- */
export function Label({ children, className = "" }) {
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)] ${className}`}
    >
      {children}
    </span>
  );
}

export function Chip({ children, accent = false }) {
  return (
    <span
      className={`inline-flex items-center border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
        accent
          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]"
          : "border-[var(--border)] text-[var(--text-secondary)] group-hover:border-[var(--border-hover)]"
      }`}
    >
      {children}
    </span>
  );
}
