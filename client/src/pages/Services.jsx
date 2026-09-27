import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Globe,
  ShoppingCart,
  Layers,
  Smartphone,
  RefreshCw,
  Search,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  Cpu,
  FileCode,
  Headphones,
  Check,
  Sparkles,
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Custom MERN & Full-Stack Web Apps',
    tagline: 'High-performance React & Node.js web applications',
    color: 'from-blue-600 to-indigo-600',
    desc: 'Bespoke web applications built from scratch with clean, modular architecture. Includes tailored admin control panels, role-based JWT authentication, interactive dashboards, and database models optimized for speed.',
    features: [
      'React.js & Tailwind CSS frontend',
      'Node.js & Express RESTful API backend',
      'MongoDB database architecture & indexing',
      'Custom Admin Panel & CRM dashboard',
      '95+ Google PageSpeed performance score',
      'Mobile-first responsive design across all viewports',
    ],
    deliverables: [
      'Full source code repository access',
      'Private live staging server previews',
      'Custom domain & SSL configuration',
      '30–60 days free bug-fix warranty',
    ],
    timeline: '2–3 Weeks',
    badge: 'Most Popular',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'High-Converting E-Commerce Platforms',
    tagline: 'Fast, secure online storefronts built to scale sales',
    color: 'from-teal-500 to-emerald-600',
    desc: 'Turn browsers into loyal customers with lightning-fast catalog search, smooth cart flows, automated Razorpay/Stripe checkout, order confirmation emails, and real-time inventory management.',
    features: [
      'Dynamic product catalog with smart filtering',
      'Integrated Razorpay / Stripe payment gateways',
      'Automated customer invoice PDF & email triggers',
      'Admin stock, revenue & orders dashboard',
      'Coupon codes, discounts & promotional engine',
      'Cart abandonment recovery & customer profiles',
    ],
    deliverables: [
      'Complete online store & admin CRM',
      'Payment gateway sandbox & live setup',
      'Product upload training & documentation',
      '60 days priority post-launch support',
    ],
    timeline: '3–4 Weeks',
    badge: 'Best Value',
  },
  {
    id: 'custom-software',
    icon: Cpu,
    title: 'Custom Billing, ERP & Business Engines',
    tagline: 'Tailored enterprise software & automated workflows',
    color: 'from-indigo-600 to-purple-600',
    desc: 'Automate manual operations with purpose-built software engines — including GST billing systems, school management portals, clinic CRM systems, and internal inventory trackers.',
    features: [
      'Custom GST invoice calculation & PDF generation',
      'Barcode scanner integration & pos workflows',
      'Role-based staff permissions & audit trails',
      'Automated daily/monthly revenue reports',
      'Offline-first sync & secure cloud backups',
      'Dedicated API endpoints & webhooks',
    ],
    deliverables: [
      'Tailored software system & database',
      'Comprehensive API & setup documentation',
      'Staff onboarding & walkthrough video',
      'Dedicated SLA maintenance plans',
    ],
    timeline: '3–6 Weeks',
    badge: 'Enterprise',
  },
  {
    id: 'android',
    icon: Smartphone,
    title: 'Native Android Application Development',
    tagline: 'Smooth, reliable mobile apps built with Kotlin & Java',
    color: 'from-orange-500 to-amber-600',
    desc: 'Native Android apps engineered for maximum performance, buttery smooth 60fps animations, Firebase cloud integrations, push notifications, and ready for Google Play Store publishing.',
    features: [
      'Native Android development with Kotlin / Java',
      'Firebase Authentication & Cloud Firestore',
      'FCM Push notification campaigns',
      'Offline data caching & local room DB',
      'REST API integration with background sync',
      'Google Play Store release compliance',
    ],
    deliverables: [
      'Signed release APK & App Bundle (AAB)',
      'Google Play Store listing assets & guidance',
      'Complete Android Studio project source',
      '30 days post-publish maintenance',
    ],
    timeline: '3–5 Weeks',
    badge: null,
  },
  {
    id: 'redesign',
    icon: RefreshCw,
    title: 'Website Redesign & Modernization',
    tagline: 'Transform sluggish legacy sites into modern React apps',
    color: 'from-brand-600 to-teal-500',
    desc: 'Upgrade outdated, slow WordPress sites or archaic templates into lightning-fast React platforms with zero downtime and preserved SEO authority.',
    features: [
      'Complete UI/UX overhaul to modern standards',
      'Migrate database & blog content seamlessly',
      'Zero downtime DNS cutover process',
      'Fix broken links & preserve 301 URL redirects',
      'Drastic load time reduction (<1.5s load times)',
      'Enhanced conversion-focused user journeys',
    ],
    deliverables: [
      'Modern React web platform',
      'SEO rank preservation audit',
      'Old-to-new URL redirect mapping',
      '30 days post-launch support',
    ],
    timeline: '1–2 Weeks',
    badge: null,
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Technical SEO & PageSpeed Optimization',
    tagline: 'Dominate organic search with 95+ Core Web Vitals',
    color: 'from-amber-500 to-yellow-500',
    desc: 'Gain organic customer traction with exhaustive technical SEO, structured JSON-LD schema markup, OpenGraph social previews, speed optimization, and Google Search Console indexing.',
    features: [
      'Core Web Vitals audit & 95+ score tuning',
      'Schema.org JSON-LD structured data injection',
      'Dynamic XML sitemap & robots.txt configuration',
      'Keyword research & meta tag optimization',
      'Image compression & Next-Gen WebP conversion',
      'Google Search Console & Analytics 4 setup',
    ],
    deliverables: [
      'Complete technical SEO implementation',
      'Google PageSpeed audit verification report',
      'Search Console indexing verification',
    ],
    timeline: '1 Week',
    badge: null,
  },
]

