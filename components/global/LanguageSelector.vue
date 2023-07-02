<script setup>
const { locale } = useI18n();
</script>
<template>
  <form>
    <label for="languages"><Icon name="prime:language" size="1.5em" /></label>
    <select
      id="languages"
      v-model="locale"
      class="border-1 border-l-3 mx-1 inline-block border-gray-900 bg-inherit text-sm"
    >
      <option value="en-US">English</option>
      <option value="fr-FR">French</option>
    </select>
  </form>
</template>
