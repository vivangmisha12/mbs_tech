import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Globe, ShoppingCart, Layers, Smartphone, RefreshCw, Search,
  CheckCircle2, ArrowRight, Zap, Clock, Shield, TrendingUp
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Website Development',
    tagline: 'Modern, fast-loading websites',
    color: 'from-blue-500 to-brand-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-800',
    desc: 'We build professional, lightning-fast websites using React, Next.js, and modern web technologies. Every website we create is optimized for performance, SEO, and conversions.',
    features: ['React / Next.js frontend', 'Node.js backend API', 'MongoDB database', 'Responsive for all devices', 'SEO optimized', 'Performance score 95+'],
    deliverables: ['Custom design & development', 'CMS integration', '1 month free support'],
    timeline: '2–4 weeks',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    tagline: 'Stores that sell 24/7',
    color: 'from-teal-500 to-green-500',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-100 dark:border-teal-800',
    desc: 'Full-featured online stores with product management, cart, secure payments, and order tracking. Built to convert visitors into customers and scale with your business.',
    features: ['Product catalog & management', 'Cart & checkout flow', 'Payment gateway integration', 'Order management', 'Inventory tracking', 'Analytics dashboard'],
    deliverables: ['Full e-commerce platform', 'Admin panel', 'Payment integration'],
    timeline: '3–6 weeks',
  },
  {
    id: 'portfolio',
    icon: Layers,
    title: 'Portfolio Websites',
    tagline: 'Showcase your best work',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-800',
    desc: 'Beautiful, memorable portfolio websites that make you stand out. Designed to attract clients and showcase your skills or creative work in the best light.',
    features: ['Custom design', 'Project showcase gallery', 'Animated interactions', 'Contact form', 'Blog integration', 'Mobile optimized'],
    deliverables: ['Unique portfolio design', 'Content management', 'Domain & hosting setup'],
    timeline: '1–2 weeks',
  },
  {
    id: 'android',
    icon: Smartphone,
    title: 'Android App Development',
    tagline: 'Native apps for Android',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-100 dark:border-orange-800',
    desc: 'Native Android applications built with Kotlin for maximum performance. From concept to Play Store — we handle the full development lifecycle.',
    features: ['Native Android (Kotlin)', 'Firebase backend', 'Push notifications', 'Offline functionality', 'Google Play Store upload', 'API integration'],
    deliverables: ['APK & Play Store listing', 'Source code', 'App documentation'],
    timeline: '4–8 weeks',
  },
  {
    id: 'redesign',
    icon: RefreshCw,
    title: 'Website Redesign',
    tagline: 'Modernize your online presence',
    color: 'from-brand-600 to-teal-500',
    bg: 'bg-brand-50 dark:bg-brand-900/20',
    border: 'border-brand-100 dark:border-brand-800',
    desc: 'Transform your outdated website into a modern, high-converting platform. We keep what works and redesign what doesn\'t — with zero downtime migration.',
    features: ['Full visual redesign', 'Performance optimization', 'Mobile responsiveness', 'SEO improvement', 'Content migration', 'Zero downtime'],
    deliverables: ['Redesigned website', 'Performance report', 'Migration support'],
    timeline: '2–4 weeks',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Setup & Deployment',
    tagline: 'Rank higher, get found',
    color: 'from-yellow-500 to-orange-500',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-100 dark:border-yellow-800',
    desc: 'Complete technical SEO setup including structured data, meta tags, sitemap, robots.txt, and Core Web Vitals optimization to get your site ranking on Google.',
    features: ['Technical SEO audit', 'Meta tags & OpenGraph', 'Sitemap & robots.txt', 'Structured data (JSON-LD)', 'Core Web Vitals fix', 'Google Analytics setup'],
    deliverables: ['SEO implementation', 'Performance report', 'Monthly tracking setup'],
    timeline: '1–2 weeks',
  },
]

const trustPoints = [
  { icon: Clock, title: 'On-Time Delivery', desc: '100% of our projects are delivered on or before the agreed deadline.' },
  { icon: Shield, title: 'Secure Code', desc: 'Security best practices built into every project from day one.' },
  { icon: TrendingUp, title: 'Scalable Architecture', desc: 'Built to grow with your business — no rebuilding required.' },
  { icon: Zap, title: 'Fast Performance', desc: '95+ PageSpeed scores on all projects we deliver.' },
]

export default function Services() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Services - MBS WebTech | Web Development, E-Commerce & More</title>
        <meta name="description" content="Explore our professional services: website development, e-commerce, portfolio sites, Android apps, redesign & SEO." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">What We Do</span>
            <h1 className="section-heading mt-3 mb-6">
              Full-Service Digital <span className="gradient-text">Solutions</span>
            </h1>
            <p className="section-subheading">
              From landing pages to complex web apps — we have the expertise to bring your digital vision to life with quality, speed, and attention to detail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div className={`rounded-2xl border ${service.border} ${service.bg} p-8 hover:shadow-xl transition-all`}>
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shrink-0`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">{service.title}</h3>
                          <p className="text-brand-600 dark:text-brand-400 text-sm font-medium">{service.tagline}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{service.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-100 dark:border-slate-700">
                      <div className="mb-4">
                        <div className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Deliverables</div>
                        {service.deliverables.map(d => (
                          <div key={d} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 mb-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                            {d}
                          </div>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xs font-medium text-slate-400 uppercase tracking-wide">Timeline</div>
                          <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
                            <Clock className="w-3.5 h-3.5" />
                            {service.timeline}
                          </div>
                        </div>
                        <Link to="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                          Get a Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-heading">Why Clients <span className="gradient-text">Trust Us</span></h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((p) => (
              <StaggerItem key={p.title}>
                <div className="text-center p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-3">
                    <p.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white mb-2">{p.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-500 p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="text-3xl font-display font-bold mb-4">Not Sure Which Service You Need?</h2>
                <p className="text-white/80 mb-6">Book a free 30-minute consultation. We'll analyze your needs and recommend the best solution.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <Zap className="w-5 h-5" />
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
