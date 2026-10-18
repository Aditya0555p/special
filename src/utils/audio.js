/**
 * Web Audio API synthesizer for romantic sound effects and backup ambient sound.
 * Zero external audio dependencies required, guaranteeing instant sound on all browsers!
 */

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a magnificent romantic harp and chime celebration sound effect
 * triggered when the user clicks "YES! 💖"
 */
export function playRomanticSuccessSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    // Magical pentatonic / major 9th harp cascade
    const frequencies = [
      523.25, // C5
      659.25, // E5
      783.99, // G5
      987.77, // B5
      1046.50, // C6
      1318.51, // E6
      1567.98, // G6
      1975.53, // B6
      2093.00, // C7
    ];

    const now = ctx.currentTime;

    frequencies.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave with slight harmonic overtone for crystalline music-box bell tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      // Volume envelope: quick crisp attack, long glittering decay
      const noteStart = now + index * 0.08;
      const duration = 2.8;

      gain.gain.setValueAtTime(0, noteStart);
      gain.gain.linearRampToValueAtTime(0.18, noteStart + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteStart);
      osc.stop(noteStart + duration);
    });

    // Add warm golden bass bloom at the start
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(130.81, now); // C3
    bassGain.gain.setValueAtTime(0, now);
    bassGain.gain.linearRampToValueAtTime(0.25, now + 0.05);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    bassOsc.connect(bassGain);
    bassGain.connect(ctx.destination);
    bassOsc.start(now);
    bassOsc.stop(now + 3.5);
  } catch (err) {
    console.warn('Audio playback error:', err);
  }
}

/**
 * Play a gentle romantic droplet chime (used on envelope open or step transitions)
 */
export function playSoftChime() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [880, 1174.66]; // A5, D6

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      gain.gain.setValueAtTime(0, now + idx * 0.07);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.07 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 1.2);
    });
  } catch (err) {
    // Graceful fallback
  }
}
