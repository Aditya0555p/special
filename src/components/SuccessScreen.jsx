import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RotateCcw, Share2, Award, Download } from 'lucide-react';
import { playRomanticSuccessSound } from '../utils/audio';

export default function SuccessScreen({ config, onRestart }) {
  const [copied, setCopied] = useState(false);

  // Trigger high-production romantic confetti & fireworks explosion
  useEffect(() => {
    // Play romantic harp celebration chime
    playRomanticSuccessSound();

    // 1. Initial immediate heart & confetti explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f43f5e', '#ec4899', '#fb7185', '#ffd700'],
    });

    fire(0.2, {
      spread: 60,
      colors: ['#e11d48', '#f472b6', '#ffffff', '#a855f7'],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#ff2a85', '#ff70a6', '#ff9770', '#ffd670'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#e879f9', '#f43f5e', '#ffffff'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1'],
    });

    // 2. Continuous fireworks bursts for 4.5 seconds
    const duration = 4.5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);

      // Fireworks from left and right edges
      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#f43f5e', '#ec4899', '#a855f7', '#fbbf24', '#ffffff'],
        zIndex: 1000,
      });

      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#f43f5e', '#ec4899', '#a855f7', '#fbbf24', '#ffffff'],
        zIndex: 1000,
      });
    }, 350);

    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'She Said YES! 💖',
          text: 'The best day of my life! 💕✨',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const yesConfig = config.responses?.yes || {};
  const title = yesConfig.title || 'YOU JUST MADE MY WORLD BEAUTIFUL! 💕';
  const message =
    yesConfig.message ||
    "Maybe this is the beginning of something really special. I can't wait to create beautiful memories with you. ❤️";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[85vh] px-4 sm:px-6 py-8 text-center max-w-3xl mx-auto z-10 w-full"
    >
      {/* Top Celebration Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-panel border border-pink-400/50 text-pink-100 text-sm font-semibold mb-6 shadow-xl shadow-rose-600/30 bg-rose-600/20"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
        <span>{yesConfig.badge || 'Forever Starts Here 💍'}</span>
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
      </motion.div>

      {/* Main Glass Celebration Card */}
      <div className="w-full glass-panel-glow rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-2xl border border-pink-400/40 shadow-2xl shadow-rose-950/70">
        {/* Shimmering animated light halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 via-rose-500/30 to-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

        {/* Big Celebration Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.25, 1] }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-300 p-0.5 shadow-2xl shadow-pink-600/50"
        >
          <div className="w-full h-full bg-[#150421] rounded-[22px] flex items-center justify-center text-rose-400">
            <span className="text-4xl sm:text-5xl animate-bounce">💍</span>
          </div>
        </motion.div>

        {/* Required Primary Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-extrabold text-romantic-gradient tracking-tight leading-snug mb-5"
        >
          {title}
        </motion.h1>

        {/* Required Secondary Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-base sm:text-xl md:text-2xl text-pink-100/95 font-serif max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {message}
        </motion.p>

        {/* Romantic Keepsake Certificate Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 border border-pink-400/30 rounded-2xl p-5 max-w-md mx-auto mb-8 text-pink-200 text-xs sm:text-sm font-sans"
        >
          <div className="flex items-center justify-center gap-2 text-amber-300 font-semibold mb-2">
            <Award className="w-4 h-4" />
            <span>Digital Keepsake & Promise</span>
          </div>
          <p className="italic text-pink-100/80">
            "To love, laugh, listen, and cherish every sunrise and sunset together."
          </p>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-pink-300/70">
            <span>Special Date: Today & Always</span>
            <span>With All My Love ❤️</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Relive / Restart Button */}
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-600 shadow-lg shadow-pink-600/40 hover:shadow-xl hover:shadow-rose-500/60 active:scale-95 hover:scale-105 transition-all cursor-pointer border border-pink-300/30"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{yesConfig.actionButtonText || 'Relive Our Moment ↺'}</span>
          </button>

          {/* Share Moment Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-pink-200 glass-panel hover:bg-white/10 hover:text-white border border-pink-400/30 transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-pink-300" />
            <span>{copied ? 'Link Copied! 💖' : 'Share Keepsake 💌'}</span>
          </button>
        </motion.div>
      </div>

      {/* Floating congratulatory sparkles */}
      <p className="mt-6 text-xs text-pink-300/70 font-sans tracking-wider">
        Thank you for being the most wonderful part of my world ✨
      </p>
    </motion.div>
  );
}
