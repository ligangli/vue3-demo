/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-13 15:35:15
 */
import { createApp } from 'vue';

import ToastConstructor from './index.vue';

let $vm;
const plugins = {
    install(app) {
        const toast = {
            show(options) {
                const mnode = createApp(ToastConstructor, options);
                if (!$vm) {
                    const parent = document.createElement('div');
                    const dom = document.body.appendChild(parent);
                    $vm = mnode.mount(dom);
                    // eslint-disable-next-line no-underscore-dangle
                    $vm.appContext = app._context;
                }
                if (typeof options === 'object') {
                    $vm.cancelText = options.cancelText || '取消';
                    $vm.confirmText = options.confirmText || '确定';
                    $vm.newsTitle = options.newsTitle || '';
                    $vm.showValue = true;
                } else {
                    $vm.showValue = false;
                }
                $vm.showValue = true;
            },
            hide() {
                $vm.showValue = false;
            },
        };
        console.log(app, 'app------------------');
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.$toast = toast;
    },
};
export default plugins;
