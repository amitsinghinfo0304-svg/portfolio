import React, { useState, useEffect, useMemo } from 'react';

// Embedded SVG Icons - 100% self-contained, zero external package conflicts!
const Icons = {
  Github: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Linkedin: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  Mail: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 10.193 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Code: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Sparkles: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  ),
  Terminal: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Briefcase: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Folder: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  ),
  User: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  Cpu: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2m-6-2v2m6 16v2m-6-2v2m7-11h2m-2 6h2M2 9h2m-2 6h2" />
    </svg>
  ),
  Laptop: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.38 20H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  ),
  Download: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Send: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Menu: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  ),
  X: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ChevronRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  ArrowUpRight: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  CheckCircle2: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Copy: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
};

// =========================================================================
// 📝 EDIT YOUR DETAILS HERE EASILY (Aap yahan apni details change kar sakte hain)
// =========================================================================
const PROFILE_DATA = {
  name: "Amit Singh", // <-- Aapka Name
  roleTitle: "Frontend / React.js Developer",
  experienceYears: "1+ Year Real Experience",
  status: "Immediate Joiner / Open to Work",
  // Yahan apna profile picture URL lagayein:
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  location: "Mumbai, Maharashtra, India",
  email: "amitsingh97682@gmail.com",
  phone: "+91 85915 47315",
  bio: "Creative Full-Stack & React Developer with 1 year of hands-on experience building clean, responsive, and performance-driven web applications. Passionate about component architecture, sleek animations, and pixel-perfect design.",
  rolesCycling: [
    "React.js Developer",
    "Frontend Specialist",
    "Tailwind CSS Pro",
    "JavaScript (ES6+) Dev",
    "Clean Code Advocate"
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:amitsingh97682@gmail.com"
  },
  stats: [
    { label: "Experience", value: "1+ Year", sub: "Production & Projects" },
    { label: "Completed Projects", value: "15+", sub: "Web & Mobile UIs" },
    { label: "Git Commits", value: "350+", sub: "Consistent coding" },
    { label: "Client Rating", value: "4.9 / 5", sub: "Fast & Reliable" }
  ]
};

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: Icons.Laptop,
    skills: [
      { name: "React.js", level: 90, badge: "Advanced" },
      { name: "JavaScript (ES6+)", level: 85, badge: "Proficient" },
      { name: "Tailwind CSS", level: 95, badge: "Master" },
      { name: "HTML5 / Modern CSS", level: 94, badge: "Advanced" },
      { name: "Redux & State Mgmt", level: 80, badge: "Intermediate" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: Icons.Cpu,
    skills: [
      { name: "Node.js & Express", level: 78, badge: "Intermediate" },
      { name: "REST API Integration", level: 88, badge: "Advanced" },
      { name: "MongoDB / SQL Basics", level: 75, badge: "Familiar" },
      { name: "Postman API Testing", level: 85, badge: "Proficient" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: Icons.Terminal,
    skills: [
      { name: "Git & GitHub Versioning", level: 90, badge: "Advanced" },
      { name: "Figma to Code Converter", level: 88, badge: "Pixel-Perfect" },
      { name: "VS Code & Chrome DevTools", level: 92, badge: "Advanced" },
      { name: "Vite & Modern Tooling", level: 85, badge: "Proficient" }
    ]
  }
];

const EXPERIENCE_DATA = [
  {
    role: "Junior React / Frontend Developer",
    company: "Itarsia India Limited",
    period: "2025 - Present (1 Year Active)",
    type: "Full-Time",
    location: "Mumbai, India",
    description: "Developing responsive single-page applications, converting client Figma designs into fluid React components, and integrating third-party REST APIs.",
    achievements: [
      "Engineered 12+ scalable React components with reusable Tailwind styling",
      "Integrated authentication and payment flow with API error boundaries",
      "Boosted mobile page performance scores from 65 to 94 on Google Lighthouse"
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Git"]
  },
  {
    role: "Web Development Intern",
    company: "TechNova Solutions",
    period: "2024 - 2025 (6 Months)",
    type: "Internship",
    location: "Mumbai, India",
    description: "Assisted senior engineers in refactoring legacy JavaScript codebases, resolving responsive styling bugs across iOS/Android browsers, and managing Git pull requests.",
    achievements: [
      "Refactored repetitive CSS into modular utilities",
      "Collaborated in sprint planning and daily standup agile workflows",
      "Created dynamic landing pages with modern CSS animations"
    ],
    tech: ["HTML/CSS", "JavaScript", "Bootstrap", "Git", "Figma"]
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "OmniCart - E-Commerce Platform",
    category: "Full Stack",
    tagline: "High-speed shopping application featuring dynamic cart, price filters & checkout simulation.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "REST API"],
    liveUrl: "https://example.com/demo-ecom",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "TaskGrid - Collaborative Kanban Board",
    category: "Frontend",
    tagline: "Intuitive productivity SaaS dashboard with drag-and-drop lists, search and status badges.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Tailwind CSS", "Local Storage", "Lucide Design"],
    liveUrl: "https://example.com/demo-tasks",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "PromptSphere - AI Content Studio",
    category: "Full Stack",
    tagline: "Conversational AI playground with real-time streaming output and custom prompt libraries.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Express"],
    liveUrl: "https://example.com/demo-ai",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "PulseFit - Fitness App UI",
    category: "Mobile/UI",
    tagline: "Mobile-first workout tracker with daily calorie charts, streak counts, and native app aesthetics.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Mobile Tailwind", "Interactive SVGs"],
    liveUrl: "https://example.com/demo-fitness",
    githubUrl: "https://github.com",
    featured: false
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const currentFullRole = PROFILE_DATA.rolesCycling[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        if (displayedText === currentFullRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.rolesCycling.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.message.trim()) errors.message = 'Please provide a short message';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-10 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/4 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <header className="sticky top-4 z-40 max-w-5xl mx-auto px-4 hidden md:block">
        <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/60 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Icons.Code className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                {PROFILE_DATA.name.split(' ')[0]}
              </span>
              <span className="text-cyan-400 font-semibold">.dev</span>
            </div>
          </div>

          <nav className="flex items-center gap-1 text-sm font-medium">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: '1Yr Exp' },
              { id: 'contact', label: 'Contact' },
              
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 relative ${
                  activeSection === link.id
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 rounded-full -z-10 shadow-sm" />
                )}
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-full shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <span>Hire Me</span>
            <Icons.Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      <header className="sticky top-0 z-40 md:hidden bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
            <Icons.Code className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-tight text-slate-100">{PROFILE_DATA.name}</span>
        </div>

        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 active:scale-90 transition-transform"
          aria-label="Open App Menu"
        >
          <Icons.Menu className="w-5 h-5" />
        </button>
      </header>

      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          onClick={() => setMobileDrawerOpen(false)}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        <div 
          className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
            mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img 
                  src={PROFILE_DATA.avatarUrl} 
                  alt={PROFILE_DATA.name} 
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-cyan-500/50" 
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{PROFILE_DATA.name}</h4>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Available to work
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 space-y-1.5">
              {[
                { id: 'home', label: 'Home', icon: Icons.User },
                { id: 'about', label: 'About Experience', icon: Icons.Sparkles },
                { id: 'skills', label: 'Skills & Stack', icon: Icons.Cpu },
                { id: 'projects', label: 'Featured Projects', icon: Icons.Folder },
                { id: 'experience', label: '1 Year Timeline', icon: Icons.Briefcase },
                { id: 'contact', label: 'Contact & Hire', icon: Icons.Mail }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 border border-cyan-500/30' 
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    <Icons.ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold rounded-xl text-center text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <Icons.Mail className="w-4 h-4" />
              <span>Get in Touch Now</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2.5">
              {PROFILE_DATA.location}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-28 md:pb-20 space-y-28">

        <section id="home" className="pt-6 md:pt-16 pb-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-semibold text-emerald-400 shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PROFILE_DATA.status}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  {PROFILE_DATA.name}
                </span>
              </h1>

              {/* Dynamic Typed Role */}
              <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start gap-2 text-xl sm:text-2xl font-mono text-cyan-400">
                <Icons.Terminal className="w-6 h-6 text-indigo-400" />
                <span className="font-semibold">{displayedText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
              </div>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              {PROFILE_DATA.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Projects</span>
                <Icons.ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 hover:border-slate-600 transition-all"
              >
                <span>Contact Me</span>
                <Icons.Mail className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={() => alert("Resume: Replace with your Google Drive or hosted resume link!")}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                title="Download CV"
              >
                <Icons.Download className="w-4 h-4" />
              </button>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-3 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-bold">Connect:</span>
              <a 
                href={PROFILE_DATA.socials.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <Icons.Github className="w-4 h-4" />
              </a>
              <a 
                href={PROFILE_DATA.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Icons.Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={PROFILE_DATA.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:text-sky-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="Twitter Profile"
              >
                <Icons.Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Profile Card with Futuristic Glow */}
          <div className="flex-1 max-w-sm sm:max-w-md w-full flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              <div className="relative rounded-3xl bg-slate-900 border border-slate-700/80 p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{PROFILE_DATA.roleTitle}</p>
                      <p className="text-[11px] text-cyan-400">{PROFILE_DATA.experienceYears}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icons.Laptop className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">About Me</span>
            <h2 className="text-3xl font-bold text-white">1 Year of Passionate Development</h2>
            <p className="text-slate-400 text-sm">
              Dedicated to crafting elegant frontend solutions, modern UI architectures, and clean maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROFILE_DATA.stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-blue-300">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">Skills & Tech</span>
            <h2 className="text-3xl font-bold text-white">Technical Proficiency</h2>
            <p className="text-slate-400 text-sm">
              Hands-on toolkit applied actively across professional tasks and personal builds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_DATA.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-white">{group.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {group.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md">
                            {skill.badge}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">Portfolio Work</span>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <p className="text-slate-400 text-sm mt-1">
                Filterable showcase of applications built with clean code and dynamic state.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['All', 'Full Stack', 'Frontend', 'Mobile/UI'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900/60 rounded-3xl border border-slate-800/80 overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[11px] font-semibold text-cyan-300 px-2.5 py-1 rounded-lg">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-[11px] font-bold text-slate-950 px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <Icons.Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-[11px] font-mono border border-slate-700/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      <span>Live Demo</span>
                      <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <Icons.Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">Work History</span>
            <h2 className="text-3xl font-bold text-white">1 Year Experience</h2>
            <p className="text-slate-400 text-sm">
              Progression timeline demonstrating hands-on front-end and web engineering contributions.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 md:ml-28 space-y-10 pl-6 md:pl-8">
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-400/30" />

                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">{exp.company} | <span className="text-slate-500">{exp.location}</span></p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-mono rounded-full self-start sm:self-auto border border-slate-700">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((item, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <Icons.CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] px-2 py-0.5 bg-slate-800/70 text-slate-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">Let's Connect</span>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 text-sm">
              Ready for immediate hiring or contract opportunities. Feel free to reach out directly!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5">
                <h3 className="text-base font-bold text-white">Contact Info</h3>

                <div 
                  onClick={handleCopyEmail}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Icons.Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400">Email Address</p>
                      <p className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {PROFILE_DATA.email}
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-white p-1.5" title="Copy email">
                    {copiedEmail ? <Icons.Check className="w-4 h-4 text-emerald-400" /> : <Icons.Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Icons.Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Phone / WhatsApp</p>
                    <p className="text-xs font-semibold text-slate-200">{PROFILE_DATA.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Icons.MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Location</p>
                    <p className="text-xs font-semibold text-slate-200">{PROFILE_DATA.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Icons.Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Availability: Immediate</h4>
                  <p className="text-xs text-slate-400">Can join your engineering team with 0 delay.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-950 border ${formErrors.name ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors`}
                    />
                    {formErrors.name && <p className="text-[11px] text-rose-400">{formErrors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full bg-slate-950 border ${formErrors.email ? 'border-rose-500' : 'border-slate-800'} rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors`}
                    />
                    {formErrors.email && <p className="text-[11px] text-rose-400">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Write your message here..."
                    className={`w-full bg-slate-950 border ${formErrors.message ? 'border-rose-500' : 'border-slate-800'} rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none`}
                  />
                  {formErrors.message && <p className="text-[11px] text-rose-400">{formErrors.message}</p>}
                </div>

                {submitSuccess && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <Icons.CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message sent successfully! I'll get back to you shortly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Icons.Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/90 px-3 py-2 flex items-center justify-around shadow-2xl">
        {[
          { id: 'home', label: 'Home', icon: Icons.User },
          { id: 'skills', label: 'Skills', icon: Icons.Cpu },
          { id: 'projects', label: 'Projects', icon: Icons.Folder },
          { id: 'experience', label: '1Yr Exp', icon: Icons.Briefcase },
          { id: 'contact', label: 'Hire', icon: Icons.Mail }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive ? 'text-cyan-400 scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-normal'}`}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed & Built with React and Tailwind CSS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}