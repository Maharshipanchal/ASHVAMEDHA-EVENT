/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#05060a",
          panel: "#0b0d14",
          raised: "#11141d",
        },
        steel: {
          DEFAULT: "#2a2f3c",
          light: "#3d4354",
          faint: "#1a1e28",
        },
        crimson: {
          DEFAULT: "#b8232c",
          bright: "#e6383f",
          dim: "#5c1418",
        },
        ice: {
          DEFAULT: "#8fa8c7",
          bright: "#bcd2ea",
        },
        ash: {
          50: "#f4f5f7",
          200: "#c7cbd4",
          400: "#8a8f9c",
          600: "#565b68",
        },
      },
      fontFamily: {
        display: ["Chakra Petch", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(184,35,44,0.16), transparent 60%)",
        "grid-lines":
          "linear-gradient(rgba(143,168,199,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(143,168,199,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(184,35,44,0.25)",
        "glow-ice": "0 0 40px rgba(143,168,199,0.18)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-40px,-60px,0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.35 },
          "50%": { opacity: 0.75 },
        },
      },
      animation: {
        drift: "drift 40s linear infinite",
        scanline: "scanline 6s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
