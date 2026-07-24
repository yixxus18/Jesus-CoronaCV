# Jesús Corona — Portfolio & CV

> Full Stack Developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. A single-page application showcasing experience, projects, skills, and education with smooth animations and a dark/light theme system.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Live Demo

**[jesus-corona-cv.vercel.app](https://jesus-corona-cv.vercel.app)**

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture Decisions](#architecture-decisions)
- [Performance](#performance)
- [License](#license)

---

## About

This is my personal portfolio and CV website — a single-page application designed to present my professional profile as a Full Stack Developer. The site is built with a modern React stack and features a clean, editorial design with smooth animations, 3D decorative elements, and a responsive layout that works across all devices.

**Key sections:**
- **Hero** — Introduction with animated text reveal and 3D decorative elements
- **About** — Personal summary and career highlights
- **Experience** — Professional timeline with company details and achievements
- **Projects** — Featured and secondary projects with live links
- **Skills** — Technical toolkit organized by category with proficiency indicators
- **Education** — Academic background and certifications
- **Contact** — Contact form and social links

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19.2.0 | UI library — component-based architecture |
| **Vite** | 7.2.4 | Build tool — fast HMR and optimized production builds |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **Framer Motion** | 12.23.24 | Animation library — declarative transitions and gestures |

### Supporting Libraries

| Library | Purpose |
|---|---|
| **Lucide React** | SVG icon library — lightweight, tree-shakeable icons |
| **clsx** | Conditional className utility — merge classes cleanly |
| **tailwind-merge** | Tailwind class deduplication — resolve conflicting utilities |

### Dev Tools

| Tool | Purpose |
|---|---|
| **ESLint** | Code linting — consistent code quality |
| **PostCSS** | CSS processing — Tailwind CSS integration |
| **Autoprefixer** | CSS vendor prefixes — cross-browser compatibility |

---

## Features

### Dark / Light Theme

- System-level theme preference detection via `localStorage`
- Animated toggle button with icon rotation transition
- CSS custom properties for seamless theme switching
- Flash-of-unstyled-content (FOUC) prevention via inline script in `<head>`

### Animations & Interactions

- **Preloader** — Full-screen loading animation with AnimatePresence
- **Scroll-triggered reveals** — Sections and list items animate in on viewport entry
- **Text reveal** — Hero title lines slide up with staggered timing
- **Mouse parallax** — 3D decorative elements (cube, rings, crosshair) respond to cursor position
- **Custom cursor** — Animated cursor dot that follows mouse movement (desktop only, respects `pointer: fine`)
- **Magnetic buttons** — CTA buttons subtly attract toward the cursor on hover
- **Marquee** — Infinite horizontal scroll of technologies/skills
- **Scroll progress** — Visual indicator at the top of the viewport
- **Pulse ring** — Animated ring effect on primary CTA buttons
- **Noise overlay** — Subtle SVG noise texture for depth

### 3D Decorative Elements

- **Rotating cube** — Pure CSS 3D cube with inner cube rotating in reverse
- **Orbital rings** — Three nested rings rotating on different axes
- **Crosshair** — Decorative crosshair element with dot grid

### Responsive Design

- Mobile-first approach with Tailwind responsive utilities
- Collapsible mobile navigation with clip-path animation
- Adaptive grid layouts for all sections
- Reduced motion support via `prefers-reduced-motion` media query

### SEO & Accessibility

- Semantic HTML structure with proper heading hierarchy
- Meta tags for description, theme color, and viewport
- ARIA labels on interactive elements
- `aria-hidden` on decorative elements
- Keyboard-navigable interface

---

## Project Structure

```
Jesus-CoronaCV/
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── logo.svg                 # Brand logo
│   ├── Jesus_Corona_CV.pdf      # Downloadable CV (English)
│   └── jesus corona cv.pdf      # Downloadable CV (Spanish)
│
├── src/
│   ├── components/
│   │   ├── ui.jsx               # Shared UI components (Reveal, Magnetic, SectionHeading, EASE)
│   │   ├── Decor.jsx            # 3D decorative elements (Cube, Rings, Crosshair, Particles)
│   │   ├── BrandIcons.jsx       # Custom SVG icons (GitHub, LinkedIn)
│   │   ├── Nav.jsx              # Navigation bar with theme toggle
│   │   ├── Hero.jsx             # Hero section with parallax
│   │   ├── Marquee.jsx          # Infinite scrolling skills marquee
│   │   ├── About.jsx            # About section
│   │   ├── Experience.jsx       # Professional experience timeline
│   │   ├── Projects.jsx         # Featured and secondary projects
│   │   ├── Skills.jsx           # Technical skills grid
│   │   ├── Education.jsx        # Education and certifications
│   │   ├── Contact.jsx          # Contact form and info
│   │   ├── Footer.jsx           # Footer with social links
│   │   ├── Cursor.jsx           # Custom animated cursor
│   │   ├── ScrollProgress.jsx   # Scroll progress indicator
│   │   └── Preloader.jsx        # Loading screen animation
│   │
│   ├── data/
│   │   └── portfolio.js         # All portfolio data (profile, experience, projects, skills)
│   │
│   ├── hooks/
│   │   └── useTheme.js          # Theme state management hook
│   │
│   ├── utils/
│   │   └── cn.js                # clsx + tailwind-merge utility
│   │
│   ├── App.jsx                  # Root component — layout and section composition
│   ├── main.jsx                 # Entry point — React root mount
│   └── index.css                # Global styles, theme tokens, animations, 3D effects
│
├── index.html                   # HTML entry point with theme init script
├── vite.config.js               # Vite configuration with React plugin
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
└── package-lock.json            # Locked dependency versions
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **yarn** 1.22+

### Installation

```bash
# Clone the repository
git clone https://github.com/yixxus18/Jesus-CoronaCV.git

# Navigate to the project
cd Jesus-CoronaCV

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement.

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

Output is generated in the `dist/` directory, ready for deployment.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the project |

---

## Architecture Decisions

### Why This Stack

- **React 19** — Latest stable release with improved rendering and concurrent features
- **Vite** — Blazing fast development experience with native ESM, instant HMR, and optimized Rollup-based builds
- **Tailwind CSS** — Utility-first approach eliminates custom CSS bloat while maintaining design consistency
- **Framer Motion** — Declarative animation API that integrates seamlessly with React's component model

### Data-Driven Content

All portfolio content (profile info, experience, projects, skills, education) is centralized in `src/data/portfolio.js`. This makes it trivial to update content without touching component logic — ideal for a personal portfolio that evolves over time.

### CSS Custom Properties for Theming

Instead of Tailwind's `dark:` variant, the project uses CSS custom properties (`--bg`, `--text-primary`, `--accent`, etc.) defined in `index.css`. This approach:

- Enables theme switching via a single `data-theme` attribute on `<html>`
- Allows the theme script in `<head>` to prevent FOUC
- Keeps theme tokens centralized and easy to customize

### Component Composition Pattern

Components follow a consistent pattern:
1. Import data from `portfolio.js`
2. Use `Reveal` wrapper for scroll-triggered animations
3. Apply Tailwind utility classes for styling
4. Use Framer Motion for interactive animations

### Reduced Motion Support

All animations respect the `prefers-reduced-motion: reduce` media query, ensuring accessibility for users who prefer minimal motion. CSS animations are disabled via `animation: none !important` when this preference is active.

---

## Performance

- **Tree-shaking** — Lucide icons and Framer Motion components are tree-shaken by Vite
- **CSS purging** — Tailwind removes unused utility classes in production
- **Image optimization** — SVG-only assets (no heavy raster images)
- **Lazy font loading** — Google Fonts loaded with `display=swap` and `preconnect`
- **Minimal dependencies** — Only 6 runtime dependencies

---

## Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

To deploy your own instance:

1. Fork this repository
2. Connect to Vercel (or your preferred platform)
3. Set the framework preset to **Vite**
4. Deploy

---

## Customization

### Update Content

Edit `src/data/portfolio.js` to change:
- Profile information (name, title, contact, socials)
- Work experience
- Projects
- Skills and languages
- Education and certifications

### Change Theme Colors

Modify the CSS custom properties in `src/index.css`:

```css
:root,
html[data-theme="dark"] {
  --accent: #f59e0b;        /* Primary accent color */
  --accent-hover: #fbbf24;  /* Accent hover state */
  /* ... other tokens */
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `portfolio.js` → `navLinks`

---

## License

MIT License — feel free to use this as a template for your own portfolio.

---

**Built by [Jesús Corona Orozco](https://github.com/yixxus18)**
