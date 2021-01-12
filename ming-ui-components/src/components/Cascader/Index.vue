<template>
  <div class="wrap">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @description 外层主组件 Index.vue -> 内部单独一个层级的组件 CascaderItem.vue
 *                        -> 内部有多级的组件 CascaderNext.vue
 *                                          -> 负责有多级的组件 递归的单独组件 CascaderRel.vue
 */
export default {
  name:"cascader"
}
</script>

<style scoped lang="scss">
  .wrap{
    width: 300px;
    background: blueviolet;
  }
</style>