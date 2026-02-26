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
        'glow-lg': '0 0 40px rgba(234, 88, 12, 0.4)',
        'card': '0 4px 24px -4px rgba(30, 64, 175, 0.08), 0 8px 48px -8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 40px -12px rgba(30, 64, 175, 0.15), 0 0 0 1px rgba(234, 88, 12, 0.08)',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        breathing: 'breathing 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;