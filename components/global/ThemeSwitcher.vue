<template>
  <form>
    <label for="themes"><Icon name="gg:dark-mode" size="1.5em" /></label>
    <select
      id="themes"
      v-model="$colorMode.preference"
      class="border-1 border-l-3 mx-1 inline-block border-gray-900 bg-inherit text-sm"
    >
      <option class="dark:bg-slate-800" value="system">
        {{ $t("themes.system") }}
      </option>
      <option class="dark:bg-slate-800" value="light">
        {{ $t("themes.light") }}
      </option>
      <option class="dark:bg-slate-800" value="dark">
        {{ $t("themes.dark") }}
      </option>
    </select>
  </form>
</template>
