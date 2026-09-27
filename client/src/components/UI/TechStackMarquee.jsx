import React from 'react'
import { motion } from 'framer-motion'

// Tech Logo SVGs & Icons
export const techLogos = [
  {
    name: 'React.js',
    category: 'Frontend',
    color: 'from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="-11.5 -10.23174 23 20.46348" fill="#00d8ff">
        <circle cx="0" cy="0" r="2.05" fill="#00d8ff"/>
        <g stroke="#00d8ff" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Full-Stack',
    color: 'from-slate-700/30 to-slate-900/30 text-white border-slate-600/40',
    icon: (
      <svg className="w-7 h-7 fill-current dark:text-white text-slate-900" viewBox="0 0 180 180">
        <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="black" r="90"/>
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" data-circle="true" fill="black" r="90"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
          <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: 'from-emerald-500/20 to-green-500/10 text-emerald-400 border-emerald-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 256 289" fill="none">
        <path d="M128 0L256 73.9V215.1L128 289L0 215.1V73.9L128 0Z" fill="#339933"/>
        <path d="M128 16.5L241.7 82.2V206.8L128 272.5L14.3 206.8V82.2L128 16.5Z" fill="#68A063"/>
        <path d="M128 135.8V239.5L218 187.5V111L128 135.8Z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Android',
    category: 'Mobile OS',
    color: 'from-green-500/20 to-teal-500/10 text-green-400 border-green-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#3DDC84">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 2.23 12.95 2 12 2c-.96 0-1.86.23-2.66.63L7.85 1.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 4.26 6 5.95 6 8h12c0-2.05-.97-3.74-2.47-4.84zM9 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    category: 'Enterprise / Mobile',
    color: 'from-red-500/20 to-orange-500/10 text-red-400 border-red-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#EA2D2E">
        <path d="M8.85 16.83c0 .13.12.23.28.22 1.09-.07 2.25-.13 3.32-.03 1.57.15 3.1.66 4.67.7.35.01.62-.23.6-.58-.02-.38-.29-.62-.64-.63-1.63-.07-3.23-.46-4.86-.6-1.12-.1-2.27-.05-3.37.07-.3.04-.5.3-.47.62l.47.23zm-.74 2.87c.22.09.43.08.61-.06.77-.6 1.62-.89 2.57-1.01 1.58-.2 3.16-.04 4.74.02.48.02.83-.26.86-.71.03-.45-.3-.76-.78-.77-1.68-.06-3.36-.21-5.04.02-1.19.16-2.25.59-3.21 1.34-.34.27-.37.76-.07 1.06l.32.11zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.25 4.54c.14.73-.24 1.43-.88 1.69-.53.22-1.13.06-1.44-.39-.33-.48-.27-1.15.15-1.57.48-.48 1.4-.46 2.17.27z"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'AI & Backend',
    color: 'from-yellow-500/20 to-blue-500/10 text-yellow-400 border-yellow-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24">
        <path d="M11.91 2c-4.14 0-3.89 1.8-3.89 1.8l.01 1.86h3.97v.56H6.42S3.5 5.89 3.5 10.03c0 4.14 2.55 3.99 2.55 3.99h1.52v-2.14s-.08-2.55 2.5-2.55h4.29s2.42.04 2.42-2.35V4.35S17.18 2 11.91 2zm-2.17 1.2c.41 0 .74.33.74.74 0 .41-.33.74-.74.74-.41 0-.74-.33-.74-.74 0-.41.33-.74.74-.74z" fill="#3776AB"/>
        <path d="M12.09 22c4.14 0 3.89-1.8 3.89-1.8l-.01-1.86h-3.97v-.56h5.58s2.92.33 2.92-3.81c0-4.14-2.55-3.99-2.55-3.99h-1.52v2.14s.08 2.55-2.5 2.55h-4.29s-2.42-.04-2.42 2.35v2.63S6.82 22 12.09 22zm2.17-1.2c-.41 0-.74-.33-.74-.74 0-.41.33-.74.74-.74.41 0 .74.33.74.74 0 .41-.33.74-.74.74z" fill="#FFD438"/>
      </svg>
    ),
  },
  {
    name: '.NET Core',
    category: 'Enterprise / C#',
    color: 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#512BD4">
        <path d="M22.5 12c0 5.8-4.7 10.5-10.5 10.5S1.5 17.8 1.5 12 6.2 1.5 12 1.5 22.5 6.2 22.5 12z"/>
        <path d="M5.5 15.5V8.5h2l3 4.5V8.5h1.8v7h-2l-3-4.5v4.5H5.5zm8.5 0V8.5h4v1.5h-2.3v1.2h2.1v1.5h-2.1v1.3h2.3v1.5H14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'PHP',
    category: 'Web Backend',
    color: 'from-indigo-500/20 to-blue-500/10 text-indigo-400 border-indigo-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#777BB4">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.8 13.5H5.6L7 8.5h2.2c1.2 0 2 .3 2.4.9.4.6.4 1.4.1 2.4-.4 1.3-1.1 2.2-2.1 2.8-.7.6-1.5.9-2.4.9zm4.2-2.6l.6-3.8h1.4c.5 0 .8.1 1 .4.2.3.2.7.1 1.2-.2.7-.5 1.2-.9 1.6-.4.4-.9.6-1.5.6h-.7zm7 2.6h-1.6L18.2 8.5h2.2c1.2 0 2 .3 2.4.9.4.6.4 1.4.1 2.4-.4 1.3-1.1 2.2-2.1 2.8-.7.6-1.5.9-2.4.9z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'NoSQL Database',
    color: 'from-green-600/20 to-emerald-500/10 text-green-500 border-green-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#47A248">
        <path d="M12 1.5s-6 6.3-6 12.3c0 4.2 3.2 7.7 6 8.7 2.8-1 6-4.5 6-8.7 0-6-6-12.3-6-12.3zm.4 18.2v-7.9c1.9 0 3.6 1.4 3.6 3.5 0 2.4-1.7 4.1-3.6 4.4z"/>
      </svg>
    ),
  },
  {
    name: 'SQL & Postgres',
    category: 'Relational DB',
    color: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C7.58 2 4 3.79 4 6v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 16c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.73 1.23 6 1.23s4.39-.45 6-1.23V18c0 .5-2.13 2-6 2zm0-5c-3.87 0-6-1.5-6-2v-2.23c1.61.78 3.73 1.23 6 1.23s4.39-.45 6-1.23V13c0 .5-2.13 2-6 2z"/>
      </svg>
    ),
  },
  {
    name: 'AWS Cloud',
    category: 'Cloud Services',
    color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FF9900">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
      </svg>
    ),
  },
  {
    name: 'Hosting & Deployment',
    category: 'DevOps / CI-CD',
    color: 'from-teal-500/20 to-emerald-500/10 text-teal-400 border-teal-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#0D9488">
        <path d="M12 2.5a.5.5 0 0 1 .5.5v1.2a7.5 7.5 0 0 1 6.3 6.3H20a.5.5 0 0 1 0 1h-1.2a7.5 7.5 0 0 1-6.3 6.3V19a.5.5 0 0 1-1 0v-1.2A7.5 7.5 0 0 1 5.2 11.5H4a.5.5 0 0 1 0-1h1.2A7.5 7.5 0 0 1 11.5 4.2V3a.5.5 0 0 1 .5-.5zm0 3A6.5 6.5 0 1 0 18.5 12 6.51 6.51 0 0 0 12 5.5zM12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"/>
        <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Design System',
    color: 'from-sky-500/20 to-cyan-500/10 text-sky-400 border-sky-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.7-2 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.7 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.7 2-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.1-6.7-3.1zm-6.6 6.5c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.7-2 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.7 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.7 2-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.1-6.7-3.1z"/>
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'BaaS & Realtime',
    color: 'from-amber-500/20 to-red-500/10 text-amber-400 border-amber-500/30',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#FFCA28">
        <path d="M3.89 15.67L6.2 2.3a.68.68 0 0 1 1.28-.24l3.1 5.87-6.69 7.74zm15.82 2.76l-1.9-11.83a.68.68 0 0 0-1.22-.3l-12.2 14.28 7.36 4.14a1.8 1.8 0 0 0 1.76 0l6.2-6.29zm-7.9-7.39l-2.6-4.94a.68.68 0 0 0-1.22 0L2.1 17.84l9.71-6.8z"/>
      </svg>
    ),
  },
]

export default function TechStackMarquee() {
  const row1 = techLogos.slice(0, 7)
  const row2 = techLogos.slice(7)

  return (
    <div className="w-full overflow-hidden py-6 space-y-6">
      {/* Row 1: Leftward */}
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5 items-center"
          style={{ '--duration': '28s' }}
        >
          {[...row1, ...row1, ...row1, ...row1].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-500 shadow-sm hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-inner group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward */}
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div
          className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] gap-5 items-center"
          style={{ '--duration': '28s' }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 shadow-sm hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-inner group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
