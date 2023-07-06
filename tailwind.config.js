/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#ebebec",
        tomato: "#f15a24",
        lightsalmon: "#f58861",
        gray: "#808080",
        gold: "#ccc627",
        yellow: "#fcee21",
        darkorange: "#f7931e",
        goldenrod: "#fbb03b",
        salmon: "#ef775b",
        red: "#ed1c24",
        darkgray: {
          "100": "#b3b3b3",
          "200": "#9a9a9b",
        },
        forestgreen: "#32a041",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        inter: "Inter",
      },
    },
    fontSize: {
      "7xl": "1.63rem",
      base: "1rem",
      "13xl": "2rem",
      lg: "1.13rem",
      xl: "1.25rem",
      sm: "0.88rem",
      "3xl": "1.38rem",
      "5xs": "0.5rem",
      "7xs": "0.38rem",
      "9xl": "1.75rem",
      xs: "0.75rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
