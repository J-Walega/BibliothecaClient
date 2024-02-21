<template>
	<v-app-bar color="primary">
		<v-app-bar-title class="mx-auto">
			<a @click="router.push('/')">
				<v-img src="../assets/logo_edited.png" width="130" />
			</a>
		</v-app-bar-title>
		<v-btn class="bg-red-lighten-5 me-6" @click="goToHome()">
			Strona główna
		</v-btn>
		<v-btn prepend-icon="mdi-magnify" class="bg-red-lighten-5 me-6"
			>Szukaj

			<v-dialog v-model="searchDialog" activator="parent" width="500px">
				<v-card>
					<v-card-text align-center> Wyszukiwarka </v-card-text>
					<v-text-field v-model="searchText"></v-text-field>
					<v-card-actions>
						<v-btn color="primary" block @click="searchQuery(searchText)"
							>Wyszukaj</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-btn>
		<div class="d-flex justify-space-around">
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn
						class="me-6"
						color="gray"
						icon="mdi-account-circle"
						v-bind="props"
					></v-btn>
				</template>
				<v-list>
					<v-list-item v-if="!authStore.user">
						<v-btn @click="router.push('/login')"> Zaloguj się </v-btn>
					</v-list-item>
					<v-list-item v-if="authStore.user">
						<v-btn @click="goToProfile()">Mój profil</v-btn>
					</v-list-item>
					<v-list-item v-if="authStore.user?.user.roles.includes('Employee')">
						<v-btn @click="goToEmployeePanel()">Panel pracownika</v-btn>
					</v-list-item>
					<v-list-item
						v-if="authStore.user?.user.roles.includes('Administrator')"
					>
						<v-btn @click="goToAdminPanel()"> Panel administratora </v-btn>
					</v-list-item>
					<v-list-item v-if="authStore.user">
						<v-btn block @click="logout()"> Wyloguj się </v-btn>
					</v-list-item>
				</v-list>
			</v-menu>
		</div>
	</v-app-bar>

	<v-snackbar :timeout="2000" v-model="snackbar" color="success">
		Wylogowano pomyślnie
	</v-snackbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";

const searchText = ref("");
const router = useRouter();
const searchDialog = ref(false);

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);
const userID = authStore.user?.user.id;
const snackbar = ref(false);

function searchQuery(query: string) {
	searchDialog.value = false;
	router.push({
		path: "/search",
		query: {
			q: query,
		},
	});
}

function goToHome() {
	router.push("/");
}

function goToEmployeePanel() {
	router.push("/employee");
}

function goToAdminPanel() {
	router.push("/admin");
}

function goToProfile() {
	router.push("/profile/" + userID);
}

function logout() {
	authStore.logout();
	snackbar.value = true;
}
</script>
