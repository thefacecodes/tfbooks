/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#4A83F6",
        blackBG: "#1D1D2A",
      },
      backgroundColor: {
        transparentBlack: "rgba(0, 0, 0, 0.8)",
        blackBG: "#1D1D2A",
        lightBlue: "#4A83F6",
      },
      // backgroundImage: {
      //   transparentBlack: "rgba(0, 0, 0, 0.4)",
      // },
      fontFamily: {
        Rale: "Raleway",
        Mont: "Montserrat",
      },
    },
  },
  plugins: [],
};
