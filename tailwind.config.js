/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slatebase: '#0f172a',
        accent: {
          blue: '#38bdf8',
          emerald: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56,189,248,0.35), 0 0 45px rgba(56,189,248,0.25)',
        emerald: '0 0 0 1px rgba(52,211,153,0.35), 0 0 45px rgba(52,211,153,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'accent-gradient':
          'linear-gradient(120deg, rgba(56,189,248,0.35), rgba(52,211,153,0.32), rgba(56,189,248,0.2))',
      },
    },
  },
  plugins: [],
};
