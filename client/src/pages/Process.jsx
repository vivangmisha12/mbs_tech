import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Code2, TestTube, Rocket, HeartHandshake, CheckCircle2, Zap, ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const steps = [
  {
    num: '01', icon: MessageSquare, title: 'Requirement Discussion',
    color: 'from-blue-500 to-brand-600',
    desc: 'We start with a deep-dive consultation to understand your business, goals, target audience, and technical requirements. No assumptions — just thorough understanding.',
    points: ['Business goals analysis', 'Target audience research', 'Technical requirements', 'Timeline & budget planning'],
    duration: '1–2 days',
  },
  {
    num: '02', icon: PenTool, title: 'Planning & UI Design',
    color: 'from-purple-500 to-pink-500',
    desc: 'Our designers create wireframes and high-fidelity mockups for your approval before writing a single line of code. You see exactly what you\'re getting.',
    points: ['Wireframe creation', 'UI/UX design mockups', 'Client review & revisions', 'Design system setup'],
    duration: '3–5 days',
  },
  {
    num: '03', icon: Code2, title: 'Development',
    color: 'from-teal-500 to-green-500',
    desc: 'Our developers build your project using modern technologies and best practices. We provide regular updates throughout the development phase.',
    points: ['Frontend development', 'Backend API development', 'Database setup', 'Weekly progress updates'],
    duration: '1–4 weeks',
  },
  {
    num: '04', icon: TestTube, title: 'Testing & QA',
    color: 'from-orange-500 to-red-500',
    desc: 'Comprehensive testing across all devices, browsers, and use cases. We hunt down every bug before your website goes live.',
    points: ['Cross-browser testing', 'Mobile responsiveness', 'Performance testing', 'Security audit'],
    duration: '2–3 days',
  },
  {
    num: '05', icon: Rocket, title: 'Deployment',
    color: 'from-brand-600 to-teal-500',
    desc: 'Smooth, zero-downtime deployment to production. We handle domain setup, SSL certificates, CDN configuration, and monitoring.',
    points: ['Server setup & config', 'Domain & SSL setup', 'Performance optimization', 'Analytics integration'],
    duration: '1–2 days',
  },
  {
    num: '06', icon: HeartHandshake, title: 'Support & Maintenance',
    color: 'from-violet-500 to-purple-600',
    desc: 'We don\'t disappear after launch. Every project includes post-launch support, and we offer ongoing maintenance packages to keep your site running smoothly.',
    points: ['1 month free support', 'Bug fix guarantee', 'Content updates', 'Performance monitoring'],
    duration: 'Ongoing',
  },
]

const benefits = [
  { icon: CheckCircle2, title: 'Zero Surprises', desc: 'Transparent pricing and clear milestones mean no unexpected costs or delays.' },
  { icon: Clock, title: 'On-Time Every Time', desc: 'Our structured process has delivered 100% of projects on or before deadline.' },
  { icon: Shield, title: 'Quality Guaranteed', desc: 'We don\'t ship until we\'re proud of what we\'ve built.' },
  { icon: TrendingUp, title: 'Results Focused', desc: 'Every decision is made with your business outcomes in mind.' },
]

export default function Process() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Our Process - MBS WebTech | How We Work</title>
        <meta name="description" content="Discover MBS WebTech's proven 6-step development process that ensures quality, transparency, and on-time delivery." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">How We Work</span>
            <h1 className="section-heading mt-3 mb-6">
              A Process Built for <span className="gradient-text">Excellence</span>
            </h1>
            <p className="section-subheading">
              Our 6-step development process is designed to deliver exceptional results while keeping you informed and in control at every stage.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div className="flex gap-6">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-200 to-teal-200 dark:from-brand-800 dark:to-teal-800 mt-3" style={{ minHeight: '40px' }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <div className="font-mono text-xs text-brand-500 font-medium">STEP {step.num}</div>
                      <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{step.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.points.map(pt => (
                        <div key={pt} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          {pt}
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

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-heading">Why Our Process <span className="gradient-text">Works</span></h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-3">
                    <b.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-white mb-2">{b.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Ready to Start?</h2>
            <p className="section-subheading mb-8">Let's kick off Step 1 with a free consultation about your project.</p>
            <Link to="/contact" className="btn-primary">
              <Zap className="w-5 h-5" /> Book Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
