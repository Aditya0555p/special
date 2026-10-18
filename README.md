# 💖 Romantic Crush Proposal Website

An emotional, cinematic, interactive, and personalized Crush Proposal website built with **React.js, Vite, JavaScript, Tailwind CSS, and Framer Motion**.

---

## ✨ Features

- **Dreamy Romantic Aesthetic**: Soft pink, lavender, red, and dark luxury twilight gradients with glassmorphism cards and smooth cinematic lighting.
- **Atmospheric Background Effects**: Floating glowing hearts, cascading 3D rose petals, and twinkling fairy starlight particles.
- **Heart Cursor Trail**: Subtle glowing heart trail following the desktop mouse cursor (with full reduced-motion accessibility support).
- **Beating Heart Loading Screen**: Gentle romantic heartbeat animation introducing the surprise.
- **Interactive Landing Page**: Center greeting *"Hey, Someone Special... 💗"* and glowing *"Open My Heart 💌"* button.
- **Typewriter Love Letter**: Animated letter that types out your romantic feelings with soft chimes, wax seal styling, and a skip option.
- **Optional Photo Memories Gallery**: Vintage Polaroid frames with handwritten captions, gentle tilt effects, and washi tape.
- **The Proposal Screen 💍**: Glowing heartbeat animation with falling petals and the big question: *"Will You Be Mine? ❤️"*.
- **Celebration on "YES! 💖"**: Confetti explosion, dual-sided fireworks bursts, romantic harp/chime fanfare, digital keepsake promise card, and replay option.
- **Gentle "Let Me Think 🥺"**: Pressure-free, loving reassurance with an easy button to return whenever ready.
- **Floating Music Player 🎵**:
  - Starts automatically when clicking "Open My Heart 💌" (browser autoplay compliant).
  - Floating player with play/pause, mute/unmute, and volume slider.
  - Animated sound visualizer bars with romantic pink glow.
  - Works with `public/music.mp3` and has a built-in synthesized romantic ambient backup.
  - Helpful tooltip explaining how to replace the song.
- **Easy Personalization**: Change your name, crush's name, messages, questions, and photos in just one single file: `src/config.js`.

---

## 🚀 How to Run Locally in VS Code

### 1. Open the Project in VS Code
1. Open **VS Code**.
2. Go to **File -> Open Folder...** and select this project directory (`proposal`).

### 2. Open the Integrated Terminal
Press <kbd>Ctrl</kbd> + <kbd>`</kbd> (or go to **Terminal -> New Terminal**).

### 3. Install Dependencies
```bash
npm install
```

### 4. Start the Development Server
```bash
npm run dev
```

### 5. View in Your Browser
Click the local URL shown in the terminal (usually **http://localhost:5173**) or press <kbd>Ctrl</kbd> + click on it.

---

## 🎨 How to Personalize (in `src/config.js`)

Open [`src/config.js`](file:///c:/Users/aditya/Desktop/proposal/src/config.js) in your editor. You can change:

| Setting | Description |
| :--- | :--- |
| `crushName` | Replace `"CRUSH_NAME"` with your crush's name (e.g. `"Sophia"`, `"Aditi"`) |
| `senderName` | Replace `"YOUR_NAME"` with your name (e.g. `"Alex"`, `"Aditya"`) |
| `landing` | Headline, subtitle, and glowing button text |
| `loveLetter` | The 3 paragraphs typed out line-by-line |
| `gallery` | Toggle `enabled: true/false`, add your own photos and captions |
| `proposal` | The proposal question (`"Will You Be Mine? ❤️"`) and button labels |
| `responses.yes` | Celebration title, romantic message, and keepsake card |
| `responses.think`| Gentle reassurance message |
| `music` | Custom audio file path and default volume |

---

## 🎵 Adding Your Own Background Song

1. Place your romantic MP3 song in the [`public/`](file:///c:/Users/aditya/Desktop/proposal/public) folder.
2. Name it `music.mp3` (or update `music.audioSrc` in [`src/config.js`](file:///c:/Users/aditya/Desktop/proposal/src/config.js)).
3. The website will automatically play your song with low volume by default!

---

## 📦 Building for Production / Deployment

To build an optimized production bundle ready for Vercel, Netlify, or GitHub Pages:

```bash
npm run build
```

The output will be in the `dist/` directory.

---

Crafted with ❤️ for your special someone!
