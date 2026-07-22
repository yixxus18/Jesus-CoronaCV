import { motion, useMotionValue } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "../data/portfolio";
import { CornerMarks, Crosshair, Cube, Parallax, Particles, Rings, SpinBadge } from "./Decor";
import { EASE, Magnetic } from "./ui";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const onMouseMove = (e) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-14 pt-36 md:px-10"
    >
      {/* Ambient layers */}
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="grow-line pointer-events-none absolute left-9 top-0 hidden h-36 w-px bg-[var(--accent)] md:block"
        aria-hidden
      />
      <CornerMarks />
      <Particles />

      {/* 3D decorations with mouse parallax */}
      <Parallax mx={mx} my={my} depth={34} className="pointer-events-none absolute right-[7%] top-[15%] hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.15, duration: 0.9, ease: EASE }}
          className="anim-float"
        >
          <Cube size={132} />
        </motion.div>
      </Parallax>
      <Parallax mx={mx} my={my} depth={-22} className="pointer-events-none absolute left-[4%] top-[32%] hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.9, ease: EASE }}
          className="anim-float"
          style={{ animationDelay: "-3.5s" }}
        >
          <Rings size={185} />
        </motion.div>
      </Parallax>
      <Parallax mx={mx} my={my} depth={14} className="pointer-events-none absolute bottom-[9%] left-[8%] hidden md:block">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.8 }}>
          <Crosshair />
        </motion.div>
      </Parallax>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.45, duration: 0.8 }}
        className="absolute bottom-[31%] right-[8%] hidden xl:block"
      >
        <SpinBadge />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2"
        >
          <span className="dot-pulse h-2 w-2 rounded-full bg-[var(--accent)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            Full Stack Developer
          </span>
          <span className="h-3 w-px bg-[var(--border-hover)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Multiplatform
          </span>
        </motion.div>

        <h1 className="mt-7 select-none font-display font-bold leading-[0.84] tracking-tight">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(3.7rem,13.5vw,11.5rem)]"
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.62, duration: 0.95, ease: EASE }}
            >
              JESÚS
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[clamp(3.7rem,13.5vw,11.5rem)]"
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.74, duration: 0.95, ease: EASE }}
            >
              <span className="text-outline">CORONA</span>
              <span className="text-[var(--accent)]">.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-12">
          {/* Tagline + CTAs */}
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.95, duration: 0.7, ease: EASE }}
              className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
            >
              I build <span className="font-medium text-[var(--text-primary)]">enterprise ERPs</span>,{" "}
              <span className="font-medium text-[var(--text-primary)]">AI-driven systems</span> and
              multiplatform web products — end to end, with React, Next.js, Astro, Laravel &amp; Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.05, duration: 0.7, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="pulse-ring relative inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-ink)] transition-colors duration-300 hover:bg-[var(--accent-hover)]"
                >
                  Get in touch
                  <ArrowUpRight size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-[var(--border-hover)] pb-1 text-sm font-semibold transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download CV
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Info block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.15, duration: 0.7, ease: EASE }}
            className="w-full space-y-4 border-l border-[var(--border)] pl-6 md:col-span-5 md:justify-self-end md:max-w-sm"
          >
            {[
              ["Based in", profile.location],
              ["Role", profile.title],
              ["Recognized at", "HackMTY '25 — Tec de Monterrey"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                  {k}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">{v}</p>
              </div>
            ))}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
                Scroll
              </span>
              <span className="relative h-9 w-px overflow-hidden bg-[var(--border)]">
                <motion.span
                  className="absolute inset-0 bg-[var(--accent)]"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
                />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
