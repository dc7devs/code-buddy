/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#161616',
        white: '#FFFFFF',
      },
      backgroundImage: {
        'paper-pattern': "radial-gradient(50% 50% at 50% 50%, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.94) 100%), linear-gradient(rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 1.6px, transparent 1.6px), linear-gradient(rgba(174, 174, 174, 0.1) 0.8px, transparent 0.8px), linear-gradient(90deg, rgba(174, 174, 174, 0.1) 0.8px, rgba(22, 22, 22, 0) 0.8px)",
      },
      fontFamily: {
        'pontserrat': ['Montserrat', 'sans-serif']
      }
    },

    backgroundSize: {
      'paper-pattern-size': 'cover, 40px 40px, 40px 40px, 8px 8px, 8px 8px',
    },

    backgroundPosition: {
      'paper-pattern-position': 'center, -1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px'
    },
  },
  plugins: [],
}
