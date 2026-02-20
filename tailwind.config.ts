import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nyxera-bg': '#0A0F2D',
        'nyxera-purple': '#8A2BE2',
        'nyxera-electric': '#00FFF7',
        'nyxera-text': '#E0E0E0',
        'nyxera-subtext': '#A0A0A0',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 255, 247, 0.35), 0 0 24px rgba(138, 43, 226, 0.2)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(160,160,160,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(160,160,160,0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
};

export default config;
