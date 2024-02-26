<template>
  <v-card>
    <v-card-title>{{ props.book.title }}</v-card-title>
    <v-card-subtitle v-for="author in book.authors" :key="author.id">
      {{ author.name }} {{ author.surname }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click="getDetails(props.book.id)"> Szeczegóły </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import router from '@/router/router'

interface Book {
  id: string
  title: string
  authors: [
    {
      id: number
      name: string
      surname: string
    }
  ]
  score: number
}

interface BookItems {
  id: string
}

const props = defineProps<{
  book: Book
}>()

function getDetails(query: string) {
  router.push(`/book/${query}`)
}
</script>
