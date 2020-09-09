module.exports = {
  prefix: '',
  separator: ':',
  theme: {
    themeVariants: ['dark'],
    color: {
      gray: {
        '50': '#f9fafb',
        '100': '#f4f5f7',
        '200': '#e5e7eb',
        '300': '#d5d6d7',
        '400': '#9e9e9e',
        '500': '#707275',
        '600': '#4c4f52',
        '700': '#24262d',
        '800': '#1a1c23',
        '900': '#121317',
      },
    },
  },
  // variants: {
  //   backgroundColor: [
  //     'hover',
  //     'focus',
  //     'active',
  //     'odd',
  //     'dark',
  //     'dark:hover',
  //     'dark:focus',
  //     'dark:active',
  //     'dark:odd',
  //   ],
  //   display: ['responsive', 'dark'],
  //   textColor: [
  //     'focus-within',
  //     'hover',
  //     'active',
  //     'dark',
  //     'dark:focus-within',
  //     'dark:hover',
  //     'dark:active',
  //   ],
  //   placeholderColor: ['focus', 'dark', 'dark:focus'],
  //   borderColor: ['focus', 'hover', 'dark', 'dark:focus', 'dark:hover'],
  //   divideColor: ['dark'],
  //   boxShadow: ['focus', 'dark:focus'],
  // },
  // plugins: [
  //   require('tailwindcss-multi-theme'),
  //   require('@tailwindcss/custom-forms'),
  //   plugin(({ addUtilities, e, theme, variants }) => {
  //     const newUtilities = {}
  //     Object.entries(theme('colors')).map(([name, value]) => {
  //       if (name === 'transparent' || name === 'current') return
  //       const color = value[300] ? value[300] : value
  //       const hsla = Color(color).alpha(0.45).hsl().string()

  //       newUtilities[`.shadow-outline-${name}`] = {
  //         'box-shadow': `0 0 0 3px ${hsla}`,
  //       }
  //     })

  //     addUtilities(newUtilities, variants('boxShadow'))
  //   }),
  // ],
}
