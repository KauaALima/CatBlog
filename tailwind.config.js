/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ["Mulish", 'sans-serif']
      },

      colors: {
        BgHeader: '#065E7C',
        BgInput: '#518fa4',
        BgFooter: '#387E96',
        BgWhite: '#F4FCFF',
        TitleBlack: '#202024',
        TextBlack: '#121214'
      }
      
    },
  },
  plugins: [],
}

