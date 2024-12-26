<script setup lang="ts">
const { t } = useI18n();
useLocaleHead({
  dir: true,
  key: "id",
  seo: true,
  lang: true,
});
</script>
<template>
  <!--

    Template below is intended to be removed for your own project.
    This is just a demo.

   -->
  <div class="absolute top-5" :class="t('locale.dir') === 'rtl' ? 'left-5' : 'right-5'">
    <div
      class="flex w-full items-center justify-center gap-2"
      :class="t('locale.dir') === 'rtl' ? 'flex-row-reverse' : 'flex-row'"
    >
      <NuxtLink
        class="flex h-10 w-10 items-center justify-center rounded-lg  hover:bg-gray-100 text-gray-600 dark:hover:bg-slate-700 dark:text-white"
        target="_blank"
        aria-label="Github"
        to="https://github.com/renegadevi/nuxt-boilerplate"
      >
        <Icon name="simple-icons:github" size="20" color="black" />
      </NuxtLink>
      <ThemeSwitcher class="rounded-lg  hover:bg-gray-100 p-2 dark:hover:bg-slate-700 text-gray-600 dark:text-white" />
      <LanguageSelector  />
    </div>
  </div>
  <header class="mx-auto w-full max-w-4xl pt-10">
    <div class="flex flex-col items-center gap-4">
      <Icon name="logos:nuxt-icon" size="42" />
      <div>
        <div class="flex flex-col gap-2 text-center">
          <div class="items-center text-lg font-bold text-gray-500 dark:text-gray-300">
            {{ $t("pages.index.hero.subtitle") }}
          </div>
          <div class="text-3xl font-bold dark:text-white">{{ $t("pages.index.hero.title") }}</div>
          <div class="text-gray-600 dark:text-gray-400">{{ $t("pages.index.hero.description") }}</div>
        </div>
      </div>
    </div>

    <nav class="p-3 py-8">
      <ul class="flex justify-center gap-4">
        <li>
          <NuxtLink
            class="rounded-md bg-gray-200 dark:bg-slate-700 p-3 px-8 hover:bg-green-300  hover:dark:bg-slate-600 text-gray-700 dark:text-white hover:dark:text-white"
            to="/"
            >{{ t("pages.index.link") }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="rounded-md bg-gray-200 dark:bg-slate-700 p-3 px-8 hover:bg-green-300 hover:dark:bg-slate-600 text-gray-700 dark:text-white hover:dark:text-white"
            to="/another-page"
            >{{ t("pages.another-page.link") }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="rounded-md bg-gray-200 dark:bg-slate-700 p-3 px-8 hover:bg-green-300 hover:dark:bg-slate-600 text-gray-700 dark:text-white hover:dark:text-white"
            to="/minimal"
          >
            {{ t("pages.minimal.link") }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main
    class="flex min-h-64 w-full justify-center border-t-4 border-t-[#56CB82] bg-gradient-to-b from-[#D9F1DF] to-transparent dark:from-[#0D3335]"
  >
    <div class="container max-w-4xl">
      <slot />
    </div>
  </main>
  <footer class="dark:text-300 py-20 text-center text-sm text-gray-500 dark:text-gray-400">
    <p>© {{ new Date().getFullYear() }} - {{ $t("site.name") }}</p>
  </footer>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply bg-green-400 text-black dark:bg-gray-200 dark:text-black;
}
</style>
