<template>
  <div
    class="next-wrap"
    v-show="show"
    @mouseenter="handleEnter($event)"
    @mouseleave="handleLeave($event)"
  >
    <div class="title">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-show="subShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: "cascader-next",
  setup() {
    const state = reactive({
      show: true,
      subShow: false,
    });

    const handleEnter = (e) => {
      console.log(e, "222");
      state.subShow = true;
    };

    const handleLeave = (e) => {
      console.log(11);
      state.subShow = false;
    };

    return {
      ...toRefs(state),
      handleEnter,
      handleLeave,
    };
  },
};
</script>

<style lang="scss" scoped>
.next-wrap {
  width: 300px;
  position: relative;

  .title {
    line-height: 50px;
    height: 50px;
  }

  .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .sub-item {
    position: absolute;
    left: 100%;
    top: 0;
    background: #ccc;
    width: 300px;
  }
}
</style>
