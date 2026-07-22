import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { Reveal } from "./ui";

function useTorreonTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: profile.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Footer() {
  const time = useTorreonTime();

  return (
    <footer className="overflow-hidden border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal y={40}>
          <p className="select-none pt-12 text-center font-display text-[clamp(4.5rem,17vw,15rem)] font-bold leading-[0.8] tracking-tight text-outline opacity-40">
            JCO®
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[var(--border)] py-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} Jesús Corona Orozco</p>

          <p className="flex items-center gap-2.5">
            <span className="dot-pulse h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Torreón, MX —{" "}
            <span className="tabular-nums text-[var(--text-secondary)]">{time || "--:--:--"}</span>
            <span className="hidden sm:inline">GMT-6</span>
          </p>

          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">Built with React · Vite · Tailwind</span>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-ink)]"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
