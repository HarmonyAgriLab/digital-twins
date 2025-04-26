<!-- Equipment management 设备管理 -->
<template>
    <div class="equipment-management">
        <Right_box>
            <RightView />
        </Right_box>
    </div>
    <div class="legend-container">
        <div class="title-bg" @click="legendClick(-1)"></div>
        <div class="unit-container">单位：千公顷</div>
        <div class="legend-box">
            <div class="legend-item">
                <div class="square" style="background: rgba(30, 156, 64, 0.8)" @click="legendClick(2)"></div>
                <span>≥5000</span>
            </div>
            <div class="legend-item">
                <div class="square" style="background: rgba(99, 180, 143, 0.7)" @click="legendClick(1)"></div>
                <span>1001~4999</span>
            </div>
            <div class="legend-item">
                <div class="square" style="background: rgba(22, 28, 255, 0.5)" @click="legendClick(0)"></div>
                <span>≤1000</span>
            </div>
        </div>
    </div>
    <Dialog tag="省" title="农田详情" @close="activeName = 'info'">
        <div class="dialog-container">
            <div class="tabs">
                <div class="tab-titles">
                    <div class="tab-title" @click="activeName = 'info'" :class="{ active: activeName === 'info' }">基础信息</div>
                    <div class="tab-title" @click="activeName = 'echarts'" :class="{ active: activeName === 'echarts' }">历年趋势</div>
                </div>
            </div>
            <div class="tab-panels">
                <div class="tab-panel" v-if="activeName === 'info'">
                    <Box>
                        <div class="row">
                            <div class="label">地区名称：</div>
                            <div class="value">{{ (dialogStore.content as any).name }}</div>
                        </div>
                        <div class="row">
                            <div class="label">耕地面积：</div>
                            <div class="value">{{ (dialogStore.content as any).num }}千公顷</div>
                        </div>
                    </Box>
                    <Box>
                        <div class="row">
                            <div class="label">大棚数：</div>
                            <div class="value">56187</div>
                        </div>
                        <div class="row">
                            <div class="label">亩产量：</div>
                            <div class="value">5632</div>
                        </div>
                    </Box>
                    <Box>
                        <div class="row">
                            <div class="label">农田覆盖率：</div>
                            <div class="value">47%</div>
                        </div>
                        <div class="row">
                            <div class="label">人均拥有量：</div>
                            <div class="value">6725</div>
                        </div>
                    </Box>
                </div>
                <div class="tab-panel" v-else-if="activeName === 'echarts'">
                    <V3Echarts :options="chartOpt" />
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

import Right_box from '@/components/right_box.vue'
import RightView from './Right/index.vue'

