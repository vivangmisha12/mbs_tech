import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Zap,
  Clock,
  CheckCircle2,
  Instagram,
  ArrowRight,
  ShieldCheck,
  Headphones,
  FileCode,
  Calendar,
} from 'lucide-react'
import toast from 'react-hot-toast'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Direct',
    value: '+91 8468016194 / +91 9569881374',
    numbers: [
      { label: '+91 8468016194', href: 'tel:+918468016194' },
      { label: '+91 9569881374', href: 'tel:+919569881374' },
    ],
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp Quick Chat',
    value: '+91 8468016194 / +91 9569881374',
    whatsapp: true,
    numbers: [
      { label: '+91 8468016194', href: 'https://wa.me/918468016194' },
      { label: '+91 9569881374', href: 'https://wa.me/919569881374' },
    ],
  },
  {
    icon: Mail,
    label: 'Official Email',
    value: 'mbswebtechsolutions@gmail.com',
    href: 'mailto:mbswebtechsolutions@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@mbs.webtech',
    href: 'https://www.instagram.com/mbs.webtech?stkn=MW1mdDA5bTV1cGZoMA==',
    instagram: true,
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: 'Lucknow, Uttar Pradesh, India',
    href: null,
  },
]

const services = [
  'Custom MERN Web Application',
  'E-Commerce Online Store',
  'Billing / ERP Software Engine',
  'Native Android Mobile App',
  'Starter Business & Portfolio Website',
  'Website Redesign & Speed Optimization',
  'Technical SEO & Digital Marketing',
  'Other Custom Project',
]

const budgetRanges = [
  '₹6,000 – ₹10,000 (Starter Website)',
  '₹10,000 – ₹20,000 (Dynamic Web App / Store)',
  '₹20,000 – ₹50,000 (Custom Enterprise Portal)',
  '₹50,000+ (Comprehensive Mobile + Web Ecosystem)',
  'Need Consultation / Custom Quote',
]

const timelineOptions = [
  'Urgent (Within 1–2 weeks)',
  'Standard (2–4 weeks)',
  'Flexible (1–2 months)',
]

