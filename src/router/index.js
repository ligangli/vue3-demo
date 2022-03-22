/*
 * @Description: 路由
 * @Author: ligang
 * @Date: 2021-12-02 14:58:57
 */
// createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/web/modules/Home.vue'); // 首页
const second = () => import('@/views/web/components/HelloWorld.vue');
const Map = () => import('@/views/web/modules/Map.vue');
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/second',
        name: 'second',
        component: second,
    },
    {
        path: '/map',
        name: 'map',
        component: Map,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
