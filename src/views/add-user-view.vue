<template>
  <v-container>
    <v-form @submit.prevent>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Email użytkownika" v-model="newUser.email"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Imię" v-model="newUser.name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Nazwisko" v-model="newUser.surname"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Miasto" v-model="newUser.city.name"></v-text-field>
          <v-text-field label="Region" v-model="newUser.city.region"></v-text-field>
          <v-text-field label="Kod pocztowy" v-model="newUser.city.postCode"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Ulica zamieszkania" v-model="newUser.street"></v-text-field>
          <v-text-field label="Numer budynku" v-model="newUser.buildingNumber"></v-text-field>
          <v-text-field label="Numer mieszkania" v-model="newUser.houseNumber"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="PESEL" v-model="newUser.pesel"></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        v-if="props.role == `user`"
        type="submit"
        block
        class="mx-2 px-2"
        @click="createNewUser(token, newUser)"
      >
        Dodaj użytkownika
      </v-btn>
      <v-btn
        v-if="props.role == `employee`"
        type="submit"
        block
        class="mx-2 px-2"
        @click="createNewEmployee(token, newUser)"
      >
        Dodaj pracownika
      </v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { addUser, addEmployee } from '@/requests/apiCalls'
import { useAuthStore } from '@/stores/useAuthStore'
import { Ref, ref } from 'vue'

interface User {
  email: string
  name: string
  surname: string
  city: {
    name: string
    region: string
    postCode: string
  }
  street: string
  buildingNumber: number
  houseNumber: number
  pesel: number
}

const props = defineProps<{
  role: string
}>()

const newUser: Ref<User> = ref({
  email: '',
  name: '',
  surname: '',
  city: {
    name: '',
    region: '',
    postCode: ''
  },
  street: '',
  buildingNumber: 0,
  houseNumber: 0,
  pesel: 0
})
const authStore = useAuthStore()
const token = authStore.user.token

async function createNewUser(token: string, newUser: any) {
  let request = await addUser(token, newUser).catch((error) => console.log(error))
  console.log(request)
}

async function createNewEmployee(token: string, newEmployee: any) {
  let request = await addEmployee(token, newEmployee).catch((error) => console.log(error))
  console.log(request)
}
</script>
