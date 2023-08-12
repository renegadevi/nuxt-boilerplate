import { useStorage } from "@vueuse/core";

export const useAppLocale = () => {
  const { locale } = useI18n();

  const lang = useStorage("lang", "en-US");

  locale.value = lang.value;

  const toggleLocale = (e) => {
    lang.value = e.target.value;
  };

  return { toggleLocale, locale };
};
