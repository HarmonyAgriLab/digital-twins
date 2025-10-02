<template>
  <div class="controls">
    <button @click="toggleAir" :class="{ active: showAir }">显示空气数据</button>
    <button @click="toggleSoil" :class="{ active: !showAir }">显示土壤数据</button>
  </div>

  <!-- 空气数据显示 -->
  <div class="boxContent" v-if="showAir">
    <div class="contentAir">
      <BgBox :height="280" :width="500" title="空气温度">
        <V3Echarts :key="airChartKey" :options="optionAirTemperature" :height="500" :width="480" />
      </BgBox>
  </div>

    <div class="contentAir">
      <BgBox :height="280" :width="500" title="空气湿度">
        <V3Echarts :key="airChartKey" :options="optionAirHumidity" :height="240" :width="480" />
      </BgBox>
    </div>

    <div class="contentBrief">
      <BgBox :height="150" :width="500" title="土壤PH & NPK（简要）">
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
    <div class="rowBox">
      <BgBox :height="120" :width="240" title="空气温度">
        <div class="data-item">
          <img :src="temperiture" alt="空气温度" class="data-icon" />
          <span>空气温度：{{ airTemp }}℃</span>
        </div>
      </BgBox>
      <BgBox :height="120" :width="240" title="空气湿度">
        <div class="data-item">
          <img :src="humidity" alt="空气湿度" class="data-icon"/>
          <span>空气湿度：{{ airHumid }}%</span>
        </div>
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
        <BgBox :width="280" :height="280" title="土壤NPK值">
          <V3Echarts :options="optionNpkBar" :height="280" :width="240" />
        </BgBox>
      </div>

      <!-- 土壤PH -->
      <div class="contentPH">
        <BgBox :width="230" :height="280" title="土壤pH值">
          <V3Echarts :options="optionPhGauge" :height="280" :width="200" />
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
import Icon from "@/components/Icon/index.vue";
import { getSoilData, getAirData, getLatestAir20, getLatestSoil20 } from '@/api/backend';

import temperiture from "@/assets/img/R-T.png";
import humidity from "@/assets/img/R-C.png";
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
    // 使用备用数据确保界面正常显示
    getLatestSoilDataFallback();
  }
};

/**
 * 土壤数据备用函数
 * 当网络请求失败时提供预设的模拟数据
 */
const getLatestSoilDataFallback = () => {
  console.log('使用土壤数据备用方案');
  latestSoilData.value = {
    temperature: 25.5,
    conductivity: 120.3,
    ph: 6.8,
    n: 180,
    p: 45,
    k: 90
  };
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
    // 添加备用数据处理，确保在网络失败时界面仍能正常显示
    getLatestAirDataFallback();
  }
};

/**
 * 空气数据备用函数
 * 当网络请求失败时提供预设的模拟数据
 */
const getLatestAirDataFallback = () => {
  console.log('使用空气数据备用方案');
  airTemp.value = 26;    // 预设温度值
  airHumid.value = 65;   // 预设湿度值
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
    // 添加备用数据处理，确保在网络失败时界面仍能正常显示
    getFormDataFallback();
  }
};

/**
 * 图表数据备用函数
 * 当网络请求失败时提供预设的模拟数据
 */
const getFormDataFallback = () => {
  console.log('使用图表数据备用方案');
  // 生成20条模拟空气数据
  airDataArr.value = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    air_temp: parseFloat((20 + Math.random() * 10).toFixed(1)),  // 20-30度之间的随机温度，保留一位小数
    air_humid: parseFloat((50 + Math.random() * 30).toFixed(1)), // 50-80%之间的随机湿度，保留一位小数
    device_mac: '00:11:22:33:44:55',
    upload_time: new Date(Date.now() - (19 - index) * 30 * 60000).toISOString() // 每30分钟一条数据
  }));

  // 生成20条模拟土壤数据
  soilDataArr.value = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    soil_humid: parseFloat((40 + Math.random() * 20).toFixed(1)),         // 40-60%之间的随机湿度，保留一位小数
    soil_temp: parseFloat((20 + Math.random() * 10).toFixed(1)),          // 20-30度之间的随机温度，保留一位小数
    soil_conductivity: parseFloat((100 + Math.random() * 50).toFixed(1)), // 100-150之间的随机电导率，保留一位小数
    pH_value: parseFloat((6.0 + Math.random() * 1.5).toFixed(1)),         // 6.0-7.5之间的随机pH值，保留一位小数
    nitrogen: parseFloat((150 + Math.random() * 50).toFixed(1)),          // 150-200ppm之间的随机氮含量，保留一位小数
    phosphorus: parseFloat((30 + Math.random() * 20).toFixed(1)),         // 30-50ppm之间的随机磷含量，保留一位小数
    potassium: parseFloat((80 + Math.random() * 40).toFixed(1)),          // 80-120ppm之间的随机钾含量，保留一位小数
    device_mac: '00:11:22:33:44:55',
    upload_time: new Date(Date.now() - (19 - index) * 30 * 60000).toISOString() // 每30分钟一条数据
  }));
};

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

