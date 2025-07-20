<script setup lang="ts">
const { t } = useI18n();
</script>
<template>
  <!--

    Template below is intended to be removed for your own project.
    This is just a demo.

   -->
  <div>
    <nav
      class="p-3 py-2 border-b-4 border-b-[#56CB82] flex justify-between"
      :class="t('locale.dir') === 'rtl' ? 'flex-row-reverse' : 'flex-row'"
    >
      <ul class="flex justify-center items-center align-middle gap-2">
        <li>
          <NuxtLink
            class="rounded-md dark:bg-slate-700 p-2 px-3 hover:bg-gray-100 hover:dark:bg-slate-600 text-gray-700 dark:text-white hover:dark:text-white"
            to="/"
            >{{ t("pages.index.link") }}</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            class="rounded-md dark:bg-slate-700 p-2 px-3 hover:bg-gray-100 hover:dark:bg-slate-600 text-gray-700 dark:text-white hover:dark:text-white"
            to="/minimal"
          >
            {{ t("pages.minimal.link") }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex justify-end">
        <div class="flex w-full items-center justify-center gap-2">
          <NuxtLink
            class="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 dark:hover:bg-slate-700 dark:text-white"
            target="_blank"
            aria-label="Github"
            to="https://github.com/renegadevi/nuxt-boilerplate"
          >
            <Icon name="simple-icons:github" size="20" color="black" />
          </NuxtLink>
          <ThemeSwitcher
            class="rounded-lg hover:bg-gray-100 p-2 dark:hover:bg-slate-700 text-gray-600 dark:text-white"
          />
          <LanguageSelector />
        </div>
      </div>
    </nav>
    <header class="mx-auto w-full max-w-4xl pt-10">
      <div class="flex flex-col items-center gap-4">
        <Icon name="logos:nuxt-icon" size="42" />
        <div>
          <div class="flex flex-col gap-2 text-center">
            <div
              class="items-center text-lg font-bold text-gray-500 dark:text-gray-300"
            >
              {{ $t("pages.index.hero.subtitle") }}
            </div>
            <div class="text-3xl font-bold dark:text-white">
              {{ $t("pages.index.hero.title") }}
            </div>
            <div class="text-gray-600 dark:text-gray-400">
              {{ $t("pages.index.hero.description") }}
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="flex min-h-64 w-full justify-center">
      <div class="container max-w-4xl">
        <slot />
      </div>
    </main>
    <footer
      class="dark:text-300 py-20 text-center text-sm text-gray-500 dark:text-gray-400"
    >
      <p>© {{ new Date().getFullYear() }} - {{ $t("site.name") }}</p>
    </footer>
  </div>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply bg-gray-200 text-gray-700 border-green-300 dark:bg-gray-200 dark:text-black;
}
</style>
