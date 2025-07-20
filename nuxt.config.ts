// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr:false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
  ],
  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    viewer: true,
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  imports: {
    dirs: ["app/stores"],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "color-mode",
    storage: "localStorage",
    disableTransition: false,
  },

  image: {
    provider: "ipx",
    quality: 80,
    format: ["webp", "png", "jpeg"],
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || "http://localhost:3000",
    defaultLocale: "en-US",
    langDir: "./locales",
    strategy: "no_prefix",
    locales: [
      { code: "en-US", iso: "en-US", file: "en-US.json" },
      { code: "fr-FR", iso: "fr-FR", file: "fr-FR.json" },
      { code: "ar-AR", iso: "ar-AR", file: "ar-AR.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "nuxt-lang",
      redirectOn: "root",
    },
  },

  cookieControl: {
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    cookies: {
      necessary: [
        {
          name: {
            fr: "Nécessaire",
            en: "Necessary",
            ar: "ضروري",
          },
          description: {
            fr: "Nécessaire",
            en: "Necessary",
            ar: "ضروري",
          },
          isPreselected: true,
          id: "necessary",
        },
      ],
      optional: [],
    },
    locales: ["en", "fr", "ar"],
  },
});
