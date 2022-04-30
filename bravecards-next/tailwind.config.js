module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    blue: {
      light: '#22c1c3',
      DEFAULT: '#1fb6ff',
      dark: '#009eeb',
    },
    pink: {
      light: '#ff7ce5',
      DEFAULT: '#ff49db',
      dark: '#ff16d1',
    },
    purple: {
      light: '#9d87ec',
    },
    listStyleType: {
      none: 'none',
      
      square: 'square',
      roman: 'upper-roman',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
