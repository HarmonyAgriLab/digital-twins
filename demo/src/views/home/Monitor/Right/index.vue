<template>
  <div class="boxContent"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

import { option3, option4, option6, option8 } from "./chartOpt";

export default defineComponent({
  name: "index",
  components: {},
  setup() {
    const self = reactive({
      barlist: [
        {
          imgUrl: require("@/assets/images/基础/right_pic1@2x.png"),
          num: 10,
          dw: "台",
          title: "充电桩台数",
        },
        {
          imgUrl: require("@/assets/images/基础/right_pic2@2x.png"),
          num: 602541,
          dw: "kWh",
          title: "累计充电数",
        },
        {
          imgUrl: require("@/assets/images/基础/编组 35@2x.png"),
          num: 256,
          dw: "kwh",
          title: "当日充电数",
        },
      ],
      btns: [
        require("@/assets/images/基础/right_robot_square_normal@2x.png"),
        require("@/assets/images/基础/right_robot_square_normal@2x.png"),
        require("@/assets/images/基础/right_robot_square_broken@2x.png"),
      ],
      contentList: [
        {
          title: "阳城县特殊教育学校",
          address: "建设路与坪头路交叉路口",
        },
        {
          title: "阳城县特殊教育学校",
          address: "建设路与坪头路交叉路口",
        },
        {
          title: "阳城县特殊教育学校",
          address: "建设路与坪头路交叉路口",
        },
      ],
      floorListLeft: [
        { name: "1栋", selectedId: 0, selectedName: "F7" },
        { name: "2栋", selectedId: 1, selectedName: "F6" },
        { name: "3栋", selectedId: 3, selectedName: "F4" },
        { name: "4栋", selectedId: 2, selectedName: "F5" },
        { name: "5栋", selectedId: 3, selectedName: "F4" },
      ],
      floorListRight: [
        { name: "1栋", selectedId: 5, selectedName: "F2" },
        { name: "2栋", selectedId: 3, selectedName: "F4" },
        { name: "3栋", selectedId: 1, selectedName: "F6" },
        { name: "4栋", selectedId: 3, selectedName: "F4" },
        { name: "5栋", selectedId: 6, selectedName: "F1" },
      ],
      floorMsgList: [
        { name: "F3 - 异常用电", status: "未处理", time: "22-03-01 14:12" },
        { name: "F5 - 异常用电", status: "正在处理", time: "22-03-01 14:12" },
        { name: "F5 - 异常用电", status: "未处理", time: "22-03-01 14:12" },
      ],
    });

    return {
      option3,
      option4,
      option6,
      option8,
      ...toRefs(self),
    };
  },
});
</script>

<style scoped lang="scss">
.boxContent {
  display: flex;
  justify-content: space-between;
  @include Width(465);
  @include wHeight(865);
  //height: 100%;

  transform: translateZ(10px);
  // background: url("~@/assets/images/right/right-img.png") no-repeat;
  background: url("~@/assets/images/info_right@2x.png") no-repeat;

  background-size: 100% 100%;
}
</style>
