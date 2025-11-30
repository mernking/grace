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
          blue: "rgb(59, 130, 246)",
        },
        accent: {
          cyan: "rgb(6, 182, 212)",
          pink: "rgb(236, 72, 153)",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)",
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
