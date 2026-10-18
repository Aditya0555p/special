import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Sparkles({ count = 25 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 6 + 3; // 3px to 9px
      const duration = Math.random() * 3 + 2; // 2s to 5s
      const delay = Math.random() * 4;
      const color = ['#fbcfe8', '#f472b6', '#e0e7ff', '#fef08a', '#ffffff'][
        Math.floor(Math.random() * 5)
      ];

      return {
        id: i,
        top,
        left,
        size,
        duration,
        delay,
        color,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 1, 0.2, 0],
            scale: [0, 1.2, 1, 0.6, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          <svg viewBox="0 0 24 24" fill={star.color} className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
