/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#70d44b",
        "primary-light": "#f1fbed",
        secondary: "#124734",
        tertiary: "#f3efa1",
        accent: "#ff8b11",
        dark: "#1A2421",
        light: "#f2f8f6",
        gray: "#c0c4c3"
      },
    },
  },
  plugins: [],
};
