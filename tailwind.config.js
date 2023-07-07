/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
};
