<template>
  <span>
    {{ displayValue }}
  </span>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame.js';

export default {
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: false,
      default: 2017
    },
    duration: {
      type: Number,
      required: false,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    decimals: {
      type: Number,
      required: false,
      default: 0,
      validator(value) {
        return value >= 0;
      }
    },
    decimal: {
      type: String,
      required: false,
      default: '.'
    },
    separator: {
      type: String,
      required: false,
      default: ','
    },
    prefix: {
      type: String,
      required: false,
      default: ''
    },
    suffix: {
      type: String,
      required: false,
      default: ''
    },
    useEasing: {
      type: Boolean,
      required: false,
      default: true
    },
    easingFn: {
      type: Function,
      default(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
      }
    }
  },
  setup(props, { emit }) {
    const localStartVal = ref(props.startVal);
    const displayValue = ref(formatNumber(props.startVal));
    const printVal = ref(null);
    const paused = ref(false);
    const localDuration = ref(props.duration);
    const startTime = ref(null);
    const timestamp = ref(null);
    const remaining = ref(null);
    const rAF = ref(null);

    const countDown = computed(() => props.startVal > props.endVal);

    function start() {
      localStartVal.value = props.startVal;
      startTime.value = null;
      localDuration.value = props.duration;
      paused.value = false;
      rAF.value = requestAnimationFrame(count);
    }

    function pauseResume() {
      if (paused.value) {
        resume();
        paused.value = false;
      } else {
        pause();
        paused.value = true;
      }
    }

    function pause() {
      cancelAnimationFrame(rAF.value);
    }

    function resume() {
      startTime.value = null;
      localDuration.value = +remaining.value;
      localStartVal.value = +printVal.value;
      rAF.value = requestAnimationFrame(count);
    }

    function reset() {
      startTime.value = null;
      cancelAnimationFrame(rAF.value);
      displayValue.value = formatNumber(props.startVal);
    }

    function count(ts) {
      if (!startTime.value) startTime.value = ts;
      timestamp.value = ts;
      const progress = timestamp.value - startTime.value;
      remaining.value = localDuration.value - progress;

      if (props.useEasing) {
        if (countDown.value) {
          printVal.value = localStartVal.value - props.easingFn(progress, 0, localStartVal.value - props.endVal, localDuration.value);
        } else {
          printVal.value = props.easingFn(progress, localStartVal.value, props.endVal - localStartVal.value, localDuration.value);
        }
      } else {
        if (countDown.value) {
          printVal.value = localStartVal.value - ((localStartVal.value - props.endVal) * (progress / localDuration.value));
        } else {
          printVal.value = localStartVal.value + (props.endVal - localStartVal.value) * (progress / localDuration.value);
        }
      }

      if (countDown.value) {
        printVal.value = printVal.value < props.endVal ? props.endVal : printVal.value;
      } else {
        printVal.value = printVal.value > props.endVal ? props.endVal : printVal.value;
      }

      displayValue.value = formatNumber(printVal.value);
      if (progress < localDuration.value) {
        rAF.value = requestAnimationFrame(count);
      } else {
        emit('callback');
      }
    }

    function isNumber(val) {
      return !isNaN(parseFloat(val));
    }

    function formatNumber(num) {
      num = num.toFixed(props.decimals);
      num += '';
      const x = num.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? props.decimal + x[1] : '';
      const rgx = /(\d+)(\d{3})/;
      if (props.separator && !isNumber(props.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + props.separator + '$2');
        }
      }
      return props.prefix + x1 + x2 + props.suffix;
    }

    watch(() => props.startVal, () => {
      if (props.autoplay) {
        start();
      }
    });

    watch(() => props.endVal, () => {
      if (props.autoplay) {
        start();
      }
    });

    onMounted(() => {
      if (props.autoplay) {
        start();
      }
      emit('mountedCallback');
    });

    onUnmounted(() => {
      cancelAnimationFrame(rAF.value);
    });

    return {
      displayValue
    };
  }
};
</script>