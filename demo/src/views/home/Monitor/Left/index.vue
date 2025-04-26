<template>
  <div class="boxContent"></div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import LeaseTitle from "@/components/Lease_title/index.vue";
import V3Echarts from "@/components/V3Echarts/index.vue";
import {
  option5,
  option1,
  option6,
  option7,
  Option8,
  Option9,
  option3,
} from "./chartOpt/index";
import { startMarquee } from "@/utils";
import Icon from "@/components/Icon/index.vue";
</script>

<style scoped lang="scss">
.boxContent {
  @include Width(778);
  @include wHeight(793);
  // background: url("~@/assets/images/基础/left_info@2x.png") no-repeat;
  background-size: 100% 100%;
  transform: translateZ(10px);
}
</style>
