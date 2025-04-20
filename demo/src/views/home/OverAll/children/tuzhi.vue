<template>
  <Legend :legendList="needCopyArr" @change="LegendChange" ref="LegendRef"/>
  <Dialog class="info" :XY="[247,619]" :tag="dialogTag" @close="dialogClose" :title="dialogTag" :width="324 * 2"
          :height="192*2">
    <div class="tab">
      <div :class="{'tab-item':true, isActive:index===isActive}" v-for="item,index in tabList" :key="index"
           @click="tabClick(index)">
        {{ item.name }}
      </div>
    </div>
    <div class="content">
      <template v-if="isActive===0">
        <img :src="`/dialog/${dialogTag}.png`" alt="">
        <div class="info-nr">{{ curData?.info }}</div>
      </template>
      <template v-else-if="isActive===1">
        <V3Echarts :options="option1" :height="350" :width="300"/>
      </template>
      <template v-else>
        <V3Echarts :options="option2" :height="350" :width="300"/>
      </template>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import { getIdByName, waitFor } from "@/utils";
import _ from "lodash";
import V3Echarts from "@/components/V3Echarts/index.vue";
import { onBeforeUnmount, onMounted, ref, computed } from "vue";
import Legend from "@/components/Legend/index.vue";
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from "@/stores/dialog";
import * as echarts from "echarts";
import { AnimationType, playInitAnimation } from "@/utils/animation";

const createOption = (title: string, seriesData: any[], seriesNames: string[]) => {
  return {
    title: {
      text: title,
      textStyle: {
        fontWeight: "normal",
        fontSize: 16,
        color: "#F1F1F3",
      },
      left: "6%",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#57617B",
        },
      },
      backgroundColor: "rgba(0,0,0,0.5)",
      borderColor: "transparent",
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
    },
    legend: {
      icon: "rect",
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: seriesNames,
      right: "7%",
      textStyle: {
        fontSize: 12,
        color: "#ffffff",
      },
    },
    grid: {
      top: "15%",
      left: "2%",
      right: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#ffffff",
          },
        },
        data: [
          "13:00",
          "13:05",
          "13:10",
          "13:15",
          "13:20",
          "13:25",
          "13:30",
          "13:35",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#ffffff",
          },
        },
        axisLabel: {
          margin: 10,
          fontSize: 14,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#57617B",
          },
        },
      },
    ],
    series: seriesData.map((data, index) => ({
      name: seriesNames[index],
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 3,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          1,
          0,
          [
            {
              offset: 0,
              color: `rgba(${seriesColors[index][0]}, 0.3)`,
            },
            {
              offset: 0.8,
              color: `rgba(${seriesColors[index][1]}, 0)`,
            },
          ],
          false
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: `rgba(${seriesColors[index][0]}, 1)`,
          },
          {
            offset: 1,
            color: `rgba(${seriesColors[index][1]}, 1)`,
          },
        ]),
      },
      emphasis: {
        color: "rgb(0,196,132)",
        borderColor: "rgba(0,196,132,0.2)",
        extraCssText: "box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);",
        borderWidth: 10,
      },
      data: data,
    })),
  };
};

const seriesColors = [
  ["16,97,204", "17,235,210"],
  ["204,97,16", "210,235,17"],
  ["205,52,42", "235,235,21"],
];

const option1 = createOption("PH值", [[6.5, 6.7, 7, 6.9, 7.2, 6.8, 7.1, 6.8]], ["PH值"]);
const option2 = createOption("温度和湿度", [
  [28, 29, 32, 31, 26, 30, 28, 29],
  [20, 36, 25, 18, 19, 36, 40, 38],
], ["温度", "湿度"]);

const LegendRef = ref();
const dialogStore = useDialogStore();
let isActive = ref(0);
let dialogTag = ref('-1');
let timer: number | NodeJS.Timer = -1;
let needCopyArr = [
  {
    objectId: "Plane_2",
    label: "基岩层",
    id: 1,
    info: "基岩（bedrock），是陆壳表层风化层下面的完整的新矿物岩石。",
  },
  {
    objectId: "Plane2",
    label: "母质层",
    id: 2,
    info: "母质层又称C层，是指土层下部的层次。",
  },
  {
    objectId: "Plane3",
    label: "淀积层",
    id: 3,
    info: "由土壤表层淋洗下来的物质，到一定深度就淀积下来形成淀积层。",
  },
  {
    objectId: "Plane4",
    label: "淋溶层",
    id: 4,
    info: "淋溶层（Eluvial horizon）简称A层。",
  },
  {
    objectId: "Plane5",
    label: "腐殖质层",
    id: 5,
    info: "矿质土粒团聚成团粒状或粒状结构。",
  },
];
const curData = computed(() => needCopyArr.find(item => item.label === dialogTag.value));
let tabList = [{ name: "详细信息" }, { name: "历史酸碱度" }, { name: "历史温湿度" }];
let preFloor = ref(5);

