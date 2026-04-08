/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08110d',
        foreground: '#f5f7f2',
        muted: '#9aa79e',
        card: '#101915',
        border: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
