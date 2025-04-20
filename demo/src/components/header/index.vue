<!--
 * @Author: your name
 * @Date: 2022-02-22 18:36:34
 * @LastEditTime: 2022-04-07 17:42:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\header\index.vue
-->
<!-- header -->
<template>
    <!-- header -->
    <div class="header">
        <!-- 标题部分，点击会调用reset方法 -->
        <div class="title" @click="reset">
            {{ title }}
        </div>

        <!-- header右侧工具部分 -->
        <div class="header-right">
            <!-- TODO：tool显示不出来 -->
            <div class="tool">
                <!-- UI显示/隐藏 -->
                <div @click="UIClick">
                    <el-tooltip class="box-item" effect="dark" content="UI显隐" placement="bottom">
                        <Icon :color="UIShow ? '#7afafe' : '#fff'" :font-size="30" icon="mianban" />
                    </el-tooltip>
                </div>
                <!-- 天空切换 -->
                <div @click="SkyBoxClick">
                    <el-tooltip class="box-item" content="天空" effect="dark" placement="bottom">
                        <Icon :color="SkyBoxShow ? '#7afafe' : '#fff'" :font-size="26" icon="tiankonghe" />
                    </el-tooltip>
                </div>
                <!-- 图层树显示/隐藏 -->
                <div @click="LayerTreeClick">
                    <el-tooltip class="box-item" effect="dark" content="图层树" placement="bottom">
                        <Icon :color="LayerTreeshow ? '#7afafe' : '#fff'" :font-size="30" icon="tucengshu" />
                    </el-tooltip>
                </div>
                <!-- 导览显示/隐藏 -->
                <div @click="AnimationClick">
                    <el-tooltip class="box-item" effect="dark" content="导览" placement="bottom">
                        <Icon :color="AnimationShow ? '#7afafe' : '#fff'" :font-size="26" icon="xunimanyou" />
                    </el-tooltip>
                </div>
                <!-- 气象显示/隐藏 -->
                <div @click="WeatherClick">
                    <el-tooltip class="box-item" effect="dark" content="气象" placement="bottom">
                        <Icon :color="WeatherShow ? '#7afafe' : '#fff'" :font-size="30" icon="qixiangjiance" />
                    </el-tooltip>
                </div>
            </div>

            <!-- 当前时间显示部分 -->
            <div class="time">
                <span>{{ date }}</span>
                <span>{{ time }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

// 引入日期库
import Dayjs from 'dayjs'
// 引入天气API
import { getWeather, getWeatherCityId, getWeatherPm2P5 } from '@/api/connect'
// 引入工具函数
import { BPFunction } from '@/utils/BPFunction'
import { useToolsStore } from '@/stores/tools'

const title = computed(() => (window as any).Common_config.title || '数字孪生智慧xx管理平台')

// 设置不同时间段的天际切换选项
const status = ref([
    { name: '日景', icon: 'qingtian', key: 6 },
    { name: '黄昏', icon: 'Sunset', key: 2 },
    { name: '傍晚', icon: 'yueliang', key: 4 }
])

// 日夜景切换函数
const ChangeSkyBox = (val: any) => {
    clearView(false, false, false)  // 清除视图
    BPFunction(val.key)  // 切换天空背景
}

const Router = useRouter()
// 跳转到首页
const linktoindex = () => {
    Router.push('/home/OverAll')
}
// 重置
const reset = () => {
    (window as any).Common_config.reset()
}

// 获取当前时间
const date: any = ref('')
const time: any = ref('')
const get_Date_Time = () => {
    let date_time = Dayjs().format('YYYY-MM-DD/HH:mm:ss').split('/')
    date.value = date_time[0]
    time.value = date_time[1]
}

let WeatherData = ref()  // 存储天气数据
let WeatherPm2P5 = ref() // 存储PM2.5数据

// 获取天气信息
const getWeatherData = async () => {
    let name = process.env.NODE_ENV === 'development' ? '深圳' : '深圳'
    
    // 获取城市ID
    const CityId: any = await getWeatherCityId(name)
    
    // 获取天气信息
    const CityWeather: any = await getWeather(CityId.location[0].id)
    WeatherData.value = CityWeather

    // 获取PM2.5数据
    const CityWeather_Pm2P5 = await getWeatherPm2P5(CityId.location[0].id)
    WeatherPm2P5.value = CityWeather_Pm2P5
}

// 天气链接跳转
const WeahterLink = () => {
    window.open(WeatherData.value.fxLink)
}
const Weahter_aqiLink = () => {
    window.open(WeatherPm2P5.value.fxLink)
}

// 打开外部链接
const openlink = () => {
    window.open('http://www.freedoonline.com')
}

// 获取工具状态
const ToolsStore = useToolsStore()
const LayerTreeshow = computed(() => ToolsStore.$state.LayerTreeShow)
const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)
const SkyBoxShow = computed(() => ToolsStore.$state.SkyBoxShow)
const WeatherShow = computed(() => ToolsStore.$state.WeatherShow)
const BuildShow = computed(() => ToolsStore.$state.BuildShow)
const UIShow = computed(() => ToolsStore.$state.UIShow)

