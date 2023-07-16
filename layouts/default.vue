<script setup>
// This is just the boilerplate. It's intended to be removed.
const { locale } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <div class="container mx-auto max-w-screen-lg p-4 lg:p-0">
    <header>
      <nav class="mb-5 flex flex-row justify-between py-7">
        <NuxtLink to="/" aria-label="Home" class="min-w-fit">
          <nuxt-img
            class="h-6 dark:hidden sm:ml-3 lg:ml-0"
            src="nuxt/full-logo-green-dark.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px"
          />
          <nuxt-img
            class="hidden h-6 dark:block"
            src="nuxt/full-logo-green-light.svg"
            densities="x1 x2"
            alt="nuxt-logo"
            style="height: 24px; width: 99px"
          />
        </NuxtLink>
        <div class="flex flex-col sm:flex-row">
          <div
            class="mx-2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 inline-flex mb-3 sm:mb-0"
          >
            <ThemeSwitcher />
          </div>
          <div
            class="mx-2 inline-flex rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <nav>
        <div
          class="prose dark:prose-invert flex justify-between font-light text-slate-500 dark:text-slate-100"
        >
          <ul class="flex">
            <li class="mr-1">
              <NuxtLink
                class="mr-1 inline-block rounded-lg border border-gray-300 bg-gray-50 px-4 py-1.5 text-gray-700 hover:cursor-pointer hover:bg-slate-500 hover:text-white dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                to="/"
                >{{ $t("pages.index.link") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="mx-1 inline-block rounded-lg border border-gray-300 bg-gray-50 px-4 py-1.5 text-gray-700 hover:cursor-pointer hover:bg-slate-500 hover:text-white dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                to="/about"
                >{{ $t("pages.about.link") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="mx-1 inline-block rounded-lg border border-gray-300 bg-gray-50 px-4 py-1.5 text-gray-700 hover:cursor-pointer hover:bg-slate-500 hover:text-white dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                to="/404"
                >404</NuxtLink
              >
            </li>
          </ul>
          <ul>
            <li class="space-between">
              <NuxtLink
                class="flex rounded-lg border border-gray-300 bg-gray-50 px-4 py-1.5 text-gray-700 hover:cursor-pointer hover:bg-slate-500 hover:text-white dark:border-gray-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
                target="_blank"
                to="https://github.com/renegadevi/nuxt-boilerplate"
                ><span class="dark:hidden"
                  ><Icon
                    name="mdi:github"
                    size="auto"
                    color="black"

                  />
                </span>
                <span class="hidden dark:block">
                  <Icon
                    name="mdi:github"
                    size="auto"
                    color="white"
                    class="hidden dark:block"
                  />
                </span>
                </NuxtLink
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div
      class="mt-5 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800"
    >
      <slot />
    </div>
    <footer
      class="mt-15 relative my-20 border-t border-gray-200 bg-slate-100 pb-20 dark:border-gray-600 dark:bg-slate-900"
    >
      <div class="absolute inset-x-0 -top-3 flex items-center justify-center">
        <div class="relative flex h-10 w-14 justify-center">
          <div
            class="absolute inset-0 -top-[2px] h-full w-full rounded-full bg-slate-100 blur-[6px] dark:bg-slate-900"
          ></div>
          <nuxt-img
            src="nuxt/icon-green.svg"
            class="z-0 h-6"
            style="width: 24px; height: 24px"
            alt="nuxt-icon"
          />
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply border-slate-700 bg-slate-700 text-white hover:border-slate-500 hover:bg-slate-500 dark:bg-slate-800;
}
</style>
