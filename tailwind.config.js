/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        secondary: "#666666",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        light: "#f8f9fa",
        dark: "#212529",
      },
    },
  },
  plugins: [],
};
