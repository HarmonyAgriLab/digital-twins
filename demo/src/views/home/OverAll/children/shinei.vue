<template>
  <!-- 图例组件 -->
  <Legend @change="handleLegendChange" :legend-list="legendList" ref="legendRef" />

  <!-- 风扇1新增：1.点击按钮实现文字变换，按钮绿红变换 -->
  <!-- 风扇1新增：2.调用异步请求，实现排风扇的开关 -->
  <!-- 排风扇 Dialog -->
  <Dialog v-if="dialogStore.dialogVisible && dialogStore.tag === '排风扇'" tag="排风扇" title="排风扇控制" :height="240"
    @close="handleDialogClose">
    <div class="fan-container">
      <!-- 风扇卡片 -->
      <div class="fan-card">
        <div class="fan-header">
          <img :src="fan" alt="排风扇 1" class="fan-img" />
          <p class="fan-title">排风扇 1</p>
        </div>
        <!-- 1111111111111111111111: @click="toggleFan(1)"-->
        <el-button :type="isFan1Open ? 'success' : 'danger'" @click="toggleFan1" class="fan-button">
          <!-- 给一个变量 -->
          {{ isOpenFan1}}
        </el-button>
      </div>
      <!-- 风扇2新增：1.点击按钮实现文字变换，按钮绿红变换 -->
      <!-- 风扇2新增：2.调用异步请求，实现排风扇的开关 -->
      <div class="fan-card">
        <div class="fan-header">
          <img :src="fan" alt="排风扇 2" class="fan-img" />
          <p class="fan-title">排风扇 2</p>
        </div>
        <el-button :type="isFan1Open ? 'success' : 'danger'" @click="toggleFan1" class="fan-button">
          {{ isOpenFan1 }}
        </el-button>
      </div>
    </div>
  </Dialog>

  <!-- 棚顶开合 Dialog -->
  <Dialog v-if="dialogStore.dialogVisible && dialogStore.tag === '棚顶开合'" tag="棚顶开合" title="棚顶开合" :height="240"
    @close="handleDialogClose">
    <div class="shelter-control">
      <img :src="greenhouse" alt="大棚状态" class="shelter-img" />
      <div class="shelter-actions">
        <p class="status-text">当前状态: {{ shedStatus }}</p>
        <el-button type="success" @click="toggleShedTop" class="action-button">
          切换开合状态
        </el-button>
      </div>
    </div>
  </Dialog>


  <!-- 遮阳帘 Dialog -->
  <!-- 遮阳帘新增：1.点击按钮实现文字变换，按钮绿红变换 -->
  <!-- 遮阳帘新增：2.调用异步请求，实现遮阳帘的开关 -->
  <Dialog v-if="dialogStore.dialogVisible && dialogStore.tag === '遮阳帘'" tag="遮阳帘" title="遮阳帘" :height="240"
    @close="handleDialogClose">
    <div class="shelter-control">
      <img :src="curtain" alt="遮阳帘状态" class="shelter-img" />
      <div class="shelter-actions">
        <p class="status-text">当前状态：{{ sunShadeStatus }}</p>
        <el-button :type="isSunShadeOpen ? 'success' : 'danger'" @click="sunShade" class="action-button">
          打开/关闭遮阳帘
        </el-button>
      </div>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>

import _ from 'lodash'
import { ref, reactive, onMounted, onBeforeUnmount, computed } from 'vue'
import Legend from '@/components/Legend/index.vue'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
import { BPFunction_zhny_fs, BPFunction_zhny_tf } from '@/utils/BPFunction'

// TODO: 这里提供了一个示例：你照着做 
// TODO：最后需要优化代码，删除没有用到的东西，减少代码冗余
//棚顶开合
import { openCeiling, closeCeiling } from '@/api/backend'

const shedStatus = ref<'打开' | '关闭'>('关闭')
const toggleShedTop = async () => {
  try {
    if (shedStatus.value === '关闭') {
      await openCeiling()
      shedStatus.value = '打开'
    } else {
      await closeCeiling()
      shedStatus.value = '关闭'
    }
  } catch (error) {
    console.error('棚顶开合失败:', error)
  }
}



//排风扇1
import { closeFan, openFan } from '@/api/backend'
const isFan1Open = ref(false) // 控制按钮颜色状态
const isOpenFan1 = ref<'打开' | '关闭'>('关闭')
const toggleFan1 = async () => {
  try {
    if (isOpenFan1.value === '关闭') {
      //  
      await openFan();
      isOpenFan1.value = '打开';
      isFan1Open.value = true;
    } else {
      await closeFan()
      isOpenFan1.value = '关闭'
      isFan1Open.value = false;
    }
  } catch (error) {
     console.error('风扇开合失败:', error)
  }
}

//遮阳帘
import { closeCurtain, openCurtain } from '@/api/backend'

const sunShadeStatus = ref<'打开' | '关闭'>('关闭')
const isSunShadeOpen = ref(false) // 控制按钮颜色状态
const sunShade = async () => {
  try {
    if (sunShadeStatus.value === '关闭') {
      await openCurtain()
      sunShadeStatus.value = '打开'
      isSunShadeOpen.value = true;
    } else {
      await closeCurtain()
      sunShadeStatus.value = '关闭'
      isSunShadeOpen.value = false;
    }
  } catch (error) {
    console.error('遮阳帘开合失败:', error)
  }
}
// 对应图片路径（你可以替换为实际图）
// TODO：图片路径都用test.png，但是名称要变。
import fan from '@/assets/img/test.png';
import greenhouse from '@/assets/img/test.png';
import curtain from '@/assets/img/test.png';
// 控制按钮点击（此处不包含真实逻辑）
const onToggleShelter = () => {
  shelterStatus.value = shelterStatus.value === 'closed' ? 'open' : 'closed'
}


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
.fan-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px;
  @include boxwHeight(120);
}

// 风扇卡片的大小是由什么决定的，并且没有单位的大小又是由上面决定的
.fan-card {
  flex: 1;
  text-align: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 12px;
  // @include boxWidth(v-bind("props.width"));
  @include boxwHeight(120);
}

.fan-header {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
}

.fan-img {
  @include boxWidth(70);
  @include boxwHeight(70);
  object-fit: cover;
  border-radius: 8px;
}

.fan-title {
  font-size: 14px;
  font-weight: bold;
}

.fan-button {
  border-radius: 8px;
  @include boxWidth(100);
  font-size: 16px;
  padding: 10px 0;
}

.shelter-control {
  display: flex;
  align-items: center;
  gap: 16px;
}

.shelter-img {
  width: 150px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.shelter-actions {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.status-text {
  font-size: 16px;
  font-weight: bold;
}

.action-button {
  border-radius: 8px;
  padding: 8px 20px;
}
</style>
