import _ from "lodash";
import odlinedata from "./odline.json";

interface dataline {
	"coordinates": number[],
	"type": boolean,
	"data": number[][]
}

const odline = {
	id: '',//ODLine唯一标识
	color: [0, 0.2, 1, 1],//填充颜色
	coordinates: [] as number[][],//构成ODLine的坐标点数组
	flowRate: 1,//流速
	intensity: 11,//亮度
	bendDegree: 0.5,//弯曲度
	tiling: 0.5,//材质贴图平铺比例
	lineThickness: 600,//折线宽度
	flowPointSizeScale: 1600,//运动点的缩放值
	labelSizeScale: 400,//两端点的缩放值

	lineShape: 1,  //ODLine模型样式 0:平面 1:柱体，默认值1
	lineStyle: 0,  //ODLine材质样式 0:纯色 1:箭头，2:流动点，默认值0
	flowShape: 1,  //ODLine发光点样式 0:无 1:球体，默认值0

	startPointShape: 1,//点的样式
	endPointShape: 1,//点的样式
	startLabelShape: 1,//点的样式
	endLabelShape: 1//点的样式
};
const markers = {
	id: 'm1',
	coordinate: [495269.37, 2491073.25, 25.4],//坐标位置
	coordinateType: 0,//默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
	range: [1, 1000000],//可视范围
	text: '北京银行',//显示的文字
	useTextAnimation: true,//打开文字展开动画效果
	textRange: [1, 1000000],//文本可视范围[近裁距离, 远裁距离]
	textOffset: [-85, 0],// 文本偏移
	textBackgroundColor: [0, 0, 0, 0],//文本背景颜色
	fontSize: 16,//字体大小
	fontColor: Color.White,//字体颜色
	groupId: "odlinnmarker",
	autoHeight: true,// 自动判断下方是否有物体
	displayMode: 2,//显示模式：相机移动时显示，参与避让聚合
	clusterByImage: true,// 聚合时是否根据图片路径分类，即当多个marker的imagePath路径参数相同时按路径对marker分类聚合
	priority: 1,//避让优先级
	occlusionCull: false,//是否参与遮挡剔除,
	userData: '',
	imagePath: '',
	imageSize: [239 / 2, 100 / 2],
	anchors: [-239 / 4, 100 / 2]
};
export const addOdlinefn = async (index: number) => {
	__g.odline.clear();//清空odline
	__g.marker.clear();//清空marker
	const data: dataline = odlinedata.data[index];
	const markersData: any = [{
		...markers,
		id: 'm',
		text: '深圳大学',
		coordinate: [data.coordinates[0], data.coordinates[1], data.coordinates[2] - 150],
		userData: JSON.stringify({"coordinates": data.coordinates, "name": "深圳大学", "length": ""}),
		imagePath: window.origin + require('@/assets/images/dialog/建筑物名称标签.png'),
		imageSize: [239 / 2, 100 / 2],
		anchors: [-239 / 4, 100 / 2],
		textOffset: [-105, -12],// 文本偏移
		fontSize: 16,//字体大小
	}]
	const odlineData = data.data.map((item: any, index: number) => {
		const newodline = _.cloneDeep(odline);
		const newmarker = _.cloneDeep(markers);
		newodline.id = 'od' + index;
		const datacoor = [data.coordinates[0], data.coordinates[1], data.coordinates[2] + 10]
		const itemcoor = [item.coordinates[0], item.coordinates[1], item.coordinates[2] + 10]
		newodline.coordinates = data.type ? [datacoor, itemcoor] : [datacoor, itemcoor].reverse();//构成ODLine的坐标点数组  data.type 是用于校验是中心坐标点是否是输入输出
		newodline.flowPointSizeScale = data.type ? 14 : 14;
		newodline.lineThickness = data.type ? 2 : 2;
		newmarker.id = 'm' + index;
		newmarker.coordinate = [item.coordinates[0], item.coordinates[1], 30];
		newmarker.text = item.name + '\n' + item.length + '';
		newmarker.userData = JSON.stringify(item);
		newmarker.imagePath = window.origin + require('@/assets/images/dialog/建筑物名称标签.png')

		markersData.push(newmarker)
		return newodline;
	})
	console.log("markersData", markersData);

	await __g.odline.add(odlineData);
	await __g.marker.add(markersData);
}
export const markerfn = async () => {
	await __g.marker.clear();
	const marker = {
		id: '地球',
		groupID: '地球',
		coordinate: [87115.578125, 46191.019531, 39673.914063],//坐标位置
		coordinateType: 0,//默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
		anchors: [-35, 30],//锚点
		range: [0, 10000000],//可视范围
		imagePath: window.origin + require("@/assets/images/marker/map_poi_block@2x.png"),//显示图片路径
		// hoverImagePath: HostConfig.Path + '/samples/images/hilightarea.png',// 鼠标悬停时显示的图片路径
		imageSize: [70, 30],//图片的尺寸
		fixedSize: true,//图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
		text: "深圳大学",//显示的文字
		useTextAnimation: true,//打开文字展开动画效果
		textRange: [0, 1000000],//文本可视范围[近裁距离, 远裁距离]
		textOffset: [-65, -5],// 文本偏移
		textBackgroundColor: [1, 1, 1, 0],//文本背景颜色
		fontSize: 10,//字体大小
		fontOutlineSize: 0,//字体轮廓线大小
		fontColor: Color.White,//字体颜色
		fontOutlineColor: Color.White,//字体轮廓线颜色
		autoHeight: false,// 自动判断下方是否有物体
		displayMode: 2,//显示模式：相机移动时显示，参与避让聚合
		clusterByImage: true,// 聚合时是否根据图片路径分类，即当多个marker的imagePath路径参数相同时按路径对marker分类聚合
		priority: 0,//避让优先级
		occlusionCull: false,//是否参与遮挡剔除
		groupId: "buildMarker",
		// userData: JSON.stringify(item)//弹窗
		// userData: JSON.stringify({ name: [[1], [2], [3]], age: [18, 2, 3] })
	}
	await __g.marker.add(marker);
}