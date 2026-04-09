import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'Web Development', href: '/services' },
    { label: 'E-Commerce', href: '/services' },
    { label: 'Portfolio Sites', href: '/services' },
    { label: 'Android Apps', href: '/services' },
    { label: 'SEO & Optimization', href: '/services' },
  ],
  resources: [
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                MBS <span className="gradient-text">WebTech</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building modern, high-performance websites and apps that help businesses grow online. Quality code, beautiful design, real results.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="mailto:mbswebtechsolutions@gmail.com" className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors">
                <Mail className="w-4 h-4 text-brand-500" />
                mbswebtechsolutions@gmail.com
              </a>
              <a href="tel:+91 8468016194" className="flex items-center gap-3 text-sm hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4 text-brand-500" />
                +91 8468016194
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-brand-500" />
                Lucknow, Uttar Pradesh
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay in the loop</h4>
              <p className="text-slate-400 text-sm">Get the latest web dev tips and updates from our blog.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
              <button className="btn-primary py-2.5 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MBS WebTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-brand-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
