/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'luxe-peach': {
          DEFAULT: '#f8dbc5',
          50: '#fef9f6',
          100: '#fdf3ed',
          200: '#fbe7db',
          300: '#f8dbc5',
          400: '#f3b68e',
          500: '#ed8f57',
          600: '#e56b2d',
          700: '#c0521f',
          800: '#9a411a',
          900: '#7d3616',
        },
        'regal-navy': {
          DEFAULT: '#1a2b47',
          50: '#f2f4f7',
          100: '#e5e9ee',
          200: '#ccd3de',
          300: '#b3bece',
          400: '#9aa8be',
          500: '#8192ae',
          600: '#677c9e',
          700: '#52668c',
          800: '#3d4d6a',
          900: '#1a2b47',
        },
        'golden-accent': {
          DEFAULT: '#d4af37',
          50: '#fbf8ed',
          100: '#f7f1db',
          200: '#eee2b7',
          300: '#e5d393',
          400: '#dcc46f',
          500: '#d4af37',
          600: '#b3922c',
          700: '#927621',
          800: '#715a16',
          900: '#50400e',
        },
      },
    
    },
  },
  plugins: [],
};