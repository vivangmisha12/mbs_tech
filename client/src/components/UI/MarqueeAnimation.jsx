import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

// Wrap helper for seamless loop
const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export function MarqueeAnimation({
  children,
  className = '',
  direction = 'left',
  baseVelocity = 10,
}) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (direction === 'left') {
      directionFactor.current = 1
    } else if (direction === 'right') {
      directionFactor.current = -1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden w-full max-w-[100vw] whitespace-nowrap flex select-none py-0.5">
      <motion.div
        className={`font-display font-extrabold uppercase text-base sm:text-lg md:text-xl flex flex-nowrap shrink-0 items-center ${className}`}
        style={{ x }}
      >
        <span className="inline-flex items-center px-4">{children}</span>
        <span className="inline-flex items-center px-4">{children}</span>
        <span className="inline-flex items-center px-4">{children}</span>
        <span className="inline-flex items-center px-4">{children}</span>
      </motion.div>
    </div>
  )
}

export default function OffersMarquee() {
  const topServices = [
    'Consulting',
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'UI/UX Design',
    'Custom Software',
    'E-Commerce Solutions',
    'Cloud Architecture',
    'SEO Optimization',
  ]

  const bottomTechs = [
    'WordPress Development',
    'Python Solutions',
    'PHP Development',
    'React.js & Next.js',
    'Android Applications',
    'Node.js & Express',
    'Full Stack Systems',
    'API Integrations',
    'Database Architecture',
  ]

  return (
    <div className="relative py-10 sm:py-14 my-2 sm:my-4 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950 select-none">
      {/* ── Ribbon 1 (Top Layer): Tilted -2deg, Vibrant Violet/Purple ── */}
      <div className="w-full relative z-20 -rotate-2 sm:-rotate-2.5 scale-105 sm:scale-110 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 text-white shadow-lg shadow-indigo-900/20 border-y border-white/15">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-1.8}
          className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide"
        >
          {topServices.map((item, index) => (
            <span key={index} className="inline-flex items-center">
              <span className="text-white font-semibold">{item}</span>
              <span className="mx-4 sm:mx-6 text-purple-200/50 font-light text-xl sm:text-2xl">/</span>
            </span>
          ))}
        </MarqueeAnimation>
      </div>

      {/* ── Ribbon 2 (Bottom Layer): Tilted +1.5deg, Deep Violet/Indigo (Overlapping) ── */}
      <div className="w-full relative z-10 -mt-3.5 sm:-mt-5 rotate-1 sm:rotate-1.5 scale-105 sm:scale-110 py-3 sm:py-3.5 bg-gradient-to-r from-purple-950 via-indigo-900 to-violet-950 text-white shadow-xl shadow-purple-950/30 border-y border-white/10">
        <MarqueeAnimation
          direction="right"
          baseVelocity={-1.8}
          className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide"
        >
          {bottomTechs.map((item, index) => (
            <span key={index} className="inline-flex items-center">
              <span className="text-white font-semibold">{item}</span>
              <span className="mx-4 sm:mx-6 text-purple-300/40 font-light text-xl sm:text-2xl">/</span>
            </span>
          ))}
        </MarqueeAnimation>
      </div>
    </div>
  )
}
