/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      black: "#000000",
      white: "#ffffff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      bgColor: "#f0f2ff",
      "gray-light": "#d3dce6",
      btnColor: "#3f53d8",
      greyColor: "#808080",
      lightGrey: "#D3D3D3",
      bannerGrey: "#646468",
      lightBlue: "#46beff",
      babyBlue: "#ADDFFF",
      Green: "#00ab41",
      lightYellow: "#FFDF00",
    },
    theme: {
      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};
