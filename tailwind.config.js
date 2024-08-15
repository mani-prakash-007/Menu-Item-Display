/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "salmon-dish": "url('./src/assets/salmon.jpg')",
        cake: "url('./src/assets/cake.jpg')",
        beef: "url('./src/assets/beef.jpg')",
        salad: "url('./src/assets/classic-salad.jpg')",
        pizza: "url('./src/assets/pizza.jpeg')",
        restaurant: "url('./src/assets/background.jpg')",
      },
      width: {
        card: "630px",
      },
    },
  },
  plugins: [],
};
