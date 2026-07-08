/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0b0b0b",
        panel: "#121212",
        line: "rgba(255, 255, 255, 0.13)",
        paper: "#f4f1ea",
        amber: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
          muted: "rgba(245, 158, 11, 0.15)",
          border: "rgba(245, 158, 11, 0.3)",
        },
      },
      boxShadow: {
        glow: "0 0 54px rgba(244, 241, 234, 0.14)",
        "glow-amber": "0 0 40px rgba(245, 158, 11, 0.18)",
      },
    },
  },
  plugins: [],
};
