/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-02 14:37:42
 */
import { createApp } from 'vue';

// import ElementPlus from 'element-plus';
import './index.css';
import 'element-plus/dist/index.css';
import * as echarts from 'echarts';

import App from './App.vue';
import router from './router';
import store from './store/index';

// import comComponents from '@/components/index';

import toast from '@/views/web/plugins/toast/index';
import confirm from '@/views/web/plugins/confirm/index';

const app = createApp(App);

// app.use(ElementPlus);
app.use(router).use(store).mount('#app');
app.use(toast).use(confirm);
app.config.globalProperties.$echarts = echarts;

// 注册全局组件
// comComponents(app);
