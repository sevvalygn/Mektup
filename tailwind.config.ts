import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        overlayFade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        mektupAcil: {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(-10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "overlay-fade": "overlayFade 0.25s ease-out",
        "mektup-acil": "mektupAcil 0.35s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
