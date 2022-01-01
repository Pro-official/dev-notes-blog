module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Source Serif Pro", "serif"],
        links: ["Roboto Condensed", "sans-serif"],
        normal: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
