/*
 * @Author: your name
 * @Date: 2022-03-27 02:04:18
 * @LastEditTime: 2022-03-29 11:25:51
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWEEKLY_ZHGK\src\utils\index.js
 */
import {onBeforeUnmount} from "vue";
import {useAirCityStore} from "@/stores/aircity";
import _ from "lodash";

const airCityStore = useAirCityStore();
const waitFor = (timeout = 100) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, timeout);
	});
};

const startMarquee = (
		marqueeObj: string | HTMLElement,
		lh: number | string,
		speed = 20,
		delay = 1000
) => {
	//lh---每行列表的高度，speed---滚动的速度，delay---间隔多久滚动一次,marqueeObj---需要实现这个效果的id
	let p = false;
	let t: any;
	let o: HTMLElement;
	if (typeof marqueeObj === "string") {
		o = document.getElementsByClassName(marqueeObj)[0] as HTMLElement;
	}
			// else if (marqueeObj instanceof HTMLElement) {
			//     o = marqueeObj
	// }
	else {
		return new Error("所给参数不正确");
	}
	try {
		o.innerHTML += o.innerHTML;
	} catch (e) {
		console.error(e);
	}

	o.style.marginTop = (0).toString();
	o.onmouseover = function () {
		p = true;
	}; //鼠标移入，停止滚动
	o.onmouseout = function () {
		p = false;
	}; //鼠标移出，继续滚动
	if (typeof lh === "string") {
		const child = o.querySelector(lh);
		lh = child?.clientHeight || 40;
	}

	function start() {
		if (typeof t === "number") clearInterval(t);

		t = setInterval(scrolling, speed); //定时器，自动滚动
		if (!p) o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
	}

	function scrolling() {
		if (parseInt(o.style.marginTop) % Number(lh) != 0) {
			o.style.marginTop = parseInt(o.style.marginTop) - 1 + "px";
			if (Math.abs(parseInt(o.style.marginTop)) >= o.scrollHeight / 2)
				o.style.marginTop = 0 + "";
		} else {
			clearInterval(t);
			t = undefined;
			setTimeout(start, delay);
		}
	}

	setTimeout(start, delay);
	onBeforeUnmount(() => {
		clearInterval(t);
	});
};
/**
 *
 * @param name string | string[]
 */
const getIdByName = (name: string | string[]): any => {
	// 添加空值保护
	if (!airCityStore.TreeInfo) {
	  console.error('TreeInfo 数据未初始化')
	  return Array.isArray(name) ? [] : ''
	}
  
	if (Array.isArray(name)) {
	  const len = name.length
	  const result: any = new Array(len).fill('')
	  // 使用可选链操作符
	  airCityStore.TreeInfo?.forEach((item: { name: string; iD: any }) => {
		const indexOf = name.indexOf(item.name)
		if (indexOf > -1) {
		  result[indexOf] = item.iD
		}
	  })
	  return result
	} else {
	  // 使用 Lodash 的 find 方法并添加类型保护
	  return _.find(airCityStore.TreeInfo, (item: any) => item.name === name)?.iD || ''
	}
  }
/**
 *
 * @param coordinates 坐标数组
 * @param time 移动时间 单位：秒
 * @return {time:number,coordinate:number[]}[]
 */
const generateCustomObjMovePath = (
		coordinates: number[][],
		time = 2
): {
	time: number;
	coordinate: number[];
}[] => {
	const pathPointArr = [];
	for (let i = 0; i < coordinates.length; i++) {
		const elementPoint = {time: i * time, coordinate: coordinates[i]};
		pathPointArr.push(elementPoint);
	}
	return pathPointArr;
};
const arr = [
	{
		cord: [
			[280.80038452148438, 839.6181640625, 0],
			[280.81845092773438, 868.82861328125, 0],
			[292.8343505859375, 868.87200927734375, 0],
			[292.44659423828125, 839.56939697265625, 0],
		],
	},
	{
		cord: [
			[280.81845092773438, 868.82861328125, 0],
			[280.87518310546875, 885.0728759765625, 0],
			[326.17068481445313, 885.0728759765625, 0],
			[326.17507934570313, 868.5374755859375, 0],
		],
	},
	{
		cord: [
			[314.35379, 868.494812, 0],
			[326.240021, 868.543945, 0],
			[326.3062744140625, 839.687255859375, 0],
			[314.51815795898438, 839.3458251953125, 0],
		],
	},
	{
		cord: [
			[314.570099, 852.491211, 0],
			[292.681458, 852.348267, 0],
			[292.499786, 839.556396, 0],
			[314.516174, 839.700989, 0],
		],
	},
];
// floor小于5 是宽的
// 6  10   14
function generatePolygon(floor: number) {
	const height = 13.9;

	const cur = arr.map((item) => {
		return {
			cord: item.cord.map((cur) => [
				cur[0] - 49,
				cur[1],
				cur[2] + height * floor,
			]),
			floor,
		};
	});

	return cur;
}

