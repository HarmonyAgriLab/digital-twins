<!-- OverAll -->
<!-- <template>
    <Legend @change="handleLegendChange" :legend-list="legendList" ref="legendRef" />
    <Dialog tag="风机控制" title="风机信息" @close="handleDialogClose">
        <div class="dialog-container">
            <Box>
                <div class="row">
                    <div class="label">空气温度：</div>
                    <div class="value">27.32℃</div>
                </div>
                <div class="row">
                    <div class="label">二氧化碳：</div>
                    <div class="value">
                        536.94 PPM
                    </div>
                </div>
                <div class="row">
                    <div class="label">空气湿度：</div>
                    <div class="value">46.94%</div>
                </div>
            </Box>
            <Box>
                <div class="title-bg">风机控制</div>
                <div class="row">
                    <div class="item">
                        <div class="label">风机控制:</div>
                        <div class="value">
                            <el-switch v-model="isStart" @change="fanSwitchChange"></el-switch>
                        </div>
                    </div>
                    <div class="item" style="margin-left: auto">
                        <div class="label">风机模式：</div>
                        <div class="value">
                            <el-switch v-model="isSupply" @change="supplyChange" active-text="排风" inactive-text="送风" :disabled="!isStart"></el-switch>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="label">风机速度：</div>
                    <div class="value" style="width: 78%">
                        <el-slider :step="0.1" :min="1" :max="100" @input="fanSpeedInp" @mousedown.stop v-model="fanSpeed" :disabled="!isStart" :format-tooltip="val => val + 'm/s'" />
                    </div>
                </div>
            </Box>
        </div>
    </Dialog>
    <Dialog tag="灯光控制" @close="handleDialogClose">
        <div class="dialog-container">
            <Box>
                <div class="row">
                    <div class="label">空气温度：</div>
                    <div class="value">27.32℃</div>
                </div>
                <div class="row">
                    <div class="label">光照强度：</div>
                    <div class="value">
                        <V3count :startVal="0" :endVal="lightIntensityVal" :duration="3000"></V3count>
                        lx
                    </div>
                </div>
                <div class="row">
                    <div class="label">空气湿度：</div>
                    <div class="value">46.94%</div>
                </div>
            </Box>
            <Box>
                <div class="title-bg">灯光控制</div>
                <div class="row">
                    <div class="label">灯光控制:</div>
                    <div class="value">
                        <el-switch v-model="isShowDG" @change="lightSwitchChange"></el-switch>
                    </div>
                </div>
                <div class="row">
                    <div class="label">灯光强度：</div>
                    <div class="value" style="width: 78%">
                        <el-slider :step="1" :min="0" :max="3" @input="lightIntensityInp" @mousedown.stop v-model="lightIntensity" :disabled="!isShowDG" />
                    </div>
                </div>
            </Box>
        </div>
    </Dialog>
    <Dialog tag="灌溉控制" @close="handleDialogClose" title="土壤信息" :height="240">
        <div class="dialog-container">
            <Box>
                <div class="row">
                    <div class="label">土壤温度：</div>
                    <div class="value">16.32℃</div>
                </div>
                <div class="row">
                    <div class="label">土壤湿度：</div>
                    <div class="value">{{ soilMoisture }} %</div>
                </div>

                <div class="row">
                    <div class="label">土壤ph值:</div>
                    <div class="value" style="margin-left: 0.5em">6.8</div>
                </div>
                <div class="row">
                    <div class="label" style="margin-right: 1em">氮含量：</div>
                    <div class="value">0.32%</div>
                </div>
            </Box>
            <Box>
                <div class="title-bg">
                    灌溉开关
                    <el-switch v-model="isShowSF" @change="handleSFChange" style="margin-left: 2em" />
                </div>
            </Box>
        </div>
    </Dialog>
</template> -->


