module.exports = {
  purge: ["./pages/**/*.js", "./src/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#fff8e7",
        secondary: "#E7EEFF",
        dark: "#000718",
        "primary-dark": "#ffdc86",
        "secondary-dark": "#3872ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
