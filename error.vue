<script setup lang="ts">
defineProps({ error: { type: Object, default: null } });
</script>
<template>
  <div
    class="h-screen bg-slate-100 p-20 text-slate-900 dark:bg-slate-900 dark:text-white"
  >
    <div
      class="mx-auto w-auto max-w-md rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-slate-800"
    >
      <div
        class="relative flex flex-col justify-center gap-y-4 sm:h-40 sm:gap-y-5"
      >
        <p class="mb-[-1em] font-semibold text-slate-500 dark:text-slate-400">
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
          class="mx-auto mt-3 w-[10rem] rounded-lg border border-slate-200 bg-gray-50 p-4 py-2.5 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-100 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          @click="clearError({ redirect: '/' })"
        >
          {{ $t("error.return") }}
        </button>
      </div>
    </div>
  </div>
</template>
