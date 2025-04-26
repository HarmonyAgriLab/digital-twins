import _ from "lodash";
export const buildMakerOpt = {
  id: "", //maker唯一标识
  coordinate: [] as number[], //坐标位置
  coordinateType: 0, //坐标系类型
  imagePath: window.origin, //图片路径
  imageSize: [42, 73], //图片宽高[width,height]
  // popupBackgroundColor: [1.0, 1.0, 1.0, 0.1],//弹窗背景色
  range: [1, 8000.0], //标签的可见范围 [Min,Max]
  showLine: false, //标签下方是否显示垂直牵引线
  text: "", //标签显示的文字
  textSize: 13, // 文字大小
  textRange: 10000, //文字的可见范围
  textColor: "#ffffff", //文字颜色
  groupId: "business",
  userData: "",
  displayMode: 2,
  textBackgroundColor: [0, 0, 0, 0],
  textOffset: [-60, 8],
};
export const buildMakerlogo = {
  id: "",
  coordinate: [] as number[], //坐标位置
  coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
  anchors: [-25, 350], //锚点
  range: [0, 20000000], //可视范围
  imagePath: window.origin, //图片路径
  // hoverImagePath: item.id=="logo-06"?`${window.origin}/img/poi_bigsec_yellow@2x.png`:`${window.origin}/img/poi_bigsec_white@2x.png`,// 鼠标悬停时显示的图片路径
  imageSize: [50, 350], //图片的尺寸
  text: "发电站".split("").join("\n"),
  fixedSize: true, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
  textRange: [0, 20000000], //文本可视范围[近裁距离, 远裁距离]
  textOffset: [-47, 50], // 文本偏移
  textBackgroundColor: [0, 0, 0, 0], //文本背景颜色
  groupId: "logo",
  fontSize: 12, //字体大小
  fontColor: [1, 1, 1, 1], //字体颜色
  autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
  autoHeight: false, // 自动判断下方是否有物体
  displayMode: 2, //显示模式
  priority: 0, //避让优先级
  occlusionCull: false, //是否参与遮挡剔除
  useTextAnimation: false, //打开文字展开动画效果
  fontOutlineSize: 1, //字体轮廓线大小
  fontOutlineColor: [0, 0, 0, 0.5],
};
export const buildMakerlogoright = {
  id: "",
  coordinate: [] as number[], //坐标位置
  coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
  anchors: [25, 350], //锚点
  range: [0, 200000], //可视范围
  imagePath: "", // 鼠标悬停时显示的图片路径
  imageSize: [50, 350], //图片的尺寸
  text: "500KV变电站".split("").join("\n"),
  fixedSize: false, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
  textRange: [0, 200000], //文本可视范围[近裁距离, 远裁距离]
  textOffset: [60, -100], // 文本偏移
  textBackgroundColor: [0, 0, 0, 0], //文本背景颜色
  groupId: "logos",
  fontSize: 10, //字体大小
  fontColor: [1, 1, 1, 1], //字体颜色
  autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
  autoHeight: false, // 自动判断下方是否有物体
  displayMode: 2, //显示模式
  priority: 0, //避让优先级
  occlusionCull: false, //是否参与遮挡剔除
  useTextAnimation: false, //打开文字展开动画效果
  fontOutlineSize: 1, //字体轮廓线大小
  fontOutlineColor: [0, 0, 0, 0.5],
};
export const buildPoint = {
  风力: [
    [147.026016, 100.457809, 159.311874],
    [692.807922, 625.861877, 159.311874],
    [-605.851379, 150.688126, 159.313431],
    [54.926407, -153.475006, 159.312805],
    [615.313416, -56.368126, 159.311874],
  ],
  水力: [
    [619.925964, 282.767822, 159.3125],
    [-115.80262, -90.968285, 159.3125],
    [-122.41301, -361.399689, 159.313126],
    [11.604062, -642.918884, 159.313126],
    [421.853149, -672.814941, 159.311569],
    [662.831421, -251.446411, 159.312805],
    [409.9764099121094, -352.1937561035156, 159.3125],
  ],
  火力: [
    [373.026428, -7.717187, 159.3125],
    [526.900391, 150.24437, 159.3125],
    [314.769989, -753.135071, 159.311874],
    [537.560852, -66.408592, 159.3125],
    [-672.805786, 321.485474, 159.313431],
    [633.059875, -166.393906, 159.312195],
  ],
  太阳能: [
    [-738.523132, 146.506088, 159.313431],
    [-408.457642, 238.152191, 159.313431],
    [-30.079922, 157.437195, 159.312195],
    [491.484955, 265.78656, 159.3125],
    [864.132874, 462.538452, 159.312805],
    [-402.37561, -329.320465, 159.311569],
    [-92.407852, -662.872986, 159.312195],
  ],
  核能: [
    [622.494751, -56.109375, 159.312805],
    [710.174866, -411.356628, 159.320313],
    [615.303833, -578.420288, 159.311569],
    [762.567688, 179.865631, 159.312195],
  ],
};

export const Logo = [
  {
    id: "logo-06",
    cord: [27086.0546875, -7020.48388671875, 3.143749952316284],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_yellow@2x.png`,
  },
  {
    id: "logo-01",
    cord: [-54301.101563, 242161.546875, -1621.920044],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-02",
    cord: [244265.015625, 198960.4375, -1436.640015],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-03",
    cord: [208837.296875, 83249.570313, -1410.23999],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-04",
    cord: [-221168.625, 112730.351563, -1635.040039],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-05",
    cord: [-170625.984375, -60685.691406, -1807.839966],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },

  {
    id: "logo-07",
    cord: [-390944.125, -74118.492188, -1791.359985],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-08",
    cord: [-417633.78125, -237097.625, -1708.640015],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },
  {
    id: "logo-09",
    cord: [-210719.703125, 247047.46875, -859.52002],
    text: "发电站".split("").join("\n"),
    imagePath: `${window.origin}/img/poi_bigsec_white@2x.png`,
  },

  {
    id: "Pogo-06",
    cord: [27086.0546875, -7020.48388671875, 3.143749952316284],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-01",
    cord: [-54301.101563, 242161.546875, -1621.920044],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-02",
    cord: [244265.015625, 198960.4375, -1436.640015],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-03",
    cord: [208837.296875, 83249.570313, -1410.23999],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-04",
    cord: [-221168.625, 112730.351563, -1635.040039],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-05",
    cord: [-170625.984375, -60685.691406, -1807.839966],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-07",
    cord: [-390944.125, -74118.492188, -1791.359985],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-08",
    cord: [-417633.78125, -237097.625, -1708.640015],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
  {
    id: "Pogo-09",
    cord: [-210719.703125, 247047.46875, -859.52002],
    text: (_.random(0, 500) + "KV变电站").split("").join("\n"),
  },
];

export const buildPolygon3d = {
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

export const buildPolygon3dPoint = [
  [
    [-572.249329, 1702.400024, -2],
    [-572.881714, 1614.115479, -2],
    [-436.849518, 1616.422974, -2],
    [-436.900757, 1704.199097, -2],
  ],
  [
    [-572.448608, 1607.252808, -2],
    [-571.977661, 1520.791504, -2],
    [-431.927979, 1516.062378, -2],
    [-438.608276, 1607.087158, -2],
  ],
  [
    [-571.952148, 1510.922852, -2],
    [-573.893433, 1457.891113, -2],
    [-438.624023, 1454.555786, -2],
    [-431.790009, 1507.959351, -2],
  ],
];
