<template>
  <div class="controls">
    <button @click="toggleAir" :class="{ active: showAir }">显示空气数据</button>
    <button @click="toggleSoil" :class="{ active: !showAir }">显示土壤数据</button>
  </div>

  <!-- 空气数据显示 -->
  <div class="boxContent" v-if="showAir">
    <div class="contentAir">
      <BgBox :height="280" :width="500" title="空气温度">
        <V3Echarts :key="airChartKey" :options="optionAirTemperature" :height="240" :width="480" />
      </BgBox>
    </div>

    <div class="contentAir">
      <BgBox :height="280" :width="500" title="空气湿度">
        <V3Echarts :key="airChartKey" :options="optionAirHumidity" :height="240" :width="480" />
      </BgBox>
    </div>

    <div class="contentBrief">
      <BgBox :height="120" :width="500" title="土壤PH & NPK（简要）">
        <p>温度：{{ latestSoilData.temperature.toFixed(1) }}°C</p>
        <p>电导率：{{ latestSoilData.conductivity.toFixed(1) }} ms/cm</p>
        <p>PH：{{ latestSoilData.ph.toFixed(1) }}</p>
        <p>N：{{ latestSoilData.n }} ppm，P：{{ latestSoilData.p }} ppm，K：{{ latestSoilData.k }} ppm</p>
      </BgBox>
    </div>
  </div>

  <!-- 土壤数据显示 -->
  <div class="boxContent" v-else>
    <!-- 空气简要 -->
    <div class="contentBrief">
      <BgBox :height="120" :width="500" title="空气温湿度（简要）">
        <p>空气温度：{{ airTemp }}℃</p>
        <p>空气湿度：{{ airHumid }}%</p>
      </BgBox>
    </div>

    <!-- 土壤温湿度 + 电导率 -->
    <div class="contentTemperatureAndHumidityAndConductivity">
      <BgBox :height="280" :width="500" title="土壤温湿度 & 电导率">
        <V3Echarts :key="soilChartKey" :options="optionSoilStacked" :height="230" :width="450" />
      </BgBox>
    </div>

    <div class="rowBox">
      <!-- 土壤NPK -->
      <div class="contentNPK">
        <BgBox title="土壤NPK值">
          <V3Echarts :options="optionNpkBar" :height="280" :width="240" />
        </BgBox>
      </div>

      <!-- 土壤PH -->
      <div class="contentPH">
        <BgBox title="土壤pH值">
          <V3Echarts :options="optionPhGauge" :height="200" :width="200" />
        </BgBox>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { optionAirTemperature, optionAirHumidity, optionSoilStacked, optionPhGauge, optionNpkBar } from "./echartsOpt";
import V3Echarts from "@/components/V3Echarts/index.vue";
import BgBox from "@/components/bgBox/index.vue";
import { getSoilData, getAirData, getLatestAir20, getLatestSoil20 } from '@/api/backend';

const showAir = ref(false);

const toggleAir = () => {
  showAir.value = true;
};

const toggleSoil = () => {
  showAir.value = false;
};

const latestSoilData = ref({
  temperature: 0,
  conductivity: 0,
  ph: 0,
  n: 0,
  p: 0,
  k: 0,
});

interface AirData {
  id: number;
  air_temp: number;
  air_humid: number;
  device_mac: string;
  upload_time: string;
}

interface SoilData {
  id: number;
  soil_humid: number;
  soil_temp: number;
  soil_conductivity: number;
  pH_value: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  device_mac: string;
  upload_time: string;
}

const soilDataArr = ref<SoilData[]>([])
const airDataArr = ref<AirData[]>([])

const airTemp = ref(0);
const airHumid = ref(0);

const airChartKey = ref(1);
const soilChartKey = ref(1);

const getLatestSoilData = async () => {
  try {
    const res = await getSoilData();
    const latest = res.data[0];
    latestSoilData.value = {
      temperature: latest.temperature_value || 0,
      conductivity: latest.conductivity_value || 0,
      ph: latest.pH_value || 0,
      n: latest.nitrogen || 0,
      p: latest.phosphorus || 0,
      k: latest.potassium || 0,
    };
    console.log('最新土壤数据:', latestSoilData.value);
  } catch (error) {
    console.error('获取土壤数据失败:', error);
  }
};

const getLatestAirData = async () => {
  try {
    console.log('获取最新空气数据');
    const res = await getAirData(); 
    const latest = res.data[0];

    airTemp.value = latest.air_temp || 0;
    airHumid.value = latest.air_humid || 0;

    console.log('最新空气数据:', {
      temperature: airTemp.value,
      humidity: airHumid.value
    });
  } catch (error) {
    console.error('获取空气数据失败:', error);
  }
};

