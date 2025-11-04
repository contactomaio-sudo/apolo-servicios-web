/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a', // Deep Blue
        'secondary': '#f59e0b', // Amber/Gold
        'light': '#f1f5f9', // Slate 100
        'dark': '#0f172a', // Slate 900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}