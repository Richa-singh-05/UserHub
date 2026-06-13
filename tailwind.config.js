// tailwind.config.js
// Place this in the ROOT of your Vite project

/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom colours to match the design
      colors: {
        brand: {
          purple : "#667eea",
          blue   : "#4facfe",
          green  : "#43e97b",
          pink   : "#f093fb",
          red    : "#f5576c",
          dark   : "#0b0b18",
          card   : "#13132a",
          border : "#2a2a45",
        },
      },
      // Custom font
      fontFamily: {
        sans: ["'Segoe UI'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
