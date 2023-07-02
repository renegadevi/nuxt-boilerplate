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
  <div class="mb-10 flex justify-center pb-5">
    <section>
      <div
        class="relative overflow-hidden border-b border-gray-200 pb-5 text-center dark:border-gray-600"
      >
        <div class="container relative">
          <div>
            <Icon name="logos:nuxt-icon" size="5rem" />
          </div>
          <div
            class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5"
          >
            <p
              class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-400"
            >
              {{ $t("pages.index.hero.subtitle") }}
            </p>
            <h1 class="text-4xl">
              {{ $t("pages.index.hero.title") }}
            </h1>
            <div
              class="sm:text-md font-body text-slate-500 dark:text-slate-400"
            >
              {{ $t("pages.index.hero.description") }}
            </div>
          </div>
        </div>
      </div>

      <div class="container py-8 text-center">
        <h2 class="mt-1 pb-4 text-3xl font-semibold">
          {{ $t("pages.index.features.title") }}
        </h2>
        <p
          class="prose dark:prose-invert font-light text-slate-500 dark:text-slate-100"
        >
          {{ $t("pages.index.features.description") }}
        </p>
      </div>

      <ul class="grid sm:grid-cols-1 lg:ml-[7rem] lg:grid-cols-4">
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Google Fonts
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />TailwindCSS
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Prettier
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Cookie banner
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Eslint
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Dark mode
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Localization (i18n)
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Iconify
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Typescript
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />PostCSS
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="mr-2 text-3xl text-green-500 dark:text-green-300"
          />Device detection
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="shape-geometric-precision mr-2 text-3xl text-green-500 dark:text-green-300"
          />Pinia
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="shape-geometric-precision mr-2 text-3xl text-green-500 dark:text-green-300"
          />Image optimization
        </li>
        <li class="py-1">
          <Icon
            name="heroicons:check-circle"
            class="shape-geometric-precision mr-2 text-3xl text-green-500 dark:text-green-300"
          />100% Lighthouse
        </li>
      </ul>
    </section>
  </div>
</template>
