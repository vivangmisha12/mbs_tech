import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Zap,
  Star,
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  Layers,
  ShieldCheck,
  Code2,
  Headphones,
  FileCode,
  HelpCircle,
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const plans = [
  {
    icon: Layers,
    name: 'Starter Business Site',
    desc: 'Clean, high-performance web presence for local businesses, consultants, and portfolio showcases.',
    price: '6,999',
    currency: '₹',
    badge: null,
    color: 'from-blue-500 to-indigo-600',
    features: [
      '5–7 custom responsive pages',
      'Modern React + Tailwind UI',
      'WhatsApp direct chat integration',
      'Contact lead form with instant alerts',
      '95+ Google PageSpeed score',
      'SEO meta tags & sitemap setup',
      'Free SSL & custom domain setup',
      '30 days post-launch support',
    ],
    notIncluded: ['Custom admin dashboard', 'Database user authentication', 'Online payment gateway'],
    cta: 'Get Started',
    delivery: '3–5 Days',
  },
  {
    icon: Globe,
    name: 'Dynamic MERN Web App',
    desc: 'Full-stack web application with dedicated admin dashboard, database, and role-based management.',
    price: '14,999',
    currency: '₹',
    badge: 'Most Popular',
    color: 'from-brand-600 to-teal-500',
    features: [
      'Full MERN Stack (React, Node, Mongo)',
      'Custom Admin Panel & CRM dashboard',
      'Role-based JWT Authentication',
      'Dynamic CRUD & database operations',
      'Inquiry & appointment booking flow',
      'Google Analytics & SEO optimization',
      'Private live staging server previews',
      '100% Source code handover',
      '60 days dedicated bug-fix support',
    ],
    notIncluded: ['Native mobile app (Android/iOS)'],
    cta: 'Start Project',
    delivery: '2–3 Weeks',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce Store',
    desc: 'Complete high-converting online storefront with automated checkout, payment gateway, and inventory.',
    price: '18,999',
    currency: '₹',
    badge: 'Best Value',
    color: 'from-teal-500 to-emerald-600',
    features: [
      'Full product catalog & smart search',
      'Razorpay / Stripe payment gateway',
      'Automated invoice & order emails',
      'Customer accounts & order tracking',
      'Admin stock & revenue dashboard',
      'Coupon codes & discount engine',
      'Mobile-optimized cart & checkout',
      'Speed-optimized media loading',
      '60 days priority support',
    ],
    notIncluded: ['Native mobile app (Android/iOS)'],
    cta: 'Build My Store',
    delivery: '3–4 Weeks',
  },
  {
    icon: Smartphone,
    name: 'Custom App & Enterprise',
    desc: 'Custom native Android applications, ERP billing software, and custom business workflow automation.',
    price: 'Custom',
    currency: '',
    badge: null,
    color: 'from-violet-600 to-purple-600',
    features: [
      'Native Android app (Kotlin / Java)',
      'Play Store publishing support',
      'Custom billing & invoice software',
      'Third-party API & webhook integrations',
      'High-throughput database architecture',
      'Direct 1-on-1 developer access',
      'Comprehensive API documentation',
      'Extended maintenance & SLA support',
    ],
    notIncluded: [],
    cta: 'Discuss Architecture',
    delivery: 'Custom Timeline',
  },
]

const inclusions = [
  {
    icon: FileCode,
    title: '100% Code Ownership',
    desc: 'Zero lock-in. Full GitHub repository and source code transferred directly to your organization.',
  },
  {
    icon: ShieldCheck,
    title: 'Milestone-Based Payments',
    desc: 'Pay 50% upfront to initiate sprint work, and the remaining 50% only after approving the live staging demo.',
  },
  {
    icon: Zap,
    title: 'No Hidden Fees',
    desc: 'Every deliverable and timeline is documented upfront. Hosting and domain setups are configured at direct cost.',
  },
  {
    icon: Headphones,
    title: 'Direct Developer Support',
    desc: 'Talk directly with Ritik & Vivang via WhatsApp and Google Meet throughout development and beyond.',
  },
]

const faqs = [
  {
    q: 'How does the payment process work?',
    a: 'We work on a fair, milestone-based model: 50% advance to initiate UI/UX wireframing and engineering sprints, and the final 50% balance only after you test and approve the live staging preview on our testing servers before final production launch.',
  },
  {
    q: 'Will I own the complete source code of my website or application?',
    a: 'Yes, 100%. Once final deployment is complete, we transfer the complete GitHub repository, database schemas, and all assets to your account. There are zero licensing fees or vendor lock-in.',
  },
  {
    q: 'What is included in the free post-launch support?',
    a: 'Every package includes 30 to 60 days of free post-launch support. This covers bug fixes, performance monitoring, DNS configuration assistance, and minor UI adjustments so your launch is smooth and worry-free.',
  },
  {
    q: 'Do you provide hosting and custom domain setup?',
    a: 'Yes! We configure your domain DNS records, set up automated SSL certificates, and deploy your project on fast cloud platforms (such as Vercel, Render, AWS, or Hostinger) with zero markup charges.',
  },
  {
    q: 'Can I scale or add new features to my website later?',
    a: 'Absolutely. We write clean, modular React and Node.js code with clean directory structures. You can easily add payment gateways, blogs, user portals, or new pages whenever your business grows.',
  },
]

