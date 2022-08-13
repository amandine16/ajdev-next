/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#5BE1CB",
        pink:"#C95BBB",
        purple:"#694BC4",
        "gray-1":"#F6F9FD"
      },
      fontFamily: {
        sans: ["Poppins"],
        poppins: "Poppins",
      },
      container: {
        center: true,
        screens: {
          xl: "1280px",
          lg: "1200px",
        },
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          lg: "20px",
          xl: "20px",
          "2xl": "20px",
        },
      },
    },
  },

  plugins: [ require('@tailwindcss/forms'),],
}
