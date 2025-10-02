// 修改:import {useAirCityStore} from "@/stores/aircity";
import {useAirCityStore} from "@/stores/aircity"; // 根据新项目修改
// 修改:import {useToolsStore} from "@/stores/tools";
import {useToolsStore} from "@/stores/tools"; // 根据新项目修改

// 存储图层ID的数组
const ids: string[] = []

// 递归遍历函数，用于比较和同步图层数据
const loop = (val: any[], infoTree: any[]) => {
	for (let i = 0; i < val.length; i++) {
		const ele: any = val[i];
		for (const key in ele) {
			if (Array.isArray(ele[key])) {
				// 如果属性值是数组，递归处理子元素
				loop(ele[key], infoTree[i][key]);
			} else {
				// 比较并同步属性值
				if (infoTree[i][key] === ele[key]) {
					// 属性值相同，无需处理
				} else {
					// 属性值不同，更新并检查可见性
					infoTree[i][key] = ele[key];
					if (!ele[key].visiblity) {
						ids.push(ele);
					}
				}
			}
		}
	}
}

// 获取工具状态管理实例
// 修改:const ToolsStore = useToolsStore();
const ToolsStore = useToolsStore(); // 根据新项目状态管理结构可能需要调整

/**
 * 将图层数据转换为树形结构
 * @param data 原始图层数据数组
 * @returns 转换后的树形结构数据
 */
export const toTree = (data: any) => {
	console.log(data, 'data');
	// 清空ID数组
	ids.length = 0
	
	// 格式化图层数据，提取需要的字段
	const fixedArr = data.map((item: any) => {
		return {
			label: item.name,           // 图层名称 根据新项目数据结构调整
			id: item.iD,                // 图层ID 根据新项目数据结构调整
			visiblity: item.visiblity,  // 可见性 根据新项目数据结构调整
			index: item.index,          // 索引 根据新项目数据结构调整
			parentIndex: item.parentIndex, // 父级索引 根据新项目数据结构调整
			color: item.color?.toLowerCase(), // 颜色值 根据新项目数据结构调整
			style: item.style ?? 0,     // 样式 根据新项目数据结构调整
			type: item.type,            // 类型 根据新项目数据结构调整
		};
	});
	
	// 创建索引映射表，用于快速查找图层
	const map: any = {};
	fixedArr.forEach(function (item: any) {
		map[item.index] = item;
	});
	
	// 构建树形结构
	const val: any[] = [];
	fixedArr.forEach(function (item: any) {
		const parent = map[item.parentIndex];
		if (parent) {
			// 如果存在父级，将当前项添加到父级的children数组中
			(parent.children || (parent.children = [])).push(item);
		} else {
			// 如果不存在父级，作为根节点添加
			val.push(item);
		}
	});
	
	// 启用状态同步逻辑以确保图层树结构完整
	if (!(ToolsStore.$state.infotree as any)?.length) return val;

	loop(val, (ToolsStore.$state.infotree as any));
	console.log(ids, 'ids');
	return val
};

/**
 * 控制信息树中图层的属性
 * @param id 图层ID
 * @param key 要设置的属性名
 * @param value 属性值
 */
export function controlInfoTree(id: any, key: any, value: any) {
	// 修改:const AirCityStore: any = useAirCityStore();
        const AirCityStore: any = useAirCityStore(); // 根据新项目状态管理结构调整
	// 修改:const ToolsStore: any = useToolsStore();
        const ToolsStore: any = useToolsStore(); // 根据新项目状态管理结构调整
	// cur 图层的id  key 要设置的属性  value 值
	// 操作显影
	if (key === "visiblity") {
		// 操作图层显示/隐藏
        value ? __g.infoTree.show(id) : __g.infoTree.hide(id); // 根据新项目API调整

		// 更新状态管理中的图层信息
		const result = AirCityStore.$state.TreeInfo.map((item: any) => {
			if (item.iD === id) {
				item[key] = value;
			}
			return item;
		});
		console.log(result);
			AirCityStore.SetTreeInfo(result); // 根据新项目状态管理方法名调整
	} else if (key === "style") {
		// 查找当前图层信息
		const cur = AirCityStore.TreeInfo.find((item: any) => {
			return item.iD === id;
		});
		// 合并样式对象，优先级从低到高：默认值 -> 当前值 -> 新值
		const styleObj = Object.assign(
				{style: 0, color: [1, 1, 1, 1]},
				{style: cur.style, color: cur.color},
				value
		);
		
		// // 操作样式
		// 修改:__g.tileLayer.setStyle(id, styleObj.style, styleObj.color);
                __g.tileLayer.setStyle(id, styleObj.style, styleObj.color); // 根据新项目API调整
		
		// 更新状态管理中的图层样式信息
		const result = AirCityStore.$state.TreeInfo.map((item: any) => {
			if (item.iD === id) {
				item.style = styleObj.style;
				item.color = styleObj.color;
			}
			return item;
		});
		console.log(result);
	}
	// 操作数据
}

/**
 * 图层树处理函数（未完成）
 * @param data 图层数据数组
 */
export const toTree2 = (data: any[]) => {
	for (let i = 0; i < data.length; i++) {
		// if()
	}
}