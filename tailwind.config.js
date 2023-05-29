/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  content: ["./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "vert": "#C2DA74",
        "bleu" : "#8BD3DB"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