// 工具点击事件
const UIClick = async () => {
    const val = !UIShow.value
    ToolsStore.$state.UIShow = val
    await __g.settings.setMainUIVisibility(val)
}
const LayerTreeClick = () => {
    clearView(false, !LayerTreeshow.value, false)
}
const AnimationClick = () => {
    clearView(!AnimationShow.value, false, false)
}
const SkyBoxClick = () => {
    ToolsStore.SetSkyBoxShow(!SkyBoxShow.value)
}
const WeatherClick = () => {
    clearView(false, false, !WeatherShow.value)
}

// 清除视图
const clearView = (val1: boolean, val2: boolean, val3: boolean) => {
    ToolsStore.SetAnimationShow(val1)
    ToolsStore.SetLayerTreeShow(val2)
    ToolsStore.SetWeatherShow(val3)
}

let timer = ref()
onMounted(async () => {
    get_Date_Time()  // 获取时间
    timer.value = setInterval(() => {
        get_Date_Time()  // 每秒更新时间
    }, 1000)
    await getWeatherData()  // 获取天气数据
})
onUnmounted(() => {
    clearInterval(timer.value)  // 清除定时器
})
</script>

<style lang="scss" scoped>
.box-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
}
.box-item:hover {
    color: #7afafe; /* 鼠标悬停时改变颜色 */
}
.header {
    position: relative;
    display: flex;
    //align-items: center;
    width: 100vw;
    @include wHeight(168);
    // background: rgba(0, 0, 0, 0.301);
    background: url('~@/assets/images/top@2x.png') no-repeat;
    background-size: 100% 100%;
    //background-position: -1200px 0;
    //justify-content: center;
    top: 0;
    left: 0;
    @include FontSize(12);
    z-index: 18;

    .header-left {
        @include FontSize(14);
        // @include wHeight(40);
        //height: 100%;
        @include Width(370);
        @include wHeight(76);
        position: absolute;
        z-index: 10;
        @include Left(0);
        @include Top(0);
        z-index: 100;
        display: flex;
        // background: url("~@/assets/images/基础/top_left @2x.png") no-repeat;
        background-size: 100% 100%;
        @include PaddingLeft(28);
        @include PaddingTop(12.56);
        display: none;

        .box {
            @include MarginRight(36.49);
        }
    }

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
        //background: url('~@/assets/images/基础/top_right@2x.png') no-repeat;
        //background-size: 100% 100%;
    }

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

        .sub-title {
            @include FontSize(18);
            @include LetterSpacing(2.45);
            font-family: GB18030Bitmap;
        }

        //margin: auto;
        //background: url('~@/assets/images/基础/top_logo@2x.png') no-repeat;
        //background-size: 100% 100%;
    }

    .logo {
        @include Width(400);
        @include wHeight(46);
        @include LineHeight(46);
        text-align: center;
        // background-size: 100% 100%;
        position: absolute;
        // @include Left(350);
        @include Left(0);
        right: 0;
        top: 0;
        // background: #000;
        margin: auto;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;
        // @include PaddingTop(12);
        cursor: pointer;
        z-index: 100;

        .tit {
            @include FontSize(24);
            @include LetterSpacing(3);
            @include wHeight(40);
            font-family: Oppo, serif;

            @include MarginBottom(5);
            font-weight: 600;
            //text-shadow: 0 0 5px #98deff;
        }

        .titeng {
            @include FontSize(14);
        }
    }

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

        img {
            @include Width(24);
            @include wHeight(24);
            transition: transform 0.3s;
        }

        img:hover {
        }

        img:hover {
            transform: scale(1.2);
        }
    }

    .time {
        position: fixed;
        @include Width(200);
        @include wHeight(40);
        //@include Top(0);
        //@include Left(49);
        @include MarginRight(10);
        @include FontSize(16);
        font-family: SJyunhei;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include Padding(10, 0, 10, 0);

        span:nth-of-type(1) {
            display: inline-block;
            @include Width(120);
            @include PaddingRight(10);
            @include BorderRight(1, solid, #fff);
        }
    }

    .link {
        position: absolute;
        @include wHeight(75);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        @include Right(20);
        z-index: 100;
        top: 0;

        img {
            @include Width(54);
            transition: transform 0.3s;

            &:hover {
                transform: scale(2.5);
                transform-origin: 100% 0;
            }

            // margin-right: 3px;
            @include MarginRight(3);
        }
    }

    .rightbg {
        position: absolute;
        right: 0;
        @include Width(400);
        height: 100%;
        background: linear-gradient(to left, #000000d8 0%, #000000b6 20%, #00000098 40%, #00000077 60%, #00000054 80%, #00000000 100%);
    }
}

.choose {
    display: flex;
    width: 230px;
    height: 60px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    justify-content: space-around;

    .el-button {
        margin-top: 10px;
        @include Width(40);
        @include wHeight(30);
        @include LineHeight(30);
        @include Padding(5, 0, 0, 0);
        text-align: center;
        background-color: transparent;

        .svg-icon {
            @include Width(25);
            @include wHeight(25);
            vertical-align: center;
            fill: currentColor;
            overflow: hidden;
            color: #fff;
            // cursor: pointer;
        }
    }

    .active {
        .svg-icon {
            color: #7afafe;
        }
    }
}

.content {
    width: 230px;
    height: 120px;
    margin: auto;
    border-bottom: 1px solid rgba(237, 249, 255, 0.2);
    overflow: auto;
}

.clear {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC, serif;
    font-weight: 400;
    color: #7afafe;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
}
</style>
