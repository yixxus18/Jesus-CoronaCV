import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Smartphone, 
  Code, 
  Database, 
  Terminal, 
  Layers, 
  ExternalLink, 
  Download, 
  Globe, 
  Cpu, 
  Send, 
  GraduationCap, 
  Trophy,
  Gamepad2,
  Container,
  GitBranch,
  Monitor,
  Server,
  Atom,
  PenTool,
  TerminalSquare,
  AppWindow,
  FileCode,
  Rocket,
  Palette,
  Coffee,
  Code2,
  Hash,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';

// --- DATOS DEL PORTAFOLIO ACTUALIZADOS ---
const PORTFOLIO_DATA = {
  personal: {
    name: "Jesús Corona Orozco",
    title: "Desarrollador Software Multiplataforma",
    email: "yisuskroom@gmail.com",
    phone: "8711055582",
    location: "Torreón, Coahuila",
    linkedin: "https://www.linkedin.com/in/jesus-corona-9037a6303/",
    github: "https://github.com/yixxus18",
    description: "Profesional proactivo con sólida base en desarrollo multiplataforma. Apasionado por crear soluciones de impacto usando tecnologías modernas como Astro, Laravel, React y Swift."
  },
  experience: [
    {
      company: "Telco Networks",
      role: "Desarrollador Web (Estadías)",
      period: "Oct 2024 - Presente",
      description: "Desarrollo y mantenimiento de sitios web interactivos.",
      achievements: [
        "Implementación y configuración de pasarela de pagos Stripe.",
        "Construcción y optimización de plataformas usando Astro y Laravel.",
        "Colaboración en el ciclo completo de desarrollo web.",
        "Mejora de la presencia digital y funcionalidad de la empresa."
      ]
    }
  ],
  projects: [
    {
      title: "MR Asesores",
      role: "Freelance - Full Stack",
      period: "Post-Estadías - Presente",
      description: "Plataforma web y sistema de gestión integral para firma de consultoría. Solución moderna desplegada en Vercel para optimizar la presencia digital y procesos internos.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      link: "https://mr-asesores-fucw1hsb8-jesus-projects-d3a1bb1e.vercel.app/",
      type: "Web & Sistema"
    },
    {
      title: "Neuro Cash",
      role: "HackMTY Participant",
      period: "Hackathon Monterrey",
      description: "Solución financiera innovadora desarrollada bajo presión en el hackathon más grande de México. Enfoque en accesibilidad y tecnología financiera emergente.",
      tech: ["Hackathon", "Fintech", "Prototipado Rápido", "React"],
      link: "https://devpost.com/software/neuro-cash",
      type: "Hackathon Project"
    }
  ],
  education: [
    {
      school: "Universidad Tecnológica de Torreón",
      degree: "TSU en Tecnologías de la Información",
      specialty: "Desarrollo de Software Multiplataforma",
      period: "2022 - 2024",
      icon: GraduationCap
    },
    {
      school: "Cisco Networking Academy",
      degree: "Certificación CCNAV7",
      specialty: "Introducción a Redes y Comunicaciones",
      period: "Certificado",
      icon: Trophy
    }
  ],
  skills: {
    languages: [
      { name: "JavaScript / TypeScript", level: 90, icon: FileCode },
      { name: "PHP", level: 85, icon: Server },
      { name: "Python", level: 80, icon: Terminal },
      { name: "C#", level: 75, icon: Hash },
      { name: "Swift", level: 70, icon: Smartphone },
      { name: "Java", level: 70, icon: Coffee }
    ],
    frameworks: [
      { name: "React / Next.js", level: 90, icon: Atom },
      { name: "Laravel", level: 85, icon: Layers },
      { name: "Astro", level: 85, icon: Rocket },
      { name: "Unity (Game Dev)", level: 65, icon: Gamepad2 },
      { name: "Tailwind CSS", level: 95, icon: Palette }
    ],
    tools: [
      { name: "Git", level: 90, icon: GitBranch },
      { name: "GitHub", level: 90, icon: Github },
      { name: "VS Code", level: 95, icon: Code2 },
      { name: "Visual Studio", level: 80, icon: Monitor },
      { name: "Xcode", level: 75, icon: AppWindow },
      { name: "Linux", level: 70, icon: TerminalSquare },
      { name: "Docker", level: 65, icon: Container },
      { name: "Figma", level: 85, icon: PenTool }
    ]
  }
};

