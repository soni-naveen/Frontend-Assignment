/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        laptop1: "url('assets/laptop1.png')",
        laptop2: "url('assets/laptop2.png')",
      },
    },
  },
  plugins: [],
};