import _ from 'lodash'
import chinaData from './中国地图.json'
import Dialog from '@/components/Dialog/index.vue'
import V3Echarts from '@/components/V3Echarts/index.vue'
import Box from '@/components/Box/index.vue'
// import { getIdByName } from '@/utils'
import { useDialogStore } from '@/stores/dialog'
import { playInitAnimation,AnimationType } from '@/utils/animation'
// 画地图
const dialogStore = useDialogStore()
const activeName = ref('info')
const chartOpt = {
    title: {
        text: '',
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: false,
        data: ['粮食产量', '畜牧量'],
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        top: '5%',
        left: '3%',
        right: '5%',
        bottom: '1%',
        height: '85%',
        containLabel: true
    },
    toolbox: {
        show: false,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['5月10号', '5月11日', '5月12日', '5月13日', '5月14日', '5月15日', '5月16日'],
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                color: '#ebf8ac' //X轴文字颜色
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: "℃'",
            nameTextStyle: {
                color: '#ebf8ac'
            },
            axisLabel: {
                formatter: '{value}',
                show: true,
                color: '#ebf8ac'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            }
        }
    ],
    series: [
        {
            name: '粮食产量',
            type: 'line',
            min: 10,
            max: 40,
            data: [32, 34, 39, 35, 38, 36, 34],
            lineStyle: {
                width: 3,
                color: {
                    type: 'linear',

                    colorStops: [
                        {
                            offset: 0,
                            color: '#AAF487' // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: '#47D8BE' // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#47D8BE' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(71,216,190, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 7
            },
            itemStyle: {
                color: '#AAF487',
                borderWidth: 10,
                borderColor: '#AAF487'
            },
            smooth: true
        },
        {
            name: '畜牧量',
            type: 'line',
            min: 10,
            max: 40,
            data: [25, 22, 26, 28, 27, 26, 23],
            lineStyle: {
                width: 3,
                color: {
                    type: 'linear',

                    colorStops: [
                        {
                            offset: 0,
                            color: '#F6D06F' // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: '#F9A589' // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#F9A589' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(249,165,137, 0.5)',
                shadowBlur: 10,
                shadowOffsetY: 7
            },
            itemStyle: {
                color: '#F6D06F',
                borderWidth: 10,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
           shadowBlur: 100,*/
                borderColor: '#F6D06F'
            },
            smooth: true
        }
    ]
}
let levelOption: any = {
    0: {
        color: [22 / 255, 28 / 255, 255 / 255, 0.5],
        num: _.random(5000, 16000),
        ids: []
    },
    1: {
        color: [99 / 255, 180 / 255, 143 / 255, 0.5],
        num: _.random(1001, 4999),
        ids: []
    },
    2: {
        color: [30 / 255, 156 / 255, 64 / 255, 0.6],
        num: _.random(200, 1000),
        ids: []
    }
}
let baseData = chinaData.features.map((item: { properties: { [x: string]: any }; geometry: { coordinates: any } }) => {
    let lowArr = ['海南', '青海', '西藏', '天津', '北京', '上海']
    let highArr = ['黑龙江', '内蒙古', '河南', '山东', '吉林', '四川', '河北', '云南', '安徽', '甘肃', '新疆', '湖北']

    let name = item.properties['省']
    let level: keyof typeof levelOption = lowArr.find((curName: any) => name.includes(curName)) ? 0 : highArr.find((curName: any) => name.includes(curName)) ? 2 : 1

    return {
        name,
        polygonArr: item.geometry.coordinates,
        color: levelOption[level].color,
        num: levelOption[level].num,
        level
    }
})
let curLevel = -1
const legendClick = (level: number) => {
    __g.polygon.stopHighlight([...levelOption[0].ids, ...levelOption[1].ids, ...levelOption[2].ids])

    if (level > -1) {
        curLevel = level
        __g.polygon.highlight(levelOption[level].ids)
    }
}
onMounted(async () => {
    await __g.camera.stopAnimation()
    await playInitAnimation(AnimationType.dl11)
    setTimeout(async() => {
        await __g.camera.stopAnimation()
    }, 1000)
    // await __g.tileLayer.hide(getIdByName('智慧农业_底图'))
    // await __g.tileLayer.hide(getIdByName('智慧农业_底图分块'))
    // // await __g.camera.set([589808.43, -2796383.69, 4091342.08, -61.95499, -101.014725, 1])
    // // await __g.camera.playAnimation(11)
    // __g.camera.set(524684.55, -3098822.67, 4210178.24, -56.229755, -97.996445, 0)
    // await __g.tileLayer.show(getIdByName('中国地图'))
    // __g.infoTree.hide(getIdByName(['智慧农业_底图环境', '智慧环境后期盒子', '智慧农业环境反射', '智慧农业环境雾效', '中国地图环境光']))
    // // await __g.tileLayer.hide(getIdByName('智慧农业_底图环境'))
    // // console.log(getIdByName('智慧农业_底图环境'), '---------fdfd')
    let addPolygonArr: any[] = []

    baseData.forEach((item: any, index: number) => {
        // if (item.name === '宁夏回族自治区') {
        item.polygonArr.forEach((v: any, i: number) => {
            //   console.log(v, i, '123')
            let vCord = v[0].map((curCord: any) => [curCord[0] + 97000, curCord[1] - 4040000, 280000.28])

            let id = item.name + '-' + index + '-' + i
            console.log('[  ] >', id)
            levelOption[item.level].ids.push(id)
            addPolygonArr.push({
                id,
                coordinates: vCord,
                range: [0, 10000000], //可视范围：[近裁距离, 远裁距离]，取值范围: [任意负值, 任意正值]
                color: item.color, //多边形的填充颜色
                frameColor: Color.Black, //边框颜色
                frameThickness: 1000, //边框厚度
                intensity: 1, //亮度
                style: 0, //单色 请参照API开发文档选取枚举
                groupId: '省',
                userData: JSON.stringify({
                    ...item,
                    polygonArr: null
                }),
                depthTest: false //是否做深度检测
            })
        })
        // }
    })
    // console.log(addPolygonArr, 'addPolygonArr')
    await __g.polygon.add(addPolygonArr)
})
onUnmounted(() => {
    __g.polygon.clear()
})
</script>

<style lang="scss" scoped>
.legend-container {
    @include Width(141);
    @include wHeight(280);
    position: absolute;
    z-index: 1;
    @include Right(520);
    @include Bottom(0);

    .title-bg {
        width: 100%;
        background-image: url('~@/assets/images/legend/map_tuli_bar@2x.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        @include wHeight(33);
        cursor: pointer;
    }

    .unit-container {
        @include Padding(5, 0, 5, 0);
        text-align: right;
    }

    .legend-box {
        @include MarginTop(5);

        .legend-item {
            width: 100%;
            @include wHeight(40);
            //background: rgba(0, 0, 0, 0.52);
            @include BorderRadius(8);
            display: flex;
            justify-content: center;
            align-items: center;
            @include MarginBottom(8);
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            justify-content: space-between;

            .square {
                @include Width(35);
                @include wHeight(20);
            }
        }
    }
}

.dialog-container {
    video {
        width: 100%;
        @include wHeight(190);
        object-fit: fill;
    }

    .tabs {
        @include wHeight(30);
        @include PaddingBottom(5);
        border-bottom: 1px solid #fff;
        @include MarginBottom(10);

        .tab-titles {
            display: flex;

            .tab-title {
                width: 6em;

                color: #fff;
                //border-bottom: 1px solid #e5e5e5;
                cursor: pointer;
                @include FontSize(17);

                transition: all 0.3s ease;

                &.active {
                    color: rgb(78, 211, 184);
                    //border-bottom: 1px solid #e5e5e5;
                }
            }
        }
    }

    .row {
        display: flex;
        @include PaddingTop(5);
        @include PaddingBottom(5);
        @include FontSize(16);

        .label {
            width: 8em;
        }

        .value {
            flex: 1;
        }
    }
}
</style>
