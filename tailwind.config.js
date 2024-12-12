/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./src/**/*.{html, ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'purple': {
        '50': '#f7f5fd',
        '100': '#f0ecfb',
        '200': '#e3dcf8',
        '300': '#cebff3',
        '400': '#b4a7d6',
        '500': '#9163dd',
        '600': '#8c53d4',
        '700': '#7c41c0',
        '800': '#6836a1',
        '900': '#562e84',
        '950': '#361c59',
      },
      'purple-text': {
        '100': '#FFE3FF',
        '900': '#06030A'
      },
      'cab-sav': {
        '50': '#fff0f5',
        '100': '#ffe0ea',
        '200': '#ffccdb',
        '300': '#ff9eba',
        '400': '#ff6691',
        '500': '#ff3369',
        '600': '#f00f4f',
        '700': '#cb063b',
        '800': '#aa0833',
        '900': '#8e0b2e',
        '950': '#47000e',
      },
      'logo': {
        '100': '#ffe07b',
        '900': '#361c59'
      }
    },
    // container: {
      // center: true,
    // },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

