import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        poiret: ['var(--font-poiret-one)'],
      },
      colors: {
        primary: '#121212',
        secondary: '#A39DD9',
        'secondary-dark': '#6C62C2',
        'secondary-light': '#BDB8E3',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'translateX(-50%) rotate(0)',
          },
          '100%': {
            transform: 'translateX(-50%) rotate(360deg)',
          },
        },
      },
      animation: {
        rotate: 'rotate 30s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
