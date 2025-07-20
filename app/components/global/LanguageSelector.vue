<script setup lang="ts">
const { locale, t, availableLocales, setLocale } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as Node;
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
      isOpen.value = false;
    }
  });
});

function switchLanguage(lang: string) {
  if (setLocale) {
    setLocale(lang);
  } else {
    locale.value = lang;
  }
  isOpen.value = false;
}
</script>

<template>
  <div class="w-auto" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 rounded-lg p-2 px-4 text-gray-600 dark:text-white"
      :class="[
        { 'flex-row-reverse': t('locale.dir') === 'rtl' },
        isOpen
          ? 'bg-gray-100 dark:bg-slate-700'
          : 'hover:bg-gray-100 dark:hover:bg-slate-700',
      ]"
    >
      <Icon name="ph:translate" size="1.25em" />
      <span>{{ t("locale." + locale) }}</span>
      <Icon
        name="ph:caret-down"
        class="h-4 w-4 transition-all duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      v-if="isOpen"
      class="absolute mt-1 min-w-32 rounded-lg bg-white shadow-lg border border-gray-100 dark:bg-slate-700 dark:border-slate-700 right-3"
    >
      <ul>
        <li
          v-for="lang in availableLocales"
          :key="lang"
          :class="[
            'px-4 py-2 cursor-pointer rounded-md m-1 hover:bg-gray-100 text-gray-600 dark:text-white dark:hover:bg-slate-600',
            { 'bg-gray-100 dark:bg-slate-600': locale === lang },
            { 'text-right': t('locale.dir') === 'rtl' },
          ]"
          @click="switchLanguage(lang)"
        >
          <span class="block w-full cursor-pointer">{{
            t("locale." + lang)
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
