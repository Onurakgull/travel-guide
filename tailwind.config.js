module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:{
          base:"#37D6F6",
          dark:"#0CA1BF",
          bold:"#076376",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
