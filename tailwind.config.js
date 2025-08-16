/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
    },
    screens: {
      'max-xs': { 'max': '479px' },
      'max-sm': { 'max': '639px' },
      'max-md': { 'max': '767px' },
      'max-lg': { 'max': '1023px' },
      'max-xl': { 'max': '1279px' },
      'max-2xl': { 'max': '1535px' },
      'max-3xl': { 'max': '1670px' },
    },
  },
  plugins: [],
}