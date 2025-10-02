<template>

  <div class="dialog-container">
    <Right_box  class="right-box">
      <Right />
    </Right_box>
    <router-view></router-view>
  </div>

</template>

<script lang="ts" setup>

import Right from "./Right/index.vue";
import Right_box from "@/components/right_box.vue";

</script>

<style lang="scss" scoped>
.dialog-container {
  width: 100%;
  height: 100%;

  .main {
    .content {
      width: 100%;

      .chart-box {
        position: relative;
        @include Width(320);
        display: flex;
        align-items: center;

        &::after {
          position: absolute;
          content: "";
          width: calc(100% - 7.5em);
          @include wHeight(34);

          background-color: rgba(217, 184, 104, 0.2);
          left: 8.5em;
          @include Top(3);
          border: 1px solid rgba(208, 208, 220, 0.98);
        }

        .num {
          position: relative;
          @include Left(15);
          color: #ddc95a;
          @include FontSize(16);
        }
      }

      .desc {
        display: flex;
        width: 100%;
        @include Padding(10, 20, 0, 20);
      }

      .bottom-box {
        display: flex;
        @include Padding(5, 20, 10, 20);

        border-top: 1px solid #ccc;
        @include MarginTop(5);

        .left-box {
          @include MarginRight(15);
        }

        .left-box,
        .right-box {
          .row {
            .label {
              @include LineHeight(23);
            }

            .value {
              flex: 1;
              //@include LineHeight(23);

              &:deep(.el-switch) {
                --el-switch-on-color: var(--el-color-primary);
                --el-switch-off-color: var(--el-border-color-base);
                --el-switch-font-size: var(--el-font-size-base);
                --el-switch-core-border-radius: 10px;
                --el-switch-width: 7px;
                //--el-switch-height: 13px;
                //--el-switch-button-size: 10px;
              }
            }

            .btn {
              cursor: pointer;
            }
          }
        }
      }

      .left-box,
      .right-box {
        flex: 1;
        @include FontSize(16);

        .row {
          display: flex;
          @include Padding(5, 0, 5, 0);

          .label {
            width: 4em;
          }

          .value {
            //width: 7em;

            flex: 1;
            background-color: rgba(173, 255, 229, 0.5);
            @include FontSize(14);
            padding: 0.3em 0;
            text-align: center;
          }
        }
      }

      .left-box {
        @include MarginRight(15);
      }

      .right-box {
        .error-box {
          @include MarginTop(5);
          width: 100%;
          height: 3.4em;
          border: 1px solid rgb(238, 112, 123);
          display: flex;
          @include Padding(0, 5, 0, 5);
          position: relative;

          .icon {
            width: 1.5em;
            height: 1.3em;
            color: rgb(238, 112, 123);
            position: absolute;
          }

          .svg-box {
          }

          .text {
            @include MarginTop(22);
            @include MarginLeft(3);
            //@include Padding(4, 0, 4, 0);
            background-color: rgb(238, 112, 123);
            @include wHeight(26);
            @include LineHeight(26);
            width: 96%;
            justify-self: center;
            text-align: center;
            animation: flashing 1s infinite;
          }

          @keyframes flashing {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
.right-box {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  @include hHeight(1095); // 通过当前的窗口高度计算得出
  @include Width(560);
  z-index: 10;
}
</style>
