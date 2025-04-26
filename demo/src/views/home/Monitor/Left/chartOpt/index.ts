// import * as echarts from "echarts";
// import { LINE_TOOLTIP, LEGEND, XAXIS_NAME, AXIS_LABEL, YAXIS_NAME } from '@/utils/chartConfig'
// import _ from "lodash";

// const total = 0;
// export const option6 = {
//     // backgroundColor: "transparent",
//     graphic: {
//         elements: [
//             {
//                 type: "image",
//                 z: 3,
//                 style: {
//                     image: require("@/assets/images/one/leftinfo_infocircle_bg@2x.png"),
//                     width: 105,
//                     height: 105,
//                     // stroke: "",
//                     lineWidth: 10,
//                 },
//                 left: "15",
//                 top: "center",
//             },
//         ],
//     },

//     tooltip: {
//         show: true,
//     },
//     series: [
//         {
//             type: "pie",
//             radius: ["55%", "65%"],
//             center: ["18%", "50%"],
//             hoverAnimation: true,
//             z: 10,
//             label: {
//                 position: "center",
//                 formatter: (e: any) => {
//                     return "{total|1565}\n安全运行天数";
//                 },
//                 rich: {
//                     total: {
//                         fontSize: 26,
//                         color: "#fff",
//                         fontFamily: "Digital",
//                     },
//                 },
//                 color: "#fff",
//                 fontSize: 12,
//                 lineHeight: 30,
//             },
//             data: [
//                 {
//                     value: 4,
//                     name: "终止",
//                     itemStyle: {
//                         color: "rgba(87, 132, 117, 0.56)",
//                         borderColor: "rgba(184,255,241,0.32)",
//                         borderWidth: 1,
//                     },
//                 },
//                 {
//                     value: 4,
//                     name: "故障",
//                     itemStyle: {
//                         color: "rgba(87, 132, 117, 0.56)",
//                         borderColor: "rgba(184,255,241,0.32)",
//                         borderWidth: 1,
//                     },
//                 },
//                 {
//                     value: 18,
//                     name: "正常",
//                     itemStyle: {
//                         color: "rgba(87, 132, 117, 0.56)",
//                         borderColor: "rgba(184,255,241,0.32)",
//                         borderWidth: 1,
//                     },
//                 },
//             ],
//             labelLine: {
//                 show: false,
//             },
//         },
//         // {
//         //   type: "pie",
//         //   radius: ["50%", "70%"],
//         //   center: ["25%", "50%"],
//         //   hoverAnimation: false,
//         //   label: {
//         //     show: false,
//         //   },
//         //   data: [
//         //     {
//         //       value: 1867376,
//         //       name: "终止",
//         //       itemStyle: {
//         //         color: "rgba(0,0,0,0.54)",
//         //         borderWidth: 0.5,
//         //         borderColor: "rgba(255, 255, 255, 0.23)",
//         //       },
//         //     },
//         //   ],
//         //   labelLine: {
//         //     show: false,
//         //   },
//         // },
//     ],
// };
// // Object.assign(option6, {
// //   legend: {
// //     orient: "vertical",
// //     show: true,
// //     right: "10%",
// //     y: "center",
// //     itemWidth: 8,
// //     itemHeight: 8,
// //     itemGap: 30,
// //     textStyle: {
// //       color: "#fff",
// //       fontSize: 14,
// //       lineHeight: 20,
// //       rich: {
// //         percent: {
// //           color: "#fff",
// //           fontSize: 16,
// //         },
// //       },
// //     },
// //     formatter: (name: string) => {
// // 	    const options = option6;
// // 	    const series: any = options.series[0];
// // 	    if (total === 0) {
// // 		    total = series.data.reduce((pre: number, curr: any) => {
// // 			    return pre + curr.value;
// // 		    }, 0);
// // 	    }
// // 	    const element = series.data.find((item: any) => {
// // 		    return item.name === name;
// // 	    });
// //
// // 	    const result = ((+element.value / total) * 100).toFixed(2);
// //
// // 	    const num = +element.value;
// // 	    let formatterStr = `${name}\r\r\r\r${num}\r\r\r\r`;
// // 	    if (num < 10) {
// // 		    formatterStr += "\r\r";
// // 	    }
// // 	    formatterStr += `{percent|${result}%}`;
// // 	    return formatterStr;
// //     },
// // 	  // backgroundColor: 'rgba(216,216,216,0.77)',
// // 	  // borderRadius: 13,
// //   },
// // });

