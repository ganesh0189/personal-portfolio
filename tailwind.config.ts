import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        'card-background': 'var(--card-background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        border: 'var(--border)',
        'section-bg': 'var(--section-bg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'skill-bar': 'skillBar 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        skillBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-percentage)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--foreground)',
            h1: {
              color: 'var(--foreground)',
            },
            h2: {
              color: 'var(--foreground)',
            },
            h3: {
              color: 'var(--foreground)',
            },
            strong: {
              color: 'var(--foreground)',
            },
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-dark)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config; 