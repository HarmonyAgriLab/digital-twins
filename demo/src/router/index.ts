
// // 导入 Vue Router 相关函数和接口
import {
  createRouter, // 创建路由实例的函数
  createWebHashHistory, // 创建基于 hash 的路由历史模式
  createWebHistory, // 创建基于 history 的路由历史模式（未在代码中使用）
  RouteRecordRaw, // 路由记录的原始类型
} from "vue-router";


import Vue from 'vue'
// import VueRouter, { RouteConfig } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { HomeItem } from "./modules/home";



const routes:  Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/home/index.vue"),
    children: HomeItem, 
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/404/index.vue"),
  }
]


/* -------------------------- 创建路由实例 --------------------------- */
const router = createRouter({
  // 使用基于 hash 的路由历史模式，base URL 从环境变量中获取
  history: createWebHashHistory(process.env.BASE_URL),
  routes, // 路由规则数组
});

// 使用路由拦截进行动画切换
let timer: any = null; // 定时器变量，用于控制动画切换的延迟
let timermon: any = null; // 另一个定时器变量，用于控制动画开启的延迟

// 路由拦截：在路由跳转前执行：to: 目标路由，from: 当前路由，next: 路由跳转的下一个函数
// beforeEach 这是一个内置的方法，参数为一个函数
router.beforeEach((to: any, from, next) => {


  // 获取动画状态管理工具的实例
  // const animatestore = useAnimateStore && useAnimateStore();
  // 如果实例存在，设置动画状态为 false，即关闭动画
  // animatestore && animatestore.SetAnimate(false);
  // 清除之前的定时器
  timer && clearTimeout(timer);
  timermon && clearTimeout(timermon);

  // 设置一个 200ms 的延迟后执行路由跳转
  timer = setTimeout(() => {
      next();
      // 路由跳转后再设置一个 500ms 的延迟后开启动画
      timermon = setTimeout(() => {
          // animatestore && animatestore.SetAnimate(true);
      }, 500);
  }, 200);
});


// 导出路由实例
export default router;
