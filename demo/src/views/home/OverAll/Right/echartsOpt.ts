import * as echarts from "echarts";

export const optionAirHumidity = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      axisTick: {
        alignWithLabel: true
      },
      axisLine: { lineStyle: { color: '#fff' } },
      axisLabel: { color: '#fff' }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '%',
      axisLine: { lineStyle: { color: '#fff' } },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: '#444' } }
    }
  ],
  series: [
    {
      name: '空气湿度',
      type: 'bar',
      barWidth: '60%',
      itemStyle: {
        color: '#91cc75'
      },
      data: [45, 46, 47, 49, 50, 52, 55, 58, 60, 62, 64, 66, 68, 70, 72, 70, 68, 65, 62, 60, 58, 56, 50, 48]
    }
  ]
};

export const optionAirTemperature = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: { color: '#fff' }
  },
  yAxis: {
    type: 'value',
    name: '°C',
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: { color: '#fff' },
    splitLine: { lineStyle: { color: '#444' } }
  },
  series: [
    {
      name: '空气温度',
      type: 'line',
      data: [16, 15, 15, 14, 14, 15, 17, 19, 22, 24, 25, 26, 27, 28, 28, 27, 26, 24, 22, 21, 20, 19, 18, 17],
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        color: '#5470C6',
        width: 3
      },
      itemStyle: {
        color: '#5470C6'
      },
      areaStyle: {
        color: 'rgba(84,112,198,0.2)'
      }
    }
  ]
};

  
export const optionTempLine = {
    title: {
      text: '土壤温度变化',
      textStyle: {
        color: '#fff',
        fontSize: 16,
      },
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '8%',
      right: '5%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '0:00', '2:00', '4:00', '6:00', '8:00', '10:00', 
        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
      ],
      axisLabel: { color: '#ccc' },
      axisLine: { lineStyle: { color: '#888' } },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#ccc' },
      splitLine: { lineStyle: { color: '#333' } },
    },
    series: [
      {
        name: '温度 (℃)',
        type: 'line',
        smooth: true,
        data: [10, 12, 13, 15, 20, 23, 26, 28, 25, 22, 18, 14],
        lineStyle: { color: '#FFA500' },
        areaStyle: {
          color: 'rgba(255,165,0,0.2)',
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#FFA500',
          borderColor: '#fff',
          borderWidth: 2,
        },
      },
    ],
  };
  
  
export const optionConductivityLine = {
    title: {
      text: '土壤电导率',
      textStyle: {
        color: '#fff',
        fontSize: 16,
      },
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '8%',
      right: '5%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '0:00', '2:00', '4:00', '6:00', '8:00', '10:00', 
        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
      ],
      axisLabel: { color: '#ccc' },
      axisLine: { lineStyle: { color: '#888' } },
    },
    yAxis: {
      type: 'value',
      name: 'μS/cm',
      nameTextStyle: { color: '#ccc', align: 'right' },
      axisLabel: { color: '#ccc' },
      splitLine: { lineStyle: { color: '#444' } },
    },
    series: [
      {
        name: '电导率',
        type: 'line',
        smooth: true,
        data: [300, 320, 310, 350, 400, 390, 420, 430, 410, 390, 370, 360],
        lineStyle: { color: '#00E5FF' },
        areaStyle: {
          color: 'rgba(0,229,255,0.2)',
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#00E5FF',
          borderColor: '#fff',
          borderWidth: 2,
        },
        markLine: {
          data: [{ yAxis: 500 }],
          lineStyle: {
            color: '#FF4C4C',
            type: 'dashed',
          },
          label: {
            formatter: '预警值',
            color: '#FF4C4C',
          },
        },
      },
    ],
  };
  
  
export const optionPhGauge = {
    // title: {
    //   text: '土壤 pH 值',
    //   left: 'center'
    // },
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 3,
        max: 9,
        axisLine: {
          lineStyle: {
            width: 15,
            color: [
              [0.33, '#5470C6'],  // 酸
              [0.66, '#91CC75'],  // 中
              [1, '#EE6666']      // 碱
            ]
          }
        },
        pointer: {
          width: 5
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
          fontSize: 20,
          color: '#fff' // 字体颜色变成白色
        },
        data: [
          {
            value: 6.5,
            name: 'pH',
            color: '#fff' // 字体颜色变成白色
          }
        ]
      }
    ]
};




