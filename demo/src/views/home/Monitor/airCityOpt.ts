export const defaultMakerOpt = {
  id: "", //maker唯一标识
  coordinate: [] as number[], //坐标位置
  coordinateType: 0, //坐标系类型
  imagePath: window.origin, //图片路径
  imageSize: [62, 73], //图片宽高[width,height]
  // popupBackgroundColor: [1.0, 1.0, 1.0, 0.1],//弹窗背景色
  range: [1, 8000.0], //标签的可见范围 [Min,Max]
  showLine: false, //标签下方是否显示垂直牵引线
  text: "监控", //标签显示的文字
  textSize: 10, // 文字大小
  textRange: [0, 100000], //文字的可见范围
  textColor: [1, 1, 1, 1], //文字颜色
  groupId: "cameraPoint",
  userData: "",
  displayMode: 2,
  textBackgroundColor: [0, 0, 0, 0],
  textOffset: [0, -20],
  fixedSize: true,
  autoHeight: false,
  occlusionCull: false,
  anchors: [-16, 32],
};
