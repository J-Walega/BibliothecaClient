<template>
  <Suspense>
    <v-card v-for="borrow in response.data.data" :key="borrow.id">
      <v-card-item>
        {{ response.data.data }}
      </v-card-item>
    </v-card>
  </Suspense>
  <Suspense>
    <v-card v-if="response.data.error.code == 404">
      <v-card-text>Nie masz żadnych wypożyczeń</v-card-text>
    </v-card>
  </Suspense>
</template>

<script setup lang="ts">
import { getMyBorrows } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'
import { Suspense } from 'vue'

const authStore = useAuthStore()
const response = await getBorrows()
async function getBorrows() {
  return await getMyBorrows(authStore.user.token).catch((error) => console.log(error))
}
console.log(response)
</script>
