
// @ts-check
import { defineStore } from "pinia";
import { ref } from "vue"; // 引入 Vue 的 ref 函数创建响应式变量

/**
 * 使用组合式 API 定义的航空城市状态库
 * 组合式 API 使用 Vue 的响应式 API (如 ref, computed) 来定义状态和方法[2](@ref)
 */
export const useAirCityStore = defineStore("aircity", () => {
  // ==================== State 定义 ====================
  /** 存储 AirCity 播放器实例 */
  const AirCityPlayer = ref<any>(null);
  /** 存储 AirCity API 实例 */
  const AirCityApi = ref<any>(null);
  /** 存储树形结构信息 */
  const TreeInfo = ref<any>(null);
  /** 标识 AirCity 是否已准备就绪 */
  const IsOnReady = ref<boolean>(false);

  // ==================== Actions 定义 ====================
  /**
   * 设置 AirCity 播放器实例
   * @param pyload - 播放器实例
   */
  function SetAirCityPlayer(pyload: any) {
    AirCityPlayer.value = pyload; // 直接更新 ref 的 value
  }

  /**
   * 设置 AirCity API 实例
   * @param pyload - API 实例
   */
  function SetAirCityApi(pyload: any) {
    AirCityApi.value = pyload;
  }

  /**
   * 设置树形信息
   * @param pyload - 树形信息数据
   */
  function SetTreeInfo(pyload: any) {
    TreeInfo.value = pyload;
  }

  /**
   * 设置准备状态
   * @param pyload - 布尔值，表示是否准备就绪
   */
  function SetIsOnReady(pyload: boolean) {
    IsOnReady.value = pyload;
  }

  // ==================== 返回状态和方法 ====================
  // 返回所有需要在组件中访问的状态和方法[1](@ref)
  return {
    AirCityPlayer,
    AirCityApi,
    TreeInfo,
    IsOnReady,
    SetAirCityPlayer,
    SetAirCityApi,
    SetTreeInfo,
    SetIsOnReady,
  };
});

// 热更新支持（可选）
// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useAirCityStore, import.meta.hot));
// }