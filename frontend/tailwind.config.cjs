/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fdfdfd',
        accent: "#0b74ff",
        accent_2: "#ff7a59"
      }
    }
  },
  plugins: []
};