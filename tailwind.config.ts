import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF2F4',
          100: '#FCE7EA',
          200: '#FACFD6',
          300: '#F5A6B4',
          400: '#ED728B',
          500: '#DE4769',
          600: '#9D3850', // Main brand color
          700: '#7D2A3E',
          800: '#672433',
          900: '#55212C',
          950: '#300E15',
        },
        secondary: {
          50: '#FBF8F3',
          100: '#F6EFE4',
          200: '#EBDDC9',
          300: '#DEC4A4',
          400: '#CFA87D',
          500: '#C59B63', // Champagne Gold
          600: '#A97C47',
          700: '#876038',
          800: '#6E4E30',
          900: '#5B4029',
        },
        cream: {
          50: '#FBF9F7', // Canvas warm cream
          100: '#F5F1EC',
          200: '#EAE2D8',
          300: '#DDD0C0',
        },
        slate: {
          850: '#1B1718',
          900: '#231F20', // Charcoal Slate body
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          hover: '#20BA5A',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans"',
          '"Noto Sans Devanagari"',
          'sans-serif',
        ],
      },
      boxShadow: {
        warm: '0 4px 20px -4px rgba(157, 56, 80, 0.08)',
        'warm-lg': '0 10px 30px -6px rgba(157, 56, 80, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

