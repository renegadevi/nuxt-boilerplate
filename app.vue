<script setup lang="ts">
const { locale, t } = useI18n();
const isLoading = ref(true);

if (import.meta.client) {
  const storedLanguage = localStorage.getItem("nuxt-lang");
  if (storedLanguage && storedLanguage !== "en-US") {
    locale.value = storedLanguage;
  }
}

onMounted(() => {
  // Remove loading state after initial render
  nextTick(() => {
    isLoading.value = false;
  });
});

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
  <div class="relative">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-900"
    ></div>
    <NuxtLayout>
      <div>
        <CookieBanner />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>
