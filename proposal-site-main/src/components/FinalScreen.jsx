"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"
import { useState } from "react"

export default function FinalScreen({ onNext }) {
  const [audioStarted, setAudioStarted] = useState(false)

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-6 relative z-10 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      {/* Music Button */}
      {!audioStarted && (
        <button
          onClick={() => setAudioStarted(true)}
          className="fixed top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition"
        >
          🎵 Play Music
        </button>
      )}

      {/* Background Music */}
      {audioStarted && (
        <audio autoPlay loop>
          <source src="/music/bg-music.mp3" type="audio/mpeg" />
        </audio>
      )}

      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "tween",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
        >
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-rose-500/20 flex items-center justify-center border-2 border-pink-400/30 pulse-glow">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <img src="/gif/cute.gif" alt="panda jumping" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl text-pink-200 mb-6 font-semibold leading-tight animate-pulse"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I have something{" "}
          <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            special
          </span>{" "}
          to tell you...
        </motion.h1>

        <motion.p
          className="text-pink-200/70 text-xl md:text-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Something that will change everything✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full pulse-glow transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
          >
            <Heart className="w-5 h-5 mr-2" />
            Tap to Begin
          </button>
        </motion.div>
      </div>

      {/* Footer watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="fixed bottom-4 right-4 text-sm text-pink-400 animate-pulse pointer-events-none z-50"
      >
        Made with 💖 by Shubhojit for Priyanka
      </motion.div>
    </motion.div>
  )
}