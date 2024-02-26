<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="profile">Profil</v-tab>
      <v-tab value="borrows">Wypożyczenia</v-tab>
      <v-tab value="historyOfBorrows">Historia wypożyczeń</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="profile">
          <div class="text-h5">Twój profil</div>
          <Suspense>
            <ProfileInfo></ProfileInfo>
          </Suspense>
        </v-window-item>
        <v-window-item value="borrows">
          <div class="text-h5">Wypożyczenia</div>
          <Suspense>
            <MyBorrowsView></MyBorrowsView>
          </Suspense>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineAsyncComponent } from 'vue'

const ProfileInfo = defineAsyncComponent(() => import('./profile-information-view.vue'))
const MyBorrowsView = defineAsyncComponent(() => import('./my-borrows-view.vue'))

const tab = ref(null)
</script>