<!-- <template>
    <Legend />
  
    <Dialog tag="风机控制" title="风机信息">
      <div class="dialog-container">
        <Box>
          <div class="row">
            <div class="label">空气温度：</div>
            <div class="value">27.32℃</div>
          </div>
          <div class="row">
            <div class="label">二氧化碳：</div>
            <div class="value">536.94 PPM</div>
          </div>
          <div class="row">
            <div class="label">空气湿度：</div>
            <div class="value">46.94%</div>
          </div>
        </Box>
  
        <Box>
          <div class="title-bg">风机控制</div>
          <div class="row">
            <div class="item">
              <div class="label">风机控制:</div>
              <div class="value">
                <el-switch />
              </div>
            </div>
            <div class="item" style="margin-left: auto">
              <div class="label">风机模式：</div>
              <div class="value">
                <el-switch active-text="排风" inactive-text="送风" />
              </div>
            </div>
          </div>
  
          <div class="row">
            <div class="label">风机速度：</div>
            <div class="value" style="width: 78%">
              <el-slider :step="0.1" :min="1" :max="100" :format-tooltip="val => val + 'm/s'" />
            </div>
          </div>
        </Box>
      </div>
    </Dialog>
  
    <Dialog tag="灯光控制">
      <div class="dialog-container">
        <Box>
          <div class="row">
            <div class="label">空气温度：</div>
            <div class="value">27.32℃</div>
          </div>
          <div class="row">
            <div class="label">光照强度：</div>
            <div class="value">136.57 lx</div>
          </div>
          <div class="row">
            <div class="label">空气湿度：</div>
            <div class="value">46.94%</div>
          </div>
        </Box>
  
        <Box>
          <div class="title-bg">灯光控制</div>
          <div class="row">
            <div class="label">灯光控制:</div>
            <div class="value">
              <el-switch />
            </div>
          </div>
          <div class="row">
            <div class="label">灯光强度：</div>
            <div class="value" style="width: 78%">
              <el-slider :step="1" :min="0" :max="3" />
            </div>
          </div>
        </Box>
      </div>
    </Dialog>
  
    <Dialog tag="灌溉控制" title="土壤信息" :height="240">
      <div class="dialog-container">
        <Box>
          <div class="row">
            <div class="label">土壤温度：</div>
            <div class="value">16.32℃</div>
          </div>
          <div class="row">
            <div class="label">土壤湿度：</div>
            <div class="value">28%</div>
          </div>
          <div class="row">
            <div class="label">土壤ph值:</div>
            <div class="value" style="margin-left: 0.5em">6.8</div>
          </div>
          <div class="row">
            <div class="label" style="margin-right: 1em">氮含量：</div>
            <div class="value">0.32%</div>
          </div>
        </Box>
  
        <Box>
          <div class="title-bg">
            灌溉开关
            <el-switch style="margin-left: 2em" />
          </div>
        </Box>
      </div>
    </Dialog>
</template>
   -->

<template>
<div>
    <strong> 你好这是：shinei.vue </strong> 
</div>
</template>

<script lang="ts" setup>

// import Legend from '@/components/Legend/index.vue'
// import Dialog from '@/components/Dialog/index.vue'
// import V3count from '@/components/V3count/vue-countTo.vue'
// import Box from '@/components/Box/index.vue'

// import _ from 'lodash'
// import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// import { useDialogStore } from '@/stores/dialog'
// const dialogStore = useDialogStore()



// import { getIdByName } from '@/utils'
// import { BPFunction_zhny_dg, BPFunction_zhny_fs, BPFunction_zhny_tf } from '@/utils/BPFunction'

// 计算属性：灯光强度对应的真实数值
// const lightIntensityVal = computed(() => {
//     if (isShowDG.value) {
//         return (lightIntensity.value + 0.2) * 99 || 1.63
//     }
//     return 1.63
// })


//灯光控制
// const isShowDG = ref(false)
// const lightIntensity = ref(0)
// const lightIntensityVal = computed(() => {
//     if (isShowDG.value) {
//         return (lightIntensity.value + 0.2) * 99 || 1.63
//     }
//     return 1.63
// })
// // 滑块值改变时的处理
// const lightIntensityInp = (val: number) => {
//     console.log(val)
//     if (val === 0) {
//         BPFunction_zhny_dg(4)
//     } else {
//         BPFunction_zhny_dg(val)
//     }
// }


//风机控制
// const isStart = ref(false)
// const fanSpeed = ref(10)
// const isSupply = ref(false)
// const fanSwitchChange = (val: boolean) => {
//     let result = Number(val) && fanSpeed.value
//     if (!isSupply.value) {
//         result = -result
//     }
//     let id = getIdByName('智慧农业通风效果')
//     if (val) {
//         __g.tileLayer.show(id)
//     } else {
//         __g.tileLayer.hide(id)
//     }
//     BPFunction_zhny_fs(result)
// }
// const fanSpeedInp = _.throttle(val => {
//     BPFunction_zhny_fs(getFanSpeed())
// }, 50)
// const supplyChange = (val: boolean) => {
//     //
//     BPFunction_zhny_fs(getFanSpeed())
//     BPFunction_zhny_tf(+val + 1)
// }
// const getFanSpeed = () => {
//     if (isSupply.value) {
//         return fanSpeed.value
//     } else {
//         return -fanSpeed.value
//     }
// }

