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
        night: '#121212',
        wisteria: '#A39DD9',
        'wisteria-dark': '#6C62C2',
        'wisteria-light': '#BDB8E3',
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'translateX(-50%) rotate3d(0, 0, 1, 0deg)',
          },
          '25%': {
            transform: 'translateX(-50%) rotate3d(0, 0, 1, 90deg)',
          },
          '50%': {
            transform: 'translateX(-50%) rotate3d(0, 0, 1, 180deg)',
          },
          '75%': {
            transform: 'translateX(-50%) rotate3d(0, 0, 1, 270deg)',
          },
          '100%': {
            transform: 'translateX(-50%) rotate3d(0, 0, 1, 360deg)',
          },
        },
      },
      animation: {
        rotate: 'rotate 20s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
