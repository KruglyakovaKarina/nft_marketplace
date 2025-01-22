/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#A259FF',
        gray: '#2B2B2B',
        graySecond: '#3B3B3B',
        grayThird: '#858584',
        grayFourth: '#CCCCCC',
      },
    },
  },
  plugins: [],
};
