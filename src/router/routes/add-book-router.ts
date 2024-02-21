export default [
	{
		path: "/employee/books",
		component: () => import("@/views/admin-panel-view.vue"),
		childern: [
			{
				path: "",
				name: "Default",
				component: () => import("../../views/add-book-view.vue"),
			},
		],
	},
];
