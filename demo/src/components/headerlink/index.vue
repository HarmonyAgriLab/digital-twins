<template>
    <div class="warp">
        <!-- Footer 容器 -->
        <div class="footer">
            <!-- Footer 链接容器 -->
            <div class="footer_link">
                <!-- 遍历 Link 数组，生成每个链接项 -->
                <div 
                    @click="LinkClick(item)" 
                    :class="PagePath.indexOf(item.path) !== -1 ? 'link isactive' : 'link'" 
                    v-for="item in Link" 
                    :key="item.key"
                >
                    <!-- 链接名称 -->
                    <div class="link_name">
                        {{ item.name }}
                    </div>

                    <!-- 使用 transition 组件实现子链接的淡入淡出动画，延迟1秒 -->
                    <transition 
                        appear 
                        name="custom-classes-transition" 
                        enter-active-class="animate__animated animate__delay-1s animate__fadeIn" 
                        leave-active-class="animate__animated animate__fadeOut"
                    >
                        <!-- 当前路径包含 item.path 且存在子链接时显示子链接容器 -->
                        <div v-if="item.children && PagePath.indexOf(item.path) !== -1" class="toplinks" @click.stop>
                            <!-- 遍历子链接数组，生成每个子链接项 -->
                            <div 
                                @click.stop="MonLinkClick(mon)" 
                                :class="PagePath.indexOf(mon.path) !== -1 ? 'toplink toplink_active' : 'toplink'" 
                                v-for="mon in item.children" 
                                :key="mon.key"
                            >
                                <!-- 子链接名称 -->
                                <span>
                                    {{ mon.name }}
                                </span>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

// 定义 Link 数据结构
interface LinkItem {
    name: string;
    key: number;
    path: string;
    icon?: string;
    img?: any;
    activeImg?: any;
    children?: Array<{ name: string; key: number; path: string }>; // 明确 children 类型
}

// 路由监听
onBeforeRouteUpdate(to => {
    console.log("to is", to);
    PagePath.value = to.path
})

const Key = computed(() => {
    let key = ref<number | undefined>(undefined); // 明确 key 类型
    switch (PagePath.value.split('/')[2]) {
        case 'indoor':
            key.value = 75;
            break;
        case 'outdoor':
            key.value = 250;
            break;
        case 'ComprehensiveSituational':
            key.value = 595;
            break;
        case 'CarSituation':
            key.value = 495;
            break;
        case 'EnergyConsumption':
            key.value = 195;
            break;
        default:
            break;
    }
    return key.value;
});


// TODO: 美化布局和图标
// TODO: 完善子链接
const Link = reactive<LinkItem[]>([
    {
        name: '首页',
        key: 1,
        path: '/home',
        // icon: 'jianceyujing',
        // img: require('@/assets/images/link/zonlan.png'),
        // activeImg: require('@/assets/images/link/zonlan1.png'),
        // TODO：/home/test
        // children: [ // 添加子链接
        //     { name: '子链接1', key: 1, path: '/home/Child1' },
        //     { name: '子链接2', key: 2, path: '/home/Child2' }
        // ]
    },
    {
        name: '种植情况',
        key: 2,
        path: '/home/OverAll',
        icon: 'zhongzhiqingkuang',
        // img: require('@/assets/img/'),
        children: [
            {
                name: '控制',
                key: 1,
                path: '/home/OverAll/shinei'
            },
            {
                name: '无人机',
                key: 2,
                path: '/home/OverAll/shiwai'
            }
        ]
    },
    // {
    //     name: '室内',
    //     key: 3,
    //      path: '/home/OverAll/shinei'
    //     // icon: 'jianceyujing',
    //     // img: require('@/assets/images/link/zonlan.png'),
    //     // activeImg: require('@/assets/images/link/zonlan1.png'),
    // },
    // {
    //     name: '室外',
    //     key: 2,
    //     path: '/home/OverAll/shiwai'
    //     // icon: 'jianceyujing',
    //     // img: require('@/assets/images/link/zonlan.png'),
    //     // activeImg: require('@/assets/images/link/zonlan1.png'),
    // }
]);

const Router = useRouter();
const Route = useRoute();
const PagePath = ref('');

// 一级路由点击
const LinkClick = (val: LinkItem) => {
    Router.push({
        path: val.path
    });
    PagePath.value = val.path;
};

// 子链接点击
const MonLinkClick = (mon: { name: string; key: number; path: string }) => {
    Router.push({
        path: mon.path
    });
    PagePath.value = mon.path;
};

onMounted(() => {
    PagePath.value = Route.path;
});
</script>

