/*
 * @Author: your name
 * @Date: 2022-03-01 13:52:12
 * @LastEditTime: 2022-03-30 22:06:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\utils\BPFunction.ts
 */
export const BPFunction = (val: any) => {
  const f = new BPFunctionData();
  f.objectName = "BP_SkyMaterial_4";
  f.functionName = "SetSkyMat";
  f.paramType = BPFuncParamType.String;
  f.paramValue = "mat" + val;
  __g.misc.callBPFunction(f);
};
export const BPFunction_Xray = (val: any) => {
  const f = new BPFunctionData();
  f.objectName = "suidao_3";
  f.functionName = "setXlight";
  f.paramType = BPFuncParamType.String;
  f.paramValue = "True";
  __g.misc.callBPFunction(f);
  // 4EF36D7A4ED2BD3268CF5CB49132A0BC
};
// export const BPFunction_jlg = (boolen: boolean) => {
// 	const f = new BPFunctionData();
// 	f.objectName = "JLG_C_1";
// 	f.functionName = "setJLG";
// 	f.paramType = BPFuncParamType.String;
// 	f.paramValue = boolen ? "True" : "False";
// 	__g.misc.callBPFunction(f);
// };
export const BPFunction_hwzz = (boolen: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "texiao_C_2";
  f.functionName = "C";
  f.paramType = BPFuncParamType.String;
  f.paramValue = boolen ? "True" : "False";
  __g.misc.callBPFunction(f);
};

//入口抬杆
export const BPFunction_taiGanJin = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "BP_taigan_2";
  f.functionName = "JIN";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "True" : "False";
  __g.misc.callBPFunction(f);
};
//出口抬杆
export const BPFunction_taiGanChu = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "BP_taigan_2";
  f.functionName = "CHU";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "True" : "False";
  __g.misc.callBPFunction(f);
};
//防疫-人
export const BPFunction_bpPeople1 = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "BP_People1_6";
  f.functionName = "SETPEOPLE";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "True" : "False";
  __g.misc.callBPFunction(f);
};

//防疫-门
export const BPFunction_bpDoor = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "open_door_C_4";
  f.functionName = "SETDOOR";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "True" : "False";
  __g.misc.callBPFunction(f);
};

export const BPFunction_current = (boolen: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "bp_dx_2";
  f.functionName = "SetDX";
  f.paramType = BPFuncParamType.String;
  f.paramValue = boolen ? "Play" : "OFF";
  __g.misc.callBPFunction(f);
  // const f = new BPFunctionData();
  // f.objectName = "bp_dx_2";
  // f.functionName = "Set DX";
  // f.paramType = BPFuncParamType.String;
  // f.paramValue = boolen ? "True" : "False";
  // __g.misc.callBPFunction(f);
};

export const BPFunction_chai_guang_fu = (boolen: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "chaigf_5";
  f.functionName = "SETGF";
  f.paramType = BPFuncParamType.String;
  f.paramValue = boolen ? "开" : "合";
  __g.misc.callBPFunction(f);
};

export const BPFunction_xuan_zhuan = (val: number) => {
  const f = new BPFunctionData();
  f.objectName = "bp_fy_5";
  f.functionName = "SETYP";
  f.paramType = BPFuncParamType.Float;
  f.paramValue = val;
  __g.misc.callBPFunction(f);
};
export const BPFunction_po_jie = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "bp_FDJ_2";
  f.functionName = "SetOP";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "显" : "隐";
  __g.misc.callBPFunction(f);
};
export const BPFunction_chai_jie = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "bp_FDJ_2";
  f.functionName = "SetCJ";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "开" : "合";
  __g.misc.callBPFunction(f);
};
// 公共安全道路病害
export const BPFunction_DLBH = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "bp_lz_2";
  f.functionName = "SETdlbh";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "true" : "false";
  __g.misc.callBPFunction(f);
};
// 停车占比
export const BPFunction_TCZB = (bool: boolean) => {
  const f = new BPFunctionData();
  f.objectName = "bp_tcc_8";
  f.functionName = "Tccsz";
  f.paramType = BPFuncParamType.String;
  f.paramValue = bool ? "开" : "合";

  __g.misc.callBPFunction(f);
};

export const BPFunction_LWWG = (num: number) => {
  const f = new BPFunctionData();
  f.objectName = "zzjt_ftlwwg_C_12";
  f.functionName = "Setmaterials";
  f.paramType = BPFuncParamType.String;
  f.paramValue = num.toString();
  __g.misc.callBPFunction(f);
};
//  marker
//window rangin

//智慧农业灯光
export const BPFunction_zhny_dg = (num: number) => {
  const f = new BPFunctionData();
  f.objectName = "ZHNY_DG_BP_2";
  f.functionName = "SetQD";
  f.paramType = BPFuncParamType.String;
  f.paramValue = num.toString();
  // console.log(__g.misc.callBPFunction(f));
  __g.misc.callBPFunction(f);
};
export const BPFunction_zhny_tf = (num: number) => {
  const f = new BPFunctionData();
  f.objectName = "ZHNY_TF_BP_2";
  f.functionName = "SetMat";
  f.paramType = BPFuncParamType.String;
  f.paramValue = num.toString();
  __g.misc.callBPFunction(f);

  //
};
export const BPFunction_zhny_fs = (num: number) => {
  const f = new BPFunctionData();
  f.objectName = "ZHNY_FS_BP_2";
  f.functionName = "FYXZ";
  f.paramType = BPFuncParamType.Float;
  f.paramValue = num;
  __g.misc.callBPFunction(f);
};


/*
每个 BPFunction_XXX 函数其实做的事情都一样：
创建一个蓝图函数调用对象（BPFunctionData）；
填写目标对象名（objectName）；
指定调用的函数名（functionName）；
指定参数类型和参数值；
通过 __g.misc.callBPFunction(f) 进行调用。
这个 __g 是一个全局对象，应该是平台提供的 API，callBPFunction 就是远程调用蓝图函数的桥梁.
*/