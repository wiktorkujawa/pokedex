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
        'dark-slate': '#2e2f36',
        'bug': '#92bc2c',
        'dark': '#595761',
        'dragon': '#0c69c8',
        'electric': '#f2d94e',
        'fairy': '#ee90e6',
        'fighting': '#d3425f',
        'fire': '#fba54c',
        'flying': '#a1bbec',
        'ghost':'#5f6dbc',
        'grass': '#5fbd58',
        'ground': '#da7c4d',
        'ice' : '#75d0c1',
        'normal': '#a0a29f',
        'poison': '#b763cf',
        'psychic': '#fa8581',
        'rock': '#c9bb8a',
        'steel': '#5695a3',
        'water': '#539ddf'
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
