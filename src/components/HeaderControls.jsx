import React, { useState } from 'react';
import { RotateCcw, Sliders, X, Sparkles, Heart } from 'lucide-react';

export default function HeaderControls({ onRestart, currentStep, config }) {
  const [showConfigModal, setShowConfigModal] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2">
        {/* Restart Button (visible once past landing screen) */}
        {currentStep > 0 && (
          <button
            onClick={onRestart}
            aria-label="Restart experience"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel hover:bg-white/10 text-pink-300 hover:text-white border border-pink-500/20 shadow-md text-xs font-medium transition-all"
            title="Start from beginning"
          >
            <RotateCcw className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">Restart</span>
          </button>
        )}

        {/* Quick Customizer Info Modal Toggle */}
        <button
          onClick={() => setShowConfigModal(true)}
          aria-label="How to customize"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel hover:bg-white/10 text-pink-300 hover:text-white border border-pink-500/20 shadow-md text-xs font-medium transition-all"
          title="Personalization guide"
        >
          <Sliders className="w-3.5 h-3.5 text-pink-400" />
          <span className="hidden sm:inline">Customize</span>
        </button>
      </div>

      {/* Customization Quick Guide Modal */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-lg glass-panel-glow bg-[#180824]/95 p-6 rounded-3xl border border-pink-500/40 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2 text-pink-200 font-serif text-lg font-semibold">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span>How to Personalize Your Website</span>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-pink-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-pink-100/90 leading-relaxed font-sans max-h-[65vh] overflow-y-auto pr-1">
              <p>
                All names, questions, messages, and photos are centralized in a single configuration file:
              </p>

              <div className="bg-black/60 p-3 rounded-xl border border-pink-500/30 font-mono text-xs text-pink-300">
                src/config.js
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0">1.</span>
                  <span>
                    <strong>Names:</strong> Change <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">crushName: "CRUSH_NAME"</code> and <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">senderName: "YOUR_NAME"</code>.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0">2.</span>
                  <span>
                    <strong>Background Music:</strong> Replace <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">public/music.mp3</code> with any romantic audio file you prefer.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0">3.</span>
                  <span>
                    <strong>Love Letter:</strong> Customize the typed letter paragraphs in <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">loveLetter.paragraphs</code>.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0">4.</span>
                  <span>
                    <strong>Photos:</strong> Add your own photos and captions in <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">gallery.photos</code> or set <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">enabled: false</code> to jump straight to the proposal.
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold shrink-0">5.</span>
                  <span>
                    <strong>Final Messages:</strong> Update the celebration and thinking responses in <code className="bg-pink-900/40 px-1 py-0.5 rounded text-pink-200">responses</code>.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-600/30 hover:shadow-lg transition-all"
              >
                Got It! 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
