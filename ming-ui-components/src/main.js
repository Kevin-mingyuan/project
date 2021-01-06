import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MingUI from './components/index';
const app = createApp(App);

MingUI.forEach(item => {
    app.component(item.name, item);
})

app.use(store).use(router).mount('#app')