export const optionSoilStacked = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['土壤温度', '土壤湿度', '电导率'],
      top: '10px',
      textStyle: {
        color: '#fff' // 字体颜色变成白色
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '0:00', '2:00', '4:00', '6:00', '8:00', '10:00',
        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
      ],
      axisLabel: {
        color: '#fff' // 字体颜色变成白色
      },
      axisLine: {
        lineStyle: {
          color: '#fff' // 轴线颜色变成白色
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '数值',
      axisLabel: {
        formatter: '{value}',
        color: '#fff' // 字体颜色变成白色
      },
      axisLine: {
        lineStyle: {
          color: '#fff' // 轴线颜色变成白色
        }
      }
    },
    series: [
      {
        name: '土壤温度',
        type: 'line',
        stack: 'total',
        data: [10, 9, 8, 7, 8, 12, 18, 22, 21, 17, 14, 11]
      },
      {
        name: '土壤湿度',
        type: 'line',
        stack: 'total',
        data: [35, 36, 34, 33, 32, 40, 42, 44, 41, 38, 36, 35]
      },
      {
        name: '电导率',
        type: 'line',
        stack: 'total',
        data: [300, 310, 290, 305, 315, 330, 360, 370, 340, 320, 310, 300]
      }
    ]
  };
  

export const optionNpkBar = {
    tooltip: {
        trigger: 'axis', // 提示框触发类型，'axis' 表示坐标轴触发
    },
    xAxis: {
      type: 'category',
      data: ['氮', '磷', '钾'],
      axisLabel: { color: '#ccc' }, // X轴标签文字颜色
      axisLine: { lineStyle: { color: '#888' } }, // X轴轴线样式，颜色为灰色
    },
    yAxis: {
        type: 'value', // Y轴类型为数值轴
        name: 'mg/kg', // Y轴名称，表示单位
        nameTextStyle: { color: '#ccc' }, // Y轴名称文字颜色
        axisLabel: { color: '#ccc' }, // Y轴标签文字颜色
        splitLine: { lineStyle: { color: '#444' } }, // Y轴分隔线样式，颜色为深灰色
    },
    series: [
        {
            type: 'bar', // 图表类型为柱状图
            data: [60, 45, 54], // 柱状图数据，分别表示氮、磷、钾的含量
            barWidth: '30%', // 柱子的宽度，百分比表示相对于类目宽度
            itemStyle: {
                color: function (params: any) {
                    const colors = ['#73C0DE', '#FAC858', '#EE6666']; // 定义每个柱子的颜色
                    return colors[params.dataIndex]; // 根据数据索引返回对应颜色
                },
            },
            markLine: {
                data: [
                    { type: 'average', name: '平均值' }, // 添加一条表示平均值的标线
                ],
                lineStyle: {
                    type: 'dashed', // 标线样式为虚线
                    color: '#aaa', // 标线颜色为浅灰色
                },
                label: {
                    color: '#aaa', // 标线标签文字颜色
                },
            },
        },
    ],
  };


