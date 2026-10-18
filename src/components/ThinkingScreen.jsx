import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowLeft, Coffee } from 'lucide-react';

export default function ThinkingScreen({ config, onBackToProposal }) {
  const thinkConfig = config.responses?.think || {};
  const message =
    thinkConfig.message ||
    "Take your time, there's no pressure. Your happiness matters to me. 💗";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 py-6 text-center max-w-2xl mx-auto z-10 w-full"
    >
      <div className="w-full glass-panel-glow rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-2xl border border-purple-400/30 shadow-2xl">
        {/* Soft calm ambient light */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Calm Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 flex items-center justify-center text-pink-300 shadow-md">
          <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-pink-300" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-pink-100 mb-4">
          {thinkConfig.title || 'Take All The Time You Need 🌸'}
        </h2>

        {/* Required Message */}
        <p className="text-lg sm:text-2xl font-serif text-pink-200/95 leading-relaxed mb-6 font-medium">
          "{message}"
        </p>

        {/* Respectful reassurance */}
        <p className="text-sm sm:text-base text-pink-300/70 font-sans max-w-md mx-auto leading-relaxed mb-8">
          {thinkConfig.note ||
            "No rush, no expectations. True feelings can never be hurried, and your comfort comes first always."}
        </p>

        {/* Return Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onBackToProposal}
          className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 shadow-lg shadow-pink-600/30 hover:shadow-xl hover:shadow-rose-500/50 transition-all cursor-pointer border border-pink-300/30"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{thinkConfig.backButtonText || "I'm Ready Now 💕"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
