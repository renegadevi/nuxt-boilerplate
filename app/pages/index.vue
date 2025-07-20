<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
});
useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
});
definePageMeta({
  layout: "default",
});
</script>
<template>
  <!--

    Page below is intended to be removed for your own project.
    This is just a demo.

   -->
  <div class="justify-center">
    <section class="flex flex-col items-center mt-10">
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 [&>li]:text-gray-600 [&>li]:dark:text-gray-200 [&>li]:flex [&>li]:items-center [&>li]:p-2.5 [&>li]:rounded-lg"
      >
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:text-aa" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.googleFonts") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="simple-icons:tailwindcss" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.TailwindCSS") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="simple-icons:prettier" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.Prettier") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:cookie" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.cookies") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="streamline-logos:eslint-logo-solid" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.eslint") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:sun-horizon" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.darkMode") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:translate" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.i18n") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="simple-icons:iconify" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.Iconify") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="nonicons:typescript-16" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.Typescript") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="simple-icons:postcss" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.postcss") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:devices" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.deviceDetect") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="mdi:fruit-pineapple" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.Pinia") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:images" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.imageOptim") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:lighthouse" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.lightHouse") }}</div>
        </li>
        <li class="group">
          <div
            class="flex items-center p-1.5 border rounded bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-300 dark:border-green-700"
          >
            <Icon name="ph:building-office" />
          </div>
          <div class="pl-2">{{ $t("pages.index.features.enterprise") }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>
