const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bayon: ["'Bayon'", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
