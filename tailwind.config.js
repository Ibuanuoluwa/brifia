/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow_100: "#F9EFE4",
        yellow_200: "#FFF0DF",
        yellow_300: "#EED0AF",
        yellow_500: "#DCA15D",
        gray_500: "#888888",
        gray_400: "#D4D4D4",
        gray_200: "#F5F6F8",
      },
    },
  },
  plugins: [],
};
