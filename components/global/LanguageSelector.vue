<script setup>
const { locale } = useI18n(); // eslint-disable-line
</script>
<template>
  <form>
    <label for="languages">
      <Icon name="prime:language" size="1.5em" />
    </label>
    <select v-model="$i18n.locale" class="bg-transparent">
      <option
        v-for="language in $i18n.availableLocales"
        :key="language"
        :value="language"
        :selected="$i18n.locale === language"
      >
        {{ $t("locale." + language) }}
      </option>
    </select>
  </form>
</template>
