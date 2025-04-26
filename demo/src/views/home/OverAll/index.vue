
<template>

  <div class="dialog-container">
    <Right_box>
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

.fault-details {
  @include Padding(0, 20, 0, 0);
  display: flex;

  .left-box {
    @include Padding(0, 20, 0, 0);

    img {
      @include Width(200);
      @include wHeight(320);
      object-fit: cover;
    }
  }

  .right-box {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &:deep(.box) {
    //@include Padding(5, 0, 5, 0);
    border-radius: 0;
  }

  .row {
    display: flex;
    @include wHeight(20);
    @include LineHeight(20);
    @include FontSize(16);
    @include Margin(10, 0, 10, 0);

    .item {
      display: flex;
      flex: 1;
      @include MarginRight(40);

      .label {
        color: rgba(255, 255, 255, 0.8);
        position: relative;
        @include Padding(0, 0, 0, 10);
        width: 6em;

        &::before {
          content: "";
          position: absolute;
          background-color: rgb(213, 66, 44);
          width: 2px;
          height: 100%;
          top: 0;
          left: 0;
        }
      }

      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .sub-title {
    width: 100%;
    @include wHeight(30);
    background: rgba(213, 66, 44, 0.6);
    @include FontSize(18);
    @include LineHeight(30);
    @include PaddingLeft(10);
  }

  .bottom {
    @include Padding(10, 0, 0, 0);

    .row {
      display: flex;
      @include MarginBottom(1);
      height: auto !important;

      .label {
        //@include LineHeight(38);
      }

      .value {
        flex: 1;

        &:deep(.el-slider) {
          flex: 1;
          --el-slider-main-bg-color: rgb(213, 66, 44);
          --el-slider-runway-bg-color: var(--el-border-color-light);
          --el-slider-stop-bg-color: var(--el-color-white);
          --el-slider-disable-color: var(--el-text-color-placeholder);
        }
      }

      .right {
        flex: 1;
        //@include MarginLeft(10);

        .label {
          //@include PaddingLeft(30);
          color: #fff;
        }
      }

      .btn {
        cursor: pointer;
        flex: 1;
        text-align: center;
        border: 1px solid rgb(124, 213, 192);
        @include wHeight(30);
        @include LineHeight(30);

        &:first-child {
          @include MarginRight(3);
        }

        transition: all 0.3s;
      }

      .isActive {
        background: rgb(213, 66, 44);
        color: #fff;
      }
    }
  }
}

.traffic-lights {
  .row {
    .item {
      .label {
        &::before {
          background-color: #4081ea;
        }
      }
    }
  }

  .sub-title {
    background: rgba(64, 129, 234, 0.6);
  }
}

.wind-dialog {
  &:deep(.box) {
    @include Padding(5, 0, 5, 0);
    border-radius: 0;
  }
}

.dialog-right-box {
  display: flex;
  position: absolute;
  @include Right(20);
  //@include
  color: #59b5ffff;
  cursor: pointer;
  @include FontSize(16);
  z-index: 20;
  transition: all 0.3s;

  div {
    transition: all 0.3s;
  }

  &:deep(.el-switch) {
    @include MarginRight(30);
    @include MarginTop(-2);

    .el-switch__label {
      color: #ccc;
    }
  }
}

.tab-container {
  .tabs {
    display: flex;

    .tab-item {
      @include FontSize(17);
      width: 7em;
      position: relative;
      @include PaddingLeft(10);
      color: #ccc;
      cursor: pointer;
      transition: all 0.3s;

      &.active {
        color: #fff;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          @include Width(2);
          background-color: rgb(63, 162, 209);
        }
      }
    }
  }

  .tab-plan {
    display: flex;
    flex-direction: column;
    @include PaddingLeft(10);
    border-top: 1px solid rgb(63, 162, 209);
    @include MarginTop(10);

    .row {
      @include wHeight(60);
      display: flex;
      width: 100%;
      align-items: center;
      @include FontSize(16);

      .label {
        width: 8em;
      }
    }

    video {
      width: 100%;
      @include wHeight(220);
      object-fit: cover;
      @include MarginTop(15);
    }
  }
}
</style>
