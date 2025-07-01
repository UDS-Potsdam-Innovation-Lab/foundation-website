import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        secondary: '#00E6FF',
        accent: '#ea580c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(234, 88, 12, 0.5)',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        breathing: 'breathing 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;