/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class", // use 'class' strategy for dark mode toggling
  theme: {
    extend: {
      colors: {
        // Shared accent colors
        gold: {
          light: "#D4AF37", // rich metallic gold
          DEFAULT: "#C5A028", // primary accent gold
          dark: "#A9861D", // deeper, darker gold for hover/focus
        },

        // Light mode palette
        light: {
          background: "#FFFFFF", // clean white background
          surface: "#F9F9F9", // subtle off-white surface
          text: "#1A1A1A", // deep gray-black text for readability
          accent: "#D4AF37", // same gold tone as accent
        },

        // Dark mode palette
        dark: {
          background: "#0A0A0A", // luxurious deep black
          surface: "#1A1A1A", // slightly lighter black for layers
          text: "#F5F5F5", // soft white text
          accent: "#D4AF37", // gold accent stands out on black
        },
      },
      fontFamily: {
        // Luxury vibes often pair with these fonts
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};

