import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function RosePetals({ count = 18 }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const left = Math.random() * 100;
      const duration = Math.random() * 9 + 7; // 7s to 16s
      const delay = Math.random() * 7;
      const size = Math.floor(Math.random() * 18) + 16; // 16px to 34px
      const sway = Math.random() * 120 - 60; // -60px to 60px
      const rotationZ = Math.random() * 360;
      const flip = Math.random() > 0.5 ? 1 : -1;

      return {
        id: i,
        left,
        duration,
        delay,
        size,
        sway,
        rotationZ,
        flip,
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: '-10vh',
            x: 0,
            opacity: 0,
            rotateZ: petal.rotationZ,
            rotateX: 0,
            rotateY: 0,
          }}
          animate={{
            y: '105vh',
            x: [0, petal.sway, -petal.sway * 0.7, petal.sway * 0.5],
            opacity: [0, 0.85, 0.9, 0],
            rotateZ: [petal.rotationZ, petal.rotationZ + 180 * petal.flip, petal.rotationZ + 360 * petal.flip],
            rotateX: [0, 180, 360],
            rotateY: [0, 120, 240, 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            perspective: 800,
          }}
        >
          {/* Organic 3D Rose Petal SVG */}
          <svg
            viewBox="0 0 40 50"
            className="w-full h-full filter drop-shadow(0 4px 6px rgba(159, 18, 57, 0.4))"
          >
            <defs>
              <linearGradient id={`petal-grad-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
            </defs>
            <path
              d="M20 0 C 35 5, 40 25, 32 40 C 25 50, 15 50, 8 40 C 0 25, 5 5, 20 0 Z"
              fill={`url(#petal-grad-${petal.id})`}
              opacity="0.92"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
