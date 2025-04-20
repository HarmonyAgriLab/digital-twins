<template>
  <!--  <transition-->
  <!--      appear-->
  <!--      name="custom-classes-transition"-->
  <!--      enter-active-class="animate__animated animate__faster  animate__fadeInRight "-->
  <!--      leave-active-class="animate__animated animate__faster animate__fadeOutRight "-->
  <!--  >-->
  <transition name="el-fade-in-linear">
    <div
        v-drag
        class="preViewBox"
        v-if="dialogVisible"
        :style="{
        left: dialogPosition[0] + 'px',
        top: dialogPosition[1] + 'px',
      }"
        ref="currentDom"
    >
      <div class="header">
        {{ title }}
        <div class="close" @click="close" @mousedown.stop></div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
// 水平 Horizontal
// 竖 vertical
import {computed, defineEmits, ref} from "vue";
import {useDialogStore} from "@/stores/dialog";
import {nextZIndex} from "@/utils/common";

const emit = defineEmits(["close"]);
const props = defineProps({
  width: {
    type: Number,
    default: 324 * 1.5,
  },
  height: {
    type: Number,
    default: 194 * 1.5,
  },
  title: {
    type: String,
    default: "详细信息",
  },
  visible: {
    type: Boolean,
    default: false,
  },
  XY: {
    type: Array,
    default: () => [0, 0],
  },
  tag: {
    type: String,
    default: "",
  },
});

const currentDom = ref();
const contentSize = computed(() => ({
  width: props.width - 15,
  height: props.height - 15 - 68,
}));
const dialogStore: any = useDialogStore();
const close = () => {
  dialogStore.setDialogVisible(false);
  emit("close");

};

const dialogPosition = computed(() => {
  const moveContainer = document.body;

  let flag = props.XY?.some((item) => item);
  if (flag) return props.XY;
  //手动填写的位置不做处理
  let result = dialogStore.XY;
  let left: number = result[0];
  let top: number = result[1];

  const mw = moveContainer.offsetWidth;
  const mh = moveContainer.offsetHeight;
  if (!currentDom.value) return result;
  const ew = currentDom.value.offsetWidth;
  const eh = currentDom.value.offsetHeight;
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  currentDom.value.style.zIndex = nextZIndex();
  if (left < 0) {
    left = 0;
  }
  if (top < 0) {
    top = 0;
  }
  if (left > mw - ew) {
    left = mw - ew;
  }
  if (top > mh - eh) {
    top = mh - eh;
  }

  // console.log(mw, mh, currentDom.value)
  return [left, top];
});

const dialogVisible = computed(() => {
  if (props.tag === '') return dialogStore.dialogVisible;
  return dialogStore.dialogVisible && dialogStore.tag === props.tag;
});
</script>

<style lang="scss" scoped>
.preViewBox {
  // border: 1px solid #ccc;
  position: fixed;
  //@include boxLeft(v-bind('props.XY[0]'));
  //@include boxTop(v-bind('props.XY[1]'));
  @include boxWidth(v-bind("props.width"));
  @include boxwHeight(v-bind("props.height"));
  z-index: 99;
  background: url("~@/assets/images/dialog/popuo_bg@2x.png") no-repeat center/cover;
  font-family: Oppo, serif;
  background-size: 100% 100%;
  transition: all 0.3s;
  overflow: hidden;

  .header {
    //position: absolute;
    @include Left(0);
    @include Top(0);
    width: 100%;
    @include wHeight(30);

    @include LineHeight(28);
    @include FontSize(16);
    // border-bottom: 1px #ccc solid;
    @include Padding(1, 0, 0, 33);
    box-sizing: border-box;
    color: #ffffff;
    @include LetterSpacing(1.22);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    //background: url('~@/assets/images/dialog/popup_tiltle_bg@2x.png') no-repeat center/cover;
    // text-align: center;
    .close {
      background: url("~@/assets/images/dialog/pop_close.png") no-repeat;
      background-size: 100% 100%;
      @include Width(40);
      @include wHeight(40);
      position: absolute;
      @include Right(10);
      @include Top(-5);
      cursor: pointer;
    }

    //.close {
    //  //position: absolute;
    //  @include Right(10);
    //  // top: %;
    //  // transform: translateY(-50%);
    //  cursor: pointer;
    //  //top: 41%;
    //  margin-left: auto;
    //  @include MarginRight(5);
    //  @include MarginTop(-6);
    //}
  }

  i {
    @include FontSize(25);
    color: #fff;
    position: absolute;
    cursor: pointer;
  }

  .content {
    width: 100%;
    @include Padding(20, 20, 0, 30);
    box-sizing: border-box;
    background-size: 100% 100%;
    @include FontSize(10);
    box-sizing: border-box;
  }
}

.secondTitle {
  font-family: PingFangSC-Medium;
  //font-weight: Medium;
  @include FontSize(14);
  color: #dbd8ab;
  width: 100%;
  //background: url("~@/assets/images/基础/三级标题块/长.png") no-repeat;
  background-size: 100% 100%;
  @include Margin(6, 0, 6, 0);
  @include Padding(0, 0, 5, 35);
}

//
//.dialog-horizontal {
//  background: url("~@/assets/images/dialog/弹窗2@2x.png") no-repeat;
//  background-size: 100% 100%;
//  @include boxWidth(v-bind("props.width"));
//  @include boxhHeight(v-bind("props.height"));
//
//  .header {
//    .title {
//      color: #fff;
//      @include wHeight(50);
//      @include LineHeight(60);
//      @include PaddingLeft(15);
//      background: none;
//    }
//
//    .close {
//      @include Top(1);
//    }
//  }
//
//  .content {
//    @include Padding(10, 10, 10, 10);
//    background: none;
//  }
//}
//
//
//.dialog-vertical {
//  //background: url("~@/assets/images/dialog/弹窗@2x.png") no-repeat;
//  background-size: 100% 100%;
//  @include boxWidth(v-bind("props.width"));
//  @include boxhHeight(v-bind("props.height"));
//
//  .header {
//    .title {
//      @include wHeight(30);
//      @include LineHeight(30);
//    }
//  }
//
//  .content {
//    @include Padding(10, 10, 10, 15);
//  }
//}
</style>
