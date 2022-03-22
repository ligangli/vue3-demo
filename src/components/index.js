/*
 * @Description: 1
 * @Author: ligang
 * @Date: 2022-01-07 20:35:01
 */
function getComName(str) {
    const reg = /(.*)?\/([a-zA-Z0-9]+)\.vue/;
    return str.replace(reg, '$2');
}

// 返回当前目录文件下带vue的文件
const files = import.meta.globEager('/src/components/*.vue');

export default (app) => {
    Object.keys(files).forEach((com) => {
        const component = files[com]?.default;
        const componentName = getComName(com);
        // 挂载全局控件
        app.component(componentName, component);
    });
};
