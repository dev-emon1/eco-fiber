/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    screens: {
      sm: "640px", // mobile
      md: "768px", // tablet
      lg: "1024px", // laptop
      xl: "1280px", // desktop
      "2xl": "1536px",
    },
    extend: {
      colors: {
        /* 🌿 GREEN VARIANTS */
        eco: {
          dark: "#1E7F43", // headings / brand
          base: "#2F9E64", // buttons / links
          light: "#E6F4EC", // section background
        },

        /* 📝 TEXT COLORS */
        text: {
          primary: "#1F2937", // main text
          secondary: "#4B5563", // paragraph / muted
        },

        /* 🖱️ HOVER */
        hover: {
          eco: "#166534", // hover state green
        },
      },
    },
  },
  plugins: [],
};
