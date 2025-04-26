import * as echarts from "echarts";
// 仪表盘
export const option1 = {
    title: {
        text: "98%",
        subtext: "在线率",
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
                        color: "#A7EBFF",
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
                            color: "#A7EBFF60", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#FFFFFF30", // 100% 处的颜色
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
                                { offset: 0, color: "#A7EBFF60" },
                                { offset: 1, color: "#FFFFFF30" },
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
const tq1 = [0, 20, 30, 60, 49, 18, 90, 48, 39, 30, 27, 40].map(
    (item) => ~~((item + 18) * 1.1)
);
const tq2 = [12, 50, 50, 27, 49, 58, 80, 80, 19, 60, 30, 30];
export const option5 = {
    // backgroundColor: '#fff',
    title: {
        text: "每月车辆违章类型占比",
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
        left: "3%",
        right: "8%",
        bottom: "10%",
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
        // formatter: function (params: any) {
        // 	return (
        // 			params[0].name +
        // 			'<br/>' +
        // 			params[0].marker +
        // 			params[0].seriesName +
        // 			' : ' +
        // 			params[0].value +
        // 			'<br/>' +
        // 			params[1].marker +
        // 			params[1].seriesName +
        // 			' : ' +
        // 			params[1].value +
        // 			'%' +
        // 			'<br/>' +
        // 			params[2].marker +
        // 			params[2].seriesName +
        // 			' : ' +
        // 			params[2].value +
        // 			'%'
        // 	);
        // },
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
                show: true,
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
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed", //虚线
                    color: "#00BFF3",
                    opacity: 0,
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
            name: "违章次数",
            type: "bar",
            stack: "总量",
            barMaxWidth: 8,
            // barGap: "10%",
            data: tq.map((item, index) => {
                return {
                    value: item,
                    itemStyle: {
                        borderRadius: 0,
                        color: "rgba(255, 255, 255, 0.32)",
                        borderWidth: 1,
                        borderColor: "rgba(255, 255, 255, 1)",
                    },
                };
            }),
        },
        {
            name: "违章次数2",
            type: "bar",
            stack: "bb",
            barMaxWidth: 8,
            // barGap: "10%",
            data: tq2.map((item, index) => {
                return {
                    value: item,
                    itemStyle: {
                        borderRadius: 0,
                        color: "rgba(221, 157, 106, 0.2)",
                        borderWidth: 1,
                        borderColor: "rgba(221, 157, 106, 1)",
                    },
                };
            }),
        },
        {
            name: "在馆人数",
            type: "line",
            data: tq1,
            symbolSize: 6,
            symbol: "emptyCircle",
            lineStyle: {
                color: "rgba(255,255,255,0.5)",
            },

            itemStyle: {
                color: "#fff",
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.5)",
                decal: {
                    symbol: "circle",
                    symbolSize: 36,
                    color: "rgba(255,255,255,0.5)",
                    backgroundColor: "rgba(255,255,255,0.5)",
                },
            },
        },
        // {
        // 	name: 'aaa',
        // 	type: "scatter",
        // 	symbolSize: 30,
        // 	itemStyle: {
        // 		color: {
        // 			type: "radial",
        // 			r: 1,
        // 			colorStops: [
        // 				{
        // 					offset: 0,
        // 					color: "#DC9E6A",
        // 				},
        // 				{
        // 					offset: 1,
        // 					color: "#DC9E6A",
        // 				},
        // 			],
        // 			global: false,
        // 		},
        // 	},
        // 	silent: true,
        // 	data: tq1,
        //
        // },
    ],
};

