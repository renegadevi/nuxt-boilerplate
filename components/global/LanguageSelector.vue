<script setup>
const { toggleLocale } = useAppLocale();
</script>
<template>
  <form>
    <label for="languages">
      <Icon name="prime:language" size="1.5em" />
    </label>
    <select
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
