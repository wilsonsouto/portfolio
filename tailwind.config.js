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
          DEFAULT: "#2196f3",
          50: "#f2f8ff",
          100: "#e0eefd",
          200: "#b9dffe",
          300: "#80c9ff",
          400: "#42b0ff",
          500: "#2196f3",
          600: "#2778cf",
          700: "#2461a6",
          800: "#215489",
          900: "#204771",
        },
      },
    },
  },
  plugins: [],
};
