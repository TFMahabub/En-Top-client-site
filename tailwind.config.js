/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkBlue': '#305891',
      'darkLightBlue': '#4285BC',
      'lightBlue': '#E8EFF7',
      'black': '#232832',
    },
    fontFamily: {
      'Montserrat': '"Montserrat"'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
