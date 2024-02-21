<template>
  <v-card>
    <v-card-title>{{ props.book.title }}</v-card-title>
    <v-card-subtitle v-for="author in book.authors" :key="author.id">
      {{ author.name }} {{ author.surname }}
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
interface Book {
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

const props = defineProps<{
  book: Book
}>()
</script>
