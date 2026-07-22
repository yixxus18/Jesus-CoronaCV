import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { useTheme } from "../hooks/useTheme";
import { EASE } from "./ui";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el) => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[70] border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_86%,transparent)] backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          {/* Masthead */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-[var(--accent)] font-display text-base font-bold text-[var(--accent-ink)] transition-transform duration-300 group-hover:-rotate-6">
              J
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              JCO<span className="align-super text-[9px] text-[var(--text-muted)]">®</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`link-line text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active === l.id
                    ? "is-active text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <sup className="mr-1 text-[8px] font-bold text-[var(--accent)]">
                  0{i + 1}
                </sup>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -120, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 120, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="grid place-items-center"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] md:grid"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)] md:grid"
            >
              <GithubIcon size={14} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text-primary)] transition-colors duration-300 hover:border-[var(--accent)] lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="fixed inset-0 z-[65] flex flex-col justify-between bg-[var(--bg)] px-6 pb-10 pt-28 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: EASE }}
                  className="group flex items-baseline justify-between border-b border-[var(--border)] py-5"
                >
                  <span className="text-xs font-bold text-[var(--accent)]">0{i + 1}</span>
                  <span className="flex items-center gap-3 font-display text-4xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-[-6px] group-hover:text-[var(--accent)]">
                    {l.label}
                    <ArrowUpRight
                      size={22}
                      className="text-[var(--text-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                    />
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]"
            >
              <a href={`mailto:${profile.email}`} className="link-line text-[var(--text-secondary)]">
                {profile.email}
              </a>
              <span>{profile.locationShort}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
