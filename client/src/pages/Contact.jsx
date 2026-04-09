import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageSquare, Send, Zap, Clock, CheckCircle2 } from 'lucide-react'
import toast from 'react-hot-toast'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mbswebtechsolutions@gmail.com', href: 'mailto:mbswebtechsolutions@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8468016194', href: 'tel:+91 8468016194' },
  {
    icon: MessageSquare, label: 'WhatsApp', value: '+91 8468016194', href: 'https://wa.me/918468016194',
    whatsapp: true,
  },
  { icon: MapPin, label: 'Location', value: 'Lucknow, Uttar Pradesh', href: null },
]

const services = ['Website Development', 'E-Commerce Store', 'Portfolio Website', 'Android App', 'Website Redesign', 'SEO Setup', 'Other']
const OWNER_EMAIL = 'mbswebtechsolutions@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
        '',
        'Message:',
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
        setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
        toast.success('Message sent! We\'ll get back to you within 24 hours.')
      } else {
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      if ((error.message || '').toLowerCase().includes('email service is not configured')) {
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')
        toast.success('Opened Gmail compose with your details. Please click Send to complete.')
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
        <title>Contact Us - MBS WebTech | Get a Free Project Quote</title>
        <meta name="description" content="Contact MBS WebTech for a free consultation. Tell us about your project and get a detailed quote within 24 hours." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Get in Touch</span>
            <h1 className="section-heading mt-3 mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h1>
            <p className="section-subheading">
              Ready to start your project? Tell us about your vision and we'll get back to you with a detailed proposal within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left — info */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn>
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.whatsapp ? 'bg-green-50 dark:bg-green-900/20' : 'bg-brand-50 dark:bg-brand-900/20'
                      }`}>
                        <item.icon className={`w-5 h-5 ${item.whatsapp ? 'text-green-600 dark:text-green-400' : 'text-brand-600 dark:text-brand-400'}`} />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-400 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.whatsapp ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`font-medium text-sm hover:underline ${
                              item.whatsapp ? 'text-green-600 dark:text-green-400' : 'text-brand-600 dark:text-brand-400'
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-sm text-slate-700 dark:text-slate-300">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Response time */}
              <FadeIn delay={0.1}>
                <div className="p-5 rounded-xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    <h4 className="font-semibold text-brand-700 dark:text-brand-300">Fast Response</h4>
                  </div>
                  <p className="text-sm text-brand-600/80 dark:text-brand-400/80">
                    We typically respond within <strong>2–4 hours</strong> on business days. For urgent projects, message us on WhatsApp.
                  </p>
                </div>
              </FadeIn>

              {/* What to expect */}
              <FadeIn delay={0.15}>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What Happens Next?</h4>
                  <div className="space-y-3">
                    {[
                      ['We review your message', 'within 24 hours'],
                      ['Free consultation call', 'to discuss your project'],
                      ['Detailed proposal', 'with timeline & pricing'],
                      ['Project kickoff', 'once you approve'],
                    ].map(([step, detail], i) => (
                      <div key={step} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{step}</div>
                          <div className="text-xs text-slate-400">{detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Map placeholder */}
              <FadeIn delay={0.2}>
                <div className="h-40 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-900/20 dark:to-teal-900/20 border border-brand-100 dark:border-brand-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-brand-500 mx-auto mb-2" />
                    <div className="text-sm font-medium text-brand-700 dark:text-brand-300">Software Agency</div>
                    <div className="text-xs text-brand-500/70">Lucknow, Uttar Pradesh</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-full flex items-center justify-center p-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-center"
                  >
                    <div>
                      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-6">
                        Thanks for reaching out! We'll review your project details and get back to you within 24 hours with a detailed proposal.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-secondary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1">Tell Us About Your Project</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Your Name"
                            className="input-field"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter Your Email"
                            className="input-field"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Phone (optional)
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Your Phone Number"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Service Needed
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="input-field"
                          >
                            <option value="">Select a service...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Approximate Budget
                        </label>
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select budget range...</option>
                          <option value="under-6000">Under ₹6,000</option>
                          <option value="5000-10000">₹5,000 – ₹10,000</option>
                          <option value="10000-12000">₹10,000 – ₹12,000</option>
                          <option value="12000-15000">₹12,000 – ₹15,000</option>
                          <option value="15000+">₹15,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          className="input-field resize-none"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-slate-400">
                        By submitting, you agree to our Privacy Policy. We'll never share your info.
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
