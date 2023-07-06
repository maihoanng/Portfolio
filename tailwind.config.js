/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#97BFC7",
        red: "#0A1930", // navbar for ex
        yellow: "#ff4df3", // noen blue
        grey: "#EDEDED",
        white: "#CCD6F6", // off white
        "deep-blue": "0A1930", // background
        "light-blue": "#8892AF", // darker off blue
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE, 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF, 14.53%, #FC59FF 69.36%, #FFBD0C 107.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        source: ["Source Code Pro"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
