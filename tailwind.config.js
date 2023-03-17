/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily:{
        Poppins:  ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
plugins: [
  // ...
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
],
}
