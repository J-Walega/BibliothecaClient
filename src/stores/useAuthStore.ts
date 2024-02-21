import { authorizeUser } from "@/requests/apiCalls";
import router from "@/router/router";
import { defineStore } from "pinia";

interface Credentials {
	email: string;
	password: string;
}

class Credentials implements Credentials {
	email: string;
	password: string;

	constructor(email: string, password: string) {
		(this.email = email), (this.password = password);
	}
}

export const useAuthStore = defineStore({
	id: "auth",
	state: () => ({
		// initialize state from local storage to enable user to stay logged in
		user: JSON.parse(localStorage.getItem("user") || "null"),
		returnUrl: null || "",
	}),
	actions: {
		async login(credentials: Credentials) {
			return await authorizeUser(credentials.email, credentials.password)
				.then((response) => {
					if (response?.data?.succeeded == true) {
						this.user = response.data.data;
						localStorage.setItem("user", JSON.stringify(this.user));
						router.push(this.returnUrl || "/");
					} else {
						return response;
					}
				})
				.catch((error) => {
					console.log(error);
					return error;
				});
		},
		logout() {
			this.user.roles = null;
			this.user = null;
			localStorage.removeItem("user");
			router.push("/");
		},
	},
});
