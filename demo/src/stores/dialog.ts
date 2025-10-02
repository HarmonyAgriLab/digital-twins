/*
简称为：用不上的东西。
 */
// @ts-check
import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * 对话框状态管理 Store (组合式 API)
 * 使用 Vue 3 的组合式 API 风格定义 Pinia Store
 */
export const useDialogStore = defineStore("Dialog", () => {
  // ==================== State 定义 ====================
  /** 对话框是否可见 */
  const dialogVisible = ref(true);
  /** XY 坐标数组 */
  const XY = ref([0, 0]);
  /** 楼宇信息对象 */
  const LouInfo = ref<any>({});
  /** 对话框标题 */
  const title = ref("详细信息");
  /** 位置信息 */
  const Position = ref(0);
  /** 内容数组 */
  const content = ref<any[]>([]);
  /** 最后触发的事件对象 */
  const lastEvent = ref<PointerEvent>({} as PointerEvent);
  /** 标签标识 */
  const tag = ref("");
  /** 初始化 ID */
  const initId = ref("");

  // ==================== Actions 定义 ====================
  /**
   * 设置对话框可见性
   * @param visible - 是否可见
   */
  function setDialogVisible(visible: boolean) {
    dialogVisible.value = visible;
    // 隐藏时清空相关数据
    if (!visible) {
      content.value = [];
      tag.value = "";
    }
  }

  /**
   * 设置 XY 坐标
   * @param coords - 坐标数组
   */
  function setXY(coords: Array<any>) {
    XY.value = coords;
  }

  /**
   * 设置位置信息
   * @param position - 位置数值
   */
  function setPosition(position: number) {
    console.log("Position", position);
    Position.value = position;
  }

  /**
   * 设置最后触发的事件
   * @param event - 事件对象
   */
  function setLastEvent(event: any) {
    lastEvent.value = event;
  }

  /**
   * 设置对话框信息
   * @param info - 楼宇信息对象
   */
  function setDialogInfo(info: any) {
    LouInfo.value = info;
  }

  /**
   * 设置对话框标题
   * @param newTitle - 标题文本
   */
  function setTitle(newTitle: string) {
    title.value = newTitle;
  }

  /**
   * 设置内容数组
   * @param newContent - 内容数组
   */
  function setContent(newContent: Array<any>) {
    // console.log(newContent, "setContent");
    content.value = newContent;
  }

  /**
   * 设置标签标识
   * @param newTag - 标签文本
   */
  function setTag(newTag: string) {
    tag.value = newTag;
  }

  /**
   * 设置初始化 ID
   * @param id - ID 值
   */
  function setInitId(id: any) {
    initId.value = id;
  }

  // ==================== 返回状态和方法 ====================
  return {
    // 状态
    dialogVisible,
    XY,
    LouInfo,
    title,
    Position,
    content,
    lastEvent,
    tag,
    initId,
    // 方法
    setDialogVisible,
    setXY,
    setPosition,
    setLastEvent,
    setDialogInfo,
    setTitle,
    setContent,
    setTag,
    setInitId,
  };
});

/**
 * 交通信息对话框状态管理 Store (组合式 API)
 */
export const trafficDialogStore = defineStore("trafficDialogStore", () => {
  // ==================== State 定义 ====================
  /** 是否显示交通信息对话框 */
  const showTrafficInfo = ref(false);
  /** 交通参与者 ID */
  const traffiActorId = ref("");
  /** 交通参与者对象 ID */
  const traffiActorObjectId = ref("");
  /** 交通路线数据 */
  const trafficPolyLine = ref<any>([]);
  /** 交通路线数组 */
  const trafficPolyLineArr = ref<any>([]);
  /** 选择的交通类型 */
  const trafficTypeSeleced = ref("");

  // ==================== Actions 定义 ====================
  /**
   * 设置对话框可见性
   * @param visible - 是否可见
   */
  function setDialogVisible(visible: boolean) {
    showTrafficInfo.value = visible;
  }

  /**
   * 设置交通参与者 ID
   * @param id - 参与者 ID
   */
  function setTraffiActorId(id: string) {
    traffiActorId.value = id;
  }

  /**
   * 设置交通参与者对象 ID
   * @param objectId - 参与者对象 ID
   */
  function setTraffiActorObjectId(objectId: string) {
    traffiActorObjectId.value = objectId;
  }

  /**
   * 设置交通路线数据
   * @param polyLine - 路线数据
   */
  function setTrafficPolyLine(polyLine: any) {
    trafficPolyLine.value = polyLine;
  }

  /**
   * 设置交通路线数组
   * @param polyLineArr - 路线数组
   */
  function setTrafficPolyLineArr(polyLineArr: any) {
    trafficPolyLineArr.value = polyLineArr;
  }

  /**
   * 设置交通类型
   * @param type - 交通类型
   */
  function setType(type: string) {
    trafficTypeSeleced.value = type;
  }

  // ==================== 返回状态和方法 ====================
  return {
    // 状态
    showTrafficInfo,
    traffiActorId,
    traffiActorObjectId,
    trafficPolyLine,
    trafficPolyLineArr,
    trafficTypeSeleced,
    // 方法
    setDialogVisible,
    setTraffiActorId,
    setTraffiActorObjectId,
    setTrafficPolyLine,
    setTrafficPolyLineArr,
    setType,
  };
});

/**
 * 疾病预测对话框状态管理 Store (组合式 API)
 * 这是一个简单的对话框状态管理
 */
export const showIllPreDialogStore = defineStore("IllPreDialogStore", () => {
  // ==================== State 定义 ====================
  /** 是否显示疾病预测对话框 */
  const showIllPreDialog = ref(false);

  // ==================== Actions 定义 ====================
  /**
   * 设置对话框可见性
   * @param visible - 是否可见
   */
  function setDialogVisible(visible: boolean) {
    showIllPreDialog.value = visible;
  }

  // ==================== 返回状态和方法 ====================
  return {
    // 状态
    showIllPreDialog,
    // 方法
    setDialogVisible,
  };
});