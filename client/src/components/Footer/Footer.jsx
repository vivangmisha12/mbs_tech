import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'
import logo from '../../assets/logo_bg_remove.png'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Projects', href: '/portfolio' },
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
  { icon: Instagram, href: 'https://www.instagram.com/mbs.webtech?stkn=MW1mdDA5bTV1cGZoMA==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vivang-mishra-25a866295', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
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
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <img
                src={logo}
                alt="MBS TECHNOLOGIES Logo"
                className="w-9 h-9 object-contain rounded-xl group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-display font-bold text-white">
                MBS <span className="gradient-text">TECHNOLOGIES</span>
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
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <div className="flex flex-wrap items-center gap-x-1.5">
                  <a href="tel:+918468016194" className="hover:text-brand-400 transition-colors">
                    +91 8468016194
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href="tel:+919569881374" className="hover:text-brand-400 transition-colors">
                    +91 9569881374
                  </a>
                </div>
              </div>
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
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
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



        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MBS TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-brand-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-brand-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-slate-500 hover:text-brand-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
