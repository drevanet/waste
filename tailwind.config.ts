import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { forest: "#143d2b", leaf: "#38a169", lime: "#d6f36a", sand: "#f7f7f0" },
    boxShadow: { soft: "0 18px 60px rgba(20,61,43,.10)" },
    keyframes: {
      fadeUp: {"0%": {opacity:"0", transform:"translateY(18px)"}, "100%": {opacity:"1", transform:"translateY(0)"}},
      shimmer: {"0%": {backgroundPosition:"200% 0"}, "100%": {backgroundPosition:"-200% 0"}},
      spinSlow: {"to": {transform:"rotate(360deg)"}}
    },
    animation: { "fade-up":"fadeUp .7s ease-out both", "fade-up-delay":"fadeUp .7s .15s ease-out both", "spin-slow":"spinSlow 2s linear infinite" }
  }},
  plugins: []
};
export default config;