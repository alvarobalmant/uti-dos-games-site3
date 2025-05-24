/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        secondary: "#D946EF",
        background: "#0F172A",
        "card-bg": "#1E293B",
        "text-primary": "#F8FAFC",
        "text-secondary": "#94A3B8"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        gaming: ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary), 0 0 20px theme(colors.primary)',
        'neon-hover': '0 0 10px theme(colors.primary), 0 0 30px theme(colors.primary)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
