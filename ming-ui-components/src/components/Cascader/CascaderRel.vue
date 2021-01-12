<template>
	<div class="cascader-rel">
		<cascader-next>
			<template #title>{{data.title}}</template>
			<template v-for="c of data.children" >
				<cascader-item v-if="!c.children" :key="c.id">
					<div>{{c.title}}</div>
				</cascader-item>
				<cascader-rel 
					v-else
					:key="c.id"
					:data="c"
				></cascader-rel>
			</template>
		
		</cascader-next>
	</div>
</template>

<script>

export default {
	name: "cascader-rel",
	props:{
		data:Object,
	}
};
</script>

<style scoped lang="scss">

</style>
