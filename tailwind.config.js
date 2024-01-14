/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      Inter:['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray': '#2E2E2E',
        'primary': '#cbd5e1',
      },
    },
  },
  plugins: [],
}

