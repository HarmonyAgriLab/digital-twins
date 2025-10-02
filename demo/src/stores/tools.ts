/*
 * @Author: your name
 * @Date: 2022-03-30 10:19:03
 * @LastEditTime: 2022-04-07 19:48:14
 * @LastEditors: Please set LastEditors
 * @Description: 工具状态管理模块，用于管理应用中的各种UI组件显示状态和相关数据
 * @FilePath: \DTSWEEKLY_ZHGK\src\stores\tools.ts
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToolsStore = defineStore('Tools', () => {
    // 使用 ref 定义状态
    
    /** LayerTree组件显示状态 */
    const LayerTreeShow = ref(false)
    /** 信息树数据 */
    const infotree = ref<any>(null)
    /** 动画组件显示状态 */
    const AnimationShow = ref(false)
    /** 天空盒组件显示状态 */
    const SkyBoxShow = ref(false)
    /** 天气组件显示状态 */
    const WeatherShow = ref(false)
    /** 建筑物显示状态 */
    const BuildShow = ref(false)
    /** 建筑物信息数据 */
    const Buildinfo = ref<any>(null)
    /** UI组件显示状态 */
    const UIShow = ref(false)

    /**
     * @description: 设置图层树显示状态
     * @param {any} payload - 图层树显示状态值
     * @return {void}
     */ 
    function SetLayerTreeShow(payload: any) {
        LayerTreeShow.value = payload
    }
    
    /**
     * @description: 设置信息树数据
     * @param {any} payload - 信息树数据
     * @return {void}
     */ 
    function Setinfotree(payload: any) {
        infotree.value = payload
    }
    
    /**
     * @description: 设置动画组件显示状态
     * @param {any} payload - 动画组件显示状态值
     * @return {void}
     */ 
    function SetAnimationShow(payload: any) {
        AnimationShow.value = payload
    }
    
    /**
     * @description: 设置天空盒组件显示状态
     * @param {any} payload - 天空盒组件显示状态值
     * @return {void}
     */ 
    function SetSkyBoxShow(payload: any) {
        SkyBoxShow.value = payload
    }
    
    /**
     * @description: 设置天气组件显示状态
     * @param {any} payload - 天气组件显示状态值
     * @return {void}
     */ 
    function SetWeatherShow(payload: any) {
        WeatherShow.value = payload
    }
    
    /**
     * @description: 设置建筑物显示状态
     * @param {any} payload - 建筑物显示状态值
     * @return {void}
     */ 
    function SetBuildShow(payload: any) {
        BuildShow.value = payload
    }
    
    /**
     * @description: 设置建筑物信息数据
     * @param {any} payload - 建筑物信息数据
     * @return {void}
     */ 
    function SetBuildinfo(payload: any) {
        Buildinfo.value = payload
    }
    
    /**
     * @description: 设置UI组件显示状态
     * @param {any} payload - UI组件显示状态值
     * @return {void}
     */ 
    function SetUIShow(payload: any) {
        UIShow.value = payload
    }

    // 返回所有需要暴露的状态和函数
    return {
        LayerTreeShow,
        infotree,
        AnimationShow,
        SkyBoxShow,
        WeatherShow,
        BuildShow,
        Buildinfo,
        UIShow,
        SetLayerTreeShow,
        Setinfotree,
        SetAnimationShow,
        SetSkyBoxShow,
        SetWeatherShow,
        SetBuildShow,
        SetBuildinfo,
        SetUIShow
    }
})