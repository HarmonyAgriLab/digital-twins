export const kongTiao = [
	{
		text: "河道监测点A",
		cord: [489890.84375, 2490582.75, 13.008515357971191],
		state: 2
	}, {
		text: "河道监测点B",
		cord: [490802.96875, 2489511, 51.575157165527344],
		state: 1
	}, {
		text: "河道监测点C",
		cord: [490141.40625, 2488647, 132.62335205078125],
		state: 1
	}, {
		text: "河道监测点D",
		cord: [488353.15625, 2488860, 8.1806249618530273],
		state: 0
	}]
export const defaultMarker3DrOpt = {
	'id': '',
	'groupId': '',
	'text': '',//3D标注显示文字
	'textSize': 18,//3D标注显示文字大小
	'textColor': [1, 1, 1, 1],//3D标注显示文字颜色
	'textOutlineSize': 1,//3D标注显示文字轮廓大小
	'textOutlineColor': [0, 0, 0, 1],// 3D标注显示文字轮廓颜色
	'textFixed': false,// 3D标注显示文字是否固定文本朝向
	'textVisible': true,//3D标注显示文字是否显示文本
	'textLocation': [0, 0, 0],// 文字位置
	'textRotation': [0, 0, 0],// 文字旋转
	'textScale': [1, 1, 1],// 文字缩放
	'pointName': 'Point_B_1',//3D标注展示的特效名称
	'pointVisible': true,//3D标注是否显示
	'pointScale': 5,//3D标注整体缩放比例
	'coordinate': [0, 0, 0], //3D标注的坐标位置 注意：若坐标Z设置高度为0时 autoHeight=true则会显示在物体上方
	'coordinateType': 0, //坐标系类型
	'range': [1, 10000], //3D标注的可视距离范围：[min,max]，单位：米
	'autoHeight': false,//自动判断下方是否有物体，设置正确高度，默认值：false
	'userData': '',

}
export const defaultMakerOpt = {
	id: '',//maker唯一标识
	coordinate: [] as number[],//坐标位置
	coordinateType: 0, //坐标系类型
	imagePath: window.origin,//图片路径
	imageSize: [62, 73],//图片宽高[width,height]
	// popupBackgroundColor: [1.0, 1.0, 1.0, 0.1],//弹窗背景色
	range: [1, 8000.0],//标签的可见范围 [Min,Max]
	showLine: false,//标签下方是否显示垂直牵引线
	text: '监控',//标签显示的文字
	textSize: 10,// 文字大小
	textRange: [0, 30000],//文字的可见范围
	textColor: [1, 1, 1, 1],//文字颜色
	groupId: 'cameraPoint',
	userData: '',
	displayMode: 2,
	textBackgroundColor: [0, 0, 0, 0],
	textOffset: [-80, 8],
	autoHeight: false
};

export const parkingPoint = [[
	713.617431640625,
	893.0145874023438,
	-1.8305134773254395
], [
	718.9715576171875,
	892.6366577148438,
	-1.83051335811615
]]

export const carPoints = [[698.306458, 952.484436, -0.100012], [701.462708, 946.265015, -0.099998], [704.703674, 940.134033, -0.099998], [707.465149, 934.589539, -0.099995], [710.372742, 928.95697, -0.181794], [713.207275, 923.37915, -0.608076], [716.119751, 917.821167, -1.037202], [718.665466, 912.199524, -1.459766], [721.50116, 906.106323, -1.921855], [723.415527, 900.3349, -2.342886], [722.418762, 896.856262, -2.557148], [718.027954, 895.593262, -2.576748]]