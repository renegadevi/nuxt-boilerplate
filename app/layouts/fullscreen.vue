<template>
  <!--

    Template below is intended to be removed for your own project.
    This is just a demo.

   -->
  <main class="flex w-full justify-center border-t-4 border-t-[#56CB82] pt-10">
    <NuxtLink
      class="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
      to="/"
    >
      <Icon name="ph:arrow-left" size="20" />
    </NuxtLink>
    <div class="container max-w-4xl pt-14">
      <slot />
    </div>
  </main>
</template>
