<script setup lang="ts">
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <div
    class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <!--

    Template below is intended to be removed..

  -->
    <div class="container mx-auto max-w-screen-lg px-8">
      <header class="mb-5">
        <nav class="flex flex-row justify-between pb-5 pt-10">
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
          <div
            class="flex flex-col space-x-3 space-y-4 sm:flex-row sm:space-y-0 rtl:space-x-reverse"
          >
            <ThemeSwitcher
              class="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
            />

            <LanguageSelector
              class="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </nav>
        <nav
          class="prose dark:prose-invert flex justify-between font-light text-slate-500 dark:text-slate-100"
        >
          <ul
            class="flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <li class="h-full">
              <NuxtLink
                class="flex h-full w-full items-center justify-center rounded-lg border border-slate-200 bg-gray-50 px-4 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                to="/"
                >{{ $t("pages.index.link") }}</NuxtLink
              >
            </li>
            <li class="h-full">
              <NuxtLink
                class="flex h-full w-full items-center justify-center rounded-lg border border-slate-200 bg-gray-50 px-4 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                to="/about"
                >{{ $t("pages.about.link") }}</NuxtLink
              >
            </li>
            <li class="h-full">
              <NuxtLink
                class="flex h-full w-full items-center justify-center rounded-lg border border-slate-200 bg-gray-50 px-4 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                to="/minimal"
                >{{ $t("pages.minimal.link") }}</NuxtLink
              >
            </li>
            <li class="h-full">
              <NuxtLink
                class="flex h-full w-full items-center justify-center rounded-lg border border-slate-200 bg-gray-50 px-4 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                to="/404"
                >404</NuxtLink
              >
            </li>
          </ul>
          <ul>
            <li class="space-between">
              <NuxtLink
                class="flex rounded-lg border border-transparent px-4 py-1.5 hover:cursor-pointer hover:opacity-70 dark:hover:opacity-90"
                target="_blank"
                to="https://github.com/renegadevi/nuxt-boilerplate"
                aria-label="Github"
                ><span class="dark:hidden"
                  ><Icon name="mdi:github" size="auto" color="black" />
                </span>
                <span class="hidden dark:block">
                  <Icon
                    name="mdi:github"
                    size="auto"
                    color="white"
                    class="hidden dark:block"
                  />
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </header>
      <div class="rounded-2xl bg-white px-6 py-8 shadow-xl dark:bg-slate-800">
        <slot />
      </div>
      <footer
        class="dark:text-300 py-20 text-center text-sm text-gray-600 dark:bg-slate-900"
      >
        <p>© {{ new Date().getFullYear() }} - {{ $t("site.name") }}</p>
      </footer>
    </div>
  </div>
</template>
<style lang="postcss">
ul .router-link-exact-active {
  @apply border-slate-400 bg-slate-500 text-white hover:border-slate-500 hover:bg-slate-500 dark:border-slate-600 dark:bg-slate-700;
}
</style>
