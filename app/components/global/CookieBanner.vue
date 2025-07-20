<script setup lang="ts">
const { locale } = useI18n();
type LocaleCode = typeof locale.value extends `${infer Code}-${string}`
  ? Code
  : never;
const currentLocale = computed(() => locale.value.slice(0, 2) as LocaleCode);

/* Example to watch for a cookie being accepted */
/*
const {
  // cookiesEnabled,
  cookiesEnabledIds,
  // isConsentGiven,
  // isModalActive,
  // moduleOptions,
} = useCookieControl();
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("google-analytics") &&
      current?.includes("google-analytics")
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload(); // placeholder for your custom change handler
    }
  },
  { deep: true }
);
*/
</script>
<template>
  <div>
    <CookieControl :locale="currentLocale">
      <template #bar>
        <h3>{{ $t("cookies.bar.title") }}</h3>
        <p>{{ $t("cookies.bar.description") }}</p>
      </template>
      <template #modal>
        <h3>{{ $t("cookies.modal.title") }}</h3>
        <p>
          {{ $t("cookies.modal.description") }}
          <NuxtLink to="/privacy-policy">{{
            $t("cookies.modal.privacy-policy")
          }}</NuxtLink>
        </p>
      </template>
    </CookieControl>
  </div>
</template>
