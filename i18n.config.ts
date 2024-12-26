import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";
import ar from "./locales/ar-AR.json";

export default defineI18nConfig(() => {
  const config = useRuntimeConfig()

  return {
    legacy: false,
    langDir: "./locales",
    messages: { "en-US": en, "fr-FR": fr, "ar-AR": ar },
    baseUrl: config.public.baseUrl,
    locales: [
      {
        code: "en",
        iso: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
      {
        code: "ar",
        iso: "ar-AR",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'nuxt-lang',
      redirectOn: 'root'
    }
  }
})

