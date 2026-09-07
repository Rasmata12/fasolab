import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C1B3F",
          light: "#17295C",
        },
        primary: {
          DEFAULT: "#1AA89C",
          dark: "#0A7A72",
          light: "#22D3C8",
          tint: "#EAF7F5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EFEAE0",
          foreground: "#0C1B3F",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
        },
        paper: "#F4F1EB",
        surface: "#FAF8F4",
        muted: "#6B7280",
        line: "#E2DDD5",
        // Semantic aliases used by components/ui/button.tsx (shadcn pattern)
        background: "#FFFFFF",
        foreground: "#0C1B3F",
        border: "#E2DDD5",
        input: "#E2DDD5",
        ring: "#1AA89C",
        destructive: "#DC2626",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "wave-drift": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-a": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(10px) rotate(-1deg)" },
        },
        "particle-float": {
          "0%, 100%": { transform: "translateY(0px)", opacity: "0.35" },
          "50%": { transform: "translateY(-8px)", opacity: "0.95" },
        },
        "glow-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.25" },
          "50%": { transform: "scale(1.15)", opacity: "0.4" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "float-a": "float-a 6s ease-in-out infinite",
        "float-b": "float-b 7s ease-in-out infinite",
        "wave-swim": "wave-drift 15s linear infinite",
        "particle-float": "particle-float 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 40px rgba(16,185,129,0.28), 0 0 80px rgba(16,185,129,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
