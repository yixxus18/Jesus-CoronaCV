import { ArrowUpRight, Check, Globe, Loader2, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Reveal } from "./ui";

const WEB3FORMS_KEY = "4fd65563-d1b0-4b35-9d5c-ae0548d24f86";

const socialRows = [
  { icon: <Mail size={16} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <LinkedinIcon size={15} />, label: "LinkedIn", value: "jesus-corona-9037a6303", href: profile.linkedin },
  { icon: <GithubIcon size={15} />, label: "GitHub", value: "@yixxus18", href: profile.github },
  { icon: <Globe size={16} />, label: "Website", value: "jesus-corona-cv.vercel.app", href: profile.website },
  { icon: <Phone size={16} />, label: "Phone", value: profile.phoneDisplay, href: `tel:+52${profile.phone}` },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending" || form.website) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact — ${form.name}`,
          botcheck: form.website,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", website: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputCls =
    "w-full border-b border-[var(--border)] bg-transparent py-2.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-colors duration-300 focus:border-[var(--accent)]";
  const labelCls = "mb-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]";

  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] bg-[var(--bg-warm)] px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-12">
        {/* Left — huge heading + socials */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">06</span>
              <span className="inline-block h-px w-10 bg-[var(--border-hover)]" />
              Get in Touch
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-7xl font-bold leading-[0.85] tracking-tight md:text-[7.5rem]">
              <span className="block">Let's</span>
              <span className="block">
                <span className="text-outline">talk</span>
                <span className="text-[var(--accent)]">.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-md leading-relaxed text-[var(--text-secondary)]">
              Open to new projects, internships and collaborations. If you're building something
              interesting — I'd love to hear about it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center border border-[var(--border)] text-[var(--text-secondary)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]">
                <Mail size={16} />
              </span>
              <span className="link-line text-lg font-semibold md:text-xl">{profile.email}</span>
            </a>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-12 border-t border-[var(--border)]">
              {socialRows.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-[var(--border)] py-4 transition-all duration-300 hover:pl-3 hover:pr-1"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {s.icon}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                      {s.label}
                    </span>
                    <span className="hidden text-sm text-[var(--text-secondary)] sm:block">
                      {s.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[var(--accent)] opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <form
              onSubmit={submit}
              className="relative border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
            >
              <span className="mark-cross pointer-events-none absolute right-4 top-3 select-none text-lg">+</span>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
                Send a message — usually replies within 24h
              </p>

              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>
                    Name
                  </label>
                  <input
                    id="cf-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="mt-7">
                <label htmlFor="cf-message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="cf-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`mt-9 flex w-full items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                  status === "success"
                    ? "border border-[var(--accent)] bg-transparent text-[var(--accent)]"
                    : "bg-[var(--accent)] text-[var(--accent-ink)] hover:bg-[var(--accent-hover)]"
                } ${status === "sending" ? "opacity-70" : ""}`}
              >
                {status === "idle" && (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
                {status === "sending" && (
                  <>
                    Sending… <Loader2 size={15} className="animate-spin" />
                  </>
                )}
                {status === "success" && (
                  <>
                    Message sent — thank you! <Check size={16} />
                  </>
                )}
                {status === "error" && (
                  <>
                    Something went wrong — try again <Send size={15} />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Or email me directly at {profile.email}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
