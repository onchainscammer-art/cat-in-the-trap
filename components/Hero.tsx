'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#ff3b30] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-marker)' }}
          >
            THE CAT
            <br />
            IN THE TRAP
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <p
            className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-12"
            style={{ fontFamily: 'var(--font-hand)' }}
          >
            Real G's move in silence.
          </p>
        </motion.div>

        {/* Placeholder for Cat Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="relative w-full max-w-4xl mx-auto aspect-video bg-gradient-to-br from-[#ff3b30]/20 to-[#1a1a1a] rounded-2xl border-2 border-[#ff3b30]/30 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-white/50 text-lg sm:text-xl"
              style={{ fontFamily: 'var(--font-hand)' }}
            >
              [Image: The Cat standing next to a stove]
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/60"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
