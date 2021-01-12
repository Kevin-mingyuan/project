<template>
  <div id="nav">
    <cascader>
        <template v-for="item in data">
          <cascader-item v-if="!item.children" :key="item.id">{{item.title}}</cascader-item>
          <template v-else>
            <cascader-rel :key="item.id" :data="item"></cascader-rel>
          </template>
        </template>
    </cascader>
  </div>
  <router-view/>
</template>
<script>
import { reactive, toRefs } from 'vue';
import data from './mock/Cascader';
import Cascader from './components/Cascader/Cascader.vue';
import CascaderItem from './components/Cascader/CascaderItem.vue';

export default {
  components: { Cascader, CascaderItem },
  name:"APP",
  setup(props, ctx){
    const state = reactive({
      data
    })
    return {
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
