<template>

  <div class="controls">
    <button @click="toggleAir" :disabled="showAir">显示空气数据</button>
    <button @click="toggleSoil" :disabled="!showAir">显示土壤数据</button>
  </div>

  <!-- 空气数据显示 -->
  <div class="boxContent" v-if="showAir">
    <div class="contentAir">
      <!-- * -->
      <BgBox :height="280" :width="500" title="空气温度">
      <!-- <BgBox title="空气温度" style="width: 370px; height: 200px"> -->
        <V3Echarts :options="optionAirTemperature" :height="240" :width="480"/>
      </BgBox> 

    </div>

    <div class="contentAir" >
      <BgBox :height="280" :width="500" title="空气湿度">
        <V3Echarts :options="optionAirHumidity" :height="240" :width="480"/>
      </BgBox>
    </div>

    <div class="contentBrief">
      <BgBox :height="120" :width="500" title="土壤PH & NPK（简要）">
        <p>温度：{{ latestSoilData.temperature }}°C</p>
        <p>电导率：{{ latestSoilData.conductivity }} ms/cm</p>
        <p>PH：{{ latestSoilData.ph }}</p>
        <p>N：{{ latestSoilData.n }} ppm，P：{{ latestSoilData.p }} ppm，K：{{ latestSoilData.k }} ppm</p>
      </BgBox>
    </div>

  </div>

<!-- 土壤数据显示 -->
<div class="boxContent" v-else>
  <!-- 空气简要 -->
  <div class="contentBrief">
    <BgBox :height="80" title="空气温湿度（简要）">
      <p>空气温度：12°C</p>
      <p>空气湿度：12%</p>
    </BgBox>
  </div>

  <!-- 土壤温湿度 + 电导率 -->
  <div class="contentTemperatureAndHumidityAndConductivity">
    <BgBox title="土壤温湿度 & 电导率">
      <V3Echarts :options="optionSoilStacked" :height="230" :width="450" />
    </BgBox>
  </div>
  

  <!-- 🌟 新增：土壤pH 和 NPK 并排展示 -->
  <div class="rowBox">
    <!-- 土壤 pH -->


    <!-- 土壤 NPK -->
    <div class="contentNPK" >
      <BgBox title="土壤NPK值">
        <V3Echarts :options="optionNpkBar" :height="260" :width="220" />
      </BgBox>
    </div>

    <div class="contentPH" >
      <BgBox title="土壤pH值">
        <V3Echarts :options="optionPhGauge" :height="200" :width="200" />
      </BgBox>
    </div>
  </div>

</div>



</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {optionAirTemperature,optionAirHumidity } from "./echartsOpt";
import V3Echarts from "@/components/V3Echarts/index.vue";
import BgBox from "@/components/bgBox/index.vue";
import { optionSoilStacked, optionTempLine, optionConductivityLine, optionPhGauge, optionNpkBar } from "./echartsOpt";
import { getSoilData } from '@/api/backend'

const showAir = ref(true); // true: 空气，false: 土壤

const toggleAir = () => {
  showAir.value = true;
  console.log("showAir", showAir.value);
};

const toggleSoil = () => {
  showAir.value = false;
  console.log("showAir", showAir.value);
};

// 定义响应式变量存储最新数据
const latestSoilData = ref({
  temperature: 0,
  conductivity: 0,
  ph: 0,
  n: 0,
  p: 0,
  k: 0
});

onMounted(async () => {
  console.log('组件挂载成功');
  try {
    const res = await getSoilData();
    // 获取最新的一条数据（数组第一条）
    const latest = res.data[0];
    
    // 打印原始数据
    console.log('原始数据:', latest);
    
    // 打印每个具体字段
    console.log('土壤温度:', latest.temperature_value);
    console.log('土壤电导率:', latest.conductivity_value);
    console.log('土壤PH值:', latest.pH_value);
    console.log('N值:', latest.nitrogen);
    console.log('P值:', latest.phosphorus);
    console.log('K值:', latest.potassium);
    
    // 更新响应式数据
    latestSoilData.value = {
      temperature: latest.temperature_value || 0,
      conductivity: latest.conductivity_value || 0,
      ph: latest.pH_value || 0,
      n: latest.nitrogen || 0,
      p: latest.phosphorus || 0,
      k: latest.potassium || 0
    };
  } catch (error) {
    console.error('获取土壤数据失败:', error);
  }
});



</script>

<style lang="scss" scoped>
.rowBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px; /* 可选间距 */
}

.controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  button {
    padding: 8px 20px;
    background-color: #4CAF50; // 生态绿色
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover:not(:disabled) {
      background-color: #66bb6a; // 浅绿 hover 色
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active:not(:disabled) {
      transform: scale(0.98);
    }

    &:disabled {
      background-color: #c8e6c9; // 淡绿色
      color: #888;
      cursor: not-allowed;
      opacity: 0.8;
    }
  }
}

.cardBox {
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.boxContent {
  @include Width(900);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; // 👈 控制每块之间的间距，简单明了
  padding: 10px 0; // 给上下加一点空隙
}

.contentAir,
.content2,
.contentNPK,
.contentPH,
.contentBrief {
  display: flex;
  justify-content: space-between;
}

.contentAir {
  @include wHeight(282);
  width: 100%;
}

.contentTemperatureAndHumidityAndConductivity {
  width: 100%;
  @include wHeight(300);
}

.contentNPK {
  width: 220px;
  @include wHeight(150);
}

.contentPH {
  width: 220px;
  @include wHeight(150);
}

.contentBriefAir {
  width: 100%;
  @include wHeight(100);
}

.contentBriefSoil {
  width: 100%;
  @include wHeight(100);
}

</style>
