<template>
	<ul class="menu-ul" v-if="data.length > 0">
		<li
			class="menu-ul-item"
			v-for="(item, index) in dataList"
			:id="item.id"
			:key="index"
			:data-val="item.value"
			@click="handleMeunItem($event, item)"
		>
			{{item.text}}
		</li>
	</ul>
</template>

<script>
import { reactive, toRefs, watch, onMounted } from 'vue';

export default {
	name:"Menu",
	props:{
		data:{
			type:Array,
			default:()=>[]
		},
		iptVal:String
	},
	setup(props, ctx){
		const state = reactive({
			menuValObj:"",
			dataList:[]
		})

		onMounted(()=>{
			state.dataList = props.data;
		})

		watch(
			() => props.iptVal,
		 	val =>{
				state.dataList = props.data.filter(item => item.text.toLocaleLowerCase().includes(val.toLocaleLowerCase()));
		})

		const handleMeunItem = (e, item) => {
			state.menuValObj = {
				event:e,
				itemVal:item
			}
			ctx.emit('handleMeunItem', state.menuValObj);
		}

		return {
			handleMeunItem,
			...toRefs(state)
		}
	}
};
</script>

<style scoped lang="scss">
	.menu-ul{
		display: none;
		position: absolute;
		top: 43px;
		left:0;
		list-style: none;
		background: #ccc;
		border-left: 1px solid #aaa;
		border-right: 1px solid #aaa;
		padding: 0;
		margin: 0;
		width: 100%;
		border-radius: 3px;
		.menu-ul-item{
			border-top: 1px solid #bbb;
			&:hover{
				background: cornflowerblue;
			}
			&:last-child{
				border-bottom: 1px solid #bbb;
			}
		}
	}
</style>
