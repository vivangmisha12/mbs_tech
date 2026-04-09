import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Globe, Smartphone, ShoppingCart, Layers, Code2, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import EcoIMG from '../assets/screenshots/img_1.png';
import foodImg from '../assets/screenshots/img_2.png';
import portImg from '../assets/screenshots/PORTFOLIO.webp';
import groceryImg from '../assets/screenshots/grocery.png';
import travelImg from '../assets/screenshots/travelapp.jpeg';


const categories = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Mobile App']

const projects = [
  {
    id: 1, title: 'EcoStore E-Commerce Store', category: 'E-Commerce',
    desc: 'A Full-Stack e-commerce app with React and Node.js, featuring secure auth, cloud DB, product/cart/order management, real-time image uploads, and deployed on Render (backend) & Netlify (frontend). Delivered a scalable, modern, production-ready solution.',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Express', 'JWT Auth'],
    color: 'from-blue-500 to-brand-600', icon: Globe,
    image: EcoIMG,
    problem: 'The client needed a scalable e-commerce solution that could handle secure user authentication, real-time updates, and a polished UI to compete in the online retail space.',
    solution: 'Built a full-stack application with React and Node.js, featuring secure authentication, cloud database integration, real-time updates, and a polished UI. Deployed on Render and Netlify for optimal performance.',
    link: 'https://quick-carttt.netlify.app/',
  },
  {
    id: 2, title: 'Food Delivery Website', category: 'E-Commerce',
    desc: 'A modern food delivery platform with order tracking, restaurant listings, and a custom checkout flow. Built with React, Node.js, and MongoDB, featuring JWT authentication and deployed on Vercel.',
    tech: ['React', 'Express', 'MongoDB', 'Node.js', 'JWT Auth'],
    color: 'from-teal-500 to-green-500', icon: ShoppingCart,
    image: foodImg, // Add screenshot path here
    problem: 'A food delivery startup needed a web platform to connect customers with local restaurants, featuring real-time order tracking and a seamless checkout experience.',
    solution: 'Delivered a fast, beautiful web application with React and Node.js, featuring secure authentication, real-time order tracking, and a custom checkout flow. Deployed on Vercel for optimal performance.',
    link: 'https://venerable-zuccutto-8e6cff.netlify.app/',
  },
  {
    id: 3, title: 'Creative Studio Portfolio', category: 'Portfolio',
    desc: 'Stunning portfolio website for a creative agency showcasing their design and video work.',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    color: 'from-purple-500 to-pink-500', icon: Layers,
    image: portImg, // Add screenshot path here
    problem: 'A creative agency wanted a portfolio that would wow potential clients and stand out from competitors.',
    solution: 'Created an immersive, animated portfolio with smooth transitions, video backgrounds, and a memorable aesthetic.',
    link: 'https://your-link-3.com',
  },
  {
    id: 4, title: 'Grocery Android App', category: 'Mobile App',
    desc: 'Grocery delivery app for Android with real-time tracking, restaurant listings, and payment processing.',
    tech: ['Java', 'Firebase', 'Google Maps', 'API Integration'],
    color: 'from-orange-500 to-red-500', icon: Smartphone,
    image: groceryImg, // Add screenshot path here
    problem: 'A local grocery store chain needed a branded delivery app to compete with large platforms and reduce commission fees.',
    solution: 'Built a native Android app with real-time order tracking, push notifications, and seamless payment integration.',
    link: 'https://drive.google.com/file/d/1Ii-o2XRnn2U3zXrBno5lCebXeEqdQcYk/view',
  },
  {
    id: 5, title: 'LawFirm Corporate Website', category: 'Business',
    desc: 'Professional corporate website for a law firm with service pages, blog, and lead capture forms.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: 'from-slate-600 to-slate-800', icon: Globe,
    image: '', // Add screenshot path here
    problem: 'A law firm\'s outdated website was losing potential clients. They needed a professional, trustworthy digital presence.',
    solution: 'Redesigned their entire web presence with a conversion-focused layout, attorney profiles, and a contact system.',
    link: 'https://your-link-5.com',
  },
  {
    id: 6, title: 'FitLife Marketplace', category: 'E-Commerce',
    desc: 'Fitness equipment marketplace with multi-vendor support, reviews, and a loyalty program.',
    tech: ['React', 'Express', 'MongoDB', 'Stripe'],
    color: 'from-yellow-500 to-orange-500', icon: ShoppingCart,
    image: '', // Add screenshot path here
    problem: 'A fitness startup wanted to create a marketplace connecting equipment sellers with gym owners and fitness enthusiasts.',
    solution: 'Developed a multi-vendor marketplace with seller dashboards, product reviews, and a points-based loyalty system.',
    link: 'https://your-link-6.com',
  },
  {
    id: 7, title: 'Alex Mercer Photography', category: 'Portfolio',
    desc: 'Minimalist photography portfolio with gallery, booking system, and client proofing area.',
    tech: ['React', 'Cloudinary', 'Tailwind'],
    color: 'from-brand-600 to-teal-500', icon: Layers,
    image: '', // Add screenshot path here
    problem: 'A photographer needed a way to showcase work, take booking requests, and share proofing galleries with clients.',
    solution: 'Created a beautiful, image-optimized portfolio with lazy loading, a booking form, and a secure client area.',
    link: 'https://your-link-7.com',
  },
  {
    id: 8, title: 'Travel App', category: 'Mobile App',
    desc: 'Android travel app with itinerary planning, local recommendations, and offline maps.',
    tech: ['Java', 'XML', 'Firebase', 'Google Maps API'],
    color: 'from-violet-500 to-purple-600', icon: Smartphone,
    image: travelImg, // Add screenshot path here
    problem: 'Travelers needed a reliable app to plan their trips, discover local attractions, and navigate without an internet connection.',
    solution: 'Built an affordable, intuitive Android app with itinerary planning, local recommendations, and offline map functionality.',
    link: 'https://drive.google.com/file/d/10twrjbNC7UZjPVrw1a56NvrZiCBPJTbv/view?usp=sharing',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageWrapper>
      <Helmet>
        <title>Portfolio - MBS WebTech | Our Work & Projects</title>
        <meta name="description" content="Browse our portfolio of web development, e-commerce, portfolio, and mobile app projects." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-brand-50/20 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Our Work</span>
            <h1 className="section-heading mt-3 mb-6">
              Projects We're <span className="gradient-text">Proud Of</span>
            </h1>
            <p className="section-subheading">
              Every project tells a story. Browse our work and see how we help businesses achieve their digital goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-brand-600 to-teal-500 text-white shadow-lg shadow-brand-500/25'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300 hover:text-brand-600 dark:hover:text-brand-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl cursor-pointer group"
                >
                  <div className={`h-40 flex items-center justify-center relative overflow-hidden ${!project.image ? 'bg-gradient-to-br ' + project.color : ''}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <project.icon className="w-10 h-10 text-white/30" />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800">
                    <span className="text-xs font-medium text-brand-500 dark:text-brand-400 mb-1 block">{project.category}</span>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-2">{project.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map(t => (
                        <span key={t} className="tag-pill text-xs">{t}</span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="tag-pill text-xs">+{project.tech.length - 2}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-center relative overflow-hidden ${(!selectedProject.image) ? 'bg-gradient-to-br ' + selectedProject.color : ''}`}
                style={{ height: selectedProject.category === 'Mobile App' ? '120px' : '192px' }}
              >
                {selectedProject.image && selectedProject.image.trim() !== '' ? (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <selectedProject.icon className="w-16 h-16 text-white/30 z-10" />
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-all z-20"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium border border-white/30">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">{selectedProject.title}</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide mb-2">The Challenge</div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{selectedProject.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">Our Solution</div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{selectedProject.solution}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center text-sm py-2.5 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit Project
                    </a>
                  )}
                  <Link to="/contact" className="btn-secondary text-sm py-2.5 flex-1 justify-center">
                    Start Similar Project
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-secondary text-sm py-2.5"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Have a Project in Mind?</h2>
            <p className="section-subheading mb-8">Let's add your success story to our portfolio. Tell us about your project and get a free quote.</p>
            <Link to="/contact" className="btn-primary">
              <Zap className="w-5 h-5" /> Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
