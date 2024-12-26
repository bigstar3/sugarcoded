module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Includes all JS and TS files in the src folder
    './public/**/*.html',        // Includes HTML files in the public folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007acc',
          light: '#3ea1f5',
          dark: '#005e99',
        },
        secondary: {
          DEFAULT: '#663854',
          light: '#a0768d',
          dark: '#4a2740',
        },
        neutral: {
          DEFAULT: '#f5f5f5',
          dark: '#1e1e1e',
          light: '#ffffff',
        },
        accent: {
          DEFAULT: '#e38665',
          light: '#f0a48c',
          dark: '#c06746',
        },
      },
      fontFamily: {
        sans: ['Fira Code', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
