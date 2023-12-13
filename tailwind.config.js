/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        link: '#1A56DB', //blue-700
        linkHover: '#1E429F', //blue-800
        linkActive: '#233876', //blue-900
        highEmphasis: '#1F2A37', //gray-800
        mediumEmphasis: '#6b7280', //gray-500
        focusRing: '#3b82f6', //blue-500
        border: '#d1d5db', //gray-300
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms') // Used for input-text, tabs.
  ],
}