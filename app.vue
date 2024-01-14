<script setup lang="ts">
const { locale, t } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t("locale.dir") as "ltr" | "rtl" | "auto";
    }),
  },
  titleTemplate(title) {
    return title ? `${title} - ${t("site.name")}` : `${t("site.name")}`;
  },
});
</script>
<template>
  <NuxtLayout>
    <div>
      <CookieBanner />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
