/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'theme-color': '#97BF0F',

      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [],
};
