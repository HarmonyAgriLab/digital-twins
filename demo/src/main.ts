import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 新增图标库导入
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './stores'

// 引入全局样式
import "@/assets/scss/rest.scss";
import "@/assets/scss/global.scss";
import "@/assets/scss/normalize.scss";

// 导入全局组件
import Icon from "@/components/Icon/index.vue";
import LeaseTitle from '@/components/Lease_title/index.vue'
import SubTitle from '@/components/SubTitle/SubTitle.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import RightBox from '@/components/right_box.vue'
import floatButton from '@/components/floatButton/index.vue'


import drag from '@/utils/drag'



const app = createApp(App)
const pinia = createPinia()

// 全局注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.component("RightBox", RightBox) // 注册全局组件 RightBox
.component("V3Echarts", V3Echarts) // 注册全局组件 V3Echarts
.component("Icon", Icon)
.directive('drag', drag)
.use(ElementPlus)
.use(store)
.use(pinia)
.use(router)
.mount('#app')// 注册全局组件 LeaseTitle
  