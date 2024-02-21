export default [
	{
		path: "/",
		component: () => import("../../layout/BaseLayout.vue"),
		children: [
			{
				path: "",
				component: () => import("@/components/LandingPage.vue"),
			},
		],
	},
];
