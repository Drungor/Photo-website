import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

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
