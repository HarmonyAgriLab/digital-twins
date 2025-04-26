/*
 * @Author: your name
 * @Date: 2022-03-01 13:52:12
 * @LastEditTime: 2022-03-30 22:06:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\utils\BPFunction.ts
 */

// 定义一个蓝图函数 BPFunction
export const BPFunction = (val: any) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "BP_SkyMaterial_4"; // 设置目标对象名
  f.functionName = "SetSkyMat"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = "mat" + val; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义一个蓝图函数 BPFunction_Xray
export const BPFunction_Xray = (val: any) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "suidao_3"; // 设置目标对象名
  f.functionName = "setXlight"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = "True"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义一个蓝图函数 BPFunction_hwzz
export const BPFunction_hwzz = (boolen: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "texiao_C_2"; // 设置目标对象名
  f.functionName = "C"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = boolen ? "True" : "False"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义入口抬杆函数 BPFunction_taiGanJin
export const BPFunction_taiGanJin = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "BP_taigan_2"; // 设置目标对象名
  f.functionName = "JIN"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "True" : "False"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义出口抬杆函数 BPFunction_taiGanChu
export const BPFunction_taiGanChu = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "BP_taigan_2"; // 设置目标对象名
  f.functionName = "CHU"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "True" : "False"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义防疫-人函数 BPFunction_bpPeople1
export const BPFunction_bpPeople1 = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "BP_People1_6"; // 设置目标对象名
  f.functionName = "SETPEOPLE"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "True" : "False"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义防疫-门函数 BPFunction_bpDoor
export const BPFunction_bpDoor = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "open_door_C_4"; // 设置目标对象名
  f.functionName = "SETDOOR"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "True" : "False"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义当前函数 BPFunction_current
export const BPFunction_current = (boolen: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_dx_2"; // 设置目标对象名
  f.functionName = "SetDX"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = boolen ? "Play" : "OFF"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义拆光伏函数 BPFunction_chai_guang_fu
export const BPFunction_chai_guang_fu = (boolen: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "chaigf_5"; // 设置目标对象名
  f.functionName = "SETGF"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = boolen ? "开" : "合"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义旋转函数 BPFunction_xuan_zhuan
export const BPFunction_xuan_zhuan = (val: number) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_fy_5"; // 设置目标对象名
  f.functionName = "SETYP"; // 设置调用的函数名
  f.paramType = BPFuncParamType.Float; // 设置参数类型为浮点数
  f.paramValue = val; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义破解函数 BPFunction_po_jie
export const BPFunction_po_jie = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_FDJ_2"; // 设置目标对象名
  f.functionName = "SetOP"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "显" : "隐"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义拆解函数 BPFunction_chai_jie
export const BPFunction_chai_jie = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_FDJ_2"; // 设置目标对象名
  f.functionName = "SetCJ"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "开" : "合"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义公共安全道路病害函数 BPFunction_DLBH
export const BPFunction_DLBH = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_lz_2"; // 设置目标对象名
  f.functionName = "SETdlbh"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "true" : "false"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义停车占比函数 BPFunction_TCZB
export const BPFunction_TCZB = (bool: boolean) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "bp_tcc_8"; // 设置目标对象名
  f.functionName = "Tccsz"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = bool ? "开" : "合"; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义 LWWG 函数 BPFunction_LWWG
export const BPFunction_LWWG = (num: number) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "zzjt_ftlwwg_C_12"; // 设置目标对象名
  f.functionName = "Setmaterials"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = num.toString(); // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义智慧农业灯光函数 BPFunction_zhny_dg
export const BPFunction_zhny_dg = (num: number) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "ZHNY_DG_BP_2"; // 设置目标对象名
  f.functionName = "SetQD"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = num.toString(); // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义智慧农业通风函数 BPFunction_zhny_tf
export const BPFunction_zhny_tf = (num: number) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "ZHNY_TF_BP_2"; // 设置目标对象名
  f.functionName = "SetMat"; // 设置调用的函数名
  f.paramType = BPFuncParamType.String; // 设置参数类型为字符串
  f.paramValue = num.toString(); // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};

// 定义智慧农业风速函数 BPFunction_zhny_fs
export const BPFunction_zhny_fs = (num: number) => {
  const f = new BPFunctionData(); // 创建蓝图函数调用对象
  f.objectName = "ZHNY_FS_BP_2"; // 设置目标对象名
  f.functionName = "FYXZ"; // 设置调用的函数名
  f.paramType = BPFuncParamType.Float; // 设置参数类型为浮点数
  f.paramValue = num; // 设置参数值
  __g.misc.callBPFunction(f); // 调用蓝图函数
};
