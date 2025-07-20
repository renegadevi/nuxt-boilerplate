<script setup>
const colorMode = useColorMode();
const themeConfig = {
  dark: { next: "system", icon: "ph:moon" },
  system: { next: "light", icon: "ph:sun-horizon" },
  light: { next: "dark", icon: "ph:sun" },
};

const name = ref(null);
const toggleColorMode = () => {
  const { next } = themeConfig[colorMode.preference];
  Object.assign(colorMode, { preference: next, value: next });
  name.value = themeConfig[next].icon;
};
onMounted(() => {
  name.value = themeConfig[colorMode.preference].icon;
});
</script>
<template>
  <ClientOnly>
    <button
      v-bind="$attrs"
      class="cursor-pointer flex w-10 h-10"
      @click="toggleColorMode"
      aria-label="Toggle color modes"
    >
      <Icon :name size="24" />
    </button>
  </ClientOnly>
</template>
