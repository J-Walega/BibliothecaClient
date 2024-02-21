<template>
  <v-container fluid fill-height>
    <v-col>
      <v-row class="d-flex justify-center">
        <v-card color="primary" class="mb" width="600">
          <v-card-title> Login </v-card-title>
        </v-card>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-card width="600">
          <v-form validate-on="submit lazy" @submit.prevent>
            <v-col cols="auto">
              <v-row md="6" class="d-flex justify-center">
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  color="primary"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-row>
              <v-row md="6" class="d-flex justify-center">
                <v-text-field
                  v-model="password"
                  label="Hasło"
                  type="password"
                  color="primary"
                  autocomplete="off"
                  required
                ></v-text-field>
              </v-row>
              <v-row class="d-flex justify-center">
                <v-btn
                  class="mt-2"
                  color="primary"
                  type="submit"
                  :loading="loading"
                  @click="submit(new Credentials(email, password))"
                >
                  Zaloguj
                </v-btn>
              </v-row>
            </v-col>
          </v-form>
        </v-card>
      </v-row>

      <v-row class="d-flex justify-center">
        <Transition name="fade">
          <v-card v-if="message">
            <error>{{ message }}</error>
          </v-card>
        </Transition>
      </v-row>
    </v-col>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { provide } from 'vue'
import error from '@/views/generic/error.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const email = ref('')
const password = ref('')
const message = ref('')
const loading = ref(false)

provide('error', message)

const emailRules = [
  (value: any) => {
    if (value) return true

    return 'E-mail is requred.'
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  }
]

interface Credentials {
  email: string
  password: string
}

// eslint-disable-next-line no-redeclare
class Credentials implements Credentials {
  email: string
  password: string

  constructor(email: string, password: string) {
    ;(this.email = email), (this.password = password)
  }
}

async function submit(credentials: Credentials) {
  loading.value = true

  message.value = ''
  const authStore = useAuthStore()

  const result = await authStore.login(credentials).catch((error) => (message.value = error))
  console.log(result)
  loading.value = false
  try {
    if (result?.status != 200 || result?.data.error.message) {
      message.value = result?.data.error.message
    }
  } catch {
    message.value = result.message
  }
}
</script>
