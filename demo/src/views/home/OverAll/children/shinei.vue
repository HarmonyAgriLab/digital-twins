<template>
  <!-- 图例组件，绑定事件和属性 -->
  <Legend @change="handleLegendChange" :legend-list="legendList" ref="legendRef" />

  <!-- 排风扇 Dialog -->
  <Dialog 
    v-if="dialogStore.dialogVisible && dialogStore.tag === '排风扇'" 
    tag="排风扇" 
    title="排风扇控制" 
    @close="handleDialogClose"
  >
    <div class="dialog-container">
      <!-- 控制排风扇1 -->
      <div class="row">
        <div class="label">风速1：</div>
        <div class="value">
          <el-slider v-model="fanSpeed1.value" :min="0" :max="20" @input="fanSpeedInp1" />
        </div>
      </div>
      <div class="row">
        <div class="label">送风1：</div>
        <div class="value">
          <el-switch v-model="isSupply1.value" @change="supplyChange1" active-text="送风" inactive-text="抽风" />
        </div>
      </div>

      <!-- 控制排风扇2 -->
      <div class="row">
        <div class="label">风速2：</div>
        <div class="value">
          <el-slider v-model="fanSpeed2.value" :min="0" :max="20" @input="fanSpeedInp2" />
        </div>
      </div>
      <div class="row">
        <div class="label">送风2：</div>
        <div class="value">
          <el-switch v-model="isSupply2.value" @change="supplyChange2" active-text="送风" inactive-text="抽风" />
        </div>
      </div>
    </div>
  </Dialog>

  <!-- 棚顶开合 Dialog -->
  <Dialog 
    v-if="dialogStore.dialogVisible && dialogStore.tag === '棚顶开合'" 
    tag="棚顶开合" 
    @close="handleDialogClose"
  >
    <div class="dialog-container">
      <div class="row">
        <div class="label">控制：</div>
        <div class="value">
          <el-button type="primary" @click="BPFunction_zhny_tf(1)">开</el-button>
          <el-button type="danger" @click="BPFunction_zhny_tf(0)">关</el-button>
        </div>
      </div>
    </div>
  </Dialog>

  <!-- 遮阳帘 Dialog -->
  <Dialog 
    v-if="dialogStore.dialogVisible && dialogStore.tag === '遮阳帘'" 
    tag="遮阳帘" 
    title="遮阳帘" 
    :height="240" 
    @close="handleDialogClose"
  >
    <div class="dialog-container">
      <div class="row">
        <div class="label">控制：</div>
        <div class="value">
          <el-switch 
            v-model="isShowSF.value" 
            active-text="打开" 
            inactive-text="关闭" 
            @change="val => BPFunction_zhny_zyl(+val)" 
          />
        </div>
      </div>
      <div class="row">
        <div class="label">当前土壤湿度：</div>
        <div class="value">
          {{ typeof soilMoisture.value === 'number' ? soilMoisture.value.toFixed(2) + '%' : '--' }}
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import _ from 'lodash'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import Legend from '@/components/Legend/index.vue'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
import { BPFunction_zhny_fs, BPFunction_zhny_tf } from '@/utils/BPFunction'

// 排风扇1
const fanSpeed1 = ref(10)
const isSupply1 = ref(false)
const fanSpeedInp1 = _.throttle(() => {
  BPFunction_zhny_fs(isSupply1.value ? fanSpeed1.value : -fanSpeed1.value)
}, 50)
const supplyChange1 = (val: boolean) => {
  BPFunction_zhny_fs(isSupply1.value ? fanSpeed1.value : -fanSpeed1.value)
  BPFunction_zhny_tf(+val + 1)
}

// 排风扇2
const fanSpeed2 = ref(10)
const isSupply2 = ref(false)
const fanSpeedInp2 = _.throttle(() => {
  BPFunction_zhny_fs(isSupply2.value ? fanSpeed2.value : -fanSpeed2.value)
}, 50)
const supplyChange2 = (val: boolean) => {
  BPFunction_zhny_fs(isSupply2.value ? fanSpeed2.value : -fanSpeed2.value)
  BPFunction_zhny_tf(+val + 2)
}

// 使用对话框状态管理
const dialogStore = useDialogStore()
const legendRef = ref()

// 灌溉控制相关状态
const soilMoisture = ref(34.26)
const isShowSF = ref(false)

// 图例列表
interface LegendItem {
  label: string
  isActive: boolean
  clickFunc: () => void
}

const legendList = reactive<LegendItem[]>(['排风扇', '棚顶开合', '遮阳帘'].map(label => ({
  label,
  isActive: false,
  clickFunc(this: LegendItem) {
    legendList.forEach(item => (item.isActive = false))
    this.isActive = true
    dialogStore.setDialogVisible(true)
    dialogStore.setTag(this.label)
    dialogStore.setXY([1900, 149])
  }
})))

const handleLegendChange = (ele: LegendItem, index: number, isActive: boolean) => {
  legendList.forEach((item, i) => {
    if (i !== index && item.isActive) item.isActive = false
  })
  legendList[index].isActive = isActive
  legendList[index].clickFunc()
}

const handleDialogClose = () => {
  legendList.forEach(item => item.isActive = false)
  dialogStore.setDialogVisible(false)
}

onMounted(async () => {
  await __g.camera.stopAnimation()
  await __g.weather.setSunIntensity(0)
})

onBeforeUnmount(() => {
  console.log('设备关闭')
})
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
    margin: 10px 0;
    font-size: 16px;

    .label {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .value {
      display: flex;
      align-items: center;
      padding-left: 20px;

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
    padding: 5px 0;
    background-color: rgba(40, 123, 88, 0.6);
    border-radius: 0;
    text-indent: 1em;
  }
}
</style>
