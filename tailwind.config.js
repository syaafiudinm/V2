/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      sourcecode:['Source Code Pro'],
    },
    extend: {
      colors: {
        'gray': '#2E2E2E',
        'primary': '#0ea5e9',
      },
    },
  },
  plugins: [],
}

