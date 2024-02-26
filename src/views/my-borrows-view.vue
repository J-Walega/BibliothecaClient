<template>
  <v-card v-for="borrow in response.data.data" :key="borrow.id">
    <v-card-item>
      <v-card-title>{{ borrow.bookItem.book.title }}</v-card-title>
      <v-card-subtitle>Terimn zwrotu {{ borrow.returnDate }}</v-card-subtitle>
    </v-card-item>
    <v-card-actions>
      <v-btn @click="extendTime(borrow.id)">Przedłuż termin oddania książki</v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-if="response.data.error?.code == 404">
    <v-card-text>Nie masz żadnych wypożyczeń</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { getMyBorrows, extendBorrow } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'

const authStore = useAuthStore()
const response = await getBorrows()
async function getBorrows() {
  return await getMyBorrows(authStore.user.token).catch((error) => console.log(error))
}
console.log(response)

async function extendTime(borrowId: number) {
  const response = await extendBorrow(authStore.user.token, borrowId).catch((error) =>
    console.log(error)
  )
  console.log(response)
}
</script>
