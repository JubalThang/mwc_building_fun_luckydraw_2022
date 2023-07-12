/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#444034',
        'secondary': '#7b7b7b'
        // 'primary' : '#0C6291',
        // 'secondary': '#6C8EAD' 
      },
      animation: {
        'spin-slow': 'spin 360s linear infinite',
      }
    },
  },
  plugins: [],
}