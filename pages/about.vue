<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.about.meta.title"),
  meta: [{ name: "description", content: t("pages.about.meta.description") }],
});
useSeoMeta({
  title: t("pages.about.meta.title"),
  description: t("pages.about.meta.description"),
});
</script>
<template>
  <div class="mb-10 p-5">
    <h1 class="text-4xl">{{ $t("pages.about.title") }}</h1>
    <main class="py-4">
      <p class="mb-2">
        {{ $t("pages.about.p") }}
      </p>
      <p class="mb-2">
        {{ $t("pages.about.p") }}
      </p>
      <p class="mb-2">{{ $t("pages.about.p") }} {{ $t("pages.about.p") }}</p>
      <p class="mb-2">
        {{ $t("pages.about.p") }}
      </p>
    </main>
  </div>
</template>
