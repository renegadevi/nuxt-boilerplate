<script setup lang="ts">
const { t } = useI18n();
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${t("site.name")}`
      : `${t("site.name")}`;
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
