/**
 * ===================================================================
 * 💖 ROMANTIC PROPOSAL WEBSITE CONFIGURATION
 * ===================================================================
 * Personalized for Anchal & Aditya 
 * Distance: Delhi ↔ Punjab
 * Connection: 5 Days of non-stop Instagram, Snapchat & Voice Calls ❤️
 */

export const proposalConfig = {
  // -----------------------------------------------------------------
  // 1. Names & Identity
  // -----------------------------------------------------------------
  crushName: "Anchal",
  senderName: "Aditya",

  // -----------------------------------------------------------------
  // 2. Landing Page
  // -----------------------------------------------------------------
  landing: {
    // Top headline
    title: "Hey, Anchal... 💗",
    // Subtitle text
    subtitle:
      "Bas 5 din pehle shuru hui humari baat, par dil ko lagta hai jaise barson se jaante hain... I have something very special to tell you 💫",
    // Glowing action button
    buttonText: "Open My Heart 💌",
    // Romantic badge tag
    badge: "Delhi ✈️ Punjab • A special secret for Anchal ✨",
  },

  // -----------------------------------------------------------------
  // 3. Romantic Love Letter (Typed out line by line)
  // -----------------------------------------------------------------
  loveLetter: {
    title: "From Delhi to Punjab With All My Heart",
    date: "5 Magical Days & Counting ✨",
    paragraphs: [
      "I don't know exactly when it happened, but somewhere between our Instagram DMs, Snapchat streaks, and your sweet smile, you became someone really special to me in just 5 days.",
      "Main Delhi mein baith kar Punjab ke baare mein sochta hoon aur har baar bina wajah muskura deta hoon. Hamari late-night chatting aur endless baaton ne 300+ kilometers ki doori ko bilkul mita diya hai.",
      "Log kehte hain 5 din bahut kam hote hain kisi ko samajhne ke liye, lekin dil ko pata hota hai jab use apna sabse pyara insaan mil jata hai. So today, I don't want to keep these feelings to myself anymore... ❤️",
    ],
    buttonText: "There's One More Thing, Anchal... 💖",
  },

  // -----------------------------------------------------------------
  // 4. Romantic Memories & Photo Gallery
  // -----------------------------------------------------------------
  gallery: {
    enabled: true,
    title: "Our 5 Days Story",
    subtitle: "From Insta DMs & Snap streaks to late night voice calls 💫",
    buttonText: "Continue to The Big Question 💍",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
        caption: "Insta DMs aur Snap streaks jahan se hamari pyari si kahani shuru hui 📱✨",
        date: "Day 1: Where it all began",
      },
      {
        url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        caption: "Late night voice calls jab ghanton guzar gaye aur waqt ka pata hi nahi chala 🌙📞",
        date: "Midnight whispers & laughs",
      },
      {
        url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        caption: "Delhi ↔ Punjab: Distance means so little when you mean so much to me ✈️❤️",
        date: "Miles apart, one at heart",
      },
    ],
  },

  // -----------------------------------------------------------------
  // 5. The Proposal Screen
  // -----------------------------------------------------------------
  proposal: {
    tagline: "For the girl in Punjab who stole this Delhi boy's heart...",
    question: "Anchal, Will You Be Mine? ❤️",
    subtitle:
      "Distance chahe Delhi aur Punjab ke beech kitna bhi ho, mera dil har pal sirf aapke liye dhadakta hai.",
    yesButtonText: "YES! 💖",
    thinkButtonText: "Let Me Think 🥺",
  },

  // -----------------------------------------------------------------
  // 6. Responses
  // -----------------------------------------------------------------
  responses: {
    // When Anchal says YES!
    yes: {
      title: "YOU JUST MADE MY WORLD BEAUTIFUL, ANCHAL! 💕",
      message:
        "Delhi aur Punjab ke beech ki doori ab aur bhi haseen ho gayi hai. 5 din mein aapne meri poori duniya badal di... I can't wait to create a lifetime of beautiful memories with you! ❤️",
      badge: "Aditya ❤️ Anchal • Forever Starts Here 💍",
      actionButtonText: "Relive Our Moment ↺",
      downloadCardText: "Save Our Keepsake 💌",
    },
    // When Anchal clicks "Let Me Think"
    think: {
      title: "Take All The Time You Need, Anchal 🌸",
      message:
        "Take your time, there's no pressure at all. Your comfort and happiness matter to me the most, Anchal. 💗",
      note: "Dooriyan sabr sikhata hain, aur sachha pyaar hamesha intezaar karta hai. Whenever you feel ready, Aditya is right here for you.",
      backButtonText: "I'm Ready Now 💕",
    },
  },

  // -----------------------------------------------------------------
  // 7. Background Music Settings
  // -----------------------------------------------------------------
  music: {
    audioSrc: "/music.mp3",
    title: "Romantic Melody (For Anchal)",
    artist: "From Aditya's Heart",
    defaultVolume: 0.35, // 0.0 to 1.0 (Low & gentle by default)
  },
};
