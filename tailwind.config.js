/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        dominant: "#000000",
        secundary: "#F7F7F7",
        terciary: "#0d0d0d",
        accent: "#FFFFFF",
        paragraph: "#e6e6e6"
      }
    }
  },
  plugins: [],
  content: [
    './src/views/**/*.pug',
  ]
}

