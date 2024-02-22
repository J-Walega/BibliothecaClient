<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="addBook">Dodaj książkę</v-tab>
      <v-tab value="addUser">Dodaj użytkownika</v-tab>
      <v-tab value="listAuthors">Wyświetl autorów</v-tab>
    </v-tabs>
  </v-card>

  <v-card-text>
    <v-window v-model="tab">
      <v-window-item value="addBook">
        <v-card class="mx-auto bg-blue-lighten-5" width="800">
          <div class="text-h5 pl-5 mt-5">Dodaj książkę</div>
          <AddBookView />
        </v-card>
      </v-window-item>
      <v-window-item value="addUser">
        <div class="text-h5 pl-5 mt-5">Dodaj użytkownika</div>
      </v-window-item>
      <v-window-item value="listAuthors">
        <div class="text-h5 pl-5 mt-5">Lista autorów</div>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddBookView from './add-book-view.vue'

const tab = ref(null)
</script>
