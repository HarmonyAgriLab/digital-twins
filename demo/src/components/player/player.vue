<template>
    <div>
        <div id="player" class="video-player"></div>
        <transition appear name="custom-classes-transition" enter-active-class="animate__animated animate__faster  animate__fadeIn " leave-active-class="animate__animated animate__fast animate__fadeOut ">
            <div id="appLoading" v-show="loading">
                <div id="loading-wrapper">
                    <div class="loading-gif"></div>
                    <div id="loading-text">{{ loadingText }}</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import  OnReady  from '../aircityutils/onReady'
import OnEvent from '../aircityutils/Event'
import { useAirCityStore } from '@/stores/aircity'

let aircityPlayer = ref()

const AirCitystore = useAirCityStore()

const loadingText = ref('系统正在加载......')
const loading = ref(true) // 表示正在加载
const reTimer = ref()
// const reTimer = ref()
var airCityApi: any 


// TODO: 可能仍然需要对话框
const initInterface = (isclound: boolean) => {

    var apiOnReady = false;
    //特别注意：这里是所有API接口调用的入口
    function _onReady() {
        apiOnReady = true;
        //TODO 注意：在_onReady完成后才可以调用api接口
    }

    //构造AirCityPlayer对象所需的参数选项，更多参数详情请参考API开发手册里AirCityPlayer对象
    var options = {
        //必选参数，网页显示视频流的domId
        domId: 'player',

        //必选参数，二次开发时必须指定，否则无法进行二次开发
        apiOptions: {
            //必选参数，与云渲染主机通信成功后的回调函数
            //注意：对场景的一切操作, 请在onready之后执行
            onReady: _onReady,
        },


    };
    //构造player对象
    var demoPlayer = new AirCityPlayer('127.0.0.1:8080', options);
    //构造AirCityAPI对象并初始化
    var airCityApi = demoPlayer.getAPI();
}

const reConnect = () => {
    initInterface(true)
}
const onResize = () => {
    aircityPlayer.value.ui_onResize && aircityPlayer.value.ui_onResize()
    aircityPlayer.value.resize && aircityPlayer.value.resize()
}

onMounted(() => {
    console.log('onMounted')
    initInterface(true);


})

onUnmounted(() => {
    aircityPlayer.value && aircityPlayer.value.destroy()
    airCityApi.value && airCityApi.value.destroy()
    window.removeEventListener('resize', onResize)
})

</script>

<style lang="scss" scoped>
#player {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

    .loading {
        @include Width(50);
        @include hHeight(50);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        @include FontSize(40);
        font-weight: 600;

        :deep(.el-loading-mask) {
            background: rgba(0, 0, 0, 0) !important;

            .circular {
                @include Width(50);
                @include hHeight(50);

                .path {
                    stroke: rgb(32, 158, 216);
                }
            }
        }
    }
}

#appLoading {
    width: 100%;
    height: 100%;
    background: #000;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1110;
    opacity: 0.5;
    display: none;

    #loading-wrapper {
        position: relative;
        @include Width(800);
        @include wHeight(190);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .loading-gif {
            background: url('~@/assets/images/loading/loading.gif') no-repeat;
            @include Width(800);
            @include wHeight(160);
            background-size: 100% 100%;
        }

        #loading-text {
            position: absolute;
            @include Top(160);
            z-index: 111111;
            @include Width(800);
            @include wHeight(30);
            @include LineHeight(30);
            text-align: center;
            @include FontSize(12);
            color: #50a7d0;
            font-family: Tencent, serif;
        }
    }
}
</style>