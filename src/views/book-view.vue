<template>
  <v-container>
    <v-card>
      <div class="d-flex flex-row">
        <v-avatar class="ma-3" size="200" rounded="0">
          <v-img src="@/assets/generic-cover.jpg"></v-img>
        </v-avatar>
        <v-card-item>
          <v-card-title class="text-h5 font-italic"> "{{ item.data.data.title }}"</v-card-title>
          <v-card-subtitle v-for="author in item.data.data.authors" :key="author.id"
            >{{ author.name }} {{ author.surname }}</v-card-subtitle
          >
        </v-card-item>
        <v-card-item>
          <v-card-title class="text-h6">Gatunki</v-card-title>
          <v-card-subtitle v-for="genre in item.data.data.genres" :key="genre.id">{{
            genre
          }}</v-card-subtitle>
        </v-card-item>
        <v-card-item>
          <v-card-title class="text-h6">Wydawca</v-card-title>
          <v-card-subtitle>{{ item.data.data.publisher.name }}</v-card-subtitle>
        </v-card-item>
      </div>
      <v-card>
        <v-card-title>Dostępne egzemplarze</v-card-title>
        <v-card-subtitle v-if="!bookItems.data.data">Brak dostępnych egzemplarzy</v-card-subtitle>
        <v-table v-if="bookItems.data.data">
          <thead>
            <th>Książka</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr v-for="items in bookItems.data.data" :key="items.id">
              <td>{{ items.id }}</td>
              <td v-if="items.status === 1">Dostępna w bibliotece</td>
              <td v-if="items.status === 2">Wypożyczona</td>
              <td v-if="items.status === 3">Obecnie niedostępna dla czytelników</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
      <v-card>
        <v-card-item>
          <v-card-title>Wyraź swoją opinię!</v-card-title>
          <v-rating v-model="commentContent.score" half-increments hover></v-rating>
          <v-text-field
            v-model="commentContent.content"
            label="Tu napisz swoją opinię"
          ></v-text-field>
        </v-card-item>
        <v-card-actions>
          <v-btn variant="outlined" @click="postComment(commentContent)">Wystaw komentarz</v-btn>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-title>Komentarze czytelników</v-card-title>
        <v-card variant="outlined" v-for="comment in comments.data.data" :key="comment.id">
          <v-card-item>
            <v-card-title>
              {{ comment.fullName }}
            </v-card-title>
            <v-rating
              v-model="comment.score"
              half-increments
              readonly
              density="compact"
              size="x-small"
            ></v-rating>
            <v-card-subtitle>
              {{ comment.content }}
            </v-card-subtitle>
            <v-btn
              color="red"
              v-if="
                authStore.user?.user.roles.includes('Administrator') ||
                authStore.user?.user.roles.includes('Employee')
              "
              @click="deleteComment(comment.id)"
              >Usuń komentarz</v-btn
            >
          </v-card-item>
        </v-card>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { getBook } from '@/requests/apiCalls'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Comment, PostComment, GetBookComments, DeleteComment } from '@/requests/commentApiCalls'
import { getBookItems } from '@/requests/bookItemApiCalls'
import { useAuthStore } from '@/stores/useAuthStore'

const route = useRoute().params.id
const commentContent = ref<Comment>({
  bookId: 0,
  score: 0,
  content: ''
})

const authStore = useAuthStore()

interface Book {
  id: number
  title: string
  genres: [id: number, name: string]
  comments: [fullName: string, content: string, score: number]
  publisher: [id: number, name: string]
}

const item = await getBookData()
console.log(item)

const comments = await getComments()
console.log(comments)

const bookItems = await getItems()
console.log(bookItems)

async function postComment(data: Comment) {
  data.bookId = item.data.data.id
  const response = await PostComment(authStore.user.token, data).catch((error) =>
    console.log(error)
  )
  await getComments()
  return response
}

async function getComments() {
  var bookId = item.data.data.id
  const response = await GetBookComments(bookId)
  return response
}

async function getBookData() {
  const response = await getBook(route as string).catch((error) => console.log(error))
  return response
}

async function getItems() {
  var bookId = item.data.data.id
  const response = await getBookItems(bookId).catch((error) => console.log(error))
  return response
}

async function deleteComment(commentId: number) {
  var token = authStore.user.token
  const response = await DeleteComment(token, commentId).catch((error) => console.log(error))
  return response
}
</script>
