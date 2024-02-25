import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { md3 } from 'vuetify/blueprints'

import App from './App.vue'
import router from './router/router'

import axios from 'axios'

axios.defaults.headers.common[`Access-Control-Allow-Origin`] = `*`
axios.defaults.baseURL = 'https://bibliothecamanagerapi.azurewebsites.net'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  },
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
