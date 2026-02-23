import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          deep: '#1A1A40',
          light: '#1E293B',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        ocean: {
          DEFAULT: '#0F172A',
          deep: '#1A1A40',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E5C04A',
        },
        coral: '#E07B54',
        mint: '#5BB39B',
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          400: '#94A3B8',
          600: '#475569',
          900: '#0F172A',
        },
      },
      fontFamily: {
        headline: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        card: '0 2px 8px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 12px 40px rgba(15, 23, 42, 0.12)',
        'card-glow': '0 0 0 1px rgba(6, 182, 212, 0.1), 0 12px 40px rgba(15, 23, 42, 0.08)',
        dropdown: '0 12px 32px rgba(15, 23, 42, 0.14)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.15)',
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
      maxWidth: {
        content: '1200px',
        copy: '720px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
};

export default config;
