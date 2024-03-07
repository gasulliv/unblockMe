/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          ...colors,
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