export const option1 = () => {
    const option = {
        grid: [
            {
                //左侧的柱状图grid
                width: "75%",
                left: "25%",
                top: "15",
                right: "0",
                bottom: "0",
            },
        ],
        xAxis: [
            {
                //左侧柱状图的X轴
                gridIndex: 0, //x 轴所在的 grid 的索引
                show: false,
            },
        ],
        yAxis: [
            {
                //左侧柱状图的Y轴
                gridIndex: 0, //y轴所在的 grid 的索引
                splitLine: "none",
                axisTick: "none",
                axisLine: "none",
                axisLabel: {
                    verticalAlign: "left",
                    align: "left",
                    padding: [-5, 0, 50, -70],
                    color: "#befbff",
                    fontSize: "14",
                },
                data: ["实时风速", "环境温度", "机舱温度", "有效功率"],
                inverse: true,
            },
            {
                //左侧柱状图的Y轴
                gridIndex: 0, //y轴所在的 grid 的索引
                splitLine: "none",
                axisTick: "none",
                axisLine: "none",
                data: ["70m/s", "15℃", "88℃", "38kW"],
                inverse: true,
                axisLabel: {
                    show: true,
                    verticalAlign: "bottom",
                    align: "right",
                    padding: [0, 20, 15, 0],
                    color: "#fff",
                    fontSize: "18",
                    formatter: function (value: any) {
                        return "{x|" + value + "}";
                    },
                    rich: {
                        y: {
                            color: "#befbff",
                            fontSize: 13,
                        },
                        x: {
                            color: "#befbff",
                            fontSize: 18,
                        },
                    },
                },
            },
            {
                //左侧柱状图的Y轴
                gridIndex: 0, //y轴所在的 grid 的索引
                splitLine: "none",
                axisTick: "none",
                axisLine: "none",
                data: [],
            },
        ],
        series: [
            {
                name: "值",
                type: "bar",
                xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                data: [15, 18, 10, 10],
                barWidth: 8,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        ["#57A2FF", "#39FFDC"].map((color, offset) => ({
                            color,
                            offset,
                        }))
                    ),
                    borderRadius: 10,
                },
                z: 2,
            },
            {
                name: "外框",
                type: "bar",
                xAxisIndex: 0, //使用的 x 轴的 index，在单个图表实例中存在多个 x 轴的时候有用。
                yAxisIndex: 2, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                barGap: "-100%",
                data: [100, 100, 100, 100],
                barWidth: 8,
                itemStyle: {
                    color: "#2d5271",
                    borderRadius: 6,
                },
                z: 0,
            },
            {
                // 分隔
                type: "pictorialBar",
                itemStyle: {
                    color: "#022539",
                },
                symbolRepeat: "fixed",
                symbolMargin: 4,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [2, 6],
                symbolPosition: "start",
                symbolOffset: [-1, 0],
                data: [15, 18, 10, 10],
                // symbolBoundingData: [120, 100, 90, 60, 30],
                z: 66,
                animationEasing: "elasticOut",
            },
        ],
    };

    return option;
};

export const option2 = {
    title: {
        text: "98%",
        subtext: "系统安全度",
        x: "35%",
        y: "35%",
        textAlign: "center",
        textStyle: {
            fontWeight: "500",
            color: "#00D2BA",
            fontFamily: "微软雅黑",
            fontSize: 20,
            lineHeight: "20",
        },
        subtextStyle: {
            fontWeight: "500",
            color: "#fff",
            fontFamily: "微软雅黑",
            fontSize: 14,
        },
    },
    series: [
        // 刻度
        {
            type: "gauge",
            radius: "77%", // 1行3个
            center: ["35%", "45%"],
            splitNumber: 10,
            // min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            z: 99,
            // 线
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: [[1, "rgba(255,255,255,0)"]],
                },
                detail: {
                    formatter: "{value}",
                },
                data: [
                    {
                        value: 50,
                        name: "SCORE",
                    },
                ],
            },
            //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 3, //刻度的段落数
                lineStyle: {
                    color: "#fff",
                    width: 1, //刻度的宽度
                    shadowColor: "#67FFFC",
                    shadowBlur: 1,
                },
                length: 5, //刻度的长度
            },
            splitLine: {
                //文字和刻度的偏移量
                show: false,
            },
            // //刻度线文字
            axisLabel: {
                show: false,
            },
            data: [
                {
                    // 指针指向的位置
                    value: 98,
                    name: "SCORE",
                    itemStyle: {
                        color: "#FFC87E",
                    },
                },
            ],
            pointer: {
                show: true,
                length: "15%",
                radius: "50%",
                width: 2, //指针粗细
                offsetCenter: [0, -50],
            },
            detail: {
                show: false,
            },
            title: {
                // 仪表盘标题。
                show: false,
            },
        },
        // 光边 + 指针
        {
            // name: "在线率",
            type: "pie",
            radius: ["50%", "58%"],
            center: ["35%", "46%"],
            startAngle: 180,
            endAngle: 0,
            color: [
                {
                    type: "linear",
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "transparent", // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: "#FFC87E60", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#ffffff30", // 100% 处的颜色
                        },
                    ],
                },
                "transparent",
            ],
            hoverAnimation: true,
            legendHoverLink: false,
            z: 10,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 54,
                },
                {
                    value: 50.5,
                },
            ],
        },
        // 内层阴影
        {
            type: "pie",
            hoverAnimation: false,
            label: {
                show: false,
            },
            center: ["35%", "46%"],
            radius: ["0%", "46%"],
            startAngle: 180,
            data: [
                {
                    value: 100,
                    itemStyle: {

                        color: {
                            type: "radial",
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                { offset: 0, color: "#FFC87E60" },
                                { offset: 1, color: "#ffffff30" },
                            ],
                        },
                        opacity: 0.2,
                    },
                },
                {
                    value: 100,
                    color: "transparent",
                },
            ],
        },
    ],
};

