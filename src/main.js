import './assets/main.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import { createPinia } from 'pinia'
//导入持久化插件
import {createPersistedState} from'pinia-persistedstate-plugin'

import App from './App.vue'



const app = createApp(App);

const pinia = createPinia();
const persist = createPersistedState();

pinia.use(persist);
app.use(pinia);
//pinia使用持久化插件
app.use(ElementPlus);
app.use(router);
app.mount('#app');