const dialogClose = () => {
  LegendRef.value.cancelSelect();
};

const tabClick = (curIndex: number) => {
  if (curIndex >= 0 && curIndex < tabList.length) {
    isActive.value = curIndex;
  }
};

const LegendChange = async (item: typeof needCopyArr[0], index: number, flag: boolean) => {
  try {
    if (flag) {
      dialogStore.setTag(item.label);
      dialogTag.value = item.label;
      dialogStore.setDialogVisible(true);

      let curArr = needCopyArr.slice(0, item.id);
      let preArr = needCopyArr.slice(0, preFloor.value);
      let showArr = _.difference(curArr, preArr).map((item) => item.objectId);
      let hideArr = _.difference(preArr, curArr).map((item) => item.objectId);

      await __g.tileLayer.showActors([
        {
          id: getIdByName("智慧农业地质层"),
          objectIds: showArr,
        },
      ]);
      await __g.tileLayer.hideActors([
        {
          id: getIdByName("智慧农业地质层"),
          objectIds: hideArr,
        },
      ]);
      preFloor.value = item.id;
      __g.tileLayer.focusActor(
        getIdByName("智慧农业地质层"),
        item.objectId,
        10,
        0.8
      );
    } else {
      dialogStore.setTag('-1');
      preFloor.value = 5;
      __g.tileLayer.showAllActors(getIdByName("智慧农业地质层"));
      __g.camera.set(...[
        -27.671016,
        145.055625,
        26.037224,
        -21.585752,
        -35.250916,
        0.8
      ]);
    }
  } catch (error) {
    console.error("LegendChange error:", error);
  }
};

let i = -15;

const toggleUpDown = (flag: boolean) => {
  let tileLayerId = getIdByName("智慧农业地质层");
  __g.tileLayer.showAllActors(tileLayerId);
  let maxHeight = 0;
  let minHeight = -15;

  clearInterval(timer);
  timer = -1;

  if (flag) {
    timer = setInterval(() => {
      if (i < maxHeight) {
        i += 0.25;
        __g.tileLayer.setLocation(tileLayerId, [0, 0, i]);
      } else {
        clearInterval(timer);
        timer = -1;
      }
    }, 25);
  } else {
    timer = setInterval(() => {
      if (i > minHeight) {
        i -= 0.25;
        __g.tileLayer.setLocation(tileLayerId, [0, 0, i]);
      } else {
        clearInterval(timer);
        timer = -1;
      }
    }, 25);
  }
};

onBeforeUnmount(() => {
  __g.tileLayer.showAllActors(getIdByName("智慧农业地质层"));
  toggleUpDown(false);
});

onMounted(async () => {
  await __g.camera.set(
    ...[-26.859727, 148.732012, 7.54285, -13.972776, -37.690086, 0.8]
  );
  await waitFor(1000);
  await playInitAnimation(AnimationType.dl20);
  await waitFor(500);
  await __g.camera.stopAnimation();
  toggleUpDown(true);
});
</script>

<style lang="scss" scoped>
.btn-wrap {
  position: absolute;
  bottom: 60px;
  right: 550px;
  z-index: 100;
  background: #fff;
}

.info {
  position: absolute;
  @include Left(500);
  @include Top(100);
  z-index: 100;

  .tab {
    width: 100%;
    display: flex;
    @include wHeight(30);

    .tab-item {
      @include Width(120);
      height: 100%;
      text-align: center;
      @include LineHeight(30);

      &.isActive {
        background: #6f5757;
      }
    }
  }

  .content {
    @include FontSize(18);
    @include LineHeight(30);
    @include maxWHeight(300);
    overflow-y: auto;

    img {
      width: 100%;
      @include wHeight(200);
    }

    > .info-nr {
      text-indent: 2em;
    }

    .container {
      width: 100%;
      @include wHeight(350);
    }
  }
}
</style>