// --- COMPONENTES VISUALES ---

const StarBackground = () => {
  const [stars] = useState(() => {
    if (typeof window === 'undefined') return [];
    return [...Array(50)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 0.5 + 0.5,
      yOffset: Math.random() * -100,
      duration: Math.random() * 10 + 10,
      size: Math.random() * 3 + 1
    }));
  });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-70"
          initial={{
            x: star.x,
            y: star.y,
            scale: star.scale,
          }}
          animate={{
            y: [null, star.yOffset],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
          }}
        />
      ))}
    </div>
  );
};

const TechCore = () => {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] opacity-30 md:opacity-60 pointer-events-none z-0 hidden md:block">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full text-cyan-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" stroke="url(#grad1)" strokeWidth="1" fill="none" strokeDasharray="10 10" />
        <circle cx="100" cy="100" r="70" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
        <motion.path
          d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
          fill="none"
          stroke="#06b6d4"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
};

// --- COMPONENTES UI ---

const Section = ({ children, id, title, icon: Icon }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="min-h-screen w-full flex flex-col justify-center items-center p-6 relative z-10 py-20"
  >
    <div className="max-w-5xl w-full bg-slate-900/40 backdrop-blur-md border border-slate-700/30 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="flex items-center gap-4 mb-10 border-b border-slate-800 pb-4 relative z-10">
        <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700">
          {Icon && <Icon className="text-cyan-400 w-6 h-6" />}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  </motion.section>
);

const SkillBar = ({ name, level, icon: Icon }) => (
  <div className="mb-6 group">
    <div className="flex justify-between mb-2">
      <span className="text-slate-300 font-medium flex items-center gap-2">
        <div className="p-1.5 bg-cyan-900/30 rounded-lg text-cyan-400 group-hover:text-white group-hover:bg-cyan-600 transition-colors">
          {Icon ? <Icon className="w-4 h-4" /> : <div className="w-4 h-4 bg-cyan-500 rounded-full" />}
        </div>
        {name}
      </span>
      <span className="text-cyan-400 font-bold text-sm">{level}%</span>
    </div>
    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 relative"
      >
        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] translate-x-[-100%]" />
      </motion.div>
    </div>
  </div>
);

const ProjectCard = ({ title, role, description, tech, items, link, type }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/40 transition-all group relative overflow-hidden flex flex-col h-full"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <span className="inline-block px-3 py-1 bg-cyan-950/50 text-cyan-300 text-xs font-bold rounded-full border border-cyan-900">
          {role}
        </span>
      </div>
      {type && (
         <span className="text-xs font-mono text-slate-500 uppercase tracking-wider border border-slate-700 px-2 py-1 rounded">
           {type}
         </span>
      )}
    </div>
    
    <p className="text-slate-300 mb-6 leading-relaxed text-sm flex-grow">{description}</p>
    
    {items && (
      <div className="mb-6 space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
            <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-slate-600" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    )}

    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-mono text-cyan-200 bg-cyan-900/20 px-3 py-1.5 rounded border border-cyan-900/30">{t}</span>
      ))}
    </div>
  </motion.div>
);

