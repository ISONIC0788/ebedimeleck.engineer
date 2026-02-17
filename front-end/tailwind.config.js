/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00bfa6",
        dark: {
          bg: "#1e1e1e",
          card: "#2b2b2b",
          text: "#f0f0f0",
          muted: "#b0b0b0"
        },
        light: {
          bg: "#ffffff",
          text: "#333333",
          muted: "#555555"
        }
      },
      animation: {
        'blink': 'blink 1.5s infinite steps(1)',
        'wave': 'wave 2.5s infinite', // ✅ Added for Hello page
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wave: { // ✅ Added for Hello page
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(14deg)' },
        }
      }
    },
  },
  plugins: [],
}