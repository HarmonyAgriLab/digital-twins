// `.d.ts`是一个ts类型声明文件，主要用于告诉TypeScript编译器如何处理特定类型的模块或文件

/* eslint-disable */
declare module "*.vue" {
	import type {DefineComponent} from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "*.json" {
	const value: any;
	export default value;
}

declare global {
	interface ImportMeta {
	  hot?: {
		accept: (callback: () => void) => void;
	  };
	}
}

