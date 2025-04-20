<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-07-07 17:26:38
 * @LastEditors: huangyongcong
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\left_box.vue
-->
<!-- left_box -->
<template>
  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__faster  animate__fadeInLeft "
    leave-active-class="animate__animated animate__faster animate__fadeOutLeft "
  >
    <div v-if="animate" class="left_box">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useAnimateStore } from "@/stores/animate";
import { computed } from "vue";

const animatestore = useAnimateStore();
const animate = computed(() => animatestore.$state.Animate);
</script>
<style lang="scss" scoped>
.left_box {
  pointer-events: none;
  position: absolute;
  @include Width(350);
  height: 100%;

  @include Top(0);
  @include Left(0);
  box-sizing: border-box;
  z-index: 3;
  background: url("~@/assets/images/left_bg @2x.png") no-repeat;
  background-size: 100% 100%;
  @include PaddingTop(165);
  @include PaddingLeft(24);
}
</style>
