// @ts-check
import { defineStore } from "pinia";
import { ref } from 'vue';

export const useDataStore = defineStore('data', () => {
  
  /**
   * 当前动画索引状态
   */
  const curAnimationIndex = ref(0);
  /**
   * 设置当前动画索引
   * @param index 动画索引
   */
  const setCurAnimationIndex = async (index: any) => {
    curAnimationIndex.value = index;
  };
  
  return {
    curAnimationIndex,
    setCurAnimationIndex
  };
});