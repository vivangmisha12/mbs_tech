import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  HeartHandshake,
  CheckCircle2,
  Zap,
  ArrowRight,
  Clock,
  Shield,
  ShieldCheck,
  Lock,
  FileCode,
  Users,
  Headphones,
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Direct Scope Architecture & Discovery',
    color: 'from-blue-600 to-indigo-600',
    desc: 'You talk directly with our lead developers (Ritik & Vivang) — no middlemen or account managers. We analyze your business requirements, define technical architecture, and provide a transparent, fixed quote.',
    points: [
      '1-on-1 technical consultation',
      'Database schema & feature breakdown',
      'Fixed timeline & transparent pricing',
      'No hidden clauses or lock-in',
    ],
    duration: '1–2 Days',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Interactive UI/UX Prototype & Flow Design',
    color: 'from-purple-600 to-pink-600',
    desc: 'Before writing code, we create interactive high-fidelity prototypes and responsive layout mockups for your review. You test and refine the exact user flow on mobile and desktop.',
    points: [
      'Pixel-perfect responsive mockups',
      'Mobile-first navigation & UX flows',
      'Client review & feedback revisions',
      'Brand design system alignment',
    ],
    duration: '3–5 Days',
  },
  {
    num: '03',
    icon: Code2,
    title: 'Component-Driven Development & Live Staging',
    color: 'from-teal-500 to-emerald-600',
    desc: 'We build your application using modern, scalable technologies (React, Node.js, Express, MongoDB, or Android Kotlin). You get a private live staging URL to test features in real-time as they are built.',
    points: [
      'Clean, modular code architecture',
      'Private live staging link for review',
      'RESTful API & Database integration',
      'Weekly progress check-in calls',
    ],
    duration: '1–3 Weeks',
  },
  {
    num: '04',
    icon: TestTube,
    title: 'Multi-Device QA, Speed & Security Audit',
    color: 'from-orange-500 to-amber-600',
    desc: 'Every project goes through rigorous cross-device testing, responsive layout checks, 95+ Core Web Vitals performance tuning, and SSL/data security validations before going live.',
    points: [
      'Cross-browser & mobile viewport tests',
      '95+ Google PageSpeed optimization',
      'Form validation & API security checks',
      'Zero broken link & error validation',
    ],
    duration: '2–3 Days',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Zero-Downtime Deployment & Domain Setup',
    color: 'from-brand-600 to-teal-500',
    desc: 'We handle complete production deployment on high-speed cloud infrastructure (Vercel, AWS, or custom VPS), configure your custom domain DNS records, install SSL certificates, and set up analytics.',
    points: [
      'Cloud hosting & custom domain linking',
      'Automated SSL & HTTPS enforcement',
      'Google Search Console & Sitemap setup',
      'Uptime monitoring & error tracking',
    ],
    duration: '1–2 Days',
  },
  {
    num: '06',
    icon: HeartHandshake,
    title: 'Full Code Handover & 30 Days Free Support',
    color: 'from-violet-600 to-purple-700',
    desc: 'You receive 100% source code ownership transferred directly to your GitHub repository, admin panel walkthrough, and 30 days of dedicated post-launch support with zero extra charges.',
    points: [
      '100% full IP & repository transfer',
      'Admin training & documentation',
      '30-day dedicated post-launch support',
      'Continuous maintenance available',
    ],
    duration: '30 Days Included',
  },
]

const guarantees = [
  {
    icon: FileCode,
    title: '100% Code Ownership',
    desc: 'All source code, database structures, and assets belong entirely to you with zero vendor lock-in.',
  },
  {
    icon: Headphones,
    title: 'Direct Developer Access',
    desc: 'Collaborate 1-on-1 with Ritik and Vivang directly throughout your project sprint without bureaucratic delays.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed On-Time Delivery',
    desc: 'We adhere strictly to milestones and agreed deadlines, delivering tested staging builds on schedule.',
  },
  {
    icon: Zap,
    title: '30 Days Post-Launch Support',
    desc: 'Enjoy peace of mind with 30 days of complimentary bug fixes, tweaks, and operational assistance after go-live.',
  },
]

export default function Process() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Agile Development Process - MBS TECHNOLOGIES | How We Build & Deliver</title>
        <meta
          name="description"
          content="Discover MBS TECHNOLOGIES' transparent 6-step agile development process — from discovery to live staging previews and 100% source code handover."
        />
        <link rel="canonical" href="https://mbswebtech.com/process" />
        <meta property="og:title" content="Agile Development Process - MBS TECHNOLOGIES" />
        <meta
          property="og:description"
          content="Radical transparency, weekly milestones, staging previews, and complete code ownership."
        />
        <meta property="og:url" content="https://mbswebtech.com/process" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Transparent Workflow</span>
            <h1 className="section-heading mt-3 mb-6">
              How We Build & <span className="gradient-text">Deliver Your Tech</span>
            </h1>
            <p className="section-subheading">
              Our 6-step engineering process is designed for radical transparency, rapid milestones, live staging previews, and complete client code ownership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Steps Timeline ─────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.06}>
                <div className="flex gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-xl group">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg text-white group-hover:scale-105 transition-transform`}
                    >
                      <step.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40 px-2.5 py-0.5 rounded-full border border-brand-200/60 dark:border-brand-800/60">
                        STEP {step.num}
                      </span>
                      <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-brand-500" />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                      {step.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {step.points.map((pt) => (
                        <div key={pt} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Guarantees ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="tag-pill mb-3">Our Commitments</span>
            <h2 className="section-heading mt-2">
              Why Clients Trust <span className="gradient-text">Our Engineering</span>
            </h2>
            <p className="section-subheading mt-3">
              Built on integrity, direct collaboration, full code ownership, and zero operational friction.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <StaggerItem key={g.title}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-xl transition-all flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-950/40 dark:to-teal-950/40 border border-brand-200 dark:border-brand-800 flex items-center justify-center mb-4">
                    <g.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">{g.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{g.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">
              Ready to Kick Off <span className="gradient-text">Step 01?</span>
            </h2>
            <p className="section-subheading mb-8">
              Discuss your project directly with our technical team and receive a detailed architecture proposal within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base py-3.5 px-8">
                <Zap className="w-5 h-5" /> Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary text-base py-3.5 px-8">
                View Our Live Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}

