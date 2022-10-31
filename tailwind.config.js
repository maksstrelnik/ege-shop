/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        mainOrange:'#F0BA4E',
        bgGrey:'#566169',
        primary: "#566169",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        catRef:"rgba(240, 186, 78, 1)"

      },
      backgroundImage: {
        mainBanner: "url('./assets/banner.png')",
        smallBanner: "url('./assets/smBanner.png')",
        'catRefImg':"url(./assets/builder.png)",
        'build_mat': "url('./assets/Build_cat.png')"
      },
      fontFamily: {
        inter:["Inter","sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};