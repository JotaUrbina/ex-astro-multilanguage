/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Barlow Semi Condensed",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        violet: "#733FC8",
        darkGray: "#49556B",
        darkBlackish: "#171F2D",
        snowWhite: "#D9E2E9",
        lightText: "#B6BAC5",
        darkText: "#424C56",
      },
    },
  },
  plugins: [],
};
