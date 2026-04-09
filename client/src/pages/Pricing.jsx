import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Star, ArrowRight, Globe, ShoppingCart, Smartphone, Layers } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const plans = [
  {
    icon: Layers,
    name: 'Starter Website',
    desc: 'Perfect for freelancers and small businesses just getting started online.',
    price: '5999',
    currency: '₹',
    badge: null,
    color: 'from-blue-500 to-brand-600',
    features: [
      '5–7 custom pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      'Social media links',
      '1 month support',
      'React + Node.js',
      'Fast hosting setup',
    ],
    notIncluded: ['CMS / Admin panel', 'E-commerce features', 'Custom integrations'],
    cta: 'Get Started',
    delivery: '1–2 weeks',
  },
  {
    icon: Globe,
    name: 'Business Website',
    desc: 'For growing businesses that need a professional, feature-rich online presence.',
    price: '13,999',
    currency: '₹',
    badge: 'Most Popular',
    color: 'from-brand-600 to-teal-500',
    features: [
      '10–15 custom pages',
      'CMS / Admin panel',
      'Blog system',
      'Advanced SEO setup',
      'Google Analytics',
      'Contact & lead forms',
      'MERN stack',
      '3 months support',
      'Performance optimized',
      'SSL & deployment',
    ],
    notIncluded: ['E-commerce features', 'Mobile app'],
    cta: 'Start Project',
    delivery: '2–4 weeks',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce Store',
    desc: 'A complete online store built to convert visitors into paying customers.',
    price: '15,999',
    currency: '₹',
    badge: 'Best Value',
    color: 'from-teal-500 to-green-500',
    features: [
      'Full product catalog',
      'Cart & checkout',
      'Payment gateway',
      'Order management',
      'Customer accounts',
      'Admin dashboard',
      'Inventory tracking',
      'Email notifications',
      'SEO optimized',
      '3 months support',
    ],
    notIncluded: ['Mobile app'],
    cta: 'Build My Store',
    delivery: '3–6 weeks',
  },
  {
    icon: Smartphone,
    name: 'Custom App Dev',
    desc: 'Fully custom solutions tailored to your unique business requirements.',
    price: 'Custom',
    currency: '',
    badge: null,
    color: 'from-orange-500 to-red-500',
    features: [
      'Custom Android app',
      'Full-stack web app',
      'API development',
      'Third-party integrations',
      'Dedicated project manager',
      'Design system',
      'Documentation',
      'Extended support',
      'Scalable architecture',
      'Priority support',
    ],
    notIncluded: [],
    cta: 'Discuss Project',
    delivery: 'Custom timeline',
  },
]

const faqs = [
  { q: 'Do you offer payment plans?', a: 'Yes! We offer a 50% upfront / 50% on completion payment structure for all projects. For larger projects, we can arrange milestone-based payments.' },
  { q: 'What happens after the free support period?', a: 'We offer affordable monthly maintenance plans starting at $99/month that cover updates, security patches, and minor content changes.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. Our code is built to scale, so upgrading from a starter site to a full e-commerce platform is straightforward.' },
  { q: 'Are there any hidden costs?', a: 'Never. We provide a detailed quote upfront covering everything. Third-party costs (hosting, domain, payment gateway fees) are clearly listed separately.' },
]

export default function Pricing() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Pricing - MBS WebTech | Transparent Web Development Pricing</title>
        <meta name="description" content="Clear, transparent pricing for website development, e-commerce, and app development. No hidden fees." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Transparent Pricing</span>
            <h1 className="section-heading mt-3 mb-6">
              Simple, Honest <span className="gradient-text">Pricing</span>
            </h1>
            <p className="section-subheading">
              No hidden fees. No surprise bills. Just clear, fair pricing for quality digital work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`relative rounded-2xl overflow-hidden border transition-all hover:shadow-2xl h-full flex flex-col ${
                    plan.badge === 'Most Popular'
                      ? 'border-brand-400 dark:border-brand-500 shadow-xl shadow-brand-500/20'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`text-center py-2 text-xs font-bold text-white ${
                      plan.badge === 'Most Popular' ? 'bg-gradient-to-r from-brand-600 to-brand-500' : 'bg-gradient-to-r from-teal-600 to-teal-500'
                    }`}>
                      {plan.badge === 'Most Popular' && <Star className="w-3 h-3 inline mr-1 fill-white" />}
                      {plan.badge}
                    </div>
                  )}

                  <div className="p-6 bg-white dark:bg-slate-800 flex-1 flex flex-col">
                    {/* Header */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-1">{plan.name}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 leading-relaxed">{plan.desc}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-medium text-slate-400">{plan.currency}</span>
                        <span className="text-4xl font-display font-bold gradient-text">{plan.price}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        Delivered in {plan.delivery}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-5">
                      <div className="space-y-2">
                        {plan.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                            {f}
                          </div>
                        ))}
                        {plan.notIncluded.map(f => (
                          <div key={f} className="flex items-center gap-2 text-sm text-slate-400 line-through">
                            <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center">
                              <div className="w-2 h-0.5 bg-slate-300 rounded" />
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                        plan.badge === 'Most Popular'
                          ? 'btn-primary justify-center'
                          : 'btn-secondary justify-center'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="w-4 h-4 inline ml-1" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Custom note */}
          <FadeIn className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm">
              <Zap className="w-4 h-4" />
              All prices are starting rates. Complex projects may vary. Get a precise quote for free.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-heading">Pricing <span className="gradient-text">FAQs</span></h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <h4 className="font-display font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-500 p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="text-3xl font-display font-bold mb-4">Get a Free Custom Quote</h2>
                <p className="text-white/80 mb-6">Tell us about your project and we'll provide a detailed proposal within 24 hours.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5"
                >
                  <Zap className="w-5 h-5" /> Request Free Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
