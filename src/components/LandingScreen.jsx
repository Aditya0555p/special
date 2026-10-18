import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MailOpen } from 'lucide-react';

export default function LandingScreen({ config, onOpenHeart }) {
  // Use configured crush name if personalized, otherwise fallback to exact required text
  const displayName =
    config.crushName && config.crushName !== 'CRUSH_NAME'
      ? config.crushName
      : 'Someone Special';

  const titleText =
    config.landing?.title || `Hey, ${displayName}... 💗`;

  const subtitleText =
    config.landing?.subtitle ||
    "I have something to tell you, something I've wanted to say for a long time...";

  const buttonText = config.landing?.buttonText || 'Open My Heart 💌';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[82vh] px-4 sm:px-6 text-center max-w-3xl mx-auto z-10"
    >
      {/* Subtle top romantic badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-200 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-pink-500/20"
      >
        <Sparkles className="w-4 h-4 text-pink-400 animate-spin-slow" />
        <span>{config.landing?.badge || 'A heartfelt message for you ✨'}</span>
      </motion.div>

      {/* Main Glassmorphism Card */}
      <div className="w-full glass-panel-glow rounded-3xl p-8 sm:p-12 md:p-14 relative overflow-hidden backdrop-blur-2xl">
        {/* Soft glowing ambient light orbs behind the card */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />

        {/* Floating Heart Icon Accent */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500/30 via-rose-500/20 to-purple-500/30 border border-pink-400/40 flex items-center justify-center text-rose-400 shadow-lg shadow-pink-600/20"
        >
          <Heart className="w-8 h-8 sm:w-10 sm:h-10 fill-rose-500/30 text-rose-400 animate-pulse" />
        </motion.div>

        {/* Main Required Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-romantic-gradient tracking-tight leading-tight mb-5"
        >
          {titleText}
        </motion.h1>

        {/* Main Required Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-base sm:text-xl md:text-2xl text-pink-100/90 font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {subtitleText}
        </motion.p>

        {/* Glowing Animated Button: "Open My Heart 💌" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={onOpenHeart}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 shadow-xl shadow-pink-600/40 hover:shadow-2xl hover:shadow-rose-500/60 active:scale-95 hover:scale-105 transition-all duration-300 animate-shimmer cursor-pointer border border-pink-300/30"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span>{buttonText}</span>
              <MailOpen className="w-5 h-5 text-pink-200 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Romantic whisper caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-xs sm:text-sm text-pink-300/60 font-sans tracking-wider"
      >
        Turn up your volume for the best experience 🎵
      </motion.p>
    </motion.div>
  );
}
