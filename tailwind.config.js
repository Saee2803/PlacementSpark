/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          card: "#111111",
          red: "#EF4444",
          blue: "#2563EB",
          yellow: "#FACC15",
          white: "#FFFFFF",
          "dark-charcoal": "#1a1a1a",
          green: "#22c55e",
          "green-dark": "#16a34a",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "hero-heading": "72px",
        "section-heading": "48px",
        subheading: "24px",
        body: "18px",
        label: "14px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in",
        "slide-up": "slideUp 0.8s ease-out",
        "pulse-glow": "pulseGlow 2s infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropFilter: {
        blur: "blur(10px)",
      },
    },
  },
  plugins: [],
};
