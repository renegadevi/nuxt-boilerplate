import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./locales",
  messages: { "en-US": en, "fr-FR": fr },
  baseUrl: import.meta.env.VITE_BASE_URL,
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
  ],
}));