const OWNER_EMAIL = 'mbswebtechsolutions@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }

    const subject = encodeURIComponent(`New Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Service: ${form.service || 'Not selected'}`,
        `Budget: ${form.budget || 'Not selected'}`,
        `Timeline: ${form.timeline || 'Not selected'}`,
        '',
        'Project Scope & Message:',
        form.message,
      ].join('\n')
    )
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(OWNER_EMAIL)}&su=${subject}&body=${body}`

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', phone: '', service: '', budget: '', timeline: '', message: '' })
        toast.success("Message sent! We'll get back to you within 2–4 hours.")
      } else {
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      if ((error.message || '').toLowerCase().includes('email service is not configured')) {
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')
        toast.success('Opened Gmail compose with your details. Click Send to complete.')
        setLoading(false)
        return
      }

      toast.error(error.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Us - MBS TECHNOLOGIES | Start Your Web or App Project</title>
        <meta
          name="description"
          content="Get in touch with MBS TECHNOLOGIES for a free project consultation and architecture breakdown. Call +91 8468016194 / +91 9569881374 or send an inquiry."
        />
        <meta
          name="keywords"
          content="contact MBS TECHNOLOGIES, hire web developer, hire React developer, custom web design quote, software development inquiry"
        />
        <link rel="canonical" href="https://mbswebtech.com/contact" />
        <meta property="og:title" content="Contact Us - MBS TECHNOLOGIES | Start Your Web or App Project" />
        <meta
          property="og:description"
          content="Get in touch with MBS TECHNOLOGIES for a free project consultation and timeline estimate."
        />
        <meta property="og:url" content="https://mbswebtech.com/contact" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Direct Communication</span>
            <h1 className="section-heading mt-3 mb-6">
              Let's Architect Your <span className="gradient-text">Digital Solution</span>
            </h1>
            <p className="section-subheading">
              Have a project requirement or new concept? Talk directly with our technical team (Ritik & Vivang) and receive a tailored proposal within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Main Content Grid ───────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Channels & Next Steps */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all shadow-sm"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          item.whatsapp
                            ? 'bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800'
                            : item.instagram
                            ? 'bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800'
                            : 'bg-brand-50 dark:bg-brand-950/50 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </div>
                        {item.numbers ? (
                          <div className="flex flex-wrap items-center gap-x-2 text-sm font-semibold">
                            <a
                              href={item.numbers[0].href}
                              target={item.whatsapp ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className={`hover:underline ${
                                item.whatsapp
                                  ? 'text-green-600 dark:text-green-400'
                                  : 'text-slate-900 dark:text-white hover:text-brand-600'
                              }`}
                            >
                              {item.numbers[0].label}
                            </a>
                            <span className="text-slate-300 dark:text-slate-700">/</span>
                            <a
                              href={item.numbers[1].href}
                              target={item.whatsapp ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className={`hover:underline ${
                                item.whatsapp
                                  ? 'text-green-600 dark:text-green-400'
                                  : 'text-slate-900 dark:text-white hover:text-brand-600'
                              }`}
                            >
                              {item.numbers[1].label}
                            </a>
                          </div>
                        ) : item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`text-sm font-semibold hover:underline block truncate ${
                              item.instagram
                                ? 'text-pink-600 dark:text-pink-400'
                                : 'text-brand-600 dark:text-brand-400'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Fast Response Guarantee */}
              <FadeIn delay={0.1}>
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-50 dark:bg-brand-950/40 border border-brand-200/80 dark:border-brand-800/60">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    <h4 className="font-display font-bold text-brand-900 dark:text-brand-200 text-sm sm:text-base">
                      2–4 Hour Response Guarantee
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-800/80 dark:text-brand-300/80 leading-relaxed">
                    We value your time. Inquiries submitted during business hours receive technical review within 2–4 hours.
                  </p>
                </div>
              </FadeIn>

              {/* What Happens Next */}
              <FadeIn delay={0.15}>
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-4">
                    What Happens Next?
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Technical Review',
                        detail: 'Ritik & Vivang analyze your requirements within 24 hours.',
                      },
                      {
                        title: '1-on-1 Consultation',
                        detail: 'Quick Google Meet or WhatsApp call to align on architecture & scope.',
                      },
                      {
                        title: 'Milestone Proposal',
                        detail: 'Fixed-price quote with clear deliverables and live staging roadmap.',
                      },
                      {
                        title: 'Sprint Kickoff',
                        detail: 'UI prototyping starts immediately upon 50% milestone confirmation.',
                      },
                    ].map((step, i) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                            {step.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Comprehensive Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-10 sm:p-14 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xl"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 flex items-center justify-center mx-auto mb-6 text-green-600 dark:text-green-400 shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
                      Project Inquiry Received!
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for reaching out to MBS TECHNOLOGIES. Ritik Pandey and Vivang Mishra will review your technical requirements and respond with a structured plan within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Submit Another Requirement
                    </button>
                  </motion.div>
                ) : (
                  <div className="p-7 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                      Project Specification Form
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6">
                      Fill in the technical details below for an accurate timeline & architecture estimate.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. Raj Tiwari"
                            className="input-field text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="name@company.com"
                            className="input-field text-sm"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Phone / WhatsApp (Optional)
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="input-field text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Service Category
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="input-field text-sm"
                          >
                            <option value="">Select service required...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Estimated Budget
                          </label>
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="input-field text-sm"
                          >
                            <option value="">Select budget range...</option>
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                            Expected Timeline
                          </label>
                          <select
                            name="timeline"
                            value={form.timeline}
                            onChange={handleChange}
                            className="input-field text-sm"
                          >
                            <option value="">Select preferred timeline...</option>
                            {timelineOptions.map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                          Project Description & Scope <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe your project goals, key features, reference websites, or target launch deadline..."
                          className="input-field resize-none text-sm leading-relaxed"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 text-sm sm:text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-brand-500/20"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Transmitting Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" /> Submit Project Specification
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-slate-400 dark:text-slate-500 mt-2">
                        100% confidential. We respect your intellectual property and never share contact details.
                      </p>
                    </form>
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
