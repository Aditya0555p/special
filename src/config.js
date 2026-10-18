/**
 * ===================================================================
 * 💖 ROMANTIC PROPOSAL WEBSITE CONFIGURATION
 * ===================================================================
 * Customize this file with your own names, messages, photos, and music.
 * Everything will update automatically across the entire website!
 */

export const proposalConfig = {
  // -----------------------------------------------------------------
  // 1. Names & Identity
  // -----------------------------------------------------------------
  crushName: "CRUSH_NAME", // e.g. "Sophia", "Aditi", "Emma"
  senderName: "YOUR_NAME", // e.g. "Alex", "Aditya", "Liam"

  // -----------------------------------------------------------------
  // 2. Landing Page
  // -----------------------------------------------------------------
  landing: {
    // Top headline
    title: "Hey, Someone Special... 💗",
    // Subtitle text
    subtitle: "I have something to tell you, something I've wanted to say for a long time...",
    // Glowing action button
    buttonText: "Open My Heart 💌",
    // Romantic badge tag
    badge: "A little secret for you ✨",
  },

  // -----------------------------------------------------------------
  // 3. Romantic Love Letter (Typed out line by line)
  // -----------------------------------------------------------------
  loveLetter: {
    title: "From My Heart to Yours",
    date: "A moment I cherish ✨",
    paragraphs: [
      "I don't know exactly when it happened, but somewhere between our conversations and your smile, you became someone really special to me.",
      "Every time I think about you, I find myself smiling for no reason. Maybe it's silly, maybe it's unexpected, but I don't want to keep these feelings to myself anymore.",
      "So today, I just want to tell you something from my heart... ❤️",
    ],
    buttonText: "There's One More Thing... 💖",
  },

  // -----------------------------------------------------------------
  // 4. Romantic Memories & Photo Gallery (Optional)
  // Set `showGallery: true` to include memories before the big question
  // -----------------------------------------------------------------
  gallery: {
    enabled: true,
    title: "Moments With You",
    subtitle: "Little fragments of joy that stay in my mind 💫",
    buttonText: "Continue to The Question 💍",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        caption: "Where every smile feels like sunshine ✨",
        date: "Our magical moments",
      },
      {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        caption: "Those late night conversations I never wanted to end 🌙",
        date: "Whispers under the stars",
      },
      {
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        caption: "Just thinking about you makes my day brighter 🌸",
        date: "Every single day",
      },
    ],
  },

  // -----------------------------------------------------------------
  // 5. The Proposal Screen
  // -----------------------------------------------------------------
  proposal: {
    tagline: "The moment that matters most...",
    question: "Will You Be Mine? ❤️",
    subtitle: "In a world full of billions of stars, my heart only beats for you.",
    yesButtonText: "YES! 💖",
    thinkButtonText: "Let Me Think 🥺",
  },

  // -----------------------------------------------------------------
  // 6. Responses
  // -----------------------------------------------------------------
  responses: {
    // When she says YES!
    yes: {
      title: "YOU JUST MADE MY WORLD BEAUTIFUL! 💕",
      message:
        "Maybe this is the beginning of something really special. I can't wait to create beautiful memories with you. ❤️",
      badge: "Forever Starts Here 💍",
      actionButtonText: "Relive Our Moment ↺",
      downloadCardText: "Save Our Keepsake 💌",
    },
    // When she clicks "Let Me Think"
    think: {
      title: "Take All The Time You Need 🌸",
      message:
        "Take your time, there's no pressure. Your happiness matters to me. 💗",
      note: "No rush, no expectations. Whenever you're ready, I'm right here.",
      backButtonText: "I'm Ready Now 💕",
    },
  },

  // -----------------------------------------------------------------
  // 7. Background Music Settings
  // -----------------------------------------------------------------
  music: {
    // Place your romantic mp3 in public/music.mp3 or change this URL
    audioSrc: "/music.mp3",
    title: "Romantic Melody (Golden Hour)",
    artist: "Straight from the Heart",
    defaultVolume: 0.35, // 0.0 to 1.0 (Low & gentle by default)
  },
};
