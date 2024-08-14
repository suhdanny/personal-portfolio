/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'text-gradient': 'linear-gradient(to right, #007CF0 0%, #00E0D9 100%);',
      }),
      colors: {
        'slate': 'rgb(148, 163, 184)',
        'hover-slate': 'rgba(134, 145, 162, .1)',
        'stack-teal': 'rgba(45, 212, 191, .2)',
      },
    },
  },
  plugins: [],
}