// //灌溉控制
// const soilMoisture = ref(34.26)
// const isShowSF = ref(false)
// let timer: null | number = null
// const handleSFChange = (val: boolean) => {
//     let id = getIdByName('智慧农业灌溉喷水')
//     if (val) {
//         __g.tileLayer.show(id)
//         timer = setInterval(() => {
//             soilMoisture.value += _.random(0, 1, true)
//             soilMoisture.value = +soilMoisture.value.toFixed(2)
//         }, 1000)
//     } else {
//         __g.tileLayer.hide(id)
//         timer && clearInterval(timer)
//     }
// }
// const countRef = ref()

// const legendList = [
//     {
//         label: '风机控制',
//         isActive: false,
//         clickFunc() {
//             this.isActive = !this.isActive
//             dialogStore.setDialogVisible(this.isActive)
//             if (this.isActive) {
//                 //
//                 dialogStore.setTag(this.label)
//                 dialogStore.setXY([1900, 149])
//             } else {
//                 //
//             }
//         }
//     },
//     {
//         label: '灯光控制',
//         isActive: false,
//         clickFunc() {
//             this.isActive = !this.isActive
//             dialogStore.setDialogVisible(this.isActive)
//             if (this.isActive) {
//                 //
//                 dialogStore.setTag(this.label)
//                 dialogStore.setXY([1900, 149])
//             } else {
//                 //
//             }
//         }
//     },
//     {
//         label: '灌溉控制',
//         isActive: false,
//         clickFunc() {
//             this.isActive = !this.isActive
//             dialogStore.setDialogVisible(this.isActive)

//             if (this.isActive) {
//                 //
//                 dialogStore.setTag(this.label)
//                 dialogStore.setXY([1900, 149])
//             } else {
//                 //
//             }
//         }
//     }
// ]

// onBeforeUnmount(() => {
//     console.log('室内关')
//     BPFunction_zhny_tf(1) //初始化成默认状态
//     BPFunction_zhny_fs(0) //初始化成默认状态
// })

// onMounted(async () => {
//     await __g.camera.stopAnimation()
//     await __g.infoTree.hide(getIdByName('智慧农业_底图'))
//     console.log('室内开')
//     // __g.weather.setDateTime(2022, 7, 13, 7, 38, 0);
//     await __g.infoTree.hide(getIdByName(['中国地图', '智慧农业灯光控制', '智慧农业灌溉喷水', '智慧农业_底图环境', '智慧环境后期盒子', '智慧农业环境反射', '智慧农业环境雾效', '中国地图环境光']))
//     await __g.weather.setSunIntensity(0)
//     await __g.infoTree.show(getIdByName(['环境', '智慧农业地形']))
//     await __g.camera.set(...[-59.496992, 46.44875, -11.179948, -14.003909, -35.164623, 0.8])
//     BPFunction_zhny_dg(4)
// })

// const legendRef = ref()
// const handleDialogClose = () => {
//     legendRef.value.cancelSelect()
// }
// const handleLegendChange = (ele: typeof legendList[0], index: number, isActive: boolean) => {
//     legendList.forEach(item => {
//         if (ele !== item && item.isActive) {
//             item.clickFunc()
//         }
//     })
//     ele.clickFunc()
// }
</script>

<style lang="scss" scoped>
.dialog-container {
    display: flex;
    flex-direction: column;

    &:deep(.box) {
        border-radius: 0;
    }

    .row {
        display: flex;
        @include MarginBottom(10);
        @include MarginTop(10);
        @include FontSize(16);

        .item {
            display: flex;
        }

        .label {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .value {
            @include PaddingLeft(20);
            display: flex;

            align-items: center;

            &:deep(.el-slider) {
                width: 100%;
            }

            &:deep(.el-switch) {
                width: 100%;

                .el-switch__label.is-active {
                    color: #00ca95;
                }

                .el-switch__label {
                    color: #fff;
                }
            }
        }
    }

    .title-bg {
        display: flex;
        @include PaddingBottom(5);
        @include PaddingTop(5);
        background-color: rgba(40, 123, 88, 0.6);
        border-radius: 0;
        text-indent: 1em;
    }
}
</style>
