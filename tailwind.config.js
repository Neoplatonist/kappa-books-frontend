module.exports = {
  jit: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      "off-white": "#fef8e8",
      black: "#000000",
      blue: "#5d5fef",
      purple: "#746187",
      pink: "#f1aaaa"
    },
    screens: {
      'xs': { 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px', 'max': '1535px' },
      '2xl': { 'min': '1536px' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
