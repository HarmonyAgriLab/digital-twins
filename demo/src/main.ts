import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './stores'
import ElementPlus from 'element-plus';

// 导入自定义的样式文件
import "@/assets/scss/rest.scss";
import "@/assets/scss/global.scss";
import "@/assets/scss/normalize.scss";

const app = createApp(App)
const pinia = createPinia()

createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(pinia)
    .use(router)
    .mount('#app');
