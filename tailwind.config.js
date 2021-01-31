module.exports = {
  purge: ["./pages/**/*.js", "./src/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#D9BC9A",
        secondary: "#D99E91",
        coffee: "#3B3633",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
