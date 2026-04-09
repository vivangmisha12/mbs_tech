import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            MBS <span className="gradient-text">WebTech</span>
          </span>
        </motion.div>

        {/* Dots loader */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-brand-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
