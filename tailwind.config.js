module.exports = {
  // content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter"],
        body: ["Inter"],
      },
      colors: {
        "nuxt-green": "#00DC82",
        "nuxt-white": "#ffffff",
        "nuxt-grey": "#18181B",
      },
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
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./app.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  // safelist: [
  //   'safelisted',
  //   {
  //     pattern: /bg-(red|green|blue)-(100|200|300)/,
  //   },
  // ]
};
