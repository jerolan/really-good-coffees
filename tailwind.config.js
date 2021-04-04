module.exports = {
  purge: ["./pages/**/*.js", "./rg-coffees/**/*.js"],
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
    extend: {
      transform: ["hover"],
      animation: ["focus"],
    },
  },
  plugins: [],
};
