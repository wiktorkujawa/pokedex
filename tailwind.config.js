module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
      './src/components/**/*.{html,ts}',
      './src/pages/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