// const xLabel = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
// const dataValue = ["3.7", "5.8", "5.1", "6.3", "7.1", "3.8", "4.6"];

// export const option1 = {
//     // backgroundColor:'#000237',
//     tooltip: {
//         show: false,
//         trigger: "axis",
//         backgroundColor: "rgba(0,0,0,0.6)",
//         textStyle: {
//             color: "#fff",
//         },
//         borderWidth: 0,
//         axisPointer: {
//             // lineStyle: {
//             //     color: 'rgb(126,199,255)',
//             // },
//         },
//     },
//     legend: {
//         show: false,
//         textStyle: {
//             color: "#fff",
//         },
//         // right: 'center',
//         top: "2%",
//         right: "5%",
//         data: [
//             {
//                 name: "准点率",
//             },
//             {
//                 name: "平均准点率",
//             },
//         ],
//     },
//     grid: {
//         top: "17%",
//         left: "10%",
//         right: "12%",
//         bottom: "10%",
//         containLabel: true,
//     },
//     xAxis: [
//         {
//             type: "category",
//             boundaryGap: false,
//             axisLine: {
//                 //坐标轴轴线相关设置。数学上的x轴
//                 show: true,
//                 lineStyle: {
//                     color: "rgba(255,255,255,0.3)",
//                 },
//             },
//             axisLabel: {
//                 //坐标轴刻度标签的相关设置
//                 color: "#ccc",
//                 padding: 16,
//                 fontSize: 14,
//             },
//             splitLine: {
//                 show: false,
//                 lineStyle: {
//                     color: "rgba(255,255,255,0.3)",
//                 },
//             },
//             axisTick: {
//                 show: false,
//             },
//             data: xLabel,
//         },
//     ],
//     yAxis: [
//         {
//             // min: 1200,
//             // max: 1700,
//             interval: 2,
//             type: "value",
//             splitLine: {
//                 show: true,
//                 lineStyle: {
//                     color: "rgba(255,255,255,0.2)",
//                 },
//             },
//             axisLine: {
//                 show: false,
//                 lineStyle: {
//                     color: "#233653",
//                 },
//             },
//             axisLabel: {
//                 show: true,
//                 color: "#ccc",
//                 // padding: '0 16 0 0',
//                 formatter: function (value: any, index: number) {
//                     // value大于1000时除以1000并拼接k，小于1000按原格式显示
//                     if (value >= 100) {
//                         value = value / 100 + "00";
//                     } else if (value < 100) {
//                         value;
//                     }
//                     return value;
//                 },
//             },
//             axisTick: {
//                 show: false,
//             },
//         },
//     ],
//     series: [
//         {
//             name: "准点率",
//             type: "line",
//             symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
//             showAllSymbol: false,
//             symbolSize: 6,
//             smooth: true,
//             showSymbol: false,
//             lineStyle: {
//                 width: 1,
//                 color: "rgba(255,255,255,0.3)", // 线条颜色
//             },
//             itemStyle: {
//                 show: false,
//                 color: "rgb(42,191,250)",
//             },
//             areaStyle: {
//                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
//                 color: new echarts.graphic.LinearGradient(
//                     0,
//                     0,
//                     0,
//                     1,
//                     [
//                         {
//                             offset: 0,
//                             color: "#FB8154",
//                         },
//                         {
//                             offset: 0.2,
//                             color: "#64BDFF99",
//                         },
//                         {
//                             offset: 0.5,
//                             color: "#696CFF30",
//                         },
//                     ],
//                     false
//                 ),
//             },
//             data: dataValue,

