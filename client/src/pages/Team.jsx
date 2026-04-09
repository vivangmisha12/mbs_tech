import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Zap, Github, Linkedin, Twitter, Code2, Palette, Smartphone, Globe } from 'lucide-react'
import PageWrapper, { FadeIn, StaggerContainer, StaggerItem } from '../components/UI/PageWrapper'

const team = [
  {
    name: 'Ritik Pandey', role: 'Founder & Lead Developer', initials: 'RP',
    color: 'from-brand-500 to-teal-500',
    specialization: 'Full Stack Development & Android',
    icon: Code2,
    bio: 'Passionate full-stack developer with 3+ years of experience in building modern web applications. Ritik leads the technical architecture and development team, ensuring every project meets the highest quality standards.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Android', 'JAVA', 'Firebase'],
    exp: '3+ years',
    social: { github: '#', linkedin: '#'},
  },
  {
    name: 'Vivang Mishra', role: 'Full Stack Developer (MERN)', initials: 'VM',
    color: 'from-purple-500 to-pink-500',
    specialization: 'Full Stack Development & AI Integration',
    icon: Palette,
    bio: 'Full-stack developer specializing in the MERN stack, with a passion for integrating AI solutions into web applications. Vivang focuses on creating user-friendly, performant web experiences that drive results for our clients.',
    skills: ['React.js', 'Node.js', 'Express.js','MongoDB','Next.js','Tailwind CSS'],
    exp: '2+ years',
    social: { github: 'https://github.com/vivangmisha12', linkedin: 'https://www.linkedin.com/in/vivang-mishra-25a866295' },
  },
  {
    name: 'Raj Tiwari', role: 'Full Stack Developer (MERN)', initials: 'RT',
    color: 'from-orange-500 to-red-500',
    specialization: 'Full Stack Development',
    icon: Smartphone,
    bio: 'Dedicated full-stack developer focused on building reliable and scalable web applications. Raj contributes across frontend and backend with clean architecture and strong attention to performance.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    exp: '2+ years',
    social: { github: '#', linkedin: '#', twitter: '#' },
  },
  {
    name: 'Vishwajeet Singh', role: 'Frontend Developer & Project Consultant', initials: 'VS',
    color: 'from-teal-500 to-green-500',
    specialization: 'Frontend Development',
    icon: Globe,
    bio: 'Frontend specialist passionate about creating smooth, accessible, and performant user interfaces. Vishwajeet brings designs to life with pixel-perfect React implementations and fluid animations.',
    skills: ['React', 'JavaScript', 'HTML', 'Tailwind CSS', 'Project Consultant'],
    exp: '2+ years',
    social: { github: '#', linkedin: '#', twitter: '#' },
  },
  
]

const perks = [
  'Remote-first culture',
  'Flexible working hours',
  'Continuous learning budget',
  'Collaborative environment',
  'Real project impact',
  'Growing startup energy',
]

export default function Team() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Our Team - MBS WebTech | Meet the Experts</title>
        <meta name="description" content="Meet the talented team behind MBS WebTech — developers, designers, and mobile specialists." />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-brand-50/20 to-slate-50 dark:from-slate-950 dark:to-slate-950" />
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-400/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <span className="tag-pill mb-4">Real People</span>
            <h1 className="section-heading mt-3 mb-6">
              The Team Behind Your <span className="gradient-text">Digital Success</span>
            </h1>
            <p className="section-subheading">
              Meet the passionate developers, designers, and specialists who pour their expertise into every project we take on.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800 transition-all hover:shadow-2xl bg-white dark:bg-slate-800"
                >
                  {/* Card header */}
                  <div className={`h-28 bg-gradient-to-br ${member.color} relative px-4 pt-3`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="relative flex justify-end">
                      <span className="max-w-[85%] truncate px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium border border-white/30">
                        {member.specialization}
                      </span>
                    </div>
                  </div>

                  <div className="px-5 pb-5 -mt-6 relative">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-lg font-display font-bold mb-3 shadow-lg border-4 border-white dark:border-slate-800`}>
                      {member.initials}
                    </div>

                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg">{member.name}</h3>
                    <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">{member.role}</p>

                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-600 text-xs text-slate-600 dark:text-slate-300">
                      <member.icon className="w-3.5 h-3.5" />
                      <span>{member.exp} experience</span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">{member.bio}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map(s => (
                        <span key={s} className="tag-pill text-xs">{s}</span>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-2">
                      {[
                        { icon: Github, href: member.social.github },
                        { icon: Linkedin, href: member.social.linkedin },
                        { icon: Twitter, href: member.social.twitter },
                      ].map(({ icon: Icon, href }, i) => (
                        <a
                          key={i}
                          href={href}
                          className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-brand-50 dark:hover:bg-brand-900/30 flex items-center justify-center text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Join us section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="tag-pill mb-3">Join Our Team</span>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mt-3 mb-4">
                  We're Always Looking for <span className="gradient-text">Talented People</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Passionate about web development, design, or mobile apps? We'd love to hear from you. We're a growing team that values creativity, ownership, and continuous learning.
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mbswebtechsolutions%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Zap className="w-5 h-5" /> Say Hello
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {perks.map(perk => (
                  <div key={perk} className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    </div>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="section-heading mb-4">Let Our Team Build <span className="gradient-text">Your Vision</span></h2>
            <p className="section-subheading mb-8">Ready to work with our talented team? Let's start your project today.</p>
            <Link to="/contact" className="btn-primary">
              <Zap className="w-5 h-5" /> Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
