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
    },
  },
  plugins: [],
};
export default config;
