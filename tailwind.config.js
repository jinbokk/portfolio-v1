/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "background": "var(--background-color)",
        "highlight": "var(--highlight-color)",
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
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto-mono)"],
        incon: ["var(--font-inconsolata)"],
      },

      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
};
