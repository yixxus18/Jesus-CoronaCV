import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

/* ---------- Wireframe cube (nested, pure CSS 3D) ---------- */
export function Cube({ size = 130, className = "" }) {
  return (
    <div className={`cube-scene ${className}`} style={{ "--cube-size": `${size}px` }}>
      <div className="cube-root">
        <div className="cube-face cf-f" />
        <div className="cube-face cf-b" />
        <div className="cube-face cf-r" />
        <div className="cube-face cf-l" />
        <div className="cube-face cf-t" />
        <div className="cube-face cf-d" />
        <div className="cube-inner">
          <div className="cube-face ci-f" />
          <div className="cube-face ci-b" />
          <div className="cube-face ci-r" />
          <div className="cube-face ci-l" />
          <div className="cube-face ci-t" />
          <div className="cube-face ci-d" />
        </div>
        <div className="cube-core" />
      </div>
    </div>
  );
}

/* ---------- Triple floating ring (pure CSS 3D) ---------- */
export function Rings({ size = 180, className = "" }) {
  return (
    <div className={className}>
      <div className="ring-scene" style={{ "--ring-size": `${size}px` }}>
        <div className="ring-el ring-1" />
        <div className="ring-el ring-2" />
        <div className="ring-el ring-3" />
        <div className="ring-dot dot-pulse" />
      </div>
    </div>
  );
}

/* ---------- Floating amber particles ---------- */
const PARTICLES = [
  { left: "12%", top: "68%", delay: "0s", duration: "9s" },
  { left: "28%", top: "82%", delay: "1.6s", duration: "11s" },
  { left: "58%", top: "76%", delay: "3.2s", duration: "8s" },
  { left: "78%", top: "64%", delay: "0.9s", duration: "12s" },
  { left: "90%", top: "80%", delay: "2.4s", duration: "10s" },
];

export function Particles({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: p.left, top: p.top, animationDelay: p.delay, animationDuration: p.duration }}
        />
      ))}
    </div>
  );
}

/* ---------- Editorial crosshair ---------- */
export function Crosshair({ className = "" }) {
  return (
    <div className={`crosshair ${className}`} aria-hidden>
      <span className="crosshair-ring" />
    </div>
  );
}

/* ---------- Spinning circular text badge ---------- */
export function SpinBadge({ className = "" }) {
  return (
    <a
      href="#contact"
      aria-label="Go to contact section"
      className={`group relative flex h-28 w-28 items-center justify-center ${className}`}
    >
      <svg viewBox="0 0 100 100" className="anim-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="jc-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-[var(--text-secondary)] text-[8px] font-semibold uppercase tracking-[2.5px] transition-colors duration-300 group-hover:fill-[var(--accent)]">
          <textPath href="#jc-circle">
            Full Stack Developer · Multiplatform · Open to work ·
          </textPath>
        </text>
      </svg>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
        <ArrowDown className="h-4 w-4 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent-ink)]" />
      </span>
    </a>
  );
}

/* ---------- Corner cross marks (editorial registration marks) ---------- */
export function CornerMarks() {
  return (
    <>
      <span className="mark-cross pointer-events-none absolute left-6 top-24 hidden select-none text-lg lg:block" aria-hidden>+</span>
      <span className="mark-cross pointer-events-none absolute right-6 top-24 hidden select-none text-lg lg:block" aria-hidden>+</span>
    </>
  );
}

/* ---------- Mouse-parallax wrapper for hero decorations ---------- */
export function Parallax({
  children,
  mx,
  my,
  depth = 20,
  className = "",
}) {
  const tx = useTransform(mx, (v) => v * depth);
  const ty = useTransform(my, (v) => v * depth);
  const x = useSpring(tx, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(ty, { stiffness: 60, damping: 20, mass: 0.8 });
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
