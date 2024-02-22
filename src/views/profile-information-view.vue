<template>
  <VCard>
    <VRow>
      <VCol>
        <div class="text-body-1">
          Hello {{ response.data.data.name }} {{ response.data.data.surname }}
        </div>
      </VCol>
      <VCol>
        <v-card>
          <v-card-text> Tu znajdują się informacje dotyczące twojego profilu </v-card-text>
          <v-card-item>Imię: {{ response.data.data.name }}</v-card-item>
          <v-card-item>Nazwisko: {{ response.data.data.surname }}</v-card-item>
          <v-card-item>Adres Email: {{ response.data.data.email }}</v-card-item>
        </v-card>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'

const authStore = useAuthStore()
const response = await getInfo()

async function getInfo() {
  return await getUserInfo(authStore.user.token).catch((error) => console.log(error))
}
</script>
