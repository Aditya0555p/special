import React, { useState, useRef, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { proposalConfig } from './config';

// Background & Effects
import FloatingHearts from './components/FloatingHearts';
import RosePetals from './components/RosePetals';
import Sparkles from './components/Sparkles';
import HeartCursorTrail from './components/HeartCursorTrail';

// UI Navigation & Audio
import MusicPlayer from './components/MusicPlayer';
import ProgressBar from './components/ProgressBar';
import HeaderControls from './components/HeaderControls';

// Main Flow Screens
import LoadingScreen from './components/LoadingScreen';
import LandingScreen from './components/LandingScreen';
import LoveLetter from './components/LoveLetter';
import PhotoGallery from './components/PhotoGallery';
import ProposalScreen from './components/ProposalScreen';
import SuccessScreen from './components/SuccessScreen';
import ThinkingScreen from './components/ThinkingScreen';

export default function App() {
  const [config] = useState(proposalConfig);
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0); // 0: Landing, 1: Letter, 2: Gallery (if enabled), 3: Proposal, 4: Success
  const [isThinking, setIsThinking] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef(null);

  // Auto-dismiss loading screen after initial romantic heartbeat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Compute step definitions dynamically based on whether gallery is enabled
  const steps = useMemo(() => {
    const list = [
      { id: 'landing', label: 'Welcome 💌' },
      { id: 'letter', label: 'Our Story 📜' },
    ];

    if (config.gallery?.enabled) {
      list.push({ id: 'gallery', label: 'Memories 📸' });
    }

    list.push({ id: 'proposal', label: 'The Question 💍' });
    list.push({ id: 'celebration', label: 'Forever 💕' });

    return list;
  }, [config.gallery?.enabled]);

  // Audio start trigger on first user interaction (Open My Heart button)
  const handleOpenHeart = () => {
    if (audioRef.current && !isPlayingMusic) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((err) => console.log('Autoplay handled by user action:', err));
    }
    setCurrentStep(1); // Proceed to Love Letter
  };

  // Letter Next Action
  const handleLetterNext = () => {
    if (config.gallery?.enabled) {
      setCurrentStep(2); // Go to Gallery
    } else {
      setCurrentStep(2); // If gallery disabled, step 2 is proposal
    }
  };

  // Gallery Next Action
  const handleGalleryNext = () => {
    // Proposal is step 3 when gallery enabled, or step 2 when disabled
    setCurrentStep(config.gallery?.enabled ? 3 : 2);
  };

  // Say YES Action
  const handleSayYes = () => {
    setIsThinking(false);
    // Success is the final step
    setCurrentStep(steps.length - 1);
  };

  // Say Think Action
  const handleSayThink = () => {
    setIsThinking(true);
  };

  // Back from Think to Proposal
  const handleBackToProposal = () => {
    setIsThinking(false);
  };

  // Restart Experience
  const handleRestart = () => {
    setIsThinking(false);
    setCurrentStep(0);
  };

  // Jump to specific completed step
  const handleStepClick = (stepIndex) => {
    setIsThinking(false);
    setCurrentStep(stepIndex);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between select-none">
      {/* Background Ambience Layers */}
      <FloatingHearts count={22} />
      <Sparkles count={30} />
      <RosePetals count={currentStep >= (config.gallery?.enabled ? 3 : 2) ? 26 : 14} />
      <HeartCursorTrail />

      {/* Persistent Audio Player */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
        musicConfig={config.music}
        audioRef={audioRef}
      />

      {/* Header Controls (Restart, Personalization Info) */}
      <HeaderControls
        onRestart={handleRestart}
        currentStep={currentStep}
        config={config}
      />

      {/* Timeline Progress Bar (Visible once past loading and not in thinking screen) */}
      {!isLoading && !isThinking && (
        <ProgressBar
          currentStep={currentStep}
          totalSteps={steps.length}
          steps={steps}
          onStepClick={handleStepClick}
        />
      )}

      {/* Initial Beating Heart Preloader */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-16 relative z-10 w-full">
        <AnimatePresence mode="wait">
          {/* Thinking Screen (Modal/Full view) */}
          {isThinking ? (
            <ThinkingScreen
              key="thinking-screen"
              config={config}
              onBackToProposal={handleBackToProposal}
            />
          ) : currentStep === 0 ? (
            /* Step 1: Landing Page */
            <LandingScreen
              key="landing-screen"
              config={config}
              onOpenHeart={handleOpenHeart}
            />
          ) : currentStep === 1 ? (
            /* Step 2: Love Letter */
            <LoveLetter
              key="letter-screen"
              config={config}
              onNext={handleLetterNext}
            />
          ) : config.gallery?.enabled && currentStep === 2 ? (
            /* Step 3: Photo Gallery (if enabled) */
            <PhotoGallery
              key="gallery-screen"
              config={config}
              onNext={handleGalleryNext}
            />
          ) : currentStep === (config.gallery?.enabled ? 3 : 2) ? (
            /* Step 4: The Proposal Screen */
            <ProposalScreen
              key="proposal-screen"
              config={config}
              onSayYes={handleSayYes}
              onSayThink={handleSayThink}
            />
          ) : (
            /* Step 5: Success / Celebration Screen */
            <SuccessScreen
              key="success-screen"
              config={config}
              onRestart={handleRestart}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer Branding & Sweet Whisper */}
      <footer className="w-full text-center py-4 relative z-10 text-[11px] sm:text-xs text-pink-300/40">
        <p className="flex items-center justify-center gap-1.5 font-light">
          <span>Crafted with pure love</span>
          <span className="text-rose-500 animate-pulse">❤️</span>
          <span>for that one special person in a lifetime</span>
        </p>
      </footer>
    </div>
  );
}
