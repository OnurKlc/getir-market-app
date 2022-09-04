/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#1EA4CE',
        primaryDark: '#147594',
        primaryLight: '#F2F0FD',
        bgColor: '#FAFAFA',
        gray: '#C4C4C4',
        lightGray: '#F4F4F4'
      }
    }
  },
  plugins: []
}
