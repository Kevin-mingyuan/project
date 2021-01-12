<template>
 <div class="cascader-item">
	 <slot></slot>
 </div>
</template>

<script>
export default {
  name: "cascader-item",
};
</script>

<style lang="scss" scoped>
	.cascader-item{
		width: 300px;
		line-height: 50px;
		position: relative;
	}
</style>
