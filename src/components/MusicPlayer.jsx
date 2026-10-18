import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, AlertCircle, Info, Sparkles } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';

export default function MusicPlayer({
  isPlaying,
  setIsPlaying,
  musicConfig,
  audioRef,
}) {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(musicConfig?.defaultVolume ?? 0.35);
  const [audioError, setAudioError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHelpNotice, setShowHelpNotice] = useState(false);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted, audioRef]);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(false);
        })
        .catch((err) => {
          console.warn('Playback error or file missing:', err);
          setAudioError(true);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.volume = nextMuted ? 0 : volume;
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (isMuted && newVol > 0) {
      setIsMuted(false);
    }
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  const handleAudioError = () => {
    console.warn(`Audio file at "${musicConfig?.audioSrc}" could not be loaded.`);
    setAudioError(true);
    setShowHelpNotice(true);
  };

  return (
    <>
      {/* Underlying Audio Element */}
      <audio
        ref={audioRef}
        src={musicConfig?.audioSrc || '/music.mp3'}
        loop
        preload="auto"
        onError={handleAudioError}
        onPlay={() => {
          setIsPlaying(true);
          setAudioError(false);
        }}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Music Widget */}
      <div className="fixed top-4 right-4 z-40 flex flex-col items-end gap-2">
        <div
          className={`flex items-center gap-3 px-3.5 py-2 rounded-full glass-panel-glow backdrop-blur-xl border border-pink-500/30 shadow-lg shadow-pink-950/40 transition-all duration-300 ${
            isExpanded ? 'bg-black/60 pr-4' : 'bg-black/40 hover:bg-black/60'
          }`}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Animated Music Visualizer */}
          <AudioVisualizer isPlaying={isPlaying && !isMuted} barCount={4} />

          {/* Track Info (expanded or mobile) */}
          <div className="flex flex-col text-left max-w-[130px] sm:max-w-[170px] truncate">
            <span className="text-xs font-semibold text-pink-200 truncate flex items-center gap-1">
              <Music className="w-3 h-3 text-pink-400 inline shrink-0" />
              {musicConfig?.title || 'Romantic Melody'}
            </span>
            <span className="text-[10px] text-pink-300/70 truncate">
              {audioError ? 'Audio file missing' : isPlaying ? 'Playing' : 'Paused'}
            </span>
          </div>

          {/* Play / Pause Toggle Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-pink-600/40 hover:scale-105 active:scale-95 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute music' : 'Mute music'}
            className="p-1.5 text-pink-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-rose-400" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          {/* Volume Slider in expanded view */}
          {isExpanded && (
            <div className="hidden sm:flex items-center gap-1.5 pl-1 border-l border-white/10">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1.5 accent-pink-500 bg-white/20 rounded-lg cursor-pointer"
                aria-label="Music volume"
              />
            </div>
          )}

          {/* Info / Help Trigger */}
          <button
            onClick={() => setShowHelpNotice((prev) => !prev)}
            aria-label="Music setup info"
            className="text-pink-300/70 hover:text-pink-200 transition-colors p-1"
          >
            {audioError ? (
              <AlertCircle className="w-4 h-4 text-amber-400 animate-pulse" />
            ) : (
              <Info className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Helpful Music Setup Notice Card */}
        {showHelpNotice && (
          <div className="w-72 sm:w-80 p-3.5 rounded-2xl glass-panel-glow bg-[#1a0624]/90 border border-pink-500/40 shadow-2xl text-xs text-pink-100 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-semibold text-pink-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                Custom Background Music
              </span>
              <button
                onClick={() => setShowHelpNotice(false)}
                className="text-pink-400 hover:text-white text-xs px-1"
              >
                ✕
              </button>
            </div>
            <p className="text-pink-200/80 leading-relaxed mb-2 text-[11px]">
              Want your own special song? Place your romantic audio file at:
            </p>
            <div className="bg-black/50 px-2.5 py-1.5 rounded-lg border border-pink-500/20 font-mono text-[11px] text-pink-300 mb-2">
              public/music.mp3
            </div>
            <p className="text-[10px] text-pink-300/60 italic">
              Volume is set low by default ({Math.round(volume * 100)}%) for a gentle romantic atmosphere.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
