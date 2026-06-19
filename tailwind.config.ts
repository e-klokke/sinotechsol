import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2026 refined dark mode palette for global tech brand
        navy: {
          DEFAULT: "#0F1828", // Refined base (softer than pure black)
          900: "#0A1218", // Deepest layer
          800: "#0F1828", // Base background
          700: "#1A2332", // Elevated surface 1
          600: "#232F42", // Elevated surface 2
          500: "#2D3B52", // Elevated surface 3
        },
        slate: {
          DEFAULT: "#1E2B3E", // Updated for elevation
          light: "#2A3849", // Lighter variant for cards
        },
        white: "#FFFFFF",
        text: {
          primary: "#E8EDF4", // Off-white for reduced strain
          secondary: "#C9D1D9", // Muted text
          tertiary: "#8B95A8", // Subtle text
        },
        gray: {
          400: "#94A3B8",
          600: "#475569",
          700: "#374151",
          800: "#1F2937",
        },
        accent: {
          DEFAULT: "#0891D0", // Desaturated to 75% for dark mode harmony
          hover: "#0AA5E8", // Slightly brighter on hover
          glow: "rgba(8, 145, 208, 0.2)", // Soft glow effect
        },
        gradient: {
          from: "#0F1828",
          via: "#1A2744",
          to: "#0A1628",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.05) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.05) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.1) 0px, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
