// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";
import ar from "./locales/ar-AR.json";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.VITE_BASE_URL //  || 'http://localhost:3000'
    }
  },

  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
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
    dirs: ["./stores", "./locales"],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  colorMode: {
    classSuffix: "",
  },

  image: {
    provider: "ipx", // change to e.g 'vercel' if hosted on vercel
    quality: 80,
    format: ["png", "jpeg", "webp"],
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
    baseUrl: process.env.VITE_BASE_URL,
    vueI18n: "i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: true,
      fallbackLocale: "en-US",
      redirectOn: "root", // recommended
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
      necessary: [{
        name: {
          fr: fr.cookies.necessary.title,
          en: en.cookies.necessary.title,
          ar: ar.cookies.necessary.title,
        },
        description: {
          fr: fr.cookies.necessary.description,
          en: en.cookies.necessary.description,
          ar: ar.cookies.necessary.description,
        },
        isPreselected: true,
        id: "necessary"
      }],
      optional: [],
    },
    locales: ["en", "fr", "ar"],
  },

  compatibilityDate: "2024-12-26",
});