function getRandom(min: number, max: number) {
	return Math.ceil(Math.random() * (max - min) + min);
}

export function getName() {
	const familyNames = [
		"赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
		"褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
		"何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
		"陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
		"云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
		"昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
		"酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
		"倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
		"乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
		"元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
	];
	const givenNames = [
		"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
		"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
		"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
		"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
		"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
		"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
		"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
		"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
		"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
		"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "?傲", "佳昊", "天昊", "萌萌", "若萌"
	];

	const i = parseInt(String(10 * Math.random())) * 10 + parseInt(String(10 * Math.random()));

	const familyName = _.sample(familyNames);


	const j = parseInt(String(10 * Math.random())) * 10 + parseInt(String(10 * Math.random()));
	const givenName = givenNames[i];

	return (_.sample(familyNames) || '') + (_.sample(givenNames) || '')

}

export function getMobile() {

	const prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
	const i = parseInt(String(10 * Math.random()));
	let prefix = prefixArray[i];

	for (let j = 0; j < 8; j++) {
		prefix = prefix + Math.floor(Math.random() * 10);
	}

	return prefix
}

function generatePolygon2(floor: number) {

	const height = 13.9;
	const directionArr = ['北', '东', '南', '西']
	const cur = arr.map((item, index) => {
		return {
			cord: item.cord.map((cur) => [cur[0] - 49, cur[1], (cur[2] + height * floor)]),
			floor,
			id: `${floor}-${directionArr[index]}`,
			height,
			status: Math.floor(Math.random() * 3), // 0 蓝色可售   1已定绿色     2红色 已售
			squareValue: getRandom(50, 120),
			priceValue: getRandom(100, 600),
			roomNum: Math.ceil(Math.random() * 3),
			wsjNum: Math.ceil(Math.random() * 2),
			direction: directionArr[index]
		};
	});
	return cur


}

//[    x1
//     [
//         4369.577148,
//         6110.889648,
//         -4.001132
//     ]
//        y1
//     [
//         4366.241699,
//         6114.358398,
//         -4.001132
//     ],
//     [
//         4364.59375,
//         6112.769531,
//         -4.001131
//     ],
//     [
//         4367.925781,
//         6109.301758,
//         -4.001132
//     ],
// ]
const generateCoordinates = (arr: number[], vertical = true) => {
	const x1 = arr;

	if (vertical) {
		const x2 = [x1[0] - 1.6513670000003913, x1[1] - 1.587890000000698, x1[2]];
		const y1 = [x1[0] - 3.3354490000001533, x1[1] + 3.46875, x1[2]];
		const y2 = [x2[0] - 3.3320309999999154, x2[1] + 3.4677730000003066, x2[2]];
		return [x1, y1, y2, x2, x1];
	} else {
		const x2 = [x1[0] - 3.4682620000003226, x1[1] - 3.333983999999873, x1[2]];
		const y1 = [x1[0] - 1.5932620000003226, x1[1] + 1.6552730000003066, x1[2]];
		const y2 = [x2[0] - 1.5864259999998467, x2[1] + 1.6508789999998044, x2[2]];
		return [x1, y1, y2, x2, x1];
	}
};

function getPlate(total = 5) {
	const stateList =
			"京津冀晋辽吉沪苏浙皖闽琼赣鲁豫鄂湘粤渝川贵云陕甘蒙黑桂藏青宁新";
	const charList = "ABCDEFGHJKLMNQPRSTUVWXYZ";
	const numList = "1234567890";
	const halfList = [charList, numList];
	const state = dicingChar(stateList);
	const city = dicingChar(charList);
	let sequence = "";
	while (total--) {
		sequence += dicingChar(halfList[Math.round(Math.random())]);
	}
	console.log(`${state}${city} ${sequence}`);
	return `${state}${city} ${sequence}`;
}

