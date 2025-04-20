<template>
    <div>
        <div id="player" class="video-player"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

const initInterface = (isclound: boolean) => {
    var apiOnReady = false;

    function _onReady() {
        apiOnReady = true;
    }

    var options = {
        domId: 'player',
        apiOptions: {
            onReady: _onReady,
        },
    };

    var demoPlayer = new AirCityPlayer('127.0.0.1:8080', options);
    var airCityApi = demoPlayer.getAPI();
}

onMounted(() => {
    initInterface(true);
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