const updateFormWithoutData = () => { 

  try{
    // 生成空气数据的时间轴列表
    let timeList = generateTimeList(airDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, airDataArr.value.length);
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
    optionSoilStacked.xAxis.data = generateTimeList(soilDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, soilDataArr.value.length);
    // optionSoilStacked.xAxis.data = generateTimeList(soilDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, soilDataArr.value.length);
    // 更新土壤温度图表的系列数据
    (optionSoilStacked.series[0].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_temp).reverse();
    // 更新土壤湿度图表的系列数据
    (optionSoilStacked.series[1].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_humid).reverse();
    // 更新土壤电导率图表的系列数据
    (optionSoilStacked.series[2].data as number[]) = soilDataArr.value.map((item: SoilData) => item.soil_conductivity).reverse();
    // 切换土壤图表的 key，以强制刷新图表
    soilChartKey.value *= -1;

  }catch (error) {
    console.error('获取图表数据失败:', error);
    // 添加备用数据处理，确保在网络失败时界面仍能正常显示
    getFormDataFallback();
  }
  
}
const updateForm = async () => {
  // 获取最新图表数据
  await getFormData();
  // 生成空气数据的时间轴列表
  let timeList = generateTimeList(airDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, airDataArr.value.length);
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
  optionSoilStacked.xAxis.data = generateTimeList(soilDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, soilDataArr.value.length);
  // optionSoilStacked.xAxis.data = generateTimeList(soilDataArr.value[0]?.upload_time?.split(" ")[1]?.substring(0, 5) || "00:00", 30, soilDataArr.value.length);
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
  await updateForm();
  console.log('最新数据获取完毕');
};

const loadLatestDataWithoutData = async () => {
  console.log('开始获取最新数据');
  getLatestSoilDataFallback();
  getLatestAirDataFallback();
  updateFormWithoutData();
  console.log('最新数据获取完毕');
};

const initializeData = async () => {
    // TODO: 接受后端真实数据接口：由于后端没有打开，调用备用接口
    await loadLatestData();
    // await loadLatestDataWithoutData();
    console.log('组件已挂载，开始定时获取数据和更新表单');
  };

let dataFetchTimer: number;
let formUpdateTimer: number;

onMounted(() => {
  
  initializeData();
  // 每分钟获取一次最新数据后更新表单
  //dataFetchTimer = setInterval(loadLatestData, 60 * 1000);
  // TODO:定时器记得打开
  // 每 30 分钟更新一次表单
  //formUpdateTimer = setInterval(updateForm, 30 * 60000);
});

onUnmounted(() => {
  // TODO：取消定时器
  // clearInterval(dataFetchTimer);
  // clearInterval(formUpdateTimer);
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
  width: 100%; /* 修改为百分比宽度以提高自适应性 */
  max-width: 900px; /* 保留最大宽度限制 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 0;
}

.contentAir,  
.content2,
.contentNPK,
.contentPH,
.contentBrief {
  display: flex;
  justify-content: space-between;
  width: 100%; /* 添加宽度以确保自适应 */
}

.contentAir {
  width: 100%;
  height: 282px;
}

.contentTemperatureAndHumidityAndConductivity {
  width: 100%;
  height: 300px;
}

.contentNPK {
  flex: 1; /* 使用弹性布局 */
  min-width: 200px; /* 设置最小宽度 */
  height: 150px;
}

.contentPH {
  flex: 1; /* 使用弹性布局 */
  min-width: 200px; /* 设置最小宽度 */
  height: 150px;
}

.contentBriefAir {
  width: 100%;
  height: 282px;
}

.contentBriefSoil {
  width: 100%;
  height: 100px;
}

.data-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.data-icon {
  width:50px;
  height: 50px;
  font-size: 50px;
}

.temperature-icon {
  color: #ff6b6b; // 红色，表示温度
}

.humidity-icon {
  color: #4ecdc4; // 蓝绿色，表示湿度
}

/* 添加响应式设计 */
@media (max-width: 768px) {
  .rowBox {
    flex-direction: column;
  }
  
  .controls {
    flex-direction: column;
    align-items: center;
  }
  
  .boxContent {
    padding: 5px;
  }
}
</style>