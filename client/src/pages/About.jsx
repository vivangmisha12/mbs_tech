import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Code2,
  Terminal,
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  Globe,
  FileCode,
  Headphones,
  Check,
} from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'
import TechStackMarquee from '../components/UI/TechStackMarquee'
import ritikImg from '../assets/ritik_pandey.jpg'
import vivangImg from '../assets/vivang_mishra.jpg'

const engineeringPrinciples = [
  {
    icon: Terminal,
    title: 'Direct Founder Engineering',
    desc: 'You work 1-on-1 directly with Ritik Pandey & Vivang Mishra. No middlemen, account managers, or communication breakdown.',
  },
  {
    icon: Zap,
    title: 'Zero Bloat & 95+ PageSpeed',
    desc: 'We build lightweight, modern React & Node.js architectures tailored specifically to your needs — zero bloated plugins or slow templates.',
  },
  {
    icon: FileCode,
    title: '100% Full Code Ownership',
    desc: 'All source code, database structures, and assets are transferred directly to your GitHub repository with zero vendor lock-in.',
  },
  {
    icon: ShieldCheck,
    title: 'Milestone Transparency',
    desc: 'We share private live staging links at every sprint. You only approve final payments after thoroughly testing features on staging.',
  },
]

const milestones = [
  {
    year: '2024',
    title: 'Engineering Custom Solutions',
    desc: 'Ritik and Vivang started architecting custom full-stack web portals, billing engines, and mobile apps for growing businesses in Lucknow and across India.',
  },
  {
    year: '2025',
    title: 'Launch of MBS TECHNOLOGIES',
    desc: 'Formalized MBS TECHNOLOGIES as a dedicated engineering studio to deliver bespoke React web apps, e-commerce storefronts, and Android solutions.',
  },
  {
    year: '2026',
    title: 'Multi-Industry Portals & Growth',
    desc: 'Delivered high-impact systems including Medisphere Health Clinic CRM, Greenwood High School portal, Sage & Silk E-Commerce, and Progix Billing Software.',
  },
]

const teamMembers = [
  {
    name: 'Ritik Pandey',
    role: 'Co-Founder & Lead Android / Full-Stack Engineer',
    initials: 'RP',
    image: ritikImg,
    linkedin: 'https://www.linkedin.com/in/ritik-pandey-44221a28a/',
    color: 'from-blue-600 to-indigo-600',
    skills: ['Android (Kotlin/Java)', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'REST APIs'],
    bio: 'Specializes in high-performance native Android application development, robust backend systems, and cloud database integrations for mission-critical client platforms.',
  },
  {
    name: 'Vivang Mishra',
    role: 'Co-Founder & Lead Full-Stack Architect',
    initials: 'VM',
    image: vivangImg,
    linkedin: 'https://www.linkedin.com/in/vivang-mishra-25a866295',
    color: 'from-brand-600 to-teal-500',
    skills: ['MERN Stack', 'React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'System Architecture'],
    bio: 'Specializes in modern responsive web applications, high-converting UI/UX systems, custom CRM admin dashboards, and end-to-end performance & SEO optimization.',
  },
]

export default function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About Us - MBS TECHNOLOGIES | Engineering & Leadership</title>
        <meta
          name="description"
          content="Learn about MBS TECHNOLOGIES — led by Ritik Pandey and Vivang Mishra. We engineer scalable web applications, e-commerce systems, and custom software."
        />
        <link rel="canonical" href="https://mbswebtech.com/about" />
        <meta property="og:title" content="About Us - MBS TECHNOLOGIES | Engineering & Leadership" />
        <meta
          property="og:description"
          content="Learn about MBS TECHNOLOGIES — led by Ritik Pandey and Vivang Mishra. We engineer scalable web applications and custom software."
        />
        <meta property="og:url" content="https://mbswebtech.com/about" />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Engineering Studio</span>
            <h1 className="section-heading mt-3 mb-6">
              Engineering Digital Products with <span className="gradient-text">Precision & Craft</span>
            </h1>
            <p className="section-subheading">
              MBS TECHNOLOGIES is a developer-led software studio founded by Ritik Pandey and Vivang Mishra. We build fast, scalable, and handcrafted web and mobile applications for ambitious businesses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Story & Foundation ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn>
                <span className="tag-pill mb-3">Our Origin</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mt-2 mb-4">
                  Built by Developers,{' '}
                  <span className="gradient-text">Focused on Results</span>
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We founded MBS TECHNOLOGIES with a clear realization: most small and medium businesses were trapped between two extremes — expensive traditional agencies with slow delivery, or generic freelance templates that break under real workloads.
                  </p>
                  <p>
                    We decided to build a developer-first alternative. By working directly with clients without bureaucratic layers, we architect custom full-stack web applications, e-commerce platforms, billing systems, and Android apps that load in milliseconds and convert visitors into customers.
                  </p>
                  <p>
                    From specialized hospital management systems (Medisphere Health) and school portals (Greenwood High) to retail billing software, our focus remains straightforward: clean architecture, reliable timelines, and total code ownership transferred to the client.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {[
                    ['100%', 'Code Ownership'],
                    ['95+', 'PageSpeed Score'],
                    ['Direct', 'Founder Access'],
                    ['30 Days', 'Free Support'],
                  ].map(([val, lbl]) => (
                    <div key={lbl} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
                      <div className="text-xl sm:text-2xl font-display font-bold gradient-text">{val}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">{lbl}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Journey Timeline */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">Our Journey</h3>
                  </div>

                  <div className="space-y-6">
                    {milestones.map((item, i) => (
                      <div key={item.year} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 flex items-center justify-center text-white text-xs font-mono font-bold shadow-md shadow-brand-500/20 shrink-0">
                            {item.year.slice(2)}
                          </div>
                          {i < milestones.length - 1 && (
                            <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-800 my-2" />
                          )}
                        </div>
                        <div className="pb-2">
                          <div className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400 mb-0.5">
                            {item.year}
                          </div>
                          <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Engineering Principles ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="tag-pill mb-3">Our Code of Standards</span>
            <h2 className="section-heading mt-2">
              Engineering Principles We <span className="gradient-text">Never Compromise On</span>
            </h2>
            <p className="section-subheading mt-2">
              Every project is built on clean code, transparent staging workflows, and direct founder accountability.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {engineeringPrinciples.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-xl flex flex-col justify-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-teal-50 dark:from-brand-950/40 dark:to-teal-950/40 border border-brand-200 dark:border-brand-800 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400 shadow-sm">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {v.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Leadership Team ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="tag-pill mb-3">Core Engineering Team</span>
            <h2 className="section-heading mt-2">
              Meet the <span className="gradient-text">Founders & Developers</span>
            </h2>
            <p className="section-subheading mt-2">
              The engineers who personally design, architect, and code your applications.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -6 }}
                className="h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-all hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-brand-500/20 shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                          className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-semibold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                    Technical Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology Stack Marquee ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-8">
            <span className="tag-pill mb-2">Technologies We Master</span>
            <h2 className="section-heading mt-2">Our Technology <span className="gradient-text">Ecosystem</span></h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <TechStackMarquee />
          </FadeIn>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-teal-500 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3">
                  Have a Project in Mind? Let's Architect It.
                </h2>
                <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  Talk directly with Ritik and Vivang to discuss feature requirements, technology choices, and timelines.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-600 font-bold rounded-xl hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    <Zap className="w-5 h-5" /> Start a Conversation
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all border border-white/20 text-sm sm:text-base"
                  >
                    View Our Portfolio <ArrowRight className="w-4 h-4" />
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
