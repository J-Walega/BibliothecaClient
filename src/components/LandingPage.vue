<template>
  <v-sheet>
    <v-card>
      <v-card-title>Wyszukiwarka</v-card-title>
      <v-card-text
        >Aby znaleźć interteresujące cię książki, użyj poniższej wyszukiwarki</v-card-text
      >
      <v-text-field label="Wpisz wyszukiwaną frazę" v-model="searchText"></v-text-field>
      <v-card-actions>
        <v-btn color="primary" block @click="searchQuery(searchText)">Wyszukaj</v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchText = ref('')
const router = useRouter()

function searchQuery(query: string) {
  router.push({
    path: '/search',
    query: {
      q: query
    }
  })
}
</script>