export const option3 = () => {
    const ydata = ["A2"]; //y轴
    const value = 50;
    const balckBar = [50]; //背景色
    const balckArr = [100];
    const rich = {
        white: {
            backgroundColor: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAZCAYAAAB6v90+AAAA2klEQVRYhe2YMUoDQRhG32zAwsKkyRGCHmE9hE3uuSkNSqogaOEBcgzXDVg+i2xhEdKYn2GWefDX33vlDCjoCu3QHrXQ68eGFUpC74EPYME0+ALahHbAOrfNldkktAfucptcmWNCzW0RQZNbIIoaVho1rDRqWGnUsNKoYaUx6bDv3BIBHBtgl9sigNeEPgDvTOsF/dgAB6AFNsCQVel/DJwaWuDA+JkTcTfo9sLnS4fOwvYDw0Bv0f2ZqJcxPG47OAx0jn7+iXobg0N306kunCXwDPwAT0AfPfgLAvYRIEVmrDQAAAAASUVORK5CYII=",
            },
            padding: [5, 0, 5, 5],
            align: "center",
            fontSize: 16,
            // lineHeight:40
            // height:20
        },
    };
    return {
        backgroundColor: "rgba(0,0,0,0)",
        grid: {
            left: "10%",
            top: 10,
            bottom: 10,
        },
        tooltip: {
            show: false,
        },
        xAxis: {
            max: 100,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: [
            {
                type: "category",
                inverse: false,
                data: ydata,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
            },
        ],
        series: [
            {
                //内
                type: "bar",
                barWidth: 5,
                legendHoverLink: false,
                silent: true,
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(156,224,99,1)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(12,245,243,1)", // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    }, //底色
                },
                label: {
                    show: false,
                    color: "#fff",
                    fontSize: 20,
                    position: "right",
                    formatter: function (data: any) {
                        return "{white|" + value + "%" + "}";
                    },
                    verticalAlign: "bottom",
                    rich: rich,
                },
                data: [value],
                z: 100,
            },
            {
                //外
                type: "bar",
                barWidth: 10,
                barGap: "-100%",
                label: {
                    show: false,
                },
                legendHoverLink: false,
                silent: true,
                data: [100],
                itemStyle: {
                    color: "rgba(45, 46, 48,0.5)",
                    borderWidth: 1,
                    borderColor: "#fff",
                },
                z: 98,
            },
            {
                //分隔
                type: "pictorialBar",
                animationDuration: 0,
                itemStyle: {
                    color: "rgba(0,0,0,0.7)",
                },
                symbolRepeat: "fixed",
                symbolMargin: "8",
                symbol: "rect",
                symbolClip: true,
                symbolSize: [4, 10],
                symbolPosition: "start",
                symbolOffset: [0, 0],
                // "symbolBoundingData": 5000,
                data: balckBar,
                z: 101,
            },
        ],
    };
};