//             markPoint: {
//                 symbolSize: 8,
//                 label: {
//                     color: "#fff",
//                     position: "top",
//                     backgroundColor: "rgba(0,0,0,0.5)",
//                     padding: [6, 15, 4, 15],
//                     fontSize: 10,
//                     borderRadius: 10,
//                     borderColor: "rgba(255,255,255,0.38)",
//                     borderWidth: 0.5,
//                 },
//                 itemStyle: { color: "#FFB262", borderWidth: 1 },
//                 symbol: "emptyCircle",
//                 data: [
//                     {
//                         name: "最大值",
//                         type: "max",
//                     },
//                 ],
//             },
//             markLine: {
//                 lineStyle: {
//                     width: 1,
//                     color: {
//                         type: "linear",
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [
//                             {
//                                 offset: 0,
//                                 color: "#FFA648", // 0% 处的颜色
//                             },
//                             {
//                                 offset: 0.8,
//                                 color: "#ffffff30", // 100% 处的颜色
//                             },
//                             {
//                                 offset: 1,
//                                 color: "#ffffff00", // 100% 处的颜色
//                             },
//                         ],
//                         global: false, // 缺省为 false
//                     },
//                     type: "solid",
//                 },
//                 data: [
//                     [
//                         { coord: [4, 0] }, // [x第几个（从0开始），y轴起始点 ]
//                         { coord: [4, 8] }, // [x第几个（从0开始），y轴起始点 ]
//                     ],
//                 ],
//                 silent: true, // 鼠标悬停事件, true悬停不会出现实线
//                 symbol: "none", // 去掉箭头
//             },
//         },
//         {
//             name: "平均准点率",
//             type: "line",
//             showAllSymbol: true,
//             symbol: "none",
//             itemStyle: {
//                 color: "#FFBE0F",
//             },
//             lineStyle: {
//                 width: 1,
//                 type: "dashed",
//                 color: "#FFBE0F",
//                 shadowColor: "#FFF500",
//                 shadowBlur: 12,
//             },
//             data: (() => {
//                 const arr: string[] = Array(7);
//                 arr.fill(
//                     (
//                         dataValue.reduce((pre: number, cur: string) => {
//                             return pre + +cur;
//                         }, 0) / 7
//                     ).toFixed(2)
//                 );
//                 return arr;
//             })(),
//         },
//     ],
// };

// export const option5 = {
//     tooltip: {
//         trigger: "axis",
//         axisPointer: {
//             type: "shadow",
//             textStyle: {
//                 color: "#fff",
//                 fontSize: "26",
//             },
//         },
//     },
//     legend: {
//         top: "0%",
//         right: "0%",
//         data: ["老人", "儿童"],
//         textStyle: {
//             fontSize: 12,
//             color: "#fff",
//         },
//         icon: "circle",
//     },
//     grid: {
//         top: 20,
//         left: "20%",
//         bottom: 20,
//         right: 60,
//     },
//     xAxis: [
//         {
//             nameTextStyle: {
//                 color: "#ccc",
//                 fontSize: 12,
//                 padding: [0, 0, 0, -5],
//             },
//             max: function (value: any) {
//                 if (value.max < 5) {
//                     return 5;
//                 } else {
//                     return value.max;
//                 }
//             },
//             type: "value",
//             axisLine: {
//                 show: false,
//             },
//             axisLabel: {
//                 color: "#ccc",
//                 fontSize: 12,
//                 margin: 5,
//             },
//             splitLine: {
//                 show: false,
//             },
//             axisTick: {
//                 show: false,
//             },
//         },
//     ],
//     yAxis: [
//         {
//             type: "category",
//             axisTick: {
//                 show: false,
//             },
//             axisLine: {
//                 show: false,
//             },
//             axisLabel: {
//                 color: "#ccc",
//                 fontSize: 14,
//                 margin: 21,
//                 fontWeight: "bold",
//             },
//             data: ["一周", "二周", "三周", "四周"],
//         },
//     ],
//     series: [
//         {
//             name: "老人",
//             type: "bar",
//             label: {
//                 show: false,
//                 position: "top",
//                 fontSize: 14,
//                 color: "#fff",
//                 fontWeight: "bold",
//             },
//             barMaxWidth: 10,
//             itemStyle: {
//                 color: {
//                     type: "linear",
//                     x: 0,
//                     y: 0,
//                     x2: 1,
//                     y2: 0,
//                     colorStops: [
//                         {
//                             offset: 0,
//                             color: "#3DC3F000", // 0% 处的颜色
//                         },
//                         {
//                             offset: 1,
//                             color: "#CCF2FFB0", // 100% 处的颜色
//                         },
//                     ],
//                 },
//             },
//             // barGap: 2,
//             data: [60, 110, 180, 100],
//         },
//         {
//             name: "儿童",
//             type: "bar",
//             label: {
//                 show: false,
//                 position: "top",
//                 fontSize: 14,
//                 color: "#fff",
//                 fontWeight: "bold",
//             },
//             barMaxWidth: 10,
//             itemStyle: {
//                 color: {
//                     type: "linear",
//                     x: 0,
//                     y: 0,
//                     x2: 1,
//                     y2: 0,
//                     colorStops: [
//                         {
//                             offset: 0,
//                             color: "#3D8BF000", // 0% 处的颜色
//                         },
//                         {
//                             offset: 1,
//                             color: "#CCE2FFB0", // 100% 处的颜色
//                         },
//                     ],
//                 },
//             },
//             data: [90, 130, 170, 130],
//         },
//     ],
// };

// export const option7 = () => {
//     const xData = ["东", "东南", "南", "西南", "西", "西北", "北"];
//     const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
//     const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40].map(
//         (item) => ~~((item + 18) * 1.1)
//     );
//     const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];
//     return {
//         // backgroundColor: '#fff',
//         title: {
//             text: "每月车辆违章类型占比",
//             x: "center",
//             top: "15px",
//             textStyle: {
//                 color: "#ccc",
//                 fontWeight: 500,
//                 fontSize: 18,
//             },
//             show: false,
//         },
//         grid: {
//             top: "15%",
//             left: "3%",
//             right: "8%",
//             bottom: "10%",
//             containLabel: true,
//         },
//         tooltip: {
//             show: true,
//             trigger: "axis",
//             backgroundColor: "rgba(0,0,0,0.6)",
//             borderColor: "rgba(0,0,0,0)",
//             textStyle: {
//                 color: "#fff",
//             },
//             // formatter: function (params: any) {
//             // 	return (
//             // 			params[0].name +
//             // 			'<br/>' +
//             // 			params[0].marker +
//             // 			params[0].seriesName +
//             // 			' : ' +
//             // 			params[0].value +
//             // 			'<br/>' +
//             // 			params[1].marker +
//             // 			params[1].seriesName +
//             // 			' : ' +
//             // 			params[1].value +
//             // 			'%' +
//             // 			'<br/>' +
//             // 			params[2].marker +
//             // 			params[2].seriesName +
//             // 			' : ' +
//             // 			params[2].value +
//             // 			'%'
//             // 	);
//             // },
//             axisPointer: {
//                 lineStyle: {
//                     color: {
//                         type: "linear",
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [
//                             {
//                                 offset: 0,
//                                 color: "rgba(0, 255, 233,0)",
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: "rgba(255, 255, 255,1)",
//                             },
//                             {
//                                 offset: 1,
//                                 color: "rgba(0, 255, 233,0)",
//                             },
//                         ],
//                         global: false,
//                     },
//                 },
//             },
//         },
//         xAxis: [
//             {
//                 type: "category",
//                 axisLine: {
//                     show: true,
//                     color: "#aaa",
//                 },
//                 axisTick: {
//                     show: false,
//                 },
//                 axisLabel: {
//                     color: "#aaa",
//                     width: 100,
//                 },
//                 splitLine: {
//                     show: false,
//                 },
//                 boundaryGap: false,
//                 data: xData,
//             },
//         ],

//         yAxis: [
//             {
//                 type: "value",
//                 splitLine: {
//                     show: true,
//                     lineStyle: {
//                         type: "dashed", //虚线
//                         color: "#00BFF3",
//                         opacity: 0,
//                     },
//                 },
//                 axisLine: {
//                     show: false,
//                 },
//                 axisLabel: {
//                     show: true,
//                     margin: 20,
//                     color: "#ccc",
//                 },
//                 axisTick: {
//                     show: false,
//                 },
//             },
//             {
//                 type: "value",
//                 position: "right",
//                 axisLabel: {
//                     formatter: "{value}%", //使图变成百分比形式
//                     color: "#ccc",
//                 },
//                 splitLine: {
//                     //网格线显不显示
//                     show: false,
//                 },
//                 axisLine: {
//                     show: false,
//                 },
//                 axisTick: {
//                     show: false,
//                 },
//             },
//         ],
//         series: [
//             {
//                 name: "违章次数2",
//                 type: "bar",
//                 stack: "bb",
//                 barMaxWidth: 8,
//                 // barGap: "10%",
//                 data: tq2.map((item, index) => {
//                     return {
//                         value: item,
//                         itemStyle: {
//                             borderRadius: 0,
//                             color: "rgba(255, 247, 210, 0.32)",
//                             borderWidth: 1,
//                             borderColor: "rgba(255, 253, 207, 1)",
//                         },
//                     };
//                 }),
//             },
//             {
//                 name: "违章次数",
//                 type: "bar",
//                 stack: "总量",
//                 barMaxWidth: 8,
//                 // barGap: "10%",
//                 data: tq.map((item, index) => {
//                     return {
//                         value: item,
//                         itemStyle: {
//                             borderRadius: 0,
//                             color: "rgba(163, 240, 220, 0.2)",
//                             borderWidth: 1,
//                             borderColor: "rgba(161, 255, 228, 1)",
//                         },
//                     };
//                 }),
//             },
//             {
//                 name: "在馆人数",
//                 type: "line",
//                 data: tq1,
//                 symbolSize: 6,
//                 symbol: "emptyCircle",
//                 lineStyle: {
//                     color: "rgba(255,255,255,0.5)",
//                 },

//                 itemStyle: {
//                     color: "#fff",
//                     borderWidth: 1,
//                     borderColor: "rgba(255,255,255,0.5)",
//                     decal: {
//                         symbol: "circle",
//                         symbolSize: 36,
//                         color: "rgba(255,255,255,0.5)",
//                         backgroundColor: "rgba(255,255,255,0.5)",
//                     },
//                 },
//             },
//             // {
//             // 	name: 'aaa',
//             // 	type: "scatter",
//             // 	symbolSize: 30,
//             // 	itemStyle: {
//             // 		color: {
//             // 			type: "radial",
//             // 			r: 1,
//             // 			colorStops: [
//             // 				{
//             // 					offset: 0,
//             // 					color: "#DC9E6A",
//             // 				},
//             // 				{
//             // 					offset: 1,
//             // 					color: "#DC9E6A",
//             // 				},
//             // 			],
//             // 			global: false,
//             // 		},
//             // 	},
//             // 	silent: true,
//             // 	data: tq1,
//             //
//             // },
//         ],
//     };
// };

// export const Option8 = () => {
//     return {
//         title: {
//             show: false,
//             text: "",
//             textStyle: {
//                 align: "center",
//                 color: "#fff",
//                 fontSize: 20,
//             },
//             top: "5%",
//             left: "center",
//         },
//         legend: {
//             show: true,
//             textStyle: {
//                 color: "#fff",
//             },
//             top: "2%",
//             right: "2%",
//             icon: "rect",
//         },
//         tooltip: {
//             trigger: "axis",
//             axisPointer: {
//                 lineStyle: {
//                     color: {
//                         type: "linear",
//                         x: 0,
//                         y: 0,
//                         x2: 0,
//                         y2: 1,
//                         colorStops: [
//                             {
//                                 offset: 0,
//                                 color: "rgba(0, 255, 233,0)",
//                             },
//                             {
//                                 offset: 0.5,
//                                 color: "rgba(255, 255, 255,1)",
//                             },
//                             {
//                                 offset: 1,
//                                 color: "rgba(0, 255, 233,0)",
//                             },
//                         ],
//                         global: false,
//                     },
//                 },
//             },
//         },
//         grid: {
//             top: "10%",
//             left: "10%",
//             right: "5%",
//             bottom: "10%",
//             containLabel: true,
//         },
//         xAxis: {
//             type: "category",
//             axisLine: {
//                 show: true,
//                 color: "#aaa",
//             },
//             axisTick: {
//                 show: false,
//             },
//             axisLabel: {
//                 color: "#aaa",
//                 width: 100,
//             },
//             splitLine: {
//                 show: false,
//             },
//             boundaryGap: false,
//             data: ["1月", "2月", "3月", "4月", "5月", "6月"],
//         },

//         yAxis: [
//             {
//                 type: "value",
//                 splitLine: {
//                     show: true,
//                     lineStyle: {
//                         type: "dashed", //虚线
//                         color: "#00BFF3",
//                         opacity: 0,
//                     },
//                 },
//                 axisLine: {
//                     show: false,
//                 },
//                 axisLabel: {
//                     show: true,
//                     margin: 20,
//                     color: "#ccc",
//                 },
//                 axisTick: {
//                     show: false,
//                 },
//             },
//         ],
//         series: [
//             {
//                 name: "A相电流",
//                 type: "line",
//                 // smooth: true, //是否平滑
//                 showAllSymbol: true,
//                 // symbol: 'image://./static/images/guang-circle.png',
//                 symbol: "circle",
//                 symbolSize: 5,
//                 lineStyle: {
//                     color: "rgba(255,234,186,1)",
//                 },
//                 label: {
//                     show: false,
//                     position: "top",
//                     color: "rgba(255,234,186,1)",
//                 },

//                 itemStyle: {
//                     color: "rgba(255,234,186,1)",
//                     borderColor: "rgba(255,234,186,1)",
//                     borderWidth: 3,
//                     shadowColor: "rgba(255,234,186,0.3)",
//                     shadowBlur: 0,
//                     shadowOffsetY: 2,
//                     shadowOffsetX: 2,
//                 },
//                 tooltip: {
//                     show: false,
//                 },
//                 areaStyle: {
//                     color: new echarts.graphic.LinearGradient(
//                         0,
//                         0,
//                         0,
//                         1,
//                         [
//                             {
//                                 offset: 0,
//                                 color: "rgba(255,234,186,0.3)",
//                             },
//                             {
//                                 offset: 0.6,
//                                 color: "rgba(255,234,186,0)",
//                             },
//                             {
//                                 offset: 1,
//                                 color: "rgba(0,202,149,0)",
//                             },
//                         ],
//                         false
//                     ),
//                     shadowColor: "rgba(0,202,149, 0.9)",
//                     shadowBlur: 20,
//                 },
//                 data: [256, 165, 384, 295, 263, 263],
//             },
//             {
//                 name: "B相电流",
//                 type: "line",
//                 // smooth: true, //是否平滑
//                 showAllSymbol: true,
//                 // symbol: 'image://./static/images/guang-circle.png',
//                 symbol: "circle",
//                 symbolSize: 5,
//                 lineStyle: {
//                     color: "rgba(137, 255, 220, 1)",
//                 },
//                 label: {
//                     show: false,
//                     position: "top",
//                     color: "rgba(137, 255, 220, 1)",
//                 },

//                 itemStyle: {
//                     color: "rgba(137, 255, 220, 1)",
//                     borderColor: "rgba(137, 255, 220, 1)",
//                     borderWidth: 3,
//                     shadowColor: "rgba(137, 255, 220, .3)",
//                     shadowBlur: 0,
//                     shadowOffsetY: 2,
//                     shadowOffsetX: 2,
//                 },
//                 tooltip: {
//                     show: false,
//                 },
//                 areaStyle: {
//                     color: new echarts.graphic.LinearGradient(
//                         0,
//                         0,
//                         0,
//                         1,
//                         [
//                             {
//                                 offset: 0,
//                                 color: "rgba(137, 255, 220, .3)",
//                             },
//                             {
//                                 offset: 0.6,
//                                 color: "rgba(255,234,186,0)",
//                             },
//                             {
//                                 offset: 1,
//                                 color: "rgba(0,202,149,0)",
//                             },
//                         ],
//                         false
//                     ),
//                     shadowColor: "rgba(0,202,149, 0.9)",
//                     shadowBlur: 20,
//                 },
//                 data: [156, 65, 284, 195, 163, 163],
//             },
//         ],
//     };
// };

// export const Option9 = () => {
//     const handred = 100;
//     const point = 66;
//     return {
//         series: [
//             {
//                 name: "circle",
//                 type: "pie",
//                 clockWise: true,
//                 radius: ["50%", "66%"],
//                 itemStyle: {
//                     label: {
//                         show: false,
//                     },
//                     labelLine: {
//                         show: false,
//                     },
//                 },
//                 hoverAnimation: false,
//                 data: [
//                     {
//                         name: "剩余",
//                         value: handred - point,
//                         itemStyle: {
//                             color: "rgba(89, 93, 92, 1)",
//                             borderColor: "rgba(122, 127, 125, 1)",
//                         },
//                     },
//                     {
//                         value: point,
//                         name: "占比",
//                         itemStyle: {
//                             color: {
//                                 // 颜色渐变
//                                 colorStops: [
//                                     {
//                                         offset: 0,
//                                         color: "rgba(173, 255, 229, 0.56)", // 0% 处的颜色
//                                     },
//                                     {
//                                         offset: 1,
//                                         color: "rgba(173, 255, 229, 0.56)", // 100% 处的颜色1
//                                     },
//                                 ],
//                             },
//                             borderColor: "rgba(184, 249, 255, 1)",
//                             label: {
//                                 show: false,
//                             },
//                             labelLine: {
//                                 show: false,
//                             },
//                         },
//                     },
//                 ],
//             },
//         ],
//     };
// };
// export const option3 = {
//     tooltip: LINE_TOOLTIP,
//     legend: {
//         itemGap: 10,
//         itemWidth: 8,
//         itemHeight: 8,
//         right: "10%",
//         top: "3%",
//         // padding:[10,10],
//         data: [
//             {
//                 name: "车祸",
//                 itemStyle: {
//                     // color:"#fff",
//                 },
//                 textStyle: LEGEND,
//             },
//             {
//                 name: "路况",
//                 textStyle: LEGEND,
//             },
//         ],
//     },
//     grid: {
//         top: "30%",
//         left: "0%",
//         right: "5%",
//         bottom: "10%",
//         containLabel: true,
//     },
//     xAxis: {
//         type: "category",
//         data: ['宝安', '南山', '福田', '罗湖', '龙岗', '龙华', '盐田', '大鹏'],
//         name: "",
//         nameTextStyle: XAXIS_NAME,
//         axisLabel: AXIS_LABEL,
//         axisLine: {
//             show: true,
//         },
//         splitLine: {
//             //网格线
//             lineStyle: {
//                 color: "#6e717e",
//                 type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
//             },
//             show: false, //隐藏或显示
//         },
//     },
//     yAxis: {
//         type: "value",
//         name: "单位：件",
//         offset: -5,

//         axisLine: {
//             show: true,
//         },
//         axisLabel: AXIS_LABEL,
//         // data:[100,200,300,400],
//         nameTextStyle: YAXIS_NAME,
//         splitLine: {
//             //网格线
//             lineStyle: {
//                 color: "#6e717e",
//                 type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
//             },
//             show: true, //隐藏或显示
//         },
//     },
//     series: [
//         {
//             name: "车祸",
//             type: "bar",
//             data: (function () {

//                 const arr = []
//                 for (let i = 0; i < 13; i++) {
//                     arr.push(_.random(20, 80))
//                 }
//                 return arr;
//             })(),
//             barWidth: 5,
//             itemStyle: {
//                 // borderRadius: 4,
//                 color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
//                     {
//                         offset: 0,
//                         color: "rgb(146, 211, 255)",
//                     },
//                     {
//                         offset: 0.7,
//                         color: "rgb(101, 127, 255)",
//                     },
//                 ]),
//             },
//         },
//         {
//             name: "路况",
//             type: "bar",
//             barWidth: 5,
//             data: (function () {
//                 const arr = []
//                 for (let i = 0; i < 13; i++) {
//                     arr.push(_.random(20, 80))
//                 }
//                 return arr;
//             })(),
//             itemStyle: {
//                 // borderRadius: 4,
//                 color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
//                     {
//                         offset: 0,
//                         color: "#724c32",
//                     },
//                     {
//                         offset: 0.7,
//                         color: "#fdd095",
//                     },
//                 ]),
//             },
//         },
//         {
//             name: "意外",
//             type: "bar",
//             barWidth: 5,
//             data: (function () {
//                 const arr = []
//                 for (let i = 0; i < 13; i++) {
//                     arr.push(_.random(20, 80))
//                 }
//                 return arr;
//             })(),
//             itemStyle: {
//                 // borderRadius: 4,
//                 color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
//                     {
//                         offset: 0,
//                         color: "#eafdf7",
//                     },
//                     {
//                         offset: 0.7,
//                         color: "#9ac4a0",
//                     },
//                 ]),
//             },
//         },
//     ],
// };