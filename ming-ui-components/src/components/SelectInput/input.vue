<template>
  <div class="input-wrap">
    <label class="input-label">{{ placeholder }}</label>
    <input type="text" class="mui-input" @input="handleInputVal($event)" :value="iptVal" />
	<span class="icon iconfont icon-ai-arrow-down"></span>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';

export default {
	name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "请选择",
		},
		menuVal:{
			type:String,
			default:""
		}
	},
	setup(props, ctx){
		let state = reactive({
			iptVal:''
		})

		watch(
			() => props.menuVal,
			(val) => {
				state.iptVal = val;
		})

		const handleInputVal = (e) => {
			state.iptVal = e.target.value;
			ctx.emit("handleInputVal", state.iptVal);
		}

		return {
			handleInputVal,
			...toRefs(state)
		}
	}
};
</script>

<style scoped lang="scss">
	.input-wrap{
		position: relative;
		width: 300px;
		height: 40px;
		.input-label{
			position: absolute;
			top: 11px;
			left: 10px;
			color: #bbb;
			font-size: 14px;
		}
		.mui-input{
			width: 100%;
			height: 100%;
			outline: none;
			border: #ccc 1px solid;
			border-radius: 5px;
			padding-left: 10px;
			box-sizing: border-box;
		}
		.icon{
			position: absolute;
			width: 20px;
			height: 20px;
			top: 10px;
			right: 10px;
		}
	}
</style>
