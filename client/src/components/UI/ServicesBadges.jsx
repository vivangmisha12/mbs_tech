import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Cpu,
  ShoppingCart,
  Smartphone,
  Search,
  Megaphone,
  RefreshCw,
  Cloud,
} from 'lucide-react'
import logo from '../../assets/logo_bg_remove.png'

const services = [
  {
    id: 'web-dev',
    label: 'Website Development',
    icon: Globe,
    angle: 270, // Top
    color: 'from-blue-500 to-brand-600 text-white',
    glow: 'rgba(13, 142, 239, 0.45)',
  },
  {
    id: 'custom-software',
    label: 'Custom Software',
    icon: Cpu,
    angle: 315, // Top Right
    color: 'from-indigo-500 to-purple-600 text-white',
    glow: 'rgba(99, 102, 241, 0.45)',
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Stores',
    icon: ShoppingCart,
    angle: 0, // Right
    color: 'from-teal-400 to-emerald-600 text-white',
    glow: 'rgba(20, 184, 166, 0.45)',
  },
  {
    id: 'mobile-app',
    label: 'Android & Mobile Apps',
    icon: Smartphone,
    angle: 45, // Bottom Right
    color: 'from-orange-400 to-red-500 text-white',
    glow: 'rgba(249, 115, 22, 0.45)',
  },
  {
    id: 'seo',
    label: 'SEO Optimization',
    icon: Search,
    angle: 90, // Bottom
    color: 'from-amber-400 to-yellow-500 text-slate-900',
    glow: 'rgba(245, 158, 11, 0.45)',
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: Megaphone,
    angle: 135, // Bottom Left
    color: 'from-pink-500 to-rose-600 text-white',
    glow: 'rgba(236, 72, 153, 0.45)',
  },
  {
    id: 'redesign',
    label: 'Website Redesign',
    icon: RefreshCw,
    angle: 180, // Left
    color: 'from-cyan-400 to-teal-500 text-slate-900',
    glow: 'rgba(6, 182, 212, 0.45)',
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    angle: 225, // Top Left
    color: 'from-purple-500 to-pink-500 text-white',
    glow: 'rgba(168, 85, 247, 0.45)',
  },
]

export default function ServicesBadges() {
  const [hoveredId, setHoveredId] = useState(null)
  const [clickedId, setClickedId] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  // Radius for the circular positioning
  const radius = 195

  const handleClick = (id) => {
    setClickedId(clickedId === id ? null : id)
  }

  return (
    <div
      className="relative flex h-[540px] w-full max-w-[540px] mx-auto items-center justify-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setHoveredId(null)
      }}
    >
      <style>{`
        @keyframes orbitCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .badges-orbit {
          animation: orbitCW 38s linear infinite;
        }
        .badge-counter-rotate {
          animation: orbitCCW 38s linear infinite;
        }
        .orbit-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* ── Fixed Static Background Orbit Circles ── */}
      {/* Main dashed circular track */}
      <div
        className="absolute rounded-full border border-dashed border-brand-500/35 dark:border-brand-400/30 pointer-events-none"
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
      />
      {/* Outer subtle ring */}
      <div
        className="absolute rounded-full border border-slate-200/70 dark:border-slate-800/70 pointer-events-none"
        style={{ width: `${radius * 2 + 50}px`, height: `${radius * 2 + 50}px` }}
      />
      {/* Inner ring */}
      <div
        className="absolute rounded-full border border-slate-200/50 dark:border-slate-800/50 pointer-events-none"
        style={{ width: `${radius * 2 - 80}px`, height: `${radius * 2 - 80}px` }}
      />

      {/* Center Core Brand Logo (Static & always upright in center) */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative z-30 w-28 h-28 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-2 border-brand-500/30 shadow-2xl shadow-brand-500/20 flex flex-col items-center justify-center p-3 cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <img
          src={logo}
          alt="MBS TECHNOLOGIES"
          className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
        />
        <div className="text-[10px] font-display font-extrabold tracking-wider uppercase text-slate-800 dark:text-slate-200 mt-1">
          MBS TECH
        </div>
      </motion.div>

      {/* ── Rotating Badges Layer along the Fixed Circle Track ── */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none badges-orbit ${
          isPaused || hoveredId !== null ? 'orbit-paused' : ''
        }`}
      >
        {services.map((service) => {
          const rad = (service.angle * Math.PI) / 180
          const x = Math.round(Math.cos(rad) * radius)
          const y = Math.round(Math.sin(rad) * radius)

          const isHovered = hoveredId === service.id
          const isClicked = clickedId === service.id
          const isOtherHovered = hoveredId !== null && hoveredId !== service.id
          const IconComponent = service.icon

          return (
            <div
              key={service.id}
              className="absolute pointer-events-auto"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              {/* Counter-rotation to keep badge text upright while orbiting */}
              <div
                className={`badge-counter-rotate ${
                  isPaused || hoveredId !== null ? 'orbit-paused' : ''
                }`}
              >
                <div
                  className={`
                    cursor-pointer rounded-full transition-all duration-300 ease-out
                    bg-gradient-to-r shadow-lg border border-white/40 dark:border-white/20
                    ${service.color}
                    px-3.5 py-1.5 sm:px-4 sm:py-2
                    flex items-center gap-1.5 sm:gap-2
                  `}
                  style={{
                    transform: `scale(${
                      isClicked ? 1.2 : isHovered ? 1.15 : isOtherHovered ? 0.92 : 1
                    })`,
                    zIndex: isHovered || isClicked ? 50 : 20,
                    boxShadow:
                      isHovered || isClicked
                        ? `0 20px 40px -10px ${service.glow}, inset 0 2px 4px rgba(255, 255, 255, 0.5)`
                        : '0 8px 20px -5px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  }}
                  onMouseEnter={() => {
                    setHoveredId(service.id)
                    setIsPaused(true)
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null)
                  }}
                  onClick={() => handleClick(service.id)}
                >
                  <div className="w-5 h-5 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current opacity-95" />
                  </div>

                  <span className="font-display text-xs sm:text-xs md:text-sm font-bold tracking-tight whitespace-nowrap drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                    {service.label}
                  </span>

                  {/* Inner gloss highlight */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-full opacity-40"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
