export default [
	{
		path: "/admin",
		component: () => import("@/layout/BaseLayout.vue"),
		children: [
			{
				path: "",
				name: "adminPanel",
				component: () => import("@/views/admin-panel-view.vue"),
			},
		],
	},
];
