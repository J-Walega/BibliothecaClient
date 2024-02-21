export default [
	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/generic/404.vue"),
		name: "NotFound",
	},
];
