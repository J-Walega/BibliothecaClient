<template>
  <Suspense>
    <v-card class="mx-auto">
      <v-card-title class="text-h4">
        <p class="font-italic">"{{ item.data.data.title }}"</p></v-card-title
      >
      <v-container>
        <v-row no-gutters>
          <v-col v-for="author in item.data.data.authors" :key="author.id">
            <v-sheet max-width="200px">
              <div class="text-h6">{{ author.name }} {{ author.surname }}</div>
              <v-img src="../assets/generic-cover.jpg"></v-img>
              <v-rating hover :length="5" active-color="primary" />
              <div class="text-h4">Średnia ocen: 3.14</div>
            </v-sheet>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-row>
              <v-card>
                <v-card-text class="text-h4">Szczegóły</v-card-text>

                <div class="text-h6">
                  Tytuł:
                  <div>{{ item.data.data.title }}</div>
                </div>
                <div class="text-h6">
                  Gatunek:
                  <div v-for="genre in item.data.data.genre" :key="genre.id">{{ genre.name }}</div>
                </div>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-card class="mx-auto">
            <v-card-title>Komentarze</v-card-title>
            <v-card>
              <v-card-title>Wyraź swoją opinię!</v-card-title>
              <v-text-field
                :model-value="commentContent"
                label="Tu napisz swoją opinię"
              ></v-text-field>
              <v-btn @click="postComment(3.14, commentContent)">Wystaw komentarz</v-btn>
            </v-card>
            <v-card class="mx-auto" v-for="comment in item.data.data.comments" :key="comment.id">
              <v-col>
                <div class="text-h6">{{ comment.score }}</div>
              </v-col>
              <v-col>
                <div class="text-h6">{{ comment.content }}</div>
              </v-col>
            </v-card>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
  </Suspense>
</template>

<script setup lang="ts">
import { getBook } from '@/requests/apiCalls'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute().params.id
const commentContent = ref('')

interface Book {
  id: number
  title: string
  genres: [id: number, name: string]
  comments: [fullName: string, content: string, score: number]
  publisher: [id: number, name: string]
}

const item = await getData()
console.log(item)

async function postComment(score: number, content: string) {}

async function getData() {
  return await getBook(route as string).catch((error) => console.log(error))
}
</script>
