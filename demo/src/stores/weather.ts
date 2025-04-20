import { defineStore } from "pinia";

export const useWeatherStore = defineStore(
  "weather", // 第一个参数是 store 的 id
  {
    state: () => ({
      WeatherPm2P5: null, // 初始值为 null
      WeatherData: null,  // 初始值为 null
    }),
    actions: {
      async SetWeatherPm2P5(payload: any) {
        this.$patch({
          WeatherPm2P5: payload,
        });
      },
      async SetWeatherData(payload: any) {
        this.$patch({
          WeatherData: payload,
        });
      },
    },
  }
);