// To change the pallete tone, access: https://palette.tone-row.com/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111111",
        neutral: {
          50: "#fafafa",
          100: "#f4f4f4",
          200: "#e6e6e6",
          300: "#d4d4d4",
          400: "#a2a2a2",
          500: "#727272",
          600: "#535353",
          700: "#404040",
          800: "#272727",
          900: "#181818",
        },
        accent: {
          DEFAULT: "#0E5484",
        },
      },
      fontFamily: {
        charis: ["Charis SIL", "serif"]
      },
      screens: {
        screen: { raw: 'screen' },
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
