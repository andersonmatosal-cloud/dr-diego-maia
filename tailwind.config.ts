import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-profundo": "#17233F",
        "azul-secundario": "#24385F",
        "azul-apoio": "#3A4C73",
        dourado: "#C9AE74",
        "texto-claro": "#F5F5F2",
        "cinza-elegante": "#8E9094",
        "fundo-claro": "#FAFAF8",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(23, 35, 63, 0.15)",
        gold: "0 8px 24px -8px rgba(201, 174, 116, 0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.12)", opacity: "0.75" },
        },
      },
      animation: {
        "pulse-slow": "pulseSlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
