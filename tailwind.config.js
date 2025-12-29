/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "rgb(147, 51, 234)",
          "purple-dark": "rgb(126, 34, 206)",
          "purple-light": "rgb(168, 85, 247)",
        },
        neutral: {
          950: "rgb(10, 10, 15)",
          900: "rgb(17, 17, 17)",
          800: "rgb(38, 38, 38)",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(147, 51, 234, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)",
          },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
