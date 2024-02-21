<template>
  <v-card class="mx-auto">
    <v-card-title class="text-h4">
      <p class="font-italic">"{{ mockBook.Title }}"</p></v-card-title
    >
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-sheet max-width="200px">
            <div class="text-h4">{{ mockBook.Autor }}</div>
            <v-img src="../assets/generic-cover.jpg"></v-img>
            <v-rating hover :length="5" active-color="primary" />
            <div class="text-h4">Średnia ocen: {{ mockBook.Score }}</div>
          </v-sheet>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-row>
            <v-sheet>
              <p class="text-h4">Szczegóły</p>
            </v-sheet>
          </v-row>
          <v-row>
            <div class="text-h6">
              Tytuł:
              <div>{{ mockBook.Title }}</div>
            </div>
          </v-row>
          <v-row>
            <v-sheet>
              <div class="text-h6">
                Gatunek:
                <div>{{ mockBook.Genre }}</div>
              </div>
            </v-sheet>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-card class="mx-auto">
          <v-col>
            <div class="text-h6">{{ mockComment.Name }} {{ mockComment.Surname }}</div>
          </v-col>
          <v-col>
            <div class="text-h6">{{ mockComment.Text }}</div>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { getBook } from '@/requests/apiCalls'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute().params.id

const mockBook = {
  Title: 'Pan Tadeusz',
  Autor: 'Adam Mickiewicz',
  Genre: 'poezja epicka',
  Score: 3.14
}

const mockComment = {
  Name: 'Ja',
  Surname: 'Wal',
  Score: '3',
  Text: 'TL;DR ||  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

var Book = ref()
async function getData() {
  await getBook(route as string)
    .catch((error) => console.log(error))
    .then((response) => (Book.value = response && console.log(response)))
}
</script>
