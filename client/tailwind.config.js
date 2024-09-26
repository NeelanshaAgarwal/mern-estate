/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: '#C1BDBE',
        customPurple: '#544657',
        customDarkPurple: '#231F20',
        customBgSearch: '#554D5C',
        customSearchIcon: '#C1BDBE',
        customGrey2: '#6F616E',
        customGrey3: '#958993',
      }
    },
  },
  plugins: [],
}

