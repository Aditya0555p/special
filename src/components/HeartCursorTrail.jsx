import React, { useEffect, useState } from 'react';

export default function HeartCursorTrail() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Check if pointer is fine (desktop mouse) and user doesn't prefer reduced motion
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    let lastTime = 0;
    const colors = ['#f472b6', '#fb7185', '#fda4af', '#f43f5e', '#e879f9'];

    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle creation to every 45ms for buttery smoothness without DOM bloating
      if (now - lastTime < 45) return;
      lastTime = now;

      const newHeart = {
        id: Math.random().toString(36).substring(2, 9),
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 8) + 12, // 12px to 20px
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 40 - 20,
      };

      setHearts((prev) => [...prev.slice(-15), newHeart]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Interval to remove expired hearts
    const interval = setInterval(() => {
      setHearts((prev) => prev.filter((h) => Date.now() - h.id > 1000 ? false : true));
    }, 200);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none transition-all duration-700 ease-out animate-cursor-float"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            color: heart.color,
            fontSize: `${heart.size}px`,
            filter: 'drop-shadow(0 0 6px rgba(244, 63, 94, 0.4))',
            animation: 'cursorHeartFade 0.75s forwards ease-out',
          }}
        >
          ❤️
        </span>
      ))}
      <style>{`
        @keyframes cursorHeartFade {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -140%) scale(0.4) rotate(15deg);
          }
        }
      `}</style>
    </div>
  );
}
