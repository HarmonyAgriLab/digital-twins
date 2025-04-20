<template>
  <div class="bg-box">
    <div class="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

// 应该将 withDefaults 直接包裹 defineProps 的类型声明
const props = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
    title?: string;
  }>(),
  {
    width: 464,
    height: 269,
    title: "标题",
  }
);
</script>

<style lang="scss" scoped>
.bg-box {
  position: relative;
  @include boxWidth(v-bind("props.width"));
  @include boxhHeight(v-bind("props.height"));
  @include MarginBottom(10);
  @include BorderRadius(8);
  @include FontSize(14);
  @include hLineHeight(18);
  @include LetterSpacing(0.5);
  overflow: hidden;
  background: url('~@/assets/images/info_bg_h269@2x.png') no-repeat;
  background-size: 100% 100%;
  @include PaddingLeft(18);
  @include PaddingTop(18);

  .title {
    @include PaddingLeft(20);
  }
}
</style>