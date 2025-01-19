/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EEEEEE',
        secondary: '#3C3C3C'
      }
    },
  },
  plugins: [],
}

