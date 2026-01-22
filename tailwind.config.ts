import type { Config } from "tailwindcss";

const config: Config = {
  // We are adding "./*" to catch files in the root if src isn't working
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. ADD THIS FONT FAMILY SECTION 👇
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        suronex: {
          pink: "#D33E9E",
          purple: "#4C32B8",
          blue: "#3530BA",
          dark: "#000000",
          card: "#121212",
        },
      },
      backgroundImage: {
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #3530BA 0deg, #D33E9E 180deg, #3530BA 360deg)',
      },
    },
  },
  plugins: [],
};
export default config;