<script setup>
const { t } = useI18n();
useHead({
  title: t("pages.another-page.meta.title"),
  meta: [{ name: "description", content: t("pages.another-page.meta.description") }],
});
useSeoMeta({
  title: t("pages.another-page.meta.title"),
  description: t("pages.another-page.meta.description"),
});
</script>
<template>
  <div class="justify-center">
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold dark:text-white ">{{ $t("pages.another-page.title") }}</h1>
    </section>
    <main class="mt-4 text-slate-500 dark:text-gray-300 [&>*]:mb-4 ">
      <p v-for="index in 3" :key="index">
        {{ $t("pages.another-page.p") }}.{{ $t("pages.another-page.p") }}. {{ $t("pages.another-page.p") }}
      </p>
    </main>
  </div>
</template>
