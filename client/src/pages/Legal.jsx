import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck,
  FileText,
  Cookie,
  Lock,
  CheckCircle2,
  HelpCircle,
  Mail,
  ArrowRight,
  Clock,
  Sparkles,
  Phone,
} from 'lucide-react'
import PageWrapper, { FadeIn } from '../components/UI/PageWrapper'

const tabs = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: ShieldCheck,
    path: '/privacy',
    title: 'Privacy Policy',
    updated: 'Updated: September 2026',
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    icon: FileText,
    path: '/terms',
    title: 'Terms of Service',
    updated: 'Updated: September 2026',
  },
  {
    id: 'cookies',
    label: 'Cookie Policy',
    icon: Cookie,
    path: '/cookies',
    title: 'Cookie & Tracking Policy',
    updated: 'Updated: September 2026',
  },
]

export default function Legal() {
  const location = useLocation()
  const navigate = useNavigate()

  // Determine active tab from pathname (/privacy, /terms, /cookies) or default to 'privacy'
  const getInitialTab = () => {
    if (location.pathname.includes('terms')) return 'terms'
    if (location.pathname.includes('cookie')) return 'cookies'
    return 'privacy'
  }

  const [activeTab, setActiveTab] = useState(getInitialTab)

  useEffect(() => {
    setActiveTab(getInitialTab())
  }, [location.pathname])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    const target = tabs.find((t) => t.id === tabId)
    if (target) {
      navigate(target.path, { replace: true })
    }
  }

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <PageWrapper>
      <Helmet>
        <title>{`${currentTab.title} - MBS TECHNOLOGIES | Client Terms & Compliance`}</title>
        <meta
          name="description"
          content="Review MBS TECHNOLOGIES legal documents, terms of service for software development, 100% code ownership policies, client privacy protection, and cookies."
        />
        <link rel="canonical" href={`https://mbswebtech.com${currentTab.path}`} />
        <meta property="og:title" content={`${currentTab.title} - MBS TECHNOLOGIES`} />
        <meta
          property="og:description"
          content="Transparent legal agreements, intellectual property ownership, and privacy protections at MBS TECHNOLOGIES."
        />
        <meta property="og:url" content={`https://mbswebtech.com${currentTab.path}`} />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Legal & Compliance</span>
            <h1 className="section-heading mt-3 mb-6">
              Trust, Transparency & <span className="gradient-text">Protection</span>
            </h1>
            <p className="section-subheading">
              Clear, straightforward policies that protect your business, intellectual property, and privacy during our software development engagements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Dynamic Tabs & Main Document ───────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tab Selector */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 p-2 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex-1 min-w-[140px] sm:min-w-[180px] py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-md border border-slate-200/80 dark:border-slate-700'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <tab.icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </FadeIn>

          {/* Dynamic Content Card */}
          <FadeIn delay={0.1}>
            <div className="p-7 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              {/* Document Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                    {currentTab.title}
                  </h2>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-1">
                    {currentTab.updated}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                  <Lock className="w-3.5 h-3.5 text-brand-500" />
                  <span>Governing Law: India</span>
                </div>
              </div>

              {/* Tab Content Body */}
              <AnimatePresence mode="wait">
                {activeTab === 'privacy' && (
                  <motion.div
                    key="privacy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                  >
                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        1. Introduction & Overview
                      </h3>
                      <p>
                        MBS TECHNOLOGIES ("we", "our", or "us"), founded by Ritik Pandey and Vivang Mishra in Lucknow, Uttar Pradesh, India, is committed to safeguarding the privacy and proprietary data of our clients, website visitors, and platform users. This Privacy Policy outlines what information we collect, how it is utilized, and your rights.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        2. Information We Collect
                      </h3>
                      <p className="mb-3">
                        We collect information solely to provide custom software development services, project estimates, and technical communications:
                      </p>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                          <span>
                            <strong>Project Inquiries:</strong> Name, business name, email address, phone/WhatsApp number, project requirements, and budget estimates submitted through our consultation forms.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                          <span>
                            <strong>Project Assets:</strong> Brand logos, content, database models, and API keys shared strictly for developing and deploying your application.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                          <span>
                            <strong>Technical Metrics:</strong> Anonymized browser viewports, page load speeds, and device categories to optimize user experience.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        3. Non-Disclosure & Data Confidentiality
                      </h3>
                      <div className="p-4 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200/80 dark:border-brand-800/60 mb-3">
                        <p className="font-semibold text-brand-900 dark:text-brand-200 text-sm">
                          We never sell, rent, or monetize client data or business specifications to third parties. Ever.
                        </p>
                      </div>
                      <p>
                        All proprietary business ideas, database schemas, credentials, and source codes shared during project development are treated under strict confidentiality agreements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        4. Third-Party Infrastructure Services
                      </h3>
                      <p>
                        To deploy high-availability platforms, we utilize verified cloud and payment infrastructure providers (e.g. Vercel, Render, AWS, MongoDB Atlas, Razorpay, Stripe). These third parties process data under enterprise security compliance.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        5. Privacy Inquiries & Data Rights
                      </h3>
                      <p>
                        You may request the deletion, update, or export of any personal information or project data by contacting our lead developers directly at{' '}
                        <a
                          href="mailto:mbswebtechsolutions@gmail.com"
                          className="text-brand-600 dark:text-brand-400 font-bold underline"
                        >
                          mbswebtechsolutions@gmail.com
                        </a>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'terms' && (
                  <motion.div
                    key="terms"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                  >
                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        1. Software Development Agreements
                      </h3>
                      <p>
                        By engaging MBS TECHNOLOGIES for website development, MERN web applications, e-commerce stores, billing engines, or Android app development, you agree to the transparent development terms outlined herein.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        2. 100% Source Code & Intellectual Property Ownership
                      </h3>
                      <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-3">
                        <p className="font-semibold text-teal-900 dark:text-teal-200 text-sm">
                          Upon final payment settlement, 100% of custom source code, repository commits, databases, and digital assets belong exclusively to you.
                        </p>
                      </div>
                      <p>
                        There is zero proprietary vendor lock-in or recurring code licensing fees. You receive full administrative access to your GitHub repository and deployment servers.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        3. Milestone Payments & Staging Approvals
                      </h3>
                      <ul className="space-y-2 pl-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                          <span>
                            <strong>50% Initiation Advance:</strong> Required to commence UI wireframing, architecture setup, and initial sprint development.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                          <span>
                            <strong>50% Final Settlement:</strong> Due only after the client tests and approves the live staging demo on our testing servers prior to production domain cutover.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        4. 30–60 Days Post-Launch Warranty
                      </h3>
                      <p>
                        Every delivered software system includes 30 to 60 days of complimentary post-launch support covering bug fixes, server monitoring, DNS resolution assistance, and minor content adjustments.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        5. Third-Party Services & Hosting
                      </h3>
                      <p>
                        Ongoing domain registrations, third-party SMS/Email gateway credits, cloud server costs (AWS, Vercel, Hostinger), and Google Play Developer account fees are direct third-party expenses paid by the client without agency markups.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'cookies' && (
                  <motion.div
                    key="cookies"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                  >
                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        1. What Are Cookies?
                      </h3>
                      <p>
                        Cookies and local storage tokens are small data files stored in your web browser that allow web applications to remember your theme preferences, active sessions, and deliver fast load times.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        2. How MBS TECHNOLOGIES Uses Cookies
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 my-4">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                          <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                            Essential & Preference
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Remembers your Dark Mode / Light Mode toggle selection (`localStorage.darkMode`) for comfortable viewing across page transitions.
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                          <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                            Performance & Speed
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Caches static fonts and WebP media locally in your browser to maintain our 95+ Google Core Web Vitals speed benchmark.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
                        3. Managing Your Browser Cookies
                      </h3>
                      <p>
                        You can disable or delete cookies at any time through your browser settings (Chrome, Safari, Firefox, Edge). Note that disabling storage may reset your dark mode visual preference on each visit.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Support Banner */}
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base">
                    Have Questions Regarding Our Terms?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Speak directly with founders Ritik Pandey & Vivang Mishra.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 whitespace-nowrap"
                >
                  <Mail className="w-4 h-4" /> Contact Legal Support
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