const xData = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
];
const tq = [80, 120, 30, 49, 18, 90, 48, 39, 27, 49, 58, 20];
const tq1 = [60, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40];
const tq2 = [12, 35, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];


const barData = {
    name: "今日",
    data: [120, 110, 130, 80, 160, 50, 90],
    xAxis: ["小型车", "中型车", "中小型车", "大型车"],
    color: ["#F2CC60", "rgba(242,204,96, 0.7)", "rgba(16, 162, 255, 0)"],
};
const sbarData = {
    name: "昨日",
    data: [67, 56, 45, 124, 126, 32, 50],
    xAxis: ["小型车", "中型车", "中小型车", "大型车"],
    color: ["#08CDF4", "rgba(8,205,244, 0.7)", "rgba(16, 162, 255, 0)"],
};
export const option6 = () => {
    const option = {
        title: {
            textStyle: {
                fontWeight: "normal",
                fontSize: 16,
                color: "#F1F1F3",
            },
            left: "6%",
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#57617B",
                },
            },
            backgroundColor: "rgba(0,0,0,0.5)",
            borderColor: "transparent",
            textStyle: {
                color: "#fff",
                fontSize: 16,
            },
        },
        legend: {
            show: false,
            icon: "rect",
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ["月度值", "同比"],
            right: "4%",
            textStyle: {
                fontSize: 12,
                color: "#ffffff",
            },
        },
        grid: {
            top: "15%",
            left: "8%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                //   name:'月',
                nameTextStyle: {
                    padding: [10, 0, 20],
                },
                type: "category",
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: "#ffffff",
                    },
                },
                data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            },
        ],
        yAxis: [
            {
                type: "value",
                name: "辆",
                // name: 'Precipitation',
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: "#ffffff",
                    },
                },
                axisLabel: {
                    margin: 10,
                    fontSize: 14,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#57617B",
                    },
                },
            },
            {
                type: "value",
                // name: 'Temperature',
                interval: 3,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: "#ffffff",
                    },
                },
                axisLabel: {
                    margin: 10,
                    fontSize: 14,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#57617B",
                    },
                },
            },
        ],
        series: [
            {
                name: "历史功率",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    width: 3,
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "#BEAD50",
                            },
                            {
                                offset: 0.5,
                                color: "rgba(190,173,80, 0)",
                            },
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                    shadowBlur: 10,
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "#BEAD50",
                        },
                        {
                            offset: 1,
                            color: "#BEAD50",
                        },
                    ]),
                },
                data: [250, 220, 210, 150, 180, 200, 210, 230, 250, 260, 230, 150],
            },
        ],
    };

    return option;
};

