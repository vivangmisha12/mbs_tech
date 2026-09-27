import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, Code2, ShoppingCart, Smartphone, Globe,
  CheckCircle2, Star, Users, Award, Zap, Shield, TrendingUp,
  Layers, ChevronRight, Play, Quote, Search, Megaphone, Cpu, RefreshCw,
  ShieldCheck, Headphones, HeartHandshake, Clock, Sparkles
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import logo from '../assets/logo_bg_remove.png'
import OffersMarquee from '../components/UI/MarqueeAnimation'
import ServicesBadges from '../components/UI/ServicesBadges'
import ritikImg from '../assets/ritik_pandey.jpg'
import vivangImg from '../assets/vivang_mishra.jpg'

// Data
const services = [
  { icon: Globe, title: 'Website Development', desc: 'Modern, lightning-fast web applications built with React, Next.js, and cutting-edge tech.', color: 'from-blue-500 to-brand-600' },
  { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Full-featured online stores with payment gateways, inventory, and high-converting checkout flows.', color: 'from-teal-500 to-green-500' },
  { icon: Cpu, title: 'Custom Software Development', desc: 'Tailored enterprise software, CRM/ERP systems, automation tools, and scalable cloud architectures.', color: 'from-indigo-500 to-purple-600' },
  { icon: Smartphone, title: 'Android & Mobile Apps', desc: 'High-performance native Android apps and cross-platform mobile solutions with intuitive UI/UX.', color: 'from-orange-500 to-red-500' },
  { icon: Search, title: 'SEO & Search Optimization', desc: 'Comprehensive technical SEO, keyword ranking strategies, and 95+ Core Web Vitals optimization.', color: 'from-amber-500 to-yellow-500' },
  { icon: Megaphone, title: 'Digital Marketing & Ads', desc: 'Data-driven marketing campaigns, social media growth, lead generation, and Google/Meta ad strategies.', color: 'from-pink-500 to-rose-600' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Transform outdated sites into modern, high-converting digital platforms with zero downtime.', color: 'from-brand-600 to-teal-500' },
  { icon: Layers, title: 'Portfolio & Brand Sites', desc: 'Stunning, animated portfolio websites that establish authority and attract high-ticket clients.', color: 'from-purple-500 to-pink-500' },
]

const trustGuarantees = [
  {
    icon: ShieldCheck,
    title: '100% Code Ownership',
    desc: 'Complete IP rights and full source code handover to you. No hidden lock-ins, you own your tech.',
    tag: 'Full Ownership',
  },
  {
    icon: Headphones,
    title: 'Direct Dev Access',
    desc: 'No middle managers or communication delays. Collaborate 1-on-1 directly with the core developers.',
    tag: 'Direct Talk',
  },
  {
    icon: HeartHandshake,
    title: 'Milestone Payments',
    desc: 'Zero risk payment milestones. Pay phase by phase only after you review and approve each deliverable.',
    tag: 'Risk-Free',
  },
  {
    icon: Clock,
    title: '30-Day Free Warranty',
    desc: 'Complete peace of mind. Free post-launch bug fixing, deployment assistance, and optimization support.',
    tag: 'Free Warranty',
  },
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
    name: 'Raj Tiwari', role: 'CEO, TechStart', avatar: 'RT',
    text: 'MBS TECHNOLOGIES transformed our online presence completely. The website they built tripled our lead generation within 2 months.',
    rating: 5,
  },
  {
    name: 'Mahendra Yadav', role: 'Founder, EcoStore', avatar: 'MY',
    text: 'The e-commerce platform they built for us is exceptional. Sales increased by 180% after the launch. Incredible team!',
    rating: 5,
  },
  {
    name: 'Mandeep Chaurasiya', role: 'Creative Director', avatar: 'MC',
    text: 'My portfolio website is absolutely stunning. I have received so many compliments and new client inquiries since launching.',
    rating: 5,
  },
]

const techStack = ['React', 'Node.js', 'MongoDB', 'Android', 'Tailwind CSS', 'Express', 'Next.js', 'Firebase']

const portfolioPreviews = [
  { title: 'The Sage Cafe', category: 'Cafe Website', tech: ['React', 'Tailwind', 'Vite'], color: 'from-amber-600 via-amber-700 to-yellow-600', link: 'https://the-sage-cafe.vercel.app/', logo: 'https://the-sage-cafe.vercel.app/brand_logo_icon.png' },
  { title: 'Billing Software', category: 'Billing Software', tech: ['React', 'Node.js', 'MongoDB'], color: 'from-blue-600 via-indigo-600 to-indigo-700', link: 'https://billing-software-progix.vercel.app/', logo: 'https://billing-software-progix.vercel.app/progix_logo.png' },
  { title: 'Greenwood Academy', category: 'School Portal', tech: ['React', 'Tailwind', 'Vite'], color: 'from-emerald-600 via-teal-600 to-teal-700', link: 'https://green-wood-acedmy.vercel.app/', logo: 'https://green-wood-acedmy.vercel.app/assets/school_website_logo-BDZazFXj.png' },
  { title: 'Medisphere Hospital & CRM', category: 'Hospital + CRM', tech: ['React', 'Node.js', 'Tailwind'], color: 'from-cyan-600 via-blue-600 to-blue-700', link: 'https://medisphere-three.vercel.app/', logo: 'https://medisphere-three.vercel.app/applogo.png' },
  { title: 'TourWala Agency', category: 'Tours & Travels', tech: ['React', 'Tailwind', 'Vite'], color: 'from-orange-500 via-amber-600 to-yellow-600', link: 'https://tourwala.vercel.app/', logo: 'https://tourwala.vercel.app/assets/logo-DrXGqDA3.png' },
  { title: 'BarkAtWork Job Portal', category: 'Android Application', tech: ['Android', 'Kotlin', 'Firebase'], color: 'from-rose-500 via-pink-600 to-purple-600', link: 'https://play.google.com/store/apps/details?id=com.barkatwork.app', logo: 'https://cdn-icons-png.flaticon.com/512/3281/3281329.png' },
]

const teamMembers = [
  {
    name: 'Ritik Pandey',
    role: 'Full Stack & Android Developer',
    image: ritikImg,
    skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Android', 'Java', 'Firebase'],
    initials: 'RP',
    color: 'from-brand-500 to-teal-500',
  },
  {
    name: 'Vivang Mishra',
    role: 'Full Stack Developer (MERN)',
    image: vivangImg,
    skills: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Next.js', 'Tailwind CSS'],
    initials: 'VM',
    color: 'from-purple-500 to-pink-500',
  },
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
        <title>MBS TECHNOLOGIES - Custom Web & Android App Development Agency</title>
        <meta
          name="description"
          content="Professional web development agency in Lucknow, India specializing in custom React websites, full-stack MERN apps, e-commerce stores, billing software, and Android apps."
        />
        <meta
          name="keywords"
          content="web development, MERN stack, custom website design, e-commerce development, billing software, android app development, MBS TECHNOLOGIES, Lucknow web developer"
        />
        <link rel="canonical" href="https://mbswebtech.com/" />
        <meta property="og:title" content="MBS TECHNOLOGIES - Custom Web & Android App Development Agency" />
        <meta
          property="og:description"
          content="We build modern, high-performance websites and Android applications that help businesses scale."
        />
        <meta property="og:url" content="https://mbswebtech.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white dark:bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />

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

            {/* Right – Interactive Services Showcase Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center"
            >
              <ServicesBadges />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE OFFERS & VALUE PROPOSITION MARQUEE ───────── */}
      <OffersMarquee />

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

      {/* ── CLIENT TRUST GUARANTEES ───────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-brand-700 to-teal-600 relative overflow-hidden text-white shadow-2xl">
        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-teal-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Direct & Risk-Free
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Our Core Commitments to You
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Built on radical transparency, full code ownership, and direct engineer collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustGuarantees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 flex flex-col justify-between hover:bg-white/15 hover:border-white/30 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center shadow-inner">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-teal-400/20 border border-teal-300/30 text-teal-100">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="tag-pill mb-4">Why MBS TECHNOLOGIES</span>
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
              <span className="tag-pill mb-3">Featured Projects</span>
              <h2 className="section-heading mt-2">
                Our <span className="gradient-text">Recent Work</span>
              </h2>
            </div>
            <Link to="/portfolio" className="btn-secondary shrink-0">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioPreviews.map((project, i) => (
              <StaggerItem key={project.title}>
                <motion.a
                  href={project.link || '/portfolio'}
                  target={project.link ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="block rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl group cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden p-4`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                    {project.logo ? (
                      <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md shadow-2xl p-3.5 flex items-center justify-center border border-white/50 dark:border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="max-w-full max-h-full object-contain drop-shadow-md"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-center justify-center z-20">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5">
                          Open Live Demo <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-800">
                    <h3 className="font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className="tag-pill text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
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

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg text-center"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4 shadow-lg border-2 border-brand-500/20"
                    />
                  ) : (
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-display font-bold mx-auto mb-4 shadow-lg`}>
                      {member.initials}
                    </div>
                  )}
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl mb-1">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-4">{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map(s => <span key={s} className="tag-pill text-xs">{s}</span>)}
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
