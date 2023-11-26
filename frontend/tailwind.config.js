/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: '#000000',
        white:"#FFFFFF",
        secondary:"#9000D4",
        grey:"#D9D9D9"
      },
      fontFamily:{
        custom:[ 'Montserrat', 'sans-serif']
      },
      backgroundImage:{
        'signUp': "url('/backgroundImage.png')"
      }
    },
  },
  plugins: [],
}

