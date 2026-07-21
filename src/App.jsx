import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  ExternalLink,
  Download,
  Globe,
  Send,
  CheckCircle,
  XCircle,
  Loader2,
  MapPin,
  Sun,
  Moon,
} from 'lucide-react';

const PORTFOLIO_DATA = {
  personal: {
    name: "Jesús Corona",
    fullName: "Jesús Corona Orozco",
    title: "Full Stack Software Developer",
    subtitle: "Multiplatform Software Development",
    email: "yisuskroom@gmail.com",
    phone: "8711055582",
    location: "Torreón, Coahuila, México",
    linkedin: "https://www.linkedin.com/in/jesus-corona-9037a6303/",
    github: "https://github.com/yixxus18",
    website: "https://jesus-corona-cv.vercel.app",
    description: "Full Stack Software Developer with hands-on experience building enterprise web platforms, ERP modules, and AI-driven systems using React, Next.js, Astro, Laravel, and Node.js. Skilled in PostgreSQL, Redis, REST API development, and modern full-stack architectures. Applies Clean Architecture, SDLC best practices, and Test-Driven Development to deliver reliable, production-ready software. Recognized at HackMTY for developing a Multi-Agent Protocol solution."
  },
  experience: [
    {
      company: "ABASA",
      role: "Full Stack Developer Intern",
      period: "Jan 2026 – Apr 2026",
      link: "https://catalog.abasa.app/",
      description: "Developed frontend and backend features for an enterprise ERP platform across Human Resources, Purchasing, and Inventory modules.",
      achievements: [
        "Built and improved full-stack features using Astro with React, PostgreSQL, Redis, and REST APIs.",
        "Implemented real-time notifications and business workflow automations to streamline ERP operations.",
        "Collaborated cross-functionally to improve usability, performance, and scalability across core business processes."
      ],
      tech: ["Astro", "React", "PostgreSQL", "Redis", "REST APIs"]
    },
    {
      company: "MR Asesores",
      role: "Freelance Full Stack Developer",
      period: "Oct 2025 – May 2026",
      link: "https://mr-asesores.vercel.app/",
      description: "Developed a web platform and management system using modern full-stack technologies.",
      achievements: [
        "Built web platform and management system using React, Next.js, and Tailwind CSS.",
        "Applied Clean Architecture and Test-Driven Development principles to deliver maintainable, production-ready features.",
        "Migrated internal workflows and documentation from Google Docs to an external database system, improving data structure and accessibility."
      ],
      tech: ["React", "Next.js", "Tailwind CSS", "Clean Architecture", "TDD"]
    },
    {
      company: "Telco Networks",
      role: "Web Developer Intern",
      period: "Oct 2024 – Jan 2025",
      link: "https://telco-networks.mx/",
      description: "Led development and maintenance of interactive corporate websites.",
      achievements: [
        "Led development and maintenance of interactive corporate websites using Astro and Laravel.",
        "Implemented Stripe payment integration and optimized site performance and load times.",
        "Partnered with design and development teams to maintain visual quality, usability, and consistency."
      ],
      tech: ["Astro", "Laravel", "Stripe", "Web Development"]
    }
  ],
  projects: [
    {
      title: "Clean React",
      role: "Open Source Boilerplate",
      period: "2025",
      description: "Production-ready React 19 + TypeScript boilerplate built on Clean Architecture principles. Features adapter pattern, centralized HTTP client, lazy loading, auth system, Redux Toolkit, and styled-components. Designed for teams that want separation of concerns and testable layers.",
      tech: ["React 19", "TypeScript", "Clean Architecture", "Redux Toolkit", "Vite", "styled-components"],
      link: "https://github.com/yixxus18/clean-react",
      type: "Open Source",
      featured: true
    },
    {
      title: "Neuro Cash",
      role: "HackMTY Participant",
      period: "Hackathon Monterrey",
      description: "Built and demonstrated a Multi-Agent Protocol solution during a competitive hackathon organized by Tecnológico de Monterrey. Innovation in fintech and AI-driven systems.",
      tech: ["MCP", "Multi-Agent Protocol", "React", "Fintech"],
      link: "https://devpost.com/software/neuro-cash",
      type: "Hackathon"
    }
  ],
  education: [
    {
      school: "Universidad Tecnológica de Torreón",
      degree: "Engineering in Software Development and Management",
      period: "2024 – 2026"
    },
    {
      school: "Universidad Tecnológica de Torreón",
      degree: "TSU in Information Technologies",
      period: "2022 – 2024"
    }
  ],
  certifications: [
    {
      name: "HackMTY Certificate of Participation",
      issuer: "Tecnológico de Monterrey",
      date: "Oct 2025"
    },
    {
      name: "CCNA v7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "Certified"
    }
  ],
  skills: {
    languages: ["JavaScript (ES6+) / TypeScript", "Python", "PHP", "C#", "Java", "Go"],
    frameworks: ["React / Next.js", "Astro", "Laravel", "Tailwind CSS", "Vue.js", "Angular"],
    tools: ["PostgreSQL", "Redis", "Git / GitHub", "Docker", "Linux", "VS Code", "Figma", "AI-assisted dev"]
  },
  languages_spoken: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B2 – Professional Working Proficiency" }
  ]
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const [formStatus, setFormStatus] = useState(null);

  // ─── Theme toggle ───
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "4fd65563-d1b0-4b35-9d5c-ae0548d24f86");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) { setFormStatus('success'); e.target.reset(); setTimeout(() => setFormStatus(null), 5000); }
      else { setFormStatus('error'); }
    } catch { setFormStatus('error'); }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[var(--bg)] text-[var(--text-primary)] font-sans overflow-x-hidden">

      {/* Scroll progress — 1px warm accent */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[var(--accent)] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* ─── NAV — editorial masthead ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded overflow-hidden">
              <img src="/favicon.svg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-sm font-bold tracking-tight text-[var(--text-primary)]">
              JC
            </span>
          </motion.div>

          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="line-reveal text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ rotate: 180, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1.5 rounded-sm hover:bg-[var(--surface)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO — asymmetric, editorial ─── */}
      <header className="relative min-h-screen flex items-end px-6 md:px-12 pb-16 pt-20 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
        {/* Warm gradient blurs */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[var(--accent)]/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--accent)]/[0.03] rounded-full blur-[100px] pointer-events-none" />

        {/* 3D Wireframe Cube — top right */}
        <div className="absolute top-32 right-12 opacity-60 pointer-events-none hidden lg:block">
          <div className="cube-scene">
            <div className="cube">
              <div className="cube__face cube__face--front" />
              <div className="cube__face cube__face--back" />
              <div className="cube__face cube__face--right" />
              <div className="cube__face cube__face--left" />
              <div className="cube__face cube__face--top" />
              <div className="cube__face cube__face--bottom" />
            </div>
          </div>
        </div>

        {/* Floating ring — mid left */}
        <div className="absolute top-1/3 left-[15%] opacity-45 pointer-events-none hidden md:block">
          <div className="ring-scene">
            <div className="ring" />
          </div>
        </div>

        {/* Crosshair decoration — bottom left */}
        <div className="absolute bottom-24 left-12 opacity-50 pointer-events-none hidden lg:block">
          <div className="crosshair" />
        </div>

        {/* Vertical accent line — left edge */}
        <div className="absolute top-24 left-12 pointer-events-none hidden lg:block">
          <div className="hero-line" />
        </div>

        {/* Floating particles */}
        {[
          { top: '15%', left: '20%', size: 3, delay: 0, dur: 6 },
          { top: '30%', right: '25%', size: 2, delay: 1.5, dur: 8 },
          { top: '60%', left: '10%', size: 2.5, delay: 3, dur: 7 },
          { top: '75%', right: '15%', size: 2, delay: 0.5, dur: 9 },
          { top: '45%', left: '40%', size: 1.5, delay: 2, dur: 5 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--accent)] pointer-events-none hidden md:block"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.size,
              height: p.size,
              opacity: 0.4,
            }}
            animate={{
              y: [-10, -30, -10],
              x: [0, 8, -5, 0],
              opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Name — massive type */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)] mb-6">
                Full Stack Developer
              </p>
              <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85] text-[var(--text-primary)]">
                Jesús
                <br />
                <span className="text-[var(--text-secondary)]">Corona</span>
              </h1>
            </motion.div>

            {/* Info block — right bottom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col gap-3 md:pb-4"
            >
              <p className="text-sm text-[var(--text-secondary)] max-w-xs leading-relaxed">
                {PORTFOLIO_DATA.personal.title} — {PORTFOLIO_DATA.personal.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollTo('contact')}
                  className="pulse-ring px-5 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black text-sm font-semibold transition-colors rounded-sm"
                >
                  Get in touch
                </button>
                <a
                  href="/Jesus_Corona_CV.pdf"
                  download="Jesus_Corona_CV.pdf"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--text-muted)]"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="border-y border-[var(--border)] bg-[var(--bg-warm)] py-4 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 px-4 shrink-0">
              {["React", "Next.js", "Astro", "Laravel", "TypeScript", "PostgreSQL", "Redis", "Clean Architecture", "TDD", "Docker", "Tailwind CSS", "Go", "Python", "Figma"].map((skill, i) => (
                <span key={`${setIdx}-${i}`} className="flex items-center gap-3 text-sm text-[var(--text-muted)] whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60" />
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── ABOUT — asymmetric two-column ─── */}
      <section id="about" className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div {...fadeUp}>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-14">
              Who I Am
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12">
            {/* Bio — 60% */}
            <motion.div {...fadeUp} className="md:col-span-7 space-y-5">
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                {PORTFOLIO_DATA.personal.description}
              </p>
            </motion.div>

            {/* Info stack — 40% */}
            <motion.div {...fadeUp} className="md:col-span-5 flex flex-col gap-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-1">Location</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--text-primary)]">{PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
              <div className="h-px bg-[var(--border)]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-1">Role</p>
                <span className="text-sm text-[var(--text-primary)]">Full Stack Software Developer</span>
              </div>
              <div className="h-px bg-[var(--border)]" />
              <a
                href="/Jesus_Corona_CV.pdf"
                download="Jesus_Corona_CV.pdf"
                className="group inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="underline underline-offset-4 decoration-[var(--border)] group-hover:decoration-[var(--accent)]">
                  Download CV (PDF)
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE — editorial magazine spread ─── */}
      <section id="experience" className="border-t border-[var(--border)] bg-[var(--bg-warm)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div {...fadeUp}>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Career
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-14">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-0">
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="exp-row group border-b border-[var(--border)] last:border-b-0"
              >
                <div className="grid md:grid-cols-12 gap-6 py-10 md:py-14">
                  {/* Company — large, left */}
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {exp.company}
                      </h3>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors shrink-0"
                          title={`Visit ${exp.company}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{exp.period}</p>
                  </div>

                  {/* Details — right */}
                  <div className="md:col-span-8 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-[var(--accent)]">{exp.role}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="text-[11px] font-medium text-[var(--text-muted)] border border-[var(--border)] px-2.5 py-1 hover:border-[var(--border-hover)] hover:text-[var(--text-secondary)] transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS — bento grid ─── */}
      <section id="projects" className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div {...fadeUp}>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Featured
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-14">
              Projects
            </h2>
          </motion.div>

          {/* Bento layout */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Featured project — full width */}
            {PORTFOLIO_DATA.projects.filter(p => p.featured).map((proj, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="md:col-span-2 border border-[var(--accent)]/20 bg-[var(--surface)] p-8 md:p-10 group hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {proj.title}
                      </h3>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-[var(--accent)] font-medium">{proj.role} · {proj.period}</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/30 px-2.5 py-1 shrink-0">
                    {proj.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-2xl">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-[11px] font-medium text-[var(--accent)]/70 border border-[var(--accent)]/20 px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Other projects */}
            {PORTFOLIO_DATA.projects.filter(p => !p.featured).map((proj, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                className="border border-[var(--border)] bg-[var(--surface)] p-8 group hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)]">
                        {proj.title}
                      </h3>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">{proj.role} · {proj.period}</p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)] border border-[var(--border)] px-2 py-0.5 shrink-0">
                    {proj.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-[11px] font-medium text-[var(--text-muted)] border border-[var(--border)] px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS — typographic grid ─── */}
      <section id="skills" className="border-t border-[var(--border)] bg-[var(--bg-warm)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div {...fadeUp}>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Toolkit
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-14">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Languages */}
            <motion.div {...fadeUp}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-5">
                Languages
              </p>
              <ul className="space-y-3">
                {PORTFOLIO_DATA.skills.languages.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Frameworks */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-5">
                Frameworks & Libraries
              </p>
              <ul className="space-y-3">
                {PORTFOLIO_DATA.skills.frameworks.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-5">
                Tools & Platforms
              </p>
              <ul className="space-y-3">
                {PORTFOLIO_DATA.skills.tools.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-default"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Languages spoken */}
          <motion.div {...fadeUp} className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-4">
              Languages Spoken
            </p>
            <div className="flex gap-6">
              {PORTFOLIO_DATA.languages_spoken.map((lang, i) => (
                <div key={i}>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{lang.name}</span>
                  <span className="text-xs text-[var(--text-muted)] ml-2">· {lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── EDUCATION & CERTIFICATIONS — split layout ─── */}
      <section id="education" className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <motion.div {...fadeUp}>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
              Background
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-14">
              Education & Certifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education — left */}
            <motion.div {...fadeUp}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-6">
                Education
              </p>
              <div className="space-y-0">
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-b border-[var(--border)] last:border-b-0 py-6"
                  >
                    <p className="text-base font-semibold text-[var(--text-primary)]">{edu.degree}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">{edu.school}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{edu.period}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications — right */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-6">
                Certifications
              </p>
              <div className="space-y-0">
                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-b border-[var(--border)] last:border-b-0 py-6"
                  >
                    <p className="text-base font-semibold text-[var(--text-primary)]">{cert.name}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-1">{cert.issuer}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT — editorial CTA ─── */}
      <section id="contact" className="border-t border-[var(--border)] bg-[var(--bg-warm)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — large heading */}
            <motion.div {...fadeUp}>
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-4">
                Get in Touch
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[0.9]">
                Let's
                <br />
                talk.
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-6 max-w-sm leading-relaxed">
                Open to new projects and opportunities. If you have an idea or need a developer who cares about quality, let's connect.
              </p>
            </motion.div>

            {/* Right — form */}
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.05 }}>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-2">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-[var(--border)] pb-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-2">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-[var(--border)] pb-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)] mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows="4"
                    className="w-full bg-transparent border-b border-[var(--border)] pb-2 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="mt-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black text-sm font-semibold transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : formStatus === 'success' ? (
                    <><CheckCircle className="w-4 h-4" /> Sent!</>
                  ) : formStatus === 'error' ? (
                    <><XCircle className="w-4 h-4" /> Error</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Social links — text row */}
          <motion.div {...fadeUp} className="mt-20 pt-8 border-t border-[var(--border)]">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { label: 'Email', href: `mailto:${PORTFOLIO_DATA.personal.email}` },
                { label: 'LinkedIn', href: PORTFOLIO_DATA.personal.linkedin },
                { label: 'GitHub', href: PORTFOLIO_DATA.personal.github },
                { label: 'Website', href: PORTFOLIO_DATA.personal.website },
                { label: 'Phone', href: `tel:${PORTFOLIO_DATA.personal.phone}` },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER — minimal ─── */}
      <footer className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.fullName}
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with React
          </p>
        </div>
      </footer>
    </div>
  );
}
