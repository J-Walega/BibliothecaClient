<template>
  <VCard>
    <VRow>
      <VCol>
        <div class="text-body-1">Hello</div>
      </VCol>
      <VCol>
        <div>{{ response }}</div>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRoute } from 'vue-router'

const authStore = useAuthStore()
const route = useRoute().params.id
const response = await getInfo()

async function getInfo() {
  return await getUserInfo(authStore.user.token, route as string).catch((error) =>
    console.log(error)
  )
}
</script>
