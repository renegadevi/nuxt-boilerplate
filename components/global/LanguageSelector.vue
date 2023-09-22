<script setup>
const { locale } = useI18n();

// update local storage upon language change
const toggleLocale = () => {
  localStorage.setItem("nuxt-lang", locale.value);
};

// check for stored language on initial load.
onMounted(() => {
  const storedLanguage = localStorage.getItem("nuxt-lang");
  if (storedLanguage) {
    locale.value = storedLanguage;
  }
});
</script>
<template>
  <form>
    <label for="languages">
      <Icon name="prime:language" size="1.5em" />
    </label>
    <select
      id="languages"
      v-model="$i18n.locale"
      class="bg-transparent"
      @change="toggleLocale"
    >
      <option
        v-for="language in $i18n.availableLocales"
        :key="language"
        :value="language"
        :selected="$i18n.locale === language"
        class="dark:bg-slate-800"
      >
        {{ $t("locale." + language) }}
      </option>
    </select>
  </form>
</template>
