import { defineStore } from 'pinia';

// 定义工具状态管理仓库
export const useToolsStore = defineStore(
    'Tools', // 第一个参数：id
    {
        state: () => ({
            LayerTreeShow: false, // 图层树展示
            infotree: null, // 信息树
            AnimationShow: false, // 导览列表展示
            SkyBoxShow: false, // 天空盒展示
            WeatherShow: false, // 气象展示
            BuildShow: false, // 建筑拆解展示
            Buildinfo: null, // 拆楼信息保存
            TooBarShow: false, // 工具栏展示
            currentMouseLeftClickPoint: [0, 0, 0], // 当前鼠标左键点击位置
            UIShow: false, // UI显隐
        }),
        actions: {
            /**
             * 展示工具栏
             * @param isShowToolBar
             */
            SetToolBarShow(isShowToolBar: boolean) {
                this.TooBarShow = isShowToolBar;
            },

            /**
             * 设置鼠标左键点击位置
             * @param currentMouseLeftClickPoint
             */
            SetMouseLeftClickPoint(currentMouseLeftClickPoint: number[]) {
                this.currentMouseLeftClickPoint = currentMouseLeftClickPoint;
            },

            /**
             * 设置图层树展示状态
             * @param payload
             */
            SetLayerTreeShow(payload: boolean) {
                this.LayerTreeShow = payload;
            },

            /**
             * 设置信息树
             * @param payload
             */
            Setinfotree(payload: any) {
                this.infotree = payload;
            },

            /**
             * 设置导览列表展示状态
             * @param payload
             */
            SetAnimationShow(payload: boolean) {
                this.AnimationShow = payload;
            },

            /**
             * 设置天空盒展示状态
             * @param payload
             */
            SetSkyBoxShow(payload: boolean) {
                this.SkyBoxShow = payload;
            },

            /**
             * 设置气象展示状态
             * @param payload
             */
            SetWeatherShow(payload: boolean) {
                this.WeatherShow = payload;
            },

            /**
             * 设置建筑拆解展示状态
             * @param payload
             */
            SetBuildShow(payload: boolean) {
                this.BuildShow = payload;
            },

            /**
             * 设置建筑拆解信息
             * @param payload
             */
            SetBuildinfo(payload: any) {
                this.Buildinfo = payload;
            },

            /**
             * 设置UI显隐状态
             * @param payload
             */
            SetUIShow(payload: boolean) {
                this.UIShow = payload;
            }
        }
    }
);