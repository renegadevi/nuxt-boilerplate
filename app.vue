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
  <div>
    <div
      class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <CookieBanner />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
