module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
