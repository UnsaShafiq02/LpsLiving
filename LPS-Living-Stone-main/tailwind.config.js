/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      /* ================= BRAND COLORS ================= */
      colors: {
        "brand-primary": "#0A2D6B", // deep blue
        "brand-accent": "#0097C2",  // teal

        // your existing design system (IMPORTANT to keep consistency)
        primary: "#0D2340",
        secondary: "#224C26",
        background: "#F5F7FA",
      },

      /* ================= TYPOGRAPHY (NEUE GROTESK STYLE) ================= */
      fontFamily: {
        sans: [
          "Space Grotesk",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },

      /* ================= OPTIONAL: LETTER SPACING ================= */
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
      },

      /* ================= OPTIONAL: SHADOW SYSTEM ================= */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        strong: "0 25px 60px rgba(13,32,64,0.25)",
      },
    },
  },

  plugins: [],
};