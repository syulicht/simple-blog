/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ここがNext.jsの構造に合っているか確認
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './global-components/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