<style lang="scss" scoped>
.warp {
    position: absolute;
    @include Width(340); // 通过当前的窗口宽度计算得出
    background: linear-gradient(89.5deg, rgba(10, 19, 28, 0.8) 0%, rgba(15, 28, 40, 0.6) 41%, rgba(16, 28, 40, 0.4) 68%, rgba(16, 29, 41, 0) 100%);
    @include hHeight(1095); // 通过当前的窗口高度计算得出

    z-index: 100;
    .footer {
        position: absolute;
        @include Top(0); 
        @include Left(30);
        @include Width(400);
        right: 0;
        margin: 0 0 0 -100px;
        z-index: 10;
        @include hHeight(400);

        .footer_link {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            @include Top(150);
            @include hHeight(200);
            margin: auto;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .link {
                @include Width(300);
                @include hHeight(38);
                @include Margin(0, 2, 0, 50);
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                cursor: pointer;
                @include FontSize(18);
                transition: all 0.5s;

                .link-img {
                    @include Width(26.5);
                    transition: all 0.3s;
                    height: 100%;
                    margin-right: 10px;
                    img {
                        @include wHeight(26.5);
                        @include Width(26.5);
                        transition: all 0.3s;
                        position: absolute;
                        transform: translate(0, 20%);
                    }
                }

                &.isactive {
                    background-size: 100% 100%;
                    color: rgb(179, 247, 91);
                    @include LetterSpacing(1);
                    border-bottom: 1px #94e5f9 solid;
                    border-image: linear-gradient(to right, #94e5f9, #b2d4e6) 1 10;

                    .link_name {
                        background-image: -webkit-linear-gradient(left, #94e5f9, #b2d4e6);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-weight: bold;
                    }
                }

                &.link::before {
                    // background: rgb(207, 10, 10);
                    content: '';
                    position: absolute;
                    @include Width(22);
                    @include wHeight(22);
                    @include Left(-37);
                }

                &.link:nth-of-type(1)::before {
                    // background: rgb(207, 10, 10);
                    content: '';
                    position: absolute;
                    @include Width(94);
                    @include wHeight(10);
                    @include Left(-94);
                }

                &.link:last-child::after {
                    // background: rgb(207, 10, 10);
                    content: '';
                    position: absolute;
                    @include Width(94);
                    @include wHeight(10);
                    // @include Left(94);
                    left: 100%;
                }

                .link_name {
                    @include LetterSpacing(2);
                    font-family: Oppo, serif;
                    font-size: 20px;
                    color: rgba(255, 255, 255, 1);
                    font-weight: 500;
                    font-family: 'OPPOSans';
                }

                .toplinks {
                    position: absolute;                 // 相对定位，相对于浏览器窗口定位
                    @include Top(100);                  // 从底部偏移105单位（使用mixin设置bottom值）
                    left: 0;                            // 左边距离为0
                    right: 0;                           // 右边距离为0
                    margin: auto;                       // 自动边距，配合left:0和right:0实现水平居中
                    @include Width(180);                // 增加宽度以适应更美观的布局
                    @include hHeight(180);              // 高度为400单位（使用mixin基于视口高度计算）
                    display: flex;                      // 使用弹性布局
                    flex-direction: column;             // 弹性盒子主轴方向为垂直方向（子元素垂直排列）
                    justify-content: space-around;      // 主轴方向上均匀分布子元素，两端保留一半间距
                    align-items: center;                // 交叉轴方向居中对齐
                    z-index: 10;                        // 设置元素层级为10，控制堆叠顺序
                    @include MarginLeft(120);                 // 水平偏移20单位，微调位置
                    // 添加背景和边框美化
                    background: rgba(193, 255, 169, 0.05);
                    border-radius: 10px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(148, 229, 249, 0.3);
                    padding: 10px 0;

                    .toplink {
                        @include Width(160);
                        @include wHeight(45);
                        @include Margin(5, 0, 5, 0);
                        @include FontSize(16);
                        color: #a0d8f1;
                        display: flex;
                        font-family: Oppo, serif;
                        font-weight: 500;
                        
                        justify-content: center;
                        align-items: center;
                        
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 8px;
                        transition: all 0.3s ease;
                        cursor: pointer;

                        &:hover {
                            background: rgba(148, 229, 249, 0.2);
                            color: #fff;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                        }

                        &.toplink_active {
                            background: linear-gradient(90deg, rgba(148, 229, 249, 0.3), rgba(178, 212, 230, 0.3));
                            color: #fff;
                            font-weight: bold;
                            border: 1px solid rgba(148, 229, 249, 0.5);
                            
                            //     font-size: 3000px;
                            //     color: #2104fe;
                            //     transform: scale(5);
                            // }
                        }
                    }
                }
            }
        }
    }
}
</style>
