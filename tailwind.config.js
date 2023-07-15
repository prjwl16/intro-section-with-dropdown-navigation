/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend: {
      textColor: ["hover"],
      colors: {
        mediumGray: "#686868"
      },
      fontFamily:{
        epilogue: ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        "header":"5rem"
      },
      spacing: {
        "desc":"33.75em",
        "heroW":"30rem",
        "heroH":"40rem",
        "space":"7.81rem"
      },
      lineHeight:{
        "xl":"5rem"
      }
    },
  },
}
