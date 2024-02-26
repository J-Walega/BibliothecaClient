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
import { VueRecaptchaPlugin } from 'vue-recaptcha'

import App from './App.vue'
import router from './router/router'

import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://bibliothecamanagerapi.azurewebsites.net'
}
axios.defaults.headers.common[`Access-Control-Allow-Origin`] = `*`

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

createApp(App)
  .use(VueRecaptchaPlugin, { v3SiteKey: import.meta.env.RECAPTCHA_SITE_KEY })
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