// const colorArr = ['#4A99FF', '#4BFFFC']; //颜色
export const option = {
    // backgroundColor: '#101736',
    title: {
        // text: '单位 ℃ %',
        textStyle: {
            fontSize: 12,
            fontWeight: "normal",
            color: "#b3b3b3", //标题颜色
        },
        top: "5px",
        left: "0%",
    },
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "5px",
        right: "5px",
        bottom: "5px",
        top: "50px",
        containLabel: true,
    },

    calculable: true,
    legend: {
        icon: "roundRect",
        orient: "horizontal",
        itemWidth: 15,
        itemHeight: 5,
        textStyle: {
            fontSize: 12, //字体大小
            color: "#b3b3b3", //字体颜色
        },
        right: "3%", //距离右侧
    },
    xAxis: [
        {
            type: "category",
            axisLabel: {
                interval: 0, // 解决x轴名称过长问题
                color: "#b3b3b3",
                fontSize: 14,
            },
            axisLine: {
                lineStyle: {
                    //y轴网格线设置
                    color: "#2c2c2c",
                    width: 1,
                },
            },
            data: barData.xAxis,
        },
    ],
    yAxis: [
        {
            type: "value",
            // name: "单位/个",
            // splitNumber : ,
            // boundaryGap : [ 0.3, 15 ],
            nameGap: 8,
            nameTextStyle: {
                color: "#8fd5f3",
            },

            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    //y轴网格线设置
                    color: "#2c2c2c",
                    width: 1,
                },
            },
            splitLine: {
                //保留网格线
                show: false,
                lineStyle: {
                    //y轴网格线设置
                    color: "#b3b3b3",
                    width: 1,
                },
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                color: "#b3b3b3", //字体颜色
            },
        },
    ],
    series: [
        {
            name: barData.name,
            type: "bar",

            // barGap: 5,
            z: 1,
            barWidth: 12,
            label: {
                show: false,
                position: "top",
                color: "#969a9d",
            },
            itemStyle: {
                borderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: barData.color[0],
                    },
                    {
                        offset: 0.5,
                        color: barData.color[1],
                    },
                    {
                        offset: 1,
                        color: barData.color[2],
                    },
                ]),
            },
            data: barData.data,
        },
        {
            name: sbarData.name,
            type: "bar",

            barGap: -3,
            z: 1,
            barWidth: 12,
            label: {
                show: false,
            },
            itemStyle: {
                borderRadius: [15, 15, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: sbarData.color[0],
                    },
                    {
                        offset: 0.7,
                        color: sbarData.color[1],
                    },
                    {
                        offset: 1,
                        color: sbarData.color[2],
                    },
                ]),
            },
            data: sbarData.data,
        },
    ],
};

