/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '1440px',
      },
      colors: {
        darkblue1: 'hsl(217, 28%, 15%)',
        darkblue2: 'hsl(218, 28%, 13%)',
        darkblue3: 'hsl(219, 30%, 18%)',
        'darkblue-footer': 'hsl(216, 53%, 9%)',
        blue: 'hsl(198, 60%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        cyan: 'hsl(176, 68%, 64%)',
        lightcyan: 'hsl(185, 64.1%, 69.4%)',
        lightred: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        xxsm: '0.5rem',
        xsm: '0.7rem',
        sm: '0.8rem',
        base: '0.875rem', //14px
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        '5xl': '1.65rem',
        '6xl': '2rem',
        '7xl': '2.25rem',
        '8xl': '2.875rem',
      },
      backgroundImage: {
        'curvy-desktop': "url('./assets/images/bg-curvy-desktop.svg')",
        'curvy-mobile': "url('./assets/images/bg-curvy-mobile.svg')",
        quotes: "url('./assets/images/bg-quotes.png')",
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
};
