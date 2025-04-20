// /*
//  * @Author: Janio 2207597040@qq.com
//  * @Date: 2023-10-12 19:18:35
//  * @LastEditors: Janio 2207597040@qq.com
//  * @LastEditTime: 2023-10-12 19:22:57
//  * @FilePath: \20230515_CGSY_FREEDO_DTSWEEKLY_ZHGC\src\utils\animation.ts
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// let animationList: any = null

// /**
//  * 播放初始化导览
//  */
// let AnimationList: any = []
// export const playInitAnimation = async (type = AnimationType.Initialization) => {
//     const nameArr = ['管廊漫游1', '管廊漫游2', '综合舱', '导览12', '导览11', '导览20']
//     if (!AnimationList.length) {
//         const res: any = await __g.camera.getAnimationList()
//         AnimationList = res.data
//         const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
//         await __g.camera.playAnimation(obj[0].id)
//     } else {
//         const obj = AnimationList.filter((item: any) => item.name == nameArr[type])
//         await __g.camera.playAnimation(obj[0].id)
//     }
// }

// /**
//  * 导览名字枚举
//  */
// export enum AnimationType {
//     /**
//      * 城市孪生 初始化
//      */
//     Initialization = 4,
//     //精加工产线
//     Roam1 = 0,
//     Roam2 = 1,
//     CompositeTank = 2,
//     dl12 = 3,
//     dl11 = 4,
//     dl20 = 5
// }
