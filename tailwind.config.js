/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#5D6777",
          200: "#4D5869",
          300: "#3B475A",
          400: "#1A4E88",
          500: "#00326C",
          600: "#0F1E32",
          700: "#0E1B2D",
          800: "#0D1929",
          900: "#0C1725",
        },
        secondary: {
          100: "#FFD556",
          200: "#FFD145",
          300: "#FFCC32",
          400: "#FFC71E",
          500: "#F45B1E",
          600: "#B57B0A",
          700: "#90580C",
          800: "#83500B",
          900: "#77490A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
  },
  safelist: [
    { pattern: /^bg-.*/ },
    {
      pattern: /^bg-.*/,
      variants: ["hover"],
    },
  ],
  darkMode: "class",
  plugins: [],
};
