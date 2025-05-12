import axios from 'axios'

// 定义接口返回的数据类型
interface AirData {
  id: number
  air_temp: number
  air_humid: number
  device_mac: string
  upload_time: string
}

// 获取近20条空气数据
export const getAirData = () => axios.get('/air')

// 获取近20条土壤数据
export const getSoilData = () => axios.get('/soil')

// 顶棚合上
export const closeCeiling = () => axios.get('/controll/ceiling/0')

// 顶棚打开
export const openCeiling = () => axios.get('/controll/ceiling/1')

// 关闭风扇
export const closeFan = () => axios.get('/controll/fan/0')

// 打开风扇
export const openFan = () => axios.get('/controll/fan/1')

// 关闭遮阳帘
export const closeCurtain = () => axios.get('/controll/curtain/0')

// 打开遮阳帘
export const openCurtain = () => axios.get('/controll/curtain/1')