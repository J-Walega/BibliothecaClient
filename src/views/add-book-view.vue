<template>
  <v-container>
    <v-form @submit.prevent>
      <v-row>
        <v-col cols="12">
          <v-autocomplete>
            <v-text-field v-model="bookTitle" label="Tytuł książki" />
          </v-autocomplete>
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
          <v-autocomplete label="Wydawca" v-model="publisherValue"> </v-autocomplete>
        </v-col>
        <v-col cols="12">
          <v-autocomplete chips label="Gatunek" v-model="genresValue"> </v-autocomplete>
        </v-col>
      </v-row>
      <v-btn type="submit" block class="mx-2 px-2"> Dodaj </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { getAllAuthors, postNewAuthor, postNewBook } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'
import { ref } from 'vue'
import { type Ref } from 'vue'

interface Author {
  name: string
  surname: string
}

const bookTitle = ref('')
const selectedAuthorId = ref()
const authors = ref()
const publisherValue = ref()
const genresValue = ref()
const authStore = useAuthStore()

const popAuthorDialog = ref(false)
const authorData: Ref<Author> = ref({ name: '', surname: '' })

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
</script>
