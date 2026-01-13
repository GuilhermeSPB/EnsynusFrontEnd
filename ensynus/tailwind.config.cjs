/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeInRight: {
          "0%": { opacity: "1", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "1", transform: "translateX(100%)" },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        "fade-in-right": "fadeInRight .4s ease-out forwards",
        "fade-out-right": "fadeOutRight .4s ease-out forwards"
      },
    },
  },
  plugins: [],
}