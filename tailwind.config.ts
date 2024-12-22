import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '104': '26rem',
        '112': '28rem', 
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '200': '50rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '384': '96rem',
        '416': '104rem',
        '448': '112rem',
        '480': '120rem',
      },
      aspectRatio: {
        '3/4':'3 / 4',
        '16/9':'16 / 9',
      },

      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        impact: "var(--color-impact)",
        secondary: "var(--color-secondary)",
        typo: "var(--color-typo)",

      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
