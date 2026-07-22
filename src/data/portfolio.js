export const profile = {
  name: "Jesús Corona Orozco",
  firstName: "Jesús",
  lastName: "Corona",
  title: "Full Stack Software Developer",
  subtitle: "Multiplatform Software Development",
  email: "yisuskroom@gmail.com",
  phone: "8711055582",
  phoneDisplay: "+52 871 105 5582",
  location: "Torreón, Coahuila, México",
  locationShort: "Torreón, MX",
  linkedin: "https://www.linkedin.com/in/jesus-corona-9037a6303/",
  github: "https://github.com/yixxus18",
  website: "https://jesus-corona-cv.vercel.app",
  cv: "/Jesus_Corona_CV.pdf",
  timezone: "America/Monterrey",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const marqueeSkills = [
  "React",
  "Next.js",
  "Astro",
  "Laravel",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Tailwind CSS",
  "Docker",
  "Redux Toolkit",
  "Clean Architecture",
  "TDD",
  "REST APIs",
];

export const experience = [
  {
    company: "ABASA",
    role: "Full Stack Developer Intern",
    period: "Jan 2026 — Apr 2026",
    link: "https://catalog.abasa.app/",
    displayLink: "catalog.abasa.app",
    description:
      "Developed frontend and backend features for an enterprise ERP platform across Human Resources, Purchasing, and Inventory modules.",
    achievements: [
      "Built and improved full-stack features using Astro with React, PostgreSQL, Redis, and REST APIs.",
      "Implemented real-time notifications and business workflow automations to streamline ERP operations.",
      "Collaborated cross-functionally to improve usability, performance, and scalability across core business processes.",
    ],
    tech: ["Astro", "React", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    company: "MR Asesores",
    role: "Freelance Full Stack Developer",
    period: "Oct 2025 — May 2026",
    link: "https://mr-asesores.vercel.app/",
    displayLink: "mr-asesores.vercel.app",
    description:
      "Developed a web platform and management system using modern full-stack technologies.",
    achievements: [
      "Built web platform and management system using React, Next.js, and Tailwind CSS.",
      "Applied Clean Architecture and Test-Driven Development principles to deliver maintainable, production-ready features.",
      "Migrated internal workflows and documentation from Google Docs to an external database system, improving data structure and accessibility.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Clean Architecture", "TDD"],
  },
  {
    company: "Telco Networks",
    role: "Web Developer Intern",
    period: "Oct 2024 — Jan 2025",
    link: "https://telco-networks.mx/",
    displayLink: "telco-networks.mx",
    description:
      "Led development and maintenance of interactive corporate websites.",
    achievements: [
      "Led development and maintenance of interactive corporate websites using Astro and Laravel.",
      "Implemented Stripe payment integration and optimized site performance and load times.",
      "Partnered with design and development teams to maintain visual quality, usability, and consistency.",
    ],
    tech: ["Astro", "Laravel", "Stripe", "Web Development"],
  },
];

export const featuredProject = {
  title: "Clean React",
  role: "Open Source Boilerplate",
  period: "2025",
  link: "https://github.com/yixxus18/clean-react",
  displayLink: "github.com/yixxus18/clean-react",
  badge: "Open Source",
  description:
    "Production-ready React 19 + TypeScript boilerplate built on Clean Architecture principles. Features adapter pattern, centralized HTTP client, lazy loading, auth system, Redux Toolkit, and styled-components. Designed for teams that want separation of concerns and testable layers.",
  tech: ["React 19", "TypeScript", "Clean Architecture", "Redux Toolkit", "Vite", "styled-components"],
};

export const secondaryProjects = [
  {
    title: "Neuro Cash",
    role: "HackMTY Participant",
    period: "Hackathon Monterrey",
    link: "https://devpost.com/software/neuro-cash",
    displayLink: "devpost.com/software/neuro-cash",
    badge: "Hackathon",
    description:
      "Built and demonstrated a Multi-Agent Protocol solution during a competitive hackathon organized by Tecnológico de Monterrey. Innovation in fintech and AI-driven systems.",
    tech: ["MCP", "Multi-Agent Protocol", "React", "Fintech"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP", "C#", "Java", "Go"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React / Next.js", "Astro", "Laravel", "Tailwind CSS", "Vue.js", "Angular"],
  },
  {
    title: "Tools & Platforms",
    skills: ["PostgreSQL", "Redis", "Git / GitHub", "Docker", "Linux", "VS Code", "Figma", "AI-assisted dev"],
  },
];

export const spokenLanguages = [
  { name: "Spanish", level: "Native", pct: 100 },
  { name: "English", level: "B2 — Professional Working", pct: 76 },
];

export const education = [
  {
    title: "Engineering in Software Development and Management",
    institution: "Universidad Tecnológica de Torreón",
    period: "2024 — 2026",
  },
  {
    title: "TSU in Information Technologies",
    institution: "Universidad Tecnológica de Torreón",
    period: "2022 — 2024",
  },
];

export const certifications = [
  {
    title: "HackMTY — Certificate of Participation",
    issuer: "Tecnológico de Monterrey",
    period: "Oct 2025",
  },
  {
    title: "CCNA v7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    period: "Certified",
  },
];

export const stats = [
  { value: 3, pad: 2, suffix: "", label: "Companies & clients" },
  { value: 20, pad: 2, suffix: "+", label: "Technologies shipped" },
  { value: 1, pad: 2, suffix: "", label: "HackMTY recognition" },
  { value: 2, pad: 2, suffix: "", label: "University degrees" },
];
