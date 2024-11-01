// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look for class names in your src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f83f8",
        secondary: "#00FF00",
      },
      backgroundImage: {
        'blue': 'linear-gradient(90deg, #3f83f8, #1E40AF, #122855)', // Custom gradient
      },
    },
  },
  plugins: [],
}
