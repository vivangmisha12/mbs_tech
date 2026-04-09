import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, Code2, ShoppingCart, Smartphone, Globe,
  CheckCircle2, Star, Users, Award, Zap, Shield, TrendingUp,
  Layers, ChevronRight, Play, Quote
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

// Data
const services = [
  { icon: Globe, title: 'Website Development', desc: 'Modern, fast-loading websites built with React and cutting-edge tech.', color: 'from-blue-500 to-brand-600' },
  { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Full-featured online stores that convert visitors into customers.', color: 'from-teal-500 to-green-500' },
  { icon: Layers, title: 'Portfolio Websites', desc: 'Stunning portfolios that showcase your work and attract clients.', color: 'from-purple-500 to-pink-500' },
  { icon: Smartphone, title: 'Android App Development', desc: 'Native Android apps that deliver exceptional user experiences.', color: 'from-orange-500 to-red-500' },
  { icon: TrendingUp, title: 'Website Redesign', desc: 'Transform outdated websites into modern, high-converting platforms.', color: 'from-brand-600 to-teal-500' },
]

const stats = [
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
  { value: 5, suffix: '★', label: 'Average Rating' },
  { value: 15, suffix: '+', label: 'Technologies Used' },
  { value: 3, suffix: ' yrs', label: 'Experience' },
]

const whyUs = [
  { icon: Zap, title: 'Fast Performance', desc: '99+ PageSpeed scores with optimized code and assets.' },
  { icon: Shield, title: 'Secure Development', desc: 'Security-first approach with modern best practices.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Perfect on every device — phones, tablets, desktops.' },
  { icon: TrendingUp, title: 'SEO Optimized', desc: 'Built to rank higher and attract organic traffic.' },
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable, well-documented codebase.' },
  { icon: Users, title: 'Client Focused', desc: 'Your vision, our expertise — partnership approach.' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We dive deep into your requirements and business goals.' },
  { step: '02', title: 'Design', desc: 'Crafting beautiful UI/UX wireframes and prototypes.' },
  { step: '03', title: 'Development', desc: 'Building with modern tech stack for maximum performance.' },
  { step: '04', title: 'Testing', desc: 'Rigorous QA across all devices and browsers.' },
  { step: '05', title: 'Launch', desc: 'Smooth deployment with zero downtime.' },
  { step: '06', title: 'Support', desc: 'Ongoing maintenance and growth support.' },
]

const testimonials = [
  {
    name: 'Sarah Johnson', role: 'CEO, TechStart', avatar: 'SJ',
    text: 'MBS WebTech transformed our online presence completely. The website they built tripled our lead generation within 2 months.',
    rating: 5,
  },
  {
    name: 'Michael Chen', role: 'Founder, EcoStore', avatar: 'MC',
    text: 'The e-commerce platform they built for us is exceptional. Sales increased by 180% after the launch. Incredible team!',
    rating: 5,
  },
  {
    name: 'Priya Sharma', role: 'Creative Director', avatar: 'PS',
    text: 'My portfolio website is absolutely stunning. I have received so many compliments and new client inquiries since launching.',
    rating: 5,
  },
]

const techStack = ['React', 'Node.js', 'MongoDB', 'Android', 'Tailwind CSS', 'Express', 'Next.js', 'Firebase']

const portfolioPreviews = [
  { title: 'E-Commerce Platform', category: 'E-Commerce', tech: ['React', 'Node.js', 'MongoDB'], color: 'from-blue-400 to-brand-600' },
  { title: 'SaaS Dashboard', category: 'Web App', tech: ['React', 'Express', 'MongoDB'], color: 'from-purple-400 to-pink-500' },
  { title: 'Portfolio Website', category: 'Portfolio', tech: ['React', 'Tailwind'], color: 'from-teal-400 to-green-500' },
  { title: 'Food Delivery App', category: 'Mobile', tech: ['Android', 'Firebase'], color: 'from-orange-400 to-red-500' },
  { title: 'Corporate Website', category: 'Business', tech: ['React', 'Node.js'], color: 'from-brand-500 to-teal-500' },
  { title: 'Blog Platform', category: 'Web App', tech: ['MERN Stack'], color: 'from-violet-400 to-purple-600' },
]

const teamMembers = [
  { name: 'Ritik Pandey', role: 'Full Stack Developer  Android', skills: ['React', 'Node.js', 'MongoDB','Express.js','Android','Java','Firebase'], initials: 'RP', color: 'from-brand-500 to-teal-500' },
  { name: 'Vivang Mishra', role: 'Full Stack developer (MERN)', skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS'], initials: 'VM', color: 'from-purple-500 to-pink-500' },
  { name: 'Vishwajeet Singh', role: 'Frontend Develope & Project Consultant', skills: ['React.js','JavaScript','HTML','Tailwind CSS','Project Consultant'], initials: 'VS', color: 'from-orange-500 to-red-500' },
]

function StatCounter({ value, suffix, label }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-1">
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}{suffix}
      </div>
      <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <Helmet>
        <title>MBS WebTech - Build Modern Websites & Apps for Your Business</title>
        <meta name="description" content="Professional web development agency specializing in React websites, e-commerce stores, portfolio sites, and Android apps. Start your project today." />
      </Helmet>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/30 to-teal-50/30 dark:from-slate-950 dark:via-brand-950/20 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for New Projects
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.05] mb-6"
              >
                Build Modern{' '}
                <span className="gradient-text">Websites & Apps</span>{' '}
                for Your Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-lg"
              >
                Professional website development, e-commerce stores, portfolio websites, and Android apps — designed to grow your business online.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link to="/contact" className="btn-primary text-base py-4 px-8">
                  <Zap className="w-5 h-5" />
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="btn-secondary text-base py-4 px-8">
                  <Play className="w-4 h-4" />
                  View Portfolio
                </Link>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-8"
              >
                {[['50+', 'Projects Done'], ['40+', 'Happy Clients'], ['5★', 'Average Rating']].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="text-2xl font-display font-bold gradient-text">{val}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{lbl}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right – Visual mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              {/* Main card */}
              <div className="relative z-10 glass-card p-2 shadow-2xl shadow-brand-500/20">
                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-brand-600 to-teal-500 aspect-video flex items-center justify-center relative">
                  {/* Browser chrome */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-black/20 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
                    </div>
                    <div className="flex-1 mx-4 h-4 rounded-full bg-white/20" />
                  </div>
                  {/* Content */}
                  <div className="text-center text-white mt-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                      <Code2 className="w-8 h-8" />
                    </div>
                    <div className="font-display font-bold text-xl">MBS WebTech</div>
                    <div className="text-white/70 text-sm">Your Digital Partner</div>
                  </div>

                  {/* Floating cards */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-100 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">Project Launched</div>
                        <div className="text-slate-400">2 hours ago</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -top-2 -right-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-xl border border-slate-100 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">5.0 Rating</div>
                        <div className="text-slate-400">From 40+ clients</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED TECH ─────────────────────────────────────── */}
      <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8">
            Technologies We Master
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {techStack.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ y: -3 }}
                className="px-5 py-2.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-brand-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="tag-pill mb-4">Our Services</span>
            <h2 className="section-heading mt-3 mb-4">
              Everything Your Business{' '}
              <span className="gradient-text">Needs Online</span>
            </h2>
            <p className="section-subheading">
              From idea to launch — we handle every aspect of your digital presence with expertise and care.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 cursor-pointer group border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 text-sm font-medium group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-display font-bold mb-1">
                  <CounterWrapper value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="tag-pill mb-4">Why MBS WebTech</span>
            <h2 className="section-heading mt-3 mb-4">
              Built for <span className="gradient-text">Results</span>
            </h2>
            <p className="section-subheading">
              We don't just build websites — we build digital experiences that convert visitors into loyal customers.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ──────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="tag-pill mb-3">Portfolio</span>
              <h2 className="section-heading mt-2">
                Our <span className="gradient-text">Recent Work</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-secondary shrink-0">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioPreviews.map((project, i) => (
              <StaggerItem key={project.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl group cursor-pointer"
                >
                  <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                    <span className="text-white/20 text-6xl font-display font-bold">{i + 1}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-2">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div className="font-semibold text-sm">{project.category}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-full">View Project</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800">
                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="tag-pill text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="tag-pill mb-4">How We Work</span>
            <h2 className="section-heading mt-3 mb-4">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <p className="section-subheading">
              A transparent, structured workflow that ensures every project is delivered on time and exceeds expectations.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg">
                  <div className="font-mono text-5xl font-bold text-brand-100 dark:text-brand-900 mb-3">{step.step}</div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="tag-pill mb-4">Testimonials</span>
            <h2 className="section-heading mt-3 mb-4">
              Loved by <span className="gradient-text">Our Clients</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg relative">
                  <Quote className="w-8 h-8 text-brand-200 dark:text-brand-800 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TEAM PREVIEW ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="tag-pill mb-3">Our Team</span>
              <h2 className="section-heading mt-2">
                Meet the <span className="gradient-text">Experts</span>
              </h2>
            </div>
            <Link to="/team" className="btn-secondary shrink-0">
              Meet Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-display font-bold mx-auto mb-4 shadow-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {member.skills.map(s => <span key={s} className="tag-pill">{s}</span>)}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-teal-500 p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Ready to Start?
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Ready to Build Your Website?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                  Let's turn your vision into a reality. Get a free consultation and project estimate today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all hover:-translate-y-0.5 shadow-lg"
                  >
                    <Zap className="w-5 h-5" />
                    Start Your Project
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all hover:-translate-y-0.5"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}

function CounterWrapper({ value, suffix }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={2.5} /> : '0'}{suffix}
    </span>
  )
}
