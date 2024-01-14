<script setup>
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
  <div class="p-3">
    <h1 class="text-4xl">{{ $t("pages.minimal.title") }}</h1>
    <main class="mt-4 text-slate-500 dark:text-slate-400 [&>*]:mb-4">
      <p>
        {{ $t("pages.minimal.p") }}
      </p>
      <p>
        {{ $t("pages.minimal.p") }}
      </p>
      <p>{{ $t("pages.minimal.p") }} {{ $t("pages.minimal.p") }}</p>
      <p>
        {{ $t("pages.minimal.p") }}
      </p>
    </main>
  </div>
</template>
