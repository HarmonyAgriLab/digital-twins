<!--
 * @Description: 
 * @Version: 
 * @Author: huangyongcong
 * @Date: 2022-07-07 16:34:26
 * @LastEditors: huangyongcong
 * @LastEditTime: 2022-07-07 20:16:10
-->
<template>
  <div class="boxContent">
    <div class="content2">
      <BgBox>
        <V3Echarts :options="option7()" :height="200" :width="480"/>
      </BgBox>
    </div>

    <div class="content1">
      <BgBox>
        <V3Echarts :options="option9" :height="282" :width="480"/>
      </BgBox>
    </div>

    <div class="content1">
      <BgBox>
        <V3Echarts :options="option5" :height="282" :width="480"/>
      </BgBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import V3Echarts from "@/components/V3Echarts/index.vue";
import {option5, option7, option9} from "./echartsOpt";
import BgBox from "@/components/bgBox/index.vue";
</script>

<style lang="scss" scoped>
.boxContent {
  @include Width(777);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    width: 100%;
    @include wHeight(38);
  }

  .content1 {
    width: 100%;
    @include wHeight(282);
    display: flex;
    justify-content: space-between;
  }

  .content2 {
    width: 100%;
    //@include wHeight(200);
    display: flex;
    justify-content: space-between;
  }
}
</style>
