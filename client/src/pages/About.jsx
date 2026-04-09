import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Lightbulb, Shield, Users, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const values = [
  { icon: Heart, title: 'Quality First', desc: 'We never compromise on the quality of our work. Every line of code, every design decision reflects our commitment to excellence.' },
  { icon: Shield, title: 'Transparency', desc: 'Open communication throughout every project. No surprises — you always know exactly where your project stands.' },
  { icon: Users, title: 'Client-First', desc: 'Your success is our success. We build long-term partnerships, not just one-time projects.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay at the cutting edge of web technology to give your business a competitive advantage.' },
]

const timeline = [
  { year: '2025', title: 'Founded', desc: 'MBS WebTech was founded with a mission to make professional web development accessible to every business.' },
  { year: '2026', title: 'First 10 Clients', desc: 'We grew quickly, delivering successful projects and building a reputation for quality and reliability.' },
]

const techStack = [
  { name: 'React.js', level: 95, color: 'from-blue-400 to-brand-600' },
  { name: 'Node.js', level: 90, color: 'from-green-400 to-teal-500' },
  { name: 'MongoDB', level: 85, color: 'from-teal-400 to-green-500' },
  { name: 'Android', level: 80, color: 'from-orange-400 to-red-500' },
  { name: 'Tailwind CSS', level: 98, color: 'from-brand-400 to-teal-500' },
  { name: 'Next.js', level: 85, color: 'from-slate-600 to-slate-800' },
]

const teamMembers = [
  {
    name: 'Ritik Pandey', role: 'Full Stack Developer & Android Developer', initials: 'RP',
    color: 'from-brand-500 to-teal-500',
    skills: ['React', 'Node.js', 'MongoDB', 'Express','Android','Java','Firebase'],
    bio: 'Full-stack & Android developer with 2+ years of experience building modern web applications.',
  },
  {
    name: 'Vivang Mishra', role: 'Full Stack Developer( MERN )', initials: 'VM',
    color: 'from-purple-500 to-pink-500',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS'],
    bio: 'Fullstack Developer specializing in the MERN stack, developing user friendly web applications and seo optimized websites.',
  },
  {
    name: 'Raj Tiwari', role: 'Full Stack Developer(MERN)', initials: 'RT',
    color: 'from-orange-500 to-red-500',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    bio: 'Dedicated Fullstack Developer with expertise in the MERN stack, passionate about building efficient and scalable web applications.',
  },
  {
    name: 'Vishwajeet Singh', role: 'Frontend Developer & Project Consultant', initials: 'VS',
    color: 'from-teal-500 to-green-500',
    skills: ['React', 'JavaScript', 'UI/UX Design', 'Project Management'],
    bio: 'Frontend specialist with a passion for creating smooth, accessible user interfaces. Also provides project consulting to ensure client visions are realized effectively.',
  },
]

export default function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About Us - MBS WebTech | Our Story & Team</title>
        <meta name="description" content="Learn about MBS WebTech — our story, mission, values, and the team behind your digital success." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">About Us</span>
            <h1 className="section-heading mt-3 mb-6">
              About <span className="gradient-text">MBS WebTech</span>
            </h1>
            <p className="section-subheading text-lg">
              We're a passionate team of developers and designers on a mission to help businesses build powerful digital presences. Every project we take is treated with full dedication and craft.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="tag-pill mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mt-3 mb-6">
                Started with a Simple{' '}
                <span className="gradient-text">Belief</span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>MBS WebTech was born from a simple belief: every business deserves a professional, high-quality online presence — not just large corporations with big budgets.</p>
                <p>Founded in 2025, we started as a small freelance operation helping local businesses get online. What began as a one-person endeavor quickly grew as word spread about our commitment to quality and client satisfaction.</p>
                <p>Today, we're a tight-knit team of passionate developers, designers, and mobile app specialists who collectively bring decades of experience to every project. We've helped 40+ clients across various industries establish and grow their digital presence.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[['100%', 'On-Time Delivery'], ['5★', 'Average Rating']].map(([val, lbl]) => (
                  <div key={lbl} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="text-2xl font-display font-bold gradient-text">{val}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{lbl}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 flex items-center justify-center text-white text-sm font-display font-bold shadow-md shadow-brand-500/25">
                        {item.year.slice(2)}
                      </div>
                      {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-brand-300 to-teal-300 my-2" />}
                    </div>
                    <div className="pb-6">
                      <div className="font-mono text-xs text-brand-500 mb-0.5">{item.year}</div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-heading mb-4">Mission & <span className="gradient-text">Vision</span></h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <Target className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-2xl font-display font-bold mb-3">Our Mission</h3>
                <p className="text-white/85 leading-relaxed">
                  To deliver modern, high-performance digital solutions with unwavering quality and reliability. We exist to make professional web and app development accessible to businesses of every size, turning ambitious ideas into reality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <Eye className="w-10 h-10 mb-4 opacity-90" />
                <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
                <p className="text-white/85 leading-relaxed">
                  To be the most trusted digital partner for startups and growing businesses worldwide. We envision a future where every great idea has the digital platform it deserves, powered by beautiful design and robust technology.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="tag-pill mb-3">What We Stand For</span>
            <h2 className="section-heading mt-3">Our Core <span className="gradient-text">Values</span></h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="tag-pill mb-3">Real People</span>
            <h2 className="section-heading mt-3">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="section-subheading mt-3">The talented humans who make the magic happen.</p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-lg"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-display font-bold mb-4 shadow-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map(s => <span key={s} className="tag-pill text-xs">{s}</span>)}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Expertise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="section-heading">Technology <span className="gradient-text">Expertise</span></h2>
          </FadeIn>
          <div className="space-y-5">
            {techStack.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-slate-700 dark:text-slate-300 shrink-0">{tech.name}</div>
                  <div className="flex-1 h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                    />
                  </div>
                  <div className="w-10 text-sm font-mono text-brand-600 dark:text-brand-400 shrink-0 text-right">{tech.level}%</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Ready to Work <span className="gradient-text">Together?</span></h2>
            <p className="section-subheading mb-8">Let's build something amazing for your business. Get in touch and we'll discuss your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                <Zap className="w-5 h-5" /> Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
