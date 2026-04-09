import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Star, Quote, Zap, Award, Users, ThumbsUp } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const testimonials = [
  {
    name: 'Sarah Johnson', role: 'CEO', company: 'TechStart Inc.', initials: 'SJ',
    color: 'from-brand-500 to-teal-500', rating: 5,
    text: 'MBS WebTech completely transformed our online presence. They built us a stunning SaaS dashboard that our users love. Lead generation tripled within just 2 months of launch. Absolutely incredible team to work with.',
    service: 'Business Website',
    result: '3x more leads',
  },
  {
    name: 'Michael Chen', role: 'Founder', company: 'EcoStore', initials: 'MC',
    color: 'from-teal-500 to-green-500', rating: 5,
    text: 'The e-commerce platform they built for us is exceptional. The design is gorgeous, it loads incredibly fast, and the admin panel is so easy to use. Our online sales increased by 180% after the launch. Worth every penny.',
    service: 'E-Commerce Store',
    result: '180% sales increase',
  },
  {
    name: 'Priya Sharma', role: 'Creative Director', company: 'PS Design Studio', initials: 'PS',
    color: 'from-purple-500 to-pink-500', rating: 5,
    text: 'My portfolio website is absolutely stunning. The animations, the layout, the way it showcases my work — I have received so many compliments and new client inquiries since launching. They understood my vision perfectly.',
    service: 'Portfolio Website',
    result: '10+ new clients',
  },
  {
    name: 'James Wilson', role: 'Owner', company: 'FoodDash', initials: 'JW',
    color: 'from-orange-500 to-red-500', rating: 5,
    text: 'The Android app they built for my restaurant chain is perfect. Real-time order tracking, beautiful UI, and our customers love it. We went from zero app orders to 300+ per day within a month of launch.',
    service: 'Android App',
    result: '300+ daily orders',
  },
  {
    name: 'Emma Rodriguez', role: 'Managing Partner', company: 'Rodriguez Law', initials: 'ER',
    color: 'from-slate-600 to-slate-800', rating: 5,
    text: 'They redesigned our entire website and the results speak for themselves. More professional, much faster, and we\'re getting 4x more consultation requests through the contact form. The team was professional throughout.',
    service: 'Website Redesign',
    result: '4x more inquiries',
  },
  {
    name: 'David Park', role: 'Founder', company: 'FitLife Market', initials: 'DP',
    color: 'from-yellow-500 to-orange-500', rating: 5,
    text: 'Building a marketplace from scratch seemed daunting but the MBS WebTech team made it straightforward. The platform is robust, scalable, and our vendors love the dashboard. Exceptional work and communication throughout.',
    service: 'Marketplace Platform',
    result: 'Full marketplace built',
  },
]

const stats = [
  { icon: Award, value: '50+', label: 'Projects Delivered' },
  { icon: Users, value: '40+', label: 'Happy Clients' },
  { icon: Star, value: '5.0/5', label: 'Average Rating' },
  { icon: ThumbsUp, value: '100%', label: 'Would Recommend' },
]

export default function Testimonials() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Testimonials - MBS WebTech | Client Reviews & Success Stories</title>
        <meta name="description" content="Read what our clients say about MBS WebTech. Real reviews from real businesses we've helped grow online." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Client Reviews</span>
            <h1 className="section-heading mt-3 mb-6">
              Don't Just Take <span className="gradient-text">Our Word</span> for It
            </h1>
            <p className="section-subheading">
              Real feedback from real businesses we've helped build and grow their digital presence.
            </p>
          </FadeIn>

          {/* Star display */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-2xl font-display font-bold text-slate-900 dark:text-white">5.0</span>
              <span className="text-slate-400">from 40+ clients</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-brand-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-display font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-xl relative flex flex-col"
                >
                  <Quote className="w-8 h-8 text-brand-100 dark:text-brand-900 absolute top-5 right-5" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(t.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                    "{t.text}"
                  </p>

                  {/* Result badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 text-green-700 dark:text-green-400 text-xs font-medium mb-4 w-fit">
                    <ThumbsUp className="w-3 h-3" />
                    Result: {t.result}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="tag-pill text-xs">{t.service}</span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Your Success Story <span className="gradient-text">Starts Here</span></h2>
            <p className="section-subheading mb-8">Join 40+ businesses that chose MBS WebTech to build their digital presence.</p>
            <Link to="/contact" className="btn-primary">
              <Zap className="w-5 h-5" /> Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
