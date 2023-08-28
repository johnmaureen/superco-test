/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    { pattern: /^\-?m(\w?)-/ },
    { pattern: /^p(\w?)-/ },
    { pattern: /^text-/ },
    { pattern: /^bg-/ },
    { 
      pattern: /^grid-cols-/,
      variants: ['lg'],
    },
  ],
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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1398px'
    },
    extend: {
      fontFamily: {
        GT: ['GT-Super', 'sans-serif'],
        Platform: ['Platform', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

