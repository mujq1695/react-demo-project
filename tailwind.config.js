/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Avenir Next"', 'sans-serif'],
      },
      colors: {
        background: '#1F2125',
        primary: '#FFFFFF',
        secondary: '#A0A0A5',
        accent: {
          pink: '#D94692',
        },
        sticker: {
          orange: '#F2A684',
          blue: '#93CCE9',
          yellow: '#F4CD87',
          pink: '#E28CA5',
          teal: '#E6F0EE',
        },
        features: {
          pink: '#E09AB2',
          cream: '#EFECE2',
          blue: '#37486B',
        },
        journey: {
          card: '#684C66',
        },
        testimonial: {
          slate: '#6B7298',
          tan: '#D9AD8C',
          plum: '#7A5469',
        },
        footer: {
          cta: '#F6F5F2',
        }
      }
    },
  },
  plugins: [],
}
