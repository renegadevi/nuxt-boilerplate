// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
    logLevel: 4,
  },
  // This is a fix for tailwind+i18n in production mode
  // https://github.com/nuxt-modules/i18n/issues/2177
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    viewer: true,
  },
  imports: {
    dirs: ["./stores", "./locales"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
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
    provider: "ipx",
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
    vueI18n: "./i18n.config.ts",
  },
  eslint: {
    lintOnStart: false,
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
            fr: fr.cookies.necessary.title,
            en: en.cookies.necessary.title,
          },
          description: {
            fr: fr.cookies.necessary.description,
            en: en.cookies.necessary.description,
          },
          targetCookieIds: ["ncc_"],
        },
      ],
      optional: [],
    },
    locales: ["en", "fr"],
  },
});
