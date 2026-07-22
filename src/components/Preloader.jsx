import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EASE } from "./ui";

function Word({ text, delay }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block font-display font-bold leading-[0.88] tracking-tight"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function Percent() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const c = animate(0, 100, {
      duration: 1.25,
      ease: "easeInOut",
      onUpdate: (n) => setV(Math.round(n)),
    });
    return () => c.stop();
  }, []);
  return <span className="tabular-nums">{String(v).padStart(3, "0")}</span>;
}

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col justify-between bg-[var(--bg)] px-6 py-6 md:px-12"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Jesús Corona Orozco
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Portfolio — 2026
        </motion.span>
      </div>

      <div className="flex items-end justify-between gap-6">
        <h1 className="font-display text-[clamp(3.2rem,12vw,9rem)] font-bold leading-[0.88] tracking-tight">
          <Word text="JESÚS" delay={0.15} />
          <Word
            text={
              <>
                <span className="text-outline">CORONA</span>
                <span className="text-[var(--accent)]">.</span>
              </>
            }
            delay={0.28}
          />
        </h1>
        <motion.div
          className="hidden pb-3 font-display text-6xl font-bold text-[var(--text-muted)] md:block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
        >
          <Percent />
          <span className="text-2xl text-[var(--accent)]">%</span>
        </motion.div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
          <span>Full Stack Software Developer</span>
          <span className="hidden sm:block">Torreón, Coahuila — MX</span>
        </div>
        <div className="h-px w-full bg-[var(--border)]">
          <motion.div
            className="h-px bg-[var(--accent)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 1.25, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
