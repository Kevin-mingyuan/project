<template>
  <div id="nav">
    <select-input 
      :data="data" 
      placeholder="请输入你的信息"
      @handleInputVal="handleInputVal"
    />
    {{val}}
    <div style="width:30px;height:30px;border:1px solid red" class="iconfont icon-xingxing">123</div>
  </div>
  <router-view/>
</template>
<script>
import data from './mock/dataList';
import { reactive, toRefs } from 'vue';

export default {
  name:"APP",
  setup(props, ctx){
    const state = reactive({
      val:""
    })
    
    const handleInputVal = (val) => {
      console.log(val , '返回值')
      state.val = val;
    }
    return {
      handleInputVal,
      ...toRefs(state),
      data
    }
  }
}
</script>

<style lang="scss">
@import './iconFont/iconfont.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
