/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    colors: {
      'header-color': '#161D2F',
      white: '#fff',
      'acrive-link': '#FC4747',
      body: '#10141E',
      card: '#192a4f',
      footer: '#939bad',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
