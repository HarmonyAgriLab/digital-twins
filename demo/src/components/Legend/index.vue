<!--
 * @Author: your name
 * @Date: 2022-03-28 16:38:12
 * @LastEditTime: 2022-04-02 18:56:29
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\Views\OverAll\index.vue
-->
<!-- OverAll -->
<template>
  <div class="container">
    <div class="title-bg"/>
    <div class="legend-box">
      <div class="legend-item" v-for="(item , index ) in legendList" :key="index" @click="handleLegendClick(index)"
           :class="{active:selectedLegendIndex===index}">{{
          item.label
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import _ from "lodash";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {getIdByName} from "@/utils";

const props = defineProps({
  legendList: {
    type: Array,
    default: () => [
      {
        label: '风机控制',

      },
      {
        label: "灯光控制"
      }
    ]
  },
})
const selectedLegendIndex = ref(-1);


const emits = defineEmits(['change'])
const handleLegendClick = (index: number) => {
  if (selectedLegendIndex.value === index) selectedLegendIndex.value = -1
  else selectedLegendIndex.value = index;
  let ele = props.legendList[index]
  emits('change', ele, index, selectedLegendIndex.value === index)

}
const cancelSelect = () => {
  selectedLegendIndex.value !== -1 && handleLegendClick(selectedLegendIndex.value)
}
defineExpose({cancelSelect})
</script>
<style lang="scss" scoped>
.container {
  @include Width(141);
  @include wHeight(280);
  position: absolute;
  z-index: 1;
  @include Right(500);
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

      &:hover, &.active {
        background: #287C59;
        border: 1px solid #5AB289;
      }
    }
  }
}
</style>

