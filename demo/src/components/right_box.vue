
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
import { useAnimateStore } from "@/stores/animate";
import { computed } from "vue";
import { useRoute } from "vue-router";

const animatestore = useAnimateStore();
const animate = computed(() => animatestore.$state.Animate);
const route = useRoute();

</script>

<style lang="scss" scoped>
.right_box {
  // pointer-events: none;

  position: absolute;
  @include Width(560);
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
