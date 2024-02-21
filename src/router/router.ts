import { createWebHistory, createRouter } from "vue-router";
import defaultLayout from "./routes/defaultLayout";
import loginRouter from "./routes/login-router";
import notFoundRouter from "./routes/not-found-router";
import profileRouter from "./routes/profile-router";
import { useAuthStore } from "@/stores/useAuthStore";
import adminPanelRouter from "./routes/adminPanel-router";
import addBookRouter from "./routes/add-book-router";
import bookRouter from "./routes/book-router";
import searchResultRouter from "./routes/search-result-router";

const routes = [
	...defaultLayout,
	...loginRouter,
	...notFoundRouter,
	...profileRouter,
	...adminPanelRouter,
	...addBookRouter,
	...bookRouter,
	...searchResultRouter,
];

const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
});

router.beforeEach(async (to) => {
	const publicPages = ["/", "/login", "/search", "/book/:id"];
	const authRequired = !publicPages.includes(to.path);
	const auth = useAuthStore();

	if (authRequired && !auth.user) {
		auth.returnUrl = to.fullPath;
		return "/login";
	}

	if (["/login"].includes(to.path) && auth.user != null) {
		return "/";
	}
});

export default router;
