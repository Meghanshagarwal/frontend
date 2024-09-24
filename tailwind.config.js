/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        roboto: ['Roboto', 'sans-serif'], // Add Roboto font
      },
      colors:{
        customPurpleL:"#6A3AD9",
        customPurpleR: '#3F2381',
        teambg:"#321E5F",
        hoverYellow:"#F2C01F",
        AboutCol:"#19093E",
        Aboutwhite: "#FFFFFF",
        footercol:"#381F73",
        footercol2:"#32176A",
      }
    },
  },
  plugins: [],
}

