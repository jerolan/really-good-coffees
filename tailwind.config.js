module.exports = {
  purge: ["./pages/**/*.js", "./rgc/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FFDC86",
        secondary: "#3872FF",
        dark: "#000718",
        light: "#FFF8E7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
