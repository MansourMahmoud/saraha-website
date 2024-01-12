const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subColors: {
          // red
          redColor400: "#f87171",
          redColor500: "#ef4444",
          redColor600: "#dc2626",
          // Rose
          roseColor400: "#fb7185",
          roseColor500: "#f43f5e",
          roseColor600: "#e11d48",
          // green
          greenColor400: "#4ade80",
          greenColor500: "#22c55e",
          greenColor600: "#16a34a",
          // blue
          blueColor400: "#60a5fa",
          blueColor500: "#3b82f6",
          blueColor600: "#2563eb",
        },
        mainColors: {
          // main color of the website
          main50: "#f0fdf4",
          main100: "#dcfce7",
          main200: "#bbf7d0",
          main300: "#86efac",
          main400: "#4ade80",
          main500: "#22c55e",
          main600: "#16a34a",
          main700: "#15803d",
          main800: "#166534",
          main900: "#14532d",
          main950: "#052e16",
        },
        darkMode: {
          // dark mode colors
          dark50: "#f8fafc",
          dark100: "#f1f5f9",
          dark200: "#e2e8f0",
          dark300: "#cbd5e1",
          dark400: "#94a3b8",
          dark500: "#64748b",
          dark600: "#475569",
          dark700: "#334155",
          dark800: "#1e293b",
          dark900: "#0f172a",
          dark950: "#020617",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
