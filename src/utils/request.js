/*
 * @Description: axios 请求封装
 * @Author: ligang
 * @Date: 2021-12-02 15:20:46
 */
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
    // 超时
    timeout: 100000,
});

// axios中请求配置有baseURL选项，表示请求URL公共部分
service.defaults.baseURL = CONFIG.api;
// request拦截器
service.interceptors.request.use(
    (config) => config,
    (error) => {
        Promise.reject(error);
    },
);

// 响应拦截器
service.interceptors.response.use((res) => {
    const { code } = res.data;
    if (code !== 200) {
        // Message.error(res.data.message)
        return Promise.reject(res.data);
    }
    return res.data;
},
(error) => Promise.reject(error));
export default service;
