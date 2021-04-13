module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "media",
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
