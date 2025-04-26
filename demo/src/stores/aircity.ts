import { defineStore } from "pinia";
import { ref } from "vue";
import { acceptHMRUpdate } from "pinia";  // 导入 acceptHMRUpdate

interface AirCityState {
  AirCityPlayer: any | null;
  AirCityApi: any | null;
  TreeInfo: any | null;
  IsOnReady: boolean;
}

export const useAirCityStore = defineStore("aircity", () => {
  const state = ref<AirCityState>({
    AirCityPlayer: null,
    AirCityApi: null,
    TreeInfo: null,
    IsOnReady: false,
  });

  const SetAirCityPlayer = (payload: any) => (state.value.AirCityPlayer = payload);
  const SetAirCityApi = (payload: any) => (state.value.AirCityApi = payload);
  const SetTreeInfo = (payload: any) => (state.value.TreeInfo = payload);
  const SetIsOnReady = (payload: boolean) => (state.value.IsOnReady = payload);

  return { 
    ...state.value,
    SetAirCityPlayer,
    SetAirCityApi,
    SetTreeInfo,
    SetIsOnReady 
  };
});

// Vue CLI 支持 HMR
if (module.hot) {
  module.hot.accept(
    // HMR 更新 Pinia store
    acceptHMRUpdate(useAirCityStore, module.hot)
  );
}