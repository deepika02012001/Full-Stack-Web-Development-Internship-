// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        navmobcolor:{
        50: '#edf1fc',
        100: '#d3d4e1',
        200: '#b6b8c9',
        300: '#989bb2',
        400: '#7c7f9b',
        500: '#636582',
        600: '#4c4f66',
        700: '#363849',
        800: '#21222e',
        900: '#0a0a16',
        },
        postercolor:{
          50:'#2b3148'
        },
        stream1:{
          50:'#4d4d4d'
        },
        stream2:{
          50:'#e6e6e6'
        },
        stream3:{
          50:'#e6dfdf'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}