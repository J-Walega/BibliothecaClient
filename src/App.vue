<template>
  <Suspense>
    <router-view />
  </Suspense>
</template>

<script setup lang="ts">
import { useRecaptchaProvider } from 'vue-recaptcha'

useRecaptchaProvider()
</script>