const getFormData = async () => {
  try{
    console.log("获取图表数据")
    const airRes = await getLatestAir20();
    const soilRes = await getLatestSoil20();
    console.log(JSON.stringify(soilRes.data))
    airDataArr.value = airRes.data;
    soilDataArr.value = soilRes.data;
  } catch (error) {
    console.error('获取图标数据失败:', error);
  }
}

const generateTimeList = (lastTime: string, step: number = 60, length: number = 24) => {
  // 将最后的时间字符串（格式为 "HH:mm"）解析为小时和分钟
  const [hours, minutes] = lastTime.split(':').map(num => parseInt(num, 10));
  
  let time = new Date();
  // 设置时间为指定的小时和分钟，并将秒和毫秒置为 0
  time.setHours(hours);
  time.setMinutes(minutes);
  time.setSeconds(0);
  time.setMilliseconds(0);
  
  // 生成一个时间列表，长度为指定的 length，每个时间点相隔一小时
  const timeList = Array.from({ length: length }, (_, i) => {
    const currentTime = new Date(time.getTime() - i * 60 * step * 1000); // 每次减去一小时
    const hour = String(currentTime.getHours()).padStart(2, '0'); // 格式化小时为两位数
    const minute = String(currentTime.getMinutes()).padStart(2, '0'); // 格式化分钟为两位数
    return `${hour}:00`; // 返回格式化的时间字符串
  });
  
  return timeList.reverse(); // 返回时间列表，并按时间顺序排列
}

const updateForm = async () => {
  // 获取最新图表数据
  await getFormData();
  // 生成空气数据的时间轴列表
  let timeList = generateTimeList(airDataArr.value[0].upload_time.split(" ")[1].substring(0, 5), 30, airDataArr.value.length);
  // 更新空气湿度图表的 x 轴数据
  optionAirHumidity.xAxis[0].data = timeList;
  // 更新空气湿度图表的系列数据
  (optionAirHumidity.series[0].data as number[]) = airDataArr.value.map((item: AirData) => item.air_humid).reverse();
  
  // 更新空气温度图表的 x 轴数据
  optionAirTemperature.xAxis.data = timeList;
  // 更新空气温度图表的系列数据
  (optionAirTemperature.series[0].data as number[]) = airDataArr.value.map((item: AirData) => item.air_temp).reverse();
  // 切换空气图表的 key，以强制刷新图表
  airChartKey.value *= -1;
  
  // 生成土壤数据的时间轴列表
  optionSoilStacked.xAxis.data = generateTimeList(soilDataArr.value[0].upload_time.split(" ")[1].substring(0, 5), 30, soilDataArr.value.length);
  // 更新土壤温度图表的系列数据
  (optionSoilStacked.series[0].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_temp).reverse();
  // 更新土壤湿度图表的系列数据
  (optionSoilStacked.series[1].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_humid).reverse();
  // 更新土壤电导率图表的系列数据
  (optionSoilStacked.series[2].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_conductivity).reverse();
  // 切换土壤图表的 key，以强制刷新图表
  soilChartKey.value *= -1;
}

const loadLatestData = async () => {
  console.log('开始获取最新数据');
  await getLatestSoilData();
  await getLatestAirData();
};

let dataFetchTimer: number;
let formUpdateTimer: number;

onMounted(() => {
  const initializeData = async () => {
    await loadLatestData();
    await updateForm();
    console.log('组件已挂载，开始定时获取数据和更新表单');
  };

  initializeData();

  // 每分钟获取一次最新数据后更新表单
  dataFetchTimer = setInterval(loadLatestData, 60 * 1000);

  // 每 30 分钟更新一次表单
  formUpdateTimer = setInterval(updateForm, 30 * 60000);
});

onUnmounted(() => {
  clearInterval(dataFetchTimer);
  clearInterval(formUpdateTimer);
});


</script>


<style lang="scss" scoped>
.rowBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px; /* 可选间距 */
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
  gap: 10px; //  控制每块之间的间距，简单明了
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
  @include wHeight(300);
}

.contentNPK {
  width: 240px;
  @include wHeight(150);
}

.contentPH {
  width: 220px;
  @include wHeight(150);
}

.contentBriefAir {
  @include wHeight(282);
  width: 100%;
}

.contentBriefSoil {
  width: 100%;
  @include wHeight(100);
}

</style>
