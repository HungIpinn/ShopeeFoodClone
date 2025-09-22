/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // xanh dương light
          dark: '#1d4ed8', // xanh dương dark
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#0f172a',
          dark: '#f1f5f9',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // 👈 bật dark mode
};