export const option4 = () => {
    const backgroundColor = "rgba(0,0,0,0)";
    const chartdata = [
        [10, 12, 12],
        ["机器人台数", "机器人台数", "机器人台数"],
    ];

    const getmydmc = chartdata[1]; //数据点名称
    const getmyd = chartdata[0]; //收入金额
    const getmydzd = [];

    let big = 0;
    getmyd.forEach((el: any) => {
        if (!(el === undefined || el === "")) {
            if (big < Number(el)) {
                big = Number(el);
            }
        }
    });
    for (let i = 0; i < getmyd.length; i++) {
        getmydzd.push(big * 4);
    }
    //计算最大值
    function calMax(arr: any) {
        let max = 0;
        arr.forEach((el: any) => {
            el.forEach((el1: any) => {
                if (!(el1 === undefined || el1 === "")) {
                    if (max < Number(el1)) {
                        max = Number(el1);
                    }
                }
            });
        });
        const maxint = Math.ceil(max / 9.5);
        //不让最高的值超过最上面的刻度
        const maxval = maxint * 10;
        //让显示的刻度是整数
        return maxval;
    }

    const max = Math.ceil(calMax([getmyd]) / 10) * 10;
    return {
        backgroundColor: backgroundColor,
        grid: {
            left: "45%",
            right: "6%",
            bottom: "10%",
            top: "10%",
            containLabel: true,
        },
        tooltip: {
            formatter: (params: any) => {
                if (params.name !== "") {
                    return params.name + " : " + getmyd[params.dataIndex];
                }
            },
            textStyle: {
                align: "left",
            },
        },
        xAxis: [
            {
                type: "value",
                axisLabel: {
                    show: false,
                    color: "#fff",
                    formatter: function (val: any) {
                        return val + "";
                    },
                    fontSize: "13",

                },
                min: 0,
                max: max, // 计算最大值
                interval: max / 5, //  平均分为5份
                splitNumber: 5,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#fff",
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.3,
                    },
                },
                axisTick: {
                    show: false,
                },
            },
            {
                type: "value",
                axisLabel: {
                    show: false,
                },
                min: 0,
                max: max, // 计算最大值
                interval: max / 10, //  平均分为5份
                splitNumber: 10,
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: "dashed",
                        color: "#D8D8D8",
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#fff",
                    },
                },
                axisTick: {
                    show: false,
                },
            },
        ],
        yAxis: [
            {
                inverse: false,
                data: getmydmc,
                axisLabel: {
                    padding: [30, 0, 0, -100],
                    inside: true,
                    fontSize: 14,
                    fontFamily: "PingFang SC",
                    fontWeight: 400,
                    color: "#B1C3DD",
                    align: "left",

                    formatter: "{value}\n{a|占位}",
                    rich: {
                        a: {
                            color: "transparent",
                            lineHeight: 30,
                            fontFamily: "digital",
                            fontSize: 20,
                            shadowColor: "rgba(0, 0, 0, 1)",
                            shadowBlur: 10,
                        },
                    },
                },
                // offset: 0,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
            },

            {
                //左侧柱状图的Y轴
                gridIndex: 0, //y轴所在的 grid 的索引
                splitLine: "none",
                axisTick: "none",
                axisLine: "none",
                data: getmyd,
                inverse: true,
                axisLabel: {
                    show: true,
                    verticalAlign: "bottom",
                    align: "right",
                    padding: [0, -50, -10, 0],
                    color: "#fff",
                    fontSize: "20",
                    formatter: function (value: any) {
                        return "{x|" + value + "}  {y|" + "}";
                    },
                    rich: {
                        y: {
                            color: "#3dffef",
                            fontFamily: "Orbitron",
                            fontSize: 20,
                        },
                        x: {
                            color: "#3dffef",
                            fontFamily: "Orbitron",
                            fontSize: 20,
                        },
                    },
                },
            },
        ],
        dataZoom: [
            {
                type: "inside",
                show: false,
                height: 15,
                start: 1,
                end: 100,
                orient: "vertical",
                zlevel: 66,
            },
        ],
        series: [
            {
                name: "值",
                type: "bar",
                barGap: "-160%",
                // zlevel: 1,
                xAxisIndex: 0,
                label: {
                    show: false,
                    position: "right",
                    color: "#fff",
                    fontSize: 20,
                },
                itemStyle: {
                    borderRadius: 0,
                    color: {
                        colorStops: [
                            {
                                offset: 0,
                                color: "#9DFFDD", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#9DFFDD", // 100% 处的颜色
                            },
                        ],
                    },
                },
                barWidth: 5,
                data: getmyd,
                z: 0,
            },
            {
                // 分隔
                type: "pictorialBar",
                symbolRotate: "-20",
                itemStyle: {
                    color: "rgba(0, 0, 0, 1)",
                },
                symbolRepeat: "fixed",
                symbolMargin: 10,
                symbol: "rect",
                symbolClip: true,
                symbolSize: [5, 28],
                symbolPosition: "start",
                symbolOffset: [0, -1],
                data: getmyd,
                z: 66,
                animationEasing: "elasticOut",
            },
            {
                name: "背景",
                type: "bar",
                barWidth: 10,
                barGap: "-110%",
                data: getmydzd,
                itemStyle: {
                    color: "rgba(0,0,0,1)",
                    borderRadius: 2,
                    borderColor: "rgba(0, 255, 236, 1)",
                },
                z: -1,
            },
        ],
    };
};

