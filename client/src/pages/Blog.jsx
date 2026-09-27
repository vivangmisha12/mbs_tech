import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Search,
  Zap,
  X,
  User,
  CheckCircle2,
  BookOpen,
  Share2,
  Sparkles,
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import ritikImg from '../assets/ritik_pandey.jpg'
import vivangImg from '../assets/vivang_mishra.jpg'

const categories = ['All', 'Case Studies', 'Full Stack & MERN', 'Android Apps', 'Performance & SEO', 'Business Tech']

const posts = [
  {
    id: 1,
    category: 'Case Studies',
    date: 'Sep 24, 2026',
    readTime: '6 min',
    author: {
      name: 'Vivang Mishra',
      role: 'Co-Founder & MERN Lead',
      image: vivangImg,
    },
    title: 'How We Built & Scaled Progix: An Enterprise Billing & Automated GST Invoicing Platform',
    excerpt:
      'A practical breakdown of how our team architected Progix Billing Software — handling instant GST invoice rendering, real-time inventory ledger sync, and offline-resilient local states.',
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    tags: ['MERN Stack', 'GST Billing', 'MongoDB', 'System Architecture'],
    keyTakeaways: [
      'Engineered sub-second client-side PDF generation reducing server overhead by 80%.',
      'Implemented optimistic UI updates for high-speed counter checkout without waiting on network latencies.',
      'Designed a double-entry inventory ledger preventing stock mismatch during peak billing hours.',
    ],
    content: [
      {
        heading: 'The Business Problem',
        body: 'Retailers and small businesses frequently face software bottlenecks during rush hours: slow invoice generation, clunky software updates, and complex multi-rate GST calculations that lead to customer lines and inventory discrepancies.',
      },
      {
        heading: 'Architecture & Technical Decisions',
        body: 'We chose React with Vite for lightning-fast frontend rendering, backed by Express.js and MongoDB for document-based sales records. By shifting receipt generation to a lightweight client canvas worker, invoices render and print in under 400ms.',
      },
      {
        heading: 'Real-World Results',
        body: 'Progix now processes invoices smoothly with zero data lag. Businesses reported a 60% reduction in billing checkout time and 100% accurate tax ledger generation ready for monthly accounting exports.',
      },
    ],
  },
  {
    id: 2,
    category: 'Case Studies',
    date: 'Sep 18, 2026',
    readTime: '5 min',
    author: {
      name: 'Vivang Mishra',
      role: 'Co-Founder & MERN Lead',
      image: vivangImg,
    },
    title: 'Engineering The Sage Cafe: Crafting a High-Converting Online Food & Table Booking Platform',
    excerpt:
      'How we crafted a modern digital experience for a boutique cafe — combining interactive visual menus, mobile table reservation flows, and local SEO optimizations that drove 3x more weekend bookings.',
    color: 'from-amber-500 via-orange-600 to-amber-700',
    tags: ['React.js', 'Tailwind CSS', 'Conversion UX', 'Local SEO'],
    keyTakeaways: [
      'Optimized digital food catalog with high-fidelity visual cards for instant item discovery.',
      'One-tap WhatsApp reservation booking flow directly connecting customers to cafe staff.',
      '99/100 Mobile PageSpeed score with aggressive image compression and responsive modern layouts.',
    ],
    content: [
      {
        heading: 'Transforming Physical Ambiance into Digital Presence',
        body: 'For hospitality brands, food photography and atmosphere are everything. We structured The Sage Cafe with warm visual gradients, smooth category filters, and clear pricing to make browsing effortless on smartphones.',
      },
      {
        heading: 'Zero-Friction Reservation Flow',
        body: 'Instead of forcing customers to download heavy mobile apps or fill multi-page forms, we engineered a 3-step instant booking system with direct WhatsApp confirmation triggers.',
      },
    ],
  },
  {
    id: 3,
    category: 'Full Stack & MERN',
    date: 'Sep 10, 2026',
    readTime: '7 min',
    author: {
      name: 'Ritik Pandey',
      role: 'Founder & Full Stack Lead',
      image: ritikImg,
    },
    title: 'Developing Medisphere: Hospital CRM, Doctor Appointment Scheduling & Secure Patient Records',
    excerpt:
      'An in-depth look into building Medisphere — managing clinical departments, appointment scheduling queues, secure patient history records, and doctor availability rosters.',
    color: 'from-cyan-600 via-blue-600 to-teal-600',
    tags: ['Hospital CRM', 'Node.js', 'Express', 'Security'],
    keyTakeaways: [
      'Role-based access control (RBAC) keeping sensitive patient diagnosis records strictly confidential.',
      'Real-time appointment slot reservation preventing double-booking across hospital OPDs.',
      'Centralized pharmacy and patient ledger syncing with clinical billing modules.',
    ],
    content: [
      {
        heading: 'Clinical Data Integrity & Security First',
        body: 'Medical platforms require bulletproof permission layers. We architected JWT-secured sessions with granular role isolation between Receptionists, Doctors, Lab Technicians, and Hospital Administrators.',
      },
      {
        heading: 'Scalable Queue & Appointment Logic',
        body: 'Automated time-slot allocation dynamically factors in doctor break times, emergency buffer slots, and patient visit types for seamless daily clinic workflows.',
      },
    ],
  },
  {
    id: 4,
    category: 'Android Apps',
    date: 'Aug 28, 2026',
    readTime: '5 min',
    author: {
      name: 'Ritik Pandey',
      role: 'Founder & Full Stack Lead',
      image: ritikImg,
    },
    title: 'Native Android Architecture: Why We Picked Kotlin & Firebase for the BarkAtWork Job Portal App',
    excerpt:
      'Lessons learned from developing and publishing the BarkAtWork mobile app on Google Play Store — handling real-time application tracking, resume uploads, and push notification pipelines.',
    color: 'from-rose-500 via-pink-600 to-purple-600',
    tags: ['Android', 'Kotlin', 'Firebase', 'Play Store'],
    keyTakeaways: [
      'Native Android UI guarantees fluid 60fps scrolling across low-end and flagship devices alike.',
      'Firebase Cloud Messaging (FCM) delivers instant candidate interview and job match notifications.',
      'Cloud storage pipeline auto-compresses candidate PDF resumes for instant hiring manager review.',
    ],
    content: [
      {
        heading: 'Why Native Outperformed Hybrid for This Use-Case',
        body: 'For job seekers across tier-2 and tier-3 cities, app speed and low memory usage are paramount. Building native Android with clean Architecture components ensured fast startups under 1 second.',
      },
      {
        heading: 'Real-Time Notification & Matching',
        body: 'Background workers sync job openings based on location and salary filters, immediately pinging registered job seekers the moment matching roles are posted.',
      },
    ],
  },
  {
    id: 5,
    category: 'Performance & SEO',
    date: 'Aug 14, 2026',
    readTime: '4 min',
    author: {
      name: 'Vivang Mishra',
      role: 'Co-Founder & MERN Lead',
      image: vivangImg,
    },
    title: 'Achieving 95+ Core Web Vitals in React: Practical Techniques We Use on Every Client Project',
    excerpt:
      'No fluff, just actionable optimizations: code splitting routes, Next-gen WebP asset pipelines, eliminating layout shifts (CLS), and fine-tuning Tailwind CSS bundles.',
    color: 'from-emerald-500 via-teal-600 to-cyan-600',
    tags: ['Web Performance', 'SEO', 'React Optimization', 'Core Web Vitals'],
    keyTakeaways: [
      'Dynamic component imports with React.lazy and Suspense drop initial bundle by up to 60%.',
      'Explicit image dimension ratios and modern CSS aspect-ratio properties completely eliminate Cumulative Layout Shift (CLS).',
      'Self-hosted variable fonts eliminate external Google Fonts render-blocking network requests.',
    ],
    content: [
      {
        heading: 'The Direct Impact of Speed on Client Revenue',
        body: 'A 1-second delay in page load time drops mobile conversion rates by up to 20%. When building for clients, performance is not an afterthought — it is engineered into the very first sprint.',
      },
    ],
  },
  {
    id: 6,
    category: 'Business Tech',
    date: 'Aug 02, 2026',
    readTime: '5 min',
    author: {
      name: 'Ritik Pandey',
      role: 'Founder & Full Stack Lead',
      image: ritikImg,
    },
    title: 'The Essential 2025 Web Launch Checklist for Indian Businesses & Startups',
    excerpt:
      'From domain DNS records and SSL enforcement to WhatsApp business API triggers, Google Search Console indexing, and automated backup routines.',
    color: 'from-purple-600 via-indigo-600 to-blue-700',
    tags: ['Startup Guide', 'Web Launch', 'Business Tech', 'Checklist'],
    keyTakeaways: [
      'Set up Google Search Console and automated XML sitemaps within 24 hours of launch.',
      'Configure auto-healing server process managers (PM2 / Vercel Edge) to prevent website downtime.',
      'Integrate WhatsApp direct chat links for instant conversion of high-intent visitors.',
    ],
    content: [
      {
        heading: 'Why Many Great Websites Fail to Convert',
        body: 'Building beautiful code is only half the battle. If your site lacks clear call-to-actions, instant chat options, or proper meta tags for social sharing, you are leaving business on the table.',
      },
    ],
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState(null)

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPost(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filtered = posts.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCat && matchesSearch
  })

  const featured = posts[0]

  return (
    <PageWrapper>
      <Helmet>
        <title>Engineering Blog & Tech Insights - MBS TECHNOLOGIES</title>
        <meta
          name="description"
          content="Practical web development case studies, MERN stack performance optimizations, and technical architecture guides by Ritik Pandey and Vivang Mishra."
        />
        <meta
          name="keywords"
          content="web development blog, React performance, MERN stack architecture, technical SEO guide, software engineering insights"
        />
        <link rel="canonical" href="https://mbswebtech.com/blog" />
        <meta property="og:title" content="Engineering Blog & Tech Insights - MBS TECHNOLOGIES" />
        <meta
          property="og:description"
          content="Practical web development case studies and architectural breakdowns by MBS TECHNOLOGIES."
        />
        <meta property="og:url" content="https://mbswebtech.com/blog" />
      </Helmet>

      {/* ── Hero Section ────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Engineering & Case Studies</span>
            <h1 className="section-heading mt-3 mb-6">
              Practical Insights from <span className="gradient-text">Our Engineers</span>
            </h1>
            <p className="section-subheading mb-8">
              Real-world software architecture, client project breakdowns, and actionable tips for building high-performance websites and apps.
            </p>

            {/* Search Box */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, tech, or case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent shadow-sm"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Post ───────────────────────────────────────── */}
      {searchQuery === '' && activeCategory === 'All' && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div
                onClick={() => setSelectedPost(featured)}
                className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-2xl cursor-pointer bg-white dark:bg-slate-900 group"
              >
                <div className="grid lg:grid-cols-12">
                  <div
                    className={`lg:col-span-5 h-64 lg:h-auto bg-gradient-to-br ${featured.color} p-8 flex flex-col justify-between relative overflow-hidden text-white`}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold border border-white/30 uppercase tracking-wider">
                        ⭐ Featured Case Study
                      </span>
                      <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                      </span>
                    </div>

                    <div className="relative z-10 my-6">
                      <div className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">
                        Real Project Deep-Dive
                      </div>
                      <div className="text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
                        Progix Invoicing Platform
                      </div>
                    </div>

                    {/* Author badge */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/20">
                      <img
                        src={featured.author.image}
                        alt={featured.author.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/60 shadow"
                      />
                      <div>
                        <div className="text-sm font-bold text-white">{featured.author.name}</div>
                        <div className="text-xs text-white/80">{featured.author.role}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between bg-white dark:bg-slate-900">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="tag-pill">{featured.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {featured.date}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                        {featured.title}
                      </h2>

                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>

                      {/* Key highlights pill list */}
                      <div className="space-y-2 mb-6">
                        {featured.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex flex-wrap gap-2">
                        {featured.tags.map((t) => (
                          <span key={t} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Tag className="w-3 h-3 text-brand-500" /> {t}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 dark:text-brand-400 group-hover:gap-2.5 transition-all">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Category Filter Tabs ────────────────────────────────── */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-600 to-teal-500 text-white shadow-md shadow-brand-500/25'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posts Grid ─────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">No articles found</div>
              <div className="text-sm text-slate-400">Try searching for different keywords like 'MERN', 'React', or 'Android'.</div>
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <StaggerItem key={post.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedPost(post)}
                    className="h-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500 transition-all hover:shadow-xl cursor-pointer bg-white dark:bg-slate-900 flex flex-col group"
                  >
                    {/* Top colored strip */}
                    <div className={`h-32 bg-gradient-to-br ${post.color} p-4 flex flex-col justify-between relative text-white`}>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white border border-white/20">
                          {post.category}
                        </span>
                        <span className="text-[11px] text-white/90 flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white/80">{post.date}</div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.image}
                            alt={post.author.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                          />
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                            {post.author.name}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400 group-hover:gap-1.5 transition-all">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* ── Interactive Article Reader Modal ───────────────────── */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 my-auto text-slate-800 dark:text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="tag-pill">{selectedPost.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-4">
                  {selectedPost.title}
                </h1>

                {/* Author card */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700">
                  <img
                    src={selectedPost.author.image}
                    alt={selectedPost.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-500/40"
                  />
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      {selectedPost.author.name}
                    </div>
                    <div className="text-xs text-brand-600 dark:text-brand-400 font-medium">
                      {selectedPost.author.role} • MBS TECHNOLOGIES
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Takeaways Box */}
              {selectedPost.keyTakeaways && (
                <div className="p-5 rounded-2xl bg-brand-50/50 dark:bg-brand-950/30 border border-brand-200/60 dark:border-brand-800/60 mb-8">
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-700 dark:text-brand-300 mb-3">
                    <Sparkles className="w-4 h-4" /> Core Technical Takeaways
                  </div>
                  <ul className="space-y-2">
                    {selectedPost.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Structured Article Content */}
              <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                <p className="font-medium text-slate-800 dark:text-slate-200">{selectedPost.excerpt}</p>

                {selectedPost.content &&
                  selectedPost.content.map((sec, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                        {sec.heading}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {sec.body}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800 mb-8">
                {selectedPost.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5"
                  >
                    <Tag className="w-3 h-3 text-brand-500" /> {t}
                  </span>
                ))}
              </div>

              {/* Bottom CTA in Modal */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-700 to-teal-600 text-white text-center">
                <h4 className="font-display font-bold text-lg mb-1">Have a project with similar requirements?</h4>
                <p className="text-xs sm:text-sm text-white/80 mb-4">
                  Let’s collaborate directly with our engineers to design and build your custom solution.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedPost(null)}
                    className="btn-primary bg-white text-brand-600 hover:bg-brand-50 py-2.5 px-6 text-xs sm:text-sm font-bold shadow-none"
                  >
                    <Zap className="w-4 h-4" /> Start Your Project
                  </Link>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all"
                  >
                    Back to Articles
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Bottom Section CTA ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">
              Turn Engineering Expertise into <span className="gradient-text">Your Competitive Advantage</span>
            </h2>
            <p className="section-subheading mb-8">
              Work directly with Ritik and Vivang to architect, develop, and launch your next high-impact web or mobile project.
            </p>
            <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
              <Zap className="w-5 h-5" /> Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}

