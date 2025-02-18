// To change the pallete tone, access: https://palette.tone-row.com/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        screen: { raw: 'screen' },
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
