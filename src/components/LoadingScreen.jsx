import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function LoadingScreen({ onLoaded }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial from-[#1e072b] via-[#100319] to-[#06010a] text-pink-100 px-6 text-center select-none"
    >
      {/* Glowing atmospheric glow ring */}
      <div className="absolute w-72 h-72 rounded-full bg-pink-600/15 filter blur-3xl animate-pulse pointer-events-none" />

      {/* Pulsing Beating Heart */}
      <div className="relative mb-8">
        <motion.div
          animate={{
            scale: [1, 1.25, 1, 1.15, 1],
            filter: [
              'drop-shadow(0 0 15px rgba(244, 63, 94, 0.5))',
              'drop-shadow(0 0 35px rgba(244, 63, 94, 0.9))',
              'drop-shadow(0 0 15px rgba(244, 63, 94, 0.5))',
            ],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-24 h-24 sm:w-28 sm:h-28 text-rose-500 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Small floating sparkles around heart */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 pointer-events-none"
        >
          <Sparkles className="w-5 h-5 text-pink-300 absolute -top-2 -right-2 animate-bounce" />
          <Heart className="w-4 h-4 text-purple-400 fill-current absolute -bottom-1 -left-2 animate-pulse" />
        </motion.div>
      </div>

      {/* Romantic Loading Text */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl sm:text-3xl font-serif text-romantic-gradient tracking-wide mb-2"
      >
        A Little Piece of My Heart...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 0.4 }}
        className="text-sm sm:text-base text-pink-200/80 font-sans max-w-sm font-light mb-8"
      >
        Preparing something special just for you ✨
      </motion.p>

      {/* Smooth Loading Indicator Line */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Gentle Skip / Proceed Prompt */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onLoaded}
        className="mt-6 text-xs text-pink-400/70 hover:text-pink-300 underline underline-offset-4 cursor-pointer transition-colors"
      >
        Click to enter immediately
      </motion.button>
    </motion.div>
  );
}
