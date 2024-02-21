<template>
  <v-sheet>
    <v-card>
      <v-card-text>Wynik wyszukiwania dla: {{ query }}</v-card-text>
    </v-card>
    <v-card v-for="book in result.data.data" :key="book.id">
      <BookSearchView :book="book"></BookSearchView>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSearchResult } from '@/requests/apiCalls'
import { defineAsyncComponent } from 'vue'

const BookSearchView = defineAsyncComponent(() => import('./book-search-view.vue'))

const route = useRoute()
const query = ref()

query.value = route.query.q

const result = await getSearchResult(route.query.q!.toString())
console.log(result.data.data)
</script>
