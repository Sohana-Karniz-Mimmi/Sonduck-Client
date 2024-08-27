/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["sans-serif"],
        plus: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif']
      },
      colors:{
        primary:"#FF387A"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

