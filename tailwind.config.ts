import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        silver: "var(--silver)",
        "silver-bright": "var(--silver-bright)",
        "silver-dim": "var(--silver-dim)",
        chrome: "var(--chrome)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "grid-move": {
          "0%": { backgroundPosition: "0px 0px" },
          "100%": { backgroundPosition: "64px 64px" },
        },
        "grid-move-diag": {
          "0%": { backgroundPosition: "0px 0px, 0px 0px" },
          "100%": { backgroundPosition: "80px 80px, -80px 80px" },
        },
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "grid-move": "grid-move 6s linear infinite",
        "grid-move-diag": "grid-move-diag 14s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
