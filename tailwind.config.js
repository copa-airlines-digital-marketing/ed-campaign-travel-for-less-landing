/** @type {import('tailwindcss').Config} */
const cmpreset = require('cmds-tailwind-styles')

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',

  ],
  presets: [cmpreset]
}