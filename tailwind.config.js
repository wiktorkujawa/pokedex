module.exports = {
  mode:'jit',
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
    extend: {
      fontSize: {
        h1: [`${40 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h2: [`${36 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h3: [`${32 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h4: [`${28 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h5: [`${24 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h6: [`${20 / 16}rem`, {
          lineHeight: '1.5'
        }],
        h7: [`${16 / 16}rem`, {
          lineHeight: '1.5'
        }],
        p1: [`${16 / 16}rem`, {
          lineHeight: '2'
        }],
        p2: [`${14 / 16}rem`, {
          lineHeight: '2'
        }],
        p3: [`${12 / 16}rem`, {
          lineHeight: '2'
        }],
      },
      colors: {
        'coral-red': '#ed5363',
        'coral-red-hover': '#be3947',
        'dark-slate': '#2e2f36'
      },
      borderWidth: {
        1: '1px'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
