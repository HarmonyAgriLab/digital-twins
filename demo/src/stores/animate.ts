/*
 * @Author: your name
 * @Date: 2022-02-23 01:34:35
 * @LastEditTime: 2022-02-23 01:38:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\stores\animate.ts
 */
// @ts-check
import { defineStore } from 'pinia'

export const useAnimateStore = defineStore(
    'Animate', // 第一个参数：store 的唯一标识
    {
        state: () => ({
            Animate: false, // 是否启用动画
            AnimationImgList: [] as string[], // 动画图片列表
            AnimationList: [] as string[] // 动画列表
        }),
        actions: {
            async SetAnimate(payload: boolean) {
                this.$patch({
                    Animate: payload
                });
            },
            async SetAnimationList(payload: string[]) {
                this.$patch({
                    AnimationList: payload
                });
            },
            async SetAnimationImgList(payload: string[]) {
                this.$patch({
                    AnimationImgList: payload
                });
            }
        }
    }
);