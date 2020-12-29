const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#fb4264'},
        yellow: {
          DEFAULT: '#c9c500'},
        blue: {
          DEFAULT: '#426dfb'},
      },
      fontFamily: {
        'neones': ['neon', 'ui-serif']
      },
      gridTemplateColumns: {
        '3': 'repeat(3,1fr)'
      },
      margin: {
        xl: '750px'
      },
      flex: {
        '1': '0 0 50%',
        '2': '30vw'
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
