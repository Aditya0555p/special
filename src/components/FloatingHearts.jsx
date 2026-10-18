import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts({ count = 20 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.floor(Math.random() * 24) + 14; // 14px to 38px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 8 + 8; // 8s to 16s
      const delay = Math.random() * 8;
      const opacity = Math.random() * 0.4 + 0.15; // 0.15 to 0.55
      const sway = Math.random() * 60 - 30; // -30px to 30px
      const colors = ['#f472b6', '#ec4899', '#db2777', '#f43f5e', '#fb7185', '#c084fc', '#e879f9'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        size,
        left,
        duration,
        delay,
        opacity,
        sway,
        color,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: '105vh',
            x: 0,
            opacity: 0,
            scale: 0.6,
            rotate: 0,
          }}
          animate={{
            y: '-10vh',
            x: [0, heart.sway, -heart.sway, 0],
            opacity: [0, heart.opacity, heart.opacity * 0.8, 0],
            scale: [0.6, 1, 1.1, 0.8],
            rotate: [-15, 15, -10, 20],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            color: heart.color,
            filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.35))',
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-80">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
