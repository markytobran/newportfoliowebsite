module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyan-blue': '#08fdd8',
        'dark-cyan-blue': '#039ba1',
        'primary-pink': '#f24b67',
        'dark-grey': '#181818',
        'light-grey': '#1d1d1d',
        'mid-grey': '#2b2b2b',
        'darker-grey': '#8d8d8d',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '5.5xl': ['56px'],
      },
    },
  },
  plugins: [],
}
