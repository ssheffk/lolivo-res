import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appAccent: '#3b3a38',
        appBody: '#F4F2E8',
        appText: '#272424',
        appGray: {
          lolivo: '#808000',
          100: '#E0E0E0',
          200: '#6A6A75',
          300: '#63635F',
          400: '#8F8E88',
          500: '#9C9090',
          600: '#786F6F',
          700: '#454040',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      fontFamily: {
        Helvetica: ['Helvetica', 'sans-serif'],
        Gloock: ['Gloock', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
