<template>
  <div class="container">
    <div class="title-bg"/>
    <div class="legend-box">
      <div
        class="legend-item"
        v-for="(item, index) in legendList"
        :key="index"
        @click="handleLegendClick(index)"
        :class="{ active: selectedLegendIndex === index }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 定义图例项的类型
interface LegendItem {
  label: string
  isActive?: boolean
}

// Props：指定 legendList 的类型为 LegendItem[]
const props = defineProps<{
  legendList: LegendItem[]
}>()

// Emits
const emit = defineEmits<{
  (e: 'change', item: LegendItem, index: number, isActive: boolean): void
}>()

// 当前激活的图例索引
const selectedLegendIndex = ref(-1)

// 点击图例项
const handleLegendClick = (index: number) => {
  if (selectedLegendIndex.value === index) {
    selectedLegendIndex.value = -1
  } else {
    selectedLegendIndex.value = index
  }

  // 更新 isActive 状态
  props.legendList.forEach((item, i) => {
    item.isActive = i === selectedLegendIndex.value
  })

  const ele = props.legendList[index]
  emit('change', ele, index, ele.isActive ?? false)
}

// 提供外部调用：取消选中
const cancelSelect = () => {
  if (selectedLegendIndex.value !== -1) {
    handleLegendClick(selectedLegendIndex.value)
  }
}

// 暴露方法
defineExpose({ cancelSelect })
</script>


<style lang="scss" scoped>
.container {
  @include Width(141);
  @include wHeight(280);
  position: absolute;
  z-index: 1;
  @include Right(540);
  @include Bottom(70);

  .title-bg {
    width: 100%;
    background-image: url("~@/assets/images/legend/map_tuli_bar@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @include wHeight(33);
  }

  .legend-box {
    @include MarginTop(13);

    .legend-item {
      width: 100%;
      @include wHeight(40);
      background: rgba(0, 0, 0, 0.52);
      @include BorderRadius(8);
      display: flex;
      justify-content: center;
      align-items: center;
      @include MarginBottom(8);
      cursor: pointer;
      transition: all 0.3s;

      &:hover,
      &.active {
        background: #287C59;
        border: 1px solid #5AB289;
      }
    }
  }
}
</style>
