import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Mail, Image, Flame } from 'lucide-react';

export default function ProgressBar({ currentStep, totalSteps, steps, onStepClick }) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[92vw]">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full glass-panel backdrop-blur-xl border border-pink-500/20 shadow-lg shadow-purple-950/30">
        {steps.map((step, idx) => {
          const isActive = idx === currentStep;
          const isCompleted = idx < currentStep;

          return (
            <React.Fragment key={step.id}>
              {/* Step indicator node */}
              <button
                onClick={() => onStepClick && onStepClick(idx)}
                disabled={!isCompleted && !isActive}
                className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500/80 to-rose-500/80 text-white shadow-md shadow-pink-500/30 font-medium'
                    : isCompleted
                    ? 'text-pink-300 hover:text-white cursor-pointer bg-white/5'
                    : 'text-pink-300/30 cursor-not-allowed'
                }`}
                title={step.label}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-transform ${
                    isActive
                      ? 'bg-white scale-125 animate-pulse'
                      : isCompleted
                      ? 'bg-pink-400'
                      : 'bg-white/20'
                  }`}
                />
                <span className="hidden md:inline font-sans text-[11px] whitespace-nowrap">
                  {step.label}
                </span>
              </button>

              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <div className="w-2 sm:w-4 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-rose-400"
                    initial={{ width: 0 }}
                    animate={{ width: isCompleted ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