export default function Pricing() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Pricing & Packages - MBS TECHNOLOGIES | Transparent Web & App Development</title>
        <meta
          name="description"
          content="Explore transparent pricing packages for custom web development, MERN stack web apps, e-commerce stores, and native Android apps by MBS TECHNOLOGIES."
        />
        <link rel="canonical" href="https://mbswebtech.com/pricing" />
        <meta property="og:title" content="Pricing & Packages - MBS TECHNOLOGIES" />
        <meta
          property="og:description"
          content="Transparent, fixed pricing for custom websites, MERN stack portals, e-commerce stores, and Android applications."
        />
        <meta property="og:url" content="https://mbswebtech.com/pricing" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Honest & Transparent</span>
            <h1 className="section-heading mt-3 mb-6">
              Clear Pricing, <span className="gradient-text">Zero Surprises</span>
            </h1>
            <p className="section-subheading">
              Fair, fixed-price packages tailored for businesses, startups, and enterprises. Direct developer collaboration with complete source code ownership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Pricing Cards ───────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan) => (
              <StaggerItem key={plan.name} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative rounded-3xl overflow-hidden border transition-all hover:shadow-2xl h-full flex flex-col ${
                    plan.badge === 'Most Popular'
                      ? 'border-brand-400 dark:border-brand-500 shadow-xl shadow-brand-500/15 ring-2 ring-brand-500/30'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`text-center py-2 text-xs font-bold text-white flex items-center justify-center gap-1.5 ${
                        plan.badge === 'Most Popular'
                          ? 'bg-gradient-to-r from-brand-600 to-brand-500'
                          : 'bg-gradient-to-r from-teal-600 to-emerald-600'
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 fill-white" />
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 bg-white dark:bg-slate-900 flex-1 flex flex-col">
                    {/* Header */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg text-white`}
                    >
                      <plan.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg sm:text-xl mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-5 leading-relaxed min-h-[3rem]">
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-baseline gap-1">
                        {plan.currency && (
                          <span className="text-xl font-bold text-slate-600 dark:text-slate-400">
                            {plan.currency}
                          </span>
                        )}
                        <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                          {plan.price}
                        </span>
                        {plan.price !== 'Custom' && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 ml-1 font-medium">
                            / project
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>Timeline: {plan.delivery}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        What's Included:
                      </p>
                      <div className="space-y-2.5">
                        {plan.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((f) => (
                          <div key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 dark:text-slate-600 line-through">
                            <div className="w-4 h-4 shrink-0 flex items-center justify-center mt-0.5">
                              <div className="w-2 h-0.5 bg-slate-300 dark:bg-slate-700 rounded" />
                            </div>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                        plan.badge === 'Most Popular'
                          ? 'btn-primary shadow-lg shadow-brand-500/20'
                          : 'btn-secondary'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Custom Project Note */}
          <FadeIn className="text-center mt-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200/80 dark:border-brand-800/60 text-brand-800 dark:text-brand-300 text-sm">
              <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400 shrink-0" />
              <span>Need a custom software solution or multi-vendor marketplace?</span>
              <Link to="/contact" className="font-bold underline ml-1 hover:text-brand-600">
                Request a Custom Scope Breakdown →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Included in All Plans ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="tag-pill mb-3">Standard Across All Projects</span>
            <h2 className="section-heading mt-2">
              Every Package Includes <span className="gradient-text">MBS Standards</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item) => (
              <FadeIn key={item.title}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-950/40 dark:to-teal-950/40 border border-brand-200 dark:border-brand-800 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="tag-pill mb-3">Clear Answers</span>
            <h2 className="section-heading mt-2">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.06}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors">
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2.5 flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-500 p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4">
                  Have a Specific Requirement in Mind?
                </h2>
                <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  Send us your feature checklist or rough wireframe. Ritik and Vivang will review it and provide a free timeline and architectural plan within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    <Zap className="w-5 h-5" /> Request Detailed Quote
                  </Link>
                  <Link
                    to="/process"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/20"
                  >
                    Explore Our Process <ArrowRight className="w-4 h-4" />
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
