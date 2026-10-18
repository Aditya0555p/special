import React from 'react';
import { motion } from 'framer-motion';

export default function AudioVisualizer({ isPlaying = false, barCount = 5 }) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className="flex items-center gap-1 h-5 px-1">
      {bars.map((bar) => {
        const heights = [
          [25, 80, 45, 95, 30],
          [60, 30, 90, 40, 75],
          [40, 95, 35, 70, 50],
          [80, 45, 100, 35, 60],
          [35, 70, 50, 85, 40],
        ][bar % 5];

        const duration = 0.8 + (bar % 3) * 0.25;

        return (
          <motion.span
            key={bar}
            className="w-1 rounded-full bg-gradient-to-t from-pink-500 via-rose-400 to-amber-200"
            animate={
              isPlaying
                ? {
                    height: heights.map((h) => `${h}%`),
                    opacity: [0.7, 1, 0.8, 1, 0.7],
                  }
                : {
                    height: '20%',
                    opacity: 0.35,
                  }
            }
            transition={
              isPlaying
                ? {
                    duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }
                : {
                    duration: 0.3,
                  }
            }
            style={{
              boxShadow: isPlaying ? '0 0 8px rgba(244, 63, 94, 0.6)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