export const option5 = {
    // backgroundColor: '#fff',
    title: {
        text: "产能收益比",
        x: "center",
        top: "15px",
        textStyle: {
            color: "#ccc",
            fontWeight: 500,
            fontSize: 18,
        },
        show: false,
    },
    grid: {
        top: "15%",
        left: "0%",
        right: "9%",
        bottom: "20%",
        containLabel: true,
    },
    tooltip: {
        show: true,
        trigger: "axis",
        backgroundColor: "rgba(0,0,0,0.6)",
        borderColor: "rgba(0,0,0,0)",
        textStyle: {
            color: "#fff",
        },
        formatter: function (params: any) {
            return (
                params[0].name +
                "<br/>" +
                params[0].marker +
                params[0].seriesName +
                " : " +
                params[0].value +
                "kw" +
                "<br/>" +
                params[1].marker +
                params[1].seriesName +
                " : " +
                params[1].value +
                "%" +
                "<br/>" +
                params[2].marker +
                params[2].seriesName +
                " : " +
                params[2].value +
                "%"
            );
        },
        axisPointer: {
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: "rgba(0, 255, 233,0)",
                        },
                        {
                            offset: 0.5,
                            color: "rgba(255, 255, 255,1)",
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 255, 233,0)",
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    xAxis: [
        {
            type: "category",
            axisLine: {
                show: false,
                color: "#aaa",
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "#aaa",
                width: 100,
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: xData,
        },
    ],

    yAxis: [
        {
            type: "value",
            name: "辆",
            nameTextStyle: {
                color: "#ccc",
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed", //虚线
                    color: "#00BFF3",
                    opacity: 0.23,
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                margin: 20,
                color: "#ccc",
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: "value",
            position: "right",
            axisLabel: {
                formatter: "{value}%", //使图变成百分比形式
                color: "#ccc",
            },
            splitLine: {
                //网格线显不显示
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: "产生电能",
            type: "bar",
            stack: "总量",
            barMaxWidth: 8,
            // barGap: "10%",
            data: tq.map((item) => {
                return {
                    value: item,
                    itemStyle: {
                        borderRadius: item > 0 ? [15, 15, 0, 0] : [0, 0, 15, 15], //左上角参数1, 右上角参数2, 右下角参数3, 左下角参数4
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: item > 0 ? "#00BFF3" : "rgba(145, 118, 215,0)",
                            },
                            {
                                offset: 1,
                                color: item > 0 ? "rgba(145, 118, 215,0)" : "#00BFF3",
                            },
                        ]),
                    },
                };
            }),
        },
        {
            name: "收益占比",
            type: "line",
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 3,
            lineStyle: {
                color: "#A582EA",
            },
            label: {
                show: false,
                position: "top",
                color: "#A582EA",
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#A582EA",
                borderWidth: 2,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "rgba(145, 118, 215,0.5)",
                        },
                        {
                            offset: 1,
                            color: "rgba(145, 118, 215,0)",
                        },
                    ],
                    false
                ),
            },
            data: tq1, //data.values
        },
        {
            name: "同比上月",
            type: "line",
            yAxisIndex: 1,
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
                color: "#64ccff",
            },
            label: {
                show: false,
                position: "top",
                color: "#64ccff",
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#64ccff",
                borderWidth: 2,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "rgba(102, 200, 253,0.5)",
                        },
                        {
                            offset: 1,
                            color: "rgba(81,150,164,0)",
                        },
                    ],
                    false
                ),
            },
            data: tq2, //data.values
        },
    ],
};
export const option7 = () => {
    const value = [0.4, 0.5, 0.6, 0.72, 0.88];

    return {
        grid: {
            top: "15%",
            left: "10%",
            right: "15%",
            bottom: "0%",
        },
        tooltip: {
            show: false,
        },
        xAxis: {
            type: "value",
            min: 0,
            max: 1,
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#ffffff",
                    width: 1,
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(96,118,173,0.3)",
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            //show: false,
            type: "category",
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                interval: 0,
                margin: 0,
                align: "right",
                padding: [0, 0, 0, 0],
                color: "#ffffff",
                fontSize: 16,
            },
            axisTick: {
                show: false,
            },
            data: ["豆芽", "花菜", "玉米", "西瓜", "西红柿"],
        },
        series: [
            {
                //真实数值条形图
                name: "真实值",
                type: "bar", //pictorialBar
                barWidth: "30%",
                itemStyle: {
                    borderWidth: 0,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#052a32",
                            },
                            {
                                offset: 1,
                                color: "#00ffe9",
                            },
                        ],
                    },
                    borderRadius: 10,
                },
                label: {
                    show: false,
                },
                data: value,
                z: 1,
            },
            {
                //辅助方格图形
                name: "辅助值",
                type: "pictorialBar",
                barWidth: "32%",
                symbol: "rect",
                symbolRepeat: "true",
                symbolMargin: "80%",
                symbolSize: ["20%", "100%"],
                symbolOffset: ["150%", "0%"],
                itemStyle: {
                    color: "rgba(10,16,30,1)",
                    borderRadius: 10,
                },
                label: {
                    color: "#fff",
                    show: false,
                    position: ["100%", "10%"],
                    fontSize: 18,
                    formatter: function (params: any) {
                        console.info(params);
                        return " " + (value[params.dataIndex] * 100).toFixed(2) + "%";
                    },
                },
                data: [1, 1, 1, 1, 1],
                z: 2,
            },
            {
                //辅助背景图形
                name: "背景条",
                type: "bar", //pictorialBar
                barWidth: "30%",
                barGap: "-100%",
                itemStyle: {
                    borderWidth: 0,
                    color: "#052a32",
                    borderRadius: 10,
                },
                data: [1, 1, 1, 1, 1],
                z: 0,
            },
        ],
    };

}
export const option8 = () => {
    return {
        tooltip: {
            //提示框组件
            trigger: "axis",
            formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
            axisPointer: {
                type: "shadow",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
            textStyle: {
                color: "#fff",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
            },
        },
        grid: {
            left: "5%",
            right: "4%",
            bottom: "0%",
            top: "20%",
            //	padding:'0 0 10 0',
            containLabel: true,
        },
        legend: {
            //图例组件，颜色和名字
            right: "5%",
            top: "11%",
            itemGap: 16,
            itemWidth: 18,
            itemHeight: 10,
            data: [
                {
                    name: "健康度",
                    //icon:'image://../wwwroot/js/url2.png', //路径
                },
                {
                    name: "可用度",
                },
            ],
            textStyle: {
                color: "#a8aab0",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12,
            },
        },
        xAxis: [
            {
                type: "category",
                //	boundaryGap: true,//坐标轴两边留白
                data: [
                    "18",
                    "23",
                    "25",
                    "28",
                    "30",
                    "33",
                    "35",
                    "40",
                    "18",
                    "23",
                    "25",
                    "28",
                    "30",
                    "33",
                    "35",
                    "40",
                ],
                axisLabel: {
                    //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    color: "#078ceb",
                    fontStyle: "normal",
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                    rotate: 50,
                },
                axisTick: {
                    //坐标轴刻度相关设置。
                    show: false,
                },
                axisLine: {
                    //坐标轴轴线相关设置
                    lineStyle: {
                        color: "#fff",
                        opacity: 0.2,
                    },
                },
                splitLine: {
                    //坐标轴在 grid 区域中的分隔线。
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                splitNumber: 5,
                axisLabel: {
                    color: "#a8aab0",
                    fontStyle: "normal",
                    fontFamily: "微软雅黑",
                    fontSize: 12,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#fff"],
                        opacity: 0.06,
                    },
                },
            },
        ],
        series: [

            {
                name: "可用度",
                type: "bar",
                data: [8, 5, 25, 30, 35, 55, 62, 78, 65, 55, 60, 45, 42, 15, 12, 5],
                barWidth: 10,
                barGap: 0, //柱间距离
                // label: {//图形上的文本标签
                //     normal: {
                //       show: true,
                //       position: 'top',
                //       textStyle: {
                //           color: '#a8aab0',
                //           fontStyle: 'normal',
                //           fontFamily: '微软雅黑',
                //           fontSize: 12,
                //       },
                //     },
                // },
                itemStyle: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "#69CBF2",
                        },
                        {
                            offset: 1,
                            color: "#69CBF2",
                        },
                    ]),
                    borderRadius: 50,
                    borderWidth: 0,
                },
            },
        ],
    };

}
export const option9 = {
    // backgroundColor: "#080b30",
    title: {
        show: false,
        text: "",
        textStyle: {
            align: "center",
            color: "#fff",
            fontSize: 20,
        },
        top: "5%",
        left: "center",
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: "rgba(0, 255, 233,0)",
                        },
                        {
                            offset: 0.5,
                            color: "rgba(255, 255, 255,1)",
                        },
                        {
                            offset: 1,
                            color: "rgba(0, 255, 233,0)",
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    grid: {
        top: "10%",
        left: "5%",
        right: "15%",
        bottom: "25%",
        containLabel: true,
    },
    xAxis: [
        {
            type: "category",
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: "#f00",
                lineStyle: {
                    color: "#f00",
                },
            },
            axisLabel: {
                color: "#fff",
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ["保洁", "保安", "志愿者", "前台", "经理"],
        },
    ],

    yAxis: [
        {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                color: "#d1e6eb",
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: "注册总量",
            type: "line",
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
                color: "#00ca95",
                // shadowColor: "rgba(0, 0, 0, .3)",
                // shadowBlur: 0,
                // shadowOffsetY: 5,
                // shadowOffsetX: 5,
            },
            label: {
                show: true,
                position: "top",
                color: "#00ca95",
            },

            itemStyle: {
                color: "#00ca95",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: "rgba(0, 0, 0, .3)",
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "rgba(0,202,149,0.3)",
                        },
                        {
                            offset: 1,
                            color: "rgba(0,202,149,0)",
                        },
                    ],
                    false
                ),
                shadowColor: "rgba(0,202,149, 0.9)",
                shadowBlur: 20,
            },
            data: [256, 165, 384, 295, 263],
        },
    ],
};