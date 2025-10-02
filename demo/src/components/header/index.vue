<!-- 
 * @Author: your name
 * @Date: 2022-02-22 18:36:34
 * @LastEditTime: 2022-04-07 17:42:57
 * @LastEditors: Please set LastEditors
 * @Description: 头部导航组件，包含标题、工具按钮和时间显示
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\header\index.vue
-->
<!-- 头部组件模板 -->
<template>
    <!-- 主容器 -->
    <div class="header">
        <!-- 标题部分，点击可重置场景 -->
        <div class="title" @click="reset">
            {{ title }}
        </div>

        <!-- 头部右侧工具区域 -->
        <div class="header-right">
            <!-- 工具图标组 -->
            <div class="tool">
                <!-- UI显隐控制按钮 -->
                <div @click="UIClick">
                    <el-tooltip class="box-item" effect="dark" content="UI显隐" placement="bottom">
                        <Icon :color="UIShow ? '#7afafe' : '#fff'" :font-size="30" icon="mianban" />
                    </el-tooltip>
                </div>

                <!-- 图层树显隐控制按钮 -->
                <div @click="LayerTreeClick">
                    <el-tooltip class="box-item" effect="dark" content="图层树" placement="bottom">
                        <Icon :color="LayerTreeshow ? '#7afafe' : '#fff'" :font-size="30" icon="tucengshu" />
                    </el-tooltip>
                </div>

                <!-- 气象显示控制按钮 -->
                <div @click="WeatherClick">
                    <el-tooltip class="box-item" effect="dark" content="气象" placement="bottom">
                        <Icon :color="WeatherShow ? '#7afafe' : '#fff'" :font-size="30" icon="qixiangjiance" />
                    </el-tooltip>
                </div>
            </div>

            <!-- 当前时间显示 -->
            <div class="time">
                <span>{{ date }}</span>
                <span>{{ time }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 引入Vue相关API
import { onMounted, onUnmounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

// 引入第三方库和工具
import Dayjs from 'dayjs' // 日期处理库
import { getWeather, getWeatherCityId, getWeatherPm2P5 } from '@/api/connect' // 天气API
import { BPFunction } from '@/utils/BPFunction' // 业务逻辑函数
import { useToolsStore } from '@/stores/tools' // Pinia状态管理

// 计算属性：从全局配置获取标题
const title = computed(() => (window as any).Common_config.title || '')

// 响应式数据定义
const date = ref('') // 当前日期
const time = ref('') // 当前时间
const WeatherData = ref() // 天气数据
const WeatherPm2P5 = ref() // PM2.5数据
let timer = ref() // 定时器引用

// 获取工具状态（从Pinia store）
const ToolsStore = useToolsStore()
const LayerTreeshow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)
const SkyBoxShow = computed(() => ToolsStore.$state.SkyBoxShow)
const WeatherShow = computed(() => ToolsStore.$state.WeatherShow)
const BuildShow = computed(() => ToolsStore.$state.BuildShow)
const UIShow = computed(() => ToolsStore.$state.UIShow)

// 页面路由
const Router = useRouter()

/**
 * 重置场景状态
 */
const reset = () => {
    (window as any).Common_config.reset()
}

/**
 * 获取并更新当前日期和时间
 */
const get_Date_Time = () => {
    let date_time = Dayjs().format('YYYY-MM-DD/HH:mm:ss').split('/')

    date.value = date_time[0]
    time.value = date_time[1]
}

/**
 * 获取天气数据
 */
const getWeather = async () => {
    let name = process.env.NODE_ENV === 'development' ? '深圳' : '深圳'
    
    // 获取城市ID
    const CityId: any = await getWeatherCityId(name)
    
    // 判断是否成功获取城市ID
    if (!CityId?.location?.length) {
        return
    }

    // 获取天气数据
}

/**
 * 获取天气数据
 */
const getWeatherData = async () => {
    let name = process.env.NODE_ENV === 'development' ? '深圳' : '深圳'
    
    // 获取城市ID
    const CityId: any = await getWeatherCityId(name)
    
    // 判断是否成功获取城市ID
    if (!CityId?.location?.length) {
        console.warn('获取城市ID失败或返回格式不正确:', CityId)
        return
    }

    const cityId = CityId.location[0].id

    // 获取天气信息
    const CityWeather: any = await getWeather(cityId)
    WeatherData.value = CityWeather

    // 获取PM2.5数据
    const CityWeather_Pm2P5 = await getWeatherPm2P5(cityId)
    WeatherPm2P5.value = CityWeather_Pm2P5
}

/**
 * 工具按钮点击事件处理函数
 */

// UI显隐控制
const UIClick = async () => {
    const val = !UIShow.value
    ToolsStore.$state.UIShow = val
    await __g.settings.setMainUIVisibility(val)
}

// 图层树显隐控制
const LayerTreeClick = () => {
    clearView(false, !LayerTreeshow.value, false)
}

// 气象显示控制
const WeatherClick = () => {
    clearView(false, false, !WeatherShow.value)
}

/**
 * 统一清除视图函数
 * @param val1 动画显示状态
 * @param val2 图层树显示状态
 * @param val3 气象显示状态
 */
const clearView = (val1: boolean, val2: boolean, val3: boolean) => {
    ToolsStore.SetAnimationShow(val1)
    ToolsStore.SetLayerTreeShow(val2)
    ToolsStore.SetWeatherShow(val3)
}

// 生命周期钩子
onMounted(async () => {
    get_Date_Time() // 初始化时间
    // 设置定时器，每秒更新时间
    timer.value = setInterval(() => {
        get_Date_Time()
    }, 1000)
    await getWeatherData() // 获取天气数据

})

onUnmounted(() => {
    clearInterval(timer.value) // 清理定时器
})
</script>

<style lang="scss" scoped>
/* 头部组件样式 */
.header {
    position: relative;
    display: flex;
    width: 100vw;
    @include wHeight(168);
    background: url('~@/assets/images/top@2x.png') no-repeat;
    background-size: 100% 100%;
    @include FontSize(12);
    z-index: 18;

    /* 标题样式 */
    .title {
        @include Width(800);
        @include wHeight(52);
        position: absolute;
        @include Left(25);
        right: 0;
        @include Top(15);
        @include FontSize(38);
        color: #ffffff;
        @include LetterSpacing(11.7);
        text-shadow: 0 0 4px #6e9cff;
        font-family: PangMenZhengDao, serif;
    }

    /* 右侧工具区域样式 */
    .header-right {
        @include FontSize(14);
        @include Width(370);
        @include wHeight(76);
        position: absolute;
        z-index: 10;
        @include Right(0);
        @include Top(0);
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /* 工具图标容器样式 */
    .tool {
        position: absolute;
        height: 100%;
        top: 0;
        z-index: 10;
        @include Right(300);
        @include Width(105);
        @include Top(0);
        font-family: SJyunhei, serif;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @include FontSize(20);
        cursor: pointer;
    }

    /* 时间显示样式 */
    .time {
        position: fixed;
        @include Width(200);
        @include wHeight(40);
        @include MarginRight(10);
        @include FontSize(16);
        font-family: SJyunhei;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include Padding(10, 0, 10, 0);
    }
}

/* 工具提示样式 */
.box-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
}

/* 鼠标悬停效果 */
.box-item:hover {
    color: #7afafe;
}
</style>