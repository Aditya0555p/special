import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight, Camera } from 'lucide-react';

export default function PhotoGallery({ config, onNext }) {
  const photos = config.gallery?.photos || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[82vh] px-4 sm:px-6 py-8 max-w-4xl mx-auto z-10 w-full"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-pink-400/30 text-pink-200 text-xs sm:text-sm font-medium mb-3">
          <Camera className="w-4 h-4 text-pink-400" />
          <span>{config.gallery?.title || 'Our Sweet Memories'}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-romantic-gradient">
          Moments That Made Me Fall For You
        </h2>
        <p className="text-pink-200/70 text-sm sm:text-base mt-2 max-w-lg mx-auto">
          {config.gallery?.subtitle || 'Every picture holds a feeling I never want to forget 💫'}
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full mb-10">
        {photos.map((photo, index) => {
          // Alternating tilt angles for Polaroid vintage look
          const tilts = [-3, 2, -2, 3];
          const tilt = tilts[index % tilts.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              className="group relative bg-[#180a22]/80 backdrop-blur-md p-3.5 pb-5 rounded-2xl border border-pink-500/30 shadow-xl shadow-pink-950/40 transition-all duration-300"
              style={{ transform: `rotate(${tilt}deg)` }}
            >
              {/* Decorative Washi Tape on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-pink-500/25 backdrop-blur-sm border border-pink-300/30 rounded-sm rotate-1 shadow-sm pointer-events-none" />

              {/* Photo Image Frame */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/40 relative mb-3">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to high quality romantic gradient if URL fails
                    e.target.src =
                      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption & Date in romantic handwriting style */}
              <div className="px-1 text-center">
                <p className="text-pink-100 font-serif text-sm sm:text-base font-medium line-clamp-2">
                  "{photo.caption}"
                </p>
                {photo.date && (
                  <p className="text-xs text-pink-300/60 font-sans mt-1 flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span>{photo.date}</span>
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Continue Button to The Proposal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 shadow-xl shadow-pink-600/40 hover:shadow-2xl hover:shadow-rose-500/60 active:scale-95 hover:scale-105 transition-all duration-300 animate-shimmer cursor-pointer border border-pink-300/30"
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <span>{config.gallery?.buttonText || 'Continue to The Question 💍'}</span>
            <ArrowRight className="w-5 h-5 text-pink-200 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}
