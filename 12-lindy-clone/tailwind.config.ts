import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lindy: {
          blue: "#2a66ff",
          "blue-hover": "#1d4ed8",
          dark: "#0f3547",
          cream: "#fcfbf8",
          warm: "#fef9ec",
          "warm-light": "#fffcf0",
        },
        text: {
          secondary: "#474a54",
          subtle: "#31505f",
        },
        border: {
          light: "#e7e7e7",
          subtle: "#f1f5f9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, #FAF5EB 0%, #FFFFFF 100%)",
        "warm-gradient": "radial-gradient(circle at 50% -10%, #fffcf0 0%, #ffffff 60%)",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "feature": "0 12px 24px -10px rgba(253, 185, 19, 0.15)",
        "card": "0 4px 12px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
export default config;
