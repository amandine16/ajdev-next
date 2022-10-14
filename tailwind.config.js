/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '14px'],
        base: ['14px', '16px'],
        md: ['18px', '20px'],
        lg: ['16px', '18px'],
        xl: ['36px', '40px'],
      },
      colors: {
        green: "#5BE1CB",
        pink: "#C95BBB",
        purple: "#694BC4",
        "purple-2": "#523B99",
        "gray-1": "#F6F9FD",
        "gray-2": "#4F4E4E"
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

  plugins: [require('@tailwindcss/forms'),],
}
