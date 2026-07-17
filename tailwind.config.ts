import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#03070d",
        graphite: "#101720",
        line: "rgba(255,255,255,0.12)",
        mint: "#5ef1c6",
        aqua: "#8be9ff",
        blue: "#2f80ff",
        gold: "#ffc857",
        coral: "#ff7a59",
        wa: "#25D366",
        "wa-dark": "#128C4A",
        "wa-hover": "#1DAB54",
        "wa-chat": "#ECE5DD",
        "wa-header": "#075E54"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 28px 90px rgba(100,244,196,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
