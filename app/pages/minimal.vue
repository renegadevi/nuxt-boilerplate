<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.minimal.meta.title"),
  meta: [{ name: "description", content: t("pages.minimal.meta.description") }],
});
useSeoMeta({
  title: t("pages.minimal.meta.title"),
  description: t("pages.minimal.meta.description"),
});
definePageMeta({
  layout: "fullscreen",
});
</script>
<template>
  <!--

    Page is intended to be removed for your own project.

   -->
  <div class="p-3">
    <h1 class="text-4xl dark:text-white">{{ $t("pages.minimal.title") }}</h1>
    <main class="mt-4 text-slate-500 dark:text-slate-400 [&>*]:mb-4">
      <p v-for="index in 3" :key="index">
        {{ $t("pages.minimal.p") }}, {{ $t("pages.minimal.p") }}
      </p>
    </main>
  </div>
</template>
