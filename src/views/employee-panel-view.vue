<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="addBook">Dodaj książkę</v-tab>
      <v-tab value="addUser">Dodaj użytkownika</v-tab>
      <v-tab value="addEmployee">Dodaj pracownika</v-tab>
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
        <v-card class="mx-auto bg-blue-lighten-5" width="800">
          <div class="text-h5 pl-5 mt-5">Dodaj użytkownika</div>
          <AddUserView :role="`user`" />
        </v-card>
      </v-window-item>
      <v-window-item value="addEmployee">
        <v-card class="mx-auto bg-blue-lighten-5" width="800">
          <div class="text-h5 pl-5 mt-5">Dodaj pracownika</div>
          <AddUserView :role="`employee`" />
        </v-card>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AddBookView from './add-book-view.vue'
import AddUserView from './add-user-view.vue'

const tab = ref(null)
</script>
