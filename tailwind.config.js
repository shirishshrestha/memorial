/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navbar: "rgba(38,73,89,95%)",
      navbar_inactive: "#AEC3CF",
      navbar_active: "#EAEAEA",
      white: "#fff",
      darkBlue: "#406174",
      darkYellow: "#B6A76C",
      lightBlue: "#7B9BAE",
      grayColor: "#606060",
      navbarResp: "rgba(217,217,217,90%)",
    },
    extend: {
      fontFamily: {
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        "great-vibes": ['"Great Vibes"', "cursive"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        tribute: "1.2fr 0.8fr",
      },
    },
  },
  plugins: [],
};