function dicingChar(series: string) {
	return series[~~(Math.random() * series.length)];
}

const roomList1 = [
	[
		[
			4284.755859,
			5952.064453,
			8.382119
		],
		[
			4290.212891,
			5957.037109,
			8.382113
		],
		[
			4289.762695,
			5957.554199,
			8.382112
		],
		[
			4290.238281,
			5958.020996,
			8.382112
		],
		[
			4290.719238,
			5957.493652,
			8.382112
		],
		[
			4296.449219,
			5962.890625,
			8.382112
		],
		[
			4290.412109,
			5969.615723,
			8.383687
		],
		[
			4278.51416,
			5958.88916,
			8.530093
		]
	],
	[
		[
			4296.629883,
			5963.863281,
			8.382112
		],
		[
			4290.78125,
			5970.206543,
			8.382114
		],
		[
			4301.378906,
			5979.919922,
			8.382116
		],
		[
			4307.655762,
			5973.04834,
			8.382112
		],
		[
			4303.45166,
			5969.3125,
			8.382112
		],
		[
			4303.035156,
			5969.754883,
			8.382112
		],
		[
			4302.569336,
			5969.330566,
			8.382112
		],
		[
			4302.982422,
			5968.882324,
			8.382112
		],
		[
			4297.055176,
			5963.419922,
			8.382112
		]
	],
	[
		[
			4305.176758,
			5992.123047,
			8.382119
		],
		[
			4301.254883,
			5996.37793,
			8.612816
		],
		[
			4300.775391,
			5996.01123,
			8.408481
		],
		[
			4300.359375,
			5996.44873,
			8.382119
		],
		[
			4294.819336,
			5991.424316,
			8.385554
		],
		[
			4295.270508,
			5990.932617,
			8.401789
		],
		[
			4294.837402,
			5990.520996,
			8.402011
		],
		[
			4294.40918,
			5990.948242,
			8.387306
		],
		[
			4288.490234,
			5985.48877,
			8.382119
		],
		[
			4288.900391,
			5985.044922,
			8.382119
		],
		[
			4288.48291,
			5984.636719,
			8.382119
		],
		[
			4292.424805,
			5980.35498,
			8.382116
		],
		[
			4292.853027,
			5980.738281,
			8.382116
		],
		[
			4293.269531,
			5980.313965,
			8.382116
		],
		[
			4304.763672,
			5991.352539,
			9.750107
		],
		[
			4304.711914,
			5991.711426,
			8.382119
		]
	],
	[
		[
			4292.599609,
			5980.055664,
			8.382116
		],
		[
			4292.380859,
			5980.297363,
			8.382117
		],
		[
			4287.901367,
			5985.088379,
			8.38212
		],
		[
			4287.488281,
			5984.687012,
			8.382119
		],
		[
			4282.416016,
			5990.125977,
			8.382155
		],
		[
			4281.939941,
			5989.681641,
			8.382156
		],
		[
			4281.458984,
			5990.181152,
			8.382162
		],
		[
			4276.561035,
			5985.643066,
			8.38216
		],
		[
			4276.993652,
			5985.171875,
			8.382161
		],
		[
			4276.760742,
			5984.94873,
			8.38216
		],
		[
			4286.103516,
			5974.574707,
			8.382118
		],
		[
			4286.478516,
			5974.881348,
			8.382117
		],
		[
			4286.844238,
			5974.500977,
			8.382116
		]
	],
	[
		[
			4275.682617,
			5972.868652,
			8.38214
		],
		[
			4275.274902,
			5973.321289,
			8.382144
		],
		[
			4275.524414,
			5973.563965,
			8.382142
		],
		[
			4270.531738,
			5979.109375,
			8.382158
		],
		[
			4270.189453,
			5978.804199,
			8.382159
		],
		[
			4269.859863,
			5979.140137,
			8.382159
		],

		[
			4264.265625,
			5973.832031,
			8.382158
		],

		[
			4264.444824,
			5973.569824,
			8.382158
		],
		[
			4263.988281,
			5973.156738,
			8.382158
		],
		[
			4269.321289,
			5967.849609,
			8.382157
		],
		[
			4269.776855,
			5968.259766,
			8.382157
		],
		[
			4270.185547,
			5967.816895,
			8.382157
		]
	],
	[
		[
			4258.950195,
			5990.972656,
			8.38216
		],
		[
			4256.612305,
			5988.873047,
			8.38216
		],
		[
			4256.70459,
			5988.76123,
			8.38216
		],
		[
			4256.242676,
			5988.344727,
			8.38216
		],
		[
			4256.084961,
			5988.48877,
			8.38216
		],
		[
			4251.961914,
			5984.660645,
			8.38216
		],
		[
			4252.093262,
			5984.505859,
			8.38216
		],
		[
			4251.62793,
			5984.095703,
			8.38216
		],
		[
			4256.115723,
			5979.921875,
			8.382159
		],
		[
			4256.774414,
			5980.525391,
			8.382159
		],

		[
			4257.194824,
			5980.095703,
			8.382159
		],
		[
			4263.549316,
			5985.892578,
			8.38216
		]
	],
	[
		[
			4270.11377,
			6007.185547,
			8.382161
		],
		[
			4265.446777,
			6012.25293,
			8.382158
		],
		[
			4260.328125,
			6007.544922,
			8.382158
		],
		[
			4260.725098,
			6007.127441,
			8.382159
		],
		[
			4260.221191,
			6006.650391,
			8.382159
		],
		[
			4259.800781,
			6007.089355,
			8.382159
		],
		[
			4254.662109,
			6002.330078,
			8.382158
		],
		[
			4255.049805,
			6001.914551,
			8.382157
		],
		[
			4259.214844,
			5997.375488,
			8.382162
		],
		[
			4259.43457,
			5997.126465,
			8.38216
		],
		[
			4270.263184,
			6007.025879,
			8.38216
		]
	],
	[
		[
			4281.202637,
			6017.16748,
			8.382159
		],
		[
			4276.384277,
			6022.401367,
			8.382162
		],
		[
			4271.633301,
			6017.985352,
			8.382162
		],
		[
			4271.986328,
			6017.592773,
			8.382162
		],
		[
			4271.5625,
			6017.104492,
			8.38216
		],
		[
			4271.061035,
			6017.552734,
			8.38216
		],
		[
			4265.972656,
			6012.743164,
			8.382162
		],
		[
			4270.766113,
			6007.663086,
			8.205569
		]
	],
	[
		[
			4258.90918,
			5996.765137,
			8.382159
		],
		[
			4254.424805,
			6001.624512,
			8.382159
		],
		[
			4244.195801,
			5992.115234,
			8.382159
		],
		[
			4244.308594,
			5991.986816,
			8.382159
		],
		[
			4243.953125,
			5991.646484,
			8.382159
		],
		[
			4245.971191,
			5989.79248,
			8.382159
		],
		[
			4246.319336,
			5990.077637,
			8.382159
		],
		[
			4246.732422,
			5989.622559,
			8.382159
		],
		[
			4246.439941,
			5989.344238,
			8.382159
		],
		[
			4248.456055,
			5987.467285,
			8.382159
		],
		[
			4248.753906,
			5987.740234,
			8.382159
		],
		[
			4248.961914,
			5987.515625,
			8.382159
		],
		[
			4253.291992,
			5991.512207,
			8.382159
		],
		[
			4253.078613,
			5991.728027,
			8.382159
		],
		[
			4253.564453,
			5992.174316,
			8.382159
		],
		[
			4253.720703,
			5992.010254,
			8.382159
		]
	]
]
const generateRoomCoordinates = (floor: number) => {
	if (floor < 8) {
		return _.cloneDeep(roomList1).map(room => {
			let height = 0;
			return room.map(coordinate => {
				if (height === 0) {
					coordinate[2] += (floor - 1) * 8.4
					height = coordinate[2]
				} else {
					coordinate[2] = height
				}
				return coordinate
			})
		})
	}

}
export {
	waitFor,
	startMarquee,
	getIdByName,
	generateCustomObjMovePath,
	generatePolygon,
	generatePolygon2,
	getPlate,
	generateCoordinates,
	generateRoomCoordinates
};
