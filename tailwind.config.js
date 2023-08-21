/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
      fontFamily: {
        GT: ['GT-Super',  'sans-serif'],
        Platform: ['Platform', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

