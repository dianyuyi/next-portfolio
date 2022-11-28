/* eslint @typescript-eslint/no-var-requires: "off" */

const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  important: true,
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  options: {
    safelist: {
      standard: ['outline-none'],
    },
  },
  theme: {
    fontFamily: {
      creamfont: ['creamfont-2.1', 'sans-serif'],
    },
    backgroundImage: {
      'button-bg': "url('/assets/btn_bg.png')",
      'loxi-sign': "url('/assets/hero_loxi_sign.webp')",
      'home-bg': "url('/assets/hero_bg.webp')",
    },
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        print: { raw: 'print' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
}
