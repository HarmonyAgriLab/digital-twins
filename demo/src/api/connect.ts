
import qs from "qs";
import axios from "@/http/HTTP";
import { Service } from "@/http/service";
// 请求接口示例
export const getApiData = () => {
    return axios.get(Service.mdoel1 + "/test");
};
// 请求获取天气id接口
export const getWeatherCityId = (name: any) => {
    return axios.get(
        Service.WeatherId +
        `/v2/city/lookup?location=${name}&key=c9ababc26a504434b6fc709c2005e503`
    );
};
// 请求获取天气接口
export const getWeather = (id: any) => {
    return axios.get(
        Service.WeatherData +
        `/v7/weather/now?location=${id}&key=c9ababc26a504434b6fc709c2005e503`
    );
};
// 请求获取Pm2P5接口
export const getWeatherPm2P5 = (id: any) => {
    return axios.get(
        Service.WeatherData +
        `/v7/air/now?location=${id}&key=c9ababc26a504434b6fc709c2005e503`
    );
};
