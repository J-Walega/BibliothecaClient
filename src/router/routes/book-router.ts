export default [
	{
		path: "/book/:id",
		component: () => import("@/layout/BaseLayout.vue"),
		children: [
			{
				path: "",
				name: "book",
				component: () => import("@/views/book-view.vue"),
			},
		],
	},
];
