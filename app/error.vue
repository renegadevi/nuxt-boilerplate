<script setup lang="ts">
defineProps({ error: { type: Object, default: null } });
</script>
<template>
  <div class="p-20 text-slate-900 dark:bg-slate-900 dark:text-white">
    <div
      class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5 text-center"
    >
      <p class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-300">
        {{ error.statusCode }}
      </p>
      <h1 class="text-xl font-medium">
        <template v-if="error.statusCode == 404">
          {{ $t("error.page-not-found") }}
        </template>
        <template v-else>
          {{ error.message }}
        </template>
      </h1>
      <button
        class="mx-auto mt-3 flex align-middle items-center gap-2 justify-center rounded-lg bg-gray-200 py-2.5 px-5 text-gray-700 hover:cursor-pointer hover:bg-gray-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        @click="clearError({ redirect: '/' })"
      >
        <Icon name="ph:arrow-left-bold" />
        {{ $t("error.return") }}
      </button>
    </div>
  </div>
</template>
