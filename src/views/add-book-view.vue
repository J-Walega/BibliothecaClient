<template>
  <v-container>
    <v-form @submit.prevent>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="bookTitle" label="Tytuł książki" />
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="bookISBN" label="Kod ISBN" />
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            v-model="selectedAuthorId"
            :items="authors"
            label="Autor"
            :item-title="(item: any) => item.name + ' ' + item.surname"
            item-value="id"
            chips
          >
            <template v-slot:append-item>
              <v-virtual-scroll v-intersect="getAuthors"></v-virtual-scroll>
            </template>
          </v-autocomplete>
          <v-dialog v-model="popAuthorDialog">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" text="Dodaj nowego autora"></v-btn>
            </template>

            <template v-slot:default>
              <v-card title="Dodaj autora">
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="authorData.name" label="Imię" />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field v-model="authorData.surname" label="Nazwisko"></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <v-btn text="Dodaj" @click="addAuthor(authorData)"></v-btn>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col cols="12">
          <v-autocomplete
            label="Wydawca"
            v-model="selectedPublisherId"
            :items="publishers"
            :item-title="(item: any) => item.name"
            item-value="id"
          >
            <template v-slot:append-item>
              <v-virtual-scroll v-intersect="getPublishers"></v-virtual-scroll>
            </template>
          </v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete chips label="Gatunek" v-model="genres"> </v-autocomplete>
        </v-col>
      </v-row>
      <v-btn type="submit" block class="mx-2 px-2" @click="postNewBook()"> Dodaj </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import {
  getAllAuthors,
  getAllPublishers,
  getAllGenres,
  postNewAuthor,
  postNewBook
} from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'
import { ref } from 'vue'
import { type Ref } from 'vue'

interface Author {
  name: string
  surname: string
}

interface Book {
  id: string
  title: string
  publisherId: number
  authorsId: Array<number>
  genresId: Array<number>
}

interface Publisher {
  name: string
}

interface Genre {
  name: string
}

const bookTitle = ref('')
const bookISBN = ref()

const selectedAuthorId = ref()
const authors = ref()

const publishers = ref()
const selectedPublisherId = ref()

const genres = ref()
const selectedGenreId = ref()

const authStore = useAuthStore()

const popAuthorDialog = ref(false)
const popPublisherDialog = ref(false)
const popGenreDialog = ref(false)

const pubisherData: Ref<Publisher> = ref({ name: '' })
const authorData: Ref<Author> = ref({ name: '', surname: '' })
const genreData: Ref<Genre> = ref({ name: '' })

async function postBook(book: Book) {
  await postNewBook(book)
}

async function getAuthors() {
  let authorsList = await getAllAuthors(authStore.user.token)
  console.log(authorsList)
  let author = authorsList.data.data
  popAuthorDialog.value = false
  authors.value = author
}

async function addAuthor(data: Author) {
  let response = await postNewAuthor(authStore.user.token, data)
  console.log(response)
}

async function getPublishers() {
  let publishersList = await getAllPublishers(authStore.user.token)
  console.log(publishersList)
  let publisher = publishersList.data.data
  popPublisherDialog.value = false
  publishers.value = publisher
}

async function getGenres() {
  let genresList = await getAllGenres(authStore.user.token)
  console.log(genresList)
  let genre = genresList.data.data
  popGenreDialog.value = false
  genres.value = genre
}
</script>
