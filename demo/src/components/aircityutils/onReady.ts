// 导入 pinia 状态管理仓库
import {useToolsStore} from "@/stores/tools";
import {useAirCityStore} from "@/stores/aircity";

// 导入图层树结构转换工具函数
import {toTree} from "../tools/layerTree";

// 导入Vue的nextTick函数用于在下次DOM更新后执行回调
import {nextTick} from "vue";
import { fa } from "element-plus/es/locale";

// 定义全局变量ele用于存储DOM元素引用
let ele: any;
// 定义全局变量lastEvent用于存储最后一次指针事件:不知道作用是什么，所以直接删掉了❗
let lastEvent: PointerEvent;
const ToolsStore = useToolsStore();

/**
 * 修改信息树函数，用于更新图层的可见性状态
 * @param AirCityStore - AirCity状态管理实例
 * @param ids - 需要修改的图层ID或ID数组
 * @param key - 需要修改的属性名
 * @param value - 需要设置的属性值
 */
function changeInfoTree(
		AirCityStore: any,
		ids: string | string[] | undefined,
		key: string,
		value: boolean
) {
	// 遍历信息树中的每个项目并根据ID匹配更新指定属性
	const result = (AirCityStore.$state.TreeInfo as any)?.map((item: any) => {
		// 判断传入的ids是否为数组
		if (Array.isArray(ids)) {
			// 如果是数组，检查当前项目ID是否在数组中
			if (ids.includes(item.iD)) {
				// 如果匹配，更新指定属性的值
				item[key] = value;
			}
		} else {
			// 如果不是数组，直接比较ID
			if (ids === item.iD) {
				// 如果匹配，更新指定属性的值
				// if (!value) debugger
				item[key] = value;
			}
		}
		// 返回处理后的项目
		return item;
	});
	// 打印处理结果到控制台
	console.log(result, "result");
	// 将处理后的结果转换为树形结构并更新到工具状态管理中
	ToolsStore.Setinfotree(toTree(result));
}

/**
 * OnReady函数，当AirCity初始化完成后执行
 * 主要用于初始化各种状态和重写部分原生方法
 */
const OnReady = async () => {
    // 等待通用配置下载完成（注释掉的代码）
	// await (window as any).Common_config.download()
	// 设置罗盘控件不可见
	__g.settings.setCampassVisible(false);
	// 设置主UI界面不可见
	__g.misc.setMainUIVisibility(false);

	// 获取AirCity状态管理实例
	const AirCityStore = useAirCityStore();
	// 获取工具状态管理实例
	const ToolsStore = useToolsStore();

	// 获取信息树数据
	const res: any = await __g.infoTree.get();

	// 将获取到的信息树数据存储到AirCity状态管理中
	AirCityStore.SetTreeInfo(res.infotree);
	// 将信息树数据转换为树形结构并存储到工具状态管理中
	ToolsStore.Setinfotree(toTree(res.infotree));

	// 设置AirCity已准备就绪状态为true
	AirCityStore.SetIsOnReady(true);
	// 保存原始的tileLayer.show方法引用
	const showTemp = __g.tileLayer.show;

	// 重写tileLayer.show方法，在显示图层时同时更新状态管理中的可见性信息
	__g.tileLayer.show = (ids?: string | string[], callback?: any): any => {
		// 设置要修改的属性名为"visiblity"
		const key = "visiblity";
		// 设置要修改的属性值为true（表示可见）
		const value = true;
		// 调用changeInfoTree函数更新信息树中的可见性状态
		changeInfoTree(AirCityStore, ids, key, value);
		// 调用原始的show方法
		(showTemp.call as any)(__g.tileLayer, ids, callback);
	};
	// 保存原始的tileLayer.hide方法引用
	const hideTemp = __g.tileLayer.hide;
	// 重写tileLayer.hide方法，在隐藏图层时同时更新状态管理中的可见性信息
	__g.tileLayer.hide = (ids?: string | string[], callback?: any): any => {
		// 设置要修改的属性名为"visiblity"
		const key = "visiblity";
		// 设置要修改的属性值为false（表示不可见）
		const value = false;
		// 调用changeInfoTree函数更新信息树中的可见性状态
		changeInfoTree(AirCityStore, ids, key, value);
		// 调用原始的hide方法
		(hideTemp.call as any)(__g.tileLayer, ids, callback);
	};
	// 获取页面中ID为"player"的video元素
	ele = document.querySelector("#player video");
	// 如果找到了该元素
	if (ele) {
		// 为该元素添加点击事件监听器
		ele.onclick = (e: PointerEvent) => {
			// 阻止事件冒泡
			// console.log(e);
			if (e && e.stopPropagation) {
				e.stopPropagation();
			}
		};
	}
};
// 导出OnReady函数
export default OnReady;