const EducationCard = ({ school, degree, specialty, period, icon: Icon }) => (
  <div className="flex gap-6 items-start p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
    <div className="p-4 bg-slate-900 rounded-xl border border-slate-700 text-cyan-500">
      <Icon className="w-8 h-8" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white">{school}</h3>
      <p className="text-cyan-400 font-medium text-sm mb-1">{period}</p>
      <p className="text-slate-300 font-semibold">{degree}</p>
      <p className="text-slate-400 text-sm mt-1">{specialty}</p>
    </div>
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [formStatus, setFormStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "4fd65563-d1b0-4b35-9d5c-ae0548d24f86");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-[60] origin-left shadow-[0_0_10px_rgba(6,182,212,0.5)]"
        style={{ scaleX }}
      />

      <StarBackground />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#020617]/80 backdrop-blur-lg border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 overflow-hidden">
               <img src="/logo.svg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="tracking-tight">J<span className="text-cyan-400">C</span>O</span>
          </motion.div>
          
          <div className="hidden md:flex gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800">
            {['Inicio', 'Experiencia', 'Habilidades', 'Educacion', 'Contacto'].map((item) => {
              const id = item === 'Inicio' ? 'home' : item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="px-5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all capitalize"
                >
                  {item}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center gap-3">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(0,119,181,0.3)]"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden lg:inline">LinkedIn</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-slate-100 hover:bg-white text-slate-900 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 relative overflow-hidden">
        <TechCore />
        <div className="max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-950/30 backdrop-blur-sm text-cyan-300 text-sm font-medium"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Disponible para proyectos
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Hola, soy <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              {PORTFOLIO_DATA.personal.name.split(' ')[0]}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            {PORTFOLIO_DATA.personal.title}. <br className="hidden md:block"/>
            Transformando ideas complejas en <span className="text-white font-medium border-b border-cyan-500">experiencias digitales</span> fluidas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contáctame
            </button>
            <a 
               href={PORTFOLIO_DATA.personal.linkedin}
               target="_blank" 
               rel="noopener noreferrer"
               className="px-8 py-4 bg-[#0077b5] text-white border border-[#005e93] hover:bg-[#006396] rounded-xl font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <Section id="sobre-mi" title="Sobre Mí" icon={Terminal}>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Soy un estudiante dedicado de la <span className="text-white font-semibold">Universidad Tecnológica de Torreón</span>, enfocado en la excelencia técnica y la innovación.
            </p>
            <p>
              Mi pasión radica en el <span className="text-cyan-400">Desarrollo Multiplataforma</span>. No solo escribo código; construyo soluciones que resuelven problemas reales. Soy comunicativo, organizado y siempre busco oportunidades para aprender y aportar valor a equipos dinámicos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-500" />
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Ubicación</p>
                  <p className="text-white">{PORTFOLIO_DATA.personal.location}</p>
                </div>
              </div>
              <a href="/jesus%20corona%20cv.pdf" download="Jesus_Corona_CV.pdf" className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 flex items-center gap-3 hover:bg-slate-800 transition-colors cursor-pointer group">
                <Download className="w-5 h-5 text-purple-500 group-hover:text-purple-400" />
                <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">CV Digital</p>
                   <p className="text-white group-hover:text-cyan-400 transition-colors">Descargar PDF</p>
                </div>
              </a>
            </div>
          </div>
          <div className="md:col-span-4 flex justify-center">
             <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                <div className="relative bg-slate-800 border border-slate-700 p-8 rounded-2xl text-center w-full max-w-[250px]">
                  <Cpu className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-1">Full Stack</h3>
                  <p className="text-sm text-slate-400">Frontend & Backend</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE & PROJECTS SECTION */}
      <Section id="experiencia" title="Trayectoria & Proyectos" icon={Layers}>
        <div className="space-y-12">
          
          {/* Experiencia Laboral */}
          <div>
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
                Experiencia Laboral
             </h3>
             <div className="space-y-6">
                {PORTFOLIO_DATA.experience.map((exp, index) => (
                  <ProjectCard 
                    key={index}
                    title={exp.company}
                    role={`${exp.role} | ${exp.period}`}
                    description={exp.description}
                    items={exp.achievements}
                    tech={['Astro', 'Laravel', 'Stripe', 'Web Development']}
                  />
                ))}
             </div>
          </div>

          {/* Proyectos Destacados */}
          <div>
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                Proyectos Destacados
             </h3>
             <div className="grid md:grid-cols-2 gap-6">
                {PORTFOLIO_DATA.projects.map((proj, index) => (
                  <ProjectCard 
                    key={index}
                    title={proj.title}
                    role={proj.role}
                    type={proj.type}
                    description={proj.description}
                    items={null}
                    tech={proj.tech}
                    link={proj.link}
                  />
                ))}
             </div>
          </div>
          
        </div>
      </Section>

      {/* SKILLS SECTION (PERCENTAGES & ICONS) */}
      <Section id="habilidades" title="Arsenal Tecnológico" icon={Database}>
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Columna 1: Lenguajes */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Code className="w-4 h-4" /> Lenguajes de Programación
            </h3>
            {PORTFOLIO_DATA.skills.languages.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>

          {/* Columna 2: Frameworks & Herramientas */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Frameworks & Game Dev
            </h3>
            {PORTFOLIO_DATA.skills.frameworks.map(skill => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
            
            <div className="mt-8">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                 <Cpu className="w-4 h-4" /> Herramientas & DevOps
               </h3>
               {PORTFOLIO_DATA.skills.tools.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                ))}
            </div>
          </div>

        </div>
      </Section>

      {/* EDUCATION SECTION */}
      <Section id="educacion" title="Formación Académica" icon={GraduationCap}>
         <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu, index) => (
               <EducationCard 
                  key={index} 
                  {...edu}
               />
            ))}
         </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contacto" title="Contáctame" icon={Mail}>
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Información de Contacto */}
          <div className="space-y-6">
             <p className="text-slate-300 text-lg leading-relaxed mb-8">
               Estoy disponible para nuevos proyectos y oportunidades laborales. Si tienes una idea innovadora o necesitas un desarrollador comprometido, ¡hablemos!
             </p>
             
             <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700 flex items-center gap-4">
                <div className="p-3 bg-cyan-900/20 rounded-full text-cyan-400">
                   <Mail className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">Correo Electrónico</p>
                   <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-white hover:text-cyan-400 transition-colors text-lg font-medium">{PORTFOLIO_DATA.personal.email}</a>
                </div>
             </div>

             <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700 flex items-center gap-4">
                <div className="p-3 bg-blue-900/20 rounded-full text-blue-400">
                   <Linkedin className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">LinkedIn</p>
                   <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-lg font-medium">Perfil Profesional</a>
                </div>
             </div>

             <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700 flex items-center gap-4">
                <div className="p-3 bg-green-900/20 rounded-full text-green-400">
                   <Smartphone className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase font-bold">Teléfono</p>
                   <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-white hover:text-green-400 transition-colors text-lg font-medium">{PORTFOLIO_DATA.personal.phone}</a>
                </div>
             </div>
          </div>

          {/* Formulario de Contacto */}
          <form className="space-y-4 p-8 bg-slate-900/50 rounded-3xl border border-slate-700/50 shadow-xl relative overflow-hidden" onSubmit={handleSubmit}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
             
             <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Nombre Completo</label>
                <input required name="name" type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Tu nombre" />
             </div>
             
             <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Correo Electrónico</label>
                <input required name="email" type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="ejemplo@correo.com" />
             </div>
             
             <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">Mensaje</label>
                <textarea required name="message" rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
             </div>

             <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
             >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Enviado con éxito!
                  </>
                ) : formStatus === 'error' ? (
                  <>
                    <XCircle className="w-5 h-5" />
                    Error al enviar
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </>
                )}
             </button>
          </form>

        </div>

        <div className="mt-20 text-center border-t border-slate-800/50 pt-10 w-full">
           <p className="text-slate-600 text-sm">
             © {new Date().getFullYear()} Jesús Corona Orozco. Construido con React & Framer Motion.
           </p>
        </div>
      </Section>
      
      <div className="h-20"></div>
    </div>
  );
}
