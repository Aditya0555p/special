import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function ProposalScreen({ config, onSayYes, onSayThink }) {
  const question = config.proposal?.question || 'Will You Be Mine? ❤️';
  const subtitle =
    config.proposal?.subtitle ||
    'In a world full of billions of stars, my heart only beats for you.';
  const yesText = config.proposal?.yesButtonText || 'YES! 💖';
  const thinkText = config.proposal?.thinkButtonText || 'Let Me Think 🥺';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[82vh] px-4 sm:px-6 py-6 text-center max-w-3xl mx-auto z-10 w-full"
    >
      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-200 text-xs sm:text-sm font-medium mb-6 shadow-md shadow-pink-600/20"
      >
        <Sparkles className="w-4 h-4 text-pink-400" />
        <span>{config.proposal?.tagline || 'The question straight from my heart...'}</span>
      </motion.div>

      {/* Main Glassmorphic Proposal Card with Glowing Heart */}
      <div className="w-full glass-panel-glow rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-2xl border border-pink-500/40 shadow-2xl shadow-rose-950/60">
        {/* Radiating Glow Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Central Beating Glowing Heart Animation */}
        <div className="relative mb-8 flex justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1, 1.15, 1],
              filter: [
                'drop-shadow(0 0 20px rgba(244, 63, 94, 0.6))',
                'drop-shadow(0 0 45px rgba(244, 63, 94, 0.95))',
                'drop-shadow(0 0 20px rgba(244, 63, 94, 0.6))',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-24 h-24 sm:w-32 sm:h-32 text-rose-500 relative flex items-center justify-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>

          {/* Floating ring of sparkles around the heart */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5 text-amber-300 absolute -top-3 animate-ping" />
            <Sparkles className="w-4 h-4 text-pink-300 absolute -bottom-3" />
          </motion.div>
        </div>

        {/* Large Proposal Question */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-romantic-gradient tracking-tight leading-tight mb-4"
        >
          {question}
        </motion.h1>

        {/* Romantic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base sm:text-xl text-pink-100/90 font-light max-w-xl mx-auto leading-relaxed mb-10"
        >
          {subtitle}
        </motion.p>

        {/* The Two Buttons: "YES! 💖" & "Let Me Think 🥺" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
          {/* YES Button - Prominent, glowing, irresistible */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSayYes}
            className="w-full sm:w-auto min-w-[200px] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 shadow-xl shadow-rose-600/50 hover:shadow-2xl hover:shadow-pink-500/80 animate-shimmer cursor-pointer border border-pink-300/40 transition-all flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
            <span>{yesText}</span>
          </motion.button>

          {/* Let Me Think Button - Respectful, gentle, safe space */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSayThink}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-medium text-pink-200/90 glass-panel hover:bg-white/10 hover:text-white border border-pink-400/30 transition-all cursor-pointer"
          >
            <span>{thinkText}</span>
          </motion.button>
        </div>
      </div>

      {/* Gentle reassurance */}
      <p className="mt-6 text-xs text-pink-300/60 font-sans tracking-wide">
        Made with all my heart, without any expectations other than your happiness 🌸
      </p>
    </motion.div>
  );
}
