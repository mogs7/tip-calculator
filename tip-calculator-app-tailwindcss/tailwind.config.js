/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'very-dark-cyan':'hsl(183, 100%, 15%)',
      'dark-grayish-cyan':'hsl(186, 14%, 43%)',
      'grayish-cyan':'hsl(184, 14%, 56%)',
      'light-grayish-cyan':'hsl(185, 41%, 84%)',
      'very-light-grayish-cyan':'hsl(189, 41%, 97%)',
      'strong-cyan': 'hsl(172, 67%, 45%)',
      'light-strong-cyan': 'hsl(172, 60%, 63%)'
    },
    },
  },
  plugins: [],
}