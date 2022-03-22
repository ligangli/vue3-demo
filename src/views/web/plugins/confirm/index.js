/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2021-12-13 15:35:15
 */
import { createVNode, render } from 'vue';

import ConfirmConstructor from './index.vue';

const { body } = document;
const root = document.createElement('div');
body.appendChild(root);
root.className = 'custom-root';
let vm;
const plugins = {
    install(app) {
        const confirm = {
            show(options) {
                if (!vm) {
                    const div = document.createElement('div');
                    root.appendChild(div);
                    // com 为自己写的组件,  SoltChild 可以是自己的子组件 ，也可以不传
                    vm = createVNode(ConfirmConstructor, options, {
                        // slots
                        default: () => createVNode(),
                    });
                    // eslint-disable-next-line no-underscore-dangle
                    vm.appContext = app._context; // 这句很关键，关联起了数据
                    render(vm, div);
                }
                if (typeof options === 'object') {
                    vm.component.proxy.showValue = true;
                    console.log(options, 'options---');
                    vm.component.proxy.cancelText = options.cancelText;
                    vm.component.proxy.confirmText = options.confirmText;
                    vm.component.proxy.newsTitle = options.newsTitle;

                    console.log(vm, 'vm---------');
                } else {
                    vm.component.proxy.showValue = false;
                }
            },
            hide() {
                vm.component.proxy.showValue = false;
            },
        };
        // eslint-disable-next-line no-param-reassign
        app.config.globalProperties.$confirm = confirm;
    },
};
export default plugins;