export const option6 = () => {
    return {
        color: ["#ed9d3c", "#4fd7fd", "#33CC66", "#E4E4E4", "#CC00FF", "#169BD5"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                data: ["A区", "B区", "C区", "D区", "E区", "F区"],
                axisLabel: {
                    fontSize: "12",
                    color: "#fff",
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                minInterval: 100, //设置左侧Y轴最小刻度
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "rgba(135,140,147,0.8)",
                    },
                }, //设置横线样式
                axisLabel: {
                    fontSize: "12",
                    color: "#fff",
                },
            },
        ],
        series: [
            {
                name: "运营部",
                type: "bar",
                stack: "排名",
                barWidth: 20,
                data: [345, 132, 288, 342, 132, 288],
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(255, 232, 163, 1)", // 100% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: "rgba(255, 244, 191, 1)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(255, 244, 191, 1)", // 0% 处的颜色
                            },
                        ],
                    },
                    "transparent",
                ],
            },
            {
                name: "新媒体部",
                type: "bar",
                stack: "排名",
                data: [299, 132, 288, 432, 132, 288],
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(150, 255, 248, 1)", // 100% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: "rgba(122, 187, 182, 1)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(122, 187, 182, 1)", // 0% 处的颜色
                            },
                        ],
                    },
                    "transparent",
                ],
            },
            {
                name: "市场部",
                type: "bar",
                stack: "排名",
                data: [-399, -132, -288, -232, -132, -288],
                color: [
                    {
                        type: "linear",
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(255, 205, 170, 1)", // 100% 处的颜色
                            },
                            {
                                offset: 0.5,
                                color: "rgba(255, 125, 60, 1)", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "rgba(255, 125, 60, 1)", // 0% 处的颜色
                            },
                        ],
                    },
                    "transparent",
                ],
            },
        ],
    };
};

export const option8 = () => {
    const legendData = ["车辆数"]; //图例
    const indicator = [
        {
            text: "小型车",
            max: 6000,
        },
        {
            text: "中型车",
            max: 5000,
        },
        {
            text: "大型车",
            max: 5000,
        },
        {
            text: "货车",
            max: 5000,
        },
        {
            text: "特种车",
            max: 5000,
        },
        {
            text: "贵宾车",
            max: 5000,
        },
        {
            text: "特种车",
            max: 5000,
        },
        {
            text: "贵宾车",
            max: 5000,
        },
    ];
    const dataArr = [
        {
            value: [4000, 700, 3600, 3900, 1800, 4200, 700, 3600],
            itemStyle: {
                lineStyle: {
                    color: "#999999",
                },
            },
            areaStyle: {
                // 单项区域填充样式
                color: {
                    type: "linear",
                    x: 1, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [
                        {
                            offset: 0,
                            color: "#A8FFD5",
                        },
                        {
                            offset: 1,
                            color: "rgba(0,0,0,0)",
                        },
                    ],
                    globalCoord: false,
                },
                opacity: 1, // 区域透明度
            },
        },
    ];
    const colorArr = ["#55d7f2", "#4BFFFC"]; //颜色
    return {
        color: colorArr,
        legend: {
            orient: "vertical",
            // icon: 'circle', //图例形状
            data: legendData,
            top: 20,
            left: 20,
            itemWidth: 8, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 8, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 22, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "#00E4FF",
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                show: false,
                textStyle: {
                    color: "#fff",
                    fontSize: 16,
                },
            },
            indicator: indicator,
            splitArea: {
                // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: {
                    // 分隔区域的样式设置。
                    color: ["rgba(255,255,255,0)", "rgba(255,255,255,0)"], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                },
            },
            axisLine: {
                //指向外圈文本的分隔线样式

                lineStyle: {
                    color: "#153269",
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#999", // 分隔线颜色
                    width: 2, // 分隔线线宽
                },
            },
        },
        series: [
            {
                type: "radar",
                symbolSize: 8,
                symbol: "circle",
                data: dataArr,
            },
        ],
    };
};
