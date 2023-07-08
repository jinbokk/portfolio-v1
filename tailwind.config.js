/** @type {import('tailwindcss').Config} */

// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        highlight: "var(--highlight-color)",
        "highlight-dark": "var(--highlight-color-dark)",
        "highlight-op": "var(--highlight-color-op)",
      },

      strokeWidth: {
        bold: 35,
      },

      fontSize: {
        "10xl": [
          "9rem",
          {
            lineHeight: 1,
          },
        ],
      },

      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-roboto_mono)", "var(--font-inconsolata)"],
      },

      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },

  // plugins: [
  //   plugin(function({ addBase, theme }) {
  //     addBase({
  //       'h1': { fontSize: theme('fontSize.2xl') },
  //       'h2': { fontSize: theme('fontSize.xl') },
  //       'h3': { fontSize: theme('fontSize.lg') },
  //     })
  //   })
  // ],
};
