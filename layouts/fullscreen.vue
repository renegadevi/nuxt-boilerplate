<script setup lang="ts">
const router = useRouter();
useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>
<template>
  <div class="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white p-6">
    <div class="rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800">
      <button
        class="m-2 rounded-lg border border-slate-200 bg-gray-50 p-4 py-3 text-gray-700 hover:cursor-pointer hover:border-slate-200 hover:bg-slate-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        @click="router.go(-1)"
      >
        ←
      </button>
      <slot />
    </div>
  </div>
</template>
