import { motion } from "motion/react"

export default function CuteLoader() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-fuchsia-950/5 to-rose-950/10 flex flex-col gap-10 items-center justify-center relative p-4"
    >
      {/* Panda Loader */}
      <div className="panda-container z-1">
        <div className="relative">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
          <div className="panda-head">
            <div className="eye-patch eye-patch-left"></div>
            <div className="eye-patch eye-patch-right"></div>
            <div className="eye eye-left">
              <div className="eyelid"></div>
              <div className="pupil"></div>
            </div>
            <div className="eye eye-right">
              <div className="eyelid"></div>
              <div className="pupil"></div>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
      </div>

      {/* Message */}
      <motion.h2
        className="text-2xl text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Something special is coming...
      </motion.h2>

      {/* Loader Dots */}
      <motion.div
        className="flex justify-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Footer Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="fixed bottom-4 right-4 text-sm text-pink-400 animate-pulse pointer-events-none z-50"
      >
        Made with 💖 by Shubhojit for Priyanka
      </motion.div>
    </motion.div>
  )
}