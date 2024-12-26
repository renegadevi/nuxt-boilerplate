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
</script>
<template>
  <!--

    Page below is intended to be removed for your own project.
    This is just a demo.

   -->
  <div class="justify-center">
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold dark:text-white ">{{ t('pages.index.hero.tagline-start') }} <span class="text-green-600 dark:text-green-400">{{ t('pages.index.hero.tagline-highlight') }}</span> {{ t('pages.index.hero.tagline-end') }}</h1>
    </section>
    <section class="flex flex-col items-center">
      <ul
        class="grid sm:grid-cols-2 lg:grid-cols-3 [&>li]:text-gray-500 [&>li]:dark:text-white [&>li]:flex [&>li]:items-center [&>li>span]:text-green-500 [&>li>span]:dark:text-green-400 [&>li>span]:me-2 [&>li>span]:text-3xl gap-2 gap-x-16"
      >
        <li class="py-2 font-bold">
          <Icon
            name="ph:text-aa"
          />{{ $t("pages.index.features.googleFonts") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:tailwindcss"
          />{{ $t("pages.index.features.TailwindCSS") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:prettier"
          />{{ $t("pages.index.features.Prettier") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:cookie"
          />{{ $t("pages.index.features.cookies") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:eslint"
          />{{ $t("pages.index.features.eslint") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:sun-horizon"
          />{{ $t("pages.index.features.darkMode") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:translate"
          />{{ $t("pages.index.features.i18n") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:iconify"
          />{{ $t("pages.index.features.Iconify") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:typescript"
          />{{ $t("pages.index.features.Typescript") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="simple-icons:postcss"
          />{{ $t("pages.index.features.postcss") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:devices"
          />{{ $t("pages.index.features.deviceDetect") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="mdi:fruit-pineapple"
          />{{ $t("pages.index.features.Pinia") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:images"
          />{{ $t("pages.index.features.imageOptim") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:lighthouse"
          />{{ $t("pages.index.features.lightHouse") }}
        </li>
        <li class="py-2 font-bold">
          <Icon
            name="ph:building-office"
          />{{ $t("pages.index.features.enterprise") }}
        </li>
      </ul>
    </section>

  </div>
</template>
