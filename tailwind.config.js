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
      },
      boxShadow: {
        glow: "0 0 54px rgba(244, 241, 234, 0.14)",
      },
    },
  },
  plugins: [],
};
