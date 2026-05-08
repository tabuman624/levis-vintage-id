import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        stitch: '#e8d5a3',
        rust:   '#c0392b',
        fade:   '#b8cce4',
        denim: {
          light: '#5577aa',
          mid:   '#3d5f96',
          dark:  '#2c4f82',
          deep:  '#1a2a3a',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        mono:     ['"DM Mono"', 'monospace'],
        noto:     ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
