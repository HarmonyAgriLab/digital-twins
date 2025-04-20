<!--
 * @Author: your name
 * @Date: 2022-02-22 22:38:25
 * @LastEditTime: 2022-07-07 17:31:46
 * @LastEditors: huangyongcong
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\right_box.vue
-->
<!-- right_box -->
<template>
  <transition
      appear
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__faster  animate__fadeInRight"
      leave-active-class="animate__animated animate__faster animate__fadeOutRight"
  >
    <div class="right_box">
      <slot></slot>
    </div>
  </transition>


</template>

<script lang="ts" setup>
import {useAnimateStore} from "@/stores/animate";
import {computed, ComputedRef, watch} from "vue";
import {useRoute} from "vue-router";

const animatestore = useAnimateStore();
const animate = computed(() => animatestore.$state.Animate);
const route = useRoute();

// let pointEventNone = computed(() => {
//   return route.path === "/home/Monitor" ? true : false;
// });
</script>

<style lang="scss" scoped>
.right_box {
  pointer-events: none;

  position: absolute;
  @include Width(531);
  @include wHeight(1030);
  @include Top(0);
  @include Right(0);

  z-index: 3;
  background: url("~@/assets/images/right_bg@2x.png") no-repeat;
  background-size: 100% 100%;
  @include Padding(160, 25, 0, 41);
  box-sizing: border-box;
  transform: translateZ(10px);
}
</style>
