/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [    
    './src/components/**/*.{js,ts,jsx,tsx}'    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
