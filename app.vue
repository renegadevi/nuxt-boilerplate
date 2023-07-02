<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Boilerplate`
      : "Nuxt3 Boilerplate";
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
