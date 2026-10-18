import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather, ArrowRight, FastForward } from 'lucide-react';
import { playSoftChime } from '../utils/audio';

export default function LoveLetter({ config, onNext }) {
  const paragraphs = config.loveLetter?.paragraphs || [
    "I don't know exactly when it happened, but somewhere between our conversations and your smile, you became someone really special to me.",
    "Every time I think about you, I find myself smiling for no reason. Maybe it's silly, maybe it's unexpected, but I don't want to keep these feelings to myself anymore.",
    "So today, I just want to tell you something from my heart... ❤️",
  ];

  const fullText = paragraphs.join('\n\n');
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const letterRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const speed = 28; // ms per character

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;

        // Trigger occasional soft chime or scroll into view
        if (index % 40 === 0) {
          playSoftChime();
        }
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [fullText]);

  // Skip typing animation immediately
  const handleSkipTyping = () => {
    setDisplayedText(fullText);
    setIsTypingComplete(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[82vh] px-4 sm:px-6 py-6 max-w-3xl mx-auto z-10 w-full"
    >
      {/* Decorative Envelope Header */}
      <div className="w-full relative">
        {/* Floating Feather / Wax Seal Badge */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2 text-pink-300 text-xs sm:text-sm font-medium">
            <Feather className="w-4 h-4 text-pink-400" />
            <span>{config.loveLetter?.date || 'Written with love ✨'}</span>
          </div>

          {!isTypingComplete && (
            <button
              onClick={handleSkipTyping}
              className="inline-flex items-center gap-1 text-xs text-pink-300/80 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-pink-400/20 transition-all cursor-pointer"
            >
              <FastForward className="w-3 h-3" />
              <span>Read All</span>
            </button>
          )}
        </div>

        {/* Letter Parchment / Glass Card */}
        <div
          ref={letterRef}
          className="w-full glass-panel-glow rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden backdrop-blur-2xl border border-pink-500/30 shadow-2xl shadow-rose-950/50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 100% 0%, rgba(244, 63, 94, 0.08) 0%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
          }}
        >
          {/* Subtle watermark heart in background */}
          <Heart className="absolute right-6 bottom-6 w-48 h-48 text-pink-500/5 -rotate-12 pointer-events-none" />

          {/* Salutation */}
          <div className="mb-6 border-b border-pink-500/20 pb-4 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif text-pink-200">
              Dearest {config.crushName && config.crushName !== 'CRUSH_NAME' ? config.crushName : 'Someone Special'},
            </h2>
            <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              💌
            </div>
          </div>

          {/* Letter Content formatted into paragraphs with typewriter text */}
          <div className="min-h-[180px] sm:min-h-[220px] text-pink-100/95 font-serif text-base sm:text-xl leading-relaxed sm:leading-loose whitespace-pre-line tracking-wide">
            {displayedText}

            {/* Glowing Cursor Blinker while typing */}
            {!isTypingComplete && (
              <span className="inline-block w-2 h-5 sm:h-6 bg-pink-400 ml-1 translate-y-1 animate-pulse" />
            )}
          </div>

          {/* Signoff */}
          <div className="mt-8 pt-4 border-t border-pink-500/20 flex flex-col items-end text-right">
            <p className="text-sm text-pink-300/70 font-sans italic">Always thinking of you,</p>
            <p className="text-lg sm:text-xl font-handwriting text-pink-300 font-semibold mt-0.5">
              {config.senderName && config.senderName !== 'YOUR_NAME' ? config.senderName : 'Someone who cares deeply'} 💕
            </p>
          </div>
        </div>
      </div>

      {/* Button: "There's One More Thing... 💖" */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: isTypingComplete ? 1 : 0.85,
          y: 0,
        }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-center"
      >
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 shadow-xl shadow-rose-600/40 hover:shadow-2xl hover:shadow-pink-500/60 active:scale-95 hover:scale-105 transition-all duration-300 animate-shimmer cursor-pointer border border-pink-300/30"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <span>{config.loveLetter?.buttonText || "There's One More Thing... 💖"}</span>
            <ArrowRight className="w-5 h-5 text-pink-200 group-hover:translate-x-1.5 transition-transform" />
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}
