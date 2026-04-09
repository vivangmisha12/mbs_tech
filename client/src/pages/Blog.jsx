import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag, Search, Zap } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const categories = ['All', 'Web Development', 'E-Commerce', 'Startup Tips', 'Technology', 'Design']

const posts = [
  {
    id: 1, category: 'Web Development', date: 'Feb 15, 2025', readTime: '5 min',
    title: 'Why React is the Best Choice for Modern Web Apps in 2025',
    excerpt: 'Explore why React continues to dominate the frontend landscape and why it\'s the right choice for building fast, scalable web applications.',
    color: 'from-blue-500 to-brand-600',
    tags: ['React', 'Frontend', 'JavaScript'],
  },
  {
    id: 2, category: 'E-Commerce', date: 'Feb 8, 2025', readTime: '7 min',
    title: '10 E-Commerce Features That Increase Conversions by 200%',
    excerpt: 'Discover the most impactful e-commerce features our agency has implemented that consistently boost sales and reduce cart abandonment rates.',
    color: 'from-teal-500 to-green-500',
    tags: ['E-Commerce', 'Conversions', 'UX'],
  },
  {
    id: 3, category: 'Startup Tips', date: 'Jan 29, 2025', readTime: '4 min',
    title: 'Do You Need a Custom Website or a Template? The Definitive Guide',
    excerpt: 'We break down the real costs, benefits, and long-term implications of choosing a custom-built website vs a template solution for your startup.',
    color: 'from-purple-500 to-pink-500',
    tags: ['Startup', 'Web Design', 'Cost'],
  },
  {
    id: 4, category: 'Technology', date: 'Jan 20, 2025', readTime: '6 min',
    title: 'The MERN Stack in 2025: Why We Still Love It',
    excerpt: 'MongoDB, Express, React, and Node.js remain our go-to stack for most projects. Here\'s why the MERN stack is still the most productive choice.',
    color: 'from-orange-500 to-red-500',
    tags: ['MERN', 'Node.js', 'MongoDB'],
  },
  {
    id: 5, category: 'Design', date: 'Jan 12, 2025', readTime: '5 min',
    title: 'Glassmorphism vs Neumorphism: Which Design Trend Should You Use?',
    excerpt: 'Two of the most popular UI design trends compared in depth. We explore their pros, cons, and when to use each in your next project.',
    color: 'from-brand-600 to-teal-500',
    tags: ['UI Design', 'Trends', 'Glassmorphism'],
  },
  {
    id: 6, category: 'Web Development', date: 'Jan 5, 2025', readTime: '8 min',
    title: 'Complete Guide to SEO for React Applications in 2025',
    excerpt: 'Server-side rendering, meta tags, structured data, and Core Web Vitals — everything you need to make your React app rank on Google.',
    color: 'from-violet-500 to-purple-600',
    tags: ['SEO', 'React', 'Performance'],
  },
  {
    id: 7, category: 'Startup Tips', date: 'Dec 28, 2024', readTime: '4 min',
    title: '5 Signs Your Website is Costing You Clients (And How to Fix It)',
    excerpt: 'Slow load times, poor mobile UX, and unclear CTAs are silently driving potential clients away. Here\'s how to identify and fix each issue.',
    color: 'from-yellow-500 to-orange-500',
    tags: ['Conversion', 'UX', 'Performance'],
  },
  {
    id: 8, category: 'E-Commerce', date: 'Dec 18, 2024', readTime: '6 min',
    title: 'Building a Multi-Vendor Marketplace with MERN Stack',
    excerpt: 'A technical deep-dive into how we architected and built a full multi-vendor marketplace with separate seller dashboards and unified checkout.',
    color: 'from-green-500 to-teal-600',
    tags: ['E-Commerce', 'MERN', 'Architecture'],
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const featured = posts[0]

  return (
    <PageWrapper>
      <Helmet>
        <title>Blog - MBS WebTech | Web Development Insights & Tips</title>
        <meta name="description" content="Expert insights on web development, e-commerce, startup tips, and technology from the MBS WebTech team." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Blog & Insights</span>
            <h1 className="section-heading mt-3 mb-6">
              Insights from <span className="gradient-text">Our Team</span>
            </h1>
            <p className="section-subheading mb-8">
              Web development tips, design trends, startup advice, and industry insights from the MBS WebTech team.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-2xl cursor-pointer"
            >
              <div className="grid md:grid-cols-2">
                <div className={`h-64 md:h-auto bg-gradient-to-br ${featured.color} flex items-center justify-center relative`}>
                  <div className="text-white/20 text-8xl font-display font-bold">1</div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
                      Featured Post
                    </span>
                  </div>
                </div>
                <div className="p-8 bg-white dark:bg-slate-800">
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <span className="tag-pill">{featured.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">{featured.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featured.tags.map(t => (
                      <span key={t} className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Tag className="w-3 h-3" />{t}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary text-sm py-2.5">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-600 to-teal-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">No articles found matching your search.</div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.slice(1).map((post) => (
                <StaggerItem key={post.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl cursor-pointer group flex flex-col"
                  >
                    <div className={`h-36 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                      <span className="text-white/20 text-5xl font-display font-bold">{post.id}</span>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-800 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <span className="tag-pill">{post.category}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">{post.excerpt}</p>
                      <button className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 text-xs font-medium group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Ready to Build Something <span className="gradient-text">Amazing?</span></h2>
            <p className="section-subheading mb-8">Turn your digital vision into reality with our expert team.</p>
            <Link to="/contact" className="btn-primary">
              <Zap className="w-5 h-5" /> Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
