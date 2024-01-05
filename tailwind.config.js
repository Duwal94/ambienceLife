/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        custom: ['Josefin Sans', 'sans-serif'], // Use your chosen Google Fonts and fallback font
        custom1: ['Open Sans', 'sans-serif'], // Use your chosen Google Fonts and fallback font
      },
      backgroundColor: {
        'custom1': '#28221E',
        'custom2': '#614E41',
        'custom3': '#7F6951',
        'custom4': '#4c5b6c',
        'custom5': '#CECBC8',
      },

    },
  },
  plugins: [require('flowbite/plugin'),
  require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
});

