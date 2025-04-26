export const businessMakerOpt = {
  id: "", //maker唯一标识
  coordinate: [] as number[], //坐标位置
  coordinateType: 0, //坐标系类型
  imagePath: window.origin, //图片路径
  imageSize: [62, 62],
  // popupBackgroundColor: [1.0, 1.0, 1.0, 0.1],//弹窗背景色
  range: [0, 8000000], //标签的可见范围 [Min,Max]
  showLine: false, //标签下方是否显示垂直牵引线
  text: "", //标签显示的文字
  textSize: 13, // 文字大小
  textRange: 8000000, //文字的可见范围
  textColor: "#ffffff", //文字颜色
  useTextAnimation: false,
  groupId: "business",
  userData: "",
  displayMode: 2,
  textBackgroundColor: [0, 0, 0, 0],
  textOffset: [-60, 8],
};

export const businessPoint = [
  {
    name: "创业创新中心",
    cord: [-311.9168701171875, 1610.8331298828125, 26.899999618530273],
    imagePath: window.origin + "/img/poi_ggfw1@2x.png", //图片路径
  },
  {
    name: "人才公寓",
    cord: [-229.9517364501953, 1607.57861328125, 26.899999618530273],
    imagePath: window.origin + "/img/poi_ggfw1@2x.png", //图片路径
  },
  {
    name: "路演广场",
    cord: [-162.1800079345703, 1606.6368408203125, 26.899999618530273],
    imagePath: window.origin + "/img/poi_ggfw1@2x.png", //图片路径
  },
];

export const businessPolygon3d = {
  id: "",
  coordinates: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  color: [0, 0, 0, 0], //颜色值
  height: 25, //3D多边形的高度
  intensity: 4.0, //亮度
  style: 1,
  tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
  tillingY: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
};

export const businessPolygon3dPoint = [
  [
    [-275.891387, 1674.433227, -2],
    [-350.655182, 1672.465942, -2],
    [-346.838593, 1547.789063, -2],
    [-279.538605, 1547.539673, -2],
  ],
  [
    [-269.68634, 1672.223877, -2],
    [-268.583313, 1547.954712, -2],
    [-135.437302, 1551.479248, -2],
    [-135.743652, 1675.621216, -2],
  ],
];
