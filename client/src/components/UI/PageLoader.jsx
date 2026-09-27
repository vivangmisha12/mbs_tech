import { motion } from 'framer-motion'
import logo from '../../assets/logo_bg_remove.png'

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950 overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* ── Top-Left Corner Fluid Wave Shapes (Compact) ──────────────── */}
      <div className="absolute top-0 left-0 w-[30vw] sm:w-[24vw] md:w-[18vw] min-w-[150px] max-w-[280px] aspect-square pointer-events-none z-0">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark Royal Blue Layer */}
            <linearGradient id="tlGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0043a8" />
              <stop offset="50%" stopColor="#025cb8" />
              <stop offset="100%" stopColor="#013684" />
            </linearGradient>

            {/* Vibrant Blue Layer */}
            <linearGradient id="tlGradient2" x1="0%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#0077e6" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            {/* Light Cyan/Sky Layer */}
            <linearGradient id="tlGradient3" x1="0%" y1="0%" x2="60%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>

            {/* Translucent Soft Glow Layer */}
            <linearGradient id="tlGradient4" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>

            {/* Glowing Contour Stroke */}
            <linearGradient id="tlStroke1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Dark Outer Ribbon */}
          <path
            d="M 0,0 L 560,0 C 470,50 390,130 320,200 C 230,290 170,360 120,470 C 70,560 35,590 0,600 Z"
            fill="url(#tlGradient1)"
          />

          {/* Layer 2: Mid Vibrant Ocean Wave */}
          <path
            d="M 0,0 L 450,0 C 370,60 300,150 240,230 C 160,320 110,410 70,520 C 35,575 15,595 0,600 Z"
            fill="url(#tlGradient2)"
          />

          {/* Layer 3: Cyan Light Ribbon */}
          <path
            d="M 0,0 L 340,0 C 270,80 210,180 160,260 C 100,360 55,460 20,560 C 5,585 0,595 0,600 Z"
            fill="url(#tlGradient3)"
          />

          {/* Layer 4: Soft Translucent Sweep */}
          <path
            d="M 0,0 L 240,0 C 190,100 140,200 95,300 C 50,400 20,510 0,570 Z"
            fill="url(#tlGradient4)"
          />

          {/* Glowing Wave Edges / Lines */}
          <path
            d="M 560,0 C 470,50 390,130 320,200 C 230,290 170,360 120,470 C 70,560 35,590 0,600"
            stroke="url(#tlStroke1)"
            strokeWidth="3"
          />
          <path
            d="M 450,0 C 370,60 300,150 240,230 C 160,320 110,410 70,520 C 35,575 15,595 0,600"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
          <path
            d="M 340,0 C 270,80 210,180 160,260 C 100,360 55,460 20,560"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Bottom-Right Corner Fluid Wave Shapes (Compact) ───────────── */}
      <div className="absolute bottom-0 right-0 w-[30vw] sm:w-[24vw] md:w-[18vw] min-w-[150px] max-w-[280px] aspect-square pointer-events-none z-0">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark Royal Blue Layer */}
            <linearGradient id="brGradient1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0043a8" />
              <stop offset="50%" stopColor="#025cb8" />
              <stop offset="100%" stopColor="#013684" />
            </linearGradient>

            {/* Vibrant Blue Layer */}
            <linearGradient id="brGradient2" x1="100%" y1="100%" x2="20%" y2="0%">
              <stop offset="0%" stopColor="#0077e6" />
              <stop offset="60%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>

            {/* Light Cyan/Sky Layer */}
            <linearGradient id="brGradient3" x1="100%" y1="100%" x2="40%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
            </linearGradient>

            {/* Translucent Soft Glow Layer */}
            <linearGradient id="brGradient4" x1="100%" y1="100%" x2="0%" y2="20%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
            </linearGradient>

            {/* Glowing Contour Stroke */}
            <linearGradient id="brStroke1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Dark Outer Ribbon */}
          <path
            d="M 600,600 L 40,600 C 130,550 210,470 280,400 C 370,310 430,240 480,130 C 530,40 565,10 600,0 Z"
            fill="url(#brGradient1)"
          />

          {/* Layer 2: Mid Vibrant Ocean Wave */}
          <path
            d="M 600,600 L 150,600 C 230,540 300,450 360,370 C 440,280 490,190 530,80 C 565,25 585,5 600,0 Z"
            fill="url(#brGradient2)"
          />

          {/* Layer 3: Cyan Light Ribbon */}
          <path
            d="M 600,600 L 260,600 C 330,520 390,420 440,340 C 500,240 545,140 580,40 C 595,15 600,5 600,0 Z"
            fill="url(#brGradient3)"
          />

          {/* Layer 4: Soft Translucent Sweep */}
          <path
            d="M 600,600 L 360,600 C 410,500 460,400 505,300 C 550,200 580,90 600,30 Z"
            fill="url(#brGradient4)"
          />

          {/* Glowing Wave Edges / Lines */}
          <path
            d="M 40,600 C 130,550 210,470 280,400 C 370,310 430,240 480,130 C 530,40 565,10 600,0"
            stroke="url(#brStroke1)"
            strokeWidth="3"
          />
          <path
            d="M 150,600 C 230,540 300,450 360,370 C 440,280 490,190 530,80 C 565,25 585,5 600,0"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
          <path
            d="M 260,600 C 330,520 390,420 440,340 C 500,240 545,140 580,40"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Dot Matrix Patterns (Top-Right & Bottom-Left) ─────────────── */}
      {/* Top-Right Dots (6 columns x 4 rows) */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 grid grid-cols-6 gap-2 sm:gap-2.5 opacity-40 dark:opacity-25 pointer-events-none z-0">
        {Array(24).fill(0).map((_, i) => (
          <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        ))}
      </div>

      {/* Bottom-Left Dots (6 columns x 4 rows) */}
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 grid grid-cols-6 gap-2 sm:gap-2.5 opacity-40 dark:opacity-25 pointer-events-none z-0">
        {Array(24).fill(0).map((_, i) => (
          <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        ))}
      </div>

      {/* ── Floating Ambient Subtle Circles ────────────────────────────── */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[28%] right-[16%] w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-brand-400/50 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-[28%] left-[16%] w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-brand-400/50 pointer-events-none"
      />
      <div className="absolute top-[40%] left-[12%] w-2.5 h-2.5 rounded-full bg-brand-500/40 pointer-events-none" />
      <div className="absolute bottom-[36%] right-[14%] w-3 h-3 rounded-full bg-brand-500/50 pointer-events-none" />

      {/* ── Speeder Longfazers (Speed Lines Streaks) ────────────────────── */}
      <div className="speeder-longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ── Center Content ────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
        {/* Brand Logo with Glow */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0, y: -12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6"
        >
          {/* Enhanced Radial Glow behind logo */}
          <div className="absolute inset-0 bg-brand-500/25 dark:bg-brand-500/40 rounded-full blur-3xl scale-150" />
          <motion.img
            src={logo}
            alt="MBS TECHNOLOGIES"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain relative z-10 drop-shadow-[0_16px_32px_rgba(2,132,199,0.35)]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Brand Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-wider text-slate-900 dark:text-white uppercase">
            MBS <span className="gradient-text">TECHNOLOGIES</span>
          </h1>

          {/* Subtitle with stylish dividers */}
          <div className="flex items-center justify-center gap-3 mt-2.5 mb-5">
            <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-brand-500" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-slate-600 dark:text-slate-300 uppercase">
              MY BUSINESS SOLUTION
            </span>
            <div className="h-[1.5px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-brand-500" />
          </div>
        </motion.div>

        {/* ── Speeder Dash Loader (from Uiverse.io by anand_4957) ───── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col items-center gap-2 mt-1"
        >
          <div className="speeder-wrapper">
            <div className="speeder-body">
              <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="speeder-base">
                <span></span>
                <div className="speeder-face"></div>
              </div>
            </div>
          </div>

          {/* Loading text */}
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] font-semibold text-brand-600 dark:text-brand-400 uppercase"
          >
            LOADING...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}