const serviceDifferentiators = [
  {
    icon: FileCode,
    title: '100% Full Code Ownership',
    desc: 'We never hold your code hostage. You receive the complete GitHub repository, databases, and deployment keys with zero proprietary lock-in.',
  },
  {
    icon: Headphones,
    title: 'Direct Founder Collaboration',
    desc: 'Talk directly with Ritik Pandey and Vivang Mishra on WhatsApp or Google Meet. No sales representatives, account managers, or translation lag.',
  },
  {
    icon: Zap,
    title: 'Handcrafted Without Bloat',
    desc: 'We build with modern React, Tailwind, and Node.js rather than heavy generic plugins, ensuring snappy load speeds and high Google rankings.',
  },
  {
    icon: ShieldCheck,
    title: 'Milestone Staging Approvals',
    desc: 'Review weekly progress on a private live staging link. You only clear final payments after verifying features on the live preview.',
  },
]

export default function Services() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Services - MBS TECHNOLOGIES | Web, App, E-Commerce & Custom Software</title>
        <meta
          name="description"
          content="Explore software engineering services: custom React website development, full-stack MERN portals, e-commerce stores, Android apps, and billing software."
        />
        <meta
          name="keywords"
          content="web development services, React developer, MERN stack development, e-commerce web design, custom ERP billing software, Android app development"
        />
        <link rel="canonical" href="https://mbswebtech.com/services" />
        <meta property="og:title" content="Services - MBS TECHNOLOGIES | Web, App, E-Commerce & Custom Software" />
        <meta
          property="og:description"
          content="Custom web development, full-stack MERN portals, e-commerce platforms, and Android apps by MBS TECHNOLOGIES."
        />
        <meta property="og:url" content="https://mbswebtech.com/services" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Core Capabilities</span>
            <h1 className="section-heading mt-3 mb-6">
              Engineering Services Built for <span className="gradient-text">Real Business Growth</span>
            </h1>
            <p className="section-subheading">
              From custom MERN stack web applications and e-commerce stores to native Android apps and enterprise billing software — handcrafted with performance, scalability, and clean code.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 lg:p-10 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-2xl transition-all group">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Main details */}
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg text-white group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                            {service.title}
                          </h3>
                          {service.badge && (
                            <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-800">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-semibold">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        Key Architectural Features
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2.5">
                        {service.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Deliverables Card */}
                  <div className="lg:col-span-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-5 sm:p-6 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                        What You Get
                      </div>
                      <div className="space-y-2 mb-5">
                        {service.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          Typical Sprint
                        </span>
                        <span className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400">
                          <Clock className="w-3.5 h-3.5" />
                          {service.timeline}
                        </span>
                      </div>
                      <Link
                        to="/contact"
                        className="btn-primary w-full justify-center text-sm py-3"
                      >
                        Discuss Requirements <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Why Clients Choose MBS ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="tag-pill mb-3">Why MBS TECHNOLOGIES</span>
            <h2 className="section-heading mt-2">
              The Engineering <span className="gradient-text">Difference</span>
            </h2>
            <p className="section-subheading mt-2">
              Why business founders and startups choose us over generic freelance platforms or slow agencies.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {serviceDifferentiators.map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-950/40 dark:to-teal-950/40 border border-brand-200 dark:border-brand-800 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400 shadow-sm">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Bottom Consultation CTA ─────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-500 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4">
                  Need a Technical Breakdown for Your Idea?
                </h2>
                <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Book a direct 1-on-1 technical discussion with Ritik and Vivang. We will analyze your feature scope and outline the ideal tech stack with zero obligations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <Zap className="w-5 h-5" /> Schedule Free Consultation
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/20 text-sm sm:text-base"
                  >
                    View Transparent Pricing <ArrowRight className="w-4 h-4" />
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
