<!--
 * @Author: your name
 * @Date: 2022-02-25 05:56:18
 * @LastEditTime: 2022-03-28 00:33:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\components\V3Echarts\index.vue
-->
<template>
  <div class="container" :id="container" ref="chartRef"></div>
</template>

<script lang="ts" setup>
import {markRaw, onMounted, onUnmounted, reactive, ref, watch,} from "vue";
import * as charts from "echarts";

const props = defineProps({
  options: {
    type: Object,
    require: true,
  },
  width: {
    type: Number,
    require: false,
  },
  height: {
    type: Number,
    default: 200,
  },
  top: {
    type: Number,
    default: 0,
  },
  isFirst: {
    type: Boolean,
    default: false,
  },
  container: {
    type: String,
    default: "container",
  },
});

const chartRef = ref();
const Aecharts: any = reactive({value: ""});

onMounted(() => {
   changeEcharts(props.options);
   if (chartRef.value) {
          Aecharts.value = markRaw(charts.init(chartRef.value));
          changeEcharts(props.options);
        }
});

const changeEcharts = (options: any) => {
    if(Aecharts.value == ""){
        return
    }
  Aecharts.value.setOption(options);
  if (props.isFirst) {
    let index = 0;
    Aecharts.value.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 0,
    });
    Aecharts.value.on("mouseover", (e: any) => {
      if (e.dataIndex !== index) {
        Aecharts.value.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index,
        });
      } else {
        Aecharts.value.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });
      }
    });
    Aecharts.value.on("mouseout", (e: any) => {
      index = e.dataIndex;
      Aecharts.value.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: e.dataIndex,
      });
    });
  }
};

watch(
    () => props.options,
    (newval) => {
      if (newval) {
      }

    },
    {
      deep: true,
    }
);

const Resize = () => {
  Aecharts.value.resize();
};
onMounted(() => {
  window.addEventListener("resize", Resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", Resize);
});
</script>

<style lang="scss" scoped>
.container {
  @include boxWidth(v-bind("props.width"));

  @include boxhHeight(v-bind("props.height"));

  @include boxMarginTop(v-bind("props.top"));
  //   background: #000;
  @include BorderRadius(8);
}
</style>
