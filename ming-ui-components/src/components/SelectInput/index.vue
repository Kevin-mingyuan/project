<template>
  <div class="select-wrap" v-focus>
    <Input :placeholder="placeholder" @handleInputVal="handleInputVal" :menuVal='valView' />
	<Menu :data="data" @handleMeunItem="handleMeunItem" :iptVal='val' />
  </div>
</template>

<script>
import Input from "./input";
import focus from "../../directive/focus";
import Menu from './menu';
import { reactive, toRefs } from 'vue';

export default {
	name: "select-input",
	props:{
		placeholder:String,
		data:Array
	},
  components: {
		Input,
		Menu
  },
  directives: {
    focus,
  },
  setup(props, ctx) {
		const state = reactive({
			val:"", //输入和菜单选择处理统一val
			valView:"", //页面渲染的文本
		})

		const handleInputVal = val => {
			state.val = val;
			ctx.emit("handleInputVal", state.val);
		}

		const handleMeunItem = menuObj => {
			const event = menuObj.event,
			valView = menuObj.itemVal.text,//显示页面
			val = menuObj.itemVal.value; //选择的value值
			
			state.valView = valView;
			ctx.emit("handleInputVal", state.val);
		}

		return {
			handleInputVal,
			handleMeunItem,
			...toRefs(state)
		}
	},
};
</script>

<style scoped lang="scss">
	.select-wrap{
		width: 300px;
		height: 40px;
		position: relative;
	}
</style>
