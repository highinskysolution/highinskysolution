/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        /* Institutional Dark Mode Palette */
        ink: '#F8FAFC',
        muted: '#94A3B8',
        subtle: '#64748B',
        paper: '#07090E',
        surface: '#0D111A',
        'surface-2': '#131926',
        line: 'rgba(255, 255, 255, 0.08)',
        'line-bright': 'rgba(56, 189, 248, 0.3)',
        brand: {
          DEFAULT: '#38BDF8',
          dark: '#06B6D4',
          light: '#7DD3FC',
          deep: '#0C4A6E',
        },
        accent: {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
      },
      /* Glass surfaces & gradients */
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #38BDF8 0%, #06B6D4 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)',
        'gradient-text': 'linear-gradient(90deg, #FFFFFF 0%, #E2E8F0 45%, #38BDF8 100%)',
        'gradient-text-accent': 'linear-gradient(120deg, #38BDF8 0%, #67E8F9 50%, #818CF8 100%)',
        'gradient-line': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 20%, rgba(56,189,248,0.28) 50%, rgba(255,255,255,0.08) 80%, transparent)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 40%, transparent 100%)',
        'grid-faint': `linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        'nav': '0 8px 32px -8px rgba(0, 0, 0, 0.75), 0 1px 0 0 rgba(255,255,255,0.04) inset',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.5), 0 1px 0 0 rgba(255,255,255,0.03) inset',
        'card-hover': '0 24px 48px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(6,182,212,0.25), 0 0 40px -12px rgba(6,182,212,0.35)',
        'glow': '0 0 18px -3px rgba(6, 182, 212, 0.45)',
        'glow-lg': '0 0 40px -6px rgba(6, 182, 212, 0.55)',
        'glow-btn': '0 6px 20px -6px rgba(6, 182, 212, 0.55), 0 0 0 1px rgba(103,232,249,0.2) inset',
        'glow-btn-hover': '0 12px 32px -8px rgba(6, 182, 212, 0.75), 0 0 24px -6px rgba(99,102,241,0.4), 0 0 0 1px rgba(103,232,249,0.35) inset',
        'inner-top': '0 1px 0 0 rgba(255,255,255,0.05) inset',
      },
      /* Premium easing curves */
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'blob': 'blob 14s infinite alternate ease-in-out',
        'blob-slow': 'blob 22s infinite alternate ease-in-out',
        'float': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3.5s ease-in-out infinite',
        'grid-drift': 'gridDrift 12s linear infinite',
        'rise': 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'sheen': 'sheen 1s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(30px, -40px) scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        gridDrift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(60px)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '100%': { transform: 'translateX(220%) skewX(-18deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
