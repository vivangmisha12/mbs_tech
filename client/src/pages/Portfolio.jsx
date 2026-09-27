import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ExternalLink,
  X,
  Globe,
  Smartphone,
  ShoppingCart,
  Layers,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cpu,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import EcoIMG from '../assets/screenshots/img_1.png'
import foodImg from '../assets/screenshots/img_2.png'
import portImg from '../assets/screenshots/PORTFOLIO.webp'
import groceryImg from '../assets/screenshots/grocery.png'
import travelImg from '../assets/screenshots/travelapp.jpeg'

const categories = ['All', 'Web Apps', 'Business', 'E-Commerce', 'Mobile Apps']

const projects = [
  {
    id: 1,
    title: 'The Sage Cafe Website',
    category: 'Business',
    badge: 'Live Website',
    desc: 'Modern, aesthetic cafe website featuring interactive digital food & beverage menus, online table reservations, location directions, and customer reviews.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    color: 'from-amber-600 via-amber-700 to-yellow-600',
    icon: Globe,
    logo: 'https://the-sage-cafe.vercel.app/brand_logo_icon.png',
    image: '',
    client: 'The Sage Cafe',
    timeline: '1 Week',
    problem: 'The cafe required an attractive, high-end online presence to showcase their unique ambience, present digital menus with prices, and streamline table reservations without paying high third-party aggregator commissions.',
    solution: 'Designed and deployed a responsive, rapid-loading aesthetic website with interactive category menus, online reservation inquiries, and smooth visual animations.',
    link: 'https://the-sage-cafe.vercel.app/',
  },
  {
    id: 2,
    title: 'Billing Software (Progix)',
    category: 'Web Apps',
    badge: 'Enterprise Engine',
    desc: 'Full-stack enterprise billing and invoicing software featuring automated GST bills, client management, inventory tracking, and sales analytics.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    color: 'from-blue-600 via-indigo-600 to-indigo-700',
    icon: Code2,
    logo: 'https://billing-software-progix.vercel.app/progix_logo.png',
    image: '',
    client: 'Progix Retail Systems',
    timeline: '3 Weeks',
    problem: 'Retail store owners struggled with manual paper invoicing, slow calculation workflows, and untracked inventory levels across multi-counter checkout points.',
    solution: 'Engineered a modern web-based billing platform with instant PDF receipt generation, tax calculations, customer ledgers, and real-time inventory threshold alerts.',
    link: 'https://billing-software-progix.vercel.app/',
  },
  {
    id: 3,
    title: 'Greenwood Academy Portal',
    category: 'Business',
    badge: 'Academic Portal',
    desc: 'Comprehensive school & academy website featuring online admissions, academic curriculum, faculty directory, campus gallery, and student noticeboard.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Responsive UI'],
    color: 'from-emerald-600 via-teal-600 to-teal-700',
    icon: Globe,
    logo: 'https://green-wood-acedmy.vercel.app/assets/school_website_logo-BDZazFXj.png',
    image: '',
    client: 'Greenwood High Academy',
    timeline: '2 Weeks',
    problem: 'The institution needed a centralized, accessible digital portal for parents and prospective students to review campus facilities, faculty credentials, and submit admission forms online.',
    solution: 'Crafted an accessible, vibrant school portal with structured course syllabi, photo galleries, online inquiry forms, and latest news announcements with 98+ mobile speed score.',
    link: 'https://green-wood-acedmy.vercel.app/',
  },
  {
    id: 4,
    title: 'Medisphere Hospital & CRM',
    category: 'Web Apps',
    badge: 'Healthcare CRM',
    desc: 'Integrated digital healthcare platform combining a patient-facing hospital portal with a doctor appointment booking engine and medical CRM system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    color: 'from-cyan-600 via-blue-600 to-blue-700',
    icon: Globe,
    logo: 'https://medisphere-three.vercel.app/applogo.png',
    image: '',
    client: 'Medisphere Health Network',
    timeline: '4 Weeks',
    problem: 'The hospital required a unified digital solution to manage OPD schedules across 12 departments, display doctor qualifications, and let patients book consultations smoothly without phone wait times.',
    solution: 'Delivered an integrated hospital website and patient CRM with department directories, appointment scheduling, doctor profiles, and 24/7 emergency helpline widgets.',
    link: 'https://medisphere-three.vercel.app/',
  },
  {
    id: 5,
    title: 'TourWala Travel Platform',
    category: 'Business',
    badge: 'Travel Booking',
    desc: 'Feature-rich travel and tourism booking website with customized holiday packages, destination itineraries, price quotes, and travel advisory services.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    color: 'from-orange-500 via-amber-600 to-yellow-600',
    icon: Globe,
    logo: 'https://tourwala.vercel.app/assets/logo-DrXGqDA3.png',
    image: '',
    client: 'TourWala Holidays',
    timeline: '2 Weeks',
    problem: 'Travelers wanted an intuitive way to explore tour packages across top domestic and international destinations with detailed day-wise itineraries and direct WhatsApp booking.',
    solution: 'Built an engaging travel booking platform with destination search, transparent pricing packages, user reviews, and 1-click booking inquiries.',
    link: 'https://tourwala.vercel.app/',
  },
  {
    id: 6,
    title: 'CA Corporate Portal',
    category: 'Web Apps',
    badge: 'Financial Portal',
    desc: 'Financial consultancy portal and corporate web application for Chartered Accountants, facilitating tax computation, ITR filing requests, and audit services.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    color: 'from-violet-600 via-purple-600 to-indigo-700',
    icon: Globe,
    logo: 'https://ca-webapp.vercel.app/assets/logo-PLzJibk1.jpg',
    image: '',
    client: 'Sharma & Associates CA',
    timeline: '2 Weeks',
    problem: 'CA practitioners needed a credible digital presence to offer financial advisory services, collect client tax documents securely, and schedule consultations.',
    solution: 'Developed a professional corporate portal with GST/ITR services overview, tax calculators, consultation booking, and secure inquiry workflows.',
    link: 'https://ca-webapp.vercel.app/',
  },
  {
    id: 7,
    title: 'BarkAtWork - Job Portal App',
    category: 'Mobile Apps',
    badge: 'Google Play Store',
    desc: 'Live on Google Play Store — Native Android mobile application connecting job seekers with recruiters, with real-time job alerts, resume upload, and application tracking.',
    tech: ['Android (Kotlin)', 'Java', 'Firebase', 'Play Store'],
    color: 'from-rose-500 via-pink-600 to-purple-600',
    icon: Smartphone,
    logo: 'https://cdn-icons-png.flaticon.com/512/3281/3281329.png',
    image: '',
    client: 'BarkAtWork Careers',
    timeline: '4 Weeks',
    problem: 'Candidates and hiring teams needed an efficient mobile-first job search and hiring app with instant push notifications and fast resume screening.',
    solution: 'Engineered and published a native Android job application on the Google Play Store with category filtering, user profiles, and seamless applicant tracking.',
    link: 'https://play.google.com/store/apps/details?id=com.barkatwork.app',
  },
  {
    id: 8,
    title: 'QuickCart E-Commerce Store',
    category: 'E-Commerce',
    badge: 'Full-Stack Store',
    desc: 'Full-stack online retail platform featuring secure JWT authentication, Cloudinary image hosting, automated checkout, order tracking, and live admin revenue management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Express', 'JWT'],
    color: 'from-blue-500 to-brand-600',
    icon: Globe,
    image: EcoIMG,
    client: 'QuickCart Retail',
    timeline: '3 Weeks',
    problem: 'The client needed a scalable e-commerce solution that could handle secure user authentication, real-time catalog updates, and a modern UI to compete with large online retailers.',
    solution: 'Built a full-stack application with React and Node.js, featuring secure authentication, cloud database integration, real-time updates, and an admin dashboard.',
    link: 'https://quick-carttt.netlify.app/',
  },
  {
    id: 9,
    title: 'BiteDrop Food Ordering',
    category: 'E-Commerce',
    badge: 'Food Delivery',
    desc: 'Modern food ordering and delivery web application with live order tracking, category filtering, cart management, and customer account dashboard.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js', 'JWT Auth'],
    color: 'from-teal-500 to-emerald-600',
    icon: ShoppingCart,
    image: foodImg,
    client: 'BiteDrop Foods',
    timeline: '3 Weeks',
    problem: 'A local food startup needed a web platform to showcase menu items, support custom discount codes, and process customer orders without aggregator commissions.',
    solution: 'Delivered a fast web application with React and Node.js, featuring secure authentication, real-time order tracking, and a custom checkout flow.',
    link: 'https://venerable-zuccutto-8e6cff.netlify.app/',
  },
  {
    id: 10,
    title: 'Modern Creative Studio',
    category: 'Business',
    badge: 'Showcase Site',
    desc: 'Stunning animated portfolio and showcase website for a creative media studio featuring smooth page transitions, project galleries, and responsive layouts.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    color: 'from-purple-500 to-pink-500',
    icon: Layers,
    image: portImg,
    client: 'Studio Nexus',
    timeline: '1 Week',
    problem: 'A design agency needed a high-impact portfolio that would impress enterprise clients and showcase their digital creative work in high fidelity.',
    solution: 'Created an immersive portfolio with smooth framer-motion transitions, fluid responsive grid layouts, and direct inquiry forms.',
    link: 'https://the-sage-cafe.vercel.app/',
  },
  {
    id: 11,
    title: 'FreshMart Grocery App',
    category: 'Mobile Apps',
    badge: 'Android APK',
    desc: 'Native Android grocery shopping app with categorized product aisles, local delivery address picker, and Firebase real-time database sync.',
    tech: ['Android (Java)', 'Firebase', 'Google Maps API', 'Material UI'],
    color: 'from-orange-500 to-red-500',
    icon: Smartphone,
    image: groceryImg,
    client: 'FreshMart Supermarkets',
    timeline: '4 Weeks',
    problem: 'A local grocery store chain needed a branded Android app to allow neighborhood customers to order essentials directly.',
    solution: 'Built a native Android app with category browsing, cart management, order history, and push notification alerts.',
    link: 'https://drive.google.com/file/d/1Ii-o2XRnn2U3zXrBno5lCebXeEqdQcYk/view',
  },
  {
    id: 12,
    title: 'NomadGo Travel Companion',
    category: 'Mobile Apps',
    badge: 'Android APK',
    desc: 'Native Android travel guide application with day-wise itinerary planning, offline destination caching, and interactive navigation maps.',
    tech: ['Android (Java)', 'Firebase', 'Google Maps SDK', 'Room DB'],
    color: 'from-violet-500 to-purple-600',
    icon: Smartphone,
    image: travelImg,
    client: 'NomadGo Adventures',
    timeline: '3 Weeks',
    problem: 'Backpackers and tourists required an offline-first mobile companion to browse curated itineraries and maps without reliable mobile data.',
    solution: 'Engineered a lightweight native Android application with local caching, travel bookmarking, and location tracking.',
    link: 'https://drive.google.com/file/d/10twrjbNC7UZjPVrw1a56NvrZiCBPJTbv/view?usp=sharing',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => {
          if (activeCategory === 'Web Apps') return p.category === 'Web Apps'
          if (activeCategory === 'Business') return p.category === 'Business'
          if (activeCategory === 'E-Commerce') return p.category === 'E-Commerce'
          if (activeCategory === 'Mobile Apps') return p.category === 'Mobile Apps'
          return p.category === activeCategory
        })

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio & Case Studies - MBS TECHNOLOGIES | Live Web & App Projects</title>
        <meta
          name="description"
          content="Explore live production projects built by MBS TECHNOLOGIES — including Medisphere Health CRM, Greenwood High School, Sage & Silk E-commerce, and Billing Software."
        />
        <meta
          name="keywords"
          content="web development portfolio, MERN stack case studies, React project showcase, e-commerce project portfolio, MBS TECHNOLOGIES work"
        />
        <link rel="canonical" href="https://mbswebtech.com/portfolio" />
        <meta property="og:title" content="Portfolio & Case Studies - MBS TECHNOLOGIES | Live Web & App Projects" />
        <meta
          property="og:description"
          content="Explore live production projects built by MBS TECHNOLOGIES — including Medisphere Health, Greenwood High, Sage & Silk, and Billing Software."
        />
        <meta property="og:url" content="https://mbswebtech.com/portfolio" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Production Portfolio</span>
            <h1 className="section-heading mt-3 mb-6">
              Handcrafted Projects Built for <span className="gradient-text">Real Clients</span>
            </h1>
            <p className="section-subheading">
              Explore our verified live production web apps, hospital portals, billing systems, e-commerce platforms, and native Android apps.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Impact Metrics Strip ────────────────────────────────── */}
      <section className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {[
                ['30+', 'Deployed Applications'],
                ['95+', 'Avg PageSpeed Score'],
                ['100%', 'Code Ownership Transferred'],
                ['0s', 'Downtime Deployment'],
              ].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold gradient-text">
                    {val}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {lbl}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Category Filters & Projects Grid ────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter Pills */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? projects.length
                    : projects.filter((p) => {
                        if (cat === 'Web Apps') return p.category === 'Web Apps'
                        if (cat === 'Business') return p.category === 'Business'
                        if (cat === 'E-Commerce') return p.category === 'E-Commerce'
                        if (cat === 'Mobile Apps') return p.category === 'Mobile Apps'
                        return p.category === cat
                      }).length

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                      activeCategory === cat
                        ? 'bg-gradient-to-r from-brand-600 to-teal-500 text-white shadow-lg shadow-brand-500/25'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-300 hover:text-brand-600 dark:hover:text-brand-400'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-xs px-1.5 py-0.2 rounded-full ${
                        activeCategory === cat
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </FadeIn>

          {/* Grid of Projects */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-2xl cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Media Header */}
                    <div
                      className={`h-48 flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${
                        project.color || 'from-slate-800 to-slate-900'
                      } p-4`}
                    >
                      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : project.logo ? (
                        <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl p-3 flex items-center justify-center border border-white/50 dark:border-slate-700/60 group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={project.logo}
                            alt={project.title}
                            className="max-w-full max-h-full object-contain drop-shadow-md"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      ) : (
                        <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg text-white">
                          <project.icon className="w-8 h-8" />
                        </div>
                      )}

                      {/* Top Badge */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                          {project.badge}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]">
                        <span className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          Inspect Case Study <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-1.5 font-medium">
                        <span>{project.category}</span>
                        <span>{project.timeline}</span>
                      </div>
                      <h3 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Tech Tags */}
                  <div className="px-5 pb-5 pt-0">
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Case Study Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.35 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                className={`flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${
                  selectedProject.color || 'from-slate-800 to-slate-900'
                } p-6 h-48 shrink-0`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                {selectedProject.image && selectedProject.image.trim() !== '' ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : selectedProject.logo ? (
                  <div className="w-24 h-24 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl p-3 flex items-center justify-center border border-white/50 dark:border-slate-700/60 z-10">
                    <img
                      src={selectedProject.logo}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <selectedProject.icon className="w-16 h-16 text-white/50 z-10" />
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    {selectedProject.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    Client: {selectedProject.client}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200/80 dark:border-red-800/60">
                    <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide mb-1.5">
                      Client Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1.5">
                      Our Engineering Solution
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Architectural Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm py-3 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Open Live Application
                    </a>
                  )}
                  <Link
                    to="/contact"
                    className="btn-secondary flex-1 justify-center text-sm py-3 text-center"
                  >
                    Build Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">
              Ready to Launch Your <span className="gradient-text">Next Platform?</span>
            </h2>
            <p className="section-subheading mb-8">
              Let's add your system to our production showcase. Discuss your architecture directly with Ritik Pandey and Vivang Mishra.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                <Zap className="w-5 h-5" /> Start Your Project
              </Link>
              <Link to="/services" className="btn-secondary text-base py-3.5 px-8">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
