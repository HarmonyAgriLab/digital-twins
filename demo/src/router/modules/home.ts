import {RouteRecordRaw} from "vue-router";

export const HomeItem: Array<RouteRecordRaw> = [

	{
		name: "测试页面",
		path: "test",
		component: () => import("@/views/test/index.vue"),
	},
	{
		name: "种植实况",
		path: "OverAll",
		component: () => import("@/views/home/OverAll/index.vue"),
		children: [
		{
			name: "shinei",
			path: "shinei",
			component: () => import("@/views/home/OverAll/children/shinei.vue"),
		},
		// {
		// 	name: "shiwai",
		// 	path: "shiwai",
		// 	component: () => import("@/views/home/OverAll/children/shiwai.vue"),
		// },
		// {
		// 	name: "tuzhi",
		// 	path: "tuzhi",
		// 	component: () => import("@/views/home/OverAll/children/tuzhi.vue"),
		// },
		],
	},
	
];
