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
        'desert-sand': {
          DEFAULT: '#e8c9b4',
          100: '#3f2513',
          200: '#7e4a27',
          300: '#be6f3a',
          400: '#d59c76',
          500: '#e8c9b4',
          600: '#edd4c4',
          700: '#f1dfd3',
          800: '#f6eae1',
          900: '#faf4f0'
        },
        'lion': {
          DEFAULT: '#c69877',
          100: '#2d1d13',
          200: '#593b25',
          300: '#865838',
          400: '#b2764b',
          500: '#c69877',
          600: '#d1ac92',
          700: '#ddc1ad',
          800: '#e8d6c8',
          900: '#f4eae4'
        },
        'chamoisee': {
          DEFAULT: '#a77753',
          100: '#211810',
          200: '#433021',
          300: '#644831',
          400: '#865f42',
          500: '#a77753',
          600: '#ba9274',
          700: '#ccad96',
          800: '#ddc9b9',
          900: '#eee4dc'
        }
      }
    },
  },
  plugins: [],
};