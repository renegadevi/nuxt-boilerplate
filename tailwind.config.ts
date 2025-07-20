import { type Config } from "tailwindcss";

export default {
  // content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["serif"],
      mono: ["monospace"],
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  content: [
    `./app/components/**/*.{vue,js,ts}`,
    `./app/layouts/**/*.vue`,
    `./app/pages/**/*.vue`,
    `./app/composables/**/*.{js,ts}`,
    `./app/plugins/**/*.{js,ts}`,
    `./app/utils/**/*.{js,ts}`,
    `./app/app.{js,ts,vue}`,
    `./app/error.{js,ts,vue}`,
  ],
} satisfies Config;
