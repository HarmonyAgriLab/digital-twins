< <template>
    <!-- 播放器组件 -->
    <div>
        
        <!-- <Player /> -->
        <router-view/>
        <HeaderLink/>
        <Header v-if="!UIShow" />
        <img :src="defaultImg" alt="default image">
    </div>
   
</template> 
<script lang="ts" setup>
// 显示组件
// EDTS各种模型项目最终default.png
import Player from '@/components/player/player.vue'
import HeaderLink from '@/components/headerlink/index.vue'
import Header from '@/components/header/index.vue'
import defaultImg from '@/assets/default.png'


// 导入计算属性和挂载钩子
import { computed } from 'vue'

// 导入工具状态管理仓库
import { useToolsStore } from '@/stores/tools'
// 获取工具状态管理仓库实例
const ToolsStore = useToolsStore()

// 计算显示状态
// const LayerTreeShow = computed(() => ToolsStore.$state.LayerTreeShow)
// const AnimationShow = computed(() => ToolsStore.$state.AnimationShow)
// const SkyBoxShow = computed(() => ToolsStore.$state.SkyBoxShow)
// const WeatherShow = computed(() => ToolsStore.$state.WeatherShow)
// const TooBarShow = computed(() => ToolsStore.TooBarShow)
const UIShow = computed(() => ToolsStore.$state.UIShow)

// 返回按钮的点击处理函数：设置UIShow为false，隐藏UI，并调用全局设置隐藏主UI的函数
// const back = () => {
//     const val = !UIShow.value
//     ToolsStore.$state.UIShow = false
//     __g.settings.setMainUIVisibility(false)
// }

</script>

<style lang="scss" scoped>

</style>