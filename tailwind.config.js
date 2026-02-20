/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 40px rgba(34, 197, 94, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
