/* eslint-disable import/no-unresolved */
/*
 * @Description: vite.config
 * @Author: ligang
 * @Date: 2021-12-02 14:45:05
 */
// 为打包后的文件提供传统浏览器兼容性支持
// import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
// import copy from 'rollup-plugin-copy'; // 引入插件 尝试没起作用

import { defineConfig } from 'vite';
// eslint-disable-next-line import/extensions
import AutoImport from 'unplugin-auto-import/vite';
// eslint-disable-next-line import/extensions
import Components from 'unplugin-vue-components/vite';
// eslint-disable-next-line import/extensions
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const { resolve } = require('path');

// console.log('环境变量',loadEnv(mode, process.cwd()).DEV );
export default defineConfig({
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // copy({
        //     targets: [
        //         { src: '/map/mapTemplate/*', dest: 'dist/map' }, // 执行拷贝
        //     ],
        // }),
        // legacy({
        //     targets: ['defaults', 'not IE 11'],
        //     polyfills: ['es.promise.finally', 'es/map', 'es/set'],
        //     modernPolyfills: ['es.promise.finally'],
        // }), // vite打包的项目在部分浏览器上无法跳转/空白页解决办法
    ],
    resolve: {
        // alias: {
        //     '@': resolve(__dirname, 'src'), // 这个好像也可以 --设置 `@` 指向 `src` 目录
        // },
        alias: [{
            find: '@',
            replacement: resolve(__dirname, 'src'),
        }],
    },
    base: './', // git打包地址
    build: {
        sourcemap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
        assetsDir: 'static',
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            // external: ['vue', 'nf-tool'],
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                // globals: {
                //   vue: 'Vue',
                //   'nf-tool': 'nfTool'
                // }
            },
        },
        // terserOptions: {
        //     compress: {
        //         // 生产环境去除console
        //         drop_console: true,
        //         drop_debugger: true,
        //     },
        // },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
              `
                @import "@/style/global.scss";
                @import "@/style/reset.scss";
              `,
            },
        },
    },
    server: {
        open: true,
        hmr: {
            overlay: false,
        },
    },
});
