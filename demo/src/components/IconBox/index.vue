<template>
  <div class="icon-box">
    <slot>
      <img src="@/assets/images/home/icon_thiingcount@2x.png">
    </slot>
  </div>
</template>

<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: "index",
  props: {
    width: {
      type: [String, Number],
      default: 41
    },
    height: {
      type: [String, Number],
      default: 41
    }
  },
  setup(props) {

    return {
      props
    }
  }
})
</script>

<style lang="scss">

.icon-box {
  @include boxWidth(v-bind('props.width'));
  @include boxwHeight(v-bind('props.height'));


  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>